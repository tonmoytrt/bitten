(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8761],
  {
    51723: function (e, t, r) {
      "use strict";
      t.Z = function () {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
    },
    45387: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addLocale = void 0),
        r(6034),
        (t.addLocale = function (e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          return e;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    36653: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    49515: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hasBasePath = function (e) {
          return n.pathHasPrefix(e, "");
        });
      var n = r(7585);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    46389: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(39636).Z,
        o = r(56580).Z,
        a = n(r(27024)),
        l = r(99218),
        u = r(24238),
        c = r(29391),
        i = r(83083),
        s = r(45387),
        f = r(54804),
        d = r(31682),
        p = r(63671),
        h = r(36653),
        y = r(61034);
      let g = new Set();
      function m(e, t, r, n, o) {
        if (o || u.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              a = t + "%" + r + "%" + o;
            if (g.has(a)) return;
            g.add(a);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function v(e) {
        return "string" == typeof e ? e : c.formatUrl(e);
      }
      let b = a.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: c,
            as: g,
            children: b,
            prefetch: _,
            passHref: P,
            replace: j,
            shallow: O,
            scroll: R,
            locale: x,
            onClick: E,
            onMouseEnter: C,
            onTouchStart: M,
            legacyBehavior: S = !1,
          } = e,
          k = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = b),
          S &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        let w = !1 !== _,
          I = a.default.useContext(f.RouterContext),
          L = a.default.useContext(d.AppRouterContext),
          T = null != I ? I : L,
          A = !I,
          { href: U, as: N } = a.default.useMemo(() => {
            if (!I) {
              let e = v(c);
              return { href: e, as: g ? v(g) : e };
            }
            let [e, t] = l.resolveHref(I, c, !0);
            return { href: e, as: g ? l.resolveHref(I, g) : t || e };
          }, [I, c, g]),
          W = a.default.useRef(U),
          D = a.default.useRef(N);
        S && (n = a.default.Children.only(r));
        let z = S ? n && "object" == typeof n && n.ref : t,
          [B, Z, $] = p.useIntersection({ rootMargin: "200px" }),
          q = a.default.useCallback(
            (e) => {
              (D.current !== N || W.current !== U) &&
                ($(), (D.current = N), (W.current = U)),
                B(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [N, z, U, $, B]
          );
        a.default.useEffect(() => {
          T && Z && w && m(T, U, N, { locale: x }, A);
        }, [N, U, Z, x, w, null == I ? void 0 : I.locale, T, A]);
        let F = {
          ref: q,
          onClick(e) {
            S || "function" != typeof E || E(e),
              S &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, c, i, s, f) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let t = e.currentTarget,
                        r = t.getAttribute("target");
                      return (
                        (r && "_self" !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!s && !u.isLocalURL(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: l,
                          locale: i,
                          scroll: c,
                        })
                      : t[o ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !f,
                        });
                  };
                  s ? a.default.startTransition(h) : h();
                })(e, T, U, N, j, O, R, x, A, w);
          },
          onMouseEnter(e) {
            S || "function" != typeof C || C(e),
              S &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              T &&
                (w || !A) &&
                m(
                  T,
                  U,
                  N,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  A
                );
          },
          onTouchStart(e) {
            S || "function" != typeof M || M(e),
              S &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              T &&
                (w || !A) &&
                m(
                  T,
                  U,
                  N,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  A
                );
          },
        };
        if (i.isAbsoluteUrl(N)) F.href = N;
        else if (!S || P || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== x ? x : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              h.getDomainLocale(
                N,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales
              );
          F.href =
            t ||
            y.addBasePath(
              s.addLocale(N, e, null == I ? void 0 : I.defaultLocale)
            );
        }
        return S
          ? a.default.cloneElement(n, F)
          : a.default.createElement("a", Object.assign({}, k, F), r);
      });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    97417: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cancelIdleCallback = t.requestIdleCallback = void 0);
      let r =
        ("undefined" != typeof self &&
          self.requestIdleCallback &&
          self.requestIdleCallback.bind(window)) ||
        function (e) {
          let t = Date.now();
          return self.setTimeout(function () {
            e({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - t));
              },
            });
          }, 1);
        };
      t.requestIdleCallback = r;
      let n =
        ("undefined" != typeof self &&
          self.cancelIdleCallback &&
          self.cancelIdleCallback.bind(window)) ||
        function (e) {
          return clearTimeout(e);
        };
      (t.cancelIdleCallback = n),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    63671: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: r, disabled: c } = e,
            i = c || !a,
            [s, f] = n.useState(!1),
            d = n.useRef(null),
            p = n.useCallback((e) => {
              d.current = e;
            }, []);
          n.useEffect(() => {
            if (a) {
              if (i || s) return;
              let e = d.current;
              if (e && e.tagName) {
                let n = (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = u.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map(),
                      a = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: a, elements: o }),
                      u.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    o.observe(e),
                    function () {
                      if ((a.delete(e), o.unobserve(e), 0 === a.size)) {
                        o.disconnect(), l.delete(n);
                        let e = u.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
                return n;
              }
            } else if (!s) {
              let e = o.requestIdleCallback(() => f(!0));
              return () => o.cancelIdleCallback(e);
            }
          }, [i, r, t, s, d.current]);
          let h = n.useCallback(() => {
            f(!1);
          }, []);
          return [p, s, h];
        });
      var n = r(27024),
        o = r(97417);
      let a = "function" == typeof IntersectionObserver,
        l = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    97593: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.escapeStringRegexp = function (e) {
          return r.test(e) ? e.replace(n, "\\$&") : e;
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
    },
    54804: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RouterContext = void 0);
      var n = (0, r(39636).Z)(r(27024));
      let o = n.default.createContext(null);
      t.RouterContext = o;
    },
    29391: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatUrl = a),
        (t.formatWithValidation = function (e) {
          return a(e);
        }),
        (t.urlObjectKeys = void 0);
      var n = (0, r(31764).Z)(r(81633));
      let o = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: r } = e,
          a = e.protocol || "",
          l = e.pathname || "",
          u = e.hash || "",
          c = e.query || "",
          i = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (i = t + e.host)
            : r &&
              ((i = t + (~r.indexOf(":") ? "[".concat(r, "]") : r)),
              e.port && (i += ":" + e.port)),
          c &&
            "object" == typeof c &&
            (c = String(n.urlQueryToSearchParams(c)));
        let s = e.search || (c && "?".concat(c)) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || o.test(a)) && !1 !== i)
            ? ((i = "//" + (i || "")), l && "/" !== l[0] && (l = "/" + l))
            : i || (i = ""),
          u && "#" !== u[0] && (u = "#" + u),
          s && "?" !== s[0] && (s = "?" + s),
          (l = l.replace(/[?#]/g, encodeURIComponent)),
          (s = s.replace("#", "%23")),
          "".concat(a).concat(i).concat(l).concat(s).concat(u)
        );
      }
      t.urlObjectKeys = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
    },
    78754: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.interpolateAs = function (e, t, r) {
          let a = "",
            l = o.getRouteRegex(e),
            u = l.groups,
            c = (t !== e ? n.getRouteMatcher(l)(t) : "") || r;
          a = e;
          let i = Object.keys(u);
          return (
            i.every((e) => {
              let t = c[e] || "",
                { repeat: r, optional: n } = u[e],
                o = "[".concat(r ? "..." : "").concat(e, "]");
              return (
                n && (o = "".concat(t ? "" : "/", "[").concat(o, "]")),
                r && !Array.isArray(t) && (t = [t]),
                (n || e in c) &&
                  (a =
                    a.replace(
                      o,
                      r
                        ? t.map((e) => encodeURIComponent(e)).join("/")
                        : encodeURIComponent(t)
                    ) || "/")
              );
            }) || (a = ""),
            { params: i, result: a }
          );
        });
      var n = r(274),
        o = r(46806);
    },
    43685: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isDynamicRoute = function (e) {
          return r.test(e);
        });
      let r = /\/\[[^/]+?\](?=\/|$)/;
    },
    24238: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isLocalURL = function (e) {
          if (!n.isAbsoluteUrl(e)) return !0;
          try {
            let t = n.getLocationOrigin(),
              r = new URL(e, t);
            return r.origin === t && o.hasBasePath(r.pathname);
          } catch (e) {
            return !1;
          }
        });
      var n = r(83083),
        o = r(49515);
    },
    22426: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.omit = function (e, t) {
          let r = {};
          return (
            Object.keys(e).forEach((n) => {
              t.includes(n) || (r[n] = e[n]);
            }),
            r
          );
        });
    },
    7585: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pathHasPrefix = function (e, t) {
          if ("string" != typeof e) return !1;
          let { pathname: r } = n.parsePath(e);
          return r === t || r.startsWith(t + "/");
        });
      var n = r(41486);
    },
    81633: function (e, t) {
      "use strict";
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.searchParamsToUrlQuery = function (e) {
          let t = {};
          return (
            e.forEach((e, r) => {
              void 0 === t[r]
                ? (t[r] = e)
                : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
            }),
            t
          );
        }),
        (t.urlQueryToSearchParams = function (e) {
          let t = new URLSearchParams();
          return (
            Object.entries(e).forEach((e) => {
              let [n, o] = e;
              Array.isArray(o)
                ? o.forEach((e) => t.append(n, r(e)))
                : t.set(n, r(o));
            }),
            t
          );
        }),
        (t.assign = function (e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          return (
            r.forEach((t) => {
              Array.from(t.keys()).forEach((t) => e.delete(t)),
                t.forEach((t, r) => e.append(r, t));
            }),
            e
          );
        });
    },
    99218: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveHref = function (e, t, r) {
          let f;
          let d = "string" == typeof t ? t : o.formatWithValidation(t),
            p = d.match(/^[a-zA-Z]{1,}:\/\//),
            h = p ? d.slice(p[0].length) : d,
            y = h.split("?");
          if ((y[0] || "").match(/(\/\/|\\)/)) {
            console.error(
              "Invalid href '"
                .concat(d, "' passed to next/router in page: '")
                .concat(
                  e.pathname,
                  "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
                )
            );
            let t = l.normalizeRepeatedSlashes(h);
            d = (p ? p[0] : "") + t;
          }
          if (!c.isLocalURL(d)) return r ? [d] : d;
          try {
            f = new URL(d.startsWith("#") ? e.asPath : e.pathname, "http://n");
          } catch (e) {
            f = new URL("/", "http://n");
          }
          try {
            let e = new URL(d, f);
            e.pathname = u.normalizePathTrailingSlash(e.pathname);
            let t = "";
            if (i.isDynamicRoute(e.pathname) && e.searchParams && r) {
              let r = n.searchParamsToUrlQuery(e.searchParams),
                { result: l, params: u } = s.interpolateAs(
                  e.pathname,
                  e.pathname,
                  r
                );
              l &&
                (t = o.formatWithValidation({
                  pathname: l,
                  hash: e.hash,
                  query: a.omit(r, u),
                }));
            }
            let l =
              e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
            return r ? [l, t || l] : l;
          } catch (e) {
            return r ? [d] : d;
          }
        });
      var n = r(81633),
        o = r(29391),
        a = r(22426),
        l = r(83083),
        u = r(6034),
        c = r(24238),
        i = r(43685),
        s = r(78754);
    },
    274: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRouteMatcher = function (e) {
          let { re: t, groups: r } = e;
          return (e) => {
            let o = t.exec(e);
            if (!o) return !1;
            let a = (e) => {
                try {
                  return decodeURIComponent(e);
                } catch (e) {
                  throw new n.DecodeError("failed to decode param");
                }
              },
              l = {};
            return (
              Object.keys(r).forEach((e) => {
                let t = r[e],
                  n = o[t.pos];
                void 0 !== n &&
                  (l[e] = ~n.indexOf("/")
                    ? n.split("/").map((e) => a(e))
                    : t.repeat
                    ? [a(n)]
                    : a(n));
              }),
              l
            );
          };
        });
      var n = r(83083);
    },
    46806: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRouteRegex = c),
        (t.getNamedRouteRegex = function (e) {
          let t = i(e);
          return n({}, c(e), {
            namedRegex: "^".concat(t.namedParameterizedRoute, "(?:/)?$"),
            routeKeys: t.routeKeys,
          });
        }),
        (t.getNamedMiddlewareRegex = function (e, t) {
          let { parameterizedRoute: r } = u(e),
            { catchAll: n = !0 } = t;
          if ("/" === r) return { namedRegex: "^/".concat(n ? ".*" : "", "$") };
          let { namedParameterizedRoute: o } = i(e);
          return {
            namedRegex: "^".concat(o).concat(n ? "(?:(/.*)?)" : "", "$"),
          };
        });
      var n = r(66480).Z,
        o = r(97593),
        a = r(53778);
      function l(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function u(e) {
        let t = a.removeTrailingSlash(e).slice(1).split("/"),
          r = {},
          n = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              if (!(e.startsWith("[") && e.endsWith("]")))
                return "/".concat(o.escapeStringRegexp(e));
              {
                let { key: t, optional: o, repeat: a } = l(e.slice(1, -1));
                return (
                  (r[t] = { pos: n++, repeat: a, optional: o }),
                  a ? (o ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function c(e) {
        let { parameterizedRoute: t, groups: r } = u(e);
        return { re: RegExp("^".concat(t, "(?:/)?$")), groups: r };
      }
      function i(e) {
        let t, r;
        let n = a.removeTrailingSlash(e).slice(1).split("/"),
          u =
            ((t = 97),
            (r = 1),
            () => {
              let e = "";
              for (let n = 0; n < r; n++)
                (e += String.fromCharCode(t)), ++t > 122 && (r++, (t = 97));
              return e;
            }),
          c = {};
        return {
          namedParameterizedRoute: n
            .map((e) => {
              if (!(e.startsWith("[") && e.endsWith("]")))
                return "/".concat(o.escapeStringRegexp(e));
              {
                let { key: t, optional: r, repeat: n } = l(e.slice(1, -1)),
                  o = t.replace(/\W/g, ""),
                  a = !1;
                return (
                  (0 === o.length || o.length > 30) && (a = !0),
                  isNaN(parseInt(o.slice(0, 1))) || (a = !0),
                  a && (o = u()),
                  (c[o] = t),
                  n
                    ? r
                      ? "(?:/(?<".concat(o, ">.+?))?")
                      : "/(?<".concat(o, ">.+?)")
                    : "/(?<".concat(o, ">[^/]+?)")
                );
              }
            })
            .join(""),
          routeKeys: c,
        };
      }
    },
    83083: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.execOnce = function (e) {
          let t,
            r = !1;
          return function () {
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
              o[a] = arguments[a];
            return r || ((r = !0), (t = e(...o))), t;
          };
        }),
        (t.getLocationOrigin = l),
        (t.getURL = function () {
          let { href: e } = window.location,
            t = l();
          return e.substring(t.length);
        }),
        (t.getDisplayName = u),
        (t.isResSent = c),
        (t.normalizeRepeatedSlashes = function (e) {
          let t = e.split("?"),
            r = t[0];
          return (
            r.replace(/\\/g, "/").replace(/\/\/+/g, "/") +
            (t[1] ? "?".concat(t.slice(1).join("?")) : "")
          );
        }),
        (t.loadGetInitialProps = i),
        (t.ST = t.SP = t.isAbsoluteUrl = t.WEB_VITALS = void 0);
      var n = r(45199).Z;
      t.WEB_VITALS = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => o.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return ""
          .concat(e, "//")
          .concat(t)
          .concat(r ? ":" + r : "");
      }
      function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function i(e, t) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = n(function* (e, t) {
          let r = t.res || (t.ctx && t.ctx.res);
          if (!e.getInitialProps)
            return t.ctx && t.Component
              ? { pageProps: yield i(t.Component, t.ctx) }
              : {};
          let n = yield e.getInitialProps(t);
          if (r && c(r)) return n;
          if (!n) {
            let t = '"'
              .concat(
                u(e),
                '.getInitialProps()" should resolve to an object. But found "'
              )
              .concat(n, '" instead.');
            throw Error(t);
          }
          return n;
        })).apply(this, arguments);
      }
      t.isAbsoluteUrl = a;
      let f = "undefined" != typeof performance;
      t.SP = f;
      let d =
        f &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
      (t.ST = d),
        (t.DecodeError = class extends Error {}),
        (t.NormalizeError = class extends Error {}),
        (t.PageNotFoundError = class extends Error {
          constructor(e) {
            super(),
              (this.code = "ENOENT"),
              (this.message = "Cannot find module for page: ".concat(e));
          }
        }),
        (t.MissingStaticPage = class extends Error {
          constructor(e, t) {
            super(),
              (this.message = "Failed to load static file for page: "
                .concat(e, " ")
                .concat(t));
          }
        }),
        (t.MiddlewareNotFoundError = class extends Error {
          constructor() {
            super(),
              (this.code = "ENOENT"),
              (this.message = "Cannot find the middleware module");
          }
        });
    },
    1432: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(27024),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        u =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function i(e, t, r) {
        var n,
          a = {},
          i = null,
          s = null;
        for (n in (void 0 !== r && (i = "" + r),
        void 0 !== t.key && (i = "" + t.key),
        void 0 !== t.ref && (s = t.ref),
        t))
          l.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: s,
          props: a,
          _owner: u.current,
        };
      }
      (t.Fragment = a), (t.jsx = i), (t.jsxs = i);
    },
    64618: function (e, t, r) {
      "use strict";
      e.exports = r(1432);
    },
    63911: function (e, t, r) {
      e.exports = r(46389);
    },
    45041: function (e, t, r) {
      e.exports = r(1919);
    },
  },
]);
