(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8148],
  {
    56229: function (e, r, a) {
      Promise.resolve().then(a.bind(a, 31075));
    },
    41078: function () {},
    45481: function () {},
    26879: function (e) {
      e.exports = { container: "Footer_container__1KFYC" };
    },
    37519: function (e) {
      e.exports = { menu_wrapper: "HamburgerMenuItems_menu_wrapper__Bfda7" };
    },
    84721: function (e) {
      e.exports = {
        container: "Header_container__YYCbJ",
        logo_hamburger_container: "Header_logo_hamburger_container__0vVRk",
        mobile_search_wrapper: "Header_mobile_search_wrapper__Wx1VE",
        desktop_search_wrapper: "Header_desktop_search_wrapper__S__O8",
        hamburger_container: "Header_hamburger_container__igmHm",
        menu_content: "Header_menu_content__4TGjp",
        menu_list: "Header_menu_list__IJAJQ",
        nav_wrapper: "Header_nav_wrapper__ljtw4",
        menu_item: "Header_menu_item__gfbRy",
        logo: "Header_logo__tYDpk",
        tao_credit_container: "Header_tao_credit_container__auZv8",
        active_link: "Header_active_link__VKWm4",
      };
    },
    84410: function (e) {
      e.exports = {
        search_container: "Search_search_container__jGyfn",
        loading: "Search_loading__n2bvf",
        search_input: "Search_search_input__4PAQe",
        search_icon: "Search_search_icon__wLemh",
      };
    },
    80612: function (e) {
      e.exports = {
        display1: "Typography_display1__u7wUy",
        display2: "Typography_display2__5TSFe",
        display3: "Typography_display3__losVp",
        display4: "Typography_display4__d7b4j",
        heading1: "Typography_heading1__iWzPt",
        heading2: "Typography_heading2__3Aw5_",
        heading3: "Typography_heading3__l4MdH",
        paragraph_big: "Typography_paragraph_big__xy83B",
        paragraph: "Typography_paragraph__Rr3aE",
        paragraph_small: "Typography_paragraph_small__QmRYu",
        label: "Typography_label__MktjC",
        tao_amount: "Typography_tao_amount__lC4hp",
      };
    },
    41781: function (e) {
      e.exports = {
        body_style: "layout_body_style__m3Ulx",
        layout_container: "layout_layout_container__Fi_yA",
        main_container: "layout_main_container__EQI_m",
        children_container: "layout_children_container__8mLl_",
        children_wrapper: "layout_children_wrapper__YeLZp",
        notification: "layout_notification__aw9pX",
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
    89737: function (e, r, a) {
      "use strict";
      a.d(r, {
        S: function () {
          return o;
        },
        _: function () {
          return _;
        },
      });
      var n = a(64618),
        t = a(32479),
        i = a(26437),
        s = a(27024),
        l = a(8121),
        c = a(87040);
      let o = (0, i.ec)(),
        _ = (e) => {
          let { children: r } = e,
            [a] = (0, s.useState)(
              () => new l.S({ defaultOptions: { queries: { staleTime: 5e3 } } })
            ),
            [i] = (0, s.useState)(() =>
              o.createClient({
                links: [
                  (0, t.gb)({ enabled: () => !0 }),
                  (0, t.ch)({
                    url: "/api/trpc/",
                    fetch: async (e, r) => {
                      let a = (0, t.wY)();
                      return a(e, { ...r, credentials: "include" });
                    },
                  }),
                ],
              })
            );
          return (0, n.jsx)(o.Provider, {
            client: i,
            queryClient: a,
            children: (0, n.jsx)(c.aH, { client: a, children: r }),
          });
        };
    },
    67911: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return l;
        },
      });
      var n = a(64618);
      a(27024);
      var t = a(51723),
        i = a(80612),
        s = a.n(i);
      let l = {
        Display1: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().display1, r),
            children: a,
          });
        },
        Display2: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().display2, r),
            children: a,
          });
        },
        Display3: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().display3, r),
            children: a,
          });
        },
        Display4: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().display4, r),
            children: a,
          });
        },
        Heading1: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().heading1, r),
            children: a,
          });
        },
        Heading2: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().heading2, r),
            children: a,
          });
        },
        Heading3: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().heading3, r),
            children: a,
          });
        },
        ParagraphBig: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().paragraph_big, r),
            children: a,
          });
        },
        Paragraph: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().paragraph, r),
            children: a,
          });
        },
        ParagraphSmall: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().paragraph_small, r),
            children: a,
          });
        },
        Label: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().label, r),
            children: a,
          });
        },
        TaoSymbol: (e) => {
          let { className: r, children: a } = e;
          return (0, n.jsx)("span", {
            className: (0, t.Z)(s().tao_amount, r),
            children: a,
          });
        },
      };
    },
    31075: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return Y;
          },
        });
      var n,
        t,
        i = a(64618),
        s = a(4728),
        l = a(65656),
        c = a(89737),
        o = a(27024),
        _ = a(37519),
        h = a.n(_),
        u = a(85857),
        d = a(67911);
      let p = [
          { title: "Stakes", url: "/scan/stakes", isExternal: !1 },
          { title: "Accounts", url: "/scan/accounts", isExternal: !1 },
        ],
        m = () => {
          let e = (0, s.r)();
          return (0, i.jsx)("div", {
            className: h().menu_wrapper,
            children: p.map((r, a) =>
              (0, i.jsx)(
                u.rU,
                {
                  href: r.url,
                  isExternal: r.isExternal,
                  onClick: e.toggle,
                  children: (0, i.jsx)("p", {
                    children: (0, i.jsx)(d.Z.Label, { children: r.title }),
                  }),
                },
                a
              )
            ),
          });
        };
      var y = a(84721),
        g = a.n(y),
        x = a(51723),
        f = a(45041),
        j = a(92557);
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var a = arguments[r];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var b = function (e) {
        return j.createElement(
          "svg",
          v(
            {
              width: 16.89,
              height: 16.89,
              viewBox: "0 0 21 23",
              fill: "none",
              xmlns: "/images/icons/double-tao-logo.svg",
            },
            e
          )
        );
      };
      let w = () => (0, i.jsx)(b, {}),
        N = (e) => {
          let { height: r = 16, className: a = "" } = e;
          return (0, i.jsx)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "/images/icons/double-tao-logo.svg",
            
          });
        };
      var C = a(84410),
        Z = a.n(C),
        T = a(95443);
      let k = () => {
          let [e, r] = (0, o.useState)(null),
            [a, n] = (0, o.useState)(!1),
            t = (0, f.useRouter)(),
            i = async (e) => {
              if ((r(null), "" === e.trim())) return;
              n(!0);
              let a = T.df.decode(e),
                i = T.df.encode(e);
              if (e === i) {
                n(!1), t.push("/scan/address/".concat(e));
                return;
              }
              if (Number(e) < Number.MAX_SAFE_INTEGER) {
                n(!1), t.push("/scan/block/".concat(e));
                return;
              }
              if (e === a || !Number.isNaN(Number(e))) {
                r("We don't support hex search yet"), n(!1);
                return;
              }
              n(!1), r("I don't understand this input");
            };
          return { error: e, loading: a, search: i };
        },
        H = () => {
          let [e, r] = (0, o.useState)(""),
            { error: a, loading: n, search: t } = k(),
            s = () => {
              t(e);
            },
            l = (e) => {
              if ("Enter" === e.key) return e.preventDefault(), s(), r(""), !1;
            };
          return (0, i.jsxs)("div", {
            className: (0, x.Z)(Z().search_container, { [Z().loading]: n }),
            children: [
              (0, i.jsx)("button", {
                onClick: s,
                style: { backgroundColor: "transparent", borderStyle: "none" },
                children: (0, i.jsx)(N, {
                  height: 18,
                  className: Z().search_icon,
                }),
              }),
              (0, i.jsx)("input", {
                className: Z().search_input,
                onChange: (e) => r(e.target.value),
                placeholder: "Search by Block, Transaction, or Address",
                onKeyUp: l,
              }),
              n &&
                (0, i.jsx)("div", {
                  style: { color: "green" },
                  children: "Loading...",
                }),
              a && (0, i.jsx)("div", { style: { color: "red" }, children: a }),
            ],
          });
        },
        S = (e) => {
          let {
              hideHamburger: r,
              hamburgerMenuToggle: a,
              hamberMenuItems: n,
              hamburgerMenuIsOpened: t,
            } = e,
            s = [
              { label: "Dashboard", href: "/scan" },
              { label: "stakes", href: "/scan/stakes" },
              { label: "accounts", href: "/scan/accounts" },
            ],
            l = s && s.length > 0,
            c = (0, f.usePathname)();
          if ("undefined" != typeof document) {
            let e = document || void 0;
            !0 === t && void 0 !== e
              ? ((e.body.style.height = "100vh"),
                (e.body.style.overflowY = "hidden"))
              : ((e.body.style.height = "fit-content"),
                (e.body.style.overflowY = "scroll"));
          }
          return (0, i.jsxs)("div", {
            className: g().container,
            children: [
              (0, i.jsxs)("div", {
                className: g().logo_hamburger_container,
                children: [
                  (0, i.jsx)(u.rU, {
                    href: "/",
                    className: g().logo,
                    children: (0, i.jsx)(w, {}),
                  }),
                  !r &&
                    (0, i.jsx)("div", {
                      className: g().hamburger_container,
                      children: (0, i.jsx)(u.FB, {
                        taocredit: 0,
                        toggle: a,
                        isOpened: t,
                        children: n,
                      }),
                    }),
                ],
              }),
              (0, i.jsx)("div", {
                className: g().mobile_search_wrapper,
                children: (0, i.jsx)(H, {}),
              }),
              (0, i.jsx)("div", {
                className: g().desktop_search_wrapper,
                children: (0, i.jsx)(H, {}),
              }),
              (0, i.jsx)("div", {
                className: (0, x.Z)(g().menu_content),
                children: (0, i.jsx)("nav", {
                  className: g().nav_wrapper,
                  children: (0, i.jsxs)("ul", {
                    className: g().menu_list,
                    children: [
                      l &&
                        s.map((e, r) =>
                          (0, i.jsx)(
                            "li",
                            {
                              className: g().menu_item,
                              children: (0, i.jsx)(u.rU, {
                                href: e.href,
                                style: { textDecoration: "none" },
                                children: (0, i.jsx)(d.Z.Label, {
                                  className: (0, x.Z)(
                                    c === e.href ? g().active_link : ""
                                  ),
                                  children: e.label,
                                }),
                              }),
                            },
                            r
                          )
                        ),
                      (0, i.jsx)("li", {
                        className: (0, x.Z)(g().menu_item),
                        children: (0, i.jsx)(u.oA, {
                          taocredit: 0,
                          walletAction: void 0,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      a(41078);
      var E = a(41781),
        A = a.n(E);
      a(45481);
      var M = a(59009),
        O = a(67183),
        L = a(26879),
        D = a.n(L);
      let F = () =>
        (0, i.jsx)("div", {
          className: D().container,
          children: (0, i.jsx)("div", {
            children: (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)(d.Z.Label, {
                  children: [
                    "\xa9 2023 opentensor Foundation. ",
                    (0, i.jsx)("br", {}),
                    " all rights reserved.",
                  ],
                }),
                (0, i.jsx)(w, {}),
              ],
            }),
          }),
        });
      function Y(e) {
        let { children: r } = e,
          a = (0, s.r)();
        return (0, i.jsx)("div", {
          className: A().layout_containter,
          children: (0, i.jsxs)(M.M, {
            children: [
              (0, i.jsxs)(c._, {
                children: [
                  (0, i.jsx)(S, {
                    hamburgerMenuIsOpened: a.isVisible,
                    hamburgerMenuToggle: a.toggle,
                    hamberMenuItems: (0, i.jsx)(m, {}),
                  }),
                  (0, i.jsx)(O.E.main, {
                    className: A().main_container,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.3 },
                    children: (0, i.jsx)("div", {
                      className: A().children_container,
                      children: (0, i.jsx)("div", {
                        className: A().children_wrapper,
                        children: r,
                      }),
                    }),
                  }),
                  (0, i.jsx)(F, {}),
                ],
              }),
              (0, i.jsx)(l.c, {}),
            ],
          }),
        });
      }
    },
    4728: function (e, r, a) {
      "use strict";
      a.d(r, {
        r: function () {
          return t;
        },
      });
      var n = a(98178);
      let t = (0, n.Ue)((e, r) => ({
        isVisible: !1,
        toggle: () => {
          let a = r().isVisible;
          e({ isVisible: !a });
        },
      }));
    },
    95443: function (e, r, a) {
      "use strict";
      a.d(r, {
        df: function () {
          return s;
        },
      });
      var n = a(52357),
        t = a(19624);
      let i = (e) =>
          "0x" +
          Array.from(e, (e) => ("0" + (255 & e).toString(16)).slice(-2)).join(
            ""
          ),
        s = {
          decode: function (e) {
            let r;
            try {
              r = (0, n.m)(e);
            } catch (e) {
              return null;
            }
            return i(r);
          },
          encode: function (e) {
            let r;
            try {
              r = (0, t.m)(e, 42);
            } catch (e) {
              return null;
            }
            return r;
          },
        };
    },
    85857: function (e, r, a) {
      "use strict";
      a.d(r, {
        FB: function () {
          return i.HamburgerMenu;
        },
        h4: function () {
          return s.Header;
        },
        JO: function () {
          return n.J;
        },
        rU: function () {
          return o.r;
        },
        oA: function () {
          return t.o;
        },
      }),
        a(64618),
        a(27024),
        a(79290);
      var n = a(10080);
      a(51723), a(55408), a(63911);
      var t = a(1868),
        i = a(72691);
      a(25808);
      var s = a(15416);
      a(61847);
      var l = a(37498),
        c = a.n(l);
      c().switch, c().input, a(65037), a(96455), a(8518), a(91767);
      var o = a(93625);
    },
  },
  function (e) {
    e.O(
      0,
      [9774, 8076, 8761, 7183, 1677, 9624, 7948, 1410, 8559, 3132, 1744],
      function () {
        return e((e.s = 56229));
      }
    ),
      (_N_E = e.O());
  },
]);
