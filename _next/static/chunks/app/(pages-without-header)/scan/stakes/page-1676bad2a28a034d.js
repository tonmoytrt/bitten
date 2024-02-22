(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4342],
  {
    2867: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 47709));
    },
    38538: function (e) {
      e.exports = {
        bread_crumb_container: "BreadCrumb_bread_crumb_container__ShzUB",
      };
    },
    95326: function (e) {
      e.exports = { skeleton: "SkeletonLoader_skeleton__TxwaU" };
    },
    66390: function (e) {
      e.exports = {
        container: "StakeCard_container__MKXYB",
        section_1: "StakeCard_section_1__6e0H2",
        section_1_status: "StakeCard_section_1_status__zLnU0",
        section_1_text: "StakeCard_section_1_text__Qx5p1",
        section_2: "StakeCard_section_2__hTYjy",
        section_2_time: "StakeCard_section_2_time__XhTtg",
        hash_text: "StakeCard_hash_text__DtCFf",
        section_3: "StakeCard_section_3__o299z",
        skeleton_loading: "StakeCard_skeleton_loading__HXcdV",
        tao_symbol: "StakeCard_tao_symbol__RrkaE",
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
    3583: function (e) {
      e.exports = {
        container: "page_container__C1kLE",
        latest_block: "page_latest_block__Ky4j2",
        page_container: "page_page_container__EPdhs",
      };
    },
    89737: function (e, a, s) {
      "use strict";
      s.d(a, {
        S: function () {
          return d;
        },
        _: function () {
          return o;
        },
      });
      var t = s(64618),
        n = s(32479),
        r = s(26437),
        l = s(27024),
        i = s(8121),
        c = s(87040);
      let d = (0, r.ec)(),
        o = (e) => {
          let { children: a } = e,
            [s] = (0, l.useState)(
              () => new i.S({ defaultOptions: { queries: { staleTime: 5e3 } } })
            ),
            [r] = (0, l.useState)(() =>
              d.createClient({
                links: [
                  (0, n.gb)({ enabled: () => !0 }),
                  (0, n.ch)({
                    url: "/api/trpc/",
                    fetch: async (e, a) => {
                      let s = (0, n.wY)();
                      return s(e, { ...a, credentials: "include" });
                    },
                  }),
                ],
              })
            );
          return (0, t.jsx)(d.Provider, {
            client: r,
            queryClient: s,
            children: (0, t.jsx)(c.aH, { client: s, children: a }),
          });
        };
    },
    60248: function (e, a, s) {
      "use strict";
      s.d(a, {
        c: function () {
          return d;
        },
      });
      var t = s(64618);
      s(27024);
      var n = s(38538),
        r = s.n(n),
        l = s(63911),
        i = s.n(l),
        c = s(67911);
      let d = (e) => {
        let { breadCrumbItems: a } = e;
        return (0, t.jsx)("div", {
          className: r().bread_crumb_container,
          children:
            null == a
              ? void 0
              : a.map((e, a) =>
                  (0, t.jsx)(
                    "div",
                    {
                      children: e.href
                        ? (0, t.jsxs)(i(), {
                            href: e.href,
                            children: [
                              (0, t.jsx)(c.Z.Label, { children: e.label }),
                              (0, t.jsx)("p", { children: "/" }),
                            ],
                          })
                        : (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(c.Z.Label, { children: e.label }),
                              (0, t.jsx)("p", { children: "/" }),
                            ],
                          }),
                    },
                    a
                  )
                ),
        });
      };
    },
    12255: function (e, a, s) {
      "use strict";
      s.d(a, {
        I: function () {
          return l;
        },
      });
      var t = s(64618),
        n = s(27024),
        r = s(67911);
      let l = (e) => {
        let { currentTime: a, createdAtTime: s, className: l } = e,
          [i, c] = (0, n.useState)((a - s) / 1e3);
        return ((0, n.useEffect)(() => {
          let e = setInterval(
            () => {
              let e = new Date().getTime();
              c((e - s) / 1e3);
            },
            (a - s) / 1e3 / 60 < 1 ? 1e3 : 6e4
          );
          return () => clearInterval(e);
        }, [i]),
        i > 60)
          ? (0, t.jsx)(r.Z.ParagraphSmall, {
              className: l,
              children:
                i > 90
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [(i / 60).toFixed(0), " mins ago"],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [(i / 60).toFixed(0), " min ago"],
                    }),
            })
          : (0, t.jsxs)(r.Z.ParagraphSmall, {
              className: l,
              children: [i.toFixed(0), " secs ago"],
            });
      };
    },
    93170: function (e, a, s) {
      "use strict";
      s.d(a, {
        O: function () {
          return c;
        },
      });
      var t = s(64618);
      s(27024);
      var n = s(95326),
        r = s.n(n),
        l = s(51723);
      let i = (e) => {
          let { placeholderText: a, textStlye: s } = e;
          return (0, t.jsx)("p", {
            className: (0, l.Z)(r().skeleton, s),
            children: a || "lorem ipsum dolor sit amet",
          });
        },
        c = (e) => {
          let {
            children: a,
            isLoaded: s,
            placeholderText: n,
            textStlye: r,
          } = e;
          return (0, t.jsx)("div", {
            children: s
              ? (0, t.jsx)(t.Fragment, { children: a })
              : (0, t.jsx)(i, { placeholderText: n, textStlye: r }),
          });
        };
    },
    67911: function (e, a, s) {
      "use strict";
      s.d(a, {
        Z: function () {
          return i;
        },
      });
      var t = s(64618);
      s(27024);
      var n = s(51723),
        r = s(80612),
        l = s.n(r);
      let i = {
        Display1: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().display1, a),
            children: s,
          });
        },
        Display2: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().display2, a),
            children: s,
          });
        },
        Display3: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().display3, a),
            children: s,
          });
        },
        Display4: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().display4, a),
            children: s,
          });
        },
        Heading1: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().heading1, a),
            children: s,
          });
        },
        Heading2: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().heading2, a),
            children: s,
          });
        },
        Heading3: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().heading3, a),
            children: s,
          });
        },
        ParagraphBig: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().paragraph_big, a),
            children: s,
          });
        },
        Paragraph: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().paragraph, a),
            children: s,
          });
        },
        ParagraphSmall: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().paragraph_small, a),
            children: s,
          });
        },
        Label: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().label, a),
            children: s,
          });
        },
        TaoSymbol: (e) => {
          let { className: a, children: s } = e;
          return (0, t.jsx)("span", {
            className: (0, n.Z)(l().tao_amount, a),
            children: s,
          });
        },
      };
    },
    47709: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return y;
          },
        });
      var t = s(64618),
        n = s(89737),
        r = s(60248);
      s(27024);
      var l = s(66390),
        i = s.n(l),
        c = s(45041);
      let d = (e) => {
        let { height: a = 16, className: s = "" } = e;
        return (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: a,
          viewBox: "0 -960 960 960",
          width: a,
          children: (0, t.jsx)("path", {
            d: "M450-130v-309h-20q-64 0-120.5-24.5T209-533q-44-45-66.5-104T120-760v-80h78.322Q260-840 317-815.5T419-746q33 34 54.5 76t30.5 89q7.647-11.9 16.824-22.95Q530-615 540-626q45-45 102-69.5T761.667-720H840v80q0 64-23.979 123Q792.043-458 748-413q-45 45-101.561 69Q589.878-320 528-320h-18v190h-60Zm1-370q0-61-20-113.5t-55-89q-35-36.5-86-57T180-780q0 63 18.5 115.5T252-575q42 45 90.5 60T451-500Zm59 120q60 0 111-19.5t86-56q35-36.5 54-89T780-660q-60 0-111 20.5T583-583q-43 45-58 94t-15 109Zm0 0Zm-59-120Z",
            fill: "currentColor",
          }),
        });
      };
      var o = s(93170),
        _ = s(12255),
        h = s(95443),
        p = s(67911);
      let u = (e) => {
          let { stakeTransaction: a } = e,
            s = (0, c.useRouter)(),
            n = new Date().getTime(),
            r = (e) => {
              s.push("/scan/address/".concat(e));
            };
          return (0, t.jsx)("div", {
            children:
              null == a
                ? void 0
                : a.map((e, a) => {
                    let s = new Date(e.blockDatetime).getTime(),
                      l = h.df.encode("".concat(e.accountId || "")) || "-";
                    return (0, t.jsx)(
                      "div",
                      {
                        children: (0, t.jsxs)("div", {
                          className: i().container,
                          onClick: () => r(l),
                          children: [
                            (0, t.jsxs)("div", {
                              className: i().section_1,
                              children: [
                                (0, t.jsx)(d, {}),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)(p.Z.ParagraphSmall, {
                                      children: e.action,
                                    }),
                                    (0, t.jsx)("p", {
                                      className: i().section_1_status,
                                      children: (0, t.jsx)(p.Z.ParagraphSmall, {
                                        children: e.complete
                                          ? "complete"
                                          : "pending",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: i().section_2,
                              children: [
                                (0, t.jsx)("p", {
                                  children: (0, t.jsx)(p.Z.ParagraphSmall, {
                                    children: l,
                                  }),
                                }),
                                (0, t.jsx)(_.I, {
                                  currentTime: n,
                                  createdAtTime: s,
                                  className: i().section_2_time,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: i().section_3,
                              children: (0, t.jsxs)(p.Z.Heading2, {
                                children: [
                                  (0, t.jsx)("span", {
                                    className: i().tao_symbol,
                                    children: "",
                                  }),
                                  e.stakeAmount,
                                ],
                              }),
                            }),
                          ],
                        }),
                      },
                      a
                    );
                  }),
          });
        },
        x = () => {
          let e = Array(20).fill(0);
          return (0, t.jsx)("div", {
            className: i().skeleton_loading,
            children: e.map((e, a) =>
              (0, t.jsx)(
                "div",
                {
                  children: (0, t.jsxs)("div", {
                    className: i().container,
                    children: [
                      (0, t.jsxs)("div", {
                        className: i().section_1,
                        children: [
                          (0, t.jsx)(d, {}),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(o.O, { placeholderText: "unstake" }),
                              (0, t.jsx)(o.O, { placeholderText: "complete" }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: i().section_2,
                        children: [
                          (0, t.jsx)(o.O, {
                            placeholderText:
                              "5Dw8jzm6ktPksrpi7NojjrXjGKpRqzWsCawNed22HtBXha49",
                            isLoaded: !1,
                            textStlye: i().hash_text,
                          }),
                          (0, t.jsx)(o.O, {
                            placeholderText: "12 secs ago",
                            isLoaded: !1,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: i().section_3,
                        children: (0, t.jsx)(o.O, {
                          placeholderText: "T 50.00",
                          isLoaded: !1,
                        }),
                      }),
                    ],
                  }),
                },
                a
              )
            ),
          });
        };
      var m = s(3583),
        j = s.n(m);
      let g = () => {
        let { data: e, isLoading: a } = n.S.getLatestStakeActions.useQuery(
            { pageSize: 20, action: "add_stake" },
            {}
          ),
          { data: s, isLoading: l } = n.S.getLatestStakeActions.useQuery({
            pageSize: 20,
            action: "remove_stake",
          });
        return (0, t.jsxs)("div", {
          className: j().page_container,
          children: [
            (0, t.jsx)(r.c, {
              breadCrumbItems: [
                { label: "Home", href: "/scan" },
                { label: "Stakes", href: null },
              ],
            }),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: j().container,
                  children: [
                    (0, t.jsx)(p.Z.Heading1, { children: "Staking Events" }),
                    a
                      ? (0, t.jsx)("div", {
                          className: j().latest_block,
                          children: (0, t.jsx)(x, {}),
                        })
                      : (0, t.jsx)("div", {
                          className: j().latest_block,
                          children: (0, t.jsx)(u, { stakeTransaction: e }),
                        }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: j().container,
                  children: [
                    (0, t.jsx)(p.Z.Heading1, { children: "Unstaking Events" }),
                    l
                      ? (0, t.jsx)("div", {
                          className: j().latest_block,
                          children: (0, t.jsx)(x, {}),
                        })
                      : (0, t.jsx)("div", {
                          className: j().latest_block,
                          children: (0, t.jsx)(u, { stakeTransaction: s }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var y = g;
    },
    95443: function (e, a, s) {
      "use strict";
      s.d(a, {
        df: function () {
          return l;
        },
      });
      var t = s(52357),
        n = s(19624);
      let r = (e) =>
          "0x" +
          Array.from(e, (e) => ("0" + (255 & e).toString(16)).slice(-2)).join(
            ""
          ),
        l = {
          decode: function (e) {
            let a;
            try {
              a = (0, t.m)(e);
            } catch (e) {
              return null;
            }
            return r(a);
          },
          encode: function (e) {
            let a;
            try {
              a = (0, n.m)(e, 42);
            } catch (e) {
              return null;
            }
            return a;
          },
        };
    },
  },
  function (e) {
    e.O(0, [8076, 8761, 1677, 9624, 3132, 1744], function () {
      return e((e.s = 2867));
    }),
      (_N_E = e.O());
  },
]);
