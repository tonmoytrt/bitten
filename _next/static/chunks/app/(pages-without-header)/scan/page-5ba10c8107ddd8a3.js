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
          xmlns: "/images/icons/double-tao-logo.svg",
          
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
          xmlns: "/images/icons/double-tao-logo.svg",
          
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
