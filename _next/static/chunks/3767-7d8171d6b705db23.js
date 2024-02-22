(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3767],
  {
    72678: function (e) {
      e.exports = {
        menu_wrapper: "HamburgerMenuItems_menu_wrapper__6hFz3",
        menu_link: "HamburgerMenuItems_menu_link__UCzJc",
      };
    },
    15097: function (e) {
      e.exports = { header_wrapper: "Header_header_wrapper__IEkIo" };
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
    43767: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          Header: function () {
            return b;
          },
        });
      var a = t(64618);
      t(27024);
      var i = t(85857),
        n = t(72678),
        l = t.n(n),
        s = t(4728);
      let u = [
          { title: "Build", url: "#", isExternal: !1 },
          { title: "About", url: "#about", isExternal: !1 },
          { title: "Whitepaper", url: "whitepaperlink", isExternal: !1 },
          { title: "Charter", url: "chartlink", isExternal: !1 },
          { title: "Academia", url: "#academia", isExternal: !1 },
          {
            title: "Discord",
            url: "discordlink",
            isExternal: !0,
          },
          {
            title: "Code",
            url: "githublink",
            isExternal: !0,
          },
        ],
        c = () => {
          let e = (0, s.r)();
          return (0, a.jsx)("div", {
            className: l().menu_wrapper,
            children: u.map((r, t) =>
              (0, a.jsx)(
                i.rU,
                {
                  href: r.url,
                  isExternal: r.isExternal,
                  onClick: e.toggle,
                  children: (0, a.jsx)("p", {
                    className: l().menu_link,
                    children: r.title,
                  }),
                },
                t
              )
            ),
          });
        };
      var o = t(15097),
        h = t.n(o),
        p = t(98178);
      let _ = (0, p.Ue)((e, r) => ({
          isVisible: !1,
          open: () => {
            e({ isVisible: !0 });
          },
          close: () => {
            e({ isVisible: !1 });
          },
        })),
        d = [
          { label: "Docs", href: "https://docs.atomicsor.com/" },
          { label: "About", href: "https://atomicsor.com/about" },
          { label: "Whitepaper", href: "https://atomicsor.com/whitepaper" },
          { label: "Charter", href: "https://atomicsor.com/charter" },
          { label: "Academia", href: "https://atomicsor.com/academia" },
          { label: "Scan", href: "https://atomicsor.com/scan" },
          { label: "wallet", href: "https://atomicsor.com/wallet" },
        ],
        b = () => {
          let e = (0, s.r)(),
            r = _((e) => e.open);
          return (0, a.jsx)("div", {
            className: h().header_wrapper,
            children: (0, a.jsx)(i.h4, {
              hamberMenuItems: (0, a.jsx)(c, {}),
              taocredit: 0,
              walletAction: r,
              hamburgerMenuIsOpened: e.isVisible,
              hamburgerMenuToggle: e.toggle,
              menuLinks: d,
            }),
          });
        };
    },
    4728: function (e, r, t) {
      "use strict";
      t.d(r, {
        r: function () {
          return i;
        },
      });
      var a = t(98178);
      let i = (0, a.Ue)((e, r) => ({
        isVisible: !1,
        toggle: () => {
          let t = r().isVisible;
          e({ isVisible: !t });
        },
      }));
    },
    85857: function (e, r, t) {
      "use strict";
      t.d(r, {
        FB: function () {
          return n.HamburgerMenu;
        },
        h4: function () {
          return l.Header;
        },
        JO: function () {
          return a.J;
        },
        rU: function () {
          return c.r;
        },
        oA: function () {
          return i.o;
        },
      }),
        t(64618),
        t(27024),
        t(79290);
      var a = t(10080);
      t(51723), t(55408), t(63911);
      var i = t(1868),
        n = t(72691);
      t(25808);
      var l = t(15416);
      t(61847);
      var s = t(37498),
        u = t.n(s);
      u().switch, u().input, t(65037), t(96455), t(8518), t(91767);
      var c = t(93625);
    },
  },
]);
