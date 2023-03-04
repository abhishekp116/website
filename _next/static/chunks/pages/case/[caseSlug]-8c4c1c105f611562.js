(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [248],
  {
    6806: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/case/[caseSlug]",
        function () {
          return e(2694);
        },
      ]);
    },
    9080: function (n, t, e) {
      "use strict";
      var r = e(7297),
        i = e(5893),
        o = e(5697),
        a = e.n(o),
        s = e(5178),
        c = e(8556),
        u = e(4651);
      function d() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  color: var(--primary);\n  pointer-events: none;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 0.625rem;\n\n  ",
          " {\n    padding: 1.25rem;\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)([
          "\n  text-transform: uppercase;\n  display: inline;\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, r.Z)(["\n  display: inline;\n"]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = (0, r.Z)([
          "\n  position: relative;\n  width: 100%;\n  line-height: 0.8;\n\n  ",
          " {\n    line-height: 1.2;\n  }\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var p = s.ZP.div.withConfig({ componentId: "sc-b8ceaa09-0" })(
          d(),
          c.qk.s
        ),
        v = (0, s.ZP)(u.Z).withConfig({ componentId: "sc-b8ceaa09-1" })(l()),
        m = (0, s.ZP)(u.Z).withConfig({ componentId: "sc-b8ceaa09-2" })(f()),
        g = s.ZP.div.withConfig({ componentId: "sc-b8ceaa09-3" })(h(), c.qk.s),
        Z = function (n) {
          var t = n.title,
            e = n.description,
            r = n.className,
            o = n.renderAsTag;
          return (0, i.jsx)(p, {
            className: r,
            children: (0, i.jsxs)(g, {
              children: [
                (0, i.jsx)(v, { tag: o, variant: "l4", children: t }),
                " ",
                "\xb7",
                " ",
                (0, i.jsx)(m, { tag: "p", variant: "l3", children: e }),
              ],
            }),
          });
        };
      (Z.defaultProps = { renderAsTag: "h1" }),
        (Z.propTypes = {
          renderAsTag: a().string,
          title: a().string.isRequired,
          description: a().string.isRequired,
        }),
        (t.Z = Z);
    },
    349: function (n, t, e) {
      "use strict";
      e.d(t, {
        C: function () {
          return _;
        },
        Z: function () {
          return q;
        },
      });
      var r = e(7297),
        i = e(5893),
        o = e(7294),
        a = e(7650),
        s = e(5697),
        c = e(5178),
        u = e(1734),
        d = e(6042),
        l = e(9396),
        f = e(7423),
        h = e(3302),
        p = e(2064),
        v = e(1083),
        m = { delay: 4, duration: 1.35, ease: [0.45, 0.03, 0.13, 0.99] },
        g = document.querySelector("main"),
        Z = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : m,
            e = (0, f.v)().scrollYProgress,
            r = (0, v.Z)("s"),
            i = (0, h.J)();
          (0, o.useEffect)(
            function () {
              if (!i) {
                var o = n,
                  a = r ? 30 : 20,
                  s = [0, a, a, 0];
                if (o) {
                  var c = (0, p.j)(
                      0,
                      s,
                      (0, l.Z)((0, d.Z)({}, t), {
                        onUpdate: function (n) {
                          o.style.transform = "translate3D(0px, ".concat(
                            -n,
                            "px, 0px)"
                          );
                        },
                      })
                    ),
                    u = function () {
                      c.stop(),
                        (o.style.transform = "translate3D(0px, 0px, 0px)");
                    };
                  return (
                    e.onChange(u),
                    window.scrollY > window.innerHeight && u(),
                    function () {
                      return u();
                    }
                  );
                }
              }
            },
            [e, r, t, n, i]
          );
        },
        x = e(8700),
        w = e(9080),
        b = e(4342),
        y = e(2545);
      function P() {
        var n = (0, r.Z)([
          "\n  position: relative;\n  overflow: hidden;\n\n  height: 100vh;\n  height: 100dvh;\n\n  width: 100%;\n\n  ",
          "\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = (0, r.Z)([
          "\n  position: relative;\n\n  height: 100vh;\n  height: 100dvh;\n\n  width: 100%;\n",
        ]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  pointer-events: none; // On iOS you can drag the image instead of scrolling\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      var C = c.ZP.div.withConfig({ componentId: "sc-3920f9f9-0" })(
          P(),
          function (n) {
            var t = n.$theme;
            return (0, u.LK)(t);
          }
        ),
        T = c.ZP.div.withConfig({ componentId: "sc-3920f9f9-1" })(j()),
        I = (0, c.ZP)(b.Z).withConfig({ componentId: "sc-3920f9f9-2" })(k()),
        _ = { xs: "150vw" },
        $ = function (n) {
          var t = n.content,
            e = t.poster,
            r = t.title,
            o = t.description,
            s = t.theme,
            c = n.onInView,
            u = (0, x.FI)();
          return (
            Z(),
            (0, i.jsx)(y.Z, {
              children: (0, i.jsx)(a.df, {
                skip: !c,
                threshold: "0.9",
                onChange: function (n) {
                  return n && (null === c || void 0 === c ? void 0 : c());
                },
                children: (0, i.jsxs)(C, {
                  $theme: s,
                  children: [
                    (0, i.jsx)(I, {
                      priority: !0,
                      media: e,
                      fadeOnLoad: !1,
                      sizes: _,
                      onLoadingComplete: u,
                    }),
                    (0, i.jsx)(T, {
                      children: (0, i.jsx)(w.Z, { title: r, description: o }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      ($.defaultProps = { onInView: function () {} }),
        ($.propTypes = {
          content: s.PropTypes.object.isRequired,
          onInView: s.PropTypes.func,
        });
      var q = (0, o.memo)($);
    },
    2545: function (n, t, e) {
      "use strict";
      var r = e(6042),
        i = e(9396),
        o = e(9534),
        a = e(7297),
        s = e(5893),
        c = e(5697),
        u = e.n(c);
      function d() {
        var n = (0, a.Z)(["\n  ", "\n"]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      var l = e(5178).ZP.section.withConfig({ componentId: "sc-ceb06348-0" })(
          d(),
          function (n) {
            return !n.$disabled && "scroll-snap-align: start end;";
          }
        ),
        f = function (n) {
          var t = n.children,
            e = n.disabled,
            a = (0, o.Z)(n, ["children", "disabled"]);
          return (0, s.jsx)(
            l,
            (0, i.Z)((0, r.Z)({}, a), { $disabled: e, children: t })
          );
        };
      (f.defaultProps = { disabled: !1 }),
        (f.propTypes = { disabled: u().bool }),
        (t.Z = f);
    },
    2541: function (n, t, e) {
      "use strict";
      var r = e(6042),
        i = e(9396),
        o = e(9534),
        a = e(7297),
        s = e(5893),
        c = e(5697),
        u = e.n(c),
        d = e(5178),
        l = e(3052),
        f = e(8665),
        h = e(4651);
      function p() {
        var n = (0, a.Z)([
          "\n  display: inline-block;\n  position: relative;\n\n  :focus {\n    outline-offset: 0.25em;\n    outline: 1px dashed var(--color-black);\n  }\n\n  &:active {\n    outline: none;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var v = d.ZP.div.withConfig({ componentId: "sc-933a6b5f-0" })(p()),
        m = function (n) {
          var t = n.containerSpread,
            e = n.label,
            a = n.variant,
            c = n.className,
            u = n.link,
            d = n.dotOverwriteTheme,
            p = (0, o.Z)(n, [
              "containerSpread",
              "label",
              "variant",
              "className",
              "link",
              "dotOverwriteTheme",
            ]);
          return (0, s.jsx)(
            f.Z,
            (0, i.Z)((0, r.Z)({}, u, p), {
              children: (0, s.jsx)(
                v,
                (0, i.Z)((0, r.Z)({}, t), {
                  className: c,
                  children: (0, s.jsx)(l.ZP, {
                    dotOverwriteTheme: d,
                    children: (0, s.jsx)(h.Z, {
                      tag: "div",
                      variant: a,
                      children: e,
                    }),
                  }),
                })
              ),
            })
          );
        };
      (m.defaultProps = {
        containerSpread: {},
        label: "a",
        variant: "l2",
        link: {},
        className: null,
        dotOverwriteTheme: null,
      }),
        (m.propTypes = {
          containerSpread: u().object,
          label: u().string.isRequired,
          link: u().object.isRequired,
          className: u().any,
        }),
        (t.Z = m);
    },
    2694: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return Pe;
          },
          default: function () {
            return je;
          },
        });
      var r = e(8039),
        i = e(6042),
        o = e(828),
        a = e(5893),
        s = e(7294),
        c = e(5556),
        u = e(1163),
        d = e(6380),
        l = e(9396),
        f = e(688),
        h = function (n) {
          var t = (0, o.Z)((0, f.Z)(), 2),
            e = t[0],
            r = t[1];
          (0, s.useEffect)(
            function () {
              (null === e || void 0 === e ? void 0 : e.color) !== n &&
                r(function (t) {
                  return (0, l.Z)((0, i.Z)({}, t), { color: n });
                });
            },
            [e, null === e || void 0 === e ? void 0 : e.color, n, r]
          );
        },
        p = e(8700),
        v = e(3114),
        m = e(349),
        g = e(7568),
        Z = e(7297),
        x = e(414),
        w = e(1208),
        b = e(6513),
        y = e(3093),
        P = e(5697),
        j = e.n(P),
        k = e(5178),
        C = e(8556),
        T = {
          hidden: { clipPath: "inset(0% 100% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transitionEnd: { clipPath: void 0 },
          },
        },
        I = { duration: 3, ease: [0.55, 0.4, 0.25, 1] },
        _ = { ease: [0.36, 0.06, 0.06, 0.99], duration: 0.7 },
        $ = {
          initial: { scale: 1.05, opacity: 0.7 },
          animate: { scale: 1, opacity: 1 },
        },
        q = { initial: { opacity: 1 }, animate: { opacity: 0 } },
        S = e(4651);
      function R() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n  display: grid;\n  place-items: center;\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = (0, Z.Z)(["\n  position: absolute;\n"]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = (0, Z.Z)(["\n  opacity: 0.2;\n"]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      var N = k.ZP.div.withConfig({ componentId: "sc-80363427-0" })(R()),
        L = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-80363427-1" })(
          O()
        ),
        A = k.ZP.div.withConfig({ componentId: "sc-80363427-2" })(E()),
        V = function (n) {
          var t = n.title,
            e = n.controls;
          return (0, a.jsxs)(N, {
            children: [
              (0, a.jsx)(L, {
                "aria-hidden": "true",
                animate: e,
                variants: T,
                transition: I,
                children: (0, a.jsx)(S.Z, {
                  tag: "p",
                  variant: "b2",
                  children: t,
                }),
              }),
              (0, a.jsx)(A, {
                children: (0, a.jsx)(S.Z, {
                  tag: "p",
                  variant: "b2",
                  children: t,
                }),
              }),
            ],
          });
        };
      (V.defaultProps = { title: "" }),
        (V.propTypes = { title: P.PropTypes.string.isRequired });
      var B = V,
        M = e(7650);
      function D() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  visibility: hidden;\n  pointer-events: none;\n\n  left: 0;\n  right: 0;\n  z-index: 200;\n  width: 100%;\n\n  ",
          ";\n\n  height: ",
          ";\n",
        ]);
        return (
          (D = function () {
            return n;
          }),
          n
        );
      }
      var z = (0, k.ZP)(M.df).withConfig({ componentId: "sc-8d42620a-0" })(
          D(),
          function (n) {
            return "top" === n.$position ? "top: 0;" : "bottom: 0;";
          },
          function (n) {
            return n.$threshold;
          }
        ),
        Y = function (n) {
          var t = n.position,
            e = n.threshold,
            r = n.onChange;
          return (0, a.jsx)(z, { $position: t, $threshold: e, onChange: r });
        };
      (Y.defaultProps = {
        position: "top",
        threshold: "50vh",
        onChange: function () {},
      }),
        (Y.propTypes = {
          position: j().oneOf(["top", "bottom"]),
          threshold: j().string,
          onChange: j().func,
        });
      var W = Y,
        F = e(4342),
        X = e(2545),
        H = e(2541);
      function J() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  cursor: pointer;\n  z-index: -1;\n\n  height: 100vh;\n",
        ]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = (0, Z.Z)([
          "\n  width: 100%;\n  height: 200%;\n\n  color: var(--color-white);\n  background-color: var(--color-black);\n",
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function K() {
        var n = (0, Z.Z)([
          "\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  height: 100lvh;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  ",
          " {\n    gap: 2.688rem;\n  }\n",
        ]);
        return (
          (K = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  height: 100%;\n  width: 100%;\n\n  img {\n    -webkit-user-drag: none;\n    pointer-events: none;\n    user-select: none;\n  }\n",
        ]);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function Q() {
        var n = (0, Z.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n",
        ]);
        return (
          (Q = function () {
            return n;
          }),
          n
        );
      }
      var nn = (0, k.ZP)(X.Z).withConfig({ componentId: "sc-5296da2d-0" })(J()),
        tn = k.ZP.div.withConfig({ componentId: "sc-5296da2d-1" })(G()),
        en = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-5296da2d-2" })(
          K(),
          C.qk.s
        ),
        rn = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-5296da2d-3" })(
          U()
        ),
        on = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-5296da2d-4" })(
          Q()
        ),
        an = function (n) {
          var t = n.containerSpread,
            e = n.title,
            r = n.slug,
            o = n.poster,
            c = n.onInView,
            d = n.onBeforeRouteChange,
            f = (0, s.useRef)(null),
            h = (0, u.useRouter)(),
            p = (0, b._)("initial"),
            v = (0, b._)("initial"),
            Z = (0, b._)("initial"),
            w = (function () {
              var n = (0, g.Z)(function () {
                return (0, x.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return h.isPreview
                        ? [2]
                        : (null === d || void 0 === d || d(),
                          [
                            4,
                            Promise.all([
                              p.start("animate"),
                              v.start("animate"),
                            ]),
                          ]);
                    case 1:
                      return n.sent(), h.push(r), [2];
                  }
                });
              });
              return function () {
                return n.apply(this, arguments);
              };
            })(),
            P = (function () {
              var n = (0, g.Z)(function (n) {
                return (0, x.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        null === c || void 0 === c || c(n),
                        n ? [4, Z.start("visible")] : [3, 2]
                      );
                    case 1:
                      return t.sent(), w(), [3, 3];
                    case 2:
                      Z.start("hidden"), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            j = function (n) {
              n.preventDefault(), w();
            };
          return (0, a.jsx)(nn, {
            onClick: j,
            children: (0, a.jsxs)(y.A, {
              transition: _,
              children: [
                (0, a.jsx)(tn, {
                  ref: f,
                  children: (0, a.jsxs)(
                    en,
                    (0, l.Z)((0, i.Z)({}, t), {
                      children: [
                        (0, a.jsx)(rn, {
                          animate: p,
                          variants: $,
                          initial: "initial",
                          children: (0, a.jsx)(F.Z, { media: o, sizes: m.C }),
                        }),
                        (0, a.jsxs)(on, {
                          animate: v,
                          variants: q,
                          initial: "initial",
                          children: [
                            (0, a.jsx)(B, { title: e, controls: Z }),
                            (0, a.jsx)(H.Z, {
                              label: "Explore",
                              href: r,
                              onClick: j,
                            }),
                          ],
                        }),
                      ],
                    })
                  ),
                }),
                (0, a.jsx)(W, {
                  position: "bottom",
                  threshold: "25vh",
                  onChange: P,
                }),
              ],
            }),
          });
        };
      (an.defaultProps = {
        index: 0,
        title: "",
        slug: "/",
        poster: [],
        onInView: null,
        onBeforeRouteChange: null,
      }),
        (an.propTypes = {
          index: j().number,
          title: j().string,
          slug: j().string,
          poster: j().array,
          onInView: j().func,
          onBeforeRouteChange: j().func,
        });
      var sn = an,
        cn = e(1734);
      function un() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n\n  height: 100vh;\n  height: 100dvh;\n\n  width: 100%;\n  display: grid;\n  place-items: center;\n\n  ",
          "\n",
        ]);
        return (
          (un = function () {
            return n;
          }),
          n
        );
      }
      function dn() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n\n  margin: 1.25rem;\n  gap: 2.19rem;\n  max-width: 60ch;\n\n  ",
          " {\n    gap: 2.5rem;\n  }\n",
        ]);
        return (
          (dn = function () {
            return n;
          }),
          n
        );
      }
      function ln() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  opacity: 0.3;\n",
        ]);
        return (
          (ln = function () {
            return n;
          }),
          n
        );
      }
      var fn = k.ZP.div.withConfig({ componentId: "sc-6e9e20ea-0" })(
          un(),
          function (n) {
            var t = n.$background,
              e = n.$textStyle;
            return "\n    background: "
              .concat(t, ";\n    color: ")
              .concat("dark" === e ? cn.DM.black : cn.DM.white, ";\n\n    ")
              .concat(
                "blend" === e &&
                  "\n      ".concat(
                    S.Z,
                    ": {\n        mix-blend-mode: difference;\n      }\n    "
                  ),
                "\n  "
              );
          }
        ),
        hn = k.ZP.div.withConfig({ componentId: "sc-6e9e20ea-1" })(
          dn(),
          C.qk.s
        ),
        pn = k.ZP.div.withConfig({ componentId: "sc-6e9e20ea-2" })(ln()),
        vn = function (n) {
          var t = n.containerSpread,
            e = n.background,
            r = n.title,
            o = n.text,
            s = n.media,
            c = n.text_style,
            u = s && s.length > 0;
          return (0, a.jsx)(X.Z, {
            children: (0, a.jsxs)(
              fn,
              (0, l.Z)((0, i.Z)({}, t), {
                $background: e,
                $textStyle: c,
                children: [
                  u &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(F.Z, { media: s }),
                        (0, a.jsx)(pn, {}),
                      ],
                    }),
                  (0, a.jsxs)(hn, {
                    children: [
                      (0, a.jsx)(S.Z, {
                        variant: "l2",
                        tag: "h2",
                        children: r,
                      }),
                      (0, a.jsx)(S.Z, { variant: "b4", tag: "p", children: o }),
                    ],
                  }),
                ],
              })
            ),
          });
        };
      (vn.defaultProps = {
        title: "Next chapter",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        background: cn.DM["off-white"],
        text_style: "dark",
        index: -1,
      }),
        (vn.propTypes = {
          background: P.PropTypes.string,
          title: P.PropTypes.string.isRequired,
          text: P.PropTypes.string.isRequired,
          text_style: P.PropTypes.oneOf(["dark", "light", "blend"]),
          media: P.PropTypes.arrayOf(P.PropTypes.object),
          index: P.PropTypes.number,
        });
      var mn = vn,
        gn = e(7423),
        Zn = e(8785),
        xn = e(3302),
        wn = e(578),
        bn = function (n) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 300,
            e = arguments.length > 2 ? arguments[2] : void 0,
            r = e.disabled,
            i = e.floor,
            o = e.ceil,
            a = (0, xn.J)();
          return r || a ? n : (0, wn.H)(n, [i, o], [-t, t]);
        },
        yn = e(7786);
      function Pn() {
        var n = (0, Z.Z)([
          '\n  a {\n    position: relative;\n    display: inline-block;\n\n    &::after {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      content: "";\n      background-color: currentColor;\n      transform: scaleX(1);\n      transform-origin: left;\n      transition: 0.35s transform ease-in-out;\n      height: 1px;\n    }\n\n    ',
          '\n  }\n\n  i {\n    font-family: "RecklessNeue-BookItalic";\n  }\n',
        ]);
        return (
          (Pn = function () {
            return n;
          }),
          n
        );
      }
      var jn = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-52977a96-0" })(
          Pn(),
          (0, C.Mr)(
            "\n        &::after {\n          transform: scaleX(0);\n          transform-origin: right;\n        }\n      "
          )
        ),
        kn = function (n) {
          var t = n.content;
          return (0, a.jsx)(jn, {
            tag: "div",
            variant: "b14",
            children: (0, yn.sY)(t),
          });
        };
      (kn.defaultProps = { content: {} }),
        (kn.propTypes = {
          content: P.PropTypes.oneOfType([
            P.PropTypes.string,
            P.PropTypes.object,
          ]),
        });
      var Cn = kn;
      function Tn() {
        var n = (0, Z.Z)([
          "\n    left: ",
          ";\n\n    ",
          " {\n      left: ",
          ";\n    }\n\n    ",
          " {\n      left: ",
          ";\n    }\n  ",
        ]);
        return (
          (Tn = function () {
            return n;
          }),
          n
        );
      }
      function In() {
        var n = (0, Z.Z)([
          "\n    right: ",
          ";\n\n    ",
          " {\n      right: ",
          ";\n    }\n\n    ",
          " {\n      right: ",
          ";\n    }\n  ",
        ]);
        return (
          (In = function () {
            return n;
          }),
          n
        );
      }
      function _n() {
        var n = (0, Z.Z)([
          "\n    mix-blend-mode: exclusion;\n    color: var(--color-white);\n  ",
        ]);
        return (
          (_n = function () {
            return n;
          }),
          n
        );
      }
      function $n() {
        var n = (0, Z.Z)(["\n    color: var(--color-white);\n  "]);
        return (
          ($n = function () {
            return n;
          }),
          n
        );
      }
      function qn() {
        var n = (0, Z.Z)(["\n    color: var(--color-black);\n  "]);
        return (
          (qn = function () {
            return n;
          }),
          n
        );
      }
      function Sn() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  bottom: 2.125rem;\n  width: 100%;\n  max-width: 13rem;\n\n  ",
          " {\n    bottom: 3.125rem;\n    max-width: 16.25rem;\n  }\n\n  ",
          ";\n  ",
          ";\n",
        ]);
        return (
          (Sn = function () {
            return n;
          }),
          n
        );
      }
      function Rn() {
        var n = (0, Z.Z)(["\n  margin-bottom: 0.435rem;\n"]);
        return (
          (Rn = function () {
            return n;
          }),
          n
        );
      }
      var On = {
          left: (0, k.iv)(
            Tn(),
            (0, Zn.EV)(1),
            C.qk.s,
            (0, Zn.BT)(1),
            C.qk.m,
            (0, Zn.hl)(1)
          ),
          right: (0, k.iv)(
            In(),
            (0, Zn.EV)(1),
            C.qk.s,
            (0, Zn.BT)(1),
            C.qk.m,
            (0, Zn.hl)(1)
          ),
        },
        En = {
          blend: (0, k.iv)(_n()),
          light: (0, k.iv)($n()),
          dark: (0, k.iv)(qn()),
        },
        Nn = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-5857120a-0" })(
          Sn(),
          C.qk.s,
          function (n) {
            var t = n.$layout;
            return On[t];
          },
          function (n) {
            var t = n.$theme;
            return En[t];
          }
        ),
        Ln = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-5857120a-1" })(Rn()),
        An = function (n) {
          var t = n.containerSpread,
            e = n.layout,
            r = n.theme,
            o = n.title,
            c = n.text,
            u = (0, s.useRef)(null),
            d = (0, gn.v)({ target: u, axis: "y" }).scrollYProgress,
            f = bn(d, 30, { floor: 0.66 });
          return (0, a.jsxs)(
            Nn,
            (0, l.Z)((0, i.Z)({}, t), {
              ref: u,
              $layout: e,
              $theme: r,
              style: { y: f },
              children: [
                (0, a.jsx)(Ln, { tag: "h2", children: o }),
                (0, a.jsx)(Cn, { content: c }),
              ],
            })
          );
        };
      (An.defaultProps = { layout: "right", theme: "light" }),
        (An.propTypes = {
          title: P.PropTypes.string,
          text: P.PropTypes.oneOfType([P.PropTypes.string, P.PropTypes.object]),
          layout: P.PropTypes.string,
          theme: P.PropTypes.string,
        });
      var Vn = An;
      function Bn() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n  height: 100vh;\n  height: 100dvh;\n  width: 100%;\n\n  background: ",
          ";\n  padding: ",
          ";\n\n  ",
          " {\n    padding: ",
          ";\n  }\n",
        ]);
        return (
          (Bn = function () {
            return n;
          }),
          n
        );
      }
      var Mn = k.ZP.div.withConfig({ componentId: "sc-f294b673-0" })(
          Bn(),
          function (n) {
            return n.$background;
          },
          function (n) {
            return n.$passePartout ? "1.25rem" : "0";
          },
          C.qk.s,
          function (n) {
            return n.$passePartout ? "1.875rem" : "0";
          }
        ),
        Dn = (0, c.e)({ section_caption: Vn }),
        zn = function (n) {
          var t = n.containerSpread,
            e = n.media,
            r = n.contain,
            o = n.background_color,
            s = n.section_caption;
          return (0, a.jsx)(X.Z, {
            children: (0, a.jsxs)(
              Mn,
              (0, l.Z)((0, i.Z)({}, t), {
                $passePartout: r,
                $background: o,
                children: [
                  (0, a.jsx)(F.Z, {
                    media: e,
                    sizes: { s: "200vw", m: "100vw" },
                    objectFit: r ? "contain" : "cover",
                  }),
                  (0, a.jsx)(Dn, { items: s }),
                ],
              })
            ),
          });
        };
      (zn.defaultProps = {
        background_color: "var(--color-off-white)",
        contain: !1,
      }),
        (zn.propTypes = {
          media: P.PropTypes.array,
          contain: P.PropTypes.bool,
          background_color: P.PropTypes.string,
          section_caption: P.PropTypes.array,
        });
      var Yn = zn,
        Wn = e(1083),
        Fn = e(1915),
        Xn = function () {
          var n = (0, s.useState)(null),
            t = n[0],
            e = n[1];
          return {
            videoRatio: t,
            onLoadedMetadata: function (n) {
              var t = n.target,
                r = t.videoWidth,
                i = t.videoHeight;
              e(r / i);
            },
          };
        };
      function Hn() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: ",
          ";\n  text-align: ",
          ";\n\n  color: ",
          ";\n",
        ]);
        return (
          (Hn = function () {
            return n;
          }),
          n
        );
      }
      var Jn = k.ZP.div.withConfig({ componentId: "sc-7325a2ef-0" })(
          Hn(),
          function (n) {
            return n.$hasLink ? "2.05rem" : "0.625rem";
          },
          function (n) {
            return n.$hasLink ? "center" : "left";
          },
          function (n) {
            return n.$color;
          }
        ),
        Gn = (0, c.e)({ text_link: H.Z }),
        Kn = function (n) {
          var t = n.link,
            e = n.description,
            r = n.color;
          return (0, a.jsxs)(Jn, {
            $color: r,
            $hasLink: null === t || void 0 === t ? void 0 : t[0],
            children: [
              (0, a.jsx)(Gn, { items: t }),
              (0, a.jsx)(Cn, { content: e }),
            ],
          });
        };
      (Kn.defaultProps = { link: [], color: "#00000" }),
        (Kn.propTypes = {
          link: P.PropTypes.array,
          description: P.PropTypes.oneOfType([
            P.PropTypes.string,
            P.PropTypes.object,
          ]),
          color: P.PropTypes.string,
        });
      var Un = Kn;
      function Qn() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  ",
          "\n",
        ]);
        return (
          (Qn = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n\n  -webkit-user-drag: none;\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      var tt = { type: "tween", duration: 0.3, ease: e(5137).L[1] },
        et = {
          initial: { x: 0, scale: 1, transition: tt },
          animate: function (n) {
            return { scale: 1.3, x: n, transition: tt };
          },
        },
        rt = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-c64920ef-0" })(
          Qn(),
          function (n) {
            return n.$isZoomed && "z-index: 1;";
          }
        ),
        it = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-c64920ef-1" })(
          nt()
        ),
        ot = function (n) {
          var t = n.dimensions,
            e = n.children,
            r = n.isActive,
            i = t && t.width,
            o = (0, Wn.Z)("s"),
            c = (0, Wn.Z)("m"),
            u = !o && !c && r,
            l = (0, s.useState)("left"),
            f = l[0],
            h = l[1],
            p = (0, s.useContext)(Fn.VE),
            v = p.currentZoomed,
            m = p.setCurrentZoomed,
            Z = (0, s.useRef)(),
            w = (0, s.useRef)(),
            b = (0, s.useState)(!0),
            y = b[0],
            P = b[1],
            j = w.current === (null === v || void 0 === v ? void 0 : v.current),
            k =
              "center" === f
                ? 0
                : "left" === f
                ? Math.abs(i / 25) || 100
                : -Math.abs(i / 25) || -100,
            C = {
              right: isNaN(i) ? 125 : Math.abs(i / 25),
              left: isNaN(i) ? -125 : -Math.abs(i / 25),
            };
          return (0, a.jsx)(rt, {
            ref: Z,
            $isZoomed: j,
            children: (0, a.jsx)(it, {
              ref: w,
              drag: j && "x",
              onClick: function (n) {
                var t,
                  e =
                    w.current ===
                    (null === v || void 0 === v ? void 0 : v.current);
                if (e) h(void 0);
                else {
                  var r = n.target.getBoundingClientRect(),
                    i = {
                      start: w.current.clientWidth / 3,
                      end: w.current.clientWidth - w.current.clientWidth / 3,
                    },
                    o =
                      (t = n.clientX - r.left) > i.start && t < i.end
                        ? "center"
                        : t > i.end
                        ? "right"
                        : t < i.start
                        ? "left"
                        : void 0;
                  h(o);
                }
                return (
                  u &&
                  y &&
                  m(function () {
                    if (!e) return w;
                  })
                );
              },
              dragConstraints: C,
              animate: j ? "animate" : { transform: "none" },
              variants: et,
              custom: k,
              onViewportLeave: function () {
                m(void 0);
              },
              onDragEnd: (0, g.Z)(function () {
                return (0, x.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return P(!1), [4, (0, d.g)(200)];
                    case 1:
                      return n.sent(), P(!0), [2];
                  }
                });
              }),
              children: e,
            }),
          });
        };
      (ot.defaultProps = { children: null, isActive: !1 }),
        (ot.propTypes = {
          dimensions: j().object,
          children: j().node,
          isActive: j().bool,
        });
      var at = ot,
        st = e(1482);
      function ct() {
        var n = (0, Z.Z)([
          "\n  width: ",
          ";\n  margin: auto;\n\n  ",
          " {\n    width: ",
          ";\n  }\n\n  ",
          " {\n    width: ",
          ";\n  }\n",
        ]);
        return (
          (ct = function () {
            return n;
          }),
          n
        );
      }
      function ut() {
        var n = (0, Z.Z)([
          "\n  width: ",
          ";\n  margin: 0 auto;\n\n  ",
          " {\n    width: ",
          ";\n  }\n\n  ",
          " {\n    width: ",
          ";\n  }\n",
        ]);
        return (
          (ut = function () {
            return n;
          }),
          n
        );
      }
      function dt() {
        var n = (0, Z.Z)([
          "\n  text-align: center;\n  max-width: 100%;\n\n  ",
          ";\n",
        ]);
        return (
          (dt = function () {
            return n;
          }),
          n
        );
      }
      function lt() {
        var n = (0, Z.Z)([
          "\n  overflow: hidden;\n  width: 100%;\n\n  transition: box-shadow 0.1s;\n  border-radius: ",
          ';\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    ',
          ";\n  }\n\n  ",
          " {\n    ",
          ";\n  }\n",
        ]);
        return (
          (lt = function () {
            return n;
          }),
          n
        );
      }
      var ft = (0, k.iv)(
          ut(),
          (0, Zn.EV)(10),
          C.qk.s,
          (0, Zn.BT)(10),
          C.qk.m,
          (0, Zn.hl)(10)
        ),
        ht = function (n, t) {
          return n || t
            ? (function (n) {
                return (0, k.iv)(
                  ct(),
                  n ? "100%" : (0, Zn.EV)(12),
                  C.qk.s,
                  n ? "85%" : (0, Zn.BT)(12),
                  C.qk.m,
                  n ? (0, Zn.hl)(35) : (0, Zn.hl)(10)
                );
              })(t)
            : t
            ? void 0
            : ft;
        },
        pt = k.ZP.div.withConfig({ componentId: "sc-b7e4ed51-0" })(
          dt(),
          function (n) {
            var t = n.$isSingleItem,
              e = n.$isLandscape;
            return ht(t, e);
          }
        ),
        vt = k.ZP.div.withConfig({ componentId: "sc-b7e4ed51-1" })(
          lt(),
          function (n) {
            return n.$rounded ? "5px" : "0";
          },
          function (n) {
            var t = n.$shadow,
              e = n.$updateShadow;
            return t ? (e ? st.sZ : st.mh) : null;
          },
          C.qk.s,
          function (n) {
            return n.$shadow && st.mh;
          }
        ),
        mt = {
          landscape: {
            1: { s: "85vw", m: "85vw", l: "70vw" },
            2: { s: "90vw", m: "90vw", l: "46vw" },
            3: { s: "90vw", m: "90vw", l: "46vw" },
          },
          portrait: {
            1: { s: "63vw", m: "36vw", l: "20vw" },
            2: { s: "63vw", m: "36vw", l: "20vw" },
            3: { s: "63vw", m: "36vw", l: "20vw" },
          },
        },
        gt = function (n, t) {
          return mt[t ? "landscape" : "portrait"][Math.min(n, 3)];
        },
        Zt = (0, c.e)({ caption: Un }),
        xt = function (n) {
          var t,
            e,
            r,
            o,
            c,
            u,
            d,
            f = n.media,
            h = n.shadow,
            p = n.caption,
            v = n.containerSpread,
            m = n.itemsLength,
            g = n.totalItems,
            Z = n.doubleColumn,
            x = n.updateShadow,
            w = Xn(),
            b = w.videoRatio,
            y = w.onLoadedMetadata,
            P =
              "video" ===
              (null === f ||
              void 0 === f ||
              null === (t = f[0]) ||
              void 0 === t ||
              null === (e = t.asset) ||
              void 0 === e
                ? void 0
                : e.type),
            j =
              ((null === f ||
              void 0 === f ||
              null === (r = f[0]) ||
              void 0 === r ||
              null === (o = r.asset) ||
              void 0 === o ||
              null === (c = o.dimensions) ||
              void 0 === c
                ? void 0
                : c.ratio) || b) > 1,
            k =
              null === f ||
              void 0 === f ||
              null === (u = f[0]) ||
              void 0 === u ||
              null === (d = u.asset) ||
              void 0 === d
                ? void 0
                : d.dimensions,
            C = (0, Wn.Z)("s"),
            T = C ? s.Fragment : at;
          return (0, a.jsxs)(
            pt,
            (0, l.Z)((0, i.Z)({}, v), {
              $isSingleItem: 1 === m,
              $isLandscape: !Z && j,
              children: [
                (0, a.jsx)(
                  T,
                  (0, l.Z)((0, i.Z)({}, !C && { dimensions: k, isActive: j }), {
                    children: (0, a.jsx)(vt, {
                      $shadow: h,
                      $updateShadow: x && x,
                      $rounded: !Z && P,
                      children: (0, a.jsx)(F.Z, {
                        media: f,
                        layout: "responsive",
                        sizes: gt(g, j),
                        onLoadedMetadata: y,
                      }),
                    }),
                  })
                ),
                (0, a.jsx)(Zt, { items: p }),
              ],
            })
          );
        };
      function wt() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n  position: relative;\n  min-height: 100vh;\n  min-height: 100dvh;\n  overflow: hidden;\n\n  padding: ",
          ";\n\n  ",
          ";\n\n  ",
          ";\n\n  ",
          " {\n    padding: 0;\n  }\n",
        ]);
        return (
          (wt = function () {
            return n;
          }),
          n
        );
      }
      function bt() {
        var n = (0, Z.Z)([
          "\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (bt = function () {
            return n;
          }),
          n
        );
      }
      function yt() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n\n  gap: ",
          ";\n  padding: 0 ",
          ";\n\n  ",
          " {\n    gap: ",
          ";\n    padding: 0 ",
          ";\n  }\n\n  ",
          " {\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(0, 1fr);\n    align-items: center;\n\n    gap: ",
          ";\n    padding: 0 ",
          ";\n  }\n",
        ]);
        return (
          (yt = function () {
            return n;
          }),
          n
        );
      }
      var Pt = k.ZP.div.withConfig({ componentId: "sc-f2a96c3a-0" })(
          wt(),
          function (n) {
            return n.$hasCaption ? "5rem 0 10rem" : "5rem 0";
          },
          function (n) {
            var t = n.$backgroundColor;
            return t && "background-color: ".concat(t);
          },
          function (n) {
            var t = n.$hideOverflow;
            return "overflow-x: ".concat(t ? "scroll" : "hidden");
          },
          C.qk.m
        ),
        jt = (0, k.ZP)(F.Z).withConfig({ componentId: "sc-f2a96c3a-1" })(bt()),
        kt = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-f2a96c3a-2" })(
          yt(),
          (0, Zn.EV)(3),
          (0, Zn.EV)(1.5),
          C.qk.s,
          (0, Zn.BT)(3),
          (0, Zn.BT)(1.5),
          C.qk.m,
          (0, Zn.hl)(1),
          (0, Zn.hl)(1.5)
        ),
        Ct = (0, c.e)({ splitscreen_column_item: xt }),
        Tt = {
          hidden: { y: 15 },
          show: {
            y: 0,
            transition: { type: "tween", duration: 0.6, staggerChildren: 10 },
          },
        },
        It = function (n) {
          var t = n.background_color,
            e = n.background_image,
            r = n.items,
            o = n.containerSpread,
            c = n.hasCaption,
            u = n.totalColumns,
            d = n.totalItems,
            f = n.disabled,
            h = n.hide_on_mobile,
            p = null === r || void 0 === r ? void 0 : r.length,
            v = (0, s.useState)(!1),
            m = v[0],
            g = v[1],
            Z = (0, M.YD)({ threshold: 0.6, triggerOnce: !0 }),
            x = Z.itemsWrapperRef,
            w = Z.inView;
          return !(0, Wn.Z)("m") && h
            ? null
            : (0, a.jsx)(Fn.VE.Provider, {
                value: { currentZoomed: m, setCurrentZoomed: g },
                children: (0, a.jsx)(X.Z, {
                  disabled: f,
                  children: (0, a.jsxs)(
                    Pt,
                    (0, l.Z)((0, i.Z)({}, o), {
                      $backgroundColor: t,
                      $hasCaption: c,
                      $hideOverflow: !!m,
                      children: [
                        e &&
                          (0, a.jsx)(jt, {
                            media: e,
                            sizes: { s: "200vw", m: "".concat(150 / u, "vw") },
                          }),
                        (0, a.jsx)(kt, {
                          ref: x,
                          animate: w ? "show" : "hidden",
                          variants: Tt,
                          children: (0, a.jsx)(Ct, {
                            items: r,
                            itemsLength: p,
                            totalItems: d,
                            doubleColumn: u > 1,
                            updateShadow: m && m,
                          }),
                        }),
                      ],
                    })
                  ),
                }),
              });
        };
      function _t() {
        var n = (0, Z.Z)([
          "\n  position: relative;\n  width: 100%;\n\n  ",
          " {\n    display: block;\n  }\n",
        ]);
        return (
          (_t = function () {
            return n;
          }),
          n
        );
      }
      function $t() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n  min-height: 100vh;\n  min-height: 100dvh;\n\n  ",
          " {\n    grid-auto-flow: column;\n    grid-auto-columns: minmax(0, 1fr);\n  }\n",
        ]);
        return (
          ($t = function () {
            return n;
          }),
          n
        );
      }
      var qt = k.ZP.div.withConfig({ componentId: "sc-db70181f-0" })(
          _t(),
          C.qk.m
        ),
        St = k.ZP.div.withConfig({ componentId: "sc-db70181f-1" })(
          $t(),
          C.qk.m
        ),
        Rt = (0, c.e)({ splitscreen_column: It }),
        Ot = (0, c.e)({ section_caption: Vn }),
        Et = function (n) {
          var t = n.columns,
            e = n.totalItems,
            r = n.section_caption,
            s = n.containerSpread,
            c = (0, o.Z)(
              (function (n) {
                var t = (0, Wn.Z)("m");
                return [
                  !t,
                  n.map(function (n) {
                    return (0, l.Z)((0, i.Z)({}, n), { disabled: t });
                  }),
                ];
              })(t),
              2
            ),
            u = c[0],
            d = c[1];
          return (0, a.jsx)(X.Z, {
            disabled: u,
            children: (0, a.jsx)(
              qt,
              (0, l.Z)((0, i.Z)({}, s), {
                children: (0, a.jsxs)(St, {
                  children: [
                    (0, a.jsx)(Rt, {
                      items: d,
                      hasCaption:
                        0 !== (null === r || void 0 === r ? void 0 : r.length),
                      totalColumns: t.length,
                      totalItems: e,
                    }),
                    (0, a.jsx)(Ot, { items: r }),
                  ],
                }),
              })
            ),
          });
        };
      Et.propTypes = {
        columns: P.PropTypes.array,
        section_caption: P.PropTypes.array,
      };
      var Nt = Et;
      function Lt() {
        var n = (0, Z.Z)(["\n  margin-bottom: 0.375rem;\n"]);
        return (
          (Lt = function () {
            return n;
          }),
          n
        );
      }
      function At() {
        var n = (0, Z.Z)(["\n  max-width: 30ch;\n"]);
        return (
          (At = function () {
            return n;
          }),
          n
        );
      }
      function Vt() {
        var n = (0, Z.Z)(["\n  display: inline;\n"]);
        return (
          (Vt = function () {
            return n;
          }),
          n
        );
      }
      function Bt() {
        var n = (0, Z.Z)([
          "\n  list-style: none;\n\n  ",
          " + ",
          '::before {\n    content: " \xb7 ";\n  }\n',
        ]);
        return (
          (Bt = function () {
            return n;
          }),
          n
        );
      }
      var Mt = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-740b555a-0" })(
          Lt()
        ),
        Dt = (0, k.ZP)(w.m.div).withConfig({ componentId: "sc-740b555a-1" })(
          At()
        ),
        zt = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-740b555a-2" })(Vt()),
        Yt = k.ZP.ul.withConfig({ componentId: "sc-740b555a-3" })(Bt(), zt, zt),
        Wt = (0, c.e)({
          summary_tag: function (n) {
            var t = n.id,
              e = n.tag,
              r = n.containerSpread;
            return (0, a.jsx)(
              zt,
              (0, l.Z)((0, i.Z)({ variant: "b14", tag: "li" }, r), {
                children: e,
              }),
              t
            );
          },
        }),
        Ft = function (n) {
          var t = n.heading,
            e = n.tags,
            r = n.containerSpread,
            o = (0, s.useRef)(null),
            c = (0, gn.v)({ target: o, axis: "y" }).scrollYProgress,
            u = bn(c, 30, { floor: 0.66 });
          return (0, a.jsxs)(
            Dt,
            (0, l.Z)((0, i.Z)({}, r), {
              ref: o,
              style: { y: u },
              children: [
                (0, a.jsx)(Mt, { variant: "l1", tag: "h3", children: t }),
                (0, a.jsx)(Yt, { children: (0, a.jsx)(Wt, { items: e }) }),
              ],
            })
          );
        };
      Ft.propTypes = {
        heading: P.PropTypes.string.isRequired,
        tags: P.PropTypes.arrayOf(P.PropTypes.object).isRequired,
      };
      var Xt = Ft;
      function Ht() {
        var n = (0, Z.Z)([
          "\n  width: 100%;\n  background-color: ",
          ";\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n\n  ",
          " {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n",
        ]);
        return (
          (Ht = function () {
            return n;
          }),
          n
        );
      }
      function Jt() {
        var n = (0, Z.Z)(["\n  max-width: 22ch;\n"]);
        return (
          (Jt = function () {
            return n;
          }),
          n
        );
      }
      function Gt() {
        var n = (0, Z.Z)([
          "\n  max-width: 40ch;\n\n  p + p {\n    margin-top: 1ch;\n  }\n",
        ]);
        return (
          (Gt = function () {
            return n;
          }),
          n
        );
      }
      function Kt() {
        var n = (0, Z.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 4.5rem 1.125rem;\n\n  min-height: 100vh;\n  min-height: 100dvh;\n\n  ",
          " {\n    height: 50%;\n    min-height: 50vh;\n\n    padding: 4.75rem 1.875rem 3.25rem;\n  }\n\n  ",
          " {\n    height: 100%;\n    min-height: 100vh;\n  }\n",
        ]);
        return (
          (Kt = function () {
            return n;
          }),
          n
        );
      }
      function Ut() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n  grid-auto-rows: min-content;\n  gap: 1.25rem;\n  width: 100%;\n\n  ",
          " {\n    gap: 1.125rem;\n  }\n",
        ]);
        return (
          (Ut = function () {
            return n;
          }),
          n
        );
      }
      function Qt() {
        var n = (0, Z.Z)([
          "\n  margin-top: 2.063rem;\n  display: flex;\n  gap: 2.875rem;\n\n  ",
          " {\n    margin-top: 1.5rem;\n    gap: 4.25rem;\n  }\n",
        ]);
        return (
          (Qt = function () {
            return n;
          }),
          n
        );
      }
      function ne() {
        var n = (0, Z.Z)([
          "\n  background: ",
          ";\n  height: 100%;\n  min-height: 100vh;\n  min-height: 100dvh;\n  width: 100%;\n\n  ",
          " {\n    height: 50%;\n    min-height: 50vh;\n  }\n\n  ",
          " {\n    height: 100%;\n    min-height: 100vh;\n  }\n",
        ]);
        return (
          (ne = function () {
            return n;
          }),
          n
        );
      }
      function te() {
        var n = (0, Z.Z)([
          "\n  display: grid;\n  grid-auto-rows: min-content;\n\n  margin-top: 3.375rem;\n  gap: 2.625rem;\n  width: 100%;\n\n  ",
          " {\n    margin-top: 0;\n    place-items: flex-start;\n    grid-template-columns: repeat(2, 1fr);\n  }\n",
        ]);
        return (
          (te = function () {
            return n;
          }),
          n
        );
      }
      var ee = k.ZP.div.withConfig({ componentId: "sc-fd3c5a65-0" })(
          Ht(),
          function (n) {
            return n.$background;
          },
          C.qk.m
        ),
        re = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-fd3c5a65-1" })(Jt()),
        ie = (0, k.ZP)(S.Z).withConfig({ componentId: "sc-fd3c5a65-2" })(Gt()),
        oe = k.ZP.div.withConfig({ componentId: "sc-fd3c5a65-3" })(
          Kt(),
          C.qk.s,
          C.qk.m
        ),
        ae = k.ZP.div.withConfig({ componentId: "sc-fd3c5a65-4" })(
          Ut(),
          C.qk.s
        ),
        se = k.ZP.ul.withConfig({ componentId: "sc-fd3c5a65-5" })(Qt(), C.qk.s),
        ce = k.ZP.div.withConfig({ componentId: "sc-fd3c5a65-6" })(
          ne(),
          cn.DM.white,
          C.qk.s,
          C.qk.m
        ),
        ue = k.ZP.ul.withConfig({ componentId: "sc-fd3c5a65-7" })(te(), C.qk.s),
        de = (0, c.e)({ summary: Xt }),
        le = (0, c.e)({ text_link: H.Z }),
        fe = function (n) {
          var t = n.containerSpread,
            e = n.title,
            r = n.text,
            o = n.background,
            s = n.media,
            c = n.summaries,
            u = n.links,
            d = (0, Wn.Z)("s");
          return (0, a.jsx)(X.Z, {
            disabled: !d,
            children: (0, a.jsxs)(
              ee,
              (0, l.Z)((0, i.Z)({}, t), {
                $background: o,
                children: [
                  (0, a.jsx)(X.Z, {
                    disabled: d,
                    children: (0, a.jsxs)(oe, {
                      children: [
                        (0, a.jsxs)(ae, {
                          children: [
                            (0, a.jsx)(re, {
                              variant: "l1",
                              tag: "h2",
                              children: e,
                            }),
                            (0, a.jsx)(ie, {
                              variant: "b4",
                              tag: "div",
                              children: (0, yn.sY)(r),
                            }),
                            (0, a.jsx)(se, {
                              children: (0, a.jsx)(le, { items: u }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(ue, {
                          children: (0, a.jsx)(de, { items: c }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(X.Z, {
                    disabled: d,
                    children: (0, a.jsx)(ce, {
                      children: (0, a.jsx)(F.Z, {
                        media: s,
                        layout: "fill",
                        sizes: { s: "200vw", m: "100vw" },
                      }),
                    }),
                  }),
                ],
              })
            ),
          });
        };
      (fe.defaultProps = {
        title: "",
        text: "",
        background: "",
        links: [],
        summaries: [],
      }),
        (fe.propTypes = {
          title: P.PropTypes.string.isRequired,
          text: P.PropTypes.oneOfType([P.PropTypes.object, P.PropTypes.string]),
          background: P.PropTypes.string,
          media: P.PropTypes.array.isRequired,
          summaries: P.PropTypes.arrayOf(P.PropTypes.object),
          links: P.PropTypes.arrayOf(P.PropTypes.object),
        });
      var he = fe,
        pe = e(8632),
        ve = e(981);
      function me() {
        var n = (0, Z.Z)([
          "\n  height: 100vh;\n  max-height: 100vh;\n  max-height: 100dvh;\n  position: relative;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  z-index: var(--z-content);\n\n  scroll-snap-type: ",
          ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (prefers-reduced-motion) {\n    scroll-snap-type: none;\n  }\n",
        ]);
        return (
          (me = function () {
            return n;
          }),
          n
        );
      }
      var ge = k.ZP.main.withConfig({ componentId: "sc-9427a957-0" })(
          me(),
          function (n) {
            var t = n.$disabled,
              e = n.$axis,
              r = n.$enforce;
            return t ? "none" : "".concat(e, " ").concat(r);
          }
        ),
        Ze = function (n) {
          var t = n.children,
            e = n.axis,
            r = n.enforce,
            i = n.disabled,
            s = (0, u.useRouter)().asPath,
            c = (0, o.Z)((0, ve.Z)(), 1)[0];
          return (0, a.jsx)(
            ge,
            { $axis: e, $enforce: r, $disabled: c || i, children: t },
            s
          );
        };
      (Ze.defaultProps = { axis: "y", enforce: "mandatory", disabled: !1 }),
        (Ze.propTypes = {
          axis: j().oneOf(["x", "y", "both"]),
          enforce: j().oneOf(["mandatory", "proximity"]),
          disabled: j().bool,
        });
      var xe = Ze,
        we = (0, c.e)({ spread: he, chapter: mn, splitscreen: Nt, image: Yn }),
        be = function (n) {
          var t = n.content,
            e = n.nextCase,
            r = t || {},
            c = r.SEO,
            l = r.body,
            f = r.theme,
            g = r.accent_color;
          h(null === g || void 0 === g ? void 0 : g.color);
          var Z = (0, p.DW)(),
            x = (0, o.Z)(
              (function () {
                var n = ((0, u.useRouter)().query || {}).caseSlug,
                  t = (0, s.useState)(!1),
                  e = t[0],
                  r = t[1];
                return (
                  (0, s.useEffect)(
                    function () {
                      (0, d.g)(500).then(function () {
                        return r(!1);
                      });
                    },
                    [n]
                  ),
                  (0, s.useMemo)(
                    function () {
                      return [
                        e,
                        function () {
                          return r(!0);
                        },
                      ];
                    },
                    [e]
                  )
                );
              })(),
              2
            ),
            w = x[0],
            b = x[1];
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(v.Z, { SEO: c }),
              (0, a.jsx)(pe.Z, { light: "light" === f }),
              (0, a.jsxs)(xe, {
                disabled: Z || w,
                children: [
                  (0, a.jsx)(m.Z, { content: t }),
                  (0, a.jsx)(we, { items: l }),
                  (0, a.jsx)(
                    sn,
                    (0, i.Z)({ onBeforeRouteChange: b }, e),
                    null === e || void 0 === e ? void 0 : e.slug
                  ),
                ],
              }),
            ],
          });
        },
        ye = (0, s.memo)(be),
        Pe = !0,
        je = (0, r.s)(ye);
    },
    5556: function (n, t, e) {
      "use strict";
      e.d(t, {
        e: function () {
          return l;
        },
        o: function () {
          return m;
        },
      });
      var r = e(6042),
        i = e(9396),
        o = e(9534),
        a = e(5893),
        s = e(7650),
        c = e(1163),
        u = function (n) {
          var t = (0, c.useRouter)().isPreview;
          if (!(void 0 !== t && t) || !n) return {};
          if ("string" !== typeof n) return {};
          var e = JSON.parse(
            n.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
          );
          return {
            "data-blok-c": JSON.stringify(e),
            "data-blok-uid": e.id + "-" + e.uid,
          };
        },
        d = function (n) {
          var t = n.disabled,
            e = n.onChange,
            r = n.children;
          return t
            ? r
            : (0, a.jsx)(s.df, { threshold: "0.9", onChange: e, children: r });
        },
        l = function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function (t) {
            var e = t.items,
              s = void 0 === e ? [] : e,
              c = t.propsPerItem,
              l = t.onInView,
              f = (0, o.Z)(t, ["items", "propsPerItem", "onInView"]);
            return s.map(function (t, e) {
              var s = t.component,
                h = t._editable,
                p = t._uid,
                v = (0, o.Z)(t, ["component", "_editable", "_uid"]),
                m = (null === n || void 0 === n ? void 0 : n[s]) || null,
                g = u(h);
              if (!m) return null;
              var Z =
                (null === c || void 0 === c
                  ? void 0
                  : c((0, r.Z)({ component: s, _uid: p }, v))) || {};
              return (0, a.jsx)(
                d,
                {
                  disabled: !l,
                  onChange: function (n) {
                    return n && (null === l || void 0 === l ? void 0 : l(v));
                  },
                  children: (0, a.jsx)(
                    m,
                    (0, i.Z)(
                      (0, r.Z)((0, i.Z)((0, r.Z)({}, v), { index: e }), f, Z),
                      { containerSpread: g }
                    )
                  ),
                },
                p || v.slug
              );
            });
          };
        },
        f = e(7568),
        h = e(414),
        p = e(7294),
        v = function (n, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            i = (0, p.useState)(n),
            o = i[0],
            a = i[1],
            s = Boolean(r);
          return (
            (0, p.useEffect)(
              function () {
                if (s) {
                  var i = !0;
                  return (
                    (0, f.Z)(function () {
                      var o, s;
                      return (0, h.__generator)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            return [
                              4,
                              Promise.all([e.e(669), e.e(1)]).then(
                                e.bind(e, 1001)
                              ),
                            ];
                          case 1:
                            return (o = c.sent().storyblokBridge), [4, r()];
                          case 2:
                            return (
                              (s = c.sent().SBAdaptor),
                              o(n, t, function (n) {
                                i && a(s.adaptContent(n));
                              }),
                              [2]
                            );
                        }
                      });
                    })(),
                    function () {
                      i = !1;
                    }
                  );
                }
              },
              [s, n, t, r]
            ),
            s ? o : n
          );
        },
        m = function (n) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            e = function (e) {
              var i = e.data,
                s = e.fetchArgs,
                c = e.preview,
                u = (0, o.Z)(e, ["data", "fetchArgs", "preview"]),
                d = v(i, s, c && t);
              return (0, a.jsx)(n, (0, r.Z)({}, u, d));
            };
          return e;
        };
    },
    7786: function (n, t, e) {
      "use strict";
      e.d(t, {
        sY: function () {
          return l;
        },
      });
      var r = e(4924),
        i = e(6042),
        o = e(9396),
        a = e(9534),
        s = e(5893),
        c = e(7294),
        u = e(8665),
        d = e(4651);
      function l(n) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          "object" === typeof n &&
          "doc" === n.type &&
          Array.isArray(n.content)
        ) {
          var e = t.blokResolvers,
            r = void 0 === e ? {} : e,
            o = t.defaultBlokResolver,
            s =
              void 0 === o
                ? function () {
                    return null;
                  }
                : o,
            u = t.nodeResolvers,
            d = void 0 === u ? {} : u,
            l = t.markResolvers,
            f = void 0 === l ? {} : l,
            h = t.textResolver,
            p =
              void 0 === h
                ? function (n) {
                    return n;
                  }
                : h,
            v = (0, i.Z)({}, Z, d),
            m = (0, i.Z)({}, x, f),
            g = 0,
            w = function (n) {
              return c.isValidElement(n) ? c.cloneElement(n, { key: g++ }) : n;
            },
            b = function (n) {
              var t = n
                ? n.map(y).filter(function (n) {
                    return null != n;
                  })
                : null;
              return Array.isArray(t) && 0 === t.length ? null : t;
            },
            y = function (n) {
              var t, e;
              if ("blok" === n.type)
                return n.attrs.body.map(function (n) {
                  var t = n.component,
                    e = (0, a.Z)(n, ["component"]),
                    i = r[t],
                    o = i ? i(e) : s(t, e);
                  return w(o);
                });
              if ("text" === n.type) t = p(n.text);
              else {
                var i = v[n.type];
                t = i ? w(i(b(n.content), n.attrs)) : null;
              }
              return (
                null !== (e = n.marks) && void 0 !== e ? e : []
              ).reduceRight(function (n, t) {
                var e = m[t.type];
                return e ? w(e(n, t.attrs)) : n;
              }, t);
            };
          return b(n.content);
        }
        if ("string" === typeof n) {
          var P = t.defaultStringResolver,
            j =
              void 0 === P
                ? function (n) {
                    return n;
                  }
                : P,
            k = t.textResolver,
            C =
              void 0 === k
                ? function (n) {
                    return n;
                  }
                : k;
          return j(C(n));
        }
        return null;
      }
      var f,
        h,
        p = function (n) {
          return function (t) {
            if (null === t) return null;
            var e = n || "span";
            return (0, s.jsx)(e, { children: t });
          };
        },
        v = function (n) {
          return function () {
            var t = n || "span";
            return (0, s.jsx)(t, {});
          };
        },
        m = { 1: "h1", 2: "h2", 3: "b1", 4: "b2", 5: "b3", 6: "b4" },
        g = function (n) {
          return function (t) {
            var e = n || "span";
            return (0, s.jsx)(e, { children: t });
          };
        },
        Z =
          ((f = {}),
          (0, r.Z)(f, "heading", function (n, t) {
            var e = t.level,
              r = "h".concat(e),
              i = m[e];
            if (!i) throw new Error("Invalid heading level: ".concat(e));
            return (0, s.jsx)(d.Z, { tag: r, variant: i, children: n });
          }),
          (0, r.Z)(f, "code_block", function (n, t) {
            var e = t.class;
            return (0,
            s.jsx)("pre", { children: (0, s.jsx)("code", { className: e, children: n }) });
          }),
          (0, r.Z)(f, "image", function (n, t) {
            return (0,
            s.jsx)("img", (0, o.Z)((0, i.Z)({}, t), { children: n }));
          }),
          (0, r.Z)(f, "paragraph", p("p")),
          (0, r.Z)(f, "blockquote", p("blockquote")),
          (0, r.Z)(f, "ordered_list", p("ol")),
          (0, r.Z)(f, "bullet_list", p("ul")),
          (0, r.Z)(f, "list_item", p("li")),
          (0, r.Z)(f, "horizontal_rule", v("hr")),
          (0, r.Z)(f, "hard_break", v("br")),
          f),
        x =
          ((h = {}),
          (0, r.Z)(h, "link", function (n, t) {
            return (0, s.jsx)(u.Z, (0, o.Z)((0, i.Z)({}, t), { children: n }));
          }),
          (0, r.Z)(h, "styled", function (n, t) {
            var e = t.class;
            return (0, s.jsx)("span", { className: e, children: n });
          }),
          (0, r.Z)(h, "bold", g("b")),
          (0, r.Z)(h, "italic", g("i")),
          (0, r.Z)(h, "strike", g("s")),
          (0, r.Z)(h, "underline", g("u")),
          (0, r.Z)(h, "code", g("code")),
          h);
    },
    8700: function (n, t, e) {
      "use strict";
      e.d(t, {
        DW: function () {
          return s;
        },
        FI: function () {
          return c;
        },
      });
      var r = e(7294),
        i = e(1163),
        o = e(661),
        a = function () {
          return (0, r.useContext)(o.n);
        },
        s = function () {
          return a().transitioning;
        },
        c = function () {
          var n = a(),
            t = n.transitioning,
            e = n.onCaseDetailLoaded;
          return (0, r.useCallback)(
            function () {
              t && e();
            },
            [e, t]
          );
        };
      t.ZP = function () {
        var n = (0, i.useRouter)().isPreview,
          t = a(),
          e = t.preLoadImage,
          r = t.onClick;
        return n
          ? {
              preLoadImage: function () {},
              onClick: function (n) {
                return n.preventDefault();
              },
            }
          : { preLoadImage: e, onClick: r };
      };
    },
    8039: function (n, t, e) {
      "use strict";
      e.d(t, {
        s: function () {
          return i;
        },
      });
      var r = e(5556),
        i = function (n) {
          return (0, r.o)(n, function () {
            return Promise.all([e.e(669), e.e(516)]).then(e.bind(e, 3197));
          });
        };
    },
    578: function (n, t, e) {
      "use strict";
      e.d(t, {
        H: function () {
          return c;
        },
      });
      var r = e(9180);
      var i = e(4960),
        o = e(5262),
        a = e(4735);
      var s = e(6681);
      function c(n, t, e, i) {
        const o =
          "function" === typeof t
            ? t
            : (function (...n) {
                const t = !Array.isArray(n[0]),
                  e = t ? 0 : -1,
                  i = n[0 + e],
                  o = n[1 + e],
                  a = n[2 + e],
                  s = n[3 + e],
                  c = (0, r.s)(o, a, {
                    mixer:
                      ((u = a[0]),
                      ((n) => "object" === typeof n && n.mix)(u)
                        ? u.mix
                        : void 0),
                    ...s,
                  });
                var u;
                return t ? c(i) : c;
              })(t, e, i);
        return Array.isArray(n) ? u(n, o) : u([n], ([n]) => o(n));
      }
      function u(n, t) {
        const e = (0, s.h)(() => []);
        return (function (n, t) {
          const e = (0, i.c)(t()),
            r = () => e.set(t());
          return (
            r(),
            (0, o.f)(
              n,
              () => a.ZP.update(r, !1, !0),
              () => a.qY.update(r)
            ),
            e
          );
        })(n, () => {
          e.length = 0;
          const r = n.length;
          for (let t = 0; t < r; t++) e[t] = n[t].get();
          return t(e);
        });
      }
    },
  },
  function (n) {
    n.O(0, [423, 371, 774, 888, 179], function () {
      return (t = 6806), n((n.s = t));
      var t;
    });
    var t = n.O();
    _N_E = t;
  },
]);
