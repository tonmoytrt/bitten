"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1677],
  {
    28779: function (e, t, r) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(27024),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useState,
        u = n.useEffect,
        o = n.useLayoutEffect,
        a = n.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = s({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                c = n[1];
              return (
                o(
                  function () {
                    (i.value = r), (i.getSnapshot = t), l(i) && c({ inst: i });
                  },
                  [e, r, t]
                ),
                u(
                  function () {
                    return (
                      l(i) && c({ inst: i }),
                      e(function () {
                        l(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                a(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    56769: function (e, t, r) {
      e.exports = r(28779);
    },
    29752: function (e, t, r) {
      r.d(t, {
        j: function () {
          return u;
        },
      });
      var n = r(79345),
        i = r(88517);
      class s extends n.l {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!i.sk && window.addEventListener) {
                let t = () => e();
                return (
                  window.addEventListener("visibilitychange", t, !1),
                  window.addEventListener("focus", t, !1),
                  () => {
                    window.removeEventListener("visibilitychange", t),
                      window.removeEventListener("focus", t);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
            }));
        }
        setFocused(e) {
          (this.focused = e), e && this.onFocus();
        }
        onFocus() {
          this.listeners.forEach(({ listener: e }) => {
            e();
          });
        }
        isFocused() {
          return "boolean" == typeof this.focused
            ? this.focused
            : "undefined" == typeof document ||
                [void 0, "visible", "prerender"].includes(
                  document.visibilityState
                );
        }
      }
      let u = new s();
    },
    78070: function (e, t, r) {
      function n() {
        return {
          onFetch: (e) => {
            e.fetchFn = () => {
              var t, r, n, u, o, a;
              let l;
              let c =
                  null == (t = e.fetchOptions)
                    ? void 0
                    : null == (r = t.meta)
                    ? void 0
                    : r.refetchPage,
                h =
                  null == (n = e.fetchOptions)
                    ? void 0
                    : null == (u = n.meta)
                    ? void 0
                    : u.fetchMore,
                d = null == h ? void 0 : h.pageParam,
                f = (null == h ? void 0 : h.direction) === "forward",
                p = (null == h ? void 0 : h.direction) === "backward",
                y = (null == (o = e.state.data) ? void 0 : o.pages) || [],
                v = (null == (a = e.state.data) ? void 0 : a.pageParams) || [],
                m = v,
                b = !1,
                g = (t) => {
                  Object.defineProperty(t, "signal", {
                    enumerable: !0,
                    get: () => {
                      var t, r;
                      return (
                        null != (t = e.signal) && t.aborted
                          ? (b = !0)
                          : null == (r = e.signal) ||
                            r.addEventListener("abort", () => {
                              b = !0;
                            }),
                        e.signal
                      );
                    },
                  });
                },
                O =
                  e.options.queryFn ||
                  (() =>
                    Promise.reject(
                      "Missing queryFn for queryKey '" +
                        e.options.queryHash +
                        "'"
                    )),
                w = (e, t, r, n) => (
                  (m = n ? [t, ...m] : [...m, t]), n ? [r, ...e] : [...e, r]
                ),
                C = (t, r, n, i) => {
                  if (b) return Promise.reject("Cancelled");
                  if (void 0 === n && !r && t.length) return Promise.resolve(t);
                  let s = {
                    queryKey: e.queryKey,
                    pageParam: n,
                    meta: e.options.meta,
                  };
                  g(s);
                  let u = O(s),
                    o = Promise.resolve(u).then((e) => w(t, n, e, i));
                  return o;
                };
              if (y.length) {
                if (f) {
                  let t = void 0 !== d,
                    r = t ? d : i(e.options, y);
                  l = C(y, t, r);
                } else if (p) {
                  let t = void 0 !== d,
                    r = t ? d : s(e.options, y);
                  l = C(y, t, r, !0);
                } else {
                  m = [];
                  let t = void 0 === e.options.getNextPageParam,
                    r = !c || !y[0] || c(y[0], 0, y);
                  l = r ? C([], t, v[0]) : Promise.resolve(w([], v[0], y[0]));
                  for (let r = 1; r < y.length; r++)
                    l = l.then((n) => {
                      let s = !c || !y[r] || c(y[r], r, y);
                      if (s) {
                        let s = t ? v[r] : i(e.options, n);
                        return C(n, t, s);
                      }
                      return Promise.resolve(w(n, v[r], y[r]));
                    });
                }
              } else l = C([]);
              let R = l.then((e) => ({ pages: e, pageParams: m }));
              return R;
            };
          },
        };
      }
      function i(e, t) {
        return null == e.getNextPageParam
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      function s(e, t) {
        return null == e.getPreviousPageParam
          ? void 0
          : e.getPreviousPageParam(t[0], t);
      }
      function u(e, t) {
        if (e.getNextPageParam && Array.isArray(t)) {
          let r = i(e, t);
          return null != r && !1 !== r;
        }
      }
      function o(e, t) {
        if (e.getPreviousPageParam && Array.isArray(t)) {
          let r = s(e, t);
          return null != r && !1 !== r;
        }
      }
      r.d(t, {
        Gm: function () {
          return n;
        },
        Qy: function () {
          return u;
        },
        ZF: function () {
          return o;
        },
      });
    },
    40873: function (e, t, r) {
      r.d(t, {
        _: function () {
          return n;
        },
      });
      let n = console;
    },
    29116: function (e, t, r) {
      r.d(t, {
        R: function () {
          return a;
        },
        m: function () {
          return o;
        },
      });
      var n = r(40873),
        i = r(59461),
        s = r(50260),
        u = r(3245);
      class o extends s.F {
        constructor(e) {
          super(),
            (this.defaultOptions = e.defaultOptions),
            (this.mutationId = e.mutationId),
            (this.mutationCache = e.mutationCache),
            (this.logger = e.logger || n._),
            (this.observers = []),
            (this.state = e.state || a()),
            this.setOptions(e.options),
            this.scheduleGc();
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }),
            this.updateCacheTime(this.options.cacheTime);
        }
        get meta() {
          return this.options.meta;
        }
        setState(e) {
          this.dispatch({ type: "setState", state: e });
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: "observerAdded",
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.observers = this.observers.filter((t) => t !== e)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: "observerRemoved",
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ("loading" === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          var e, t;
          return null !=
            (e = null == (t = this.retryer) ? void 0 : t.continue())
            ? e
            : this.execute();
        }
        async execute() {
          var e, t, r, n, i, s, o, a, l, c, h, d, f, p, y, v, m, b, g, O;
          let w = "loading" === this.state.status;
          try {
            if (!w) {
              this.dispatch({
                type: "loading",
                variables: this.options.variables,
              }),
                await (null == (l = (c = this.mutationCache.config).onMutate)
                  ? void 0
                  : l.call(c, this.state.variables, this));
              let e = await (null == (h = (d = this.options).onMutate)
                ? void 0
                : h.call(d, this.state.variables));
              e !== this.state.context &&
                this.dispatch({
                  type: "loading",
                  context: e,
                  variables: this.state.variables,
                });
            }
            let f = await (() => {
              var e;
              return (
                (this.retryer = (0, u.Mz)({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject("No mutationFn found"),
                  onFail: (e, t) => {
                    this.dispatch({
                      type: "failed",
                      failureCount: e,
                      error: t,
                    });
                  },
                  onPause: () => {
                    this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                    this.dispatch({ type: "continue" });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            })();
            return (
              await (null == (e = (t = this.mutationCache.config).onSuccess)
                ? void 0
                : e.call(t, f, this.state.variables, this.state.context, this)),
              await (null == (r = (n = this.options).onSuccess)
                ? void 0
                : r.call(n, f, this.state.variables, this.state.context)),
              await (null == (i = (s = this.mutationCache.config).onSettled)
                ? void 0
                : i.call(
                    s,
                    f,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await (null == (o = (a = this.options).onSettled)
                ? void 0
                : o.call(a, f, null, this.state.variables, this.state.context)),
              this.dispatch({ type: "success", data: f }),
              f
            );
          } catch (e) {
            try {
              throw (
                (await (null == (f = (p = this.mutationCache.config).onError)
                  ? void 0
                  : f.call(
                      p,
                      e,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (y = (v = this.options).onError)
                  ? void 0
                  : y.call(v, e, this.state.variables, this.state.context)),
                await (null == (m = (b = this.mutationCache.config).onSettled)
                  ? void 0
                  : m.call(
                      b,
                      void 0,
                      e,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (g = (O = this.options).onSettled)
                  ? void 0
                  : g.call(
                      O,
                      void 0,
                      e,
                      this.state.variables,
                      this.state.context
                    )),
                e)
              );
            } finally {
              this.dispatch({ type: "error", error: e });
            }
          }
        }
        dispatch(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  failureCount: e.failureCount,
                  failureReason: e.error,
                };
              case "pause":
                return { ...t, isPaused: !0 };
              case "continue":
                return { ...t, isPaused: !1 };
              case "loading":
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !(0, u.Kw)(this.options.networkMode),
                  status: "loading",
                  variables: e.variables,
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: "error",
                };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            i.V.batch(() => {
              this.observers.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: e,
                });
            });
        }
      }
      function a() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
        };
      }
    },
    59461: function (e, t, r) {
      r.d(t, {
        V: function () {
          return i;
        },
      });
      var n = r(88517);
      let i = (function () {
        let e = [],
          t = 0,
          r = (e) => {
            e();
          },
          i = (e) => {
            e();
          },
          s = (e) => {
            let r;
            t++;
            try {
              r = e();
            } finally {
              --t || a();
            }
            return r;
          },
          u = (i) => {
            t
              ? e.push(i)
              : (0, n.A4)(() => {
                  r(i);
                });
          },
          o =
            (e) =>
            (...t) => {
              u(() => {
                e(...t);
              });
            },
          a = () => {
            let t = e;
            (e = []),
              t.length &&
                (0, n.A4)(() => {
                  i(() => {
                    t.forEach((e) => {
                      r(e);
                    });
                  });
                });
          },
          l = (e) => {
            r = e;
          },
          c = (e) => {
            i = e;
          };
        return {
          batch: s,
          batchCalls: o,
          schedule: u,
          setNotifyFunction: l,
          setBatchNotifyFunction: c,
        };
      })();
    },
    41364: function (e, t, r) {
      r.d(t, {
        N: function () {
          return o;
        },
      });
      var n = r(79345),
        i = r(88517);
      let s = ["online", "offline"];
      class u extends n.l {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!i.sk && window.addEventListener) {
                let t = () => e();
                return (
                  s.forEach((e) => {
                    window.addEventListener(e, t, !1);
                  }),
                  () => {
                    s.forEach((e) => {
                      window.removeEventListener(e, t);
                    });
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" == typeof e ? this.setOnline(e) : this.onOnline();
            }));
        }
        setOnline(e) {
          (this.online = e), e && this.onOnline();
        }
        onOnline() {
          this.listeners.forEach(({ listener: e }) => {
            e();
          });
        }
        isOnline() {
          return "boolean" == typeof this.online
            ? this.online
            : "undefined" == typeof navigator ||
                void 0 === navigator.onLine ||
                navigator.onLine;
        }
      }
      let o = new u();
    },
    8121: function (e, t, r) {
      r.d(t, {
        S: function () {
          return v;
        },
      });
      var n = r(88517),
        i = r(40873),
        s = r(59461),
        u = r(3245),
        o = r(50260);
      class a extends o.F {
        constructor(e) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.cache = e.cache),
            (this.logger = e.logger || i._),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.initialState =
              e.state ||
              (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (null != n ? n : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "loading",
                  fetchStatus: "idle",
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(e, t) {
          let r = (0, n.oE)(this.state.data, e, this.options);
          return (
            this.dispatch({
              data: r,
              type: "success",
              dataUpdatedAt: null == t ? void 0 : t.updatedAt,
              manual: null == t ? void 0 : t.manual,
            }),
            r
          );
        }
        setState(e, t) {
          this.dispatch({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          var t;
          let r = this.promise;
          return (
            null == (t = this.retryer) || t.cancel(e),
            r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((e) => !1 !== e.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((e) => e.getCurrentResult().isStale)
          );
        }
        isStaleByTime(e = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !(0, n.Kp)(this.state.dataUpdatedAt, e)
          );
        }
        onFocus() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        onOnline() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnReconnect());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.cache.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(e, t) {
          var r, i, s, o;
          if ("idle" !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != t && t.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.promise)
              return (
                null == (s = this.retryer) || s.continueRetry(), this.promise
              );
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          Array.isArray(this.options.queryKey);
          let a = (0, n.G9)(),
            l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            c = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => {
                  if (a) return (this.abortSignalConsumed = !0), a.signal;
                },
              });
            };
          c(l);
          let h = () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
                : Promise.reject(
                    "Missing queryFn for queryKey '" +
                      this.options.queryHash +
                      "'"
                  ),
            d = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: h,
            };
          c(d),
            null == (r = this.options.behavior) || r.onFetch(d),
            (this.revertState = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !==
                (null == (i = d.fetchOptions) ? void 0 : i.meta)) &&
              this.dispatch({
                type: "fetch",
                meta: null == (o = d.fetchOptions) ? void 0 : o.meta,
              });
          let f = (e) => {
            if (
              (((0, u.DV)(e) && e.silent) ||
                this.dispatch({ type: "error", error: e }),
              !(0, u.DV)(e))
            ) {
              var t, r, n, i;
              null == (t = (r = this.cache.config).onError) ||
                t.call(r, e, this),
                null == (n = (i = this.cache.config).onSettled) ||
                  n.call(i, this.state.data, e, this);
            }
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = (0, u.Mz)({
              fn: d.fetchFn,
              abort: null == a ? void 0 : a.abort.bind(a),
              onSuccess: (e) => {
                var t, r, n, i;
                if (void 0 === e) {
                  f(Error(this.queryHash + " data is undefined"));
                  return;
                }
                this.setData(e),
                  null == (t = (r = this.cache.config).onSuccess) ||
                    t.call(r, e, this),
                  null == (n = (i = this.cache.config).onSettled) ||
                    n.call(i, e, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: f,
              onFail: (e, t) => {
                this.dispatch({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.dispatch({ type: "pause" });
              },
              onContinue: () => {
                this.dispatch({ type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(e) {
          (this.state = ((t) => {
            var r, n;
            switch (e.type) {
              case "failed":
                return {
                  ...t,
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...t,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null != (r = e.meta) ? r : null,
                  fetchStatus: (0, u.Kw)(this.options.networkMode)
                    ? "fetching"
                    : "paused",
                  ...(!t.dataUpdatedAt && { error: null, status: "loading" }),
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case "error":
                let i = e.error;
                if ((0, u.DV)(i) && i.revert && this.revertState)
                  return { ...this.revertState };
                return {
                  ...t,
                  error: i,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            s.V.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate(e);
              }),
                this.cache.notify({ query: this, type: "updated", action: e });
            });
        }
      }
      var l = r(79345);
      class c extends l.l {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
        build(e, t, r) {
          var i;
          let s = t.queryKey,
            u = null != (i = t.queryHash) ? i : (0, n.Rm)(s, t),
            o = this.get(u);
          return (
            o ||
              ((o = new a({
                cache: this,
                logger: e.getLogger(),
                queryKey: s,
                queryHash: u,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(s),
              })),
              this.add(o)),
            o
          );
        }
        add(e) {
          this.queriesMap[e.queryHash] ||
            ((this.queriesMap[e.queryHash] = e),
            this.queries.push(e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.queriesMap[e.queryHash];
          t &&
            (e.destroy(),
            (this.queries = this.queries.filter((t) => t !== e)),
            t === e && delete this.queriesMap[e.queryHash],
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          s.V.batch(() => {
            this.queries.forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.queriesMap[e];
        }
        getAll() {
          return this.queries;
        }
        find(e, t) {
          let [r] = (0, n.I6)(e, t);
          return (
            void 0 === r.exact && (r.exact = !0),
            this.queries.find((e) => (0, n._x)(r, e))
          );
        }
        findAll(e, t) {
          let [r] = (0, n.I6)(e, t);
          return Object.keys(r).length > 0
            ? this.queries.filter((e) => (0, n._x)(r, e))
            : this.queries;
        }
        notify(e) {
          s.V.batch(() => {
            this.listeners.forEach(({ listener: t }) => {
              t(e);
            });
          });
        }
        onFocus() {
          s.V.batch(() => {
            this.queries.forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          s.V.batch(() => {
            this.queries.forEach((e) => {
              e.onOnline();
            });
          });
        }
      }
      var h = r(29116);
      class d extends l.l {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
        build(e, t, r) {
          let n = new h.m({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: r,
            defaultOptions: t.mutationKey
              ? e.getMutationDefaults(t.mutationKey)
              : void 0,
          });
          return this.add(n), n;
        }
        add(e) {
          this.mutations.push(e), this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          (this.mutations = this.mutations.filter((t) => t !== e)),
            this.notify({ type: "removed", mutation: e });
        }
        clear() {
          s.V.batch(() => {
            this.mutations.forEach((e) => {
              this.remove(e);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(e) {
          return (
            void 0 === e.exact && (e.exact = !0),
            this.mutations.find((t) => (0, n.X7)(e, t))
          );
        }
        findAll(e) {
          return this.mutations.filter((t) => (0, n.X7)(e, t));
        }
        notify(e) {
          s.V.batch(() => {
            this.listeners.forEach(({ listener: t }) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          var e;
          return (
            (this.resuming = (
              null != (e = this.resuming) ? e : Promise.resolve()
            )
              .then(() => {
                let e = this.mutations.filter((e) => e.state.isPaused);
                return s.V.batch(() =>
                  e.reduce(
                    (e, t) => e.then(() => t.continue().catch(n.ZT)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
      }
      var f = r(29752),
        p = r(41364),
        y = r(78070);
      class v {
        constructor(e = {}) {
          (this.queryCache = e.queryCache || new c()),
            (this.mutationCache = e.mutationCache || new d()),
            (this.logger = e.logger || i._),
            (this.defaultOptions = e.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []),
            (this.mountCount = 0);
        }
        mount() {
          this.mountCount++,
            1 === this.mountCount &&
              ((this.unsubscribeFocus = f.j.subscribe(() => {
                f.j.isFocused() &&
                  (this.resumePausedMutations(), this.queryCache.onFocus());
              })),
              (this.unsubscribeOnline = p.N.subscribe(() => {
                p.N.isOnline() &&
                  (this.resumePausedMutations(), this.queryCache.onOnline());
              })));
        }
        unmount() {
          var e, t;
          this.mountCount--,
            0 === this.mountCount &&
              (null == (e = this.unsubscribeFocus) || e.call(this),
              (this.unsubscribeFocus = void 0),
              null == (t = this.unsubscribeOnline) || t.call(this),
              (this.unsubscribeOnline = void 0));
        }
        isFetching(e, t) {
          let [r] = (0, n.I6)(e, t);
          return (
            (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length
          );
        }
        isMutating(e) {
          return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
        }
        getQueryData(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t))
            ? void 0
            : r.state.data;
        }
        ensureQueryData(e, t, r) {
          let i = (0, n._v)(e, t, r),
            s = this.getQueryData(i.queryKey);
          return s ? Promise.resolve(s) : this.fetchQuery(i);
        }
        getQueriesData(e) {
          return this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: e, state: t }) => {
              let r = t.data;
              return [e, r];
            });
        }
        setQueryData(e, t, r) {
          let i = this.queryCache.find(e),
            s = null == i ? void 0 : i.state.data,
            u = (0, n.SE)(t, s);
          if (void 0 === u) return;
          let o = (0, n._v)(e),
            a = this.defaultQueryOptions(o);
          return this.queryCache
            .build(this, a)
            .setData(u, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return s.V.batch(() =>
            this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state;
        }
        removeQueries(e, t) {
          let [r] = (0, n.I6)(e, t),
            i = this.queryCache;
          s.V.batch(() => {
            i.findAll(r).forEach((e) => {
              i.remove(e);
            });
          });
        }
        resetQueries(e, t, r) {
          let [i, u] = (0, n.I6)(e, t, r),
            o = this.queryCache,
            a = { type: "active", ...i };
          return s.V.batch(
            () => (
              o.findAll(i).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(a, u)
            )
          );
        }
        cancelQueries(e, t, r) {
          let [i, u = {}] = (0, n.I6)(e, t, r);
          void 0 === u.revert && (u.revert = !0);
          let o = s.V.batch(() =>
            this.queryCache.findAll(i).map((e) => e.cancel(u))
          );
          return Promise.all(o).then(n.ZT).catch(n.ZT);
        }
        invalidateQueries(e, t, r) {
          let [i, u] = (0, n.I6)(e, t, r);
          return s.V.batch(() => {
            var e, t;
            if (
              (this.queryCache.findAll(i).forEach((e) => {
                e.invalidate();
              }),
              "none" === i.refetchType)
            )
              return Promise.resolve();
            let r = {
              ...i,
              type:
                null != (e = null != (t = i.refetchType) ? t : i.type)
                  ? e
                  : "active",
            };
            return this.refetchQueries(r, u);
          });
        }
        refetchQueries(e, t, r) {
          let [i, u] = (0, n.I6)(e, t, r),
            o = s.V.batch(() =>
              this.queryCache
                .findAll(i)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  var t;
                  return e.fetch(void 0, {
                    ...u,
                    cancelRefetch:
                      null == (t = null == u ? void 0 : u.cancelRefetch) || t,
                    meta: { refetchPage: i.refetchPage },
                  });
                })
            ),
            a = Promise.all(o).then(n.ZT);
          return (null != u && u.throwOnError) || (a = a.catch(n.ZT)), a;
        }
        fetchQuery(e, t, r) {
          let i = (0, n._v)(e, t, r),
            s = this.defaultQueryOptions(i);
          void 0 === s.retry && (s.retry = !1);
          let u = this.queryCache.build(this, s);
          return u.isStaleByTime(s.staleTime)
            ? u.fetch(s)
            : Promise.resolve(u.state.data);
        }
        prefetchQuery(e, t, r) {
          return this.fetchQuery(e, t, r).then(n.ZT).catch(n.ZT);
        }
        fetchInfiniteQuery(e, t, r) {
          let i = (0, n._v)(e, t, r);
          return (i.behavior = (0, y.Gm)()), this.fetchQuery(i);
        }
        prefetchInfiniteQuery(e, t, r) {
          return this.fetchInfiniteQuery(e, t, r).then(n.ZT).catch(n.ZT);
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations();
        }
        getQueryCache() {
          return this.queryCache;
        }
        getMutationCache() {
          return this.mutationCache;
        }
        getLogger() {
          return this.logger;
        }
        getDefaultOptions() {
          return this.defaultOptions;
        }
        setDefaultOptions(e) {
          this.defaultOptions = e;
        }
        setQueryDefaults(e, t) {
          let r = this.queryDefaults.find(
            (t) => (0, n.yF)(e) === (0, n.yF)(t.queryKey)
          );
          r
            ? (r.defaultOptions = t)
            : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          if (!e) return;
          let t = this.queryDefaults.find((t) => (0, n.to)(e, t.queryKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        setMutationDefaults(e, t) {
          let r = this.mutationDefaults.find(
            (t) => (0, n.yF)(e) === (0, n.yF)(t.mutationKey)
          );
          r
            ? (r.defaultOptions = t)
            : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          if (!e) return;
          let t = this.mutationDefaults.find((t) =>
            (0, n.to)(e, t.mutationKey)
          );
          return null == t ? void 0 : t.defaultOptions;
        }
        defaultQueryOptions(e) {
          if (null != e && e._defaulted) return e;
          let t = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            !t.queryHash &&
              t.queryKey &&
              (t.queryHash = (0, n.Rm)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.useErrorBoundary &&
              (t.useErrorBoundary = !!t.suspense),
            t
          );
        }
        defaultMutationOptions(e) {
          return null != e && e._defaulted
            ? e
            : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear();
        }
      }
    },
    50260: function (e, t, r) {
      r.d(t, {
        F: function () {
          return i;
        },
      });
      var n = r(88517);
      class i {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            (0, n.PN)(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(e) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != e ? e : n.sk ? 1 / 0 : 3e5
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
    },
    3245: function (e, t, r) {
      r.d(t, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return o;
        },
        Mz: function () {
          return c;
        },
      });
      var n = r(29752),
        i = r(41364),
        s = r(88517);
      function u(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function o(e) {
        return (null != e ? e : "online") !== "online" || i.N.isOnline();
      }
      class a {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert),
            (this.silent = null == e ? void 0 : e.silent);
        }
      }
      function l(e) {
        return e instanceof a;
      }
      function c(e) {
        let t,
          r,
          l,
          c = !1,
          h = 0,
          d = !1,
          f = new Promise((e, t) => {
            (r = e), (l = t);
          }),
          p = (t) => {
            d || (g(new a(t)), null == e.abort || e.abort());
          },
          y = () => {
            c = !0;
          },
          v = () => {
            c = !1;
          },
          m = () =>
            !n.j.isFocused() || ("always" !== e.networkMode && !i.N.isOnline()),
          b = (n) => {
            d ||
              ((d = !0),
              null == e.onSuccess || e.onSuccess(n),
              null == t || t(),
              r(n));
          },
          g = (r) => {
            d ||
              ((d = !0),
              null == e.onError || e.onError(r),
              null == t || t(),
              l(r));
          },
          O = () =>
            new Promise((r) => {
              (t = (e) => {
                let t = d || !m();
                return t && r(e), t;
              }),
                null == e.onPause || e.onPause();
            }).then(() => {
              (t = void 0), d || null == e.onContinue || e.onContinue();
            }),
          w = () => {
            let t;
            if (!d) {
              try {
                t = e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(b)
                .catch((t) => {
                  var r, n;
                  if (d) return;
                  let i = null != (r = e.retry) ? r : 3,
                    o = null != (n = e.retryDelay) ? n : u,
                    a = "function" == typeof o ? o(h, t) : o,
                    l =
                      !0 === i ||
                      ("number" == typeof i && h < i) ||
                      ("function" == typeof i && i(h, t));
                  if (c || !l) {
                    g(t);
                    return;
                  }
                  h++,
                    null == e.onFail || e.onFail(h, t),
                    (0, s.Gh)(a)
                      .then(() => {
                        if (m()) return O();
                      })
                      .then(() => {
                        c ? g(t) : w();
                      });
                });
            }
          };
        return (
          o(e.networkMode) ? w() : O().then(w),
          {
            promise: f,
            cancel: p,
            continue: () => {
              let e = null == t ? void 0 : t();
              return e ? f : Promise.resolve();
            },
            cancelRetry: y,
            continueRetry: v,
          }
        );
      }
    },
    79345: function (e, t, r) {
      r.d(t, {
        l: function () {
          return n;
        },
      });
      class n {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          let t = { listener: e };
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
    },
    88517: function (e, t, r) {
      r.d(t, {
        A4: function () {
          return S;
        },
        G9: function () {
          return E;
        },
        Gh: function () {
          return q;
        },
        I6: function () {
          return d;
        },
        Kp: function () {
          return l;
        },
        PN: function () {
          return u;
        },
        Rc: function () {
          return a;
        },
        Rm: function () {
          return y;
        },
        SE: function () {
          return s;
        },
        VS: function () {
          return g;
        },
        X7: function () {
          return p;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return c;
        },
        _x: function () {
          return f;
        },
        e5: function () {
          return o;
        },
        lV: function () {
          return h;
        },
        oE: function () {
          return Q;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return m;
        },
        yF: function () {
          return v;
        },
      });
      let n = "undefined" == typeof window || "Deno" in window;
      function i() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function o(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      function a(e, t, r) {
        let n = e.slice(0);
        return (n[t] = r), n;
      }
      function l(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t, r) {
        return R(e)
          ? "function" == typeof t
            ? { ...r, queryKey: e, queryFn: t }
            : { ...t, queryKey: e }
          : e;
      }
      function h(e, t, r) {
        return R(e)
          ? "function" == typeof t
            ? { ...r, mutationKey: e, mutationFn: t }
            : { ...t, mutationKey: e }
          : "function" == typeof e
          ? { ...t, mutationFn: e }
          : { ...e };
      }
      function d(e, t, r) {
        return R(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
      }
      function f(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: u,
          stale: o,
        } = e;
        if (R(u)) {
          if (n) {
            if (t.queryHash !== y(u, t.options)) return !1;
          } else {
            if (!b(t.queryKey, u)) return !1;
          }
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof o || t.isStale() === o) &&
          (void 0 === i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function p(e, t) {
        let { exact: r, fetching: n, predicate: i, mutationKey: s } = e;
        if (R(s)) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (v(t.options.mutationKey) !== v(s)) return !1;
          } else {
            if (!b(t.options.mutationKey, s)) return !1;
          }
        }
        return (
          ("boolean" != typeof n || ("loading" === t.state.status) === n) &&
          (!i || !!i(t))
        );
      }
      function y(e, t) {
        let r = (null == t ? void 0 : t.queryKeyHashFn) || v;
        return r(e);
      }
      function v(e) {
        return JSON.stringify(e, (e, t) =>
          w(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function m(e, t) {
        return b(e, t);
      }
      function b(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((r) => !b(e[r], t[r])))
        );
      }
      function g(e, t) {
        if ((e && !t) || (t && !e)) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function O(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function w(e) {
        if (!C(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return !!(C(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function C(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function R(e) {
        return Array.isArray(e);
      }
      function q(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function S(e) {
        q(0).then(e);
      }
      function E() {
        if ("function" == typeof AbortController) return new AbortController();
      }
      function Q(e, t, r) {
        return null != r.isDataEqual && r.isDataEqual(e, t)
          ? e
          : "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? (function e(t, r) {
              if (t === r) return t;
              let n = O(t) && O(r);
              if (n || (w(t) && w(r))) {
                let i = n ? t.length : Object.keys(t).length,
                  s = n ? r : Object.keys(r),
                  u = s.length,
                  o = n ? [] : {},
                  a = 0;
                for (let i = 0; i < u; i++) {
                  let u = n ? i : s[i];
                  (o[u] = e(t[u], r[u])), o[u] === t[u] && a++;
                }
                return i === u && a === i ? t : o;
              }
              return r;
            })(e, t)
          : t;
      }
    },
    87040: function (e, t, r) {
      r.d(t, {
        NL: function () {
          return o;
        },
        aH: function () {
          return a;
        },
      });
      var n = r(27024);
      let i = n.createContext(void 0),
        s = n.createContext(!1);
      function u(e, t) {
        return (
          e ||
          (t && "undefined" != typeof window
            ? (window.ReactQueryClientContext ||
                (window.ReactQueryClientContext = i),
              window.ReactQueryClientContext)
            : i)
        );
      }
      let o = ({ context: e } = {}) => {
          let t = n.useContext(u(e, n.useContext(s)));
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        a = ({
          client: e,
          children: t,
          context: r,
          contextSharing: i = !1,
        }) => {
          n.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          );
          let o = u(r, i);
          return n.createElement(
            s.Provider,
            { value: !r && i },
            n.createElement(o.Provider, { value: e }, t)
          );
        };
    },
    32479: function (e, t, r) {
      function n(e) {
        return e;
      }
      function i(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;
            function u() {
              if (null === r) {
                s = !0;
                return;
              }
              !i &&
                ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  n || t.next?.(e);
                },
                error(e) {
                  n || ((n = !0), t.error?.(e), u());
                },
                complete() {
                  n || ((n = !0), t.complete?.(), u());
                },
              })),
              s && u(),
              { unsubscribe: u }
            );
          },
          pipe: (...e) =>
            (0 === e.length
              ? n
              : 1 === e.length
              ? e[0]
              : function (t) {
                  return e.reduce((e, t) => t(e), t);
                })(t),
        };
        return t;
      }
      r.d(t, {
        BJ: function () {
          return T;
        },
        Bm: function () {
          return I;
        },
        wY: function () {
          return d;
        },
        ch: function () {
          return E;
        },
        gb: function () {
          return x;
        },
      });
      class s extends Error {
        constructor(e) {
          super(e),
            (this.name = "ObservableAbortError"),
            Object.setPrototypeOf(this, s.prototype);
        }
      }
      class u extends Error {
        static from(e, t = {}) {
          return e instanceof Error
            ? "TRPCClientError" === e.name
              ? e
              : new u(e.message, { ...t, cause: e, result: null })
            : new u(e.error.message ?? "", { ...t, cause: void 0, result: e });
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = "TRPCClientError"),
            Object.setPrototypeOf(this, u.prototype);
        }
      }
      function o(e) {
        return !!e && !Array.isArray(e) && "object" == typeof e;
      }
      function a(e, t) {
        let r;
        try {
          r = (function (e, t) {
            if ("error" in e) {
              let r = t.transformer.deserialize(e.error);
              return { ok: !1, error: { ...e, error: r } };
            }
            let r = {
              ...e.result,
              ...((!e.result.type || "data" === e.result.type) && {
                type: "data",
                data: t.transformer.deserialize(e.result.data),
              }),
            };
            return { ok: !0, result: r };
          })(e, t);
        } catch (e) {
          throw new u("Unable to transform response from server");
        }
        if (
          (!r.ok &&
            (!o(r.error.error) || "number" != typeof r.error.error.code)) ||
          (r.ok && !o(r.result))
        )
          throw new u("Badly formatted response from server");
        return r;
      }
      var l = r(59594);
      let c = (e) => "function" == typeof e;
      function h(e, t) {
        return c(e.bind) ? e.bind(t) : e;
      }
      function d(e) {
        if (e) return e;
        if ("undefined" != typeof window && c(window.fetch))
          return h(window.fetch, window);
        if ("undefined" != typeof globalThis && c(globalThis.fetch))
          return h(globalThis.fetch, globalThis);
        throw Error("No fetch implementation found");
      }
      function f(e) {
        var t;
        return {
          url: e.url,
          fetch: d(e.fetch),
          AbortController: (t = e.AbortController)
            ? t
            : "undefined" != typeof window && window.AbortController
            ? window.AbortController
            : "undefined" != typeof globalThis && globalThis.AbortController
            ? globalThis.AbortController
            : null,
        };
      }
      let p = { query: "GET", mutation: "POST" };
      function y(e) {
        return "input" in e
          ? e.runtime.transformer.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.runtime.transformer.serialize(t)));
      }
      let v = (e) => {
          let t = e.url + "/" + e.path,
            r = [];
          if (("inputs" in e && r.push("batch=1"), "query" === e.type)) {
            let t = y(e);
            void 0 !== t &&
              r.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return r.length && (t += "?" + r.join("&")), t;
        },
        m = (e) => {
          if ("query" === e.type) return;
          let t = y(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        },
        b = (e) =>
          O({
            ...e,
            contentTypeHeader: "application/json",
            getUrl: v,
            getBody: m,
          });
      async function g(e, t) {
        let r = e.getUrl(e),
          n = e.getBody(e),
          { type: i } = e,
          s = await e.headers();
        if ("subscription" === i)
          throw Error("Subscriptions should use wsLink");
        let u = {
          ...(e.contentTypeHeader
            ? { "content-type": e.contentTypeHeader }
            : {}),
          ...(e.batchModeHeader
            ? { "trpc-batch-mode": e.batchModeHeader }
            : {}),
          ...s,
        };
        return e.fetch(r, {
          method: p[i],
          signal: t?.signal,
          body: n,
          headers: u,
        });
      }
      function O(e) {
        let t = e.AbortController ? new e.AbortController() : null,
          r = {},
          n = new Promise((n, i) => {
            g(e, t)
              .then((e) => ((r.response = e), e.json()))
              .then((e) => {
                n({ json: e, meta: r });
              })
              .catch(i);
          }),
          i = () => {
            t?.abort();
          };
        return { promise: n, cancel: i };
      }
      let w = () => {
        throw Error(
          "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
        );
      };
      function C(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let s = r[r.length - 1];
              if (i.aborted) {
                i.reject?.(Error("Aborted")), n++;
                continue;
              }
              let u = e.validate(s.concat(i).map((e) => e.key));
              if (u) {
                s.push(i), n++;
                continue;
              }
              if (0 === s.length) {
                i.reject?.(Error("Input is too big for a single dispatch")),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let t of (n(), r)) {
            if (!t.length) continue;
            let r = { items: t, cancel: w };
            for (let e of t) e.batch = r;
            let n = (e, t) => {
                let n = r.items[e];
                n.resolve?.(t),
                  (n.batch = null),
                  (n.reject = null),
                  (n.resolve = null);
              },
              { promise: i, cancel: s } = e.fetch(
                r.items.map((e) => e.key),
                n
              );
            (r.cancel = s),
              i
                .then((e) => {
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t];
                    n(t, r);
                  }
                  for (let e of r.items)
                    e.reject?.(Error("Missing result")), (e.batch = null);
                })
                .catch((e) => {
                  for (let t of r.items) t.reject?.(e), (t.batch = null);
                });
          }
        }
        return {
          load: function (e) {
            let n = { aborted: !1, key: e, batch: null, resolve: w, reject: w },
              s = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            r || (r = setTimeout(i));
            let u = () => {
              (n.aborted = !0),
                n.batch?.items.every((e) => e.aborted) &&
                  (n.batch.cancel(), (n.batch = null));
            };
            return { promise: s, cancel: u };
          },
        };
      }
      function R(e) {
        return function (t) {
          let r = f(t),
            n = t.maxURLLength ?? 1 / 0;
          return (s) => {
            let o = (i) => {
                let u = (e) => {
                    if (n === 1 / 0) return !0;
                    let t = e.map((e) => e.path).join(","),
                      u = e.map((e) => e.input),
                      o = v({ ...r, runtime: s, type: i, path: t, inputs: u });
                    return o.length <= n;
                  },
                  o = e({ ...r, runtime: s, type: i, opts: t });
                return { validate: u, fetch: o };
              },
              l = C(o("query")),
              c = C(o("mutation")),
              h = C(o("subscription")),
              d = { query: l, subscription: h, mutation: c };
            return ({ op: e }) =>
              i((t) => {
                let r = d[e.type],
                  { promise: n, cancel: i } = r.load(e);
                return (
                  n
                    .then((e) => {
                      let r = a(e.json, s);
                      if (!r.ok) {
                        t.error(u.from(r.error, { meta: e.meta }));
                        return;
                      }
                      t.next({ context: e.meta, result: r.result }),
                        t.complete();
                    })
                    .catch((e) => {
                      t.error(u.from(e));
                    }),
                  () => {
                    i();
                  }
                );
              });
          };
        };
      }
      let q = (e) => (t) => {
        let r = t.map((e) => e.path).join(","),
          n = t.map((e) => e.input),
          { promise: i, cancel: s } = b({
            ...e,
            path: r,
            inputs: n,
            headers: () =>
              e.opts.headers
                ? "function" == typeof e.opts.headers
                  ? e.opts.headers({ opList: t })
                  : e.opts.headers
                : {},
          });
        return {
          promise: i.then((e) => {
            let r = Array.isArray(e.json) ? e.json : t.map(() => e.json),
              n = r.map((t) => ({ meta: e.meta, json: t }));
            return n;
          }),
          cancel: s,
        };
      };
      function S(e) {
        return (t) => {
          let r = f(t);
          return (n) =>
            ({ op: s }) =>
              i((i) => {
                let { path: o, input: l, type: c } = s,
                  { promise: h, cancel: d } = e.requester({
                    ...r,
                    runtime: n,
                    type: c,
                    path: o,
                    input: l,
                    headers: () =>
                      t.headers
                        ? "function" == typeof t.headers
                          ? t.headers({ op: s })
                          : t.headers
                        : {},
                  });
                return (
                  h
                    .then((e) => {
                      let t = a(e.json, n);
                      if (!t.ok) {
                        i.error(u.from(t.error, { meta: e.meta }));
                        return;
                      }
                      i.next({ context: e.meta, result: t.result }),
                        i.complete();
                    })
                    .catch((e) => {
                      i.error(u.from(e));
                    }),
                  () => {
                    d();
                  }
                );
              });
        };
      }
      R(q);
      let E = S({ requester: b }),
        Q = {
          query: ["72e3ff", "3fb0d8"],
          mutation: ["c5a3fc", "904dfc"],
          subscription: ["ff49e1", "d83fbe"],
        },
        P =
          (e = console) =>
          (t) => {
            let { direction: r, type: n, path: i, context: s, id: u } = t,
              [o, a] = Q[n],
              l = t.input,
              c =
                "undefined" != typeof FormData && l instanceof FormData
                  ? Object.fromEntries(l)
                  : l,
              h = `
    background-color: #${"up" === r ? o : a}; 
    color: ${"up" === r ? "black" : "white"};
    padding: 2px;
  `,
              d = [
                "%c",
                "up" === r ? ">>" : "<<",
                n,
                `#${u}`,
                `%c${i}%c`,
                "%O",
              ],
              f = [h, `${h}; font-weight: bold;`, `${h}; font-weight: normal;`];
            "up" === t.direction
              ? f.push({ input: c, context: s })
              : f.push({
                  input: c,
                  result: t.result,
                  elapsedMs: t.elapsedMs,
                  context: s,
                });
            let p =
              "down" === t.direction &&
              t.result &&
              (t.result instanceof Error || "error" in t.result.result)
                ? "error"
                : "log";
            e[p].apply(null, [d.join(" ")].concat(f));
          };
      function x(e = {}) {
        let { enabled: t = () => !0 } = e,
          { logger: r = P(e.console) } = e;
        return () =>
          ({ op: e, next: n }) =>
            i((i) => {
              var s;
              t({ ...e, direction: "up" }) && r({ ...e, direction: "up" });
              let u = Date.now();
              function o(n) {
                let i = Date.now() - u;
                t({ ...e, direction: "down", result: n }) &&
                  r({ ...e, direction: "down", elapsedMs: i, result: n });
              }
              return n(e)
                .pipe(
                  ((s = {
                    next(e) {
                      o(e);
                    },
                    error(e) {
                      o(e);
                    },
                  }),
                  (e) => ({
                    subscribe: (t) =>
                      e.subscribe({
                        next(e) {
                          s.next?.(e), t.next?.(e);
                        },
                        error(e) {
                          s.error?.(e), t.error?.(e);
                        },
                        complete() {
                          s.complete?.(), t.complete?.();
                        },
                      }),
                  }))
                )
                .subscribe(i);
            });
      }
      class D {
        $request({ type: e, input: t, path: r, context: n = {} }) {
          var s;
          let u =
            ((s = {
              links: this.links,
              op: {
                id: ++this.requestId,
                type: e,
                path: r,
                input: t,
                context: n,
              },
            }),
            i((e) => {
              let t = (function e(t = 0, r = s.op) {
                let n = s.links[t];
                if (!n)
                  throw Error(
                    "No more links to execute - did you forget to add an ending link?"
                  );
                let i = n({
                  op: r,
                  next(r) {
                    let n = e(t + 1, r);
                    return n;
                  },
                });
                return i;
              })();
              return t.subscribe(e);
            }));
          return u.pipe((e) => {
            let t = 0,
              r = null,
              n = [];
            return {
              subscribe: (i) => (
                t++,
                n.push(i),
                r ||
                  (r = e.subscribe({
                    next(e) {
                      for (let t of n) t.next?.(e);
                    },
                    error(e) {
                      for (let t of n) t.error?.(e);
                    },
                    complete() {
                      for (let e of n) e.complete?.();
                    },
                  })),
                {
                  unsubscribe() {
                    t--,
                      (function () {
                        if (0 === t && r) {
                          let e = r;
                          (r = null), e.unsubscribe();
                        }
                      })();
                    let e = n.findIndex((e) => e === i);
                    e > -1 && n.splice(e, 1);
                  },
                }
              ),
            };
          });
        }
        requestAsPromise(e) {
          let t = this.$request(e),
            { promise: r, abort: n } = (function (e) {
              let t;
              let r = new Promise((r, n) => {
                let i = !1;
                function u() {
                  i ||
                    ((i = !0),
                    n(new s("This operation was aborted.")),
                    o.unsubscribe());
                }
                let o = e.subscribe({
                  next(e) {
                    (i = !0), r(e), u();
                  },
                  error(e) {
                    (i = !0), n(e), u();
                  },
                  complete() {
                    (i = !0), u();
                  },
                });
                t = u;
              });
              return { promise: r, abort: t };
            })(t),
            i = new Promise((t, i) => {
              e.signal?.addEventListener("abort", n),
                r
                  .then((e) => {
                    t(e.result.data);
                  })
                  .catch((e) => {
                    i(u.from(e));
                  });
            });
          return i;
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: "query",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          let n = this.$request({
            type: "subscription",
            path: e,
            input: t,
            context: r?.context,
          });
          return n.subscribe({
            next(e) {
              "started" === e.result.type
                ? r.onStarted?.()
                : "stopped" === e.result.type
                ? r.onStopped?.()
                : r.onData?.(e.result.data);
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          this.requestId = 0;
          let t = (() => {
            let t = e.transformer;
            return t
              ? "input" in t
                ? e.transformer
                : { input: t, output: t }
              : {
                  input: { serialize: (e) => e, deserialize: (e) => e },
                  output: { serialize: (e) => e, deserialize: (e) => e },
                };
          })();
          (this.runtime = {
            transformer: {
              serialize: (e) => t.input.serialize(e),
              deserialize: (e) => t.output.deserialize(e),
            },
            combinedTransformer: t,
          }),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      function T(e) {
        let t = new D(e);
        return t;
      }
      let F = { query: "query", mutate: "mutation", subscribe: "subscription" },
        M = (e) => F[e];
      function I(e) {
        return (0, l.yh)((t) =>
          e.hasOwnProperty(t)
            ? e[t]
            : "__untypedClient" === t
            ? e
            : (0, l.IX)(({ path: r, args: n }) => {
                let i = [t, ...r],
                  s = M(i.pop()),
                  u = i.join(".");
                return e[s](u, ...n);
              })
        );
      }
      async function A(e) {
        let t = e.parse ?? JSON.parse,
          r = (r) => {
            if (e.signal?.aborted || !r || "}" === r) return;
            let n = r.indexOf(":"),
              i = r.substring(2, n - 1),
              s = r.substring(n + 1);
            e.onSingle(Number(i), t(s));
          };
        await k(e.readableStream, r, e.textDecoder);
      }
      async function k(e, t, r) {
        let n = "",
          i = (e) => {
            let i = r.decode(e),
              s = i.split("\n");
            if (1 === s.length) n += s[0];
            else if (s.length > 1) {
              t(n + s[0]);
              for (let e = 1; e < s.length - 1; e++) t(s[e]);
              n = s[s.length - 1];
            }
          };
        "getReader" in e
          ? await U(e, i)
          : await new Promise((t) => {
              e.on("data", i), e.on("end", t);
            }),
          t(n);
      }
      async function U(e, t) {
        let r = e.getReader(),
          n = await r.read();
        for (; !n.done; ) t(n.value), (n = await r.read());
      }
      let j = (e, t) => {
          let r = e.AbortController ? new e.AbortController() : null,
            n = g(
              {
                ...e,
                contentTypeHeader: "application/json",
                batchModeHeader: "stream",
                getUrl: v,
                getBody: m,
              },
              r
            ),
            i = () => r?.abort(),
            s = n.then(async (n) => {
              if (!n.body) throw Error("Received response without body");
              let i = { response: n };
              return A({
                readableStream: n.body,
                onSingle: t,
                parse: (e) => ({ json: JSON.parse(e), meta: i }),
                signal: r?.signal,
                textDecoder: e.textDecoder,
              });
            });
          return { cancel: i, promise: s };
        },
        K = (e) => {
          let t = (function (e) {
            if (e) return e;
            if ("undefined" != typeof window && window.TextDecoder)
              return new window.TextDecoder();
            if ("undefined" != typeof globalThis && globalThis.TextDecoder)
              return new globalThis.TextDecoder();
            throw Error("No TextDecoder implementation found");
          })(e.opts.textDecoder);
          return (r, n) => {
            let i = r.map((e) => e.path).join(","),
              s = r.map((e) => e.input),
              { cancel: u, promise: o } = j(
                {
                  ...e,
                  textDecoder: t,
                  path: i,
                  inputs: s,
                  headers: () =>
                    e.opts.headers
                      ? "function" == typeof e.opts.headers
                        ? e.opts.headers({ opList: r })
                        : e.opts.headers
                      : {},
                },
                (e, t) => {
                  n(e, t);
                }
              );
            return { promise: o.then(() => []), cancel: u };
          };
        };
      R(K);
      let L = (e) => {
          if ("input" in e) {
            if (!(e.input instanceof FormData))
              throw Error("Input is not FormData");
            return e.input;
          }
        },
        N = (e) => {
          if ("mutation" !== e.type)
            throw Error("We only handle mutations with formdata");
          return O({ ...e, getUrl: () => `${e.url}/${e.path}`, getBody: L });
        };
      S({ requester: N });
    },
    26437: function (e, t, r) {
      let n;
      r.d(t, {
        ec: function () {
          return B;
        },
      });
      var i = r(32479),
        s = r(59594);
      function u(e, t) {
        let r = Array.isArray(e) ? e : [e],
          [n, i] = r,
          s = "string" != typeof n || "" === n ? [] : n.split(".");
        return i || (t && "any" !== t)
          ? [
              s,
              {
                ...(void 0 !== i && { input: i }),
                ...(t && "any" !== t && { type: t }),
              },
            ]
          : s.length
          ? [s]
          : [];
      }
      var o = r(88517),
        a = r(59461),
        l = r(29752),
        c = r(79345),
        h = r(3245);
      class d extends c.l {
        constructor(e, t) {
          super(),
            (this.client = e),
            (this.options = t),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(t);
        }
        bindMethods() {
          (this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.currentQuery.addObserver(this),
            f(this.currentQuery, this.options) && this.executeFetch(),
            this.updateTimers());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return p(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          );
        }
        shouldFetchOnWindowFocus() {
          return p(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          );
        }
        destroy() {
          (this.listeners = new Set()),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this);
        }
        setOptions(e, t) {
          let r = this.options,
            n = this.currentQuery;
          if (
            ((this.options = this.client.defaultQueryOptions(e)),
            (0, o.VS)(r, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.currentQuery,
                  observer: this,
                }),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled)
          )
            throw Error("Expected enabled to be a boolean");
          this.options.queryKey || (this.options.queryKey = r.queryKey),
            this.updateQuery();
          let i = this.hasListeners();
          i && y(this.currentQuery, n, this.options, r) && this.executeFetch(),
            this.updateResult(t),
            i &&
              (this.currentQuery !== n ||
                this.options.enabled !== r.enabled ||
                this.options.staleTime !== r.staleTime) &&
              this.updateStaleTimeout();
          let s = this.computeRefetchInterval();
          i &&
            (this.currentQuery !== n ||
              this.options.enabled !== r.enabled ||
              s !== this.currentRefetchInterval) &&
            this.updateRefetchInterval(s);
        }
        getOptimisticResult(e) {
          let t = this.client.getQueryCache().build(this.client, e);
          return this.createResult(t, e);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(e) {
          let t = {};
          return (
            Object.keys(e).forEach((r) => {
              Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), e[r]),
              });
            }),
            t
          );
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage: e, ...t } = {}) {
          return this.fetch({ ...t, meta: { refetchPage: e } });
        }
        fetchOptimistic(e) {
          let t = this.client.defaultQueryOptions(e),
            r = this.client.getQueryCache().build(this.client, t);
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, t))
          );
        }
        fetch(e) {
          var t;
          return this.executeFetch({
            ...e,
            cancelRefetch: null == (t = e.cancelRefetch) || t,
          }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(e) {
          this.updateQuery();
          let t = this.currentQuery.fetch(this.options, e);
          return (null != e && e.throwOnError) || (t = t.catch(o.ZT)), t;
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            o.sk ||
              this.currentResult.isStale ||
              !(0, o.PN)(this.options.staleTime))
          )
            return;
          let e = (0, o.Kp)(
            this.currentResult.dataUpdatedAt,
            this.options.staleTime
          );
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult();
          }, e + 1);
        }
        computeRefetchInterval() {
          var e;
          return "function" == typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : null != (e = this.options.refetchInterval) && e;
        }
        updateRefetchInterval(e) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = e),
            !o.sk &&
              !1 !== this.options.enabled &&
              (0, o.PN)(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || l.j.isFocused()) &&
                  this.executeFetch();
              }, this.currentRefetchInterval));
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0));
        }
        createResult(e, t) {
          let r;
          let n = this.currentQuery,
            i = this.options,
            s = this.currentResult,
            u = this.currentResultState,
            a = this.currentResultOptions,
            l = e !== n,
            c = l ? e.state : this.currentQueryInitialState,
            d = l ? this.currentResult : this.previousQueryResult,
            { state: p } = e,
            {
              dataUpdatedAt: m,
              error: b,
              errorUpdatedAt: g,
              fetchStatus: O,
              status: w,
            } = p,
            C = !1,
            R = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && f(e, t),
              u = r && y(e, n, t, i);
            (s || u) &&
              ((O = (0, h.Kw)(e.options.networkMode) ? "fetching" : "paused"),
              m || (w = "loading")),
              "isRestoring" === t._optimisticResults && (O = "idle");
          }
          if (
            t.keepPreviousData &&
            !p.dataUpdatedAt &&
            null != d &&
            d.isSuccess &&
            "error" !== w
          )
            (r = d.data), (m = d.dataUpdatedAt), (w = d.status), (C = !0);
          else if (t.select && void 0 !== p.data) {
            if (
              s &&
              p.data === (null == u ? void 0 : u.data) &&
              t.select === this.selectFn
            )
              r = this.selectResult;
            else
              try {
                (this.selectFn = t.select),
                  (r = t.select(p.data)),
                  (r = (0, o.oE)(null == s ? void 0 : s.data, r, t)),
                  (this.selectResult = r),
                  (this.selectError = null);
              } catch (e) {
                this.selectError = e;
              }
          } else r = p.data;
          if (void 0 !== t.placeholderData && void 0 === r && "loading" === w) {
            let e;
            if (
              null != s &&
              s.isPlaceholderData &&
              t.placeholderData === (null == a ? void 0 : a.placeholderData)
            )
              e = s.data;
            else if (
              ((e =
                "function" == typeof t.placeholderData
                  ? t.placeholderData()
                  : t.placeholderData),
              t.select && void 0 !== e)
            )
              try {
                (e = t.select(e)), (this.selectError = null);
              } catch (e) {
                this.selectError = e;
              }
            void 0 !== e &&
              ((w = "success"),
              (r = (0, o.oE)(null == s ? void 0 : s.data, e, t)),
              (R = !0));
          }
          this.selectError &&
            ((b = this.selectError),
            (r = this.selectResult),
            (g = Date.now()),
            (w = "error"));
          let q = "fetching" === O,
            S = "loading" === w,
            E = "error" === w,
            Q = {
              status: w,
              fetchStatus: O,
              isLoading: S,
              isSuccess: "success" === w,
              isError: E,
              isInitialLoading: S && q,
              data: r,
              dataUpdatedAt: m,
              error: b,
              errorUpdatedAt: g,
              failureCount: p.fetchFailureCount,
              failureReason: p.fetchFailureReason,
              errorUpdateCount: p.errorUpdateCount,
              isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
              isFetchedAfterMount:
                p.dataUpdateCount > c.dataUpdateCount ||
                p.errorUpdateCount > c.errorUpdateCount,
              isFetching: q,
              isRefetching: q && !S,
              isLoadingError: E && 0 === p.dataUpdatedAt,
              isPaused: "paused" === O,
              isPlaceholderData: R,
              isPreviousData: C,
              isRefetchError: E && 0 !== p.dataUpdatedAt,
              isStale: v(e, t),
              refetch: this.refetch,
              remove: this.remove,
            };
          return Q;
        }
        updateResult(e) {
          let t = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            (0, o.VS)(r, t))
          )
            return;
          this.currentResult = r;
          let n = { cache: !0 };
          (null == e ? void 0 : e.listeners) !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options;
              if ("all" === e || (!e && !this.trackedProps.size)) return !0;
              let r = new Set(null != e ? e : this.trackedProps);
              return (
                this.options.useErrorBoundary && r.add("error"),
                Object.keys(this.currentResult).some((e) => {
                  let n = this.currentResult[e] !== t[e];
                  return n && r.has(e);
                })
              );
            })() &&
            (n.listeners = !0),
            this.notify({ ...n, ...e });
        }
        updateQuery() {
          let e = this.client.getQueryCache().build(this.client, this.options);
          if (e === this.currentQuery) return;
          let t = this.currentQuery;
          (this.currentQuery = e),
            (this.currentQueryInitialState = e.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == t || t.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate(e) {
          let t = {};
          "success" === e.type
            ? (t.onSuccess = !e.manual)
            : "error" !== e.type || (0, h.DV)(e.error) || (t.onError = !0),
            this.updateResult(t),
            this.hasListeners() && this.updateTimers();
        }
        notify(e) {
          a.V.batch(() => {
            var t, r, n, i, s, u, o, a;
            e.onSuccess
              ? (null == (t = (r = this.options).onSuccess) ||
                  t.call(r, this.currentResult.data),
                null == (n = (i = this.options).onSettled) ||
                  n.call(i, this.currentResult.data, null))
              : e.onError &&
                (null == (s = (u = this.options).onError) ||
                  s.call(u, this.currentResult.error),
                null == (o = (a = this.options).onSettled) ||
                  o.call(a, void 0, this.currentResult.error)),
              e.listeners &&
                this.listeners.forEach(({ listener: e }) => {
                  e(this.currentResult);
                }),
              e.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated",
                  });
          });
        }
      }
      function f(e, t) {
        return (
          (!1 !== t.enabled &&
            !e.state.dataUpdatedAt &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (e.state.dataUpdatedAt > 0 && p(e, t, t.refetchOnMount))
        );
      }
      function p(e, t, r) {
        if (!1 !== t.enabled) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && v(e, t));
        }
        return !1;
      }
      function y(e, t, r, n) {
        return (
          !1 !== r.enabled &&
          (e !== t || !1 === n.enabled) &&
          (!r.suspense || "error" !== e.state.status) &&
          v(e, r)
        );
      }
      function v(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      var m = r(27024),
        b = r(56769);
      let g = b.useSyncExternalStore,
        O = m.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        w = () => m.useContext(O);
      var C = r(87040);
      let R = m.createContext(!1),
        q = () => m.useContext(R);
      function S(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      R.Provider;
      let E = (e, t) => {
          (e.suspense || e.useErrorBoundary) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        Q = (e) => {
          m.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        P = ({
          result: e,
          errorResetBoundary: t,
          useErrorBoundary: r,
          query: n,
        }) => e.isError && !t.isReset() && !e.isFetching && S(r, [e.error, n]),
        x = (e) => {
          e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3);
        },
        D = (e, t) => e.isLoading && e.isFetching && !t,
        T = (e, t, r) => (null == e ? void 0 : e.suspense) && D(t, r),
        F = (e, t, r) =>
          t
            .fetchOptimistic(e)
            .then(({ data: t }) => {
              null == e.onSuccess || e.onSuccess(t),
                null == e.onSettled || e.onSettled(t, null);
            })
            .catch((t) => {
              r.clearReset(),
                null == e.onError || e.onError(t),
                null == e.onSettled || e.onSettled(void 0, t);
            });
      function M(e, t) {
        let r = (0, C.NL)({ context: e.context }),
          n = q(),
          i = w(),
          s = r.defaultQueryOptions(e);
        (s._optimisticResults = n ? "isRestoring" : "optimistic"),
          s.onError && (s.onError = a.V.batchCalls(s.onError)),
          s.onSuccess && (s.onSuccess = a.V.batchCalls(s.onSuccess)),
          s.onSettled && (s.onSettled = a.V.batchCalls(s.onSettled)),
          x(s),
          E(s, i),
          Q(i);
        let [u] = m.useState(() => new t(r, s)),
          o = u.getOptimisticResult(s);
        if (
          (g(
            m.useCallback(
              (e) => {
                let t = n ? () => void 0 : u.subscribe(a.V.batchCalls(e));
                return u.updateResult(), t;
              },
              [u, n]
            ),
            () => u.getCurrentResult(),
            () => u.getCurrentResult()
          ),
          m.useEffect(() => {
            u.setOptions(s, { listeners: !1 });
          }, [s, u]),
          T(s, o, n))
        )
          throw F(s, u, i);
        if (
          P({
            result: o,
            errorResetBoundary: i,
            useErrorBoundary: s.useErrorBoundary,
            query: u.getCurrentQuery(),
          })
        )
          throw o.error;
        return s.notifyOnChangeProps ? o : u.trackResult(o);
      }
      var I = r(29116);
      class A extends c.l {
        constructor(e, t) {
          super(),
            (this.client = e),
            this.setOptions(t),
            this.bindMethods(),
            this.updateResult();
        }
        bindMethods() {
          (this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this));
        }
        setOptions(e) {
          var t;
          let r = this.options;
          (this.options = this.client.defaultMutationOptions(e)),
            (0, o.VS)(r, this.options) ||
              this.client
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.currentMutation,
                  observer: this,
                }),
            null == (t = this.currentMutation) || t.setOptions(this.options);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.currentMutation) || e.removeObserver(this);
          }
        }
        onMutationUpdate(e) {
          this.updateResult();
          let t = { listeners: !0 };
          "success" === e.type
            ? (t.onSuccess = !0)
            : "error" === e.type && (t.onError = !0),
            this.notify(t);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        reset() {
          (this.currentMutation = void 0),
            this.updateResult(),
            this.notify({ listeners: !0 });
        }
        mutate(e, t) {
          return (
            (this.mutateOptions = t),
            this.currentMutation && this.currentMutation.removeObserver(this),
            (this.currentMutation = this.client
              .getMutationCache()
              .build(this.client, {
                ...this.options,
                variables: void 0 !== e ? e : this.options.variables,
              })),
            this.currentMutation.addObserver(this),
            this.currentMutation.execute()
          );
        }
        updateResult() {
          let e = this.currentMutation
              ? this.currentMutation.state
              : (0, I.R)(),
            t = {
              ...e,
              isLoading: "loading" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          this.currentResult = t;
        }
        notify(e) {
          a.V.batch(() => {
            if (this.mutateOptions && this.hasListeners()) {
              var t, r, n, i, s, u, o, a;
              e.onSuccess
                ? (null == (t = (r = this.mutateOptions).onSuccess) ||
                    t.call(
                      r,
                      this.currentResult.data,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (n = (i = this.mutateOptions).onSettled) ||
                    n.call(
                      i,
                      this.currentResult.data,
                      null,
                      this.currentResult.variables,
                      this.currentResult.context
                    ))
                : e.onError &&
                  (null == (s = (u = this.mutateOptions).onError) ||
                    s.call(
                      u,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (o = (a = this.mutateOptions).onSettled) ||
                    o.call(
                      a,
                      void 0,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ));
            }
            e.listeners &&
              this.listeners.forEach(({ listener: e }) => {
                e(this.currentResult);
              });
          });
        }
      }
      function k() {}
      var U = r(78070);
      class j extends d {
        constructor(e, t) {
          super(e, t);
        }
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(e, t) {
          super.setOptions({ ...e, behavior: (0, U.Gm)() }, t);
        }
        getOptimisticResult(e) {
          return (e.behavior = (0, U.Gm)()), super.getOptimisticResult(e);
        }
        fetchNextPage({ pageParam: e, ...t } = {}) {
          return this.fetch({
            ...t,
            meta: { fetchMore: { direction: "forward", pageParam: e } },
          });
        }
        fetchPreviousPage({ pageParam: e, ...t } = {}) {
          return this.fetch({
            ...t,
            meta: { fetchMore: { direction: "backward", pageParam: e } },
          });
        }
        createResult(e, t) {
          var r, n, i, s, u, o;
          let { state: a } = e,
            l = super.createResult(e, t),
            { isFetching: c, isRefetching: h } = l,
            d =
              c &&
              (null == (r = a.fetchMeta)
                ? void 0
                : null == (n = r.fetchMore)
                ? void 0
                : n.direction) === "forward",
            f =
              c &&
              (null == (i = a.fetchMeta)
                ? void 0
                : null == (s = i.fetchMore)
                ? void 0
                : s.direction) === "backward";
          return {
            ...l,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, U.Qy)(t, null == (u = a.data) ? void 0 : u.pages),
            hasPreviousPage: (0, U.ZF)(
              t,
              null == (o = a.data) ? void 0 : o.pages
            ),
            isFetchingNextPage: d,
            isFetchingPreviousPage: f,
            isRefetching: h && !d && !f,
          };
        }
      }
      class K extends c.l {
        constructor(e, t) {
          super(),
            (this.client = e),
            (this.queries = []),
            (this.result = []),
            (this.observers = []),
            (this.observersMap = {}),
            t && this.setQueries(t);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.observers.forEach((e) => {
              e.subscribe((t) => {
                this.onUpdate(e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            this.observers.forEach((e) => {
              e.destroy();
            });
        }
        setQueries(e, t) {
          (this.queries = e),
            a.V.batch(() => {
              let e = this.observers,
                r = this.findMatchingObservers(this.queries);
              r.forEach((e) =>
                e.observer.setOptions(e.defaultedQueryOptions, t)
              );
              let n = r.map((e) => e.observer),
                i = Object.fromEntries(n.map((e) => [e.options.queryHash, e])),
                s = n.map((e) => e.getCurrentResult()),
                u = n.some((t, r) => t !== e[r]);
              (e.length !== n.length || u) &&
                ((this.observers = n),
                (this.observersMap = i),
                (this.result = s),
                this.hasListeners() &&
                  ((0, o.e5)(e, n).forEach((e) => {
                    e.destroy();
                  }),
                  (0, o.e5)(n, e).forEach((e) => {
                    e.subscribe((t) => {
                      this.onUpdate(e, t);
                    });
                  }),
                  this.notify()));
            });
        }
        getCurrentResult() {
          return this.result;
        }
        getQueries() {
          return this.observers.map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return this.observers;
        }
        getOptimisticResult(e) {
          return this.findMatchingObservers(e).map((e) =>
            e.observer.getOptimisticResult(e.defaultedQueryOptions)
          );
        }
        findMatchingObservers(e) {
          let t = this.observers,
            r = new Map(t.map((e) => [e.options.queryHash, e])),
            n = e.map((e) => this.client.defaultQueryOptions(e)),
            i = n.flatMap((e) => {
              let t = r.get(e.queryHash);
              return null != t
                ? [{ defaultedQueryOptions: e, observer: t }]
                : [];
            }),
            s = new Set(i.map((e) => e.defaultedQueryOptions.queryHash)),
            u = n.filter((e) => !s.has(e.queryHash)),
            o = new Set(i.map((e) => e.observer)),
            a = t.filter((e) => !o.has(e)),
            l = (e) => {
              let t = this.client.defaultQueryOptions(e),
                r = this.observersMap[t.queryHash];
              return null != r ? r : new d(this.client, t);
            },
            c = u.map((e, t) => {
              if (e.keepPreviousData) {
                let r = a[t];
                if (void 0 !== r)
                  return { defaultedQueryOptions: e, observer: r };
              }
              return { defaultedQueryOptions: e, observer: l(e) };
            }),
            h = (e, t) =>
              n.indexOf(e.defaultedQueryOptions) -
              n.indexOf(t.defaultedQueryOptions);
          return i.concat(c).sort(h);
        }
        onUpdate(e, t) {
          let r = this.observers.indexOf(e);
          -1 !== r &&
            ((this.result = (0, o.Rc)(this.result, r, t)), this.notify());
        }
        notify() {
          a.V.batch(() => {
            this.listeners.forEach(({ listener: e }) => {
              e(this.result);
            });
          });
        }
      }
      function L(e, t) {
        return e.length ? (void 0 === t ? [e] : [e, t]) : [];
      }
      let N = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
        _ = (0, m.createContext)(null);
      function V(e, t) {
        let [r, n] = e;
        return [r, n, t?.trpc];
      }
      function H(e) {
        let t = (0, m.useRef)(e);
        return (t.current.path = e.path), t.current;
      }
      function B(e) {
        let t = (function (e) {
            let t =
                (e?.overrides ?? e?.unstable_overrides)?.useMutation
                  ?.onSuccess ?? ((e) => e.originalFn()),
              r = e?.context ?? _,
              n = e?.reactQueryContext,
              l = (e) => (0, i.BJ)(e),
              c = (e) => {
                let {
                    abortOnUnmount: t = !1,
                    client: n,
                    queryClient: i,
                    ssrContext: s,
                  } = e,
                  [o, a] = (0, m.useState)(e.ssrState ?? !1);
                return (
                  (0, m.useEffect)(() => {
                    a((e) => !!e && "mounted");
                  }, []),
                  m.createElement(
                    r.Provider,
                    {
                      value: {
                        abortOnUnmount: t,
                        queryClient: i,
                        client: n,
                        ssrContext: s ?? null,
                        ssrState: o,
                        fetchQuery: (0, m.useCallback)(
                          (e, t) =>
                            i.fetchQuery({
                              ...t,
                              queryKey: u(e, "query"),
                              queryFn: () => n.query(...V(e, t)),
                            }),
                          [n, i]
                        ),
                        fetchInfiniteQuery: (0, m.useCallback)(
                          (e, t) =>
                            i.fetchInfiniteQuery({
                              ...t,
                              queryKey: u(e, "infinite"),
                              queryFn: ({ pageParam: r }) => {
                                let [i, s] = e,
                                  u = { ...s, cursor: r };
                                return n.query(...V([i, u], t));
                              },
                            }),
                          [n, i]
                        ),
                        prefetchQuery: (0, m.useCallback)(
                          (e, t) =>
                            i.prefetchQuery({
                              ...t,
                              queryKey: u(e, "query"),
                              queryFn: () => n.query(...V(e, t)),
                            }),
                          [n, i]
                        ),
                        prefetchInfiniteQuery: (0, m.useCallback)(
                          (e, t) =>
                            i.prefetchInfiniteQuery({
                              ...t,
                              queryKey: u(e, "infinite"),
                              queryFn: ({ pageParam: r }) => {
                                let [i, s] = e,
                                  u = { ...s, cursor: r };
                                return n.query(...V([i, u], t));
                              },
                            }),
                          [n, i]
                        ),
                        ensureQueryData: (0, m.useCallback)(
                          (e, t) =>
                            i.ensureQueryData({
                              ...t,
                              queryKey: u(e, "query"),
                              queryFn: () => n.query(...V(e, t)),
                            }),
                          [n, i]
                        ),
                        invalidateQueries: (0, m.useCallback)(
                          (e, t, r) =>
                            i.invalidateQueries(
                              { ...t, queryKey: u(e, "any") },
                              r
                            ),
                          [i]
                        ),
                        resetQueries: (0, m.useCallback)(
                          (...e) => {
                            let [t, r, n] = e;
                            return i.resetQueries(
                              { ...r, queryKey: u(t, "any") },
                              n
                            );
                          },
                          [i]
                        ),
                        refetchQueries: (0, m.useCallback)(
                          (...e) => {
                            let [t, r, n] = e;
                            return i.refetchQueries(
                              { ...r, queryKey: u(t, "any") },
                              n
                            );
                          },
                          [i]
                        ),
                        cancelQuery: (0, m.useCallback)(
                          (e) => i.cancelQueries({ queryKey: u(e, "any") }),
                          [i]
                        ),
                        setQueryData: (0, m.useCallback)(
                          (...e) => {
                            let [t, ...r] = e;
                            return i.setQueryData(u(t, "query"), ...r);
                          },
                          [i]
                        ),
                        getQueryData: (0, m.useCallback)(
                          (...e) => {
                            let [t, ...r] = e;
                            return i.getQueryData(u(t, "query"), ...r);
                          },
                          [i]
                        ),
                        setInfiniteQueryData: (0, m.useCallback)(
                          (...e) => {
                            let [t, ...r] = e;
                            return i.setQueryData(u(t, "infinite"), ...r);
                          },
                          [i]
                        ),
                        getInfiniteQueryData: (0, m.useCallback)(
                          (...e) => {
                            let [t, ...r] = e;
                            return i.getQueryData(u(t, "infinite"), ...r);
                          },
                          [i]
                        ),
                      },
                    },
                    e.children
                  )
                );
              };
            function h() {
              return m.useContext(r);
            }
            function f(e, t, r) {
              let { queryClient: n, ssrState: i } = h();
              return i &&
                "mounted" !== i &&
                "error" === n.getQueryCache().find(u(e, t))?.state.status
                ? { retryOnMount: !1, ...r }
                : r;
            }
            let p = (e, t) => {
                let {
                    ssrState: r,
                    queryClient: n,
                    prefetchQuery: i,
                    client: o,
                  } = h(),
                  l = (0, s.IX)((e) => {
                    let t = e.path.join("."),
                      [r, ...n] = e.args,
                      i = L(t, r),
                      s = {
                        queryKey: i,
                        queryFn: () => o.query(t, r),
                        ...n[0],
                      };
                    return s;
                  }),
                  c = e(l);
                if ("undefined" == typeof window && "prepass" === r)
                  for (let e of c) {
                    let t = e;
                    t.trpc?.ssr === !1 ||
                      n.getQueryCache().find(u(t.queryKey, "query")) ||
                      i(t.queryKey, t);
                  }
                return (function ({ queries: e, context: t }) {
                  let r = (0, C.NL)({ context: t }),
                    n = q(),
                    i = w(),
                    s = m.useMemo(
                      () =>
                        e.map((e) => {
                          let t = r.defaultQueryOptions(e);
                          return (
                            (t._optimisticResults = n
                              ? "isRestoring"
                              : "optimistic"),
                            t
                          );
                        }),
                      [e, r, n]
                    );
                  s.forEach((e) => {
                    x(e), E(e, i);
                  }),
                    Q(i);
                  let [u] = m.useState(() => new K(r, s)),
                    o = u.getOptimisticResult(s);
                  g(
                    m.useCallback(
                      (e) =>
                        n ? () => void 0 : u.subscribe(a.V.batchCalls(e)),
                      [u, n]
                    ),
                    () => u.getCurrentResult(),
                    () => u.getCurrentResult()
                  ),
                    m.useEffect(() => {
                      u.setQueries(s, { listeners: !1 });
                    }, [s, u]);
                  let l = o.some((e, t) => T(s[t], e, n)),
                    c = l
                      ? o.flatMap((e, t) => {
                          let r = s[t],
                            o = u.getObservers()[t];
                          if (r && o) {
                            if (T(r, e, n)) return F(r, o, i);
                            D(e, n) && F(r, o, i);
                          }
                          return [];
                        })
                      : [];
                  if (c.length > 0) throw Promise.all(c);
                  let h = u.getQueries(),
                    d = o.find((e, t) => {
                      var r, n;
                      return P({
                        result: e,
                        errorResetBoundary: i,
                        useErrorBoundary:
                          null !=
                            (r =
                              null == (n = s[t])
                                ? void 0
                                : n.useErrorBoundary) && r,
                        query: h[t],
                      });
                    });
                  if (null != d && d.error) throw d.error;
                  return o;
                })({
                  queries: c.map((e) => ({
                    ...e,
                    queryKey: u(e.queryKey, "query"),
                  })),
                  context: t,
                });
              },
              y = (e, t) => {
                let r = (0, m.useMemo)(
                  () => (t ? e.runtime.transformer.deserialize(t) : t),
                  [t, e]
                );
                return r;
              };
            return {
              Provider: c,
              createClient: l,
              useContext: h,
              useQuery: function (t, r) {
                let i = h();
                if (!i)
                  throw Error(
                    "Unable to retrieve application context. Did you forget to wrap your App inside `withTRPC` HoC?"
                  );
                let {
                    abortOnUnmount: s,
                    client: a,
                    ssrState: l,
                    queryClient: c,
                    prefetchQuery: p,
                  } = i,
                  y = c.getQueryDefaults(u(t, "query"));
                "undefined" != typeof window ||
                  "prepass" !== l ||
                  r?.trpc?.ssr === !1 ||
                  (r?.enabled ?? y?.enabled) === !1 ||
                  c.getQueryCache().find(u(t, "query")) ||
                  p(t, r);
                let v = f(t, "query", { ...y, ...r }),
                  m = r?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? s,
                  b = (function (e, t, r) {
                    let n = (0, o._v)(e, void 0, void 0);
                    return M(n, d);
                  })({
                    ...v,
                    queryKey: u(t, "query"),
                    queryFn: (e) => {
                      let r = {
                        ...v,
                        trpc: {
                          ...v?.trpc,
                          ...(m ? { signal: e.signal } : {}),
                        },
                      };
                      return a.query(...V(t, r));
                    },
                    context: n,
                  });
                return (b.trpc = H({ path: t[0] })), b;
              },
              useQueries: p,
              useMutation: function (e, r) {
                let { client: i } = h(),
                  s = (0, C.NL)({ context: n }),
                  u = Array.isArray(e) ? e[0] : e,
                  l = s.getMutationDefaults([u.split(".")]),
                  c = (function (e, t, r) {
                    let n = (0, o.lV)(e, void 0, void 0),
                      i = (0, C.NL)({ context: n.context }),
                      [s] = m.useState(() => new A(i, n));
                    m.useEffect(() => {
                      s.setOptions(n);
                    }, [s, n]);
                    let u = g(
                        m.useCallback(
                          (e) => s.subscribe(a.V.batchCalls(e)),
                          [s]
                        ),
                        () => s.getCurrentResult(),
                        () => s.getCurrentResult()
                      ),
                      l = m.useCallback(
                        (e, t) => {
                          s.mutate(e, t).catch(k);
                        },
                        [s]
                      );
                    if (u.error && S(s.options.useErrorBoundary, [u.error]))
                      throw u.error;
                    return { ...u, mutate: l, mutateAsync: u.mutate };
                  })({
                    ...r,
                    mutationKey: [u.split(".")],
                    mutationFn: (e) => i.mutation(...V([u, e], r)),
                    context: n,
                    onSuccess(...e) {
                      let n = () =>
                        r?.onSuccess?.(...e) ?? l?.onSuccess?.(...e);
                      return t({
                        originalFn: n,
                        queryClient: s,
                        meta: r?.meta ?? l?.meta ?? {},
                      });
                    },
                  });
                return (c.trpc = H({ path: u })), c;
              },
              useSubscription: function (e, t) {
                let r = t?.enabled ?? !0,
                  n = (0, o.yF)(e),
                  { client: i } = h(),
                  s = (0, m.useRef)(t);
                (s.current = t),
                  (0, m.useEffect)(() => {
                    if (!r) return;
                    let [t, n] = e,
                      u = !1,
                      o = i.subscription(t, n ?? void 0, {
                        onStarted: () => {
                          u || s.current.onStarted?.();
                        },
                        onData: (e) => {
                          u || s.current.onData(e);
                        },
                        onError: (e) => {
                          u || s.current.onError?.(e);
                        },
                      });
                    return () => {
                      (u = !0), o.unsubscribe();
                    };
                  }, [n, r]);
              },
              useDehydratedState: y,
              useInfiniteQuery: function (e, t) {
                let [r, i] = e,
                  {
                    client: s,
                    ssrState: a,
                    prefetchInfiniteQuery: l,
                    queryClient: c,
                    abortOnUnmount: d,
                  } = h(),
                  p = c.getQueryDefaults(u(e, "infinite"));
                "undefined" != typeof window ||
                  "prepass" !== a ||
                  t?.trpc?.ssr === !1 ||
                  (t?.enabled ?? p?.enabled) === !1 ||
                  c.getQueryCache().find(u(e, "infinite")) ||
                  l(e, { ...p, ...t });
                let y = f(e, "infinite", { ...p, ...t }),
                  v = t?.trpc?.abortOnUnmount ?? d,
                  m = (function (e, t, r) {
                    let n = (0, o._v)(e, void 0, void 0);
                    return M(n, j);
                  })({
                    ...y,
                    queryKey: u(e, "infinite"),
                    queryFn: (e) => {
                      let n = {
                          ...y,
                          trpc: {
                            ...y?.trpc,
                            ...(v ? { signal: e.signal } : {}),
                          },
                        },
                        u = {
                          ...(i ?? {}),
                          cursor: e.pageParam ?? t?.initialCursor,
                        };
                      return s.query(...V([r, u], n));
                    },
                    context: n,
                  });
                return (m.trpc = H({ path: r })), m;
              },
            };
          })(e),
          r = (0, s.yh)((e) =>
            "useContext" === e
              ? () => {
                  let e = t.useContext();
                  return (0, m.useMemo)(
                    () =>
                      (0, s.yh)((t) =>
                        "client" === t
                          ? (0, i.Bm)(e.client)
                          : N.includes(t)
                          ? e[t]
                          : (0, s.IX)(({ path: r, args: n }) => {
                              let i = [t, ...r],
                                s = i.pop(),
                                u = i.join("."),
                                {
                                  queryKey: o,
                                  rest: a,
                                  updater: l,
                                } = ((e) => {
                                  if (
                                    ["setData", "setInfiniteData"].includes(e)
                                  ) {
                                    let [e, t, ...r] = n,
                                      i = L(u, e);
                                    return { queryKey: i, updater: t, rest: r };
                                  }
                                  let [t, ...r] = n,
                                    i = L(u, t);
                                  return { queryKey: i, rest: r };
                                })(s);
                              return {
                                fetch: () => e.fetchQuery(o, ...a),
                                fetchInfinite: () =>
                                  e.fetchInfiniteQuery(o, ...a),
                                prefetch: () => e.prefetchQuery(o, ...a),
                                prefetchInfinite: () =>
                                  e.prefetchInfiniteQuery(o, ...a),
                                ensureData: () => e.ensureQueryData(o, ...a),
                                invalidate: () => e.invalidateQueries(o, ...a),
                                reset: () => e.resetQueries(o, ...a),
                                refetch: () => e.refetchQueries(o, ...a),
                                cancel: () => e.cancelQuery(o, ...a),
                                setData: () => {
                                  e.setQueryData(o, l, ...a);
                                },
                                setInfiniteData: () => {
                                  e.setInfiniteQueryData(o, l, ...a);
                                },
                                getData: () => e.getQueryData(o),
                                getInfiniteData: () =>
                                  e.getInfiniteQueryData(o),
                              }[s]();
                            })
                      ),
                    [e]
                  );
                }
              : t.hasOwnProperty(e)
              ? t[e]
              : (0, s.IX)((r) => {
                  let n = r.args,
                    i = [e, ...r.path],
                    s = i.pop(),
                    o = i.join(".");
                  if ("useMutation" === s) return t[s](o, ...n);
                  let [a, ...l] = n,
                    c = L(o, a);
                  if ("getQueryKey" === s) return u(c, l[0] ?? "any");
                  if ("_def" === s) return { path: i };
                  if (s.startsWith("useSuspense")) {
                    let e = l[0] || {},
                      r = t[
                        "useSuspenseQuery" === s
                          ? "useQuery"
                          : "useInfiniteQuery"
                      ](c, { ...e, suspense: !0, enabled: !0 });
                    return [r.data, r];
                  }
                  return t[s](c, ...l);
                })
          );
        return r;
      }
    },
    59594: function (e, t, r) {
      function n(e) {
        let t = Object.create(null);
        for (let r in e) {
          let n = e[r];
          t[n] = r;
        }
        return t;
      }
      r.d(t, {
        yh: function () {
          return o;
        },
        IX: function () {
          return u;
        },
      });
      let i = {
        PARSE_ERROR: -32700,
        BAD_REQUEST: -32600,
        INTERNAL_SERVER_ERROR: -32603,
        UNAUTHORIZED: -32001,
        FORBIDDEN: -32003,
        NOT_FOUND: -32004,
        METHOD_NOT_SUPPORTED: -32005,
        TIMEOUT: -32008,
        CONFLICT: -32009,
        PRECONDITION_FAILED: -32012,
        PAYLOAD_TOO_LARGE: -32013,
        UNPROCESSABLE_CONTENT: -32022,
        TOO_MANY_REQUESTS: -32029,
        CLIENT_CLOSED_REQUEST: -32099,
      };
      n(i), n(i);
      let s = () => {},
        u = (e) =>
          (function e(t, r) {
            let n = new Proxy(s, {
              get(n, i) {
                if ("string" == typeof i && "then" !== i)
                  return e(t, [...r, i]);
              },
              apply(e, n, i) {
                let s = "apply" === r[r.length - 1];
                return t({
                  args: s ? (i.length >= 2 ? i[1] : []) : i,
                  path: s ? r.slice(0, -1) : r,
                });
              },
            });
            return n;
          })(e, []),
        o = (e) =>
          new Proxy(s, {
            get(t, r) {
              if ("string" == typeof r && "then" !== r) return e(r);
            },
          });
    },
  },
]);
