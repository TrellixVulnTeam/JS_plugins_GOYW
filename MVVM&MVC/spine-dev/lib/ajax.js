// Generated by CoffeeScript 1.9.3
(function() {
  var $, Ajax, Base, Collection, Extend, GenerateURL, Include, Model, Queue, Singleton, Spine,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Spine = this.Spine || require('spine');

  $ = Spine.$;

  Model = Spine.Model;

  Queue = $({});

  Ajax = {
    getURL: function(object) {
      if (object.className != null) {
        return this.generateURL(object);
      } else {
        return this.generateURL(object, encodeURIComponent(object.id));
      }
    },
    getCollectionURL: function(object) {
      return this.generateURL(object);
    },
    getScope: function(object) {
      return (typeof object.scope === "function" ? object.scope() : void 0) || object.scope;
    },
    getCollection: function(object) {
      if (object.url !== object.generateURL) {
        if (typeof object.url === 'function') {
          return object.url();
        } else {
          return object.url;
        }
      } else if (object.className != null) {
        return object.className.toLowerCase() + 's';
      }
    },
    generateURL: function() {
      var args, collection, object, path, scope;
      object = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      collection = Ajax.getCollection(object) || Ajax.getCollection(object.constructor);
      scope = Ajax.getScope(object) || Ajax.getScope(object.constructor);
      args.unshift(collection);
      args.unshift(scope);
      path = args.join('/');
      path = path.replace(/(\/\/)/g, "/");
      path = path.replace(/^\/|\/$/g, "");
      if (path.indexOf("../") !== 0) {
        return Model.host + "/" + path;
      } else {
        return path;
      }
    },
    enabled: true,
    disable: function(callback) {
      var e;
      if (this.enabled) {
        this.enabled = false;
        try {
          return callback();
        } catch (_error) {
          e = _error;
          throw e;
        } finally {
          this.enabled = true;
        }
      } else {
        return callback();
      }
    },
    queue: function(request) {
      if (request) {
        return Queue.queue(request);
      } else {
        return Queue.queue();
      }
    },
    clearQueue: function() {
      return this.queue([]);
    },
    config: {
      loadMethod: 'GET',
      updateMethod: 'PUT',
      createMethod: 'POST',
      destroyMethod: 'DELETE'
    }
  };

  Base = (function() {
    function Base() {}

    Base.prototype.defaults = {
      dataType: 'json',
      processData: false,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };

    Base.prototype.queue = Ajax.queue;

    Base.prototype.ajax = function(params, defaults) {
      return $.ajax(this.ajaxSettings(params, defaults));
    };

    Base.prototype.ajaxQueue = function(params, defaults, record) {
      var deferred, jqXHR, parallel, promise, request, settings;
      jqXHR = null;
      deferred = $.Deferred();
      promise = deferred.promise();
      if (!Ajax.enabled) {
        return promise;
      }
      settings = this.ajaxSettings(params, defaults);
      parallel = settings.parallel !== void 0 ? settings.parallel : settings.type === 'GET';
      request = function(next) {
        var ref, reject, resolve;
        if ((record != null ? record.id : void 0) != null) {
          if (settings.url == null) {
            settings.url = Ajax.getURL(record);
          }
          if ((ref = settings.data) != null) {
            ref.id = record.id;
          }
        }
        if (typeof settings.data !== 'string' && settings.processData !== true) {
          settings.data = JSON.stringify(settings.data);
        }
        resolve = function() {
          return deferred.resolve.apply(this, slice.call(arguments).concat([settings]));
        };
        reject = function() {
          return deferred.reject.apply(this, slice.call(arguments).concat([settings]));
        };
        jqXHR = $.ajax(settings);
        jqXHR.done(resolve);
        jqXHR.fail(reject);
        jqXHR.then(next, next);
        if (parallel) {
          return Queue.dequeue();
        }
      };
      promise.abort = function(statusText) {
        var index;
        if (jqXHR) {
          return jqXHR.abort(statusText);
        }
        index = $.inArray(request, this.queue());
        if (index > -1) {
          this.queue().splice(index, 1);
        }
        deferred.rejectWith(settings.context || settings, [promise, statusText, '']);
        return promise;
      };
      this.queue(request);
      return promise;
    };

    Base.prototype.ajaxSettings = function(params, defaults) {
      return $.extend({}, this.defaults, defaults, params);
    };

    return Base;

  })();

  Collection = (function(superClass) {
    extend(Collection, superClass);

    function Collection(model) {
      this.model = model;
      this.failResponse = bind(this.failResponse, this);
      this.recordsResponse = bind(this.recordsResponse, this);
    }

    Collection.prototype.find = function(id, params, options) {
      var record;
      if (options == null) {
        options = {};
      }
      record = new this.model({
        id: id
      });
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(record),
        parallel: options.parallel
      }).done(this.recordsResponse(options)).fail(this.failResponse(options));
    };

    Collection.prototype.all = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url || Ajax.getURL(this.model),
        parallel: options.parallel
      }).done(this.recordsResponse(options)).fail(this.failResponse(options));
    };

    Collection.prototype.fetch = function(params, options) {
      var id;
      if (params == null) {
        params = {};
      }
      if (options == null) {
        options = {};
      }
      if (id = params.id) {
        delete params.id;
        return this.find(id, params, options).done((function(_this) {
          return function(record) {
            return _this.model.refresh(record, options);
          };
        })(this));
      } else {
        return this.all(params, options).done((function(_this) {
          return function(records) {
            return _this.model.refresh(records, options);
          };
        })(this));
      }
    };

    Collection.prototype.recordsResponse = function(options) {
      return (function(_this) {
        return function(data, status, xhr, settings) {
          var ref;
          _this.model.trigger('ajaxSuccess', null, status, xhr, settings);
          return (ref = options.done) != null ? ref.call(_this.model, settings) : void 0;
        };
      })(this);
    };

    Collection.prototype.failResponse = function(options) {
      return (function(_this) {
        return function(xhr, statusText, error, settings) {
          var ref;
          _this.model.trigger('ajaxError', null, xhr, statusText, error, settings);
          return (ref = options.fail) != null ? ref.call(_this.model, settings) : void 0;
        };
      })(this);
    };

    return Collection;

  })(Base);

  Singleton = (function(superClass) {
    extend(Singleton, superClass);

    function Singleton(record1) {
      this.record = record1;
      this.failResponse = bind(this.failResponse, this);
      this.recordResponse = bind(this.recordResponse, this);
      this.model = this.record.constructor;
    }

    Singleton.prototype.reload = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.loadMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.create = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.createMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url || Ajax.getCollectionURL(this.record),
        parallel: options.parallel
      }).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.update = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.updateMethod,
        contentType: 'application/json',
        data: this.record.toJSON(),
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.destroy = function(params, options) {
      if (options == null) {
        options = {};
      }
      return this.ajaxQueue(params, {
        type: options.method || Ajax.config.destroyMethod,
        url: options.url,
        parallel: options.parallel
      }, this.record).done(this.recordResponse(options)).fail(this.failResponse(options));
    };

    Singleton.prototype.recordResponse = function(options) {
      return (function(_this) {
        return function(data, status, xhr, settings) {
          var ref;
          if ((data != null) && Object.getOwnPropertyNames(data).length && !_this.record.destroyed) {
            _this.record.refresh(data, {
              ajax: false
            });
          }
          _this.record.trigger('ajaxSuccess', _this.record, _this.model.fromJSON(data), status, xhr, settings);
          return (ref = options.done) != null ? ref.call(_this.record, settings) : void 0;
        };
      })(this);
    };

    Singleton.prototype.failResponse = function(options) {
      return (function(_this) {
        return function(xhr, statusText, error, settings) {
          var ref;
          switch (settings.type) {
            case 'POST':
              _this.createFailed();
              break;
            case 'DELETE':
              _this.destroyFailed();
          }
          _this.record.trigger('ajaxError', _this.record, xhr, statusText, error, settings);
          return (ref = options.fail) != null ? ref.call(_this.record, settings) : void 0;
        };
      })(this);
    };

    Singleton.prototype.createFailed = function() {
      return this.record.remove({
        clear: true
      });
    };

    Singleton.prototype.destroyFailed = function() {
      this.record.destroyed = false;
      return this.record.constructor.refresh(this.record);
    };

    return Singleton;

  })(Base);

  Model.host = '';

  GenerateURL = {
    include: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      args.unshift(encodeURIComponent(this.id));
      return Ajax.generateURL.apply(Ajax, [this].concat(slice.call(args)));
    },
    extend: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return Ajax.generateURL.apply(Ajax, [this].concat(slice.call(args)));
    }
  };

  Include = {
    ajax: function() {
      return new Singleton(this);
    },
    generateURL: GenerateURL.include,
    url: GenerateURL.include
  };

  Extend = {
    ajax: function() {
      return new Collection(this);
    },
    generateURL: GenerateURL.extend,
    url: GenerateURL.extend
  };

  Model.Ajax = {
    extended: function() {
      this.fetch(this.ajaxFetch);
      this.change(this.ajaxChange);
      this.extend(Extend);
      return this.include(Include);
    },
    ajaxFetch: function() {
      var ref;
      return (ref = this.ajax()).fetch.apply(ref, arguments);
    },
    ajaxChange: function(record, type, options) {
      var base;
      if (options == null) {
        options = {};
      }
      if (options.ajax === false) {
        return;
      }
      return typeof (base = record.ajax())[type] === "function" ? base[type](options.ajax, options) : void 0;
    }
  };

  Model.Ajax.Methods = {
    extended: function() {
      this.extend(Extend);
      return this.include(Include);
    }
  };

  Ajax.defaults = Base.prototype.defaults;

  Ajax.Base = Base;

  Ajax.Singleton = Singleton;

  Ajax.Collection = Collection;

  Spine.Ajax = Ajax;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Ajax;
  }

}).call(this);
