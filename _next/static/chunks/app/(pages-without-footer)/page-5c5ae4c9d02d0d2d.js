(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [50],
  {
    69248: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 79290)),
        Promise.resolve().then(n.bind(n, 72691)),
        Promise.resolve().then(n.t.bind(n, 46389, 23)),
        Promise.resolve().then(n.bind(n, 25808)),
        Promise.resolve().then(n.bind(n, 15416)),
        Promise.resolve().then(n.bind(n, 61847)),
        Promise.resolve().then(n.bind(n, 65037)),
        Promise.resolve().then(n.bind(n, 96455)),
        Promise.resolve().then(n.bind(n, 94768));
    },
    55738: function (e) {
      e.exports = { canvas: "Canvas_canvas__Khhch" };
    },
    94768: function (e, r, n) {
      "use strict";
      let t;
      n.r(r),
        n.d(r, {
          Canvas: function () {
            return u;
          },
        });
      var a = n(64618),
        o = n(27024);
      let i = new Date().getTime();
      var l = n(55738),
        s = n.n(l);
      let u = () => {
        let e = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let r = null == e ? void 0 : e.current;
            if (r)
              return (
                (function (e) {
                  var r,
                    n,
                    a,
                    o,
                    e,
                    l,
                    s,
                    u = [];
                  function f(e, r) {
                    for (var n = 0, t = 0; t < 8; t++) n += e[t] * r[t];
                    return n;
                  }
                  var c = null;
                  function v() {
                    if (null == c) {
                      var e = Math.random(),
                        r = Math.random();
                      return (
                        (c =
                          Math.sqrt(-2 * Math.log(e)) *
                          Math.cos(2 * Math.PI * r)),
                        Math.sqrt(-2 * Math.log(e)) * Math.sin(2 * Math.PI * r)
                      );
                    }
                    var n = c;
                    return (c = null), n;
                  }
                  var h = [];
                  function A() {
                    for (
                      var e, r = [[], [0], [0], [0, 1, 2]], n = 0;
                      n < r.length;
                      n++
                    ) {
                      for (var t = 0; t < r[n].length; t++) {
                        var a = r[n][t];
                        e = f(h[n], h[a]);
                        for (var o = 0; o < 8; o++) h[n][o] -= e * h[a][o];
                      }
                      e = Math.sqrt(
                        (function (e) {
                          for (var r = 0, n = 0; n < 8; n++) {
                            var t = e[n];
                            r += t * t;
                          }
                          return r;
                        })(h[n])
                      );
                      for (var o = 0; o < 8; o++) h[n][o] /= e;
                    }
                  }
                  !(function () {
                    if ("function" != typeof e.getContext)
                      throw (
                        (alert(
                          "Your browser does not support the HTML5 <canvas> element.\nThis page will not function."
                        ),
                        "canvas unsupported")
                      );
                    if (
                      (null ===
                        (l = e.getContext("webgl", { antialias: !0 })) &&
                        (l = e.getContext("experimental-webgl", {
                          antialias: !0,
                        })),
                      null === l)
                    )
                      throw (
                        (alert(
                          "Your browser does not support WebGL.\nThis page will not function."
                        ),
                        "webgl unsupported")
                      );
                    (function () {
                      function e(e, r, n, t) {
                        var a = [0, 0, 0, 0, 0, 0, 0, 0];
                        return (a[e] = n ? -2 : 2), (a[r] = t ? -2 : 2), a;
                      }
                      for (var r, n, t, a, o, i, l, s = 0; s < 8; s++)
                        for (var f = s + 1; f < 8; f++)
                          u.push(e(s, f, !1, !1)),
                            u.push(e(s, f, !1, !0)),
                            u.push(e(s, f, !0, !1)),
                            u.push(e(s, f, !0, !0));
                      for (var c = 0; c < 128; c++)
                        u.push([
                          (r = !!(1 & c)) ? -1 : 1,
                          (n = !!(2 & c)) ? -1 : 1,
                          (t = !!(4 & c)) ? -1 : 1,
                          (a = !!(8 & c)) ? -1 : 1,
                          (o = !!(16 & c)) ? -1 : 1,
                          (i = !!(32 & c)) ? -1 : 1,
                          (l = !!(64 & c)) ? -1 : 1,
                          r ^ n ^ t ^ a ^ o ^ i ^ l ? -1 : 1,
                        ]);
                      u.sort(function (e, r) {
                        for (var n = 0; n < 8; n++) {
                          if (e[n] < r[n]) return -1;
                          if (e[n] > r[n]) return 1;
                        }
                        return 0;
                      });
                    })(),
                      (function () {
                        for (var e = [], n = 0; n < u.length; n++)
                          for (var t = n + 1; t < u.length; t++)
                            8 ==
                              (function (e, r) {
                                for (var n = 0, t = 0; t < 8; t++) {
                                  var a = e[t] - r[t];
                                  n += a * a;
                                }
                                return n;
                              })(u[n], u[t]) && (e.push(n), e.push(t));
                        r = new Uint16Array(e);
                      })();
                    var c,
                      d,
                      b,
                      g,
                      p,
                      _ =
                        ((c = l).viewport(0, 0, e.width, e.height),
                        c.clearColor(0, 0, 0, 0),
                        c.enable(c.SAMPLE_COVERAGE),
                        c.enable(c.LINE_SMOOTH),
                        c.enable(c.BLEND),
                        c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA),
                        c.lineWidth(0.1),
                        (d = c.createShader(c.VERTEX_SHADER)),
                        c.shaderSource(
                          d,
                          "attribute vec2 col;\nattribute vec2 pos;\n    \n// --> Pass to Fragment Shader\nvarying vec4 variableC;\nvoid main() {\n    \n    if (col == vec2(0.1, 0)) {\n        variableC = vec4(1, 1, 1, 0.9);\n    }\n    else {\n        variableC = vec4(0, 0, 0, 0.9);\n    }\n    \n    //variableC = vec4(col, 0.8, 0.7);\n    gl_Position = vec4(pos, 1.0, 1.5);\n}"
                        ),
                        c.compileShader(d),
                        (b = c.createShader(c.FRAGMENT_SHADER)),
                        c.shaderSource(
                          b,
                          "#ifdef GL_ES\nprecision highp float;\n#endif\n// <-- Receive from Vertex Shader\nvarying vec4 variableC;\n            \nvoid main() {\ngl_FragColor = variableC;\n}"
                        ),
                        c.compileShader(b),
                        (s = c.createProgram()),
                        c.attachShader(s, d),
                        c.attachShader(s, b),
                        c.linkProgram(s),
                        c.useProgram(s),
                        (s.fs = b),
                        (s.vs = d),
                        (s.col = c.getAttribLocation(s, "col")),
                        (s.pos = c.getAttribLocation(s, "pos")),
                        (g = c.createBuffer()),
                        (p = c.createBuffer()),
                        [g, c.createBuffer(), p]);
                    !(function () {
                      (h[0] = Array(8)),
                        (h[1] = Array(8)),
                        (h[2] = Array(8)),
                        (h[3] = Array(8));
                      for (var e = 0; e < 8; e++)
                        (h[0][e] = v()),
                          (h[1][e] = v()),
                          (h[2][e] = v()),
                          (h[3][e] = v());
                      A();
                    })();
                    var R = function () {
                      let e = new Date().getTime();
                      e - i > 16.666666666666668 &&
                        ((i = e),
                        l.clear(l.COLOR_BUFFER_BIT),
                        (function () {
                          void 0 === n &&
                            ((n = new Float32Array(2 * u.length)),
                            (a = new Float32Array(4 * u.length)),
                            (o = new Float32Array(8 * r.length)));
                          for (var e = 0; e < u.length; e++) {
                            var t = f(h[0], u[e]) / 3,
                              i = f(h[1], u[e]) / 3;
                            (n[2 * e] = t),
                              (n[2 * e + 1] = i),
                              (a[2 * e + 0] = 0),
                              (a[2 * e + 1] = 0.1),
                              (a[2 * e + 2] = 0.6),
                              (a[2 * e + 3] = 0.9);
                          }
                          for (var e = 0; e < r.length; e += 2) {
                            var l = r[e],
                              s = r[e + 1];
                            (o[e] = n[l]),
                              (o[e + 1] = n[l + 1]),
                              (o[e + 2] = n[s]),
                              (o[e + 3] = n[s + 1]);
                          }
                        })(),
                        l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, _[0]),
                        l.bufferData(l.ELEMENT_ARRAY_BUFFER, r, l.STATIC_DRAW),
                        l.bindBuffer(l.ARRAY_BUFFER, _[1]),
                        l.bufferData(l.ARRAY_BUFFER, n, l.STATIC_DRAW),
                        l.vertexAttribPointer(s.pos, 2, l.FLOAT, !1, 0, 0),
                        l.enableVertexAttribArray(s.pos),
                        l.bindBuffer(l.ARRAY_BUFFER, _[2]),
                        l.bufferData(l.ARRAY_BUFFER, a, l.STATIC_DRAW),
                        l.vertexAttribPointer(s.col, 1, l.FLOAT, !1, 0, 0),
                        l.enableVertexAttribArray(s.col),
                        l.drawElements(l.LINES, r.length, l.UNSIGNED_SHORT, 0),
                        (function () {
                          for (var e = 0; e < 8; e++)
                            (h[0][e] += 0.001 * h[2][e]),
                              (h[1][e] += 0.001 * h[3][e]),
                              (h[2][e] += 0.001 * v()),
                              (h[3][e] += 0.001 * v());
                          A();
                        })()),
                        (t = window.requestAnimationFrame(R));
                    };
                    R();
                  })();
                })(r),
                () => void window.cancelAnimationFrame(t)
              );
          }, []),
          (0, a.jsx)("main", {
            className: s().canvas,
            children: (0, a.jsx)("canvas", {
              ref: e,
              width: "1500",
              height: "1500",
            }),
          })
        );
      };
    },
  },
  function (e) {
    e.O(0, [9774, 8761, 7183, 1410, 3132, 1744], function () {
      return e((e.s = 69248));
    }),
      (_N_E = e.O());
  },
]);
