(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [371],
  {
    3114: function (n, e, t) {
      "use strict";
      var r = t(5893),
        o = t(9008),
        a = t.n(o),
        i = t(1163),
        s = t(5697),
        l = t.n(s),
        c = t(1734),
        m = t(8112),
        d = function (n) {
          var e = n.SEO,
            t = n.noCrawl,
            o = (null === e || void 0 === e ? void 0 : e[0]) || {},
            s = o.title,
            l = void 0 === s ? "Build in Amsterdam" : s,
            d = o.description,
            p = void 0 === d ? "We build digital flagship stores" : d,
            u = o.image,
            C = void 0 === u ? null : u,
            h = (0, m.Z)(),
            f = h.twitter_handle,
            g = void 0 === f ? "@buildinams" : f,
            v = h.hostname,
            x = void 0 === v ? "buildinamsterdam.com" : v,
            V = h.theme_color,
            b = void 0 === V ? c.DM.black : V,
            w = (null === C || void 0 === C ? void 0 : C.filename) || "",
            H = (0, i.useRouter)().asPath,
            y = x + H,
            Z = "/" === H ? l : "".concat(l, " | Build in Amsterdam");
          return (0, r.jsxs)(a(), {
            children: [
              (0, r.jsx)("title", { children: Z }),
              (0, r.jsx)("meta", {
                httpEquiv: "Content-Type",
                content: "text/html; charset=utf-8",
              }),
              (0, r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
              }),
              (0, r.jsx)("meta", { name: "description", content: p }),
              (0, r.jsx)("meta", { property: "og:locale", content: y }),
              (0, r.jsx)("meta", { property: "og:url", content: y }),
              (0, r.jsx)("meta", { property: "og:type", content: "website" }),
              (0, r.jsx)("meta", { property: "og:title", content: l }),
              (0, r.jsx)("meta", { property: "og:image", content: w }),
              (0, r.jsx)("meta", { property: "og:description", content: p }),
              (0, r.jsx)("meta", { name: "twitter:site", content: g }),
              (0, r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              (0, r.jsx)("meta", { name: "twitter:title", content: l }),
              (0, r.jsx)("meta", { name: "twitter:image", content: w }),
              (0, r.jsx)("meta", { name: "twitter:description", content: p }),
              (0, r.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png",
              }),
              (0, r.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png",
              }),
              (0, r.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png",
              }),
              (0, r.jsx)("link", {
                rel: "manifest",
                href: "/site.webmanifest",
              }),
              (0, r.jsx)("meta", { name: "theme-color", content: b }),
              (0, r.jsx)("meta", {
                name: "msapplication-TileColor",
                content: b,
              }),
              (0, r.jsx)("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: "default",
              }),
              t &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("meta", { name: "robots", content: "noindex" }),
                    (0, r.jsx)("meta", {
                      name: "googlebot",
                      content: "noindex",
                    }),
                  ],
                }),
            ],
          });
        };
      (d.defaultProps = { SEO: [], noCrawl: !1 }),
        (d.proptypes = { SEO: l().array.isRequired, noCrawl: l().bool }),
        (e.Z = d);
    },
    8632: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return G;
        },
      });
      var r,
        o,
        a,
        i,
        s,
        l,
        c,
        m,
        d,
        p,
        u,
        C,
        h,
        f,
        g,
        v,
        x,
        V = t(6042),
        b = t(7297),
        w = t(5893),
        H = t(5697),
        y = t.n(H),
        Z = t(5178),
        j = t(8785),
        E = t(8556),
        M = t(828),
        L = t(7294),
        k = t(1163),
        P = t(7998),
        T = t(3302),
        B = t(8868),
        $ = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : function () {},
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t = (0, L.useRef)(n);
          (0, B.L)(
            function () {
              t.current = n;
            },
            [n]
          ),
            (0, L.useEffect)(
              function () {
                if (e || 0 === e) {
                  var n = setTimeout(function () {
                    return t.current();
                  }, e);
                  return function () {
                    return clearTimeout(n);
                  };
                }
              },
              [e]
            );
        },
        N = function () {
          var n = (0, T.J)(),
            e = (0, L.useState)(!1),
            t = e[0],
            r = e[1],
            o = (0, L.useState)(!0),
            a = o[0],
            i = o[1],
            s = (0, k.useRouter)(),
            l = window.document.body.querySelector("main"),
            c = s.pathname.includes("case/");
          return (
            $(function () {
              return r(!0);
            }, 2600),
            (0, P.useScroll)(
              function (n) {
                var e = (0, M.Z)(n.xy, 2)[1];
                return i(e < 100);
              },
              { target: l, enabled: c }
            ),
            { monogram: !!(n || "/" !== s.pathname) || t, hide: !a }
          );
        },
        O = t(3775),
        _ = t(8665);
      function q() {
        return (
          (q = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          q.apply(this, arguments)
        );
      }
      var z = function (n) {
          return L.createElement(
            "svg",
            q(
              {
                width: 349,
                height: 93,
                viewBox: "0 0 349 93",
                xmlns: "http://www.w3.org/2000/svg",
                role: "img",
              },
              n
            ),
            r ||
              (r = L.createElement("path", {
                className: "letter-b",
                d: "M13.5478 0.813487C20.8007 0.813487 25.0678 5.1409 25.0678 11.1518C25.0678 15.2081 22.717 18.2362 19.4638 19.4225C23.4635 20.5072 26.2377 24.0211 26.2377 28.5632C26.2377 34.7323 21.5472 39.1614 14.5059 39.1614H0.534766V0.813487H13.5478ZM12.6899 17.0385C16.4222 17.0385 18.6616 14.8804 18.6616 11.6829C18.6616 8.44014 16.4222 6.32727 12.5228 6.32727H6.88528V17.0385H12.6899ZM13.3918 33.6476C17.2355 33.6476 19.7423 31.5348 19.7423 28.1339C19.7423 24.8346 17.5586 22.5071 13.6035 22.5071H6.88528V33.6476H13.3918Z",
              })),
            o ||
              (o = L.createElement("path", {
                className: "letter-i",
                d: "M0 65.8491H6.13884V92.1978H0V65.8491Z",
              })),
            a ||
              (a = L.createElement("path", {
                className: "letter-a",
                d: "M66.6247 53.8384H74.7467L87.5815 92.1977H80.3508L77.5098 83.4186H63.4272L60.7199 92.1977H53.6229L66.6247 53.8384ZM75.6269 77.5658L70.5019 59.7703L65.2766 77.5658H75.6269Z",
              })),
            i ||
              (i = L.createElement("path", {
                className: "letter-dot",
                d: "M344.621 83.6899C347.017 83.6899 349 85.6897 349 88.1303C349 90.5708 347.028 92.5142 344.621 92.5142C342.226 92.5142 340.299 90.5708 340.299 88.1303C340.299 85.6897 342.215 83.6899 344.621 83.6899Z",
              })),
            s ||
              (s = L.createElement("path", {
                d: "M42.3591 39.9185C36.1757 39.9185 32.5436 35.2635 32.5436 29.422V12.8128H38.727V28.2808C38.727 31.5236 40.22 34.2805 43.9523 34.2805C47.5286 34.2805 49.3892 31.8512 49.3892 28.3825V12.8241H55.5726V34.3482C55.5726 36.5176 55.7286 38.1898 55.84 39.1615H49.924C49.8126 38.5627 49.7123 37.3198 49.7123 36.2351C48.4422 38.6192 45.4007 39.9185 42.3591 39.9185Z",
              })),
            l ||
              (l = L.createElement("path", {
                d: "M63.4383 12.8242H69.5772V39.1728H63.4383V12.8242Z",
              })),
            c ||
              (c = L.createElement("path", {
                d: "M77.3649 39.1614V1.10728L83.5483 0V39.1614H77.3649Z",
              })),
            m ||
              (m = L.createElement("path", {
                d: "M115.747 34.3482C115.747 36.7322 115.958 38.7321 116.014 39.1614H110.098C109.987 38.5626 109.831 36.8339 109.831 35.7492C108.605 37.9638 105.887 39.8055 102.199 39.8055C94.7342 39.8055 89.7206 33.851 89.7206 25.908C89.7206 18.3379 94.7899 12.1123 102.099 12.1123C106.633 12.1123 108.928 14.2251 109.73 15.8973V1.10728L115.747 0V34.3482ZM102.89 34.2917C106.945 34.2917 109.775 30.8795 109.775 25.8515C109.775 20.8236 107.001 17.6825 102.945 17.6825C98.8899 17.6825 95.904 20.8801 95.904 25.908C95.904 30.9473 98.6782 34.2917 102.89 34.2917Z",
              })),
            d ||
              (d = L.createElement("path", {
                d: "M20.188 92.1865H14.0046V65.8492H20.032V69.3631C21.7366 66.335 24.8339 65.0921 27.7083 65.0921C34.0588 65.0921 37.1004 69.7472 37.1004 75.5322V92.1978H30.917V76.6056C30.917 73.3628 29.4798 70.7641 25.5803 70.7641C22.0597 70.7641 20.188 73.521 20.188 76.9897V92.1865Z",
              })),
            p ||
              (p = L.createElement("path", {
                d: "M93.9097 92.1865V65.8492H99.8257V69.2049C101.319 66.5045 104.572 65.0921 107.502 65.0921C110.911 65.0921 113.908 66.6627 115.29 69.7472C117.317 66.2898 120.359 65.0921 123.713 65.0921C128.403 65.0921 132.893 68.1202 132.893 75.1028V92.1978H126.921V76.1197C126.921 73.0352 125.373 70.7076 121.908 70.7076C118.654 70.7076 116.515 73.3063 116.515 76.5491V92.1865H110.432V76.1197C110.432 73.0917 108.939 70.7076 105.419 70.7076C102.11 70.7076 100.026 73.1934 100.026 76.5491V92.1865H93.9097Z",
              })),
            u ||
              (u = L.createElement("path", {
                d: "M144.012 83.5317C144.224 85.9157 145.984 88.0173 149.293 88.0173C151.855 88.0173 153.192 86.6162 153.192 84.9892C153.192 83.5882 152.234 82.5035 150.151 82.0741L146.307 81.2041C141.717 80.1759 139.321 77.1479 139.321 73.521C139.321 68.9224 143.477 65.0243 148.87 65.0243C156.122 65.0243 158.473 69.7811 158.897 72.3798L153.671 73.8938C153.46 72.3798 152.334 69.9393 148.87 69.9393C146.686 69.9393 145.137 71.3403 145.137 72.9673C145.137 74.3797 146.151 75.3966 147.755 75.7242L151.699 76.5377C156.602 77.6224 159.164 80.6505 159.164 84.5485C159.164 88.5483 155.967 92.9887 149.349 92.9887C141.828 92.9887 138.943 88.006 138.631 85.0344L144.012 83.5317Z",
              })),
            C ||
              (C = L.createElement("path", {
                d: "M165.637 59.0133L171.776 57.793V65.849H177.168V71.4193H171.776V83.6445C171.776 85.9721 172.79 86.9438 175.085 86.9438C175.943 86.9438 176.957 86.7856 177.213 86.7291V91.9265C176.845 92.0847 175.664 92.5253 173.425 92.5253C168.623 92.5253 165.637 89.599 165.637 84.684V59.0133Z",
              })),
            h ||
              (h = L.createElement("path", {
                d: "M207.071 84.6728C205.69 89.2714 201.579 93 195.34 93C188.298 93 182.059 87.8026 182.059 78.8766C182.059 70.5494 188.142 65.0243 194.705 65.0243C202.704 65.0243 207.395 70.3799 207.395 78.7071C207.395 79.7353 207.283 80.6053 207.239 80.707H188.254C188.41 84.7067 191.507 87.5766 195.351 87.5766C199.083 87.5766 201.011 85.5767 201.857 82.978L207.071 84.6728ZM201.155 76.1197C201.044 73.0351 199.016 70.2782 194.749 70.2782C190.861 70.2782 188.61 73.3063 188.399 76.1197H201.155Z",
              })),
            f ||
              (f = L.createElement("path", {
                d: "M228.864 72.0634C228.173 71.9504 227.471 71.9052 226.836 71.9052C222.034 71.9052 219.851 74.7186 219.851 79.6448V92.1977H213.667V65.8491H219.695V70.0635C220.92 67.1936 223.806 65.5214 227.215 65.5214C227.961 65.5214 228.596 65.6344 228.864 65.6796V72.0634Z",
              })),
            g ||
              (g = L.createElement("path", {
                d: "M258.355 87.3731C258.355 89.7572 258.566 91.757 258.622 92.1864H252.706C252.595 91.5876 252.439 89.8589 252.439 88.7742C251.213 90.9887 248.495 92.8304 244.807 92.8304C237.342 92.8304 232.329 86.876 232.329 78.933C232.329 71.3628 237.398 65.1372 244.707 65.1372C249.241 65.1372 251.536 67.2501 252.338 68.9223V54.1322L258.366 53.025V87.3731H258.355ZM245.498 87.3166C249.553 87.3166 252.383 83.9044 252.383 78.8765C252.383 73.8485 249.609 70.7075 245.553 70.7075C241.498 70.7075 238.512 73.905 238.512 78.933C238.512 83.9609 241.286 87.3166 245.498 87.3166Z",
              })),
            v ||
              (v = L.createElement("path", {
                d: "M272.682 77.0914L279.345 76.0632C280.838 75.8485 281.261 75.0915 281.261 74.165C281.261 71.9504 279.768 70.1652 276.359 70.1652C273.106 70.1652 271.29 72.2781 271.022 74.922L265.374 73.6227C265.853 69.0806 269.908 65.0243 276.303 65.0243C284.303 65.0243 287.344 69.6229 287.344 74.8655V87.9608C287.344 90.3448 287.612 91.904 287.667 92.1752H281.907C281.852 92.017 281.64 90.9323 281.64 88.8195C280.414 90.8193 277.852 92.9887 273.641 92.9887C268.204 92.9887 264.839 89.2036 264.839 85.0344C264.839 80.3454 268.259 77.7467 272.682 77.0914ZM281.272 81.2606V80.0742L274.498 81.1024C272.582 81.4301 271.033 82.5148 271.033 84.6728C271.033 86.458 272.37 88.085 274.822 88.085C278.286 88.0737 281.272 86.4015 281.272 81.2606Z",
              })),
            x ||
              (x = L.createElement("path", {
                d: "M295.143 92.1865V65.8492H301.059V69.2049C302.552 66.5045 305.805 65.0921 308.735 65.0921C312.145 65.0921 315.142 66.6627 316.523 69.7472C318.551 66.2898 321.593 65.0921 324.946 65.0921C329.637 65.0921 334.126 68.1202 334.126 75.1028V92.1978H328.155V76.1197C328.155 73.0352 326.606 70.7076 323.141 70.7076C319.888 70.7076 317.749 73.3063 317.749 76.5491V92.1865H311.666V76.1197C311.666 73.0917 310.173 70.7076 306.652 70.7076C303.343 70.7076 301.26 73.1934 301.26 76.5491V92.1865H295.143Z",
              }))
          );
        },
        S = t(8321);
      function R() {
        var n = (0, b.Z)([
          "\n  width: 6rem;\n  height: auto;\n\n  transition: ",
          ";\n  fill: ",
          ";\n\n  opacity: ",
          ";\n\n  ",
          ' {\n    width: 8rem;\n  }\n\n  path {\n    transition-property: transform;\n    transition-duration: 0.5s;\n    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);\n  }\n\n  path:not([class^="letter"]) {\n    transition-property: opacity;\n    transition-delay: ',
          ";\n    transition-timing-function: cubic-bezier(0.45, 0.02, 0.09, 0.98);\n\n    opacity: ",
          ";\n  }\n\n  .letter-i {\n    transform: ",
          ";\n    transition-delay: 0.1s;\n  }\n\n  .letter-a {\n    transform: ",
          ";\n    transition-delay: 0.2s;\n  }\n\n  .letter-dot {\n    transform: ",
          ";\n    transition-delay: 0.5s;\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      var I = (0, Z.ZP)(z).withConfig({ componentId: "sc-f2d14185-0" })(
          R(),
          S.Ov,
          function (n) {
            return n.$light ? "var(--color-white)" : "var(--color-black)";
          },
          function (n) {
            return n.$hide ? 0 : 1;
          },
          E.qk.s,
          function (n) {
            return n.$monogram ? "0s" : "0.7s";
          },
          function (n) {
            return n.$monogram ? 0 : 1;
          },
          function (n) {
            return n.$monogram ? "translate(36px, -53.5px)" : "";
          },
          function (n) {
            return n.$monogram ? "translate(-4px, -53.5px)" : "";
          },
          function (n) {
            return n.$monogram ? "translate(-248px, -53.5px)" : "";
          }
        ),
        A = function (n) {
          var e = n.monogram,
            t = n.light,
            r = n.hide,
            o = n.className;
          return (0, w.jsx)(I, {
            $hide: r,
            $light: t,
            $monogram: e,
            className: o,
          });
        };
      (A.defaultProps = { monogram: !0, light: !0 }),
        (A.propTypes = {
          monogram: y().bool,
          className: y().string,
          light: y().bool,
        });
      var D = A;
      function F() {
        var n = (0, b.Z)([
          "\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  z-index: var(--z-top-bar);\n  padding: 1.25rem ",
          ";\n\n  ",
          " {\n    padding: 1.563rem ",
          ";\n  }\n\n  ",
          " {\n    padding: 1.875rem ",
          ";\n  }\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      var J = (0, Z.ZP)(O.Z).withConfig({ componentId: "sc-d39ead25-0" })(
          F(),
          (0, j.EV)(1),
          E.qk.s,
          (0, j.BT)(1),
          E.qk.m,
          (0, j.hl)(1)
        ),
        W = function (n) {
          var e = n.showLogo,
            t = n.side,
            r = n.light,
            o = n.blend,
            a = N();
          return (0, w.jsxs)(J, {
            disableBlend: !o,
            as: "header",
            id: "awwwards-paragraph",
            children: [
              e &&
                (0, w.jsx)(_.Z, {
                  href: "/",
                  children: (0, w.jsx)(D, (0, V.Z)({ light: o || r }, a)),
                }),
              t,
            ],
          });
        };
      (W.defaultProps = {
        showLogo: !0,
        light: !1,
        closeButton: null,
        blend: !1,
      }),
        (W.propTypes = {
          monogram: H.PropTypes.bool,
          showLogo: H.PropTypes.bool,
          light: H.PropTypes.bool,
          closeButton: H.PropTypes.node,
          blend: H.PropTypes.bool,
        });
      var G = W;
    },
    3775: function (n, e, t) {
      "use strict";
      var r = t(7297),
        o = t(5697),
        a = t.n(o),
        i = t(5178);
      function s() {
        var n = (0, r.Z)([
          "\n    mix-blend-mode: exclusion;\n    color: var(--color-white);\n\n    @media (prefers-contrast: more) {\n      mix-blend-mode: initial;\n      color: var(--color-black);\n      background: var(--color-off-white);\n      padding: 0.25em 0.5em;\n    }\n  ",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, r.Z)(["\n  ", ";\n"]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      var c = (0, i.ZP)("div").withConfig({ componentId: "sc-cf3e26cd-0" })(
        l(),
        function (n) {
          return n.disableBlend ? "" : (0, i.iv)(s());
        }
      );
      (c.defaultProps = { children: null, disableBlend: !1 }),
        (c.propTypes = {
          children: a().node.isRequired,
          disableBlend: a().bool,
        }),
        (e.Z = c);
    },
    9008: function (n, e, t) {
      n.exports = t(5443);
    },
  },
]);
