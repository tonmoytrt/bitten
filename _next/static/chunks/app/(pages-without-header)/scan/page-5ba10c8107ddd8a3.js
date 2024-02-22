(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [903],
  {
    51723: function (e, a, n) {
      "use strict";
      a.Z = function () {
        for (var e, a, n = 0, s = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (a = (function e(a) {
              var n,
                s,
                t = "";
              if ("string" == typeof a || "number" == typeof a) t += a;
              else if ("object" == typeof a) {
                if (Array.isArray(a))
                  for (n = 0; n < a.length; n++)
                    a[n] && (s = e(a[n])) && (t && (t += " "), (t += s));
                else for (n in a) a[n] && (t && (t += " "), (t += n));
              }
              return t;
            })(e)) &&
            (s && (s += " "), (s += a));
        return s;
      };
    },
    29566: function (e, a, n) {
      Promise.resolve().then(n.bind(n, 53148));
    },
    119: function (e) {
      e.exports = {
        typography: "BlockCard_typography__OjhfN",
        container: "BlockCard_container__gZI7a",
        section_1: "BlockCard_section_1__Y31u7",
        section_1_text: "BlockCard_section_1_text__sgcMx",
        section_2: "BlockCard_section_2__Zi3k1",
        section_2_time: "BlockCard_section_2_time__PniCU",
        hash_text: "BlockCard_hash_text__c5xMj",
        section_3: "BlockCard_section_3__nsT9O",
        skeleton_loading: "BlockCard_skeleton_loading__LluX3",
        finalized: "BlockCard_finalized__yLWmH",
      };
    },
    5417: function (e) {
      e.exports = {
        container: "ChainInfo_container__U6Bgp",
        card_container: "ChainInfo_card_container__TFbhF",
        card_container_title: "ChainInfo_card_container_title__q3yJw",
        card_container_value: "ChainInfo_card_container_value__sRa_L",
        loading: "ChainInfo_loading__efqaF",
        dots: "ChainInfo_dots__xfPcm",
      };
    },
    95326: function (e) {
      e.exports = { skeleton: "SkeletonLoader_skeleton__TxwaU" };
    },
    77056: function (e) {
      e.exports = {
        typography: "Transaction_typography__5Ivbr",
        container: "Transaction_container__y2a7d",
        section_1: "Transaction_section_1__8hnqY",
        section_1_text: "Transaction_section_1_text__1Oe5s",
        section_2: "Transaction_section_2__IC5tG",
        section_2_time: "Transaction_section_2_time__sQR4o",
        hash_text: "Transaction_hash_text__E4Z2H",
        section_3: "Transaction_section_3__8LaDB",
        skeleton_loading: "Transaction_skeleton_loading___r3Zu",
        finalized: "Transaction_finalized__C48od",
        transfer: "Transaction_transfer__RKvCZ",
        tao_symbol: "Transaction_tao_symbol___dJsM",
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
    96110: function (e) {
      e.exports = {
        main_container: "page_main_container__pm1MJ",
        container: "page_container__cckEr",
        latest_block: "page_latest_block__ZilJH",
        column_container: "page_column_container__N8T1o",
        page_container: "page_page_container__clZkQ",
      };
    },
    89737: function (e, a, n) {
      "use strict";
      n.d(a, {
        S: function () {
          return o;
        },
        _: function () {
          return d;
        },
      });
      var s = n(64618),
        t = n(32479),
        r = n(26437),
        i = n(27024),
        l = n(8121),
        c = n(87040);
      let o = (0, r.ec)(),
        d = (e) => {
          let { children: a } = e,
            [n] = (0, i.useState)(
              () => new l.S({ defaultOptions: { queries: { staleTime: 5e3 } } })
            ),
            [r] = (0, i.useState)(() =>
              o.createClient({
                links: [
                  (0, t.gb)({ enabled: () => !0 }),
                  (0, t.ch)({
                    url: "/api/trpc/",
                    fetch: async (e, a) => {
                      let n = (0, t.wY)();
                      return n(e, { ...a, credentials: "include" });
                    },
                  }),
                ],
              })
            );
          return (0, s.jsx)(o.Provider, {
            client: r,
            queryClient: n,
            children: (0, s.jsx)(c.aH, { client: n, children: a }),
          });
        };
    },
    12255: function (e, a, n) {
      "use strict";
      n.d(a, {
        I: function () {
          return i;
        },
      });
      var s = n(64618),
        t = n(27024),
        r = n(67911);
      let i = (e) => {
        let { currentTime: a, createdAtTime: n, className: i } = e,
          [l, c] = (0, t.useState)((a - n) / 1e3);
        return ((0, t.useEffect)(() => {
          let e = setInterval(
            () => {
              let e = new Date().getTime();
              c((e - n) / 1e3);
            },
            (a - n) / 1e3 / 60 < 1 ? 1e3 : 6e4
          );
          return () => clearInterval(e);
        }, [l]),
        l > 60)
          ? (0, s.jsx)(r.Z.ParagraphSmall, {
              className: i,
              children:
                l > 90
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [(l / 60).toFixed(0), " mins ago"],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [(l / 60).toFixed(0), " min ago"],
                    }),
            })
          : (0, s.jsxs)(r.Z.ParagraphSmall, {
              className: i,
              children: [l.toFixed(0), " secs ago"],
            });
      };
    },
    93170: function (e, a, n) {
      "use strict";
      n.d(a, {
        O: function () {
          return c;
        },
      });
      var s = n(64618);
      n(27024);
      var t = n(95326),
        r = n.n(t),
        i = n(51723);
      let l = (e) => {
          let { placeholderText: a, textStlye: n } = e;
          return (0, s.jsx)("p", {
            className: (0, i.Z)(r().skeleton, n),
            children: a || "lorem ipsum dolor sit amet",
          });
        },
        c = (e) => {
          let {
            children: a,
            isLoaded: n,
            placeholderText: t,
            textStlye: r,
          } = e;
          return (0, s.jsx)("div", {
            children: n
              ? (0, s.jsx)(s.Fragment, { children: a })
              : (0, s.jsx)(l, { placeholderText: t, textStlye: r }),
          });
        };
    },
    67911: function (e, a, n) {
      "use strict";
      n.d(a, {
        Z: function () {
          return l;
        },
      });
      var s = n(64618);
      n(27024);
      var t = n(51723),
        r = n(80612),
        i = n.n(r);
      let l = {
        Display1: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().display1, a),
            children: n,
          });
        },
        Display2: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().display2, a),
            children: n,
          });
        },
        Display3: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().display3, a),
            children: n,
          });
        },
        Display4: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().display4, a),
            children: n,
          });
        },
        Heading1: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().heading1, a),
            children: n,
          });
        },
        Heading2: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().heading2, a),
            children: n,
          });
        },
        Heading3: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().heading3, a),
            children: n,
          });
        },
        ParagraphBig: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().paragraph_big, a),
            children: n,
          });
        },
        Paragraph: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().paragraph, a),
            children: n,
          });
        },
        ParagraphSmall: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().paragraph_small, a),
            children: n,
          });
        },
        Label: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().label, a),
            children: n,
          });
        },
        TaoSymbol: (e) => {
          let { className: a, children: n } = e;
          return (0, s.jsx)("span", {
            className: (0, t.Z)(i().tao_amount, a),
            children: n,
          });
        },
      };
    },
    53148: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return I;
          },
        });
      var s = n(64618),
        t = n(89737);
      n(27024);
      var r = n(119),
        i = n.n(r),
        l = n(45041);
      let c = (e) => {
        let { height: a = 16, className: n = "" } = e;
        return (0, s.jsx)("svg", {
          width: "16",
          height: "19",
          viewBox: "0 0 16 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M7.5 16.8434V9.41647L1 5.653V12.7338C1 12.8363 1.02564 12.9325 1.07692 13.0222C1.12821 13.112 1.20513 13.1889 1.3077 13.253L7.5 16.8434ZM8.5 16.8434L14.6923 13.253C14.7949 13.1889 14.8718 13.112 14.9231 13.0222C14.9744 12.9325 15 12.8363 15 12.7338V5.653L8.5 9.41647V16.8434ZM8 8.55685L14.425 4.84337L8.3077 1.303C8.20513 1.2389 8.10257 1.20685 8 1.20685C7.89743 1.20685 7.79487 1.2389 7.6923 1.303L1.575 4.84337L8 8.55685ZM0.807675 14.1376C0.555125 13.9928 0.357375 13.796 0.214425 13.5472C0.0714749 13.2985 0 13.0293 0 12.7395V5.5203C0 5.23057 0.0714749 4.96134 0.214425 4.71262C0.357375 4.46389 0.555125 4.26709 0.807675 4.12222L7.1923 0.443375C7.44487 0.298508 7.7141 0.226074 8 0.226074C8.2859 0.226074 8.55513 0.298508 8.8077 0.443375L15.1923 4.12222C15.4449 4.26709 15.6426 4.46389 15.7856 4.71262C15.9285 4.96134 16 5.23057 16 5.5203V12.7395C16 13.0293 15.9285 13.2985 15.7856 13.5472C15.6426 13.796 15.4449 13.9928 15.1923 14.1376L8.8077 17.8165C8.55513 17.9613 8.2859 18.0338 8 18.0338C7.7141 18.0338 7.44487 17.9613 7.1923 17.8165L0.807675 14.1376Z",
            fill: "currentColor",
          }),
        });
      };
      var o = n(93170),
        d = n(12255),
        _ = n(67183),
        h = n(67911);
      let x = (e) => {
          let { transactionBlocks: a } = e,
            n = (0, l.useRouter)(),
            t = new Date().getTime(),
            r = (e) => {
              n.push("/scan/block/".concat(e));
            };
          return (0, s.jsx)(s.Fragment, {
            children:
              null == a
                ? void 0
                : a.map((e, a) => {
                    let n = new Date(e.time).getTime();
                    return 0 == a
                      ? (0, s.jsx)(
                          "div",
                          {
                            children: (0, s.jsx)(u, {
                              hash: e.hash,
                              block: e.block,
                              time: new Date(e.time).getTime(),
                              currentTime: n,
                              extrinsics: e.extrinsics,
                              events: e.events,
                            }),
                          },
                          a
                        )
                      : (0, s.jsx)(
                          _.E.div,
                          {
                            initial: { y: -80 },
                            animate: { y: 0 },
                            transition: { duration: 0.5 },
                            children: (0, s.jsxs)("div", {
                              className: i().container,
                              onClick: () => r(e.block),
                              children: [
                                (0, s.jsxs)("div", {
                                  className: i().section_1,
                                  children: [
                                    (0, s.jsx)(c, {}),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)(h.Z.ParagraphSmall, {
                                          children: e.block,
                                        }),
                                        (0, s.jsx)("div", {
                                          className: i().finalized,
                                          children: (0, s.jsx)(
                                            h.Z.ParagraphSmall,
                                            { children: "FINALIZED" }
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: i().section_2,
                                  children: [
                                    (0, s.jsx)(h.Z.ParagraphSmall, {
                                      children: e.hash,
                                    }),
                                    (0, s.jsx)(d.I, {
                                      currentTime: t,
                                      createdAtTime: n,
                                      className: i().section_2_time,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  className: i().section_3,
                                  children: [
                                    (0, s.jsxs)(h.Z.ParagraphSmall, {
                                      children: [
                                        "Event No: ",
                                        (0, s.jsx)("span", {
                                          children: e.events,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)(h.Z.ParagraphSmall, {
                                      children: [
                                        "Ext No: ",
                                        (0, s.jsx)("span", {
                                          children: e.extrinsics,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.block + "s" + a
                        );
                  }),
          });
        },
        p = () => {
          let e = Array(20).fill(0);
          return (0, s.jsx)(s.Fragment, {
            children:
              null == e
                ? void 0
                : e.map((e, a) =>
                    (0, s.jsx)(
                      "div",
                      {
                        children: (0, s.jsxs)("div", {
                          className: i().container,
                          children: [
                            (0, s.jsxs)("div", {
                              className: i().section_1,
                              children: [
                                (0, s.jsx)(c, {}),
                                (0, s.jsxs)("div", {
                                  className: i().section_1_text,
                                  children: [
                                    (0, s.jsx)(o.O, {
                                      placeholderText: "805861",
                                    }),
                                    (0, s.jsx)(o.O, {
                                      placeholderText: "finalized",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: i().section_2,
                              children: [
                                (0, s.jsx)(o.O, {
                                  placeholderText:
                                    "0x662b4a25b25d261b29b61478edc3ac1ed69aa924bf97e0248d04770fa90dc3ef",
                                }),
                                (0, s.jsx)(o.O, { placeholderText: "14 sec" }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: i().section_3,
                              style: { overflow: "hidden" },
                              children: [
                                (0, s.jsx)(o.O, {
                                  placeholderText: "Event No: 25",
                                }),
                                (0, s.jsx)(o.O, {
                                  placeholderText: "Ext No: 13",
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      a
                    )
                  ),
          });
        },
        u = (e) => {
          let {
              hash: a,
              block: n,
              time: t,
              extrinsics: r,
              events: o,
              currentTime: x,
            } = e,
            p = (0, l.useRouter)(),
            u = (e) => {
              p.push("/scan/block/".concat(e));
            };
          return (0, s.jsx)(
            _.E.div,
            {
              initial: { opacity: 0.5, height: 0 },
              animate: { opacity: 1, height: "80px" },
              transition: { duration: 0.1 },
              layoutId: "block",
              onClick: () => u(n),
              children: (0, s.jsxs)(_.E.div, {
                className: i().container,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.4, delay: 0.5 },
                children: [
                  (0, s.jsxs)("div", {
                    className: i().section_1,
                    children: [
                      (0, s.jsx)(c, {}),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)(h.Z.ParagraphSmall, { children: n }),
                          (0, s.jsx)("div", {
                            className: i().finalized,
                            children: (0, s.jsx)(h.Z.ParagraphSmall, {
                              children: "FINALIZED",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: i().section_2,
                    children: [
                      (0, s.jsx)(h.Z.ParagraphSmall, { children: a }),
                      (0, s.jsx)(d.I, {
                        currentTime: x,
                        createdAtTime: t,
                        className: i().section_2_time,
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: i().section_3,
                    children: [
                      (0, s.jsxs)(h.Z.ParagraphSmall, {
                        children: [
                          "Event No: ",
                          (0, s.jsx)("span", { children: o }),
                        ],
                      }),
                      (0, s.jsxs)(h.Z.ParagraphSmall, {
                        children: [
                          "Ext No: ",
                          (0, s.jsx)("span", { children: r }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            n
          );
        };
      var m = n(5417),
        j = n.n(m);
      let g =
          new Date().getTime() -
          new Date("Wed Nov 03 2021 21:46:55 GMT+0200").getTime(),
        v = Math.ceil(g / 864e5),
        f = () => {
          let { data: e, isLoading: a } = t.S.getChainStats.useQuery(),
            n =
              (e &&
                e.total_stake.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })) ||
              "...",
            r =
              (e &&
                e.total_issuance.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })) ||
              "...",
            i =
              (e &&
                e.accounts.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })) ||
              "...";
          return (0, s.jsxs)("div", {
            className: j().container,
            children: [
              (0, s.jsx)(y, { title: "Days Running", value: v }),
              (0, s.jsx)(y, {
                title: "Active Accounts",
                value: i,
                isLoading: a,
              }),
              (0, s.jsx)(y, {
                title: "Total Staked",
                value: n,
                unit: !0,
                isLoading: a,
              }),
              (0, s.jsx)(y, {
                title: "Total Issuance",
                value: r,
                unit: !0,
                isLoading: a,
              }),
            ],
          });
        },
        y = (e) => {
          let { title: a, value: n, unit: t, isLoading: r } = e;
          return (0, s.jsxs)("div", {
            className: j().card_container,
            children: [
              (0, s.jsx)("p", {
                className: j().card_container_title,
                children: (0, s.jsx)(h.Z.Label, { children: a }),
              }),
              (0, s.jsxs)("p", {
                className: j().card_container_value,
                children: [
                  t && (0, s.jsx)(h.Z.TaoSymbol, { children: "" }),
                  n,
                ],
              }),
            ],
          });
        };
      var C = n(77056),
        N = n.n(C);
      let T = (e) => {
        let { height: a = 16, className: n = "" } = e;
        return (0, s.jsx)("svg", {
          width: "16",
          height: "15",
          viewBox: "0 0 16 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M3.3077 14.1299L0 10.8222L3.3077 7.51451L4.02115 8.22218L1.92115 10.3222H8.21152V11.3222H1.92115L4.01537 13.4222L3.3077 14.1299ZM10.8087 11.4184C10.6401 11.4184 10.4984 11.3613 10.3837 11.2472C10.2689 11.1332 10.2115 10.9918 10.2115 10.8232C10.2115 10.6546 10.2686 10.5129 10.3826 10.3982C10.4967 10.2834 10.6381 10.226 10.8067 10.226C10.9753 10.226 11.117 10.2831 11.2317 10.3971C11.3465 10.5112 11.4038 10.6525 11.4038 10.8212C11.4038 10.9898 11.3468 11.1315 11.2327 11.2462C11.1187 11.361 10.9773 11.4184 10.8087 11.4184ZM14.001 11.4184C13.8324 11.4184 13.6907 11.3613 13.576 11.2472C13.4612 11.1332 13.4038 10.9918 13.4038 10.8232C13.4038 10.6546 13.4609 10.5129 13.575 10.3982C13.689 10.2834 13.8304 10.226 13.999 10.226C14.1676 10.226 14.3093 10.2831 14.424 10.3971C14.5388 10.5112 14.5962 10.6525 14.5962 10.8212C14.5962 10.9898 14.5391 11.1315 14.4251 11.2462C14.311 11.361 14.1696 11.4184 14.001 11.4184ZM12.6923 6.74526L11.9789 6.05681L14.0981 3.93758H7.78848V2.93756H14.0788L11.9846 0.837582L12.6923 0.129883L16 3.43758L12.6923 6.74526ZM2.001 4.03373C1.83238 4.03373 1.6907 3.9767 1.57595 3.86263C1.46122 3.74857 1.40385 3.60722 1.40385 3.43858C1.40385 3.26997 1.46088 3.12828 1.57495 3.01353C1.68902 2.89878 1.83037 2.84141 1.999 2.84141C2.16762 2.84141 2.3093 2.89845 2.42405 3.01253C2.53878 3.1266 2.59615 3.26794 2.59615 3.43656C2.59615 3.60519 2.53912 3.74687 2.42505 3.86161C2.31098 3.97636 2.16963 4.03373 2.001 4.03373ZM5.19333 4.03373C5.02471 4.03373 4.88302 3.9767 4.76827 3.86263C4.65352 3.74857 4.59615 3.60722 4.59615 3.43858C4.59615 3.26997 4.65318 3.12828 4.76725 3.01353C4.88133 2.89878 5.02268 2.84141 5.1913 2.84141C5.35992 2.84141 5.5016 2.89845 5.61635 3.01253C5.7311 3.1266 5.78848 3.26794 5.78848 3.43656C5.78848 3.60519 5.73144 3.74687 5.61738 3.86161C5.50329 3.97636 5.36194 4.03373 5.19333 4.03373Z",
            fill: "currentColor",
          }),
        });
      };
      var Z = n(95443);
      let k = (e) => void 0 !== e.name,
        L = (e) => Array.isArray(e) && e.every(k),
        b = (e) => {
          let { transactions: a } = e,
            n = (0, l.useRouter)(),
            t = new Date().getTime(),
            r = (e) => {
              n.push("/scan/address/".concat(e));
            };
          return (0, s.jsx)(s.Fragment, {
            children:
              null == a
                ? void 0
                : a.map((e, a) => {
                    var n;
                    let i = new Date(e.blockDatetime).getTime(),
                      l = e.callName.replace("transfer_", ""),
                      c = [];
                    try {
                      let a = JSON.parse(e.callArguments);
                      L(a) && (c = a);
                    } catch (e) {}
                    let o =
                        (null === (n = c.find((e) => "dest" === e.name)) ||
                        void 0 === n
                          ? void 0
                          : n.value) || "",
                      _ = Z.df.encode(o) || "-";
                    return (0, s.jsx)(
                      "div",
                      {
                        children: (0, s.jsxs)("div", {
                          className: N().container,
                          onClick: () => r(_),
                          children: [
                            (0, s.jsxs)("div", {
                              className: N().section_1,
                              children: [
                                (0, s.jsx)(T, {}),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)(h.Z.ParagraphSmall, {
                                      children: e.blockNumber,
                                    }),
                                    (0, s.jsx)("div", {
                                      className: N().finalized,
                                      children: (0, s.jsx)(h.Z.ParagraphSmall, {
                                        children: e.complete
                                          ? "FINALIZED"
                                          : "PENDING",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: N().section_2,
                              children: [
                                (0, s.jsx)(h.Z.ParagraphSmall, { children: _ }),
                                (0, s.jsx)(d.I, {
                                  currentTime: t,
                                  createdAtTime: i,
                                  className: N().section_2_time,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: N().section_3,
                              children: [
                                (0, s.jsxs)(h.Z.ParagraphSmall, {
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: N().tao_symbol,
                                      children: "",
                                    }),
                                    e.transferValue,
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: N().transfer,
                                  children: (0, s.jsx)(h.Z.ParagraphSmall, {
                                    children: l,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      a
                    );
                  }),
          });
        },
        S = () => {
          let e = Array(20).fill(0);
          return (0, s.jsx)(s.Fragment, {
            children:
              null == e
                ? void 0
                : e.map((e, a) =>
                    (0, s.jsx)(
                      "div",
                      {
                        children: (0, s.jsxs)("div", {
                          className: N().container,
                          children: [
                            (0, s.jsxs)("div", {
                              className: N().section_1,
                              children: [
                                (0, s.jsx)(T, {}),
                                (0, s.jsxs)("div", {
                                  className: N().section_1_text,
                                  children: [
                                    (0, s.jsx)(o.O, {
                                      placeholderText: "805861",
                                    }),
                                    (0, s.jsx)(o.O, {
                                      placeholderText: "finalized",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: N().section_2,
                              children: [
                                (0, s.jsx)(o.O, {
                                  placeholderText:
                                    "5DvTpiniW9s3APmHRYn8FroUWyfnLtrsid5Mtn5EwMXHN2ed",
                                }),
                                (0, s.jsx)(o.O, { placeholderText: "14 sec" }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: N().section_3,
                              children: [
                                (0, s.jsx)(o.O, {
                                  placeholderText: "Tx value: 29.32",
                                }),
                                (0, s.jsx)(o.O, { placeholderText: "14 sec" }),
                              ],
                            }),
                          ],
                        }),
                      },
                      a
                    )
                  ),
          });
        };
      var w = n(96110),
        P = n.n(w);
      function I() {
        let { data: e, isLoading: a } = t.S.getLatestBlocks.useQuery(
            { pageSize: 21 },
            { refetchInterval: 11e3 }
          ),
          { data: n, isLoading: r } = t.S.getLatestTransactions.useQuery({
            pageSize: 20,
          });
        return (0, s.jsxs)("div", {
          className: P().main_container,
          children: [
            (0, s.jsx)(f, {}),
            (0, s.jsxs)("div", {
              className: P().column_container,
              children: [
                (0, s.jsxs)("div", {
                  className: P().container,
                  children: [
                    (0, s.jsx)(h.Z.Heading1, { children: "Latest Blocks" }),
                    a
                      ? (0, s.jsx)("div", {
                          className: P().latest_block,
                          children: (0, s.jsx)(p, {}),
                        })
                      : (0, s.jsx)("div", {
                          className: P().latest_block,
                          children: (0, s.jsx)(x, { transactionBlocks: e }),
                        }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: P().container,
                  children: [
                    (0, s.jsx)(h.Z.Heading1, {
                      children: "Latest Transactions",
                    }),
                    r
                      ? (0, s.jsx)("div", {
                          className: P().latest_block,
                          children: (0, s.jsx)(S, {}),
                        })
                      : (0, s.jsx)("div", {
                          className: P().latest_block,
                          children: (0, s.jsx)(b, { transactions: n }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    95443: function (e, a, n) {
      "use strict";
      n.d(a, {
        df: function () {
          return i;
        },
      });
      var s = n(52357),
        t = n(19624);
      let r = (e) =>
          "0x" +
          Array.from(e, (e) => ("0" + (255 & e).toString(16)).slice(-2)).join(
            ""
          ),
        i = {
          decode: function (e) {
            let a;
            try {
              a = (0, s.m)(e);
            } catch (e) {
              return null;
            }
            return r(a);
          },
          encode: function (e) {
            let a;
            try {
              a = (0, t.m)(e, 42);
            } catch (e) {
              return null;
            }
            return a;
          },
        };
    },
    1432: function (e, a, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var s = n(27024),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = { key: !0, ref: !0, __self: !0, __source: !0 };
      function o(e, a, n) {
        var s,
          r = {},
          o = null,
          d = null;
        for (s in (void 0 !== n && (o = "" + n),
        void 0 !== a.key && (o = "" + a.key),
        void 0 !== a.ref && (d = a.ref),
        a))
          i.call(a, s) && !c.hasOwnProperty(s) && (r[s] = a[s]);
        if (e && e.defaultProps)
          for (s in (a = e.defaultProps)) void 0 === r[s] && (r[s] = a[s]);
        return {
          $$typeof: t,
          type: e,
          key: o,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (a.Fragment = r), (a.jsx = o), (a.jsxs = o);
    },
    64618: function (e, a, n) {
      "use strict";
      e.exports = n(1432);
    },
    45041: function (e, a, n) {
      e.exports = n(1919);
    },
  },
  function (e) {
    e.O(0, [8076, 7183, 1677, 9624, 3132, 1744], function () {
      return e((e.s = 29566));
    }),
      (_N_E = e.O());
  },
]);
