"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7183],
  {
    58104: function (t, e, i) {
      i.d(e, {
        p: function () {
          return r;
        },
      });
      var n = i(27024);
      let r = (0, n.createContext)({});
    },
    93367: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
      });
      var n = i(27024);
      let r = (0, n.createContext)(null);
    },
    20424: function (t, e, i) {
      i.d(e, {
        w: function () {
          return n;
        },
      });
      let n = { delta: 0, timestamp: 0, isProcessing: !1 };
    },
    20361: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return d;
        },
        Wi: function () {
          return c;
        },
        S6: function () {
          return a;
        },
      });
      var n = i(20424);
      let r = !0,
        s = !1,
        o = ["read", "update", "preRender", "render", "postRender"],
        a = o.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                i = [],
                n = 0,
                r = !1,
                s = !1,
                o = new WeakSet(),
                a = {
                  schedule: (t, s = !1, a = !1) => {
                    let l = a && r,
                      u = l ? e : i;
                    return (
                      s && o.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), l && r && (n = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1), o.delete(t);
                  },
                  process: (l) => {
                    if (r) {
                      s = !0;
                      return;
                    }
                    if (
                      ((r = !0),
                      ([e, i] = [i, e]),
                      (i.length = 0),
                      (n = e.length))
                    )
                      for (let i = 0; i < n; i++) {
                        let n = e[i];
                        n(l), o.has(n) && (a.schedule(n), t());
                      }
                    (r = !1), s && ((s = !1), a.process(l));
                  },
                };
              return a;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        l = (t) => a[t].process(n.w),
        u = (t) => {
          (s = !1),
            (n.w.delta = r
              ? 1e3 / 60
              : Math.max(Math.min(t - n.w.timestamp, 40), 1)),
            (n.w.timestamp = t),
            (n.w.isProcessing = !0),
            o.forEach(l),
            (n.w.isProcessing = !1),
            s && ((r = !1), requestAnimationFrame(u));
        },
        h = () => {
          (s = !0), (r = !0), n.w.isProcessing || requestAnimationFrame(u);
        },
        c = o.reduce((t, e) => {
          let i = a[e];
          return (
            (t[e] = (t, e = !1, n = !1) => (s || h(), i.schedule(t, e, n))), t
          );
        }, {});
      function d(t) {
        o.forEach((e) => a[e].cancel(t));
      }
    },
    67183: function (t, e, i) {
      i.d(e, {
        E: function () {
          return rj;
        },
      });
      var n,
        r = i(27024);
      let s = (0, r.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        o = (0, r.createContext)({});
      var a = i(93367),
        l = i(82654);
      let u = (0, r.createContext)({ strict: !1 });
      function h(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function c(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function d(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let p = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        m = ["initial", ...p];
      function f(t) {
        return d(t.animate) || m.some((e) => c(t[e]));
      }
      function g(t) {
        return Boolean(f(t) || t.variants);
      }
      function v(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let y = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        x = {};
      for (let t in y) x[t] = { isEnabled: (e) => y[t].some((t) => !!e[t]) };
      var P = i(35347),
        b = i(58104);
      let w = (0, r.createContext)({}),
        T = Symbol.for("motionComponentSymbol"),
        A = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function V(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (A.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let S = {},
        E = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        C = new Set(E);
      function M(t, { layout: e, layoutId: i }) {
        return (
          C.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!S[t] || "opacity" === t))
        );
      }
      let k = (t) => Boolean(t && t.getVelocity),
        D = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        R = E.length,
        L = (t) => (e) => "string" == typeof e && e.startsWith(t),
        B = L("--"),
        j = L("var(--"),
        F = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        O = (t, e, i) => Math.min(Math.max(i, t), e),
        I = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        U = { ...I, transform: (t) => O(0, 1, t) },
        W = { ...I, default: 1 },
        N = (t) => Math.round(1e5 * t) / 1e5,
        $ = /(-)?([\d]*\.?[\d])+/g,
        H =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function z(t) {
        return "string" == typeof t;
      }
      let Y = (t) => ({
          test: (e) => z(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        X = Y("deg"),
        G = Y("%"),
        q = Y("px"),
        K = Y("vh"),
        _ = Y("vw"),
        J = {
          ...G,
          parse: (t) => G.parse(t) / 100,
          transform: (t) => G.transform(100 * t),
        },
        Q = { ...I, transform: Math.round },
        tt = {
          borderWidth: q,
          borderTopWidth: q,
          borderRightWidth: q,
          borderBottomWidth: q,
          borderLeftWidth: q,
          borderRadius: q,
          radius: q,
          borderTopLeftRadius: q,
          borderTopRightRadius: q,
          borderBottomRightRadius: q,
          borderBottomLeftRadius: q,
          width: q,
          maxWidth: q,
          height: q,
          maxHeight: q,
          size: q,
          top: q,
          right: q,
          bottom: q,
          left: q,
          padding: q,
          paddingTop: q,
          paddingRight: q,
          paddingBottom: q,
          paddingLeft: q,
          margin: q,
          marginTop: q,
          marginRight: q,
          marginBottom: q,
          marginLeft: q,
          rotate: X,
          rotateX: X,
          rotateY: X,
          rotateZ: X,
          scale: W,
          scaleX: W,
          scaleY: W,
          scaleZ: W,
          skew: X,
          skewX: X,
          skewY: X,
          distance: q,
          translateX: q,
          translateY: q,
          translateZ: q,
          x: q,
          y: q,
          z: q,
          perspective: q,
          transformPerspective: q,
          opacity: U,
          originX: J,
          originY: J,
          originZ: q,
          zIndex: Q,
          fillOpacity: U,
          strokeOpacity: U,
          numOctaves: Q,
        };
      function te(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if (B(t)) {
            s[t] = i;
            continue;
          }
          let n = tt[t],
            c = F(i, n);
          if (C.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  n,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < R; e++) {
                    let i = E[e];
                    if (void 0 !== t[i]) {
                      let e = D[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, n ? "" : s)) : i && n && (s = "none"),
                    s
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let ti = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tn(t, e, i) {
        for (let n in e) k(e[n]) || M(n, i) || (t[n] = e[n]);
      }
      function tr(t, e, i) {
        let n = {},
          s = (function (t, e, i) {
            let n = t.style || {},
              s = {};
            return (
              tn(s, n, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, r.useMemo)(() => {
                    let n = ti();
                    return (
                      te(n, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((n.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (n.tabIndex = 0),
          (n.style = s),
          n
        );
      }
      let ts = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function to(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          ts.has(t)
        );
      }
      let ta = (t) => !to(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (ta = (t) => (t.startsWith("on") ? !to(t) : n(t)));
      } catch (t) {}
      function tl(t, e, i) {
        return "string" == typeof t ? t : q.transform(e + i * t);
      }
      let tu = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        th = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tc(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((te(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== r || void 0 !== s || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let n = tl(e, t.x, t.width),
                r = tl(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? tu : th;
              t[s.offset] = q.transform(-n);
              let o = q.transform(e),
                a = q.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let td = () => ({ ...ti(), attrs: {} }),
        tp = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tm(t, e, i, n) {
        let s = (0, r.useMemo)(() => {
          let i = td();
          return (
            tc(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tp(n),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          tn(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      let tf = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tg(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tv = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ty(t, e, i, n) {
        for (let i in (tg(t, e, void 0, n), e.attrs))
          t.setAttribute(tv.has(i) ? i : tf(i), e.attrs[i]);
      }
      function tx(t, e) {
        let { style: i } = t,
          n = {};
        for (let r in i)
          (k(i[r]) || (e.style && k(e.style[r])) || M(r, t)) && (n[r] = i[r]);
        return n;
      }
      function tP(t, e) {
        let i = tx(t, e);
        for (let n in t)
          if (k(t[n]) || k(e[n])) {
            let e =
              -1 !== E.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n;
            i[e] = t[n];
          }
        return i;
      }
      function tb(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      var tw = i(74888);
      let tT = (t) => Array.isArray(t),
        tA = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        tV = (t) => (tT(t) ? t[t.length - 1] || 0 : t);
      function tS(t) {
        let e = k(t) ? t.get() : t;
        return tA(e) ? e.toValue() : e;
      }
      let tE = (t) => (e, i) => {
          let n = (0, r.useContext)(o),
            s = (0, r.useContext)(a.O),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                r,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = tS(s[t]);
                    let { initial: o, animate: a } = t,
                      l = f(t),
                      u = g(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial;
                    h = h || !1 === o;
                    let c = h ? a : o;
                    if (c && "boolean" != typeof c && !d(c)) {
                      let e = Array.isArray(c) ? c : [c];
                      e.forEach((e) => {
                        let i = tb(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in n) r[t] = n[t];
                      });
                    }
                    return r;
                  })(n, r, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(n, t, o)), o;
              })(t, e, n, s);
          return i ? l() : (0, tw.h)(l);
        },
        tC = {
          useVisualState: tE({
            scrapeMotionValuesFromProps: tP,
            createRenderState: td,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tc(
                i,
                n,
                { enableHardwareAcceleration: !1 },
                tp(e.tagName),
                t.transformTemplate
              ),
                ty(e, i);
            },
          }),
        },
        tM = {
          useVisualState: tE({
            scrapeMotionValuesFromProps: tx,
            createRenderState: ti,
          }),
        };
      function tk(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tD = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tR(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tL = (t) => (e) => tD(e) && t(e, tR(e));
      function tB(t, e, i, n) {
        return tk(t, e, tL(i), n);
      }
      let tj = (t, e) => (i) => e(t(i)),
        tF = (...t) => t.reduce(tj);
      function tO(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tI = tO("dragHorizontal"),
        tU = tO("dragVertical");
      function tW(t) {
        let e = !1;
        if ("y" === t) e = tU();
        else if ("x" === t) e = tI();
        else {
          let t = tI(),
            i = tU();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tN() {
        let t = tW(!0);
        return !t || (t(), !1);
      }
      class t$ {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      var tH = i(20361);
      function tZ(t, e) {
        let i = "onHover" + (e ? "Start" : "End"),
          n = (n, r) => {
            if ("touch" === n.type || tN()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && tH.Wi.update(() => s[i](n, r));
          };
        return tB(t.current, "pointer" + (e ? "enter" : "leave"), n, {
          passive: !t.getProps()[i],
        });
      }
      let tz = (t, e) => !!e && (t === e || tz(t, e.parentElement));
      var tY = i(49055);
      function tX(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tR(i));
      }
      let tG = new WeakMap(),
        tq = new WeakMap(),
        tK = (t) => {
          let e = tG.get(t.target);
          e && e(t);
        },
        t_ = (t) => {
          t.forEach(tK);
        },
        tJ = { some: 0, all: 1 };
      function tQ(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function t0(t, e, i) {
        let n = t.getProps();
        return tb(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let t1 = "data-" + tf("framerAppearId");
      var t5 = i(464);
      let t2 = (t) => 1e3 * t,
        t3 = (t) => t / 1e3,
        t4 = { current: !1 },
        t6 = (t) => Array.isArray(t) && "number" == typeof t[0],
        t9 = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        t7 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: t9([0, 0.65, 0.55, 1]),
          circOut: t9([0.55, 0, 1, 0.45]),
          backIn: t9([0.31, 0.01, 0.66, -0.59]),
          backOut: t9([0.33, 1.53, 0.69, 0.99]),
        },
        t8 = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        et = {},
        ee = {};
      for (let t in t8)
        ee[t] = () => (void 0 === et[t] && (et[t] = t8[t]()), et[t]);
      let ei = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function en(t, e, i, n) {
        if (t === e && i === n) return tY.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = ei((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ei(r(t), e, n));
      }
      let er = en(0.42, 0, 1, 1),
        es = en(0, 0, 0.58, 1),
        eo = en(0.42, 0, 0.58, 1),
        ea = (t) => Array.isArray(t) && "number" != typeof t[0],
        el = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eu = (t) => (e) => 1 - t(1 - e),
        eh = (t) => 1 - Math.sin(Math.acos(t)),
        ec = eu(eh),
        ed = el(ec),
        ep = en(0.33, 1.53, 0.69, 0.99),
        em = eu(ep),
        ef = el(em),
        eg = (t) =>
          (t *= 2) < 1 ? 0.5 * em(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        ev = {
          linear: tY.Z,
          easeIn: er,
          easeInOut: eo,
          easeOut: es,
          circIn: eh,
          circInOut: ed,
          circOut: ec,
          backIn: em,
          backInOut: ef,
          backOut: ep,
          anticipate: eg,
        },
        ey = (t) => {
          if (Array.isArray(t)) {
            (0, t5.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return en(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, t5.k)(void 0 !== ev[t], `Invalid easing type '${t}'`), ev[t])
            : t;
        },
        ex = (t, e) => (i) =>
          Boolean(
            (z(i) && Z.test(i) && i.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eP = (t, e, i) => (n) => {
          if (!z(n)) return n;
          let [r, s, o, a] = n.match($);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eb = (t) => O(0, 255, t),
        ew = { ...I, transform: (t) => Math.round(eb(t)) },
        eT = {
          test: ex("rgb", "red"),
          parse: eP("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            ew.transform(t) +
            ", " +
            ew.transform(e) +
            ", " +
            ew.transform(i) +
            ", " +
            N(U.transform(n)) +
            ")",
        },
        eA = {
          test: ex("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: eT.transform,
        },
        eV = {
          test: ex("hsl", "hue"),
          parse: eP("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            G.transform(N(e)) +
            ", " +
            G.transform(N(i)) +
            ", " +
            N(U.transform(n)) +
            ")",
        },
        eS = {
          test: (t) => eT.test(t) || eA.test(t) || eV.test(t),
          parse: (t) =>
            eT.test(t) ? eT.parse(t) : eV.test(t) ? eV.parse(t) : eA.parse(t),
          transform: (t) =>
            z(t)
              ? t
              : t.hasOwnProperty("red")
              ? eT.transform(t)
              : eV.transform(t),
        },
        eE = (t, e, i) => -i * t + i * e + t;
      function eC(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let eM = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        ek = [eA, eT, eV],
        eD = (t) => ek.find((e) => e.test(t));
      function eR(t) {
        let e = eD(t);
        (0, t5.k)(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eV &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = eC(a, n, t + 1 / 3)),
                  (s = eC(a, n, t)),
                  (o = eC(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eL = (t, e) => {
          let i = eR(t),
            n = eR(e),
            r = { ...i };
          return (t) => (
            (r.red = eM(i.red, n.red, t)),
            (r.green = eM(i.green, n.green, t)),
            (r.blue = eM(i.blue, n.blue, t)),
            (r.alpha = eE(i.alpha, n.alpha, t)),
            eT.transform(r)
          );
        },
        eB = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: tY.Z,
        },
        ej = { regex: H, countKey: "Colors", token: "${c}", parse: eS.parse },
        eF = { regex: $, countKey: "Numbers", token: "${n}", parse: I.parse };
      function eO(t, { regex: e, countKey: i, token: n, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(r)));
      }
      function eI(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && eO(i, eB), eO(i, ej), eO(i, eF), i;
      }
      function eU(t) {
        return eI(t).values;
      }
      function eW(t) {
        let { values: e, numColors: i, numVars: n, tokenised: r } = eI(t),
          s = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < s; r++)
            e =
              r < n
                ? e.replace(eB.token, t[r])
                : r < n + i
                ? e.replace(ej.token, eS.transform(t[r]))
                : e.replace(eF.token, N(t[r]));
          return e;
        };
      }
      let eN = (t) => ("number" == typeof t ? 0 : t),
        e$ = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              z(t) &&
              ((null === (e = t.match($)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(H)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eU,
          createTransformer: eW,
          getAnimatableNone: function (t) {
            let e = eU(t),
              i = eW(t);
            return i(e.map(eN));
          },
        },
        eH = (t, e) => (i) => `${i > 0 ? e : t}`;
      function eZ(t, e) {
        return "number" == typeof t
          ? (i) => eE(t, e, i)
          : eS.test(t)
          ? eL(t, e)
          : t.startsWith("var(")
          ? eH(t, e)
          : eX(t, e);
      }
      let ez = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => eZ(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        eY = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = eZ(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        eX = (t, e) => {
          let i = e$.createTransformer(e),
            n = eI(t),
            r = eI(e),
            s =
              n.numVars === r.numVars &&
              n.numColors === r.numColors &&
              n.numNumbers >= r.numNumbers;
          return s
            ? tF(ez(n.values, r.values), i)
            : ((0, t5.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eH(t, e));
        },
        eG = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        eq = (t, e) => (i) => eE(t, e, i);
      function eK(t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
        let s = t.length;
        if (
          ((0, t5.k)(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let n = [],
              r =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eS.test(t) ? eL : eX;
                  else if (Array.isArray(t)) return ez;
                  else if ("object" == typeof t) return eY;
                  return eq;
                })(t[0]),
              s = t.length - 1;
            for (let i = 0; i < s; i++) {
              let s = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || tY.Z : e;
                s = tF(t, s);
              }
              n.push(s);
            }
            return n;
          })(e, n, r),
          a = o.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = eG(t[i], t[i + 1], e);
            return o[i](n);
          };
        return i ? (e) => l(O(t[0], t[s - 1], e)) : l;
      }
      function e_({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = ea(n) ? n.map(ey) : ey(n),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = eG(0, e, n);
                        t.push(eE(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = eK(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || eo).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function eJ(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? n * (1e3 / r) : 0;
      }
      function eQ(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let e0 = ["duration", "bounce"],
        e1 = ["stiffness", "damping", "mass"];
      function e5(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function e2({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!e5(t, e1) && e5(t, e0)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, t5.K)(
                  t <= t2(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = O(0.05, 1, o)),
                  (t = O(0.01, 10, t3(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t,
                          s = eQ(e, o);
                        return 0.001 - ((n - i) / s) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o,
                          s = n * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = eQ(Math.pow(e, 2), o),
                          u = -r(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((r = (e) => {
                        let n = Math.exp(-e * t),
                          r = (e - i) * t + 1;
                        return -0.001 + n * r;
                      }),
                      (s = (e) => {
                        let n = Math.exp(-e * t),
                          r = (i - e) * (t * t);
                        return n * r;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, a);
                if (((t = t2(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          m = c ? -t3(c) : 0,
          f = u / (2 * Math.sqrt(l * h)),
          g = o - s,
          v = t3(Math.sqrt(l / h)),
          y = 5 > Math.abs(g);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = eQ(v, f);
          r = (e) =>
            o -
            Math.exp(-f * v * e) *
              (((m + f * v * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === f)
          r = (t) => o - Math.exp(-v * t) * (g + (m + v * g) * t);
        else {
          let t = v * Math.sqrt(f * f - 1);
          r = (e) => {
            let i = Math.min(t * e, 300);
            return (
              o -
              (Math.exp(-f * v * e) *
                ((m + f * v * g) * Math.sinh(i) + t * g * Math.cosh(i))) /
                t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let n = r(t);
            if (p) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = f < 1 ? eJ(r, t, n) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function e3({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let P = (t) => -v * Math.exp(-t / n),
          b = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              i = b(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          T = (t) => {
            f(m.value) &&
              ((c = t),
              (d = e2({
                keyframes: [m.value, g(m.value)],
                velocity: eJ(b, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), T(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || w(t), m);
            },
          }
        );
      }
      var e4 = i(20424);
      let e6 = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => tH.Wi.update(e, !0),
          stop: () => (0, tH.Pn)(e),
          now: () => (e4.w.isProcessing ? e4.w.timestamp : performance.now()),
        };
      };
      function e9(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let e7 = { decay: e3, inertia: e3, tween: e_, keyframes: e_, spring: e2 };
      function e8({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = e6,
        keyframes: n,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          m,
          f,
          g,
          v,
          y = 1,
          x = !1,
          P = () => {
            p && p(),
              (m = new Promise((t) => {
                p = t;
              }));
          };
        P();
        let b = e7[r] || e_;
        b !== e_ &&
          "number" != typeof n[0] &&
          ((g = eK([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let w = b({ ...d, keyframes: n });
        "mirror" === a &&
          (v = b({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let T = "idle",
          A = null,
          V = null,
          S = null;
        null === w.calculatedDuration && s && (w.calculatedDuration = e9(w));
        let { calculatedDuration: E } = w,
          C = 1 / 0,
          M = 1 / 0;
        null !== E && (M = (C = E + o) * (s + 1) - o);
        let k = 0,
          D = (t) => {
            if (null === V) return;
            y > 0 && (V = Math.min(V, t)), (k = null !== A ? A : (t - V) * y);
            let i = k - e,
              r = i < 0;
            (k = Math.max(i, 0)), "finished" === T && null === A && (k = M);
            let l = k,
              u = w;
            if (s) {
              let t = k / C,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let n = Boolean(e % 2);
              n &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / C))
                  : "mirror" === a && (u = v));
              let r = O(0, 1, i);
              k > M && (r = "reverse" === a && n ? 1 : 0), (l = r * C);
            }
            let h = r ? { done: !1, value: n[0] } : u.next(l);
            g && (h.value = g(h.value));
            let { done: d } = h;
            r || null === E || (d = k >= M);
            let p =
              null === A &&
              ("finished" === T || ("running" === T && d) || (y < 0 && k <= 0));
            return c && c(h.value), p && B(), h;
          },
          R = () => {
            f && f.stop(), (f = void 0);
          },
          L = () => {
            (T = "idle"), R(), P(), (V = S = null);
          },
          B = () => {
            (T = "finished"), h && h(), R(), P();
          },
          j = () => {
            if (x) return;
            f || (f = i(D));
            let t = f.now();
            l && l(),
              null !== A ? (V = t - A) : (V && "finished" !== T) || (V = t),
              (S = V),
              (A = null),
              (T = "running"),
              f.start();
          };
        t && j();
        let F = {
          then: (t, e) => m.then(t, e),
          get time() {
            return t3(k);
          },
          set time(newTime) {
            (k = newTime = t2(newTime)),
              null === A && f && 0 !== y
                ? (V = f.now() - newTime / y)
                : (A = newTime);
          },
          get duration() {
            let t =
              null === w.calculatedDuration ? e9(w) : w.calculatedDuration;
            return t3(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !f) return;
            (y = newSpeed), (F.time = t3(k));
          },
          get state() {
            return T;
          },
          play: j,
          pause: () => {
            (T = "paused"), (A = k);
          },
          stop: () => {
            (x = !0), "idle" !== T && ((T = "idle"), u && u(), L());
          },
          cancel: () => {
            null !== S && D(S), L();
          },
          complete: () => {
            T = "finished";
          },
          sample: (t) => ((V = 0), D(t)),
        };
        return F;
      }
      let it = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ie = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return Boolean(
              !e ||
                ("string" == typeof e && t7[e]) ||
                t6(e) ||
                (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        ii = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ir = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        is = { type: "keyframes", duration: 0.8 },
        io = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ia = (t, { keyframes: e }) =>
          e.length > 2
            ? is
            : C.has(t)
            ? t.startsWith("scale")
              ? ir(e[1])
              : ii
            : io,
        il = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (e$.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        iu = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ih(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match($) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = iu.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let ic = /([a-z-]*)\(.*?\)/g,
        id = {
          ...e$,
          getAnimatableNone: (t) => {
            let e = t.match(ic);
            return e ? e.map(ih).join(" ") : t;
          },
        },
        ip = {
          ...tt,
          color: eS,
          backgroundColor: eS,
          outlineColor: eS,
          fill: eS,
          stroke: eS,
          borderColor: eS,
          borderTopColor: eS,
          borderRightColor: eS,
          borderBottomColor: eS,
          borderLeftColor: eS,
          filter: id,
          WebkitFilter: id,
        },
        im = (t) => ip[t];
      function ig(t, e) {
        let i = im(t);
        return (
          i !== id && (i = e$),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let iv = (t) => /^0[^.\s]+$/.test(t);
      function iy(t, e) {
        return t[e] || t.default || t;
      }
      let ix =
        (t, e, i, n = {}) =>
        (r) => {
          let s = iy(n, t) || {},
            o = s.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= t2(o);
          let l = (function (t, e, i, n) {
              let r, s;
              let o = il(e, i);
              r = Array.isArray(i) ? [...i] : [null, i];
              let a = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < r.length; t++) {
                var u;
                null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                  ("number" == typeof (u = r[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || iv(u)
                    : void 0) && l.push(t),
                  "string" == typeof r[t] &&
                    "none" !== r[t] &&
                    "0" !== r[t] &&
                    (s = r[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) {
                  let i = l[t];
                  r[i] = ig(e, s);
                }
              return r;
            })(e, t, i, s),
            u = l[0],
            h = l[l.length - 1],
            c = il(t, u),
            d = il(t, h);
          (0, t5.K)(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              r(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (p = { ...p, ...ia(t, p) }),
            p.duration && (p.duration = t2(p.duration)),
            p.repeatDelay && (p.repeatDelay = t2(p.repeatDelay)),
            !c || !d || t4.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: n,
            }) {
              let r = () => (
                i && i(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tY.Z,
                  pause: tY.Z,
                  stop: tY.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tY.Z,
                  complete: tY.Z,
                }
              );
              return e
                ? e8({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: r,
                  })
                : r();
            })(p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: n, ...r }) {
              let s, o;
              let a =
                ee.waapi() &&
                it.has(e) &&
                !r.repeatDelay &&
                "mirror" !== r.repeatType &&
                0 !== r.damping &&
                "inertia" !== r.type;
              if (!a) return !1;
              let l = !1,
                u = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              u();
              let { keyframes: h, duration: c = 300, ease: d, times: p } = r;
              if (ie(e, r)) {
                let t = e8({ ...r, repeat: 0, delay: 0 }),
                  e = { done: !1, value: h[0] },
                  i = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  i.push((e = t.sample(n)).value), (n += 10);
                (p = void 0), (h = i), (c = n - 10), (d = "linear");
              }
              let m = (function (
                  t,
                  e,
                  i,
                  {
                    delay: n = 0,
                    duration: r,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: i };
                  l && (u.offset = l);
                  let h = (function t(e) {
                    if (e)
                      return t6(e)
                        ? t9(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : t7[e];
                  })(a);
                  return (
                    Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                      delay: n,
                      duration: r,
                      easing: Array.isArray(h) ? "linear" : h,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, h, {
                  ...r,
                  duration: c,
                  ease: d,
                  times: p,
                }),
                f = () => m.cancel(),
                g = () => {
                  tH.Wi.update(f), s(), u();
                };
              return (
                (m.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let n =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(h, r)
                  ),
                    n && n(),
                    g();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  get time() {
                    return t3(m.currentTime || 0);
                  },
                  set time(newTime) {
                    m.currentTime = t2(newTime);
                  },
                  get speed() {
                    return m.playbackRate;
                  },
                  set speed(newSpeed) {
                    m.playbackRate = newSpeed;
                  },
                  get duration() {
                    return t3(c);
                  },
                  play: () => {
                    l || (m.play(), (0, tH.Pn)(f));
                  },
                  pause: () => m.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === m.playState)) return;
                    let { currentTime: e } = m;
                    if (e) {
                      let i = e8({ ...r, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    g();
                  },
                  complete: () => m.finish(),
                  cancel: g,
                }
              );
            })(e, t, p);
            if (i) return i;
          }
          return e8(p);
        };
      function iP(t) {
        return Boolean(k(t) && t.add);
      }
      let ib = (t) => /^\-?\d*\.?\d+$/.test(t);
      function iw(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function iT(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class iA {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return iw(this.subscriptions, t), () => iT(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iV = (t) => !isNaN(parseFloat(t));
      class iS {
        constructor(t, e = {}) {
          (this.version = "10.12.16"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: n } = e4.w;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
                tH.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              tH.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = iV(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new iA());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tH.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function iE(t, e) {
        return new iS(t, e);
      }
      let iC = (t) => (e) => e.test(t),
        iM = [I, q, G, X, _, K, { test: (t) => "auto" === t, parse: (t) => t }],
        ik = (t) => iM.find(iC(t)),
        iD = [...iM, eS, e$],
        iR = (t) => iD.find(iC(t));
      function iL(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        n && (s = n);
        let u = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let n = t.getValue(e),
            r = a[e];
          if (
            !n ||
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let i = t.getProps()[t1];
            i && (o.elapsed = window.HandoffAppearAnimations(i, e, n, tH.Wi));
          }
          n.start(
            ix(e, n, r, t.shouldReduceMotion && C.has(e) ? { type: !1 } : o)
          );
          let c = n.animation;
          iP(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let i = t0(t, e),
                    {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...n })) {
                    var o;
                    let i = tV(s[e]);
                    (o = e),
                      t.hasValue(o)
                        ? t.getValue(o).set(i)
                        : t.addValue(o, iE(i));
                  }
                })(t, o);
            }),
          u
        );
      }
      function iB(t, e, i = {}) {
        let n = t0(t, e, i.custom),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(iL(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ij)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iB(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function ij(t, e) {
        return t.sortNodePosition(e);
      }
      let iF = [...p].reverse(),
        iO = p.length;
      function iI(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let iU = 0,
        iW = (t, e) => Math.abs(t - e);
      class iN {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iZ(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iW(t.x, e.x),
                      n = iW(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = e4.w;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = i$(e, this.transformPagePoint)),
                tH.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: n } = this.handlers,
                r = iZ(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : i$(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !tD(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let n = tR(t),
            r = i$(n, this.transformPagePoint),
            { point: s } = r,
            { timestamp: o } = e4.w;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, iZ(r, this.history)),
            (this.removeListeners = tF(
              tB(window, "pointermove", this.handlePointerMove),
              tB(window, "pointerup", this.handlePointerUp),
              tB(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tH.Pn)(this.updatePoint);
        }
      }
      function i$(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iH(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iZ({ point: t }, e) {
        return {
          point: t,
          delta: iH(t, iz(e)),
          offset: iH(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iz(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > t2(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = t3(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iz(t) {
        return t[t.length - 1];
      }
      function iY(t) {
        return t.max - t.min;
      }
      function iX(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function iG(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = eE(e.min, e.max, t.origin)),
          (t.scale = iY(i) / iY(e)),
          (iX(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = eE(i.min, i.max, t.origin) - t.originPoint),
          (iX(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function iq(t, e, i, n) {
        iG(t.x, e.x, i.x, n ? n.originX : void 0),
          iG(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iK(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iY(e));
      }
      function i_(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iY(e));
      }
      function iJ(t, e, i) {
        i_(t.x, e.x, i.x), i_(t.y, e.y, i.y);
      }
      function iQ(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function i0(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function i1(t, e, i) {
        return { min: i5(t, e), max: i5(t, i) };
      }
      function i5(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let i2 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i3 = () => ({ x: i2(), y: i2() }),
        i4 = () => ({ min: 0, max: 0 }),
        i6 = () => ({ x: i4(), y: i4() });
      function i9(t) {
        return [t("x"), t("y")];
      }
      function i7({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function i8(t) {
        return void 0 === t || 1 === t;
      }
      function nt({ scale: t, scaleX: e, scaleY: i }) {
        return !i8(t) || !i8(e) || !i8(i);
      }
      function ne(t) {
        return nt(t) || ni(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function ni(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function nn(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function nr(t, e = 0, i = 1, n, r) {
        (t.min = nn(t.min, e, i, n, r)), (t.max = nn(t.max, e, i, n, r));
      }
      function ns(t, { x: e, y: i }) {
        nr(t.x, e.translate, e.scale, e.originPoint),
          nr(t.y, i.translate, i.scale, i.originPoint);
      }
      function no(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function na(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nl(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = eE(t.min, t.max, s);
        nr(t, e[i], e[n], o, e.scale);
      }
      let nu = ["x", "scaleX", "originX"],
        nh = ["y", "scaleY", "originY"];
      function nc(t, e) {
        nl(t.x, e, nu), nl(t.y, e, nh);
      }
      function nd(t, e) {
        return i7(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let np = new WeakMap();
      class nm {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i6()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let n = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tR(t, "page").point);
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: n,
                onDragStart: r,
              } = this.getProps();
              if (
                i &&
                !n &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tW(i)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                i9((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (G.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      if (n) {
                        let t = iY(n);
                        e = t * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                r && tH.Wi.update(() => r(t, e), !1, !0);
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    r &&
                    r(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new iN(
            t,
            { onSessionStart: n, onStart: r, onMove: s, onSessionEnd: o },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && tH.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nf(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eE(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? eE(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            n = this.constraints;
          t && h(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: iQ(t.x, i, r), y: iQ(t.y, e, n) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: i1(t, "left", "right"), y: i1(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i9((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !h(e)) return !1;
          let n = e.current;
          (0, t5.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = nd(t, i),
                { scroll: r } = e;
              return r && (na(n.x, r.offset.x), na(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: i0((t = r.layout.layoutBox).x, s.x), y: i0(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = i7(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = i9((o) => {
              if (!nf(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(ix(t, i, 0, e));
        }
        stopAnimation() {
          i9((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            n = i[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i9((e) => {
            let { drag: i } = this.getProps();
            if (!nf(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - eE(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!h(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          i9((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iY(t),
                  r = iY(e);
                return (
                  r > n
                    ? (i = eG(e.min, e.max - n, t.min))
                    : n > r && (i = eG(t.min, t.max - r, e.min)),
                  O(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i9((e) => {
              if (!nf(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(eE(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          np.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tB(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              h(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            i();
          let s = tk(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i9((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), r(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nf(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let ng = (t) => (e, i) => {
          t && tH.Wi.update(() => t(e, i));
        },
        nv = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ny(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nx = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!q.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ny(t, e.target.x),
            n = ny(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      class nP extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(S, nw),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nv.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tH.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nb(t) {
        let [e, i] = (function () {
            let t = (0, r.useContext)(a.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              s = (0, r.useId)();
            (0, r.useEffect)(() => n(s), []);
            let o = () => i && i(s);
            return !e && i ? [!1, o] : [!0];
          })(),
          n = (0, r.useContext)(b.p);
        return r.createElement(nP, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, r.useContext)(w),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nw = {
          borderRadius: {
            ...nx,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nx,
          borderTopRightRadius: nx,
          borderBottomLeftRadius: nx,
          borderBottomRightRadius: nx,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = e$.parse(t);
              if (n.length > 5) return t;
              let r = e$.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = eE(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nA = nT.length,
        nV = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nS = (t) => "number" == typeof t || q.test(t);
      function nE(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nC = nk(0, 0.5, ec),
        nM = nk(0.5, 0.95, tY.Z);
      function nk(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(eG(t, e, n)));
      }
      function nD(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nR(t, e) {
        nD(t.x, e.x), nD(t.y, e.y);
      }
      function nL(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function nB(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (G.test(e)) {
            e = parseFloat(e);
            let t = eE(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = eE(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nL(t.min, e, i, a, r)),
            (t.max = nL(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nj = ["x", "scaleX", "originX"],
        nF = ["y", "scaleY", "originY"];
      function nO(t, e, i, n) {
        nB(t.x, e, nj, i ? i.x : void 0, n ? n.x : void 0),
          nB(t.y, e, nF, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nI(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nU(t) {
        return nI(t.x) && nI(t.y);
      }
      function nW(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function nN(t) {
        return iY(t.x) / iY(t.y);
      }
      class n$ {
        constructor() {
          this.members = [];
        }
        add(t) {
          iw(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (iT(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nH(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = i;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            r && (n += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      let nZ = (t, e) => t.depth - e.depth;
      class nz {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          iw(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          iT(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nZ),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nY = ["", "X", "Y", "Z"],
        nX = 0,
        nG = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nq({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nX++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (nG.totalNodes =
                  nG.resolvedTargetDeltas =
                  nG.recalculatedProjection =
                    0),
                  this.nodes.forEach(nJ),
                  this.nodes.forEach(n4),
                  this.nodes.forEach(n6),
                  this.nodes.forEach(nQ),
                  window.MotionDebug && window.MotionDebug.record(nG);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nz());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new iA()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, tH.Pn)(n), t(s - e));
                      };
                    return tH.Wi.read(n, !0), () => (0, tH.Pn)(n);
                  })(n, 250)),
                  nv.hasAnimatedSinceResize &&
                    ((nv.hasAnimatedSinceResize = !1), this.nodes.forEach(n3));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ri,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nW(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...iy(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tH.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n9),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n1);
              return;
            }
            this.isUpdating || this.nodes.forEach(n5),
              (this.isUpdating = !1),
              this.nodes.forEach(n2),
              this.nodes.forEach(nK),
              this.nodes.forEach(n_),
              this.clearAllSnapshots();
            let e = performance.now();
            (e4.w.delta = O(0, 1e3 / 60, e - e4.w.timestamp)),
              (e4.w.timestamp = e),
              (e4.w.isProcessing = !0),
              tH.S6.update.process(e4.w),
              tH.S6.preRender.process(e4.w),
              tH.S6.render.process(e4.w),
              (e4.w.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n0), this.sharedNodes.forEach(n7);
          }
          scheduleUpdateProjection() {
            tH.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tH.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i6()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nU(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || ne(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rn((e = n).x),
              rn(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return i6();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (na(e.x, i.offset.x), na(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = i6();
            nR(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  nR(e, t);
                  let { scroll: i } = this.root;
                  i && (na(e.x, -i.offset.x), na(e.y, -i.offset.y));
                }
                na(e.x, r.offset.x), na(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = i6();
            nR(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                nc(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ne(n.latestValues) && nc(i, n.latestValues);
            }
            return ne(this.latestValues) && nc(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i6();
            nR(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ne(i.latestValues)) continue;
              nt(i.latestValues) && i.updateSnapshot();
              let n = i6(),
                r = i.measurePageBox();
              nR(n, r),
                nO(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return ne(this.latestValues) && nO(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== e4.w.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = Boolean(this.resumingFrom) || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = e4.w.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i6()),
                    (this.relativeTargetOrigin = i6()),
                    iJ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nR(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i6()), (this.targetWithTransforms = i6())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iK(i.x, n.x, r.x),
                      iK(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nR(this.target, this.layout.layoutBox),
                      ns(this.target, this.targetDelta))
                    : nR(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  Boolean(t.resumingFrom) === Boolean(this.resumingFrom) &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i6()),
                      (this.relativeTargetOrigin = i6()),
                      iJ(this.relativeTargetOrigin, this.target, t.target),
                      nR(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nG.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              nt(this.parent.latestValues) ||
              ni(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === e4.w.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nR(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      nc(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), ns(t, s)),
                    n && ne(r.latestValues) && nc(t, r.latestValues));
                }
                (e.x = no(e.x)), (e.y = no(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = i3()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = i3()),
              (this.projectionDeltaWithTransform = i3()));
            let u = this.projectionTransform;
            iq(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nH(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nG.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = i3();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i6(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              h = l !== u,
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              p = Boolean(
                h && !d && !0 === this.options.crossfade && !this.path.some(re)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var n, l;
                let u = e / 1e3;
                n8(o.x, t.x, u),
                  n8(o.y, t.y, u),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (iJ(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (n = this.relativeTarget),
                    (l = this.relativeTargetOrigin),
                    rt(n.x, l.x, a.x, u),
                    rt(n.y, l.y, a.y, u),
                    i &&
                      nW(this.relativeTarget, i) &&
                      (this.isProjectionDirty = !1),
                    i || (i = i6()),
                    nR(i, this.relativeTarget)),
                  h &&
                    ((this.animationValues = s),
                    (function (t, e, i, n, r, s) {
                      r
                        ? ((t.opacity = eE(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            nC(n)
                          )),
                          (t.opacityExit = eE(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            nM(n)
                          )))
                        : s &&
                          (t.opacity = eE(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            n
                          ));
                      for (let r = 0; r < nA; r++) {
                        let s = `border${nT[r]}Radius`,
                          o = nE(e, s),
                          a = nE(i, s);
                        if (void 0 === o && void 0 === a) continue;
                        o || (o = 0), a || (a = 0);
                        let l = 0 === o || 0 === a || nS(o) === nS(a);
                        l
                          ? ((t[s] = Math.max(eE(nV(o), nV(a), n), 0)),
                            (G.test(a) || G.test(o)) && (t[s] += "%"))
                          : (t[s] = a);
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = eE(e.rotate || 0, i.rotate || 0, n));
                    })(s, r, this.latestValues, u, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = u);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tH.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tH.Wi.update(() => {
                (nv.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = k(t) ? t : iE(t);
                    return n.start(ix("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rr(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || i6();
                let e = iY(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iY(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nR(e, i),
                nc(e, r),
                iq(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new n$());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < nY.length; e++) {
              let r = "rotate" + nY[e];
              i[r] && ((n[r] = i[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = tS(t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tS(t.pointerEvents) || "")),
                this.hasProjected &&
                  !ne(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = nH(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            S)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = S[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this ? tS(t.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n1),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nK(t) {
        t.updateLayout();
      }
      function n_(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? i9((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iY(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rr(r, i.layoutBox, e) &&
              i9((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iY(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = i3();
          iq(o, e, i.layoutBox);
          let a = i3();
          s
            ? iq(a, t.applyTransform(n, !0), i.measuredBox)
            : iq(a, e, i.layoutBox);
          let l = !nU(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = i6();
                iJ(o, i.layoutBox, r.layoutBox);
                let a = i6();
                iJ(a, e, s.layoutBox),
                  nW(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nJ(t) {
        nG.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = Boolean(
                t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nQ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function n0(t) {
        t.clearSnapshot();
      }
      function n1(t) {
        t.clearMeasurements();
      }
      function n5(t) {
        t.isLayoutDirty = !1;
      }
      function n2(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n3(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n4(t) {
        t.resolveTargetDelta();
      }
      function n6(t) {
        t.calcProjection();
      }
      function n9(t) {
        t.resetRotation();
      }
      function n7(t) {
        t.removeLeadSnapshot();
      }
      function n8(t, e, i) {
        (t.translate = eE(e.translate, 0, i)),
          (t.scale = eE(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rt(t, e, i, n) {
        (t.min = eE(e.min, i.min, n)), (t.max = eE(e.max, i.max, n));
      }
      function re(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ri = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function rn(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function rr(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !iX(nN(e), nN(i), 0.2))
        );
      }
      let rs = nq({
          attachResizeListener: (t, e) => tk(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ro = { current: void 0 },
        ra = nq({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ro.current) {
              let t = new rs({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ro.current = t);
            }
            return ro.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        rl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ru(t, e, i = 1) {
        (0, t5.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = rl.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let s = window.getComputedStyle(e).getPropertyValue(n);
        return s ? s.trim() : j(r) ? ru(r, e, i + 1) : r;
      }
      let rh = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        rc = (t) => rh.has(t),
        rd = (t) => Object.keys(t).some(rc),
        rp = (t) => t === I || t === q,
        rm = (t, e) => parseFloat(t.split(", ")[e]),
        rf =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return rm(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? rm(e[1], t) : 0;
            }
          },
        rg = new Set(["x", "y", "z"]),
        rv = E.filter((t) => !rg.has(t)),
        ry = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: rf(4, 13),
          y: rf(5, 14),
        },
        rx = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = ry[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              n && n.jump(a[i]), (t[i] = ry[i](l, s));
            }),
            t
          );
        },
        rP = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let r = Object.keys(e).filter(rc),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let h = i[r],
                c = ik(h),
                d = e[r];
              if (tT(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = ik((h = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? (0, t5.k)(
                        ik(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = ik(d[i])),
                      (0, t5.k)(
                        l === c || (rp(c) && rp(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = ik(d);
              if (c !== l) {
                if (rp(c) && rp(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[r] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === q &&
                        (e[r] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[r] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            rv.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (n[r] = void 0 !== n[r] ? n[r] : e[r]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = rx(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              P.j && null !== i && window.scrollTo({ top: i }),
              { target: r, transitionEnd: n }
            );
          }
        },
        rb = (t, e, i, n) => {
          var r, s;
          let o = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: i };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!j(e)) return;
              let i = ru(e, n);
              i && t.set(i);
            }),
            e)) {
              let t = e[r];
              if (!j(t)) continue;
              let s = ru(t, n);
              s && ((e[r] = s), i || (i = {}), void 0 === i[r] && (i[r] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, n);
          return (
            (e = o.target),
            (n = o.transitionEnd),
            (r = e),
            (s = n),
            rd(r) ? rP(t, r, i, s) : { target: r, transitionEnd: s }
          );
        },
        rw = { current: null },
        rT = { current: !1 },
        rA = new WeakMap(),
        rV = Object.keys(x),
        rS = rV.length,
        rE = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        rC = m.length;
      class rM {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tH.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = f(e)),
            (this.isVariantNode = g(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && k(e) && (e.set(o[t], !1), iP(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            rA.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rT.current ||
              (function () {
                if (((rT.current = !0), P.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rw.current = t.matches);
                    t.addListener(e), e();
                  } else rw.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rw.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rA.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tH.Pn)(this.notifyUpdate),
          (0, tH.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = C.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tH.Wi.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, r) {
          let s, o;
          for (let t = 0; t < rS; t++) {
            let i = rV[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = x[i];
            a && (s = a),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: Boolean(n) || (o && h(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i6();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rE.length; e++) {
            let i = rE[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (k(s)) t.addValue(r, s), iP(n) && n.add(r);
              else if (k(o))
                t.addValue(r, iE(s, { owner: t })), iP(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, iE(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < rC; t++) {
            let i = m[t],
              n = this.props[i];
            (c(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = iE(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tb(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || k(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iA()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rk extends rM {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: n },
          r
        ) {
          let s = (function (t, e, i) {
            let n = {};
            for (let r in t) {
              let t = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(r, e);
              if (void 0 !== t) n[r] = t;
              else {
                let t = i.getValue(r);
                t && (n[r] = t.get());
              }
            }
            return n;
          })(i, t || {}, this);
          if ((n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r)) {
            !(function (t, e, i) {
              var n, r;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (r =
                            null !== (n = i[o]) && void 0 !== n
                              ? n
                              : t.readValue(o)) && void 0 !== r
                          ? r
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (ib(u) || iv(u))
                        ? (u = parseFloat(u))
                        : !iR(u) && e$.test(l) && (u = ig(o, l)),
                      t.addValue(o, iE(u, { owner: t })),
                      void 0 === i[o] && (i[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, i, s);
            let t = rb(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class rD extends rk {
        readValueFromInstance(t, e) {
          if (C.has(e)) {
            let t = im(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (B(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return nd(t, e);
        }
        build(t, e, i, n) {
          te(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tx(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          k(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          tg(t, e, i, n);
        }
      }
      class rR extends rk {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (C.has(e)) {
            let t = im(e);
            return (t && t.default) || 0;
          }
          return (e = tv.has(e) ? e : tf(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return i6();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tP(t, e);
        }
        build(t, e, i, n) {
          tc(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          ty(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = tp(t.tagName)), super.mount(t);
        }
      }
      let rL = (t, e) =>
          V(t)
            ? new rR(e, { enableHardwareAcceleration: !1 })
            : new rD(e, { enableHardwareAcceleration: !0 }),
        rB = {
          animation: {
            Feature: class extends t$ {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let n;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let r = e.map((e) => iB(t, e, i));
                                  n = Promise.all(r);
                                } else if ("string" == typeof e)
                                  n = iB(t, e, i);
                                else {
                                  let r =
                                    "function" == typeof e
                                      ? t0(t, e, i.custom)
                                      : e;
                                  n = Promise.all(iL(t, r, i));
                                }
                                return n.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: iI(!0),
                          whileInView: iI(),
                          whileHover: iI(),
                          whileTap: iI(),
                          whileDrag: iI(),
                          whileFocus: iI(),
                          exit: iI(),
                        },
                        n = !0,
                        r = (e, i) => {
                          let n = t0(t, i);
                          if (n) {
                            let { transition: t, transitionEnd: i, ...r } = n;
                            e = { ...e, ...r, ...i };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          p = {},
                          m = 1 / 0;
                        for (let e = 0; e < iO; e++) {
                          var f;
                          let g = iF[e],
                            v = i[g],
                            y = void 0 !== a[g] ? a[g] : l[g],
                            x = c(y),
                            P = g === o ? v.isActive : null;
                          !1 === P && (m = e);
                          let b = y === l[g] && y !== a[g] && x;
                          if (
                            (b && n && t.manuallyAnimateOnMount && (b = !1),
                            (v.protectedKeys = { ...p }),
                            (!v.isActive && null === P) ||
                              (!y && !v.prevProp) ||
                              d(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let w =
                              ((f = v.prevProp),
                              "string" == typeof y
                                ? y !== f
                                : !!Array.isArray(y) && !tQ(y, f)),
                            T =
                              w ||
                              (g === o && v.isActive && !b && x) ||
                              (e > m && x),
                            A = Array.isArray(y) ? y : [y],
                            V = A.reduce(r, {});
                          !1 === P && (V = {});
                          let { prevResolvedValues: S = {} } = v,
                            E = { ...S, ...V },
                            C = (t) => {
                              (T = !0), h.delete(t), (v.needsAnimating[t] = !0);
                            };
                          for (let t in E) {
                            let e = V[t],
                              i = S[t];
                            p.hasOwnProperty(t) ||
                              (e !== i
                                ? tT(e) && tT(i)
                                  ? !tQ(e, i) || w
                                    ? C(t)
                                    : (v.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? C(t)
                                  : h.add(t)
                                : void 0 !== e && h.has(t)
                                ? C(t)
                                : (v.protectedKeys[t] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = V),
                            v.isActive && (p = { ...p, ...V }),
                            n && t.blockInitialAnimation && (T = !1),
                            T &&
                              !b &&
                              u.push(
                                ...A.map((t) => ({
                                  animation: t,
                                  options: { type: g, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((i) => {
                            let n = t.getBaseTarget(i);
                            void 0 !== n && (e[i] = n);
                          }),
                            u.push({ animation: e });
                        }
                        let g = Boolean(u.length);
                        return (
                          n &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (g = !1),
                          (n = !1),
                          g ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, n, r) {
                          var o;
                          if (i[e].isActive === n) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, n);
                            }),
                            (i[e].isActive = n);
                          let a = s(r, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), d(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends t$ {
              constructor() {
                super(...arguments), (this.id = iU++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                let r = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
                });
                e && !t && r.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends t$ {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: n = "some", once: r } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : tJ[n],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), r && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: n } =
                        this.node.getProps(),
                      s = e ? i : n;
                    s && s(t);
                  };
                return (function (t, e, i) {
                  let n = (function ({ root: t, ...e }) {
                    let i = t || document;
                    tq.has(i) || tq.set(i, {});
                    let n = tq.get(i),
                      r = JSON.stringify(e);
                    return (
                      n[r] ||
                        (n[r] = new IntersectionObserver(t_, {
                          root: t,
                          ...e,
                        })),
                      n[r]
                    );
                  })(e);
                  return (
                    tG.set(t, i),
                    n.observe(t),
                    () => {
                      tG.delete(t), n.unobserve(t);
                    }
                  );
                })(this.node.current, s, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends t$ {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tY.Z),
                  (this.removeEndListeners = tY.Z),
                  (this.removeAccessibleListeners = tY.Z),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let i = this.node.getProps(),
                      n = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: i, onTapCancel: n } = this.node.getProps();
                        tH.Wi.update(() => {
                          tz(this.node.current, t.target)
                            ? i && i(t, e)
                            : n && n(t, e);
                        });
                      },
                      r = tB(window, "pointerup", n, {
                        passive: !(i.onTap || i.onPointerUp),
                      }),
                      s = tB(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = tF(r, s)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            tX("up", (t, e) => {
                              let { onTap: i } = this.node.getProps();
                              i && tH.Wi.update(() => i(t, e));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tk(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          tX("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = tk(this.node.current, "keydown", t),
                      i = () => {
                        this.isPressing &&
                          tX("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      n = tk(this.node.current, "blur", i);
                    this.removeAccessibleListeners = tF(e, n);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && tH.Wi.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tN()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && tH.Wi.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = tB(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = tk(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tF(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends t$ {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tF(
                  tk(this.node.current, "focus", () => this.onFocus()),
                  tk(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends t$ {
              mount() {
                this.unmount = tF(tZ(this.node, !0), tZ(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends t$ {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tY.Z);
              }
              onPointerDown(t) {
                this.session = new iN(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: ng(t),
                  onStart: ng(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, n && tH.Wi.update(() => n(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tB(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends t$ {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = tY.Z),
                  (this.removeListeners = tY.Z),
                  (this.controls = new nm(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tY.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: ra,
            MeasureLayout: nb,
          },
          layout: { ProjectionNode: ra, MeasureLayout: nb },
        },
        rj = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: d,
            }) {
              t &&
                (function (t) {
                  for (let e in t) x[e] = { ...x[e], ...t[e] };
                })(t);
              let p = (0, r.forwardRef)(function (p, m) {
                var g, y;
                let x;
                let T = {
                    ...(0, r.useContext)(s),
                    ...p,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, r.useContext)(b.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(p),
                  },
                  { isStatic: A } = T,
                  V = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (f(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || c(e) ? e : void 0,
                          animate: c(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, r.useContext)(o));
                    return (0, r.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [v(e), v(i)]
                    );
                  })(p),
                  S = n(p, A);
                if (!A && P.j) {
                  V.visualElement = (function (t, e, i, n) {
                    let { visualElement: h } = (0, r.useContext)(o),
                      c = (0, r.useContext)(u),
                      d = (0, r.useContext)(a.O),
                      p = (0, r.useContext)(s).reducedMotion,
                      m = (0, r.useRef)();
                    (n = n || c.renderer),
                      !m.current &&
                        n &&
                        (m.current = n(t, {
                          visualState: e,
                          parent: h,
                          props: i,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let f = m.current;
                    (0, r.useInsertionEffect)(() => {
                      f && f.update(i, d);
                    }),
                      (0, l.L)(() => {
                        f && f.render();
                      }),
                      (0, r.useEffect)(() => {
                        f && f.updateFeatures();
                      });
                    let g = window.HandoffAppearAnimations ? l.L : r.useEffect;
                    return (
                      g(() => {
                        f &&
                          f.animationState &&
                          f.animationState.animateChanges();
                      }),
                      f
                    );
                  })(d, S, T, e);
                  let i = (0, r.useContext)(w),
                    n = (0, r.useContext)(u).strict;
                  V.visualElement &&
                    (x = V.visualElement.loadFeatures(T, n, t, i));
                }
                return r.createElement(
                  o.Provider,
                  { value: V },
                  x && V.visualElement
                    ? r.createElement(x, {
                        visualElement: V.visualElement,
                        ...T,
                      })
                    : null,
                  i(
                    d,
                    p,
                    ((g = V.visualElement),
                    (y = m),
                    (0, r.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          g && (t ? g.mount(t) : g.unmount()),
                          y &&
                            ("function" == typeof y
                              ? y(t)
                              : h(y) && (y.current = t));
                      },
                      [g]
                    )),
                    S,
                    A,
                    V.visualElement
                  )
                );
              });
              return (p[T] = d), p;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            let s = V(t) ? tC : tM;
            return {
              ...s,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, n, { latestValues: s }, o) => {
                  let a = V(e) ? tm : tr,
                    l = a(i, s, o, e),
                    u = (function (t, e, i) {
                      let n = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (ta(r) ||
                            (!0 === i && to(r)) ||
                            (!e && !to(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (n[r] = t[r]);
                      return n;
                    })(i, "string" == typeof e, t),
                    h = { ...u, ...l, ref: n },
                    { children: c } = i,
                    d = (0, r.useMemo)(() => (k(c) ? c.get() : c), [c]);
                  return (0, r.createElement)(e, { ...h, children: d });
                };
                return e;
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, rB, rL)
        );
    },
    464: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(49055);
      let r = n.Z,
        s = n.Z;
    },
    35347: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    49055: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    74888: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(27024);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    82654: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(27024),
        r = i(35347);
      let s = r.j ? n.useLayoutEffect : n.useEffect;
    },
  },
]);
