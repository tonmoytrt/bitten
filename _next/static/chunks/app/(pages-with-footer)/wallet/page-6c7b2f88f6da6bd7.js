(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8177],
  {
    50190: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 15209));
    },
    91767: function () {},
    91440: function (e) {
      e.exports = {
        page_container: "page_page_container__Y5R10",
        abstract_text: "page_abstract_text__mJsum",
        paper_title: "page_paper_title__KlabL",
        subtitle: "page_subtitle__pEzmp",
        title_section: "page_title_section__A4r6q",
        section: "page_section__BgVhg",
        image_container: "page_image_container__RtKBn",
        image_container_caption_no: "page_image_container_caption_no__OLWBH",
        image_container_image: "page_image_container_image__zOQzT",
        paper_link: "page_paper_link__QrsyX",
        list: "page_list__qJ_qV",
        force: "page_force__6_RLF",
        fadeIn: "page_fadeIn__5p_bb",
      };
    },
    37498: function (e) {
      e.exports = {
        switch: "Switch_switch__FV0DZ",
        slider: "Switch_slider__b7uZ7",
      };
    },
    55408: function (e) {
      e.exports = {
        text: "Typography_text__v9sol",
        h1: "Typography_h1__j0Qz0",
        h2: "Typography_h2__2ORs8",
        h3: "Typography_h3__F_aiD",
        cta1: "Typography_cta1__xaHCk",
        cta2: "Typography_cta2__ETmIp",
        cta3: "Typography_cta3__BGYgm",
      };
    },
    15209: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(64618),
        a = n(27024),
        s = n(91440),
        i = n.n(s),
        r = n(85857),
        l = n(63911),
        c = n.n(l);
      let u = () =>
        (0, o.jsx)(a.Suspense, {
          fallback: (0, o.jsx)("div", {
            style: { minHeight: "100vh", backgroundColor: "white" },
          }),
          children: (0, o.jsxs)("div", {
            className: i().page_container,
            children: [
              (0, o.jsx)("section", {
                className: i().title_section,
                children: (0, o.jsx)("p", {
                  className: i().paper_title,
                  children: "Bittensor Wallet",
                }),
              }),
              (0, o.jsxs)("section", {
                className: i().section,
                children: [
                  (0, o.jsx)("p", {
                    children:
                      "The web based wallet has been deprecated. The only official wallet supported by the Opentensor Foundation works as an extension in Chromium-based browsers (Chrome, Brave, etc.).",
                  }),
                  (0, o.jsxs)("p", {
                    children: [
                      "Download it",
                      " ",
                      (0, o.jsx)(r.rU, {
                        href: "https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc",
                        isExternal: !0,
                        children: "here",
                      }),
                      ".",
                    ],
                  }),
                  (0, o.jsx)("p", {
                    children:
                      "We are working on supporting more platforms and browsers.",
                  }),
                  (0, o.jsx)(c(), {
                    href: "https://chromewebstore.google.com/detail/bittensor-wallet/bdgmdoedahdcjmpmifafdhnffjinddgc",
                    target: "_blank",
                    children: (0, o.jsx)("img", {
                      src: "/images/wallet.jpg",
                      style: { width: "100%" },
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      t.default = u;
    },
    85857: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return s.HamburgerMenu;
        },
        h4: function () {
          return i.Header;
        },
        JO: function () {
          return o.J;
        },
        rU: function () {
          return c.r;
        },
        oA: function () {
          return a.o;
        },
      }),
        n(64618),
        n(27024),
        n(79290);
      var o = n(10080);
      n(51723), n(55408), n(63911);
      var a = n(1868),
        s = n(72691);
      n(25808);
      var i = n(15416);
      n(61847);
      var r = n(37498),
        l = n.n(r);
      l().switch, l().input, n(65037), n(96455), n(8518), n(91767);
      var c = n(93625);
    },
    8518: function (e, t, n) {
      "use strict";
      var o = n(27024),
        a = n(51723);
      let s = (e) => "number" == typeof e && !isNaN(e),
        i = (e) => "string" == typeof e,
        r = (e) => "function" == typeof e,
        l = (e) => (i(e) || r(e) ? e : null),
        c = (e) => (0, o.isValidElement)(e) || i(e) || r(e) || s(e);
      function u(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: a = !1,
          collapse: s = !0,
          collapseDuration: i = 300,
        } = e;
        return function (e) {
          let {
              children: r,
              position: l,
              preventExitTransition: c,
              done: u,
              nodeRef: d,
              isIn: p,
            } = e,
            m = a ? `${t}--${l}` : t,
            f = a ? `${n}--${l}` : n,
            g = (0, o.useRef)(0);
          return (
            (0, o.useLayoutEffect)(() => {
              let e = d.current,
                t = m.split(" "),
                n = (o) => {
                  o.target === d.current &&
                    (e.dispatchEvent(new Event("d")),
                    e.removeEventListener("animationend", n),
                    e.removeEventListener("animationcancel", n),
                    0 === g.current &&
                      "animationcancel" !== o.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", n),
                e.addEventListener("animationcancel", n);
            }, []),
            (0, o.useEffect)(() => {
              let e = d.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    s
                      ? (function (e, t, n) {
                          void 0 === n && (n = 300);
                          let { scrollHeight: o, style: a } = e;
                          requestAnimationFrame(() => {
                            (a.minHeight = "initial"),
                              (a.height = o + "px"),
                              (a.transition = `all ${n}ms`),
                              requestAnimationFrame(() => {
                                (a.height = "0"),
                                  (a.padding = "0"),
                                  (a.margin = "0"),
                                  setTimeout(t, n);
                              });
                          });
                        })(e, u, i)
                      : u();
                };
              p ||
                (c
                  ? t()
                  : ((g.current = 1),
                    (e.className += ` ${f}`),
                    e.addEventListener("animationend", t)));
            }, [p]),
            o.createElement(o.Fragment, null, r)
          );
        };
      }
      function d(e, t) {
        return {
          content: e.content,
          containerId: e.props.containerId,
          id: e.props.toastId,
          theme: e.props.theme,
          type: e.props.type,
          data: e.props.data || {},
          isLoading: e.props.isLoading,
          icon: e.props.icon,
          status: t,
        };
      }
      let p = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return (
              this.list.has(e) || this.list.set(e, []),
              this.list.get(e).push(t),
              this
            );
          },
          off(e, t) {
            if (t) {
              let n = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            let t = this.emitQueue.get(e);
            return (
              t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                let n = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []),
                  this.emitQueue.get(e).push(n);
              });
          },
        },
        m = (e) => {
          let { theme: t, type: n, ...a } = e;
          return o.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${n})`,
            ...a,
          });
        },
        f = {
          info: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return o.createElement(
              m,
              { ...e },
              o.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return o.createElement("div", { className: "Toastify__spinner" });
          },
        };
      function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      function h(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function _(e) {
        let { closeToast: t, theme: n, ariaLabel: a = "close" } = e;
        return o.createElement(
          "button",
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            "aria-label": a,
          },
          o.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            o.createElement("path", {
              fillRule: "evenodd",
              d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
          )
        );
      }
      function y(e) {
        let {
            delay: t,
            isRunning: n,
            closeToast: s,
            type: i = "default",
            hide: l,
            className: c,
            style: u,
            controlledProgress: d,
            progress: p,
            rtl: m,
            isIn: f,
            theme: g,
          } = e,
          h = l || (d && 0 === p),
          _ = {
            ...u,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: h ? 0 : 1,
          };
        d && (_.transform = `scaleX(${p})`);
        let y = (0, a.Z)(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${g}`,
            `Toastify__progress-bar--${i}`,
            { "Toastify__progress-bar--rtl": m }
          ),
          v = r(c)
            ? c({ rtl: m, type: i, defaultClassName: y })
            : (0, a.Z)(y, c);
        return o.createElement("div", {
          role: "progressbar",
          "aria-hidden": h ? "true" : "false",
          "aria-label": "notification timer",
          className: v,
          style: _,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            d && p < 1
              ? null
              : () => {
                  f && s();
                },
        });
      }
      let v = (e) => {
          let {
              isRunning: t,
              preventExitTransition: n,
              toastRef: s,
              eventHandlers: i,
            } = (function (e) {
              let [t, n] = (0, o.useState)(!1),
                [a, s] = (0, o.useState)(!1),
                i = (0, o.useRef)(null),
                l = (0, o.useRef)({
                  start: 0,
                  x: 0,
                  y: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  boundingRect: null,
                  didMove: !1,
                }).current,
                c = (0, o.useRef)(e),
                {
                  autoClose: u,
                  pauseOnHover: d,
                  closeToast: p,
                  onClick: m,
                  closeOnClick: f,
                } = e;
              function _(t) {
                if (e.draggable) {
                  "touchstart" === t.nativeEvent.type &&
                    t.nativeEvent.preventDefault(),
                    (l.didMove = !1),
                    document.addEventListener("mousemove", E),
                    document.addEventListener("mouseup", b),
                    document.addEventListener("touchmove", E),
                    document.addEventListener("touchend", b);
                  let n = i.current;
                  (l.canCloseOnClick = !0),
                    (l.canDrag = !0),
                    (l.boundingRect = n.getBoundingClientRect()),
                    (n.style.transition = ""),
                    (l.x = g(t.nativeEvent)),
                    (l.y = h(t.nativeEvent)),
                    "x" === e.draggableDirection
                      ? ((l.start = l.x),
                        (l.removalDistance =
                          n.offsetWidth * (e.draggablePercent / 100)))
                      : ((l.start = l.y),
                        (l.removalDistance =
                          n.offsetHeight *
                          (80 === e.draggablePercent
                            ? 1.5 * e.draggablePercent
                            : e.draggablePercent / 100)));
                }
              }
              function y(t) {
                if (l.boundingRect) {
                  let { top: n, bottom: o, left: a, right: s } = l.boundingRect;
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  l.x >= a &&
                  l.x <= s &&
                  l.y >= n &&
                  l.y <= o
                    ? T()
                    : v();
                }
              }
              function v() {
                n(!0);
              }
              function T() {
                n(!1);
              }
              function E(n) {
                let o = i.current;
                l.canDrag &&
                  o &&
                  ((l.didMove = !0),
                  t && T(),
                  (l.x = g(n)),
                  (l.y = h(n)),
                  (l.delta =
                    "x" === e.draggableDirection
                      ? l.x - l.start
                      : l.y - l.start),
                  l.start !== l.x && (l.canCloseOnClick = !1),
                  (o.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
                  (o.style.opacity =
                    "" + (1 - Math.abs(l.delta / l.removalDistance))));
              }
              function b() {
                document.removeEventListener("mousemove", E),
                  document.removeEventListener("mouseup", b),
                  document.removeEventListener("touchmove", E),
                  document.removeEventListener("touchend", b);
                let t = i.current;
                if (l.canDrag && l.didMove && t) {
                  if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
                    return s(!0), void e.closeToast();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    (t.style.transform = `translate${e.draggableDirection}(0)`),
                    (t.style.opacity = "1");
                }
              }
              (0, o.useEffect)(() => {
                c.current = e;
              }),
                (0, o.useEffect)(
                  () => (
                    i.current &&
                      i.current.addEventListener("d", v, { once: !0 }),
                    r(e.onOpen) &&
                      e.onOpen(
                        (0, o.isValidElement)(e.children) && e.children.props
                      ),
                    () => {
                      let e = c.current;
                      r(e.onClose) &&
                        e.onClose(
                          (0, o.isValidElement)(e.children) && e.children.props
                        );
                    }
                  ),
                  []
                ),
                (0, o.useEffect)(
                  () => (
                    e.pauseOnFocusLoss &&
                      (document.hasFocus() || T(),
                      window.addEventListener("focus", v),
                      window.addEventListener("blur", T)),
                    () => {
                      e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", v),
                        window.removeEventListener("blur", T));
                    }
                  ),
                  [e.pauseOnFocusLoss]
                );
              let C = {
                onMouseDown: _,
                onTouchStart: _,
                onMouseUp: y,
                onTouchEnd: y,
              };
              return (
                u && d && ((C.onMouseEnter = T), (C.onMouseLeave = v)),
                f &&
                  (C.onClick = (e) => {
                    m && m(e), l.canCloseOnClick && p();
                  }),
                {
                  playToast: v,
                  pauseToast: T,
                  isRunning: t,
                  preventExitTransition: a,
                  toastRef: i,
                  eventHandlers: C,
                }
              );
            })(e),
            {
              closeButton: l,
              children: c,
              autoClose: u,
              onClick: d,
              type: p,
              hideProgressBar: m,
              closeToast: f,
              transition: v,
              position: T,
              className: E,
              style: b,
              bodyClassName: C,
              bodyStyle: I,
              progressClassName: w,
              progressStyle: O,
              updateId: L,
              role: x,
              progress: N,
              rtl: R,
              toastId: k,
              deleteToast: B,
              isIn: M,
              isLoading: D,
              iconOut: P,
              closeOnClick: $,
              theme: z,
            } = e,
            j = (0, a.Z)(
              "Toastify__toast",
              `Toastify__toast-theme--${z}`,
              `Toastify__toast--${p}`,
              { "Toastify__toast--rtl": R },
              { "Toastify__toast--close-on-click": $ }
            ),
            A = r(E)
              ? E({ rtl: R, position: T, type: p, defaultClassName: j })
              : (0, a.Z)(j, E),
            F = !!N || !u,
            H = { closeToast: f, type: p, theme: z },
            S = null;
          return (
            !1 === l ||
              (S = r(l)
                ? l(H)
                : (0, o.isValidElement)(l)
                ? (0, o.cloneElement)(l, H)
                : _(H)),
            o.createElement(
              v,
              {
                isIn: M,
                done: B,
                position: T,
                preventExitTransition: n,
                nodeRef: s,
              },
              o.createElement(
                "div",
                { id: k, onClick: d, className: A, ...i, style: b, ref: s },
                o.createElement(
                  "div",
                  {
                    ...(M && { role: x }),
                    className: r(C)
                      ? C({ type: p })
                      : (0, a.Z)("Toastify__toast-body", C),
                    style: I,
                  },
                  null != P &&
                    o.createElement(
                      "div",
                      {
                        className: (0, a.Z)("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !D,
                        }),
                      },
                      P
                    ),
                  o.createElement("div", null, c)
                ),
                S,
                o.createElement(y, {
                  ...(L && !F ? { key: `pb-${L}` } : {}),
                  rtl: R,
                  theme: z,
                  delay: u,
                  isRunning: t,
                  isIn: M,
                  closeToast: f,
                  hide: m,
                  type: p,
                  style: O,
                  className: w,
                  controlledProgress: F,
                  progress: N || 0,
                })
              )
            )
          );
        },
        T = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        E = u(T("bounce", !0)),
        b =
          (u(T("slide", !0)),
          u(T("zoom")),
          u(T("flip")),
          (0, o.forwardRef)((e, t) => {
            let {
                getToastToRender: n,
                containerRef: u,
                isToastActive: m,
              } = (function (e) {
                let [, t] = (0, o.useReducer)((e) => e + 1, 0),
                  [n, a] = (0, o.useState)([]),
                  u = (0, o.useRef)(null),
                  m = (0, o.useRef)(new Map()).current,
                  g = (e) => -1 !== n.indexOf(e),
                  h = (0, o.useRef)({
                    toastKey: 1,
                    displayedToast: 0,
                    count: 0,
                    queue: [],
                    props: e,
                    containerId: null,
                    isToastActive: g,
                    getToast: (e) => m.get(e),
                  }).current;
                function _(e) {
                  let { containerId: t } = e,
                    { limit: n } = h.props;
                  !n ||
                    (t && h.containerId !== t) ||
                    ((h.count -= h.queue.length), (h.queue = []));
                }
                function y(e) {
                  a((t) => (null == e ? [] : t.filter((t) => t !== e)));
                }
                function v() {
                  let {
                    toastContent: e,
                    toastProps: t,
                    staleId: n,
                  } = h.queue.shift();
                  E(e, t, n);
                }
                function T(e, n) {
                  var a, g;
                  let { delay: _, staleId: T, ...b } = n;
                  if (
                    !c(e) ||
                    !u.current ||
                    (h.props.enableMultiContainer &&
                      b.containerId !== h.props.containerId) ||
                    (m.has(b.toastId) && null == b.updateId)
                  )
                    return;
                  let { toastId: C, updateId: I, data: w } = b,
                    { props: O } = h,
                    L = () => y(C),
                    x = null == I;
                  x && h.count++;
                  let N = {
                    ...O,
                    style: O.toastStyle,
                    key: h.toastKey++,
                    ...Object.fromEntries(
                      Object.entries(b).filter((e) => {
                        let [t, n] = e;
                        return null != n;
                      })
                    ),
                    toastId: C,
                    updateId: I,
                    data: w,
                    closeToast: L,
                    isIn: !1,
                    className: l(b.className || O.toastClassName),
                    bodyClassName: l(b.bodyClassName || O.bodyClassName),
                    progressClassName: l(
                      b.progressClassName || O.progressClassName
                    ),
                    autoClose:
                      !b.isLoading &&
                      ((a = b.autoClose),
                      (g = O.autoClose),
                      !1 === a || (s(a) && a > 0) ? a : g),
                    deleteToast() {
                      let e = d(m.get(C), "removed");
                      m.delete(C), p.emit(4, e);
                      let n = h.queue.length;
                      if (
                        ((h.count =
                          null == C ? h.count - h.displayedToast : h.count - 1),
                        h.count < 0 && (h.count = 0),
                        n > 0)
                      ) {
                        let e = null == C ? h.props.limit : 1;
                        if (1 === n || 1 === e) h.displayedToast++, v();
                        else {
                          let t = e > n ? n : e;
                          h.displayedToast = t;
                          for (let e = 0; e < t; e++) v();
                        }
                      } else t();
                    },
                  };
                  (N.iconOut = (function (e) {
                    let { theme: t, type: n, isLoading: a, icon: l } = e,
                      c = null,
                      u = { theme: t, type: n };
                    return (
                      !1 === l ||
                        (r(l)
                          ? (c = l(u))
                          : (0, o.isValidElement)(l)
                          ? (c = (0, o.cloneElement)(l, u))
                          : i(l) || s(l)
                          ? (c = l)
                          : a
                          ? (c = f.spinner())
                          : n in f && (c = f[n](u))),
                      c
                    );
                  })(N)),
                    r(b.onOpen) && (N.onOpen = b.onOpen),
                    r(b.onClose) && (N.onClose = b.onClose),
                    (N.closeButton = O.closeButton),
                    !1 === b.closeButton || c(b.closeButton)
                      ? (N.closeButton = b.closeButton)
                      : !0 === b.closeButton &&
                        (N.closeButton = !c(O.closeButton) || O.closeButton);
                  let R = e;
                  (0, o.isValidElement)(e) && !i(e.type)
                    ? (R = (0, o.cloneElement)(e, {
                        closeToast: L,
                        toastProps: N,
                        data: w,
                      }))
                    : r(e) &&
                      (R = e({ closeToast: L, toastProps: N, data: w })),
                    O.limit && O.limit > 0 && h.count > O.limit && x
                      ? h.queue.push({
                          toastContent: R,
                          toastProps: N,
                          staleId: T,
                        })
                      : s(_)
                      ? setTimeout(() => {
                          E(R, N, T);
                        }, _)
                      : E(R, N, T);
                }
                function E(e, t, n) {
                  let { toastId: o } = t;
                  n && m.delete(n);
                  let s = { content: e, props: t };
                  m.set(o, s),
                    a((e) => [...e, o].filter((e) => e !== n)),
                    p.emit(
                      4,
                      d(s, null == s.props.updateId ? "added" : "updated")
                    );
                }
                return (
                  (0, o.useEffect)(
                    () => (
                      (h.containerId = e.containerId),
                      p
                        .cancelEmit(3)
                        .on(0, T)
                        .on(1, (e) => u.current && y(e))
                        .on(5, _)
                        .emit(2, h),
                      () => {
                        m.clear(), p.emit(3, h);
                      }
                    ),
                    []
                  ),
                  (0, o.useEffect)(() => {
                    (h.props = e),
                      (h.isToastActive = g),
                      (h.displayedToast = n.length);
                  }),
                  {
                    getToastToRender: function (t) {
                      let n = new Map(),
                        o = Array.from(m.values());
                      return (
                        e.newestOnTop && o.reverse(),
                        o.forEach((e) => {
                          let { position: t } = e.props;
                          n.has(t) || n.set(t, []), n.get(t).push(e);
                        }),
                        Array.from(n, (e) => t(e[0], e[1]))
                      );
                    },
                    containerRef: u,
                    isToastActive: g,
                  }
                );
              })(e),
              { className: g, style: h, rtl: _, containerId: y } = e;
            return (
              (0, o.useEffect)(() => {
                t && (t.current = u.current);
              }, []),
              o.createElement(
                "div",
                { ref: u, className: "Toastify", id: y },
                n((e, t) => {
                  let n = t.length ? { ...h } : { ...h, pointerEvents: "none" };
                  return o.createElement(
                    "div",
                    {
                      className: (function (e) {
                        let t = (0, a.Z)(
                          "Toastify__toast-container",
                          `Toastify__toast-container--${e}`,
                          { "Toastify__toast-container--rtl": _ }
                        );
                        return r(g)
                          ? g({ position: e, rtl: _, defaultClassName: t })
                          : (0, a.Z)(t, l(g));
                      })(e),
                      style: n,
                      key: `container-${e}`,
                    },
                    t.map((e, n) => {
                      let { content: a, props: s } = e;
                      return o.createElement(
                        v,
                        {
                          ...s,
                          isIn: m(s.toastId),
                          style: {
                            ...s.style,
                            "--nth": n + 1,
                            "--len": t.length,
                          },
                          key: `toast-${s.key}`,
                        },
                        a
                      );
                    })
                  );
                })
              )
            );
          }));
      (b.displayName = "ToastContainer"),
        (b.defaultProps = {
          position: "top-right",
          transition: E,
          autoClose: 5e3,
          closeButton: _,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light",
        });
      let C,
        I = new Map(),
        w = [],
        O = 1;
      function L(e, t) {
        return (
          I.size > 0 ? p.emit(0, e, t) : w.push({ content: e, options: t }),
          t.toastId
        );
      }
      function x(e, t) {
        return {
          ...t,
          type: (t && t.type) || e,
          toastId: t && (i(t.toastId) || s(t.toastId)) ? t.toastId : "" + O++,
        };
      }
      function N(e) {
        return (t, n) => L(t, x(e, n));
      }
      function R(e, t) {
        return L(e, x("default", t));
      }
      (R.loading = (e, t) =>
        L(
          e,
          x("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (R.promise = function (e, t, n) {
          let o,
            { pending: a, error: s, success: l } = t;
          a &&
            (o = i(a) ? R.loading(a, n) : R.loading(a.render, { ...n, ...a }));
          let c = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
            },
            u = (e, t, a) => {
              if (null == t) return void R.dismiss(o);
              let s = { type: e, ...c, ...n, data: a },
                r = i(t) ? { render: t } : t;
              return (
                o ? R.update(o, { ...s, ...r }) : R(r.render, { ...s, ...r }), a
              );
            },
            d = r(e) ? e() : e;
          return (
            d.then((e) => u("success", l, e)).catch((e) => u("error", s, e)), d
          );
        }),
        (R.success = N("success")),
        (R.info = N("info")),
        (R.error = N("error")),
        (R.warning = N("warning")),
        (R.warn = R.warning),
        (R.dark = (e, t) => L(e, x("default", { theme: "dark", ...t }))),
        (R.dismiss = (e) => {
          I.size > 0
            ? p.emit(1, e)
            : (w = w.filter((t) => null != e && t.options.toastId !== e));
        }),
        (R.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (R.isActive = (e) => {
          let t = !1;
          return (
            I.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (R.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              let n = (function (e, t) {
                let { containerId: n } = t,
                  o = I.get(n || C);
                return o && o.getToast(e);
              })(e, t);
              if (n) {
                let { props: o, content: a } = n,
                  s = {
                    delay: 100,
                    ...o,
                    ...t,
                    toastId: t.toastId || e,
                    updateId: "" + O++,
                  };
                s.toastId !== e && (s.staleId = e);
                let i = s.render || a;
                delete s.render, L(i, s);
              }
            }, 0);
        }),
        (R.done = (e) => {
          R.update(e, { progress: 1 });
        }),
        (R.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (R.POSITION = {
          TOP_LEFT: "top-left",
          TOP_RIGHT: "top-right",
          TOP_CENTER: "top-center",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM_RIGHT: "bottom-right",
          BOTTOM_CENTER: "bottom-center",
        }),
        (R.TYPE = {
          INFO: "info",
          SUCCESS: "success",
          WARNING: "warning",
          ERROR: "error",
          DEFAULT: "default",
        }),
        p
          .on(2, (e) => {
            (C = e.containerId || e),
              I.set(C, e),
              w.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (w = []);
          })
          .on(3, (e) => {
            I.delete(e.containerId || e),
              0 === I.size && p.off(0).off(1).off(5);
          });
    },
  },
  function (e) {
    e.O(0, [9774, 8761, 7183, 1410, 8559, 3132, 1744], function () {
      return e((e.s = 50190));
    }),
      (_N_E = e.O());
  },
]);
