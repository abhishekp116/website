(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(383);
        },
      ]);
    },
    3266: function (n, e, t) {
      "use strict";
      var r = t(6042),
        i = t(9396),
        o = t(9534),
        a = t(7297),
        c = t(5893),
        s = t(1208),
        l = t(5697),
        u = t.n(l),
        d = t(5178),
        f = t(1734),
        h = t(9080),
        p = t(8665),
        v = t(4342),
        m = t(5196);
      function g() {
        var n = (0, a.Z)([
          "\n  display: block;\n  position: relative;\n  overflow: hidden;\n\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-off-white);\n  cursor: ",
          ";\n\n  ",
          ";\n\n  ",
          ";\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, a.Z)([
          "\n  position: absolute;\n  top: 0.695rem;\n  right: 0.625rem;\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        var n = (0, a.Z)([
          "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  filter: ",
          ";\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      var w = (0, d.ZP)(s.m.a).withConfig({ componentId: "sc-bebb497c-0" })(
          g(),
          function (n) {
            return n.$cursor;
          },
          function (n) {
            var e = n.$cardTheme;
            return (0, f.LK)(e);
          },
          function (n) {
            return (
              n.theme.disabled &&
              "\n    pointer-events: none;\n    user-select: none;\n  "
            );
          }
        ),
        b = (0, d.ZP)(m.Z).withConfig({ componentId: "sc-bebb497c-1" })(x()),
        j = d.ZP.div.withConfig({ componentId: "sc-bebb497c-2" })(
          Z(),
          function (n) {
            return n.theme.disabled ? "blur(30px)" : "none";
          }
        ),
        y = function (n) {
          var e = n.renderAsTag,
            t = n.disabled,
            a = n.pointer,
            s = n.tag,
            l = n.tagText,
            u = n.showText,
            f = n.className,
            m = n.slug,
            g = n.content,
            x = n.onClick,
            Z = n.onMouseEnter,
            y = n.onImageLoaded,
            k = (0, o.Z)(n, [
              "renderAsTag",
              "disabled",
              "pointer",
              "tag",
              "tagText",
              "showText",
              "className",
              "slug",
              "content",
              "onClick",
              "onMouseEnter",
              "onImageLoaded",
            ]),
            C = g || {},
            P = C.theme,
            T = C.poster,
            I = C.title,
            _ = C.description,
            q = I && !t && u;
          return (0, c.jsx)(d.f6, {
            theme: { disabled: t },
            children: (0, c.jsx)(p.Z, {
              renderAnchor: !1,
              href: m,
              children: (0, c.jsxs)(w, {
                $cardTheme: P,
                className: f,
                $cursor: a ? "pointer" : "auto",
                onMouseEnter: t ? null : Z,
                onClick: x,
                children: [
                  (0, c.jsx)(j, {
                    children: (0, c.jsx)(
                      v.Z,
                      (0, i.Z)((0, r.Z)({}, k), {
                        media: T,
                        onLoadingComplete: y,
                      })
                    ),
                  }),
                  q &&
                    (0, c.jsx)(h.Z, {
                      title: I,
                      description: _,
                      renderAsTag: e,
                    }),
                  s && !t && (0, c.jsx)(b, { text: l }),
                ],
              }),
            }),
          });
        };
      (y.defaultProps = {
        disabled: !1,
        tag: !1,
        showText: !0,
        sizes: {
          xs: "50vw",
          s: "50vw",
          m: "50vw",
          l: "50vw",
          xl: "50vw",
          xxl: "50vw",
        },
      }),
        (y.propTypes = {
          disabled: u().bool,
          pointer: u().bool,
          tagText: u().string,
          showText: u().bool,
          className: u().string,
          content: u().object.isRequired,
          tag: u().bool,
          onClick: u().func,
          fadeOnLoad: u().bool,
          onMouseEnter: u().func,
          onImageLoaded: u().func,
        }),
        (e.Z = y);
    },
    9080: function (n, e, t) {
      "use strict";
      var r = t(7297),
        i = t(5893),
        o = t(5697),
        a = t.n(o),
        c = t(5178),
        s = t(8556),
        l = t(4651);
      function u() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  color: var(--primary);\n  pointer-events: none;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 0.625rem;\n\n  ",
          " {\n    padding: 1.25rem;\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, r.Z)([
          "\n  text-transform: uppercase;\n  display: inline;\n",
        ]);
        return (
          (d = function () {
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
      var p = c.ZP.div.withConfig({ componentId: "sc-b8ceaa09-0" })(
          u(),
          s.qk.s
        ),
        v = (0, c.ZP)(l.Z).withConfig({ componentId: "sc-b8ceaa09-1" })(d()),
        m = (0, c.ZP)(l.Z).withConfig({ componentId: "sc-b8ceaa09-2" })(f()),
        g = c.ZP.div.withConfig({ componentId: "sc-b8ceaa09-3" })(h(), s.qk.s),
        x = function (n) {
          var e = n.title,
            t = n.description,
            r = n.className,
            o = n.renderAsTag;
          return (0, i.jsx)(p, {
            className: r,
            children: (0, i.jsxs)(g, {
              children: [
                (0, i.jsx)(v, { tag: o, variant: "l4", children: e }),
                " ",
                "\xb7",
                " ",
                (0, i.jsx)(m, { tag: "p", variant: "l3", children: t }),
              ],
            }),
          });
        };
      (x.defaultProps = { renderAsTag: "h1" }),
        (x.propTypes = {
          renderAsTag: a().string,
          title: a().string.isRequired,
          description: a().string.isRequired,
        }),
        (e.Z = x);
    },
    5196: function (n, e, t) {
      "use strict";
      var r = t(7297),
        i = t(5893),
        o = t(5697),
        a = t.n(o),
        c = t(5178),
        s = t(8556),
        l = t(4651);
      function u() {
        var n = (0, r.Z)([
          "\n  padding: 0.25rem 0.5rem;\n  border-radius: 2.375rem;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: var(--quaternary);\n  color: var(--color-white);\n  backdrop-filter: blur(0.2rem);\n\n  ",
          " {\n    padding: 0.313rem 1rem;\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, r.Z)([
          "\n  display: inline-block;\n  transform: translateY(-0.012em);\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      var f = c.ZP.div.withConfig({ componentId: "sc-5a6ac534-0" })(
          u(),
          s.qk.s
        ),
        h = (0, c.ZP)(l.Z).withConfig({ componentId: "sc-5a6ac534-1" })(d()),
        p = function (n) {
          var e = n.text,
            t = n.className;
          return (0, i.jsx)(f, {
            className: t,
            children: (0, i.jsx)(h, {
              tag: "span",
              variant: "l3",
              children: e,
            }),
          });
        };
      (p.defaultProps = { text: "" }),
        (p.propTypes = { text: a().string.isRequired }),
        (e.Z = p);
    },
    2541: function (n, e, t) {
      "use strict";
      var r = t(6042),
        i = t(9396),
        o = t(9534),
        a = t(7297),
        c = t(5893),
        s = t(5697),
        l = t.n(s),
        u = t(5178),
        d = t(3052),
        f = t(8665),
        h = t(4651);
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
      var v = u.ZP.div.withConfig({ componentId: "sc-933a6b5f-0" })(p()),
        m = function (n) {
          var e = n.containerSpread,
            t = n.label,
            a = n.variant,
            s = n.className,
            l = n.link,
            u = n.dotOverwriteTheme,
            p = (0, o.Z)(n, [
              "containerSpread",
              "label",
              "variant",
              "className",
              "link",
              "dotOverwriteTheme",
            ]);
          return (0, c.jsx)(
            f.Z,
            (0, i.Z)((0, r.Z)({}, l, p), {
              children: (0, c.jsx)(
                v,
                (0, i.Z)((0, r.Z)({}, e), {
                  className: s,
                  children: (0, c.jsx)(d.ZP, {
                    dotOverwriteTheme: u,
                    children: (0, c.jsx)(h.Z, {
                      tag: "div",
                      variant: a,
                      children: t,
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
          containerSpread: l().object,
          label: l().string.isRequired,
          link: l().object.isRequired,
          className: l().any,
        }),
        (e.Z = m);
    },
    383: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSG: function () {
            return kn;
          },
          default: function () {
            return Cn;
          },
        });
      var r = t(8039),
        i = t(7297),
        o = t(5893),
        a = t(5178),
        c = t(5556),
        s = t(8556),
        l = t(5425),
        u = t(3114),
        d = t(8726),
        f = t(8632),
        h = t(6042),
        p = t(9396),
        v = t(5697),
        m = t.n(v),
        g = t(8785),
        x = t(4651),
        Z = t(2541),
        w = t(1208),
        b = t(5137);
      function j() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  font-size: 17.85vw;\n\n  ",
          " {\n    font-size: 8vmin;\n  }\n\n  ",
          " {\n    font-size: 10vmin;\n  }\n",
        ]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = (0, i.Z)(["\n  margin-left: 1ch;\n"]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 5.5ch;\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = (0, i.Z)(["\n  overflow: hidden;\n"]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      var P = (0, a.ZP)(x.Z).withConfig({ componentId: "sc-2a6ec656-0" })(
          j(),
          s.qk.xs,
          s.qk.l
        ),
        T = a.ZP.div.withConfig({ componentId: "sc-2a6ec656-1" })(y()),
        I = (0, a.ZP)(w.m.div).withConfig({ componentId: "sc-2a6ec656-2" })(
          k()
        ),
        _ = a.ZP.div.withConfig({ componentId: "sc-2a6ec656-3" })(C()),
        q = {
          show: {
            transition: {
              ease: b.L[0],
              delayChildren: 0.4,
              staggerChildren: 0.4,
            },
          },
        },
        N = {
          hidden: { height: 0 },
          show: {
            height: "auto",
            transition: { ease: b.L[0], duration: 0.35 },
          },
        },
        E = function (n) {
          var e,
            t = n.text,
            r = n.shouldAnimate,
            i =
              null === (e = t.match(/{{(.*)}}/)) || void 0 === e
                ? void 0
                : e[1];
          return (0, o.jsx)(_, {
            children: (0, o.jsx)(w.m.div, {
              style: { height: "auto" },
              variants: r && N,
              children: i ? (0, o.jsx)(T, { children: i }) : t,
            }),
          });
        },
        S = function (n) {
          var e = n.slogan,
            t = n.stagger,
            r = n.className;
          return (0, o.jsx)(P, {
            tag: "h1",
            variant: "h2",
            className: r,
            children: (0, o.jsx)(I, {
              variants: t && q,
              initial: "hidden",
              animate: "show",
              children:
                null === e || void 0 === e
                  ? void 0
                  : e.split("\n").map(function (n, e) {
                      return (0,
                      o.jsx)(E, { text: n, shouldAnimate: t }, "".concat(n, "-").concat(e));
                    }),
            }),
          });
        };
      S.propTypes = {
        slogan: v.PropTypes.string.isRequired,
        stagger: v.PropTypes.bool,
      };
      var L = S;
      function R() {
        var n = (0, i.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary);\n  color: var(--secondary);\n\n  height: calc((var(--vh, 1vh) * 100) - ",
          ");\n\n  ",
          " {\n    position: sticky;\n    top: 0;\n\n    width: var(--sections-element-width);\n    min-width: var(--sections-element-width);\n\n    height: 100vh;\n    min-height: inherit;\n    order: 2;\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = (0, i.Z)([
          "\n  position: absolute;\n  text-align: right;\n\n  top: 1.25rem;\n  right: ",
          ";\n\n  ",
          " {\n    top: 1.563rem;\n    right: ",
          ";\n  }\n\n  ",
          " {\n    top: 1.875rem;\n    right: ",
          ";\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        var n = (0, i.Z)([
          "\n  padding: 16vh ",
          " 0 ",
          ";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  ",
          " {\n    padding: ",
          " ",
          " 5.75rem ",
          ";\n  }\n\n  ",
          " {\n    height: 100%;\n    justify-content: space-between;\n    padding: 24.5vh ",
          " 3.75rem ",
          ";\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = (0, i.Z)([
          "\n  width: 100%;\n  max-width: 14.25rem;\n  margin-top: 9.5vh;\n  margin-left: auto;\n\n  ",
          " {\n    max-width: 16.25rem;\n    margin-top: ",
          ";\n  }\n\n  ",
          " {\n    max-width: 21.25rem;\n    margin-top: 0;\n  }\n",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = (0, i.Z)([
          "\n  position: relative;\n  z-index: 1;\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.25rem;\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      var $ = a.ZP.div.withConfig({ componentId: "sc-8802d286-0" })(
          R(),
          "4rem",
          s.qk.m
        ),
        M = a.ZP.div.withConfig({ componentId: "sc-8802d286-1" })(
          z(),
          (0, g.EV)(1),
          s.qk.s,
          (0, g.BT)(1),
          s.qk.m,
          (0, g.hl)(1)
        ),
        D = a.ZP.div.withConfig({ componentId: "sc-8802d286-2" })(
          A(),
          (0, g.EV)(1),
          (0, g.EV)(1),
          s.qk.s,
          (0, g.BT)(5),
          (0, g.BT)(2.5),
          (0, g.BT)(1),
          s.qk.m,
          (0, g.hl)(2.5),
          (0, g.hl)(2)
        ),
        V = a.ZP.div.withConfig({ componentId: "sc-8802d286-3" })(
          O(),
          s.qk.s,
          (0, g.BT)(2),
          s.qk.m
        ),
        F = a.ZP.div.withConfig({ componentId: "sc-8802d286-4" })(B()),
        X = (0, c.e)({ text_link: Z.Z }),
        Y = function (n) {
          var e = n.containerSpread,
            t = n.title,
            r = n.topbar_title,
            i = n.topbar_description,
            a = n.description,
            c = n.links;
          return (0, o.jsxs)(
            $,
            (0, p.Z)((0, h.Z)({}, e), {
              children: [
                (0, o.jsxs)(M, {
                  children: [
                    (0, o.jsx)(x.Z, { variant: "l4", children: r }),
                    (0, o.jsx)(x.Z, { variant: "l3", children: i }),
                  ],
                }),
                (0, o.jsxs)(D, {
                  children: [
                    (0, o.jsx)(L, {
                      slogan: t,
                      className: "home-content-slogan",
                    }),
                    (0, o.jsxs)(V, {
                      children: [
                        (0, o.jsx)(x.Z, { variant: "b4", children: a }),
                        (0, o.jsx)(F, {
                          children: (0, o.jsx)(X, { items: c }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      (Y.defaultProps = {
        slogan: "",
        containerSpread: {},
        topbar_title: "",
        topbar_description: "",
        description: "",
        links: [],
      }),
        (Y.propTypes = {
          slogan: m().string.isRequired,
          containerSpread: m().object,
          topbar_title: m().string,
          topbar_description: m().string,
          description: m().string,
          links: m().array,
        });
      var G = Y,
        K = t(8700),
        W = t(1083),
        H = t(3266),
        J = t(5422),
        Q = t(1106),
        U = t(3862),
        nn = t(1482);
      function en() {
        var n = (0, i.Z)(["\n  position: relative;\n\n  ", "\n"]);
        return (
          (en = function () {
            return n;
          }),
          n
        );
      }
      function tn() {
        var n = (0, i.Z)([
          "\n  background-color: var(--color-off-white);\n\n  ",
          " {\n    position: relative;\n    width: var(--sections-element-width);\n    min-width: var(--sections-element-width);\n    height: 100%;\n    background-color: transparent;\n    order: 1;\n\n    overflow: scroll;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (tn = function () {
            return n;
          }),
          n
        );
      }
      function rn() {
        var n = (0, i.Z)(["\n  position: absolute;\n"]);
        return (
          (rn = function () {
            return n;
          }),
          n
        );
      }
      var on = "3/4",
        an = "2/3",
        cn = a.ZP.div.withConfig({ componentId: "sc-c5f293c8-0" })(
          en(),
          function (n) {
            var e = n.$isEven;
            return "\n    ".concat((0, nn.Dm)(e ? on : an), ";\n  ");
          }
        ),
        sn = a.ZP.div.withConfig({ componentId: "sc-c5f293c8-1" })(
          tn(),
          s.qk.m
        ),
        ln = (0, a.ZP)(H.Z).withConfig({ componentId: "sc-c5f293c8-2" })(rn()),
        un = function (n) {
          var e = n.containerSpread,
            t = n.items,
            r = (0, K.ZP)(),
            i = r.preLoadImage,
            a = r.onClick,
            c = (0, W.Z)("m"),
            s = (0, l.Z)().shouldPlayIntro;
            console.log("aaa", a, r)
          return (0, o.jsx)(
            sn,
            (0, p.Z)((0, h.Z)({}, e), {
              children: (0, o.jsx)(Q.Z, {
                autoScroll: !0,
                virtualScroll: c,
                items: t,
                hasOffsetRight: !0,
                renderColumn: function (n) {
                  var e = n.direction,
                    t = n.items,
                    r = n.isEven,
                    c = n.style,
                    l = n.lazyRoot;
                  return (0, o.jsx)(U.Z, {
                    direction: e,
                    isEven: r,
                    delay: s ? 2.5 : 0,
                    children: (0, o.jsx)(J.Z, {
                      style: c,
                      children: t.map(function (n, e) {
                        var t = n.id,
                          c = n.content,
                          s = n.full_slug;
                        return (0, o.jsx)(
                          cn,
                          {
                            $isEven: r,
                            children: (0, o.jsx)(ln, {
                              pointer: !0,
                              priority: e < 2,
                              content: c,
                              slug: s,
                              onMouseEnter: function () {
                                console.log("onMouseEnter", 0)
                                return i((0, h.Z)({ path: s }, c || {}));
                              },
                              onClick: function (n) {
                                console.log("onClick", t)
                                return a(n, s);
                                console.log("t", t);
                              },
                              lazyRoot: l,
                              renderAsTag: "h2",
                              
                            }),
                          },
                          t
                          
                        );
                      }),
                    }),
                  });
                },
              }),
            })
          );
        };
      (un.defaultProps = { items: [] }),
        (un.propTypes = { items: m().array.isRequired });
      var dn = un,
        fn = t(7294),
        hn = t(7514);
      function pn() {
        var n = (0, i.Z)([
          "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  height: 100vh;\n  z-index: var(--z-intro-bg);\n  background: var(--color-off-white);\n\n  @media (prefers-reduced-motion) {\n    display: none;\n  }\n",
        ]);
        return (
          (pn = function () {
            return n;
          }),
          n
        );
      }
      function vn() {
        var n = (0, i.Z)([
          "\n  position: fixed;\n  z-index: var(--z-intro-text);\n  color: var(--secondary);\n",
        ]);
        return (
          (vn = function () {
            return n;
          }),
          n
        );
      }
      var mn = (0, a.ZP)(w.m.div).withConfig({ componentId: "sc-48c151c5-0" })(
          pn()
        ),
        gn = a.ZP.div.withConfig({ componentId: "sc-48c151c5-1" })(vn()),
        xn = {
          opacity: [1, 0.99, 0],
          transition: { delay: 2.1, ease: b.L[1], duration: 0.95 },
        },
        Zn = function (n) {
          var e = n.slogan,
            t = (0, l.Z)().isFirstVisit,
            r = (0, fn.useState)(t),
            i = r[0],
            a = r[1],
            c = (0, fn.useState)(null),
            s = c[0],
            u = c[1];
          return (
            (0, fn.useEffect)(function () {
              var n = document.querySelector(".home-content-slogan");
              if (n) {
                var e = n.getBoundingClientRect();
                u({
                  top: "".concat(e.top, "px"),
                  left: "".concat(e.left, "px"),
                  width: "".concat(e.width, "px"),
                  height: "".concat(e.height, "px"),
                });
              }
            }, []),
            i
              ? (0, o.jsx)(mn, {
                  animate: xn,
                  transition: { times: [0, 0.99, 1] },
                  onAnimationComplete: function () {
                    return a(!1);
                  },
                  children: (0, o.jsx)(hn.Y, {
                    children:
                      s &&
                      (0, o.jsx)(gn, {
                        style: s,
                        children: (0, o.jsx)(L, { stagger: !0, slogan: e }),
                      }),
                  }),
                })
              : null
          );
        };
      function wn() {
        var n = (0, i.Z)([
          "\n  ",
          " {\n    --sections-gap: 2.125rem;\n    --sections-element-width: calc(50% - (var(--sections-gap) / 2));\n\n    display: flex;\n    gap: var(--sections-gap);\n  }\n",
        ]);
        return (
          (wn = function () {
            return n;
          }),
          n
        );
      }
      var bn = a.ZP.div.withConfig({ componentId: "sc-3d106d86-0" })(
          wn(),
          s.qk.m
        ),
        jn = (0, c.e)({ home_content: G, home_curated_cases: dn }),
        yn = function (n) {
          var e = n.content || {},
            t = e.SEO,
            r = e.body,
            i = e.slogan,
            a = (0, l.Z)().shouldPlayIntro;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(u.Z, { SEO: t }),
              (0, o.jsx)(f.Z, {}),
              a && (0, o.jsx)(Zn, { slogan: i }),
              (0, o.jsx)(d.Z, {
                children: (0, o.jsx)(bn, {
                  children: (0, o.jsx)(jn, { items: r }),
                }),
              }),
            ],
          });
        },
        kn = !0,
        Cn = (0, r.s)(yn);
    },
    8700: function (n, e, t) {
      "use strict";
      t.d(e, {
        DW: function () {
          return c;
        },
        FI: function () {
          return s;
        },
      });
      var r = t(7294),
        i = t(1163),
        o = t(661),
        a = function () {
          return (0, r.useContext)(o.n);
        },
        c = function () {
          return a().transitioning;
        },
        s = function () {
          var n = a(),
            e = n.transitioning,
            t = n.onCaseDetailLoaded;
          return (0, r.useCallback)(
            function () {
              e && t();
            },
            [t, e]
          );
        };
      e.ZP = function () {
        var n = (0, i.useRouter)().isPreview,
          e = a(),
          t = e.preLoadImage,
          r = e.onClick;
        return n
          ? {
              preLoadImage: function () {},
              onClick: function (n) {
                return n.preventDefault();
              },
            }
          : { preLoadImage: t, onClick: r };
      };
    },
  },
  function (n) {
    n.O(0, [423, 371, 866, 176, 774, 888, 179], function () {
      return (e = 5557), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
