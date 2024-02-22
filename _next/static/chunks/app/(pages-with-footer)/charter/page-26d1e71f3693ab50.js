(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3221],
  {
    89330: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 84874));
    },
    91767: function () {},
    45572: function (e) {
      e.exports = {
        page_container: "page_page_container__P3UAj",
        abstract_text: "page_abstract_text__9PWn1",
        paper_title: "page_paper_title__cYc1j",
        subtitle: "page_subtitle__jLPoI",
        title_section: "page_title_section__BSF_3",
        section: "page_section__0KzaK",
        image_container: "page_image_container__X74CT",
        image_container_caption_no: "page_image_container_caption_no__ZsX6E",
        image_container_image: "page_image_container_image__5RR7e",
        paper_link: "page_paper_link__wFKKM",
        fadeIn: "page_fadeIn___X412",
      };
    },
    9052: function (e) {
      e.exports = {
        container: "Signatures_container__u9WIB",
        delegates_container: "Signatures_delegates_container__5bFpw",
        title: "Signatures_title__j52vy",
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
    84874: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var o = n(64618),
        s = n(27024),
        a = n(45572),
        i = n.n(a),
        r = n(85857),
        l = n(9052),
        c = n.n(l);
      let u = (e) =>
          "string" == typeof e.name &&
          "string" == typeof e.signature &&
          "string" == typeof e.url,
        d = () => {
          let [e, t] = (0, s.useState)([]);
          return (
            (0, s.useEffect)(() => {
              let e = async () => {
                let e = await fetch(
                    "https://raw.githubusercontent.com/opentensor/bittensor-charter/main/signatures.json"
                  ),
                  n = await e.json(),
                  o = [];
                Object.entries(n).forEach((e) => {
                  let [t, n] = e;
                  u(n) && o.push({ ...n, key: t });
                }),
                  t(o);
              };
              e();
            }, []),
            e.length > 0
              ? (0, o.jsxs)("div", {
                  className: c().container,
                  children: [
                    (0, o.jsx)("p", {
                      className: c().title,
                      children: "Signed by",
                    }),
                    (0, o.jsx)("div", {
                      className: c().delegates_container,
                      children: e.map((t, n) => {
                        let s = n < e.length - 1 ? "\xa0\xa0•\xa0\xa0" : "";
                        return (
                          (t.url = t.url.startsWith("http")
                            ? t.url
                            : "https://".concat(t.url)),
                          (0, o.jsxs)(
                            "div",
                            {
                              children: [
                                (0, o.jsx)(r.rU, {
                                  href: t.url,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: t.name,
                                }),
                                s,
                              ],
                            },
                            t.key
                          )
                        );
                      }),
                    }),
                    (0, o.jsx)("br", {}),
                    (0, o.jsx)(r.rU, {
                      href: "https://github.com/opentensor/bittensor-charter/",
                      target: "_blank",
                      rel: "noreferrer",
                      style: { fontSize: "0.6rem" },
                      children: "How to verify signatures?",
                    }),
                  ],
                })
              : null
          );
        },
        p = () =>
          (0, o.jsx)(s.Suspense, {
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
                    children: "The Bittensor Delegates Charter",
                  }),
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      children:
                        "Bittensor itself cannot have a charter. Its core technology is a consensus mechanism, which reaches agreement about how its preferences should be distributed to participants in an open and un−permissioned network. If it has preferences itself, they are openness and decentralization, which are immutably written into its code.",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "As such, this document merely outlines the principles and commitments of those who use Bittensor as a medium to express their subjective preferences on top of its playing field. It is signed by The Opentensor Foundation and other entities that believe in Bittensor's vision of decentralized AI.",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().paper_title,
                      children: "Charter",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "There is wide agreement that the blossoming of Artificial Intelligence offers up tremendous promise − and risk − for humanity's relationship with technology along multiple axes. Those include its potential use to abuse humans, long term existential risk to the human race, and its ability to increase power imbalances. We acknowledge the following principles as our commitments to stop those outcomes. Those are:",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().subtitle,
                      children:
                        "Our Counterpoint To Centralized Control: The greater the power, the more dangerous the abuse",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "We are committed to safeguarding AI from being totally controlled or regulated by governments, powerful corporations, and the individuals signing this document. We believe that excessive centralization of AI poses the greatest risk to the human race, within or without Bittensor. Concentration of power will inevitably create biased decision−making, controlled access to benefits and significant abuse. Recognizing that AI is the most powerful technology humanity has created to date, it is vital that we ensure its governance sits in the hands of the many rather than the few. To ensure this we are further committed to:",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().subtitle,
                      children:
                        "Decentralized Preference Consensus: The purpose of power is to give it away",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "We firmly oppose the misuse of AI for harmful intent, and will actively strive to prevent the spread of harmful content. We also pledge to advocate for the positive, ethical and life−affirming application of AI. Simultaneously, we will actively work to diffuse control over these preferences, in the name of decentralized power, with the express purpose of leveraging the collective wisdom and judgment of humanity around the exceedingly and increasingly difficult questions AI as a technology poses. In pursuit of this, we embrace:",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().subtitle,
                      children:
                        "Open Ownership: In real open source, you have the right to control your own destiny",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "The Bittensor Network inherently allows open and un−permissioned ownership accrual to those who contribute. We, the signatories, will work to clear the path, through which individuals may work to participate, and therefore gain real control in the development of AI. This is necessary to ensure as many humans as possible have access, influence, and hard power in the future that we are creating together. This principle is reinforced by our commitment to:",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().subtitle,
                      children:
                        "Open Source Development: For us, open−source is a moral imperative",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "We are totally committed to open−source development of all of our work within the Bittensor ecosystem; whether it be mining, validating, subnetwork creation or any other value−creating software, and will actively support open−source development projects, education initiatives and those who seek to lower barriers to entry at all levels. We recognize the importance of collaborative efforts and community−driven initiatives to unlock the true potential of AI; all of which can contribute to Bittensor. We will bolster this by upholding our value of:",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().subtitle,
                      children: "Transparency: Transparency is trust",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "The Bittensor blockchain's value transfers are at all times completely transparent. We, the signatories, are further committed to total transparency of Bittensor's decision making process above and beyond what is already public, with the intention of making it clear what our votes in the DAO entail, and why we distribute our preferences in this way to direct Bittensor.",
                    }),
                  ],
                }),
                (0, o.jsxs)("section", {
                  className: i().section,
                  children: [
                    (0, o.jsx)("p", {
                      className: i().paper_title,
                      children: "Conclusion",
                    }),
                    (0, o.jsx)("p", {
                      children:
                        "We have chosen Bittensor as our common platform to represent our shared values for an open and decentralized future of AI. We are devoted to opposing centralized control and encouraging decentralized decision−making through open−ownership, software development, and superior transparency. We believe together, we can shape an AI landscape that truly serves the collective interests of humanity",
                    }),
                  ],
                }),
                (0, o.jsx)(d, {}),
              ],
            }),
          });
      var h = p;
    },
    85857: function (e, t, n) {
      "use strict";
      n.d(t, {
        FB: function () {
          return a.HamburgerMenu;
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
          return s.o;
        },
      }),
        n(64618),
        n(27024),
        n(79290);
      var o = n(10080);
      n(51723), n(55408), n(63911);
      var s = n(1868),
        a = n(72691);
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
        s = n(51723);
      let a = (e) => "number" == typeof e && !isNaN(e),
        i = (e) => "string" == typeof e,
        r = (e) => "function" == typeof e,
        l = (e) => (i(e) || r(e) ? e : null),
        c = (e) => (0, o.isValidElement)(e) || i(e) || r(e) || a(e);
      function u(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: s = !1,
          collapse: a = !0,
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
            h = s ? `${t}--${l}` : t,
            m = s ? `${n}--${l}` : n,
            f = (0, o.useRef)(0);
          return (
            (0, o.useLayoutEffect)(() => {
              let e = d.current,
                t = h.split(" "),
                n = (o) => {
                  o.target === d.current &&
                    (e.dispatchEvent(new Event("d")),
                    e.removeEventListener("animationend", n),
                    e.removeEventListener("animationcancel", n),
                    0 === f.current &&
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
                    a
                      ? (function (e, t, n) {
                          void 0 === n && (n = 300);
                          let { scrollHeight: o, style: s } = e;
                          requestAnimationFrame(() => {
                            (s.minHeight = "initial"),
                              (s.height = o + "px"),
                              (s.transition = `all ${n}ms`),
                              requestAnimationFrame(() => {
                                (s.height = "0"),
                                  (s.padding = "0"),
                                  (s.margin = "0"),
                                  setTimeout(t, n);
                              });
                          });
                        })(e, u, i)
                      : u();
                };
              p ||
                (c
                  ? t()
                  : ((f.current = 1),
                    (e.className += ` ${m}`),
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
        h = (e) => {
          let { theme: t, type: n, ...s } = e;
          return o.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${n})`,
            ...s,
          });
        },
        m = {
          info: function (e) {
            return o.createElement(
              h,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return o.createElement(
              h,
              { ...e },
              o.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return o.createElement(
              h,
              { ...e },
              o.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return o.createElement(
              h,
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
      function f(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function y(e) {
        let { closeToast: t, theme: n, ariaLabel: s = "close" } = e;
        return o.createElement(
          "button",
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            "aria-label": s,
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
      function v(e) {
        let {
            delay: t,
            isRunning: n,
            closeToast: a,
            type: i = "default",
            hide: l,
            className: c,
            style: u,
            controlledProgress: d,
            progress: p,
            rtl: h,
            isIn: m,
            theme: f,
          } = e,
          g = l || (d && 0 === p),
          y = {
            ...u,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: g ? 0 : 1,
          };
        d && (y.transform = `scaleX(${p})`);
        let v = (0, s.Z)(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${f}`,
            `Toastify__progress-bar--${i}`,
            { "Toastify__progress-bar--rtl": h }
          ),
          _ = r(c)
            ? c({ rtl: h, type: i, defaultClassName: v })
            : (0, s.Z)(v, c);
        return o.createElement("div", {
          role: "progressbar",
          "aria-hidden": g ? "true" : "false",
          "aria-label": "notification timer",
          className: _,
          style: y,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            d && p < 1
              ? null
              : () => {
                  m && a();
                },
        });
      }
      let _ = (e) => {
          let {
              isRunning: t,
              preventExitTransition: n,
              toastRef: a,
              eventHandlers: i,
            } = (function (e) {
              let [t, n] = (0, o.useState)(!1),
                [s, a] = (0, o.useState)(!1),
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
                  onClick: h,
                  closeOnClick: m,
                } = e;
              function y(t) {
                if (e.draggable) {
                  "touchstart" === t.nativeEvent.type &&
                    t.nativeEvent.preventDefault(),
                    (l.didMove = !1),
                    document.addEventListener("mousemove", b),
                    document.addEventListener("mouseup", w),
                    document.addEventListener("touchmove", b),
                    document.addEventListener("touchend", w);
                  let n = i.current;
                  (l.canCloseOnClick = !0),
                    (l.canDrag = !0),
                    (l.boundingRect = n.getBoundingClientRect()),
                    (n.style.transition = ""),
                    (l.x = f(t.nativeEvent)),
                    (l.y = g(t.nativeEvent)),
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
              function v(t) {
                if (l.boundingRect) {
                  let { top: n, bottom: o, left: s, right: a } = l.boundingRect;
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  l.x >= s &&
                  l.x <= a &&
                  l.y >= n &&
                  l.y <= o
                    ? T()
                    : _();
                }
              }
              function _() {
                n(!0);
              }
              function T() {
                n(!1);
              }
              function b(n) {
                let o = i.current;
                l.canDrag &&
                  o &&
                  ((l.didMove = !0),
                  t && T(),
                  (l.x = f(n)),
                  (l.y = g(n)),
                  (l.delta =
                    "x" === e.draggableDirection
                      ? l.x - l.start
                      : l.y - l.start),
                  l.start !== l.x && (l.canCloseOnClick = !1),
                  (o.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
                  (o.style.opacity =
                    "" + (1 - Math.abs(l.delta / l.removalDistance))));
              }
              function w() {
                document.removeEventListener("mousemove", b),
                  document.removeEventListener("mouseup", w),
                  document.removeEventListener("touchmove", b),
                  document.removeEventListener("touchend", w);
                let t = i.current;
                if (l.canDrag && l.didMove && t) {
                  if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
                    return a(!0), void e.closeToast();
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
                      i.current.addEventListener("d", _, { once: !0 }),
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
                      window.addEventListener("focus", _),
                      window.addEventListener("blur", T)),
                    () => {
                      e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", _),
                        window.removeEventListener("blur", T));
                    }
                  ),
                  [e.pauseOnFocusLoss]
                );
              let E = {
                onMouseDown: y,
                onTouchStart: y,
                onMouseUp: v,
                onTouchEnd: v,
              };
              return (
                u && d && ((E.onMouseEnter = T), (E.onMouseLeave = _)),
                m &&
                  (E.onClick = (e) => {
                    h && h(e), l.canCloseOnClick && p();
                  }),
                {
                  playToast: _,
                  pauseToast: T,
                  isRunning: t,
                  preventExitTransition: s,
                  toastRef: i,
                  eventHandlers: E,
                }
              );
            })(e),
            {
              closeButton: l,
              children: c,
              autoClose: u,
              onClick: d,
              type: p,
              hideProgressBar: h,
              closeToast: m,
              transition: _,
              position: T,
              className: b,
              style: w,
              bodyClassName: E,
              bodyStyle: x,
              progressClassName: I,
              progressStyle: C,
              updateId: N,
              role: k,
              progress: O,
              rtl: j,
              toastId: L,
              deleteToast: R,
              isIn: B,
              isLoading: A,
              iconOut: z,
              closeOnClick: M,
              theme: P,
            } = e,
            D = (0, s.Z)(
              "Toastify__toast",
              `Toastify__toast-theme--${P}`,
              `Toastify__toast--${p}`,
              { "Toastify__toast--rtl": j },
              { "Toastify__toast--close-on-click": M }
            ),
            S = r(b)
              ? b({ rtl: j, position: T, type: p, defaultClassName: D })
              : (0, s.Z)(D, b),
            $ = !!O || !u,
            F = { closeToast: m, type: p, theme: P },
            W = null;
          return (
            !1 === l ||
              (W = r(l)
                ? l(F)
                : (0, o.isValidElement)(l)
                ? (0, o.cloneElement)(l, F)
                : y(F)),
            o.createElement(
              _,
              {
                isIn: B,
                done: R,
                position: T,
                preventExitTransition: n,
                nodeRef: a,
              },
              o.createElement(
                "div",
                { id: L, onClick: d, className: S, ...i, style: w, ref: a },
                o.createElement(
                  "div",
                  {
                    ...(B && { role: k }),
                    className: r(E)
                      ? E({ type: p })
                      : (0, s.Z)("Toastify__toast-body", E),
                    style: x,
                  },
                  null != z &&
                    o.createElement(
                      "div",
                      {
                        className: (0, s.Z)("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !A,
                        }),
                      },
                      z
                    ),
                  o.createElement("div", null, c)
                ),
                W,
                o.createElement(v, {
                  ...(N && !$ ? { key: `pb-${N}` } : {}),
                  rtl: j,
                  theme: P,
                  delay: u,
                  isRunning: t,
                  isIn: B,
                  closeToast: m,
                  hide: h,
                  type: p,
                  style: C,
                  className: I,
                  controlledProgress: $,
                  progress: O || 0,
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
        b = u(T("bounce", !0)),
        w =
          (u(T("slide", !0)),
          u(T("zoom")),
          u(T("flip")),
          (0, o.forwardRef)((e, t) => {
            let {
                getToastToRender: n,
                containerRef: u,
                isToastActive: h,
              } = (function (e) {
                let [, t] = (0, o.useReducer)((e) => e + 1, 0),
                  [n, s] = (0, o.useState)([]),
                  u = (0, o.useRef)(null),
                  h = (0, o.useRef)(new Map()).current,
                  f = (e) => -1 !== n.indexOf(e),
                  g = (0, o.useRef)({
                    toastKey: 1,
                    displayedToast: 0,
                    count: 0,
                    queue: [],
                    props: e,
                    containerId: null,
                    isToastActive: f,
                    getToast: (e) => h.get(e),
                  }).current;
                function y(e) {
                  let { containerId: t } = e,
                    { limit: n } = g.props;
                  !n ||
                    (t && g.containerId !== t) ||
                    ((g.count -= g.queue.length), (g.queue = []));
                }
                function v(e) {
                  s((t) => (null == e ? [] : t.filter((t) => t !== e)));
                }
                function _() {
                  let {
                    toastContent: e,
                    toastProps: t,
                    staleId: n,
                  } = g.queue.shift();
                  b(e, t, n);
                }
                function T(e, n) {
                  var s, f;
                  let { delay: y, staleId: T, ...w } = n;
                  if (
                    !c(e) ||
                    !u.current ||
                    (g.props.enableMultiContainer &&
                      w.containerId !== g.props.containerId) ||
                    (h.has(w.toastId) && null == w.updateId)
                  )
                    return;
                  let { toastId: E, updateId: x, data: I } = w,
                    { props: C } = g,
                    N = () => v(E),
                    k = null == x;
                  k && g.count++;
                  let O = {
                    ...C,
                    style: C.toastStyle,
                    key: g.toastKey++,
                    ...Object.fromEntries(
                      Object.entries(w).filter((e) => {
                        let [t, n] = e;
                        return null != n;
                      })
                    ),
                    toastId: E,
                    updateId: x,
                    data: I,
                    closeToast: N,
                    isIn: !1,
                    className: l(w.className || C.toastClassName),
                    bodyClassName: l(w.bodyClassName || C.bodyClassName),
                    progressClassName: l(
                      w.progressClassName || C.progressClassName
                    ),
                    autoClose:
                      !w.isLoading &&
                      ((s = w.autoClose),
                      (f = C.autoClose),
                      !1 === s || (a(s) && s > 0) ? s : f),
                    deleteToast() {
                      let e = d(h.get(E), "removed");
                      h.delete(E), p.emit(4, e);
                      let n = g.queue.length;
                      if (
                        ((g.count =
                          null == E ? g.count - g.displayedToast : g.count - 1),
                        g.count < 0 && (g.count = 0),
                        n > 0)
                      ) {
                        let e = null == E ? g.props.limit : 1;
                        if (1 === n || 1 === e) g.displayedToast++, _();
                        else {
                          let t = e > n ? n : e;
                          g.displayedToast = t;
                          for (let e = 0; e < t; e++) _();
                        }
                      } else t();
                    },
                  };
                  (O.iconOut = (function (e) {
                    let { theme: t, type: n, isLoading: s, icon: l } = e,
                      c = null,
                      u = { theme: t, type: n };
                    return (
                      !1 === l ||
                        (r(l)
                          ? (c = l(u))
                          : (0, o.isValidElement)(l)
                          ? (c = (0, o.cloneElement)(l, u))
                          : i(l) || a(l)
                          ? (c = l)
                          : s
                          ? (c = m.spinner())
                          : n in m && (c = m[n](u))),
                      c
                    );
                  })(O)),
                    r(w.onOpen) && (O.onOpen = w.onOpen),
                    r(w.onClose) && (O.onClose = w.onClose),
                    (O.closeButton = C.closeButton),
                    !1 === w.closeButton || c(w.closeButton)
                      ? (O.closeButton = w.closeButton)
                      : !0 === w.closeButton &&
                        (O.closeButton = !c(C.closeButton) || C.closeButton);
                  let j = e;
                  (0, o.isValidElement)(e) && !i(e.type)
                    ? (j = (0, o.cloneElement)(e, {
                        closeToast: N,
                        toastProps: O,
                        data: I,
                      }))
                    : r(e) &&
                      (j = e({ closeToast: N, toastProps: O, data: I })),
                    C.limit && C.limit > 0 && g.count > C.limit && k
                      ? g.queue.push({
                          toastContent: j,
                          toastProps: O,
                          staleId: T,
                        })
                      : a(y)
                      ? setTimeout(() => {
                          b(j, O, T);
                        }, y)
                      : b(j, O, T);
                }
                function b(e, t, n) {
                  let { toastId: o } = t;
                  n && h.delete(n);
                  let a = { content: e, props: t };
                  h.set(o, a),
                    s((e) => [...e, o].filter((e) => e !== n)),
                    p.emit(
                      4,
                      d(a, null == a.props.updateId ? "added" : "updated")
                    );
                }
                return (
                  (0, o.useEffect)(
                    () => (
                      (g.containerId = e.containerId),
                      p
                        .cancelEmit(3)
                        .on(0, T)
                        .on(1, (e) => u.current && v(e))
                        .on(5, y)
                        .emit(2, g),
                      () => {
                        h.clear(), p.emit(3, g);
                      }
                    ),
                    []
                  ),
                  (0, o.useEffect)(() => {
                    (g.props = e),
                      (g.isToastActive = f),
                      (g.displayedToast = n.length);
                  }),
                  {
                    getToastToRender: function (t) {
                      let n = new Map(),
                        o = Array.from(h.values());
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
                    isToastActive: f,
                  }
                );
              })(e),
              { className: f, style: g, rtl: y, containerId: v } = e;
            return (
              (0, o.useEffect)(() => {
                t && (t.current = u.current);
              }, []),
              o.createElement(
                "div",
                { ref: u, className: "Toastify", id: v },
                n((e, t) => {
                  let n = t.length ? { ...g } : { ...g, pointerEvents: "none" };
                  return o.createElement(
                    "div",
                    {
                      className: (function (e) {
                        let t = (0, s.Z)(
                          "Toastify__toast-container",
                          `Toastify__toast-container--${e}`,
                          { "Toastify__toast-container--rtl": y }
                        );
                        return r(f)
                          ? f({ position: e, rtl: y, defaultClassName: t })
                          : (0, s.Z)(t, l(f));
                      })(e),
                      style: n,
                      key: `container-${e}`,
                    },
                    t.map((e, n) => {
                      let { content: s, props: a } = e;
                      return o.createElement(
                        _,
                        {
                          ...a,
                          isIn: h(a.toastId),
                          style: {
                            ...a.style,
                            "--nth": n + 1,
                            "--len": t.length,
                          },
                          key: `toast-${a.key}`,
                        },
                        s
                      );
                    })
                  );
                })
              )
            );
          }));
      (w.displayName = "ToastContainer"),
        (w.defaultProps = {
          position: "top-right",
          transition: b,
          autoClose: 5e3,
          closeButton: y,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light",
        });
      let E,
        x = new Map(),
        I = [],
        C = 1;
      function N(e, t) {
        return (
          x.size > 0 ? p.emit(0, e, t) : I.push({ content: e, options: t }),
          t.toastId
        );
      }
      function k(e, t) {
        return {
          ...t,
          type: (t && t.type) || e,
          toastId: t && (i(t.toastId) || a(t.toastId)) ? t.toastId : "" + C++,
        };
      }
      function O(e) {
        return (t, n) => N(t, k(e, n));
      }
      function j(e, t) {
        return N(e, k("default", t));
      }
      (j.loading = (e, t) =>
        N(
          e,
          k("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (j.promise = function (e, t, n) {
          let o,
            { pending: s, error: a, success: l } = t;
          s &&
            (o = i(s) ? j.loading(s, n) : j.loading(s.render, { ...n, ...s }));
          let c = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
            },
            u = (e, t, s) => {
              if (null == t) return void j.dismiss(o);
              let a = { type: e, ...c, ...n, data: s },
                r = i(t) ? { render: t } : t;
              return (
                o ? j.update(o, { ...a, ...r }) : j(r.render, { ...a, ...r }), s
              );
            },
            d = r(e) ? e() : e;
          return (
            d.then((e) => u("success", l, e)).catch((e) => u("error", a, e)), d
          );
        }),
        (j.success = O("success")),
        (j.info = O("info")),
        (j.error = O("error")),
        (j.warning = O("warning")),
        (j.warn = j.warning),
        (j.dark = (e, t) => N(e, k("default", { theme: "dark", ...t }))),
        (j.dismiss = (e) => {
          x.size > 0
            ? p.emit(1, e)
            : (I = I.filter((t) => null != e && t.options.toastId !== e));
        }),
        (j.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (j.isActive = (e) => {
          let t = !1;
          return (
            x.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (j.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              let n = (function (e, t) {
                let { containerId: n } = t,
                  o = x.get(n || E);
                return o && o.getToast(e);
              })(e, t);
              if (n) {
                let { props: o, content: s } = n,
                  a = {
                    delay: 100,
                    ...o,
                    ...t,
                    toastId: t.toastId || e,
                    updateId: "" + C++,
                  };
                a.toastId !== e && (a.staleId = e);
                let i = a.render || s;
                delete a.render, N(i, a);
              }
            }, 0);
        }),
        (j.done = (e) => {
          j.update(e, { progress: 1 });
        }),
        (j.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (j.POSITION = {
          TOP_LEFT: "top-left",
          TOP_RIGHT: "top-right",
          TOP_CENTER: "top-center",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM_RIGHT: "bottom-right",
          BOTTOM_CENTER: "bottom-center",
        }),
        (j.TYPE = {
          INFO: "info",
          SUCCESS: "success",
          WARNING: "warning",
          ERROR: "error",
          DEFAULT: "default",
        }),
        p
          .on(2, (e) => {
            (E = e.containerId || e),
              x.set(E, e),
              I.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (I = []);
          })
          .on(3, (e) => {
            x.delete(e.containerId || e),
              0 === x.size && p.off(0).off(1).off(5);
          });
    },
  },
  function (e) {
    e.O(0, [9774, 8761, 7183, 1410, 8559, 3132, 1744], function () {
      return e((e.s = 89330));
    }),
      (_N_E = e.O());
  },
]);
