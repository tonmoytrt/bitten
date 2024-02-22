(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    51396: function (n, e, t) {
      Promise.resolve().then(t.bind(t, 3400));
    },
    41078: function () {},
    64141: function () {},
    15722: function (n) {
      n.exports = {
        no_scroll: "layout_no_scroll__yJaey",
        body_container: "layout_body_container__q8Oiv",
        html_container: "layout_html_container__LIkV6",
        main_container: "layout_main_container__1pGaq",
      };
    },
    3400: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var i = t(64618);
      t(64141);
      var r = t(65656),
        s = t(51723),
        o = t(27024),
        c = t(41250);
      t(41078);
      var l = t(15722),
        a = t.n(l),
        _ = t(4728);
      function u(n) {
        let { children: e } = n,
          t = (0, _.r)((n) => n.isVisible),
          [l] = (0, o.useState)(() => new c.QueryClient());
        return (0, i.jsxs)("html", {
          lang: "en",
          className: (0, s.Z)("light", a().html_container),
          children: [
            (0, i.jsxs)("head", {
              children: [
                (0, i.jsx)("title", { children: "Atomic" }),
                (0, i.jsx)("meta", {
                  name: "description",
                  content: "Internet-scale machine learning",
                }),
                (0, i.jsx)("meta", {
                  property: "og:title",
                  content: "Atomic",
                }),
                (0, i.jsx)("meta", {
                  property: "og:description",
                  content: "Internet-scale machine learning",
                }),
                (0, i.jsx)("link", {
                  rel: "stylesheet",
                  href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
                }),
              ],
            }),
            (0, i.jsxs)("body", {
              className: (0, s.Z)(
                { [a().no_scroll]: t },
                a().body_container,
                a().body_container
              ),
              children: [
                (0, i.jsx)(c.QueryClientProvider, {
                  client: l,
                  children: (0, i.jsx)("main", {
                    className: a().main_container,
                    children: e,
                  }),
                }),
                (0, i.jsx)(r.c, {}),
              ],
            }),
          ],
        });
      }
    },
    4728: function (n, e, t) {
      "use strict";
      t.d(e, {
        r: function () {
          return r;
        },
      });
      var i = t(98178);
      let r = (0, i.Ue)((n, e) => ({
        isVisible: !1,
        toggle: () => {
          let t = e().isVisible;
          n({ isVisible: !t });
        },
      }));
    },
  },
  function (n) {
    n.O(0, [4819, 3132, 1744], function () {
      return n((n.s = 51396));
    }),
      (_N_E = n.O());
  },
]);
