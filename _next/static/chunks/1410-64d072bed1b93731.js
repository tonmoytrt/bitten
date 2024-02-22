(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1410],
  {
    21461: function (e) {
      e.exports = { container: "CopyButton_container__gyjD3" };
    },
    85285: function (e) {
      e.exports = {
        container: "BaseIconButton_container__dQN99",
        logo_up: "BaseIconButton_logo_up__gU7PU",
        logo_down: "BaseIconButton_logo_down__YBuXy",
        icon_wrapper: "BaseIconButton_icon_wrapper__izHKA",
      };
    },
    8063: function (e) {
      e.exports = { tao_credit_val: "TaoCredit_tao_credit_val__3C0k7" };
    },
    37296: function (e) {
      e.exports = {
        wrapper: "DropDownMenu_wrapper__pGBZP",
        container: "DropDownMenu_container__Sw9cG",
        new_chat_btn: "DropDownMenu_new_chat_btn__XwTPs",
        modal: "DropDownMenu_modal__HpQf0",
        visible: "DropDownMenu_visible__PGbsZ",
      };
    },
    72047: function (e) {
      e.exports = {
        footer: "Footer_footer__mjF6g",
        menu_container: "Footer_menu_container__TagPS",
        hidden: "Footer_hidden__NNr_P",
        icon: "Footer_icon__mB7_o",
        reversed: "Footer_reversed__NsRzQ",
      };
    },
    74309: function (e) {
      e.exports = {
        hamburger_btn: "HamburgerMenu_hamburger_btn__neLmn",
        hamburger_menu: "HamburgerMenu_hamburger_menu__rGm5w",
        hamburger_menu_close: "HamburgerMenu_hamburger_menu_close__oSteL",
        close_btn: "HamburgerMenu_close_btn__9_tbo",
        menu_list: "HamburgerMenu_menu_list__yiwEL",
      };
    },
    72881: function (e) {
      e.exports = {
        container: "Header_container__R0wlW",
        hamburger_container: "Header_hamburger_container__Ns3iZ",
        menu_list: "Header_menu_list__V3odZ",
        nav_wrapper: "Header_nav_wrapper__02Cvo",
        menu_item: "Header_menu_item__KzwZa",
        tao_credit_container: "Header_tao_credit_container__aguTx",
        tao_logo: "Header_tao_logo__70xe7",
        active_route: "Header_active_route__DH7_7",
        menu_content: "Header_menu_content__WPcNO",
      };
    },
    53857: function (e) {
      e.exports = {
        link: "Link_link__hI8T_",
        "is-button": "Link_is-button__iyUWc",
      };
    },
    35285: function (e) {
      e.exports = {
        container_wrapper: "TextArea_container_wrapper__xmQoV",
        container: "TextArea_container__JmAD5",
        input_box: "TextArea_input_box__vSUVs",
        disabled: "TextArea_disabled__Ilylo",
        send_btn: "TextArea_send_btn__GD0hp",
      };
    },
    96455: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CopyButton: function () {
            return i;
          },
        });
      var r = n(64618),
        a = n(27024),
        c = n(10080),
        o = n(21461),
        l = n.n(o);
      let i = (e) => {
        let { copyText: t, handleOnClick: n } = e,
          [o, i] = (0, a.useState)("COPY"),
          s = async () => {
            navigator.clipboard.writeText(t || ""),
              i("COPIED"),
              await new Promise((e) => setTimeout(e, 500)).then(() => {
                n && n();
              });
          };
        return (0, r.jsxs)("button", {
          className: l().container,
          onClick: s,
          children: [
            (0, r.jsx)("div", { children: o }),
            (0, r.jsx)("div", { children: (0, r.jsx)(c.J.Copy, {}) }),
          ],
        });
      };
    },
    65037: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          BaseIconButton: function () {
            return l;
          },
        });
      var r = n(64618);
      n(27024);
      var a = n(51723),
        c = n(85285),
        o = n.n(c);
      let l = (e) => {
        let { label: t, children: n, isLogoUp: c, handleOnClick: l } = e;
        return (0, r.jsxs)("button", {
          className: (0, a.Z)(o().container, c ? o().logo_up : o().logo_down),
          onClick: l,
          children: [
            (0, r.jsx)("div", { children: t }),
            (0, r.jsx)("div", { className: o().icon_wrapper, children: n }),
          ],
        });
      };
    },
    1868: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var r = n(64618);
      n(27024);
      var a = n(8063),
        c = n.n(a),
        o = n(93625);
      let l = (e) => {
        let { taocredit: t, walletAction: n } = e,
          a = ((t || 0) / 1e9).toFixed(2);
        return (0, r.jsx)("div", {
          className: c().tao_credit_val,
          children: (0, r.jsxs)(o.r, {
            href: "#",
            isLinkButton: !0,
            children: [
              (0, r.jsx)("span", { children: "" }),
              (0, r.jsx)("span", { children: a }),
            ],
          }),
        });
      };
    },
    61847: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DropDownMenu: function () {
            return i;
          },
        });
      var r = n(64618),
        a = n(27024),
        c = n(37296),
        o = n.n(c),
        l = n(51723);
      let i = (e) => {
        let { isVisible: t, newChat: n, close: c } = e;
        (0, a.useRef)(null);
        let [i, s] = (0, a.useState)(!1),
          u = () => {
            c(), n && n();
          };
        return (0, r.jsx)("div", {
          className: o().wrapper,
          children: (0, r.jsxs)("div", {
            className: (0, l.Z)(o().modal, t && o().visible),
            children: [
              (0, r.jsx)("button", {
                className: o().new_chat_btn,
                onClick: u,
                children: "New Chat",
              }),
              !1,
            ],
          }),
        });
      };
    },
    79290: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Footer: function () {
            return u;
          },
        });
      var r = n(64618),
        a = n(27024),
        c = n(72047),
        o = n.n(c),
        l = n(10080),
        i = n(61847),
        s = n(51723);
      let u = (e) => {
        let { newChat: t, showMenu: n } = e,
          [c, u] = (0, a.useState)(!1),
          h = () => {
            u(!c);
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.DropDownMenu, { isVisible: c, newChat: t, close: h }),
            (0, r.jsx)("div", {
              className: o().footer,
              children: (0, r.jsxs)("span", {
                onClick: h,
                className: (0, s.Z)(o().menu_container, !n && o().hidden),
                children: [
                  (0, r.jsx)("span", {
                    className: o().icon,
                    children: (0, r.jsx)(l.J.Menu, {}),
                  }),
                  (0, r.jsx)("span", {
                    className: (0, s.Z)(o().icon, c && o().reversed),
                    children: (0, r.jsx)(l.J.DownArrow, {}),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    72691: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          HamburgerMenu: function () {
            return s;
          },
        });
      var r = n(64618),
        a = n(27024),
        c = n(74309),
        o = n.n(c),
        l = n(51723),
        i = n(10080);
      let s = (e) => {
        let { children: t, toggle: n, isOpened: c } = e,
          [s, u] = (0, a.useState)(!!c),
          h = () => {
            n ? n() : u(!s);
          };
        return (
          (0, a.useEffect)(() => {
            u(!!c);
          }, [c]),
          (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("button", {
                className: o().hamburger_btn,
                onClick: h,
                children: (0, r.jsx)(i.J.Hamburger, {}),
              }),
              (0, r.jsxs)("div", {
                className: (0, l.Z)(
                  o().hamburger_menu,
                  s ? o().hamburger_menu_open : o().hamburger_menu_close
                ),
                children: [
                  (0, r.jsx)("button", {
                    className: o().close_btn,
                    onClick: h,
                    children: (0, r.jsx)(i.J.Close, {}),
                  }),
                  (0, r.jsx)("div", { className: o().menu_list, children: t }),
                ],
              }),
            ],
          })
        );
      };
    },
    15416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Header: function () {
            return g;
          },
        });
      var r = n(64618);
      n(27024);
      var a = n(10080),
        c = n(72691),
        o = n(1868),
        l = n(72881),
        i = n.n(l),
        s = n(63911),
        u = n.n(s),
        h = n(51723),
        v = n(93625),
        p = n(67183),
        _ = n(45041);
      let g = (e) => {
        let {
            taocredit: t,
            walletAction: n,
            logo: l,
            hideHamburger: s,
            menuLinks: g,
            hamberMenuItems: f,
            hamburgerMenuToggle: d,
            hamburgerMenuIsOpened: m,
          } = e,
          w = g && g.length > 0,
          b = void 0 !== t,
          j = (0, _.usePathname)();
        return (0, r.jsxs)("div", {
          className: i().container,
          children: [
            (0, r.jsx)(u(), {
              href: "/",
              className: i().tao_logo,
              children: null != l ? l : (0, r.jsx)(a.J.TaoLogo, {}),
            }),
            (0, r.jsx)("div", {
              className: (0, h.Z)(i().menu_content),
              style: { width: "100%" },
              children: (0, r.jsx)("nav", {
                className: i().nav_wrapper,
                children:
                  (w || b) &&
                  (0, r.jsx)("ul", {
                    className: i().menu_list,
                    children:
                      w &&
                      g.map((e, t) =>
                        (0, r.jsxs)(
                          "li",
                          {
                            className: i().menu_item,
                            children: [
                              (0, r.jsx)(v.r, {
                                href: e.href,
                                isExternal: e.isExternal,
                                children: e.label,
                              }),
                              j === e.href &&
                                (0, r.jsx)(p.E.span, {
                                  className: i().active_route,
                                  layoutId: "underline",
                                }),
                            ],
                          },
                          t
                        )
                      ),
                  }),
              }),
            }),
            !s &&
              (0, r.jsx)("div", {
                className: i().hamburger_container,
                children: (0, r.jsx)(c.HamburgerMenu, {
                  taocredit: t,
                  toggle: d,
                  isOpened: m,
                  children: f,
                }),
              }),
            b &&
              (0, r.jsx)("li", {
                className: (0, h.Z)(i().menu_item, i().menu_content),
                children: (0, r.jsx)("div", {
                  className: i().tao_credit_container,
                  children: (0, r.jsx)(o.o, { taocredit: t, walletAction: n }),
                }),
              }),
          ],
        });
      };
    },
    10080: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return ef;
        },
      });
      var r,
        a,
        c,
        o,
        l,
        i,
        s,
        u,
        h,
        v,
        p,
        _,
        g,
        f,
        d,
        m,
        w,
        b,
        j,
        x,
        O,
        y,
        Z,
        M = n(64618),
        E = n(92557);
      function C() {
        return (C = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var H = function (e) {
        return E.createElement(
          "svg",
          C(
            {
              width: 20,
              height: 20,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r ||
            (r = E.createElement("path", {
              d: "m7.7 20-.5-3.15c-.346-.13-.68-.29-1-.475a6.87 6.87 0 0 1-.925-.625l-2.95 1.35L0 13l2.7-1.975a2.972 2.972 0 0 1-.062-.513 9.826 9.826 0 0 1 0-1.025c.006-.172.027-.343.063-.512L0 7l2.325-4.1 2.95 1.35c.29-.233.6-.442.925-.625a5.173 5.173 0 0 1 1-.45L7.7 0h4.6l.5 3.15c.348.13.686.285 1.012.462a4.3 4.3 0 0 1 .912.638l2.95-1.35L20 7l-2.7 1.925c.035.177.056.357.063.538.008.191.012.37.013.537 0 .167-.004.342-.013.525a3.484 3.484 0 0 1-.062.525L20 13l-2.325 4.1-2.95-1.35c-.29.232-.594.445-.912.637a4.356 4.356 0 0 1-1.012.462L12.3 20H7.7Zm2.3-6.75a3.244 3.244 0 1 0-2.3-.95 3.133 3.133 0 0 0 2.3.95Zm0-1.5a1.75 1.75 0 1 1 1.237-.513A1.685 1.685 0 0 1 10 11.75ZM8.9 18.5h2.2l.35-2.8a5.9 5.9 0 0 0 1.563-.625 6.408 6.408 0 0 0 1.337-1.025L17 15.2l1-1.8-2.35-1.725a10.4 10.4 0 0 0 .162-.837c.042-.277.063-.557.063-.838 0-.28-.017-.56-.05-.838a5.173 5.173 0 0 0-.175-.837L18 6.6l-1-1.8-2.65 1.15a5.573 5.573 0 0 0-1.3-1.088 4.217 4.217 0 0 0-1.6-.562l-.35-2.8H8.9l-.35 2.8a5.3 5.3 0 0 0-1.587.6c-.488.28-.93.635-1.312 1.05L3 4.8 2 6.6l2.35 1.725c-.067.283-.12.562-.162.837a5.643 5.643 0 0 0 0 1.675c.042.275.096.554.162.837L2 13.4l1 1.8 2.65-1.15c.399.399.848.744 1.337 1.025a5.9 5.9 0 0 0 1.563.625l.35 2.8Z",
              fill: "currentColor",
            }))
        );
      };
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var L = function (e) {
        return E.createElement(
          "svg",
          N(
            {
              width: 15,
              height: 9,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          a ||
            (a = E.createElement("path", {
              d: "M0 .783.783 0l6.703 6.703L14.216 0 15 .783 7.486 8.27 0 .783Z",
              fill: "currentColor",
            }))
        );
      };
      function V() {
        return (V = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var P = function (e) {
        return E.createElement(
          "svg",
          V(
            {
              width: 176,
              height: 26,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          c ||
            (c = E.createElement("path", {
              d: "M15.318 13.293h-1.53c-.075 0-.1-.023-.116-.093a4.087 4.087 0 0 0-1.12-2.041 4.882 4.882 0 0 0-4.029-1.268c-3.162.349-4.873 3.465-4.692 6.512.11 4.128 3.406 6.928 7.351 5.522a4.143 4.143 0 0 0 2.63-3.144c.021-.113.02-.114.131-.114H17c.047 0 .085-.013.073.071a7.634 7.634 0 0 1-7.1 6.421c-5.663.534-9.85-4.084-9.446-9.798A8.56 8.56 0 0 1 8.4 6.97a8.663 8.663 0 0 1 5.588 1.356 7.122 7.122 0 0 1 2.953 4.9c.016.067-.013.066-.06.065h-1.563v.002ZM86.548 6.721c.005.329-.046.656-.152.967a3.138 3.138 0 0 1-2.2 2.087c-.274.075-.558.11-.843.106h-6.8v-.007c.244.04.486.091.724.156a3.4 3.4 0 0 1 2.382 2.5c.068.275.1.558.094.84v7.5a8.46 8.46 0 0 0 .112 1.518c.052.343.176.672.363.964.26.369.647.628 1.087.726.2.053.4.085.613.129l-.06.046a3.388 3.388 0 0 1-1.65.6c-.654.079-1.317 0-1.935-.228a3.022 3.022 0 0 1-1.633-1.4 3.32 3.32 0 0 1-.358-1.6V9.88h-7.01c.012-.155.016-.3.038-.447a3.135 3.135 0 0 1 1.448-2.225c.425-.277.913-.44 1.42-.474.108-.008.217-.013.326-.013l14.034-.001ZM139.918 12.104h-2.961c-.152 0-.169.035-.21-.165a2.946 2.946 0 0 0-1.86-2.2 5.433 5.433 0 0 0-2.486-.376c-.473.02-.94.114-1.385.276a2.253 2.253 0 0 0-1.089.778 1.818 1.818 0 0 0 .4 2.537c.406.29.857.51 1.336.653.788.262 1.6.428 2.414.613.938.193 1.862.454 2.762.782a6.35 6.35 0 0 1 1.978 1.155 4.15 4.15 0 0 1 1.329 2.378 5.33 5.33 0 0 1-.162 2.8 5.135 5.135 0 0 1-2.431 2.794 7.763 7.763 0 0 1-2.794.907c-.639.087-1.285.113-1.929.078a7.7 7.7 0 0 1-4.164-1.333 6.096 6.096 0 0 1-2.512-3.841c-.056-.263-.075-.534-.114-.8-.011-.082.02-.106.1-.106h2.917c.113 0 .125.056.136.138.083.729.365 1.42.815 2a3.6 3.6 0 0 0 2.178 1.275 5.8 5.8 0 0 0 3.174-.2 2.431 2.431 0 0 0 1.671-1.825 2.384 2.384 0 0 0-.173-1.67 2.59 2.59 0 0 0-1.111-1.035 8.953 8.953 0 0 0-2.02-.74c-.95-.25-1.906-.482-2.854-.744a9.128 9.128 0 0 1-2.281-.935 3.956 3.956 0 0 1-1.98-2.64 4.4 4.4 0 0 1 .276-2.818 4.398 4.398 0 0 1 1.939-2.064 6.994 6.994 0 0 1 2.692-.9 10.063 10.063 0 0 1 3.957.249 5.926 5.926 0 0 1 3.281 2.113 6.077 6.077 0 0 1 1.12 2.643c.012.066.019.133.03.219l.011.004ZM167.644 25.169h-2.934c-.171 0-.171.034-.171-.17V7.153c0-.137 0-.138.142-.138h2.834c.1 0 .132.028.131.129v3.02l.02.006a.625.625 0 0 0 .038-.055 6.521 6.521 0 0 1 7.2-3.2c.18.051.356.114.528.188a.118.118 0 0 1 .064.089v2.846a.205.205 0 0 1-.009.034l-.115-.04a6.141 6.141 0 0 0-2.779-.392 4.39 4.39 0 0 0-2.851 1.44 7.076 7.076 0 0 0-1.539 2.764 11.655 11.655 0 0 0-.515 2.844c-.03.51-.043 1.025-.044 1.537-.004 2.26-.004 4.52 0 6.779v.166ZM142.787 16.034a9.914 9.914 0 0 1 .553-3.465 8.568 8.568 0 0 1 2.139-3.33 8.694 8.694 0 0 1 3.954-2.175c.452-.12.913-.2 1.379-.24.431-.032.864-.065 1.3-.063a9.722 9.722 0 0 1 3.628.684 8.506 8.506 0 0 1 3.166 2.19 8.743 8.743 0 0 1 2.046 3.93c.107.442.178.893.212 1.347.024.368.051.737.049 1.105a9.723 9.723 0 0 1-.657 3.57 8.598 8.598 0 0 1-2.358 3.375 8.878 8.878 0 0 1-3.922 1.976c-.48.114-.969.185-1.462.212-.409.02-.818.038-1.227.025a9.26 9.26 0 0 1-4.042-1.03 8.593 8.593 0 0 1-4.311-5.164 9.119 9.119 0 0 1-.358-1.65 9.915 9.915 0 0 1-.085-1.3l-.004.003Zm9.065-6.352a6.47 6.47 0 0 0-1.22.11 5.807 5.807 0 0 0-3.514 2.016 6.152 6.152 0 0 0-1.38 3.5c-.039.444-.041.89-.005 1.334.029.396.091.789.187 1.174a5.865 5.865 0 0 0 5.414 4.532c.42.033.842.03 1.261-.01a6.35 6.35 0 0 0 1.258-.235 5.674 5.674 0 0 0 3.256-2.424 6.625 6.625 0 0 0 1.009-3.535 6.988 6.988 0 0 0-.112-1.45 6.534 6.534 0 0 0-.4-1.385 6.025 6.025 0 0 0-1.138-1.772 6.166 6.166 0 0 0-1.579-1.177 6.46 6.46 0 0 0-3.039-.678h.002ZM64.01 10.016a3.462 3.462 0 0 1 3.083 3.49c0 2.557 0 5.115.006 7.67a6.901 6.901 0 0 0 .158 1.626c.081.416.295.795.608 1.08.287.232.628.386.991.449.106.023.215.035.321.053l.1.02c-.024.023-.035.037-.049.047a3.283 3.283 0 0 1-1.612.613c-.343.042-.69.046-1.033.01a3.243 3.243 0 0 1-2.6-1.635 2.882 2.882 0 0 1-.344-1.22 8.656 8.656 0 0 1-.017-.534V10.14c0-.146.014-.131-.134-.131H56.77c-.13 0-.134 0-.127-.132a3.168 3.168 0 0 1 1.418-2.528 3.012 3.012 0 0 1 1.748-.532h7.18c.117 0 .12 0 .116.117a3.192 3.192 0 0 1-2.659 3.035c-.157.026-.316.033-.445.046h.01ZM103.638 16.418h-13.41c.016.186.026.363.046.54.06.562.18 1.117.357 1.654a5.383 5.383 0 0 0 1.2 2.042 4.693 4.693 0 0 0 2.2 1.282 6.272 6.272 0 0 0 1.955.195 5.515 5.515 0 0 0 1.677-.32 3.856 3.856 0 0 0 2.448-2.68c.005-.018.009-.035.016-.053l.009-.023h3.3a6.51 6.51 0 0 1-.266 1.11 6.697 6.697 0 0 1-3.391 3.913 8.207 8.207 0 0 1-2.547.822c-.752.115-1.514.145-2.272.09a8.69 8.69 0 0 1-4.4-1.489 8.28 8.28 0 0 1-3.013-3.806 9.341 9.341 0 0 1-.6-2.272c-.096-.7-.126-1.407-.09-2.113a9.277 9.277 0 0 1 1.473-4.718 8.19 8.19 0 0 1 5.12-3.6 9.04 9.04 0 0 1 2.5-.215 8.524 8.524 0 0 1 2.477.441 7.525 7.525 0 0 1 4.8 4.807c.239.68.392 1.387.457 2.105.067.732.059 1.47-.021 2.2 0 .028-.009.056-.016.092l-.009-.004Zm-3.4-2.6v-.086c-.024-.26-.032-.525-.078-.782a3.803 3.803 0 0 0-1.96-2.769 5.077 5.077 0 0 0-2.082-.618 6.372 6.372 0 0 0-2.046.131 4.478 4.478 0 0 0-2.674 1.725 5.8 5.8 0 0 0-.951 2.161c-.018.078-.033.156-.051.24h9.844l-.002-.002ZM39.04 12.997c.09-.669.27-1.322.538-1.941a6.937 6.937 0 0 1 5.336-4.261 8.655 8.655 0 0 1 5.467.656 5.942 5.942 0 0 1 3.453 4.611c.07.447.103.9.1 1.352.008 3.733.008 7.464 0 11.192v.207h-3.06v-2.85l-.033-.008c-.045.083-.088.168-.136.25a5.4 5.4 0 0 1-2.032 1.94 7.124 7.124 0 0 1-4.24.936 7.7 7.7 0 0 1-2.865-.724 4.524 4.524 0 0 1-2.646-3.53 5.172 5.172 0 0 1 .815-3.876 5.231 5.231 0 0 1 1.989-1.624 10.728 10.728 0 0 1 3.088-.982c1.033-.172 2.076-.289 3.116-.412.924-.109 1.85-.193 2.777-.284.119-.011.163-.054.163-.181a5.45 5.45 0 0 0-.18-1.712 3.253 3.253 0 0 0-1.955-2.1 5.583 5.583 0 0 0-4.271-.023 3.664 3.664 0 0 0-2.184 2.522c-.068.231-.112.47-.16.706a.191.191 0 0 1-.054.118.162.162 0 0 1-.112.03c-.111-.005-1.291-.009-2.922-.015l.008.003Zm11.835 3c-.051 0-.07 0-.091.006-.822.1-1.645.185-2.465.289-.913.116-1.825.228-2.733.377a6.857 6.857 0 0 0-2.161.7 2.683 2.683 0 0 0-1.4 3.076 2.247 2.247 0 0 0 1.449 1.684c.88.361 1.845.47 2.784.313a5.063 5.063 0 0 0 3.526-2.108 5.834 5.834 0 0 0 1.09-3.553v-.784ZM22.824 25.106h-2.812a.192.192 0 0 1-.217-.217V.233c0-.076.006-.15.01-.233h3.007v10.268a.902.902 0 0 0 .08-.086 6.973 6.973 0 0 1 4.49-3.046 7.709 7.709 0 0 1 4.6.312 5.724 5.724 0 0 1 3.66 4.331c.117.564.172 1.14.163 1.716V25.1h-3.06c0-.076-.011-.151-.011-.226v-10.7a5.916 5.916 0 0 0-.3-2.018 3.567 3.567 0 0 0-2.888-2.445 5.134 5.134 0 0 0-3.564.572 5.463 5.463 0 0 0-2.148 2.345 8.597 8.597 0 0 0-.89 3.046 20.921 20.921 0 0 0-.117 2.093c-.014 2.373-.005 4.745-.005 7.117v.226l.002-.004ZM109.601 25.064h-2.812c-.109 0-.163 0-.19-.027-.059-.06-.03-.176-.027-.19.039-.2.032-7.4 0-17.988l3.025.028-.006 3.339a.855.855 0 0 0 .081-.086 6.975 6.975 0 0 1 4.49-3.046 7.71 7.71 0 0 1 4.595.312 5.722 5.722 0 0 1 3.659 4.33c.117.565.172 1.14.163 1.717v11.601h-3.055c0-.076-.011-.151-.011-.226v-10.7a5.934 5.934 0 0 0-.3-2.018 3.575 3.575 0 0 0-2.888-2.445 5.133 5.133 0 0 0-3.564.572 5.458 5.458 0 0 0-2.148 2.345 8.599 8.599 0 0 0-.89 3.046 18.764 18.764 0 0 0-.117 2.093c.039 1.7.037 4.066-.005 7.343Z",
              fill: "currentColor",
            }))
        );
      };
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var A = function (e) {
        return E.createElement(
          "svg",
          k(
            {
              width: 15,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          o ||
            (o = E.createElement("path", {
              d: "M0 12V0l14.231 6L0 12Zm.545-.843L12.818 6 .545.818v4.165L5.033 6l-4.488.992v4.165Z",
              fill: "currentColor",
            }))
        );
      };
      function D() {
        return (D = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var B = function (e) {
        return E.createElement(
          "svg",
          D(
            {
              width: 17,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          l ||
            (l = E.createElement("path", {
              d: "M1 8.862h15M1 1.93h15M1 15.793h15",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      };
      function T() {
        return (T = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var S = function (e) {
        return E.createElement(
          "svg",
          T(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          i ||
            (i = E.createElement("path", {
              d: "M.397 12 0 11.603 5.603 6 0 .397.397 0 6 5.603 11.603 0 12 .397 6.397 6 12 11.603l-.397.397L6 6.397.397 12Z",
              fill: "currentColor",
            }))
        );
      };
      function F() {
        return (F = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var I = function (e) {
        return E.createElement(
          "svg",
          F(
            {
              width: 21,
              height: 23,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          s ||
            (s = E.createElement("path", {
              d: "M12.53 17.783v-9.08a4.144 4.144 0 0 0-4.14-4.117v14.511a3.8 3.8 0 0 0 3.96 3.841 4.275 4.275 0 0 0 2.816-.816c-2.39-.253-2.635-1.693-2.635-4.339Z",
              fill: "currentColor",
            })),
          u ||
            (u = E.createElement("path", {
              d: "M3.775.787A3.8 3.8 0 0 0 0 4.587h16.893a3.8 3.8 0 0 0 3.775-3.8H3.775Z",
              fill: "currentColor",
            }))
        );
      };
      function J() {
        return (J = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var U = function (e) {
        return E.createElement(
          "svg",
          J(
            {
              width: 115,
              height: 20,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          h ||
            (h = E.createElement("path", {
              d: "M7.758 5.115c-1.19 0-2.327.381-3.205 1.072-.903.71-1.51 1.722-1.769 2.928V.131H0V19.77h2.788v-3.85c.591 2.516 2.481 4.072 4.97 4.072 1.841 0 3.505-.75 4.682-2.115 1.17-1.353 1.813-3.242 1.813-5.325 0-2.084-.643-3.973-1.813-5.326-1.181-1.365-2.845-2.115-4.682-2.115v.004Zm3.711 7.44c0 1.366-.38 2.596-1.072 3.465-.761.96-1.87 1.464-3.214 1.464-1.23 0-2.36-.52-3.172-1.468-.79-.917-1.227-2.147-1.227-3.464 0-1.318.433-2.548 1.227-3.465A4.14 4.14 0 0 1 7.183 7.62c1.34 0 2.453.508 3.213 1.464.693.87 1.073 2.1 1.073 3.465v.008ZM19.033 5.341h-2.789V19.77h2.789V5.34ZM17.64 0c-1.072 0-1.91.821-1.91 1.873s.838 1.873 1.91 1.873c1.073 0 1.91-.821 1.91-1.873S18.714 0 17.64 0ZM97.737 5.115c-2.124 0-3.933.758-5.236 2.187-1.223 1.345-1.895 3.21-1.895 5.25s.672 3.908 1.895 5.25c1.298 1.432 3.111 2.186 5.236 2.186 2.125 0 3.934-.758 5.237-2.186 1.222-1.346 1.894-3.21 1.894-5.25s-.672-3.91-1.894-5.25c-1.299-1.433-3.112-2.187-5.237-2.187Zm-4.338 7.44c0-1.36.405-2.599 1.141-3.484.785-.944 1.894-1.444 3.197-1.444 1.303 0 2.412.5 3.197 1.444.737.885 1.141 2.123 1.141 3.485 0 1.36-.404 2.599-1.141 3.484-.785.944-1.894 1.444-3.197 1.444-1.303 0-2.412-.5-3.197-1.444-.736-.885-1.141-2.123-1.141-3.484ZM114.698 5.115c-1.514 0-2.72.445-3.578 1.325-.696.71-1.145 1.703-1.311 2.877V5.341h-2.788V19.77h2.788v-6.655c0-2.087.425-3.448 1.34-4.282.805-.734 1.962-1.035 3.545-.928h.02v-2.79h-.016ZM87.183 12.472c-.951-.61-2.408-1.012-4.444-1.23-1.517-.163-2.489-.389-3.051-.718-.466-.27-.66-.615-.66-1.147 0-.437.227-1.865 3.165-1.865 1.137 0 2 .29 2.57.857.542.54.675 1.198.708 1.548v.016h2.732v-.02c-.106-1.39-.676-2.568-1.648-3.413-1.044-.905-2.52-1.38-4.277-1.38-3.966 0-6.038 2.241-6.038 4.46 0 1.043.364 1.908 1.089 2.567.845.774 2.185 1.258 3.974 1.44 1.853.187 2.881.377 3.545.651.708.294 1.024.71 1.024 1.353 0 .377-.126.913-.733 1.345-.611.441-1.566.663-2.837.663-2.942 0-3.772-1.865-3.796-2.849v-.016h-2.731v.02C75.925 18.04 78.32 20 82.189 20c1.963 0 3.602-.452 4.743-1.31 1.129-.849 1.728-2.067 1.728-3.515 0-1.179-.482-2.06-1.477-2.695v-.008Zm-10.708-4.13c.162-.477.42-.898.748-1.27-.34.392-.587.825-.748 1.27ZM51.408 5.107c-4.18 0-7.098 3.06-7.098 7.44 0 2.064.655 3.93 1.841 5.25 1.283 1.433 3.124 2.187 5.314 2.187 1.76 0 3.233-.52 4.378-1.548.988-.884 1.68-2.115 2.004-3.555v-.02h-2.87v.012c-.562 1.802-1.627 2.603-3.456 2.603-1.258 0-2.347-.42-3.148-1.21-.737-.73-1.202-1.766-1.303-2.917h10.947v-.016c.064-.329.089-.619.089-.988 0-2.345-.733-4.262-2.12-5.543-1.187-1.096-2.81-1.699-4.578-1.699v.004Zm.142 2.397c1.072 0 1.987.345 2.654 1.004.64.63 1.024 1.516 1.113 2.56h-8.102c.344-1.631 1.376-3.564 4.335-3.564ZM68.033 5.115c-1.344 0-2.594.452-3.521 1.27-.846.75-1.396 1.968-1.566 3.115V5.341h-2.789V19.77h2.789v-6.972c0-2 .765-3.238 1.408-3.925.81-.865 1.898-1.361 2.99-1.361 1.093 0 1.85.286 2.4.877.652.698.968 1.805.968 3.38v8.005H73.5v-8.568c0-2.051-.49-3.607-1.46-4.63-.92-.969-2.267-1.46-4.007-1.46ZM32.922 5.341c-1.405 0-2.546 1.14-2.546 2.516h11.392c1.404 0 2.546-1.139 2.546-2.516H32.922ZM23.266 5.341c-1.405 0-2.546 1.14-2.546 2.516h5.909c1.404 0 2.545-1.139 2.545-2.516h-5.908Z",
              fill: "currentColor",
            })),
          v ||
            (v = E.createElement("path", {
              d: "M38.822 16.58v-6.005c0-1.5-1.263-2.722-2.792-2.722v9.595c0 1.91 1.65 2.54 2.67 2.54.846 0 1.324-.143 1.899-.54-1.611-.166-1.777-1.119-1.777-2.869ZM29.158 16.58v-6.005c0-1.5-1.263-2.722-2.792-2.722v9.595c0 1.91 1.65 2.54 2.67 2.54.846 0 1.324-.143 1.899-.54-1.611-.166-1.777-1.119-1.777-2.869Z",
              fill: "currentColor",
            }))
        );
      };
      function G() {
        return (G = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var R = function (e) {
        return E.createElement(
          "svg",
          G(
            {
              width: 15,
              height: 9,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          p ||
            (p = E.createElement("path", {
              d: "m15 7.486-.783.784-6.703-6.704L.784 8.27 0 7.486 7.514 0 15 7.486Z",
              fill: "currentColor",
            }))
        );
      };
      function Q() {
        return (Q = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var W = function (e) {
        return E.createElement(
          "svg",
          Q(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          _ ||
            (_ = E.createElement("path", {
              d: "M.478 12 0 11.517 10.848.669H4.215V0H12v7.785h-.668V1.147L.478 12Z",
              fill: "currentColor",
            }))
        );
      };
      function z() {
        return (z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var K = function (e) {
        return E.createElement(
          "svg",
          z(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          g ||
            (g = E.createElement("path", {
              d: "M0 12V4.215h.669v6.639L11.522 0 12 .483 1.152 11.332h6.633V12H0Z",
              fill: "currentColor",
            }))
        );
      };
      function X() {
        return (X = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Y = function (e) {
        return E.createElement(
          "svg",
          X(
            {
              width: 10,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          f ||
            (f = E.createElement("path", {
              d: "M.977 12a.943.943 0 0 1-.692-.285.943.943 0 0 1-.285-.692V2.635h.543v8.388c0 .108.045.208.136.298.09.09.19.136.298.136H7.17V12H.977Zm1.792-1.792a.942.942 0 0 1-.692-.285.942.942 0 0 1-.285-.692V.977c0-.27.095-.502.285-.692.19-.19.421-.285.692-.285h6.136c.271 0 .502.095.692.285.19.19.285.421.285.692v8.254a.942.942 0 0 1-.285.692.942.942 0 0 1-.692.285H2.769Zm0-.543h6.136a.415.415 0 0 0 .299-.136c.09-.09.135-.19.135-.298V.977A.415.415 0 0 0 9.204.68a.415.415 0 0 0-.299-.136H2.769a.415.415 0 0 0-.298.136.415.415 0 0 0-.136.298v8.254c0 .108.045.208.136.298.09.09.19.136.298.136Z",
              fill: "currentColor",
            }))
        );
      };
      function q() {
        return (q = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var $ = function (e) {
        return E.createElement(
          "svg",
          q(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          d ||
            (d = E.createElement("path", {
              d: "M6.002 12a5.792 5.792 0 0 1-2.33-.472 6.113 6.113 0 0 1-1.908-1.29A6.107 6.107 0 0 1 .473 8.33 5.78 5.78 0 0 1 0 6.002c0-.83.157-1.61.472-2.34a5.993 5.993 0 0 1 1.29-1.906A6.18 6.18 0 0 1 3.67.473 5.78 5.78 0 0 1 5.998 0c.83 0 1.61.157 2.34.472.73.315 1.366.743 1.906 1.282.54.54.968 1.175 1.283 1.905.315.73.473 1.51.473 2.339 0 .827-.157 1.604-.472 2.33a6.186 6.186 0 0 1-1.282 1.908 5.987 5.987 0 0 1-1.905 1.291c-.73.315-1.51.473-2.339.473ZM6 11.487c1.527 0 2.823-.533 3.888-1.6 1.066-1.068 1.6-2.363 1.6-3.887 0-1.527-.534-2.823-1.6-3.888C8.823 1.046 7.527.512 6 .512c-1.524 0-2.82.534-3.887 1.6C1.046 3.177.513 4.473.513 6c0 1.524.533 2.82 1.6 3.887 1.068 1.067 2.363 1.6 3.887 1.6Z",
              fill: "currentColor",
            }))
        );
      };
      function ee() {
        return (ee = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var et = function (e) {
        return E.createElement(
          "svg",
          ee(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          m ||
            (m = E.createElement("path", {
              d: "M1.158 12c-.321 0-.595-.113-.82-.338a1.117 1.117 0 0 1-.338-.82V8.624h.643v2.218c0 .128.054.246.161.354.108.107.225.16.354.16h9.394a.492.492 0 0 0 .354-.16.492.492 0 0 0 .161-.354V8.624h.643v2.218c0 .321-.112.595-.338.82a1.117 1.117 0 0 1-.82.338H1.158Zm4.697-3.087L2.961 6.02l.465-.449 2.108 2.092V0h.643v7.662L8.284 5.57l.465.448-2.894 2.894Z",
              fill: "currentColor",
            }))
        );
      };
      function en() {
        return (en = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var er = function (e) {
        return E.createElement(
          "svg",
          en(
            {
              width: 12,
              height: 13,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          w ||
            (w = E.createElement("path", {
              d: "M5.645 12.615V6.97H0v-.71h5.645V.615h.71V6.26H12v.71H6.355v5.645h-.71Z",
              fill: "currentColor",
            }))
        );
      };
      function ea() {
        return (ea = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ec = function (e) {
        return E.createElement(
          "svg",
          ea(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          b ||
            (b = E.createElement("path", {
              d: "M0 12v-.543h12V12H0Zm0-5.729V5.73h12v.542H0ZM0 .543V0h12v.543H0Z",
              fill: "currentColor",
            }))
        );
      };
      function eo() {
        return (eo = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var el = function (e) {
        return E.createElement(
          "svg",
          eo(
            {
              width: 12,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          j ||
            (j = E.createElement("path", {
              d: "M6 12 0 6l6-6 .456.456-5.24 5.225H12v.638H1.216l5.24 5.225L6 12Z",
              fill: "currentColor",
            }))
        );
      };
      function ei() {
        return (ei = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var es = function (e) {
        return E.createElement(
          "svg",
          ei(
            {
              width: 13,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          x ||
            (x = E.createElement("path", {
              d: "M1.538 12c-.288 0-.533-.101-.735-.303A1.001 1.001 0 0 1 .5 10.96V1.038C.5.75.601.505.803.303 1.005.101 1.25 0 1.538 0h9.924c.288 0 .533.101.735.303.202.202.303.447.303.735v9.924c0 .288-.101.533-.303.735a1 1 0 0 1-.735.303H1.538Zm0-.577h9.924a.441.441 0 0 0 .317-.144.441.441 0 0 0 .144-.318V1.038a.441.441 0 0 0-.144-.317.441.441 0 0 0-.317-.144H1.538a.441.441 0 0 0-.317.144.441.441 0 0 0-.144.317v9.924c0 .115.048.22.144.317a.441.441 0 0 0 .317.144Z",
              fill: "currentColor",
            }))
        );
      };
      function eu() {
        return (eu = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eh = function (e) {
        return E.createElement(
          "svg",
          eu(
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: 25,
              viewBox: "0 -960 960 960",
              width: 25,
            },
            e
          ),
          O ||
            (O = E.createElement("path", {
              d: "M480-190.769 458.769-213l250.846-251.615H190.769v-30.77h518.846L458.769-747 480-769.231 769.231-480 480-190.769Z",
              fill: "currentColor",
            }))
        );
      };
      function ev() {
        return (ev = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ep = function (e) {
        return E.createElement(
          "svg",
          ev(
            {
              xmlns: "http://www.w3.org/2000/svg",
              height: 25,
              viewBox: "0 -960 960 960",
              width: 25,
            },
            e
          ),
          y ||
            (y = E.createElement("path", {
              d: "M480-190.769 190.769-480 480-769.231l22 22-252.615 251.846h519.846v30.77H249.385L502-212.769l-22 22Z",
              fill: "currentColor",
            }))
        );
      };
      function e_() {
        return (e_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eg = function (e) {
        return E.createElement(
          "svg",
          e_(
            {
              width: 7,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          Z ||
            (Z = E.createElement("path", {
              d: "m5.989 0 .626.626L1.253 5.99l5.362 5.385L5.99 12l-5.99-6.01L5.99 0Z",
              fill: "currentColor",
            }))
        );
      };
      let ef = {
        Empty: (e) => (0, M.jsx)(M.Fragment, {}),
        Logo: (e) => (0, M.jsx)(P, {}),
        Settings: (e) => (0, M.jsx)(H, {}),
        DownArrow: (e) => (0, M.jsx)(L, {}),
        UpArrow: (e) => (0, M.jsx)(R, {}),
        Send: (e) => (0, M.jsx)(A, {}),
        Hamburger: (e) => (0, M.jsx)(B, {}),
        Close: (e) => (0, M.jsx)(S, {}),
        TaoLogo: (e) => (0, M.jsx)(I, {}),
        BittensorLogo: (e) => (0, M.jsx)(U, {}),
        SendTao: (e) => (0, M.jsx)(W, {}),
        ReceiveTao: (e) => (0, M.jsx)(K, {}),
        Copy: (e) => (0, M.jsx)(Y, {}),
        Access: (e) => (0, M.jsx)($, {}),
        Import: (e) => (0, M.jsx)(et, {}),
        Create: (e) => (0, M.jsx)(er, {}),
        Menu: (e) => (0, M.jsx)(ec, {}),
        Back: (e) => (0, M.jsx)(el, {}),
        StakeTaoIcon: (e) => (0, M.jsx)(es, {}),
        BackArrow: (e) => (0, M.jsx)(ep, {}),
        ForwardArrow: (e) => (0, M.jsx)(eh, {}),
        BackDrop: (e) => (0, M.jsx)(eg, {}),
      };
    },
    93625: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var r = n(64618),
        a = n(63911),
        c = n.n(a),
        o = n(51723),
        l = n(53857),
        i = n.n(l);
      let s = (e) => {
        let {
          href: t,
          isExternal: n,
          className: a,
          children: l,
          isLinkButton: s,
          onClick: u,
          ...h
        } = e;
        return (0, r.jsx)(c(), {
          href: t,
          className: (0, o.Z)(i().link, a, { "is-button": s }),
          target: n ? "_blank" : "_self",
          scroll: !1,
          onClick: u,
          ...h,
          children: l,
        });
      };
    },
    25808: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          TextArea: function () {
            return s;
          },
        });
      var r = n(64618),
        a = n(27024),
        c = n(35285),
        o = n.n(c),
        l = n(10080),
        i = n(51723);
      let s = (e) => {
        let { onSend: t, disabled: n, label: c } = e,
          [s, u] = (0, a.useState)(""),
          h = (0, a.useRef)(null),
          v = (e) => {
            null === h.current ||
              n ||
              ((h.current.scrollHeight - 97) / 19 > 1
                ? (h.current.rows = (h.current.scrollHeight - 97) / 19 + 1)
                : (h.current.rows = 1),
              u(e.target.value.replace("\n", "")));
          },
          p = () => {
            let e = s.trim();
            0 !== e.length && (h.current && (h.current.rows = 1), t(e), u(""));
          },
          _ = (e) => {
            if ("Enter" === e.key && !n) return e.preventDefault(), p(), !1;
          };
        return (0, r.jsx)("div", {
          className: (0, i.Z)(o().container_wrapper, n && o().disabled),
          children: (0, r.jsxs)("div", {
            className: o().container,
            children: [
              (0, r.jsx)("textarea", {
                className: o().input_box,
                placeholder: null != c ? c : "Start a chat",
                ref: h,
                onChange: v,
                rows: 1,
                "data-min-rows": "1",
                value: s,
                onKeyUp: _,
              }),
              (0, r.jsx)("button", {
                className: o().send_btn,
                onClick: n ? void 0 : p,
                children: (0, r.jsx)(l.J.Send, {}),
              }),
            ],
          }),
        });
      };
    },
  },
]);
