(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    9361: function (t, e) {
      "use strict";
      e.Z = function (t, e, n) {
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n);
        return t;
      };
    },
    7998: function (t, e, n) {
      "use strict";
      n.d(e, {
        useGesture: function () {
          return pt;
        },
        useScroll: function () {
          return ht;
        },
      });
      const r = {
        toVector: (t, e) => (
          void 0 === t && (t = e), Array.isArray(t) ? t : [t, t]
        ),
        add: (t, e) => [t[0] + e[0], t[1] + e[1]],
        sub: (t, e) => [t[0] - e[0], t[1] - e[1]],
        addTo(t, e) {
          (t[0] += e[0]), (t[1] += e[1]);
        },
        subTo(t, e) {
          (t[0] -= e[0]), (t[1] -= e[1]);
        },
      };
      function i(t, e, n) {
        return 0 === e || Math.abs(e) === 1 / 0
          ? Math.pow(t, 5 * n)
          : (t * e * n) / (e + n * t);
      }
      function o(t, e, n, r = 0.15) {
        return 0 === r
          ? (function (t, e, n) {
              return Math.max(e, Math.min(t, n));
            })(t, e, n)
          : t < e
          ? -i(e - t, n - e, r) + e
          : t > n
          ? +i(t - n, n - e, r) + n
          : t;
      }
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                a(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      const u = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function l(t) {
        return t ? t[0].toUpperCase() + t.slice(1) : "";
      }
      const d = ["enter", "leave"];
      function f(t, e = "", n = !1) {
        const r = u[t],
          i = (r && r[e]) || e;
        return (
          "on" +
          l(t) +
          l(i) +
          ((function (t = !1, e) {
            return t && !d.includes(e);
          })(n, i)
            ? "Capture"
            : "")
        );
      }
      const h = ["gotpointercapture", "lostpointercapture"];
      function p(t) {
        let e = t.substring(2).toLowerCase();
        const n = !!~e.indexOf("passive");
        n && (e = e.replace("passive", ""));
        const r = h.includes(e) ? "capturecapture" : "capture",
          i = !!~e.indexOf(r);
        return (
          i && (e = e.replace("capture", "")),
          { device: e, capture: i, passive: n }
        );
      }
      function m(t) {
        return "touches" in t;
      }
      function v(t) {
        return m(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
      }
      function g(t) {
        return m(t)
          ? (function (t) {
              return "touchend" === t.type || "touchcancel" === t.type
                ? t.changedTouches
                : t.targetTouches;
            })(t)[0]
          : t;
      }
      function y(t, e) {
        const n = e.clientX - t.clientX,
          r = e.clientY - t.clientY,
          i = (e.clientX + t.clientX) / 2,
          o = (e.clientY + t.clientY) / 2,
          a = Math.hypot(n, r);
        return {
          angle: (-180 * Math.atan2(n, r)) / Math.PI,
          distance: a,
          origin: [i, o],
        };
      }
      function b(t) {
        return (function (t) {
          return Array.from(t.touches).filter((e) => {
            var n, r;
            return (
              e.target === t.currentTarget ||
              (null === (n = t.currentTarget) ||
              void 0 === n ||
              null === (r = n.contains) ||
              void 0 === r
                ? void 0
                : r.call(n, e.target))
            );
          });
        })(t).map((t) => t.identifier);
      }
      function w(t, e) {
        const [n, r] = Array.from(t.touches).filter((t) =>
          e.includes(t.identifier)
        );
        return y(n, r);
      }
      function x(t) {
        const e = g(t);
        return m(t) ? e.identifier : e.pointerId;
      }
      function S(t) {
        const e = g(t);
        return [e.clientX, e.clientY];
      }
      function C(t) {
        let { deltaX: e, deltaY: n, deltaMode: r } = t;
        return (
          1 === r
            ? ((e *= 40), (n *= 40))
            : 2 === r && ((e *= 800), (n *= 800)),
          [e, n]
        );
      }
      function E(t, ...e) {
        return "function" === typeof t ? t(...e) : t;
      }
      function k() {}
      function P(...t) {
        return 0 === t.length
          ? k
          : 1 === t.length
          ? t[0]
          : function () {
              let e;
              for (const n of t) e = n.apply(this, arguments) || e;
              return e;
            };
      }
      function O(t, e) {
        return Object.assign({}, e, t || {});
      }
      class A {
        constructor(t, e, n) {
          (this.ctrl = t),
            (this.args = e),
            (this.key = n),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(t) {
          this.ctrl.state[this.key] = t;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          const { state: t, shared: e, ingKey: n, args: r } = this;
          (e[n] = t._active = t.active = t._blocked = t._force = !1),
            (t._step = [!1, !1]),
            (t.intentional = !1),
            (t._movement = [0, 0]),
            (t._distance = [0, 0]),
            (t._direction = [0, 0]),
            (t._delta = [0, 0]),
            (t._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (t.args = r),
            (t.axis = void 0),
            (t.memo = void 0),
            (t.elapsedTime = 0),
            (t.direction = [0, 0]),
            (t.distance = [0, 0]),
            (t.overflow = [0, 0]),
            (t._movementBound = [!1, !1]),
            (t.velocity = [0, 0]),
            (t.movement = [0, 0]),
            (t.delta = [0, 0]),
            (t.timeStamp = 0);
        }
        start(t) {
          const e = this.state,
            n = this.config;
          e._active ||
            (this.reset(),
            this.computeInitial(),
            (e._active = !0),
            (e.target = t.target),
            (e.currentTarget = t.currentTarget),
            (e.lastOffset = n.from ? E(n.from, e) : e.offset),
            (e.offset = e.lastOffset)),
            (e.startTime = e.timeStamp = t.timeStamp);
        }
        computeValues(t) {
          const e = this.state;
          (e._values = t), (e.values = this.config.transform(t));
        }
        computeInitial() {
          const t = this.state;
          (t._initial = t._values), (t.initial = t.values);
        }
        compute(t) {
          const { state: e, config: n, shared: i } = this;
          e.args = this.args;
          let a = 0;
          if (
            (t &&
              ((e.event = t),
              n.preventDefault && t.cancelable && e.event.preventDefault(),
              (e.type = t.type),
              (i.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (i.locked = !!document.pointerLockElement),
              Object.assign(
                i,
                (function (t) {
                  const e = {};
                  if (
                    ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t)
                  ) {
                    const {
                      shiftKey: n,
                      altKey: r,
                      metaKey: i,
                      ctrlKey: o,
                    } = t;
                    Object.assign(e, {
                      shiftKey: n,
                      altKey: r,
                      metaKey: i,
                      ctrlKey: o,
                    });
                  }
                  return e;
                })(t)
              ),
              (i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0),
              (a = t.timeStamp - e.timeStamp),
              (e.timeStamp = t.timeStamp),
              (e.elapsedTime = e.timeStamp - e.startTime)),
            e._active)
          ) {
            const t = e._delta.map(Math.abs);
            r.addTo(e._distance, t);
          }
          this.axisIntent && this.axisIntent(t);
          const [s, c] = e._movement,
            [u, l] = n.threshold,
            { _step: d, values: f } = e;
          if (
            (n.hasCustomTransform
              ? (!1 === d[0] && (d[0] = Math.abs(s) >= u && f[0]),
                !1 === d[1] && (d[1] = Math.abs(c) >= l && f[1]))
              : (!1 === d[0] && (d[0] = Math.abs(s) >= u && Math.sign(s) * u),
                !1 === d[1] && (d[1] = Math.abs(c) >= l && Math.sign(c) * l)),
            (e.intentional = !1 !== d[0] || !1 !== d[1]),
            !e.intentional)
          )
            return;
          const h = [0, 0];
          if (n.hasCustomTransform) {
            const [t, e] = f;
            (h[0] = !1 !== d[0] ? t - d[0] : 0),
              (h[1] = !1 !== d[1] ? e - d[1] : 0);
          } else
            (h[0] = !1 !== d[0] ? s - d[0] : 0),
              (h[1] = !1 !== d[1] ? c - d[1] : 0);
          this.restrictToAxis && !e._blocked && this.restrictToAxis(h);
          const p = e.offset,
            m = (e._active && !e._blocked) || e.active;
          m &&
            ((e.first = e._active && !e.active),
            (e.last = !e._active && e.active),
            (e.active = i[this.ingKey] = e._active),
            t &&
              (e.first &&
                ("bounds" in n && (e._bounds = E(n.bounds, e)),
                this.setup && this.setup()),
              (e.movement = h),
              this.computeOffset()));
          const [v, g] = e.offset,
            [[y, b], [w, x]] = e._bounds;
          (e.overflow = [
            v < y ? -1 : v > b ? 1 : 0,
            g < w ? -1 : g > x ? 1 : 0,
          ]),
            (e._movementBound[0] =
              !!e.overflow[0] &&
              (!1 === e._movementBound[0]
                ? e._movement[0]
                : e._movementBound[0])),
            (e._movementBound[1] =
              !!e.overflow[1] &&
              (!1 === e._movementBound[1]
                ? e._movement[1]
                : e._movementBound[1]));
          const S = (e._active && n.rubberband) || [0, 0];
          if (
            ((e.offset = (function (t, [e, n], [r, i]) {
              const [[a, s], [c, u]] = t;
              return [o(e, a, s, r), o(n, c, u, i)];
            })(e._bounds, e.offset, S)),
            (e.delta = r.sub(e.offset, p)),
            this.computeMovement(),
            m && (!e.last || a > 32))
          ) {
            e.delta = r.sub(e.offset, p);
            const t = e.delta.map(Math.abs);
            r.addTo(e.distance, t),
              (e.direction = e.delta.map(Math.sign)),
              (e._direction = e._delta.map(Math.sign)),
              !e.first && a > 0 && (e.velocity = [t[0] / a, t[1] / a]);
          }
        }
        emit() {
          const t = this.state,
            e = this.shared,
            n = this.config;
          if (
            (t._active || this.clean(),
            (t._blocked || !t.intentional) && !t._force && !n.triggerAllEvents)
          )
            return;
          const r = this.handler(
            c(c(c({}, e), t), {}, { [this.aliasKey]: t.values })
          );
          void 0 !== r && (t.memo = r);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class T extends A {
        constructor(...t) {
          super(...t), a(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = r.add(this.state.lastOffset, this.state.movement);
        }
        computeMovement() {
          this.state.movement = r.sub(this.state.offset, this.state.lastOffset);
        }
        axisIntent(t) {
          const e = this.state,
            n = this.config;
          if (!e.axis && t) {
            const r =
              "object" === typeof n.axisThreshold
                ? n.axisThreshold[v(t)]
                : n.axisThreshold;
            e.axis = (function ([t, e], n) {
              const r = Math.abs(t),
                i = Math.abs(e);
              return r > i && r > n ? "x" : i > r && i > n ? "y" : void 0;
            })(e._movement, r);
          }
          e._blocked =
            ((n.lockDirection || !!n.axis) && !e.axis) ||
            (!!n.axis && n.axis !== e.axis);
        }
        restrictToAxis(t) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                t[1] = 0;
                break;
              case "y":
                t[0] = 0;
            }
        }
      }
      const _ = (t) => t,
        j = {
          enabled: (t = !0) => t,
          eventOptions: (t, e, n) => c(c({}, n.shared.eventOptions), t),
          preventDefault: (t = !1) => t,
          triggerAllEvents: (t = !1) => t,
          rubberband(t = 0) {
            switch (t) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return r.toVector(t);
            }
          },
          from: (t) =>
            "function" === typeof t ? t : null != t ? r.toVector(t) : void 0,
          transform(t, e, n) {
            const r = t || n.shared.transform;
            return (this.hasCustomTransform = !!r), r || _;
          },
          threshold: (t) => r.toVector(t, 0),
        };
      const R = c(
          c({}, j),
          {},
          {
            axis(t, e, { axis: n }) {
              if (((this.lockDirection = "lock" === n), !this.lockDirection))
                return n;
            },
            axisThreshold: (t = 0) => t,
            bounds(t = {}) {
              if ("function" === typeof t) return (e) => R.bounds(t(e));
              if ("current" in t) return () => t.current;
              if ("function" === typeof HTMLElement && t instanceof HTMLElement)
                return t;
              const {
                left: e = -1 / 0,
                right: n = 1 / 0,
                top: r = -1 / 0,
                bottom: i = 1 / 0,
              } = t;
              return [
                [e, n],
                [r, i],
              ];
            },
          }
        ),
        M = {
          ArrowRight: (t = 1) => [10 * t, 0],
          ArrowLeft: (t = 1) => [-10 * t, 0],
          ArrowUp: (t = 1) => [0, -10 * t],
          ArrowDown: (t = 1) => [0, 10 * t],
        };
      const I =
        "undefined" !== typeof window &&
        window.document &&
        window.document.createElement;
      function L() {
        return (
          (I && "ontouchstart" in window) ||
          (I && window.navigator.maxTouchPoints > 1)
        );
      }
      const V = {
          isBrowser: I,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (t) {
              return !1;
            }
          })(),
          touch: L(),
          touchscreen: L(),
          pointer: I && "onpointerdown" in window,
          pointerLock: I && "exitPointerLock" in window.document,
        },
        D = { mouse: 0, touch: 0, pen: 8 },
        Z = c(
          c({}, R),
          {},
          {
            device(
              t,
              e,
              { pointer: { touch: n = !1, lock: r = !1, mouse: i = !1 } = {} }
            ) {
              return (
                (this.pointerLock = r && V.pointerLock),
                V.touch && n
                  ? "touch"
                  : this.pointerLock
                  ? "mouse"
                  : V.pointer && !i
                  ? "pointer"
                  : V.touch
                  ? "touch"
                  : "mouse"
              );
            },
            preventScrollAxis(t, e, { preventScroll: n }) {
              if (
                ((this.preventScrollDelay =
                  "number" === typeof n
                    ? n
                    : n || (void 0 === n && t)
                    ? 250
                    : void 0),
                V.touchscreen && !1 !== n)
              )
                return t || (void 0 !== n ? "y" : void 0);
            },
            pointerCapture(
              t,
              e,
              { pointer: { capture: n = !0, buttons: r = 1 } = {} }
            ) {
              return (
                (this.pointerButtons = r),
                !this.pointerLock && "pointer" === this.device && n
              );
            },
            keys: (t = !0) => t,
            threshold(
              t,
              e,
              { filterTaps: n = !1, tapsThreshold: i = 3, axis: o }
            ) {
              const a = r.toVector(t, n ? i : o ? 1 : 0);
              return (this.filterTaps = n), (this.tapsThreshold = i), a;
            },
            swipe({
              velocity: t = 0.5,
              distance: e = 50,
              duration: n = 250,
            } = {}) {
              return {
                velocity: this.transform(r.toVector(t)),
                distance: this.transform(r.toVector(e)),
                duration: n,
              };
            },
            delay(t = 0) {
              switch (t) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return t;
              }
            },
            axisThreshold: (t) => (t ? c(c({}, D), t) : D),
          }
        );
      const z = c(
        c({}, j),
        {},
        {
          device(t, e, { shared: n, pointer: { touch: r = !1 } = {} }) {
            if (n.target && !V.touch && V.gesture) return "gesture";
            if (V.touch && r) return "touch";
            if (V.touchscreen) {
              if (V.pointer) return "pointer";
              if (V.touch) return "touch";
            }
          },
          bounds(t, e, { scaleBounds: n = {}, angleBounds: r = {} }) {
            const i = (t) => {
                const e = O(E(n, t), { min: -1 / 0, max: 1 / 0 });
                return [e.min, e.max];
              },
              o = (t) => {
                const e = O(E(r, t), { min: -1 / 0, max: 1 / 0 });
                return [e.min, e.max];
              };
            return "function" !== typeof n && "function" !== typeof r
              ? [i(), o()]
              : (t) => [i(t), o(t)];
          },
          threshold(t, e, n) {
            this.lockDirection = "lock" === n.axis;
            return r.toVector(t, this.lockDirection ? [0.1, 3] : 0);
          },
          modifierKey: (t) => (void 0 === t ? "ctrlKey" : t),
        }
      );
      const B = c(c({}, R), {}, { mouseOnly: (t = !0) => t });
      const N = R;
      const F = R;
      const $ = c(c({}, R), {}, { mouseOnly: (t = !0) => t }),
        U = new Map(),
        H = new Map();
      function q(t) {
        U.set(t.key, t.engine), H.set(t.key, t.resolver);
      }
      const W = {
          key: "drag",
          engine: class extends T {
            constructor(...t) {
              super(...t), a(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              const t = this.state;
              (t._pointerId = void 0),
                (t._pointerActive = !1),
                (t._keyboardActive = !1),
                (t._preventScroll = !1),
                (t._delayed = !1),
                (t.swipe = [0, 0]),
                (t.tap = !1),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this));
            }
            setup() {
              const t = this.state;
              if (t._bounds instanceof HTMLElement) {
                const e = t._bounds.getBoundingClientRect(),
                  n = t.currentTarget.getBoundingClientRect(),
                  r = {
                    left: e.left - n.left + t.offset[0],
                    right: e.right - n.right + t.offset[0],
                    top: e.top - n.top + t.offset[1],
                    bottom: e.bottom - n.bottom + t.offset[1],
                  };
                t._bounds = R.bounds(r);
              }
            }
            cancel() {
              const t = this.state;
              t.canceled ||
                ((t.canceled = !0),
                (t._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(t) {
              const e = this.config,
                n = this.state;
              if (
                null != t.buttons &&
                (Array.isArray(e.pointerButtons)
                  ? !e.pointerButtons.includes(t.buttons)
                  : -1 !== e.pointerButtons && e.pointerButtons !== t.buttons)
              )
                return;
              const r = this.ctrl.setEventIds(t);
              e.pointerCapture && t.target.setPointerCapture(t.pointerId),
                (r && r.size > 1 && n._pointerActive) ||
                  (this.start(t),
                  this.setupPointer(t),
                  (n._pointerId = x(t)),
                  (n._pointerActive = !0),
                  this.computeValues(S(t)),
                  this.computeInitial(),
                  e.preventScrollAxis && "mouse" !== v(t)
                    ? ((n._active = !1), this.setupScrollPrevention(t))
                    : e.delay > 0
                    ? (this.setupDelayTrigger(t),
                      e.triggerAllEvents && (this.compute(t), this.emit()))
                    : this.startPointerDrag(t));
            }
            startPointerDrag(t) {
              const e = this.state;
              (e._active = !0),
                (e._preventScroll = !0),
                (e._delayed = !1),
                this.compute(t),
                this.emit();
            }
            pointerMove(t) {
              const e = this.state,
                n = this.config;
              if (!e._pointerActive) return;
              if (e.type === t.type && t.timeStamp === e.timeStamp) return;
              const i = x(t);
              if (void 0 !== e._pointerId && i !== e._pointerId) return;
              const o = S(t);
              return (
                document.pointerLockElement === t.target
                  ? (e._delta = [t.movementX, t.movementY])
                  : ((e._delta = r.sub(o, e._values)), this.computeValues(o)),
                r.addTo(e._movement, e._delta),
                this.compute(t),
                e._delayed && e.intentional
                  ? (this.timeoutStore.remove("dragDelay"),
                    (e.active = !1),
                    void this.startPointerDrag(t))
                  : n.preventScrollAxis && !e._preventScroll
                  ? e.axis
                    ? e.axis === n.preventScrollAxis ||
                      "xy" === n.preventScrollAxis
                      ? ((e._active = !1), void this.clean())
                      : (this.timeoutStore.remove("startPointerDrag"),
                        void this.startPointerDrag(t))
                    : void 0
                  : void this.emit()
              );
            }
            pointerUp(t) {
              this.ctrl.setEventIds(t);
              try {
                this.config.pointerCapture &&
                  t.target.hasPointerCapture(t.pointerId) &&
                  t.target.releasePointerCapture(t.pointerId);
              } catch (a) {
                0;
              }
              const e = this.state,
                n = this.config;
              if (!e._active || !e._pointerActive) return;
              const r = x(t);
              if (void 0 !== e._pointerId && r !== e._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(t);
              const [i, o] = e._distance;
              if (
                ((e.tap = i <= n.tapsThreshold && o <= n.tapsThreshold),
                e.tap && n.filterTaps)
              )
                e._force = !0;
              else {
                const [t, r] = e.direction,
                  [i, o] = e.velocity,
                  [a, s] = e.movement,
                  [c, u] = n.swipe.velocity,
                  [l, d] = n.swipe.distance,
                  f = n.swipe.duration;
                e.elapsedTime < f &&
                  (Math.abs(i) > c && Math.abs(a) > l && (e.swipe[0] = t),
                  Math.abs(o) > u && Math.abs(s) > d && (e.swipe[1] = r));
              }
              this.emit();
            }
            pointerClick(t) {
              !this.state.tap &&
                t.detail > 0 &&
                (t.preventDefault(), t.stopPropagation());
            }
            setupPointer(t) {
              const e = this.config,
                n = e.device;
              e.pointerLock && t.currentTarget.requestPointerLock(),
                e.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    n,
                    "change",
                    this.pointerMove.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    n,
                    "end",
                    this.pointerUp.bind(this)
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    n,
                    "cancel",
                    this.pointerUp.bind(this)
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(t) {
              this.state._preventScroll && t.cancelable && t.preventDefault();
            }
            setupScrollPrevention(t) {
              (this.state._preventScroll = !1),
                (function (t) {
                  "persist" in t &&
                    "function" === typeof t.persist &&
                    t.persist();
                })(t);
              const e = this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 }
              );
              this.eventStore.add(this.sharedConfig.window, "touch", "end", e),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  e
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScrollDelay,
                  t
                );
            }
            setupDelayTrigger(t) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  () => {
                    (this.state._step = [0, 0]), this.startPointerDrag(t);
                  },
                  this.config.delay
                );
            }
            keyDown(t) {
              const e = M[t.key];
              if (e) {
                const n = this.state,
                  i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
                this.start(t),
                  (n._delta = e(i)),
                  (n._keyboardActive = !0),
                  r.addTo(n._movement, n._delta),
                  this.compute(t),
                  this.emit();
              }
            }
            keyUp(t) {
              t.key in M &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(t),
                this.emit());
            }
            bind(t) {
              const e = this.config.device;
              t(e, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (t(e, "change", this.pointerMove.bind(this)),
                  t(e, "end", this.pointerUp.bind(this)),
                  t(e, "cancel", this.pointerUp.bind(this)),
                  t("lostPointerCapture", "", this.pointerUp.bind(this))),
                this.config.keys &&
                  (t("key", "down", this.keyDown.bind(this)),
                  t("key", "up", this.keyUp.bind(this))),
                this.config.filterTaps &&
                  t("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: Z,
        },
        G = {
          key: "hover",
          engine: class extends T {
            constructor(...t) {
              super(...t), a(this, "ingKey", "hovering");
            }
            enter(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.start(t),
                this.computeValues(S(t)),
                this.compute(t),
                this.emit());
            }
            leave(t) {
              if (this.config.mouseOnly && "mouse" !== t.pointerType) return;
              const e = this.state;
              if (!e._active) return;
              e._active = !1;
              const n = S(t);
              (e._movement = e._delta = r.sub(n, e._values)),
                this.computeValues(n),
                this.compute(t),
                (e.delta = e.movement),
                this.emit();
            }
            bind(t) {
              t("pointer", "enter", this.enter.bind(this)),
                t("pointer", "leave", this.leave.bind(this));
            }
          },
          resolver: $,
        },
        Y = {
          key: "move",
          engine: class extends T {
            constructor(...t) {
              super(...t), a(this, "ingKey", "moving");
            }
            move(t) {
              (this.config.mouseOnly && "mouse" !== t.pointerType) ||
                (this.state._active ? this.moveChange(t) : this.moveStart(t),
                this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
            }
            moveStart(t) {
              this.start(t),
                this.computeValues(S(t)),
                this.compute(t),
                this.computeInitial(),
                this.emit();
            }
            moveChange(t) {
              if (!this.state._active) return;
              const e = S(t),
                n = this.state;
              (n._delta = r.sub(e, n._values)),
                r.addTo(n._movement, n._delta),
                this.computeValues(e),
                this.compute(t),
                this.emit();
            }
            moveEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            bind(t) {
              t("pointer", "change", this.move.bind(this)),
                t("pointer", "leave", this.moveEnd.bind(this));
            }
          },
          resolver: B,
        },
        K = {
          key: "pinch",
          engine: class extends A {
            constructor(...t) {
              super(...t),
                a(this, "ingKey", "pinching"),
                a(this, "aliasKey", "da");
            }
            init() {
              (this.state.offset = [1, 0]),
                (this.state.lastOffset = [1, 0]),
                (this.state._pointerEvents = new Map());
            }
            reset() {
              super.reset();
              const t = this.state;
              (t._touchIds = []),
                (t.canceled = !1),
                (t.cancel = this.cancel.bind(this)),
                (t.turns = 0);
            }
            computeOffset() {
              const { type: t, movement: e, lastOffset: n } = this.state;
              this.state.offset =
                "wheel" === t ? r.add(e, n) : [(1 + e[0]) * n[0], e[1] + n[1]];
            }
            computeMovement() {
              const { offset: t, lastOffset: e } = this.state;
              this.state.movement = [t[0] / e[0], t[1] - e[1]];
            }
            axisIntent() {
              const t = this.state,
                [e, n] = t._movement;
              if (!t.axis) {
                const r = 30 * Math.abs(e) - Math.abs(n);
                r < 0 ? (t.axis = "angle") : r > 0 && (t.axis = "scale");
              }
            }
            restrictToAxis(t) {
              this.config.lockDirection &&
                ("scale" === this.state.axis
                  ? (t[1] = 0)
                  : "angle" === this.state.axis && (t[0] = 0));
            }
            cancel() {
              const t = this.state;
              t.canceled ||
                setTimeout(() => {
                  (t.canceled = !0),
                    (t._active = !1),
                    this.compute(),
                    this.emit();
                }, 0);
            }
            touchStart(t) {
              this.ctrl.setEventIds(t);
              const e = this.state,
                n = this.ctrl.touchIds;
              if (e._active && e._touchIds.every((t) => n.has(t))) return;
              if (n.size < 2) return;
              this.start(t), (e._touchIds = Array.from(n).slice(0, 2));
              const r = w(t, e._touchIds);
              this.pinchStart(t, r);
            }
            pointerStart(t) {
              if (null != t.buttons && t.buttons % 2 !== 1) return;
              this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
              const e = this.state,
                n = e._pointerEvents,
                r = this.ctrl.pointerIds;
              if (e._active && Array.from(n.keys()).every((t) => r.has(t)))
                return;
              if (
                (n.size < 2 && n.set(t.pointerId, t), e._pointerEvents.size < 2)
              )
                return;
              this.start(t);
              const i = y(...Array.from(n.values()));
              this.pinchStart(t, i);
            }
            pinchStart(t, e) {
              (this.state.origin = e.origin),
                this.computeValues([e.distance, e.angle]),
                this.computeInitial(),
                this.compute(t),
                this.emit();
            }
            touchMove(t) {
              if (!this.state._active) return;
              const e = w(t, this.state._touchIds);
              this.pinchMove(t, e);
            }
            pointerMove(t) {
              const e = this.state._pointerEvents;
              if (
                (e.has(t.pointerId) && e.set(t.pointerId, t),
                !this.state._active)
              )
                return;
              const n = y(...Array.from(e.values()));
              this.pinchMove(t, n);
            }
            pinchMove(t, e) {
              const n = this.state,
                r = n._values[1],
                i = e.angle - r;
              let o = 0;
              Math.abs(i) > 270 && (o += Math.sign(i)),
                this.computeValues([e.distance, e.angle - 360 * o]),
                (n.origin = e.origin),
                (n.turns = o),
                (n._movement = [
                  n._values[0] / n._initial[0] - 1,
                  n._values[1] - n._initial[1],
                ]),
                this.compute(t),
                this.emit();
            }
            touchEnd(t) {
              this.ctrl.setEventIds(t),
                this.state._active &&
                  this.state._touchIds.some(
                    (t) => !this.ctrl.touchIds.has(t)
                  ) &&
                  ((this.state._active = !1), this.compute(t), this.emit());
            }
            pointerEnd(t) {
              const e = this.state;
              this.ctrl.setEventIds(t);
              try {
                t.target.releasePointerCapture(t.pointerId);
              } catch (n) {}
              e._pointerEvents.has(t.pointerId) &&
                e._pointerEvents.delete(t.pointerId),
                e._active &&
                  e._pointerEvents.size < 2 &&
                  ((e._active = !1), this.compute(t), this.emit());
            }
            gestureStart(t) {
              t.cancelable && t.preventDefault();
              const e = this.state;
              e._active ||
                (this.start(t),
                this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit());
            }
            gestureMove(t) {
              if ((t.cancelable && t.preventDefault(), !this.state._active))
                return;
              const e = this.state;
              this.computeValues([t.scale, t.rotation]),
                (e.origin = [t.clientX, t.clientY]);
              const n = e._movement;
              (e._movement = [t.scale - 1, t.rotation]),
                (e._delta = r.sub(e._movement, n)),
                this.compute(t),
                this.emit();
            }
            gestureEnd(t) {
              this.state._active &&
                ((this.state._active = !1), this.compute(t), this.emit());
            }
            wheel(t) {
              const e = this.config.modifierKey;
              (e && !t[e]) ||
                (this.state._active ? this.wheelChange(t) : this.wheelStart(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
            }
            wheelStart(t) {
              this.start(t), this.wheelChange(t);
            }
            wheelChange(t) {
              "uv" in t || (t.cancelable && t.preventDefault());
              const e = this.state;
              (e._delta = [(-C(t)[1] / 100) * e.offset[0], 0]),
                r.addTo(e._movement, e._delta),
                (this.state.origin = [t.clientX, t.clientY]),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              const e = this.config.device;
              e &&
                (t(e, "start", this[e + "Start"].bind(this)),
                t(e, "change", this[e + "Move"].bind(this)),
                t(e, "end", this[e + "End"].bind(this)),
                t(e, "cancel", this[e + "End"].bind(this))),
                t("wheel", "", this.wheel.bind(this), { passive: !1 });
            }
          },
          resolver: z,
        },
        X = {
          key: "scroll",
          engine: class extends T {
            constructor(...t) {
              super(...t), a(this, "ingKey", "scrolling");
            }
            scroll(t) {
              this.state._active || this.start(t),
                this.scrollChange(t),
                this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
            }
            scrollChange(t) {
              t.cancelable && t.preventDefault();
              const e = this.state,
                n = (function (t) {
                  var e, n;
                  const {
                    scrollX: r,
                    scrollY: i,
                    scrollLeft: o,
                    scrollTop: a,
                  } = t.currentTarget;
                  return [
                    null !== (e = null !== r && void 0 !== r ? r : o) &&
                    void 0 !== e
                      ? e
                      : 0,
                    null !== (n = null !== i && void 0 !== i ? i : a) &&
                    void 0 !== n
                      ? n
                      : 0,
                  ];
                })(t);
              (e._delta = r.sub(n, e._values)),
                r.addTo(e._movement, e._delta),
                this.computeValues(n),
                this.compute(t),
                this.emit();
            }
            scrollEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("scroll", "", this.scroll.bind(this));
            }
          },
          resolver: N,
        },
        J = {
          key: "wheel",
          engine: class extends T {
            constructor(...t) {
              super(...t), a(this, "ingKey", "wheeling");
            }
            wheel(t) {
              this.state._active || this.start(t),
                this.wheelChange(t),
                this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
            }
            wheelChange(t) {
              const e = this.state;
              (e._delta = C(t)), r.addTo(e._movement, e._delta);
              const [n, i] = e.overflow,
                [o, a] = e._delta,
                [s, c] = e._direction;
              ((n < 0 && o > 0 && s < 0) || (n > 0 && o < 0 && s > 0)) &&
                (e._movement[0] = e._movementBound[0]),
                ((i < 0 && a > 0 && c < 0) || (i > 0 && a < 0 && c > 0)) &&
                  (e._movement[1] = e._movementBound[1]),
                this.compute(t),
                this.emit();
            }
            wheelEnd() {
              this.state._active &&
                ((this.state._active = !1), this.compute(), this.emit());
            }
            bind(t) {
              t("wheel", "", this.wheel.bind(this));
            }
          },
          resolver: F,
        };
      var Q = n(7294);
      function tt(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      const et = {
          target(t) {
            if (t) return () => ("current" in t ? t.current : t);
          },
          enabled: (t = !0) => t,
          window: (t = V.isBrowser ? window : void 0) => t,
          eventOptions: ({ passive: t = !0, capture: e = !1 } = {}) => ({
            passive: t,
            capture: e,
          }),
          transform: (t) => t,
        },
        nt = ["target", "eventOptions", "window", "enabled", "transform"];
      function rt(t = {}, e) {
        const n = {};
        for (const [r, i] of Object.entries(e))
          switch (typeof i) {
            case "function":
              n[r] = i.call(n, t[r], r, t);
              break;
            case "object":
              n[r] = rt(t[r], i);
              break;
            case "boolean":
              i && (n[r] = t[r]);
          }
        return n;
      }
      class it {
        constructor(t, e) {
          a(this, "_listeners", new Set()),
            (this._ctrl = t),
            (this._gestureKey = e);
        }
        add(t, e, n, r, i) {
          const o = this._listeners,
            a = (function (t, e = "") {
              const n = u[t];
              return t + ((n && n[e]) || e);
            })(e, n),
            s = c(
              c(
                {},
                this._gestureKey
                  ? this._ctrl.config[this._gestureKey].eventOptions
                  : {}
              ),
              i
            );
          t.addEventListener(a, r, s);
          const l = () => {
            t.removeEventListener(a, r, s), o.delete(l);
          };
          return o.add(l), l;
        }
        clean() {
          this._listeners.forEach((t) => t()), this._listeners.clear();
        }
      }
      class ot {
        constructor() {
          a(this, "_timeouts", new Map());
        }
        add(t, e, n = 140, ...r) {
          this.remove(t), this._timeouts.set(t, window.setTimeout(e, n, ...r));
        }
        remove(t) {
          const e = this._timeouts.get(t);
          e && window.clearTimeout(e);
        }
        clean() {
          this._timeouts.forEach((t) => {
            window.clearTimeout(t);
          }),
            this._timeouts.clear();
        }
      }
      class at {
        constructor(t) {
          a(this, "gestures", new Set()),
            a(this, "_targetEventStore", new it(this)),
            a(this, "gestureEventStores", {}),
            a(this, "gestureTimeoutStores", {}),
            a(this, "handlers", {}),
            a(this, "config", {}),
            a(this, "pointerIds", new Set()),
            a(this, "touchIds", new Set()),
            a(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            (function (t, e) {
              e.drag && st(t, "drag");
              e.wheel && st(t, "wheel");
              e.scroll && st(t, "scroll");
              e.move && st(t, "move");
              e.pinch && st(t, "pinch");
              e.hover && st(t, "hover");
            })(this, t);
        }
        setEventIds(t) {
          return m(t)
            ? ((this.touchIds = new Set(b(t))), this.touchIds)
            : "pointerId" in t
            ? ("pointerup" === t.type || "pointercancel" === t.type
                ? this.pointerIds.delete(t.pointerId)
                : "pointerdown" === t.type && this.pointerIds.add(t.pointerId),
              this.pointerIds)
            : void 0;
        }
        applyHandlers(t, e) {
          (this.handlers = t), (this.nativeHandlers = e);
        }
        applyConfig(t, e) {
          this.config = (function (t, e, n = {}) {
            const r = t,
              {
                target: i,
                eventOptions: o,
                window: a,
                enabled: s,
                transform: u,
              } = r,
              l = tt(r, nt);
            if (
              ((n.shared = rt(
                {
                  target: i,
                  eventOptions: o,
                  window: a,
                  enabled: s,
                  transform: u,
                },
                et
              )),
              e)
            ) {
              const t = H.get(e);
              n[e] = rt(c({ shared: n.shared }, l), t);
            } else
              for (const d in l) {
                const t = H.get(d);
                t && (n[d] = rt(c({ shared: n.shared }, l[d]), t));
              }
            return n;
          })(t, e, this.config);
        }
        clean() {
          this._targetEventStore.clean();
          for (const t of this.gestures)
            this.gestureEventStores[t].clean(),
              this.gestureTimeoutStores[t].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...t) {
          const e = this.config.shared,
            n = {};
          let r;
          if (!e.target || ((r = e.target()), r)) {
            if (e.enabled) {
              for (const e of this.gestures) {
                const i = this.config[e],
                  o = ct(n, i.eventOptions, !!r);
                if (i.enabled) {
                  new (U.get(e))(this, t, e).bind(o);
                }
              }
              const i = ct(n, e.eventOptions, !!r);
              for (const e in this.nativeHandlers)
                i(
                  e,
                  "",
                  (n) =>
                    this.nativeHandlers[e](
                      c(c({}, this.state.shared), {}, { event: n, args: t })
                    ),
                  void 0,
                  !0
                );
            }
            for (const t in n) n[t] = P(...n[t]);
            if (!r) return n;
            for (const t in n) {
              const { device: e, capture: i, passive: o } = p(t);
              this._targetEventStore.add(r, e, "", n[t], {
                capture: i,
                passive: o,
              });
            }
          }
        }
      }
      function st(t, e) {
        t.gestures.add(e),
          (t.gestureEventStores[e] = new it(t, e)),
          (t.gestureTimeoutStores[e] = new ot());
      }
      const ct =
          (t, e, n) =>
          (r, i, o, a = {}, s = !1) => {
            var c, u;
            const l = null !== (c = a.capture) && void 0 !== c ? c : e.capture,
              d = null !== (u = a.passive) && void 0 !== u ? u : e.passive;
            let h = s ? r : f(r, i, l);
            n && d && (h += "Passive"), (t[h] = t[h] || []), t[h].push(o);
          },
        ut = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
      function lt(t, e, n, r, i, o) {
        if (!t.has(n)) return;
        if (!U.has(r)) return void 0;
        const a = n + "Start",
          s = n + "End";
        (i[r] = (t) => {
          let r;
          return (
            t.first && a in e && e[a](t),
            n in e && (r = e[n](t)),
            t.last && s in e && e[s](t),
            r
          );
        }),
          (o[r] = o[r] || {});
      }
      function dt(t, e) {
        const [n, r, i] = (function (t) {
            const e = {},
              n = {},
              r = new Set();
            for (let i in t)
              ut.test(i)
                ? (r.add(RegExp.lastMatch), (n[i] = t[i]))
                : (e[i] = t[i]);
            return [n, e, r];
          })(t),
          o = {};
        return (
          lt(i, n, "onDrag", "drag", o, e),
          lt(i, n, "onWheel", "wheel", o, e),
          lt(i, n, "onScroll", "scroll", o, e),
          lt(i, n, "onPinch", "pinch", o, e),
          lt(i, n, "onMove", "move", o, e),
          lt(i, n, "onHover", "hover", o, e),
          { handlers: o, config: e, nativeHandlers: r }
        );
      }
      function ft(t, e = {}, n, r) {
        const i = Q.useMemo(() => new at(t), []);
        if (
          (i.applyHandlers(t, r),
          i.applyConfig(e, n),
          Q.useEffect(i.effect.bind(i)),
          Q.useEffect(() => i.clean.bind(i), []),
          void 0 === e.target)
        )
          return i.bind.bind(i);
      }
      function ht(t, e) {
        return q(X), ft({ scroll: t }, e || {}, "scroll");
      }
      function pt(t, e) {
        const n =
          ([W, K, X, J, Y, G].forEach(q),
          function (t, e) {
            const {
              handlers: n,
              nativeHandlers: r,
              config: i,
            } = dt(t, e || {});
            return ft(n, i, void 0, r);
          });
        return n(t, e || {});
      }
    },
    4394: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return i;
        },
      });
      var r = function () {},
        i = function () {};
    },
    8679: function (t, e, n) {
      "use strict";
      var r = n(1296),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(t) {
        return r.isMemo(t) ? a : s[t.$$typeof] || i;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, n, r) {
        if ("string" !== typeof n) {
          if (p) {
            var i = h(n);
            i && i !== p && t(e, i, r);
          }
          var a = l(n);
          d && (a = a.concat(d(n)));
          for (var s = c(e), m = c(n), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!o[g] && (!r || !r[g]) && (!m || !m[g]) && (!s || !s[g])) {
              var y = f(n, g);
              try {
                u(e, g, y);
              } catch (b) {}
            }
          }
        }
        return e;
      };
    },
    6103: function (t, e) {
      "use strict";
      var n = "function" === typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        c = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        l = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function x(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case l:
                case d:
                case o:
                case s:
                case a:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case u:
                    case f:
                    case v:
                    case m:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function S(t) {
        return x(t) === d;
      }
      (e.AsyncMode = l),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = u),
        (e.ContextProvider = c),
        (e.Element = r),
        (e.ForwardRef = f),
        (e.Fragment = o),
        (e.Lazy = v),
        (e.Memo = m),
        (e.Portal = i),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = h),
        (e.isAsyncMode = function (t) {
          return S(t) || x(t) === l;
        }),
        (e.isConcurrentMode = S),
        (e.isContextConsumer = function (t) {
          return x(t) === u;
        }),
        (e.isContextProvider = function (t) {
          return x(t) === c;
        }),
        (e.isElement = function (t) {
          return "object" === typeof t && null !== t && t.$$typeof === r;
        }),
        (e.isForwardRef = function (t) {
          return x(t) === f;
        }),
        (e.isFragment = function (t) {
          return x(t) === o;
        }),
        (e.isLazy = function (t) {
          return x(t) === v;
        }),
        (e.isMemo = function (t) {
          return x(t) === m;
        }),
        (e.isPortal = function (t) {
          return x(t) === i;
        }),
        (e.isProfiler = function (t) {
          return x(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return x(t) === a;
        }),
        (e.isSuspense = function (t) {
          return x(t) === h;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" === typeof t ||
            "function" === typeof t ||
            t === o ||
            t === d ||
            t === s ||
            t === a ||
            t === h ||
            t === p ||
            ("object" === typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === c ||
                t.$$typeof === u ||
                t.$$typeof === f ||
                t.$$typeof === y ||
                t.$$typeof === b ||
                t.$$typeof === w ||
                t.$$typeof === g))
          );
        }),
        (e.typeOf = x);
    },
    1296: function (t, e, n) {
      "use strict";
      t.exports = n(6103);
    },
    1118: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(7080);
        },
      ]);
    },
    661: function (t, e, n) {
      "use strict";
      n.d(e, {
        n: function () {
          return x;
        },
      });
      var r = n(7568),
        i = n(4924),
        o = n(6042),
        a = n(9396),
        s = n(828),
        c = n(7297),
        u = n(414),
        l = n(5893),
        d = n(7294),
        f = n(5152),
        h = n.n(f),
        p = n(1163),
        m = n(3302),
        v = n(6513),
        g = n(5178),
        y = n(2216);
      function b() {
        var t = (0, c.Z)([
          "\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n",
        ]);
        return (
          (b = function () {
            return t;
          }),
          t
        );
      }
      var w = h()(
          function () {
            return Promise.all([n.e(423), n.e(447)]).then(n.bind(n, 7447));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7447];
              },
            },
          }
        ),
        x = (0, d.createContext)({
          transitioning: !1,
          preLoadImage: function () {
            return null;
          },
          onClick: function () {
            return null;
          },
          onCaseDetailLoaded: function () {
            return null;
          },
        }),
        S = g.ZP.div.withConfig({ componentId: "sc-16d9c93c-0" })(b()),
        C = function () {
          return null;
        },
        E = ["clicked", "cardRect", "imageLoaded"],
        k = function (t) {
          var e = t.children,
            n = (0, d.useRef)({}),
            c = (0, d.useState)(null),
            f = c[0],
            h = c[1],
            g = (0, d.useState)(null),
            b = g[0],
            k = g[1],
            P = (0, m.J)(),
            O = (0, d.useRef)(null),
            A = (0, d.useRef)(null),
            T = (0, d.useRef)(null),
            _ = (0, p.useRouter)(),
            j = _.asPath,
            R = _.push,
            M = (0, v._)();
          (0, d.useEffect)(function () {
            T.current = document.querySelector("#".concat(y.z));
          }, []),
            (0, d.useEffect)(
              function () {
                var t;
                if (b && O.current !== b && j !== b) {
                  O.current = b;
                  var e = (
                    (null === (t = n.current) || void 0 === t
                      ? void 0
                      : t[b]) || {}
                  ).cardRect;
                  if (P) return R(b);
                  var i = (function () {
                    var t = (0, r.Z)(function () {
                      return (0, u.__generator)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return (
                              M.set({
                                width: e.width,
                                height: e.height,
                                x: e.x,
                                y: e.y,
                                opacity: 0,
                              }),
                              [4, M.start({ display: "block", opacity: 1 })]
                            );
                          case 1:
                            return (
                              t.sent(),
                              [
                                4,
                                M.start({
                                  width: A.current.offsetWidth,
                                  height: A.current.offsetHeight,
                                  x: 0,
                                  y: 0,
                                }),
                              ]
                            );
                          case 2:
                            return t.sent(), R(b), (O.current = null), [2];
                        }
                      });
                    });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })();
                  i();
                }
              },
              [b, M, P, R, j]
            );
          var I = (0, d.useMemo)(
              function () {
                var t = function () {
                  h(null), k(null);
                };
                if (b)
                  return [
                    {
                      transitioning: !0,
                      onCaseDetailLoaded: t,
                      preLoadImage: C,
                      onClick: C,
                    },
                    C,
                  ];
                var e = function (t, e) {
                  Object.entries(e).forEach(function (e) {
                    var r = (0, s.Z)(e, 2),
                      c = r[0],
                      u = r[1],
                      l = n.current[t] || {};
                    n.current[t] = (0, a.Z)(
                      (0, o.Z)({}, l),
                      (0, i.Z)({}, c, u)
                    );
                  });
                  var r = Object.entries(n.current).find(function (t) {
                    var e = (0, s.Z)(t, 2)[1];
                    return E.every(function (t) {
                      return Boolean(e[t]);
                    });
                  });
                  r &&
                    (Object.keys(n.current).forEach(function (t) {
                      n.current[t] = (0, a.Z)((0, o.Z)({}, n.current[t]), {
                        clicked: !1,
                      });
                    }),
                    k(r[0]));
                };
                return [
                  {
                    transitioning: !1,
                    preLoadImage: function (t) {
                      return h(t);
                    },
                    onClick: function (t, n) {
                      if (P) return R(n);
                      e(n, {
                        clicked: !0,
                        cardRect: t.target.getBoundingClientRect(),
                      }),
                        t.preventDefault();
                    },
                    onCaseDetailLoaded: t,
                  },
                  function (t) {
                    return e(t, { imageLoaded: !0 });
                  },
                ];
              },
              [b, P, R]
            ),
            L = I[0],
            V = I[1];
          return (0, l.jsxs)(x.Provider, {
            value: L,
            children: [
              e,
              Boolean(f) &&
                (0, l.jsx)(w, { controls: M, content: f, onImageLoaded: V }),
              (0, l.jsx)(S, { ref: A }),
            ],
          });
        };
      e.Z = (0, d.memo)(k);
    },
    3052: function (t, e, n) {
      "use strict";
      n.d(e, {
        VT: function () {
          return b;
        },
        qP: function () {
          return y;
        },
      });
      var r = n(7297),
        i = n(5893),
        o = n(5697),
        a = n.n(o),
        s = n(5178),
        c = n(5137),
        u = n(8556);
      function l() {
        var t = (0, r.Z)([
          "\n  position: absolute;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n\n  padding-right: 0.35rem;\n  opacity: 0;\n\n  transform: translateX(0.35rem);\n  transition: opacity 0.25s ",
          ",\n    transform 0.25s ",
          ";\n",
        ]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      function d() {
        var t = (0, r.Z)([
          "\n  display: inline-block;\n  width: ",
          ";\n  height: ",
          ";\n\n  border-radius: 100%;\n  background-color: ",
          ";\n",
        ]);
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }
      function f() {
        var t = (0, r.Z)([
          "\n  display: inline-block;\n\n  transition: transform 0.25s ",
          ";\n",
        ]);
        return (
          (f = function () {
            return t;
          }),
          t
        );
      }
      function h() {
        var t = (0, r.Z)([
          "\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (h = function () {
            return t;
          }),
          t
        );
      }
      var p = ".6em",
        m = s.ZP.span.withConfig({ componentId: "sc-eca77c35-0" })(
          l(),
          c.t.manvydas2,
          c.t.manvydas2
        ),
        v = s.ZP.span.withConfig({ componentId: "sc-eca77c35-1" })(
          d(),
          p,
          p,
          function (t) {
            var e = t.$color,
              n = t.$dotOverwriteTheme;
            return n || e;
          }
        ),
        g = s.ZP.span.withConfig({ componentId: "sc-eca77c35-2" })(
          f(),
          c.t.manvydas2
        ),
        y = "\n  "
          .concat(
            m,
            " {\n    opacity: 1;\n    transform: translateX(0rem);\n  }\n\n  "
          )
          .concat(g, " {\n    transform: translateX(")
          .concat("1em", ");\n  }\n"),
        b = s.ZP.div.withConfig({ componentId: "sc-eca77c35-3" })(
          h(),
          function (t) {
            return t.$active && y;
          },
          function () {
            return (0, u.Mr)(y);
          }
        ),
        w = function (t) {
          var e = t.children,
            n = t.active,
            r = t.activeColor,
            o = t.idleColor,
            a = t.dotOverwriteTheme;
          return (0, i.jsxs)(b, {
            $active: n,
            children: [
              (0, i.jsx)(m, {
                children: (0, i.jsx)(v, {
                  $color: n ? r : o,
                  $dotOverwriteTheme: a,
                }),
              }),
              (0, i.jsx)(g, { children: e }),
            ],
          });
        };
      (w.defaultProps = {
        active: !1,
        idleColor: "var(--color-terracotta)",
        activeColor: "var(--color-blue)",
        children: null,
        dotOverwriteTheme: null,
      }),
        (w.propTypes = {
          active: a().bool,
          idleColor: a().string,
          activeColor: a().string,
          children: a().node,
        }),
        (e.ZP = w);
    },
    8665: function (t, e, n) {
      "use strict";
      var r = n(6042),
        i = n(9396),
        o = n(9534),
        a = n(7297),
        s = n(5893),
        c = n(1664),
        u = n.n(c),
        l = n(1163),
        d = n(5697),
        f = n.n(d);
      function h() {
        var t = (0, a.Z)(["\n  display: contents;\n  cursor: pointer;\n"]);
        return (
          (h = function () {
            return t;
          }),
          t
        );
      }
      var p = n(5178).ZP.a.withConfig({ componentId: "sc-266378bb-0" })(h()),
        m = function (t) {
          var e = t.href,
            n = t.url,
            a = t.children,
            c = t.renderAnchor,
            d = (0, o.Z)(t, ["href", "url", "children", "renderAnchor"]),
            f = (0, l.useRouter)().isPreview;
          return e || n
            ? f
              ? (0, s.jsx)(
                  p,
                  (0, i.Z)((0, r.Z)({}, d), { as: "span", children: a })
                )
              : (0, s.jsx)(u(), {
                  href: e || n,
                  passHref: !0,
                  children: c
                    ? (0, s.jsx)(p, (0, i.Z)((0, r.Z)({}, d), { children: a }))
                    : a,
                })
            : a;
        };
      (m.defaultProps = { renderAnchor: !0 }),
        (m.propTypes = { href: f().string, renderAnchor: f().bool }),
        (e.Z = m);
    },
    4651: function (t, e, n) {
      "use strict";
      var r = n(6042),
        i = n(9396),
        o = n(9534),
        a = n(7297),
        s = n(5893),
        c = n(7294),
        u = n(5697),
        l = n.n(u),
        d = n(5178),
        f = n(1734),
        h = n(3036);
      function p() {
        var t = (0, a.Z)(["\n  ", ";\n  color: ", ";\n"]);
        return (
          (p = function () {
            return t;
          }),
          t
        );
      }
      var m = d.ZP.div.withConfig({ componentId: "sc-e16d3d17-0" })(
          p(),
          function (t) {
            var e = t.$variant;
            return h.g[e];
          },
          function (t) {
            var e = t.$color;
            return f.DM[e];
          }
        ),
        v = (0, c.forwardRef)(function (t, e) {
          var n = t.tag,
            a = t.variant,
            c = t.color,
            u = t.children,
            l = (0, o.Z)(t, ["tag", "variant", "color", "children"]);
          return (0,
          s.jsx)(m, (0, i.Z)((0, r.Z)({ ref: e, as: n, $variant: a, $color: c }, l), { children: u }));
        });
      (v.displayName = "Text"),
        (v.defaultProps = { tag: "p", variant: "l1" }),
        (v.propTypes = {
          tag: l().oneOf([
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "p",
            "span",
            "strong",
            "b",
            "em",
            "i",
            "q",
            "mark",
            "sub",
            "sup",
            "time",
            "figcaption",
            "li",
            "button",
            "div",
          ]),
          color: l().oneOf(
            Object.keys(f.DM).map(function (t) {
              return t;
            })
          ),
          variant: l().oneOf(
            Object.keys(h.g).map(function (t) {
              return t;
            })
          ),
          className: l().string,
        }),
        (e.Z = v);
    },
    4342: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return I;
        },
      });
      var r = n(6042),
        i = n(9534),
        o = n(7297),
        a = n(5893),
        s = n(5697),
        c = n.n(s),
        u = n(5178),
        l = n(8556),
        d = n(9396),
        f = n(7294),
        h = n(5675),
        p = n.n(h),
        m = n(5137),
        v = n(828),
        g = function (t) {
          if (!t) return "100vw";
          if ("string" === typeof t) return t;
          var e = Object.entries(t) || [];
          if (0 === e.length) return "100vw";
          var n = e.length - 1;
          return e
            .map(function (t, e) {
              var r = (0, v.Z)(t, 2),
                i = r[0],
                o = r[1],
                a = e === n ? "" : "(max-width: ".concat(l.j$[i], "px) ");
              return "".concat(a).concat(o);
            })
            .join(", ");
        },
        y = function (t, e, n) {
          var r = t.filename,
            i = t.focus,
            o = t.alt,
            a = t.dimensions,
            s = e.width,
            c = e.height,
            u = e.layout,
            l = e.objectFit,
            d = e.priority,
            f = e.lazyRoot,
            h = e.quality,
            p = void 0 === h ? 80 : h,
            m = e.lazyBoundary,
            v = {
              src: r,
              alt: o,
              layout: u,
              priority: d,
              quality: p,
              lazyRoot: f,
              lazyBoundary: void 0 === m ? "100%" : m,
              sizes: g(n),
            };
          if ("fill" !== u) {
            var y = s && c ? { width: s, height: c } : a;
            (v.width = y.width), (v.height = y.height);
          }
          return (
            "fill" === u &&
              ("contain" !== l
                ? ((v.objectFit = "cover"),
                  (v.objectPosition = ""
                    .concat(i.xPercent, "% ")
                    .concat(i.yPercent, "%")))
                : (v.objectFit = "contain")),
            v
          );
        },
        b = n(7650);
      function w() {
        var t = (0, o.Z)([
          "\n  width: 100%;\n  height: 100%;\n  margin-bottom: -4px;\n\n  object-fit: ",
          ";\n  object-position: center;\n",
        ]);
        return (
          (w = function () {
            return t;
          }),
          t
        );
      }
      var x = u.ZP.video.withConfig({ componentId: "sc-f52581f8-0" })(
          w(),
          function (t) {
            return t.$objectFit || "cover";
          }
        ),
        S = function (t) {
          var e = t.src,
            n = (0, i.Z)(t, ["src"]),
            o = (0, b.YD)({
              triggerOnce: !0,
              onChange: function (t) {
                var e = null === c || void 0 === c ? void 0 : c.target;
                e && (t ? (e.load(), e.play()) : e.pause());
              },
            }),
            s = o.ref,
            c = o.entry;
          return (0, a.jsx)(x, (0, d.Z)((0, r.Z)({ ref: s }, n), { src: e }));
        };
      S.propTypes = { src: c().string.isRequired };
      var C = S;
      function E() {
        var t = (0, o.Z)([
          "\n  transition: opacity 250ms ",
          ";\n  opacity: ",
          ";\n",
        ]);
        return (
          (E = function () {
            return t;
          }),
          t
        );
      }
      function k() {
        var t = (0, o.Z)([
          "\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n\n  ",
          ";\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (k = function () {
            return t;
          }),
          t
        );
      }
      var P = u.ZP.div.withConfig({ componentId: "sc-de6f162a-0" })(
          k(),
          function (t) {
            var e,
              n = t.$fadeOnLoad,
              r = t.$hasLoaded;
            return n && ((e = r), (0, u.iv)(E(), m.t.manvydas2, e ? 1 : 0));
          }
        ),
        O = function (t) {
          var e = t.asset,
            n = t.className,
            o = t.sizes,
            s = t.fadeOnLoad,
            c = t.onLoadingComplete,
            u = t.onLoadedMetadata,
            l = (0, i.Z)(t, [
              "asset",
              "className",
              "sizes",
              "fadeOnLoad",
              "onLoadingComplete",
              "onLoadedMetadata",
            ]),
            h = (0, f.useState)(
              "video" === (null === e || void 0 === e ? void 0 : e.type)
            ),
            m = h[0],
            v = h[1];
          return (null === e || void 0 === e ? void 0 : e.filename)
            ? (0, a.jsxs)(
                P,
                (0, d.Z)((0, r.Z)({}, l), {
                  $fadeOnLoad: s,
                  $hasLoaded: m,
                  className: n,
                  children: [
                    "image" === e.type &&
                      (0, a.jsx)(
                        p(),
                        (0, d.Z)((0, r.Z)({}, y(e, l, o)), {
                          onLoadingComplete: function () {
                            null === c || void 0 === c || c(), v(!0);
                          },
                        }),
                        e.id
                      ),
                    "video" === e.type &&
                      (0, a.jsx)(C, {
                        $objectFit: l.objectFit,
                        src: null === e || void 0 === e ? void 0 : e.filename,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        onLoadedMetadata: u,
                      }),
                  ],
                })
              )
            : null;
        };
      (O.defaultProps = { layout: "fill", objectFit: "cover", fadeOnLoad: !0 }),
        (O.propsTypes = {
          type: c().oneOf(["image", "video"]).isRequired,
          asset: c().object.isRequired,
          fadeOnLoad: c().bool,
          objectFit: c().oneOf([
            "fill",
            "cover",
            "contain",
            "none",
            "scale-down",
          ]),
          onLoadedMetadata: c().func,
        });
      var A = O;
      function T() {
        var t = (0, o.Z)(["\n  ", " {\n    display: none;\n  }\n"]);
        return (
          (T = function () {
            return t;
          }),
          t
        );
      }
      function _() {
        var t = (0, o.Z)([
          "\n  display: none;\n\n  ",
          " {\n    display: block;\n  }\n",
        ]);
        return (
          (_ = function () {
            return t;
          }),
          t
        );
      }
      var j = (0, u.ZP)(A).withConfig({ componentId: "sc-8ac9924d-0" })(
          T(),
          l.qk.s
        ),
        R = (0, u.ZP)(A).withConfig({ componentId: "sc-8ac9924d-1" })(
          _(),
          l.qk.s
        ),
        M = function (t) {
          var e = t.media,
            n = (0, i.Z)(t, ["media"]),
            o = (null === e || void 0 === e ? void 0 : e[0]) || {},
            s = o.asset,
            c = o.asset_mobile;
          return c
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(R, (0, r.Z)({ asset: s }, n)),
                  (0, a.jsx)(j, (0, r.Z)({ asset: c }, n)),
                ],
              })
            : (0, a.jsx)(A, (0, r.Z)({ asset: s }, n));
        };
      (M.defaultProps = { media: [] }),
        (M.propTypes = { media: s.PropTypes.arrayOf(s.PropTypes.object) });
      var I = M;
    },
    1210: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDomainLocale = function (t, e, r, i) {
          var o = n(8875).normalizeLocalePath,
            a = n(8748).detectDomainLocale,
            s = e || o(t, r).detectedLocale,
            c = a(i, void 0, s);
          if (c) {
            var u = "http".concat(c.http ? "" : "s", "://"),
              l = s === c.defaultLocale ? "" : "/".concat(s);
            return "".concat(u).concat(c.domain).concat("").concat(l).concat(t);
          }
          return !1;
        });
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8045: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(9361).Z,
        i = n(4941).Z,
        o = n(3929).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e = t.src,
            n = t.sizes,
            s = t.unoptimized,
            c = void 0 !== s && s,
            m = t.priority,
            v = void 0 !== m && m,
            w = t.loading,
            k = t.lazyRoot,
            O = void 0 === k ? null : k,
            A = t.lazyBoundary,
            T = t.className,
            _ = t.quality,
            j = t.width,
            R = t.height,
            M = t.style,
            I = t.objectFit,
            L = t.objectPosition,
            V = t.onLoadingComplete,
            D = t.placeholder,
            Z = void 0 === D ? "empty" : D,
            z = t.blurDataURL,
            B = u(t, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            N = l.useContext(p.ImageConfigContext),
            F = l.useMemo(
              function () {
                var t = g || N || f.imageConfigDefault,
                  e = o(t.deviceSizes)
                    .concat(o(t.imageSizes))
                    .sort(function (t, e) {
                      return t - e;
                    }),
                  n = t.deviceSizes.sort(function (t, e) {
                    return t - e;
                  });
                return a({}, t, { allSizes: e, deviceSizes: n });
              },
              [N]
            ),
            $ = B,
            U = n ? "responsive" : "intrinsic";
          "layout" in $ && ($.layout && (U = $.layout), delete $.layout);
          var H = E;
          if ("loader" in $) {
            if ($.loader) {
              var q = $.loader;
              H = function (t) {
                t.config;
                var e = u(t, ["config"]);
                return q(e);
              };
            }
            delete $.loader;
          }
          var W = "";
          if (
            (function (t) {
              return (
                "object" === typeof t &&
                (x(t) ||
                  (function (t) {
                    return void 0 !== t.src;
                  })(t))
              );
            })(e)
          ) {
            var G = x(e) ? e.default : e;
            if (!G.src)
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(G)
                )
              );
            if (
              ((z = z || G.blurDataURL),
              (W = G.src),
              (!U || "fill" !== U) &&
                ((R = R || G.height),
                (j = j || G.width),
                !G.height || !G.width))
            )
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(G)
                )
              );
          }
          var Y = !v && ("lazy" === w || "undefined" === typeof w);
          ((e = "string" === typeof e ? e : W).startsWith("data:") ||
            e.startsWith("blob:")) &&
            ((c = !0), (Y = !1));
          y.has(e) && (Y = !1);
          F.unoptimized && (c = !0);
          var K,
            X = i(l.useState(!1), 2),
            J = X[0],
            Q = X[1],
            tt = i(
              h.useIntersection({
                rootRef: O,
                rootMargin: A || "200px",
                disabled: !Y,
              }),
              3
            ),
            et = tt[0],
            nt = tt[1],
            rt = tt[2],
            it = !Y || nt,
            ot = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            at = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            st = !1,
            ct = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: I,
              objectPosition: L,
            },
            ut = C(j),
            lt = C(R),
            dt = C(_);
          0;
          var ft = Object.assign({}, M, ct),
            ht =
              "blur" !== Z || J
                ? {}
                : {
                    backgroundSize: I || "cover",
                    backgroundPosition: L || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(z, '")'),
                  };
          if ("fill" === U)
            (ot.display = "block"),
              (ot.position = "absolute"),
              (ot.top = 0),
              (ot.left = 0),
              (ot.bottom = 0),
              (ot.right = 0);
          else if ("undefined" !== typeof ut && "undefined" !== typeof lt) {
            var pt = lt / ut,
              mt = isNaN(pt) ? "100%" : "".concat(100 * pt, "%");
            "responsive" === U
              ? ((ot.display = "block"),
                (ot.position = "relative"),
                (st = !0),
                (at.paddingTop = mt))
              : "intrinsic" === U
              ? ((ot.display = "inline-block"),
                (ot.position = "relative"),
                (ot.maxWidth = "100%"),
                (st = !0),
                (at.maxWidth = "100%"),
                (K =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(ut, "%27%20height=%27")
                    .concat(lt, "%27/%3e")))
              : "fixed" === U &&
                ((ot.display = "inline-block"),
                (ot.position = "relative"),
                (ot.width = ut),
                (ot.height = lt));
          } else 0;
          var vt = { src: b, srcSet: void 0, sizes: void 0 };
          it &&
            (vt = S({
              config: F,
              src: e,
              unoptimized: c,
              layout: U,
              width: ut,
              quality: dt,
              sizes: n,
              loader: H,
            }));
          var gt = e;
          0;
          var yt,
            bt = "imagesrcset",
            wt = "imagesizes";
          (bt = "imageSrcSet"), (wt = "imageSizes");
          var xt =
              (r((yt = {}), bt, vt.srcSet),
              r(yt, wt, vt.sizes),
              r(yt, "crossOrigin", $.crossOrigin),
              yt),
            St = l.default.useLayoutEffect,
            Ct = l.useRef(V),
            Et = l.useRef(e);
          l.useEffect(
            function () {
              Ct.current = V;
            },
            [V]
          ),
            St(
              function () {
                Et.current !== e && (rt(), (Et.current = e));
              },
              [rt, e]
            );
          var kt = a(
            {
              isLazy: Y,
              imgAttributes: vt,
              heightInt: lt,
              widthInt: ut,
              qualityInt: dt,
              layout: U,
              className: T,
              imgStyle: ft,
              blurStyle: ht,
              loading: w,
              config: F,
              unoptimized: c,
              placeholder: Z,
              loader: H,
              srcString: gt,
              onLoadingCompleteRef: Ct,
              setBlurComplete: Q,
              setIntersection: et,
              isVisible: it,
              noscriptSizes: n,
            },
            $
          );
          return l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(
              "span",
              { style: ot },
              st
                ? l.default.createElement(
                    "span",
                    { style: at },
                    K
                      ? l.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: K,
                        })
                      : null
                  )
                : null,
              l.default.createElement(P, Object.assign({}, kt))
            ),
            v
              ? l.default.createElement(
                  d.default,
                  null,
                  l.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + vt.src + vt.srcSet + vt.sizes,
                        rel: "preload",
                        as: "image",
                        href: vt.srcSet ? void 0 : vt.src,
                      },
                      xt
                    )
                  )
                )
              : null
          );
        });
      var a = n(6495).Z,
        s = n(2648).Z,
        c = n(1598).Z,
        u = n(7273).Z,
        l = c(n(7294)),
        d = s(n(5443)),
        f = n(9309),
        h = n(7190),
        p = n(9977),
        m = (n(3794), n(2392));
      function v(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      var g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "https://www.buildinamsterdam.com/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        y = new Set(),
        b =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var w = new Map([
        [
          "default",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width,
              i = t.quality;
            return n.endsWith(".svg") && !e.dangerouslyAllowSVG
              ? n
              : ""
                  .concat(m.normalizePathTrailingSlash(e.path), "?url=")
                  .concat(encodeURIComponent(n), "&w=")
                  .concat(r, "&q=")
                  .concat(i || 75);
          },
        ],
        [
          "imgix",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width,
              i = t.quality,
              o = new URL("".concat(e.path).concat(v(n))),
              a = o.searchParams;
            return (
              a.set("auto", a.getAll("auto").join(",") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || r.toString()),
              i && a.set("q", i.toString()),
              o.href
            );
          },
        ],
        [
          "cloudinary",
          function (t) {
            var e = t.config,
              n = t.src,
              r =
                [
                  "f_auto",
                  "c_limit",
                  "w_" + t.width,
                  "q_" + (t.quality || "auto"),
                ].join(",") + "/";
            return "".concat(e.path).concat(r).concat(v(n));
          },
        ],
        [
          "akamai",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width;
            return "".concat(e.path).concat(v(n), "?imwidth=").concat(r);
          },
        ],
        [
          "custom",
          function (t) {
            var e = t.src;
            throw new Error(
              'Image with src "'.concat(e, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function x(t) {
        return void 0 !== t.default;
      }
      function S(t) {
        var e = t.config,
          n = t.src,
          r = t.unoptimized,
          i = t.layout,
          a = t.width,
          s = t.quality,
          c = t.sizes,
          u = t.loader;
        if (r) return { src: n, srcSet: void 0, sizes: void 0 };
        var l = (function (t, e, n, r) {
            var i = t.deviceSizes,
              a = t.allSizes;
            if (r && ("fill" === n || "responsive" === n)) {
              for (var s, c = /(^|\s)(1?\d?\d)vw/g, u = []; (s = c.exec(r)); s)
                u.push(parseInt(s[2]));
              if (u.length) {
                var l,
                  d = 0.01 * (l = Math).min.apply(l, o(u));
                return {
                  widths: a.filter(function (t) {
                    return t >= i[0] * d;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" !== typeof e || "fill" === n || "responsive" === n
              ? { widths: i, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (t) {
                        return (
                          a.find(function (e) {
                            return e >= t;
                          }) || a[a.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(e, a, i, c),
          d = l.widths,
          f = l.kind,
          h = d.length - 1;
        return {
          sizes: c || "w" !== f ? c : "100vw",
          srcSet: d
            .map(function (t, r) {
              return ""
                .concat(u({ config: e, src: n, quality: s, width: t }), " ")
                .concat("w" === f ? t : r + 1)
                .concat(f);
            })
            .join(", "),
          src: u({ config: e, src: n, quality: s, width: d[h] }),
        };
      }
      function C(t) {
        return "number" === typeof t
          ? t
          : "string" === typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function E(t) {
        var e,
          n = (null == (e = t.config) ? void 0 : e.loader) || "default",
          r = w.get(n);
        if (r) return r(t);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(f.VALID_LOADERS.join(", "), ". Received: ")
            .concat(n)
        );
      }
      function k(t, e, n, r, i, o) {
        t &&
          t.src !== b &&
          t["data-loaded-src"] !== e &&
          ((t["data-loaded-src"] = e),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                t.parentNode &&
                (y.add(e),
                "blur" === r && o(!0),
                null == i ? void 0 : i.current)
              ) {
                var n = t.naturalWidth,
                  a = t.naturalHeight;
                i.current({ naturalWidth: n, naturalHeight: a });
              }
            }));
      }
      var P = function (t) {
        var e = t.imgAttributes,
          n = (t.heightInt, t.widthInt),
          r = t.qualityInt,
          i = t.layout,
          o = t.className,
          s = t.imgStyle,
          c = t.blurStyle,
          d = t.isLazy,
          f = t.placeholder,
          h = t.loading,
          p = t.srcString,
          m = t.config,
          v = t.unoptimized,
          g = t.loader,
          y = t.onLoadingCompleteRef,
          b = t.setBlurComplete,
          w = t.setIntersection,
          x = t.onLoad,
          C = t.onError,
          E = (t.isVisible, t.noscriptSizes),
          P = u(t, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (h = d ? "lazy" : h),
          l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(
              "img",
              Object.assign({}, P, e, {
                decoding: "async",
                "data-nimg": i,
                className: o,
                style: a({}, s, c),
                ref: l.useCallback(
                  function (t) {
                    w(t),
                      (null == t ? void 0 : t.complete) && k(t, p, 0, f, y, b);
                  },
                  [w, p, i, f, y, b]
                ),
                onLoad: function (t) {
                  k(t.currentTarget, p, 0, f, y, b), x && x(t);
                },
                onError: function (t) {
                  "blur" === f && b(!0), C && C(t);
                },
              })
            ),
            (d || "blur" === f) &&
              l.default.createElement(
                "noscript",
                null,
                l.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    P,
                    S({
                      config: m,
                      src: p,
                      unoptimized: v,
                      layout: i,
                      width: n,
                      quality: r,
                      sizes: E,
                      loader: g,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": i,
                      style: s,
                      className: o,
                      loading: h,
                    }
                  )
                )
              )
          )
        );
      };
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8418: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(4941).Z;
      n(5753).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = n(2648).Z,
        o = n(7273).Z,
        a = i(n(7294)),
        s = n(6273),
        c = n(2725),
        u = n(3462),
        l = n(1018),
        d = n(7190),
        f = n(1210),
        h = n(8684),
        p = {};
      function m(t, e, n, r) {
        if (t && s.isLocalURL(e)) {
          Promise.resolve(t.prefetch(e, n, r)).catch(function (t) {
            0;
          });
          var i =
            r && "undefined" !== typeof r.locale ? r.locale : t && t.locale;
          p[e + "%" + n + (i ? "%" + i : "")] = !0;
        }
      }
      var v = a.default.forwardRef(function (t, e) {
        var n,
          i = t.href,
          v = t.as,
          g = t.children,
          y = t.prefetch,
          b = t.passHref,
          w = t.replace,
          x = t.shallow,
          S = t.scroll,
          C = t.locale,
          E = t.onClick,
          k = t.onMouseEnter,
          P = t.onTouchStart,
          O = t.legacyBehavior,
          A = void 0 === O ? !0 !== Boolean(!1) : O,
          T = o(t, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = g),
          !A ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var _ = !1 !== y,
          j = a.default.useContext(u.RouterContext),
          R = a.default.useContext(l.AppRouterContext);
        R && (j = R);
        var M,
          I = a.default.useMemo(
            function () {
              var t = r(s.resolveHref(j, i, !0), 2),
                e = t[0],
                n = t[1];
              return { href: e, as: v ? s.resolveHref(j, v) : n || e };
            },
            [j, i, v]
          ),
          L = I.href,
          V = I.as,
          D = a.default.useRef(L),
          Z = a.default.useRef(V);
        A && (M = a.default.Children.only(n));
        var z = A ? M && "object" === typeof M && M.ref : e,
          B = r(d.useIntersection({ rootMargin: "200px" }), 3),
          N = B[0],
          F = B[1],
          $ = B[2],
          U = a.default.useCallback(
            function (t) {
              (Z.current === V && D.current === L) ||
                ($(), (Z.current = V), (D.current = L)),
                N(t),
                z &&
                  ("function" === typeof z
                    ? z(t)
                    : "object" === typeof z && (z.current = t));
            },
            [V, z, L, $, N]
          );
        a.default.useEffect(
          function () {
            var t = F && _ && s.isLocalURL(L),
              e = "undefined" !== typeof C ? C : j && j.locale,
              n = p[L + "%" + V + (e ? "%" + e : "")];
            t && !n && m(j, L, V, { locale: e });
          },
          [V, L, F, C, _, j]
        );
        var H = {
          ref: U,
          onClick: function (t) {
            A || "function" !== typeof E || E(t),
              A &&
                M.props &&
                "function" === typeof M.props.onClick &&
                M.props.onClick(t),
              t.defaultPrevented ||
                (function (t, e, n, r, i, o, c, u, l, d) {
                  if (
                    "A" !== t.currentTarget.nodeName.toUpperCase() ||
                    (!(function (t) {
                      var e = t.currentTarget.target;
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) &&
                      s.isLocalURL(n))
                  ) {
                    t.preventDefault();
                    var f = function () {
                      "beforePopState" in e
                        ? e[i ? "replace" : "push"](n, r, {
                            shallow: o,
                            locale: u,
                            scroll: c,
                          })
                        : e[i ? "replace" : "push"](n, {
                            forceOptimisticNavigation: !d,
                          });
                    };
                    l ? a.default.startTransition(f) : f();
                  }
                })(t, j, L, V, w, x, S, C, Boolean(R), _);
          },
          onMouseEnter: function (t) {
            A || "function" !== typeof k || k(t),
              A &&
                M.props &&
                "function" === typeof M.props.onMouseEnter &&
                M.props.onMouseEnter(t),
              (!_ && R) || (s.isLocalURL(L) && m(j, L, V, { priority: !0 }));
          },
          onTouchStart: function (t) {
            A || "function" !== typeof P || P(t),
              A &&
                M.props &&
                "function" === typeof M.props.onTouchStart &&
                M.props.onTouchStart(t),
              (!_ && R) || (s.isLocalURL(L) && m(j, L, V, { priority: !0 }));
          },
        };
        if (!A || b || ("a" === M.type && !("href" in M.props))) {
          var q = "undefined" !== typeof C ? C : j && j.locale,
            W =
              j &&
              j.isLocaleDomain &&
              f.getDomainLocale(V, q, j.locales, j.domainLocales);
          H.href = W || h.addBasePath(c.addLocale(V, q, j && j.defaultLocale));
        }
        return A
          ? a.default.cloneElement(M, H)
          : a.default.createElement("a", Object.assign({}, T, H), n);
      });
      (e.default = v),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8875: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.normalizeLocalePath = void 0);
      (e.normalizeLocalePath = function (t, e) {
        return n(4317).normalizeLocalePath(t, e);
      }),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    7190: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(4941).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e = t.rootRef,
            n = t.rootMargin,
            u = t.disabled || !a,
            l = r(i.useState(!1), 2),
            d = l[0],
            f = l[1],
            h = r(i.useState(null), 2),
            p = h[0],
            m = h[1];
          i.useEffect(
            function () {
              if (a) {
                if (u || d) return;
                if (p && p.tagName) {
                  var t = (function (t, e, n) {
                    var r = (function (t) {
                        var e,
                          n = {
                            root: t.root || null,
                            margin: t.rootMargin || "",
                          },
                          r = c.find(function (t) {
                            return t.root === n.root && t.margin === n.margin;
                          });
                        if (r && (e = s.get(r))) return e;
                        var i = new Map(),
                          o = new IntersectionObserver(function (t) {
                            t.forEach(function (t) {
                              var e = i.get(t.target),
                                n = t.isIntersecting || t.intersectionRatio > 0;
                              e && n && e(n);
                            });
                          }, t);
                        return (
                          (e = { id: n, observer: o, elements: i }),
                          c.push(n),
                          s.set(n, e),
                          e
                        );
                      })(n),
                      i = r.id,
                      o = r.observer,
                      a = r.elements;
                    return (
                      a.set(t, e),
                      o.observe(t),
                      function () {
                        if ((a.delete(t), o.unobserve(t), 0 === a.size)) {
                          o.disconnect(), s.delete(i);
                          var e = c.findIndex(function (t) {
                            return t.root === i.root && t.margin === i.margin;
                          });
                          e > -1 && c.splice(e, 1);
                        }
                      }
                    );
                  })(
                    p,
                    function (t) {
                      return t && f(t);
                    },
                    { root: null == e ? void 0 : e.current, rootMargin: n }
                  );
                  return t;
                }
              } else if (!d) {
                var r = o.requestIdleCallback(function () {
                  return f(!0);
                });
                return function () {
                  return o.cancelIdleCallback(r);
                };
              }
            },
            [p, u, n, e, d]
          );
          var v = i.useCallback(function () {
            f(!1);
          }, []);
          return [m, d, v];
        });
      var i = n(7294),
        o = n(9311),
        a = "function" === typeof IntersectionObserver,
        s = new Map(),
        c = [];
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1018: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TemplateContext =
          e.GlobalLayoutRouterContext =
          e.LayoutRouterContext =
          e.AppRouterContext =
            void 0);
      var r = (0, n(2648).Z)(n(7294)),
        i = r.default.createContext(null);
      e.AppRouterContext = i;
      var o = r.default.createContext(null);
      e.LayoutRouterContext = o;
      var a = r.default.createContext(null);
      e.GlobalLayoutRouterContext = a;
      var s = r.default.createContext(null);
      e.TemplateContext = s;
    },
    638: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(6856).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var n = a.default,
            o = (null == e ? void 0 : e.suspense)
              ? {}
              : {
                  loading: function (t) {
                    t.error, t.isLoading;
                    return t.pastDelay, null;
                  },
                };
          r(t, Promise)
            ? (o.loader = function () {
                return t;
              })
            : "function" === typeof t
            ? (o.loader = t)
            : "object" === typeof t && (o = i({}, o, t));
          !1;
          (o = i({}, o, e)).suspense && (delete o.ssr, delete o.loading);
          o.loadableGenerated &&
            delete (o = i({}, o, o.loadableGenerated)).loadableGenerated;
          if ("boolean" === typeof o.ssr && !o.suspense) {
            if (!o.ssr) return delete o.ssr, s(n, o);
            delete o.ssr;
          }
          return n(o);
        }),
        (e.noSSR = s);
      var i = n(6495).Z,
        o = n(2648).Z,
        a = (o(n(7294)), o(n(4302)));
      function s(t, e) {
        return delete e.webpack, delete e.modules, t(e);
      }
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    6319: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LoadableContext = void 0);
      var r = (0, n(2648).Z)(n(7294)).default.createContext(null);
      e.LoadableContext = r;
    },
    4302: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(9658).Z,
        i = n(7222).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var o = n(6495).Z,
        a = (0, n(2648).Z)(n(7294)),
        s = n(6319),
        c = n(7294).useSyncExternalStore,
        u = [],
        l = [],
        d = !1;
      function f(t) {
        var e = t(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = e
            .then(function (t) {
              return (n.loading = !1), (n.loaded = t), t;
            })
            .catch(function (t) {
              throw ((n.loading = !1), (n.error = t), t);
            })),
          n
        );
      }
      var h = (function () {
        function t(e, n) {
          r(this, t),
            (this._loadFn = e),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          i(t, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var t = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var e = this._res,
                  n = this._opts;
                e.loading &&
                  ("number" === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          t._update({ pastDelay: !0 });
                        }, n.delay))),
                  "number" === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      t._update({ timedOut: !0 });
                    }, n.timeout))),
                  this._res.promise
                    .then(function () {
                      t._update({}), t._clearTimeouts();
                    })
                    .catch(function (e) {
                      t._update({}), t._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (t) {
                (this._state = o(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  t
                )),
                  this._callbacks.forEach(function (t) {
                    return t();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (t) {
                var e = this;
                return (
                  this._callbacks.add(t),
                  function () {
                    e._callbacks.delete(t);
                  }
                );
              },
            },
          ]),
          t
        );
      })();
      function p(t) {
        return (function (t, e) {
          var n = function () {
              if (!u) {
                var e = new h(t, i);
                u = {
                  getCurrentValue: e.getCurrentValue.bind(e),
                  subscribe: e.subscribe.bind(e),
                  retry: e.retry.bind(e),
                  promise: e.promise.bind(e),
                };
              }
              return u.promise();
            },
            r = function () {
              n();
              var t = a.default.useContext(s.LoadableContext);
              t &&
                Array.isArray(i.modules) &&
                i.modules.forEach(function (e) {
                  t(e);
                });
            },
            i = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              e
            );
          i.suspense && (i.lazy = a.default.lazy(i.loader));
          var u = null;
          if (!d) {
            var f = i.webpack ? i.webpack() : i.modules;
            f &&
              l.push(function (t) {
                var e = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (
                    var o, a = f[Symbol.iterator]();
                    !(e = (o = a.next()).done);
                    e = !0
                  ) {
                    var s = o.value;
                    if (-1 !== t.indexOf(s)) return n();
                  }
                } catch (c) {
                  (r = !0), (i = c);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (r) throw i;
                  }
                }
              });
          }
          var p = i.suspense
            ? function (t, e) {
                return (
                  r(), a.default.createElement(i.lazy, o({}, t, { ref: e }))
                );
              }
            : function (t, e) {
                r();
                var n = c(u.subscribe, u.getCurrentValue, u.getCurrentValue);
                return (
                  a.default.useImperativeHandle(
                    e,
                    function () {
                      return { retry: u.retry };
                    },
                    []
                  ),
                  a.default.useMemo(
                    function () {
                      return n.loading || n.error
                        ? a.default.createElement(i.loading, {
                            isLoading: n.loading,
                            pastDelay: n.pastDelay,
                            timedOut: n.timedOut,
                            error: n.error,
                            retry: u.retry,
                          })
                        : n.loaded
                        ? a.default.createElement(
                            (e = n.loaded) && e.__esModule ? e.default : e,
                            t
                          )
                        : null;
                      var e;
                    },
                    [t, n]
                  )
                );
              };
          return (
            (p.preload = function () {
              return n();
            }),
            (p.displayName = "LoadableComponent"),
            a.default.forwardRef(p)
          );
        })(f, t);
      }
      function m(t, e) {
        for (var n = []; t.length; ) {
          var r = t.pop();
          n.push(r(e));
        }
        return Promise.all(n).then(function () {
          if (t.length) return m(t, e);
        });
      }
      (p.preloadAll = function () {
        return new Promise(function (t, e) {
          m(u).then(t, e);
        });
      }),
        (p.preloadReady = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (e) {
            var n = function () {
              return (d = !0), e();
            };
            m(l, t).then(n, n);
          });
        }),
        (window.__NEXT_PRELOADREADY = p.preloadReady);
      var v = p;
      e.default = v;
    },
    7080: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return ba;
          },
        });
      var r = n(6042),
        i = n(5893),
        o = n(5152),
        a = n.n(o),
        s = n(1163),
        c = (n(4902), n(906), n(9978)),
        u = n(7294),
        l = function () {
          (0, u.useEffect)(function () {
            if (c.yv) {
              var t = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              );
              console.log(
                t
                  ? "Welcome to Build in Amsterdam!\nWe are hiring: https://jobs.buildinamsterdam.com/"
                  : "\n  ____                     \n |  _ \\          /\\        \n | |_) |  _     /  \\       \n |  _ <  | |   / /\\ \\      \n | |_) | | |  / ____ \\   _ \n |____/  |_| /_/    \\_\\ (_)\n                           \n                           \n Welcome to Build in Amsterdam!\n We are hiring: https://jobs.buildinamsterdam.com/\n"
              );
            }
          }, []);
        },
        d = n(828),
        f = n(7297),
        h = n(5178),
        p = n(1734),
        m = n(8556),
        v = n(8321),
        g = n(981),
        y = n(5697),
        b = n.n(y),
        w = n(9396),
        x = n(7568),
        S = n(414),
        C = n(7998),
        E = n(6380),
        k = n(1083),
        P = n(9534),
        O = n(5137),
        A = n(3052),
        T = n(8665),
        _ = n(4342),
        j = n(4651),
        R = n(1482);
      function M() {
        var t = (0, f.Z)([
          "\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ",
          ";\n\n  ",
          " {\n    transform: scale(1.03);\n    transition: transform 0.65s ",
          ";\n  }\n\n  ",
          " {\n    ",
          ";\n  }\n\n  @media (prefers-reduced-motion) {\n    transform: none;\n    transition: none;\n  }\n",
        ]);
        return (
          (M = function () {
            return t;
          }),
          t
        );
      }
      function I() {
        var t = (0, f.Z)([
          "\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 8.438rem;\n\n  ",
          " {\n    width: 21.875rem;\n  }\n\n  ",
          " {\n    width: 40vh;\n  }\n\n  ",
          "\n",
        ]);
        return (
          (I = function () {
            return t;
          }),
          t
        );
      }
      function L() {
        var t = (0, f.Z)([
          "\n  width: 100%;\n  border-radius: 4px;\n  isolation: isolate;\n\n  position: relative;\n  background-color: var(--color-off-white);\n  overflow: hidden;\n",
        ]);
        return (
          (L = function () {
            return t;
          }),
          t
        );
      }
      function V() {
        var t = (0, f.Z)([
          "\n  color: var(--color-white);\n  margin-bottom: 0.75rem;\n",
        ]);
        return (
          (V = function () {
            return t;
          }),
          t
        );
      }
      function D() {
        var t = (0, f.Z)(["\n  position: absolute;\n"]);
        return (
          (D = function () {
            return t;
          }),
          t
        );
      }
      var Z = h.ZP.div.withConfig({ componentId: "sc-23837c7f-0" })(
          M(),
          (0, R.Dm)("15/25"),
          m.qk.finePointer,
          O.t.manvydas2,
          m.qk.s,
          (0, R.Dm)("71/38")
        ),
        z = h.ZP.li.withConfig({ componentId: "sc-23837c7f-1" })(
          I(),
          m.qk.s,
          m.qk.l,
          (0, m.Mr)(
            "\n     "
              .concat(Z, " {\n      transform: scale(1);\n     }\n\n     ")
              .concat(A.VT, " {\n      ")
              .concat(A.qP, ";\n     }\n  ")
          )
        ),
        B = h.ZP.div.withConfig({ componentId: "sc-23837c7f-2" })(L()),
        N = (0, h.ZP)(j.Z).withConfig({ componentId: "sc-23837c7f-3" })(V()),
        F = (0, h.ZP)(_.Z).withConfig({ componentId: "sc-23837c7f-4" })(D()),
        $ = (0, u.forwardRef)(function (t, e) {
          var n = t.item,
            o = t.active,
            a = t.onClick,
            s = t.lazyRoot,
            c = (0, P.Z)(t, ["item", "active", "onClick", "lazyRoot"]),
            u = n.link,
            l = n.image,
            d = n.title;
          return (0,
          i.jsx)(z, (0, w.Z)((0, r.Z)({ ref: e }, c), { children: (0, i.jsxs)(T.Z, (0, w.Z)((0, r.Z)({}, u), { onClick: a, id: "menu-nav-" + d, children: [(0, i.jsx)(N, { variant: "l2", tag: "div", children: (0, i.jsx)(A.ZP, { active: o, children: d }) }), l && (0, i.jsx)(B, { children: (0, i.jsx)(Z, { children: (0, i.jsx)(F, { media: l, sizes: { xs: "135px", s: "350px", m: "25vw" }, lazyRoot: s }) }) })] })) }));
        });
      ($.displayName = "MenuItem"),
        ($.defaultProps = { item: [] }),
        ($.propTypes = {
          item: y.PropTypes.shape({
            image: y.PropTypes.array,
            link: y.PropTypes.object.isRequired,
            title: y.PropTypes.string.isRequired,
          }).isRequired,
          active: y.PropTypes.bool,
          lazyRoot: y.PropTypes.object,
        });
      var U = $;
      function H() {
        var t = (0, f.Z)([
          "\n  display: flex;\n\n  width: 100%;\n  height: 100%;\n\n  flex-direction: row;\n  gap: var(--gap);\n  padding-left: var(--gap);\n\n  overflow-x: auto;\n  overflow-y: hidden;\n  cursor: grab;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &:active {\n    cursor: grabbing;\n  }\n\n  img {\n    -webkit-user-drag: none;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ",
          '\n\n  &:after {\n    content: "";\n    padding-inline-end: 1px;\n    margin-left: -1px;\n  }\n',
        ]);
        return (
          (H = function () {
            return t;
          }),
          t
        );
      }
      var q = h.ZP.ul.withConfig({ componentId: "sc-96f51296-0" })(
          H(),
          function (t) {
            return (
              t.isDragging &&
              "\n    user-select: none;\n\n    * {\n      pointer-events: none;\n    }\n  "
            );
          }
        ),
        W = function (t) {
          var e = t.className,
            n = t.items,
            o = (0, d.Z)(
              (function () {
                var t = (0, u.useRef)(),
                  e = (0, u.useState)(!1),
                  n = e[0],
                  i = e[1],
                  o = (0, k.Z)("fine"),
                  a = (0, C.useGesture)(
                    {
                      onDrag: function (e) {
                        var r = (0, d.Z)(e.delta, 1)[0];
                        Math.abs(r) > 1 && !n && i(!0),
                          t.current.scrollBy(-1 * r, 0);
                      },
                      onDragEnd: (0, x.Z)(function () {
                        return (0, S.__generator)(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [4, (0, E.g)(10)];
                            case 1:
                              return t.sent(), i(!1), [2];
                          }
                        });
                      }),
                    },
                    { enabled: o }
                  ),
                  s = n
                    ? function (t) {
                        return t.preventDefault();
                      }
                    : null;
                return [
                  (0, w.Z)((0, r.Z)({}, a()), { ref: t, isDragging: n }),
                  s,
                ];
              })(),
              2
            ),
            a = o[0],
            c = o[1],
            l = (0, s.useRouter)().asPath;
          return (0, i.jsx)(
            q,
            (0, w.Z)((0, r.Z)({ className: e }, a), {
              children: n.map(function (t) {
                return (0,
                i.jsx)(U, { item: t, active: l === t.link.href, onClick: c, lazyRoot: a.ref }, t._uid);
              }),
            })
          );
        };
      (W.defaultProps = { items: [] }),
        (W.propTypes = { items: b().arrayOf(U.propTypes.item).isRequired });
      var G = W,
        Y = n(1208),
        K = n(6228),
        X = n(406),
        J = n(4960),
        Q = n(5262),
        tt = n(6014);
      var et = n(8899),
        nt = n(943);
      var rt = n(3375);
      var it = n(1566);
      function ot(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return (0, nt.Z)(t);
          })(t) ||
          (0, rt.Z)(t) ||
          (0, it.Z)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var at,
        st = new Set(),
        ct = !1,
        ut = !1,
        lt = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          st.forEach(function (e) {
            e({ isLastTick: t });
          });
        },
        dt = function (t) {
          ut ||
            (lt(),
            (ut = !0),
            setTimeout(function () {
              ut = !1;
            }, 500)),
            clearTimeout(at),
            (at = setTimeout(function () {
              lt(!0);
            }, 500));
        },
        ft = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = (0, u.useCallback)(t, [t].concat(ot(e)));
          (0, u.useEffect)(
            function () {
              return (
                st.add(n),
                ct || (window.addEventListener("resize", dt), (ct = !0)),
                function () {
                  st.delete(n),
                    0 === st.size &&
                      (window.removeEventListener("resize", dt), (ct = !1));
                }
              );
            },
            [n]
          );
        };
      function ht() {
        var t = (0, f.Z)([
          "\n  width: 100%;\n  height: 100%;\n  justify-content: flex-start;\n",
        ]);
        return (
          (ht = function () {
            return t;
          }),
          t
        );
      }
      function pt() {
        var t = (0, f.Z)([
          "\n  display: flex;\n  width: max-content;\n  flex-direction: row;\n\n  gap: var(--gap);\n  padding-left: var(--gap);\n  padding-right: var(--gap);\n",
        ]);
        return (
          (pt = function () {
            return t;
          }),
          t
        );
      }
      var mt = (0, h.ZP)(Y.m.div).withConfig({ componentId: "sc-978f3df9-0" })(
          ht()
        ),
        vt = (0, h.ZP)(Y.m.ul).withConfig({ componentId: "sc-978f3df9-1" })(
          pt()
        ),
        gt = { type: "spring", mass: 0.5, stiffness: 50, friction: 20 },
        yt = function (t) {
          var e = t.items,
            n = t.className,
            o = (0, u.useRef)(null),
            a = (0, u.useRef)(null),
            c = (0, u.useRef)(0),
            l = (0, u.useRef)(null),
            f = (0, s.useRouter)().asPath,
            h = (function (t, e = {}) {
              const { isStatic: n } = (0, u.useContext)(tt._),
                r = (0, u.useRef)(null),
                i = (0, J.c)((0, X.i)(t) ? t.get() : t);
              return (
                (0, u.useMemo)(
                  () =>
                    i.attach((t, o) =>
                      n
                        ? o(t)
                        : (r.current && r.current.stop(),
                          (r.current = (0, K.j)({
                            from: i.get(),
                            to: t,
                            velocity: i.getVelocity(),
                            ...e,
                            onUpdate: o,
                          })),
                          i.get())
                    ),
                  [JSON.stringify(e)]
                ),
                (0, Q.p)(t, (t) => i.set(parseFloat(t))),
                i
              );
            })(0, gt),
            p = (0, u.useCallback)(
              function () {
                var t = a.current;
                if (t && 0 === h.get()) {
                  var e = t.getBoundingClientRect();
                  c.current = (0, et.Hg)(window.innerWidth, e.right);
                }
              },
              [h]
            ),
            m = (0, u.useCallback)(
              function () {
                var t = a.current;
                if (t) {
                  h.set(0);
                  var e = t.getBoundingClientRect();
                  c.current = (0, et.Hg)(window.innerWidth, e.right);
                }
              },
              [h]
            ),
            v = (0, C.useGesture)(
              {
                onMouseEnter: p,
                onMove: function (t) {
                  var e,
                    n = (0, d.Z)(t.xy, 1)[0],
                    r = o.current.offsetWidth,
                    i = c.current,
                    a =
                      (null === (e = l.current) || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect()
                      ).width / 6,
                    s = (0, et.UI)([0, r], [a, -i - a], n);
                  return h.set(s);
                },
                onMouseLeave: function () {
                  h.set(0);
                },
              },
              { move: { mouseOnly: !1 } }
            );
          return (
            ft(m),
            (0, i.jsx)(
              mt,
              (0, w.Z)((0, r.Z)({ className: n, ref: o }, v()), {
                children: (0, i.jsx)(vt, {
                  ref: a,
                  style: { x: h },
                  children: e.map(function (t) {
                    return (0,
                    i.jsx)(U, { ref: l, item: t, active: f === t.link.href, lazyRoot: a }, t._uid);
                  }),
                }),
              })
            )
          );
        };
      (yt.defaultProps = { items: [] }),
        (yt.propTypes = { items: b().arrayOf(U.propTypes.item).isRequired });
      var bt = yt;
      function wt() {
        var t = (0, f.Z)([
          "\n  --gap: 0.9375rem;\n  padding: 3vh 0;\n\n  position: relative;\n  transform: scale(0.9) translateY(-120%);\n\n  transition: ",
          ";\n\n  ",
          " {\n    --gap: 2.1875rem;\n    padding: 4vh 0;\n  }\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (wt = function () {
            return t;
          }),
          t
        );
      }
      function xt() {
        var t = (0, f.Z)([
          "\n  position: fixed;\n  overflow: hidden;\n  pointer-events: auto;\n\n  height: ",
          ";\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--color-black);\n\n  transform: translateY(",
          ");\n  transition: ",
          ";\n\n  ",
          "\n\n  ",
          " {\n    height: ",
          ";\n  }\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (xt = function () {
            return t;
          }),
          t
        );
      }
      function St() {
        var t = (0, f.Z)([
          "\n  display: none;\n\n  ",
          " {\n    display: flex;\n  }\n\n  @media (prefers-reduced-motion) {\n    display: none;\n  }\n",
        ]);
        return (
          (St = function () {
            return t;
          }),
          t
        );
      }
      function Ct() {
        var t = (0, f.Z)([
          "\n  display: none;\n\n  ",
          " {\n    display: flex;\n  }\n\n  @media (prefers-reduced-motion) {\n    display: flex;\n  }\n",
        ]);
        return (
          (Ct = function () {
            return t;
          }),
          t
        );
      }
      var Et = "400px",
        kt = "max(450px, 50vh)",
        Pt = h.ZP.div.withConfig({ componentId: "sc-bdbbcaa9-0" })(
          wt(),
          function (t) {
            return t.$reduceMotion ? "none" : v.s;
          },
          m.qk.l
        ),
        Ot = h.ZP.div.withConfig({ componentId: "sc-bdbbcaa9-1" })(
          xt(),
          Et,
          function (t) {
            return t.$menuOpen ? "0%" : "100%";
          },
          function (t) {
            return t.$reduceMotion ? "none" : v.s;
          },
          function (t) {
            return (
              t.$menuOpen &&
              "\n    ".concat(
                Pt,
                " {\n      transform: translateY(0%) scale(1);\n    }\n    "
              )
            );
          },
          m.qk.l,
          kt
        ),
        At = (0, h.ZP)(bt).withConfig({ componentId: "sc-bdbbcaa9-2" })(
          St(),
          m.qk.finePointer
        ),
        Tt = (0, h.ZP)(G).withConfig({ componentId: "sc-bdbbcaa9-3" })(
          Ct(),
          m.qk.coarsePointer
        ),
        _t = function (t) {
          var e = t.items,
            n = t.isOpen;
          return (0, i.jsx)(Ot, {
            $menuOpen: n && e.length > 0,
            children: (0, i.jsxs)(Pt, {
              children: [
                (0, i.jsx)(At, { items: e }),
                (0, i.jsx)(Tt, { items: e }),
              ],
            }),
          });
        };
      (_t.defaultProps = { isOpen: !1 }),
        (_t.propTypes = { isOpen: y.PropTypes.bool.isRequired });
      var jt = _t;
      function Rt() {
        var t = (0, f.Z)(["calc((", " * -1) + 1px)"]);
        return (
          (Rt = function () {
            return t;
          }),
          t
        );
      }
      function Mt() {
        var t = (0, f.Z)(["translateY(", ")"]);
        return (
          (Mt = function () {
            return t;
          }),
          t
        );
      }
      function It() {
        var t = (0, f.Z)([
          "\n  position: relative;\n  z-index: var(--z-content);\n  background: ",
          ";\n\n  transition: ",
          ";\n  transform: ",
          ";\n\n  ",
          " {\n    transform: ",
          ";\n  }\n\n  @media (prefers-reduced-motion) {\n    transform: none;\n    transition: none;\n  }\n",
        ]);
        return (
          (It = function () {
            return t;
          }),
          t
        );
      }
      var Lt = function (t, e) {
          var n = (0, h.iv)(Rt(), e);
          return t ? (0, h.iv)(Mt(), n) : "translateY(0)";
        },
        Vt = h.ZP.div.withConfig({ componentId: "sc-bd455eda-0" })(
          It(),
          p.DM.white,
          v.s,
          function (t) {
            var e = t.$menuOpen;
            return Lt(e, Et);
          },
          m.qk.l,
          function (t) {
            var e = t.$menuOpen;
            return Lt(e, kt);
          }
        ),
        Dt = function (t) {
          var e = t.children,
            n = (0, d.Z)((0, g.Z)(), 1)[0],
            r = (0, d.Z)((0, g.Z)(), 1)[0];
          return (0, i.jsx)(
            Vt,
            {
              $menuOpen: n,
              id: r ? "menu-close-backdrop" : "main",
              children: e,
            },
            "content-container"
          );
        },
        Zt = n(398),
        zt = n(1879);
      function Bt({ children: t, features: e, strict: n = !1 }) {
        const [, r] = (0, u.useState)(!Nt(e)),
          i = (0, u.useRef)(void 0);
        if (!Nt(e)) {
          const { renderer: t, ...n } = e;
          (i.current = t), (0, zt.K)(n);
        }
        return (
          (0, u.useEffect)(() => {
            Nt(e) &&
              e().then(({ renderer: t, ...e }) => {
                (0, zt.K)(e), (i.current = t), r(!0);
              });
          }, []),
          u.createElement(
            Zt.u.Provider,
            { value: { renderer: i.current, strict: n } },
            t
          )
        );
      }
      function Nt(t) {
        return "function" === typeof t;
      }
      var Ft = n(4394);
      function $t(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Ut(t) {
        return !!t.touches;
      }
      const Ht = { pageX: 0, pageY: 0 };
      function qt(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || Ht;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Wt(t, e = "page") {
        return { x: t[e + "X"], y: t[e + "Y"] };
      }
      function Gt(t, e = "page") {
        return { point: Ut(t) ? qt(t, e) : Wt(t, e) };
      }
      const Yt = (t, e = !1) => {
        const n = (e) => t(e, Gt(e));
        return e
          ? ((r = n),
            (t) => {
              const e = t instanceof MouseEvent;
              (!e || (e && 0 === t.button)) && r(t);
            })
          : n;
        var r;
      };
      var Kt = n(4735),
        Xt = n(6917);
      function Jt(t, e, n, r = { passive: !0 }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
      }
      function Qt(t, e, n, r) {
        (0, u.useEffect)(() => {
          const i = t.current;
          if (n && i) return Jt(i, e, n, r);
        }, [t, e, n, r]);
      }
      var te = n(1741);
      const ee = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        ne = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function re(t) {
        return te.j && null === window.onpointerdown
          ? t
          : te.j && null === window.ontouchstart
          ? ne[t]
          : te.j && null === window.onmousedown
          ? ee[t]
          : t;
      }
      function ie(t, e, n, r) {
        return Jt(t, re(e), Yt(n, "pointerdown" === e), r);
      }
      function oe(t, e, n, r) {
        return Qt(t, re(e), n && Yt(n, "pointerdown" === e), r);
      }
      const ae = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        se = (t) => ae(t) && t.hasOwnProperty("z");
      var ce = n(734);
      const ue = (t, e) => Math.abs(t - e);
      function le(t, e) {
        if ((0, ce.e)(t) && (0, ce.e)(e)) return ue(t, e);
        if (ae(t) && ae(e)) {
          const n = ue(t.x, e.x),
            r = ue(t.y, e.y),
            i = se(t) && se(e) ? ue(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      var de = n(9897);
      class fe {
        constructor(t, e, { transformPagePoint: n } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = me(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = le(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              const { point: r } = t,
                { timestamp: i } = (0, Kt.$B)();
              this.history.push({ ...r, timestamp: i });
              const { onStart: o, onMove: a } = this.handlers;
              e ||
                (o && o(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = he(e, this.transformPagePoint)),
                $t(t) && 0 === t.buttons
                  ? this.handlePointerUp(t, e)
                  : Kt.ZP.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              const { onEnd: n, onSessionEnd: r } = this.handlers,
                i = me(he(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), r && r(t, i);
            }),
            Ut(t) && t.touches.length > 1)
          )
            return;
          (this.handlers = e), (this.transformPagePoint = n);
          const r = he(Gt(t), this.transformPagePoint),
            { point: i } = r,
            { timestamp: o } = (0, Kt.$B)();
          this.history = [{ ...i, timestamp: o }];
          const { onSessionStart: a } = e;
          a && a(t, me(r, this.history)),
            (this.removeListeners = (0, de.z)(
              ie(window, "pointermove", this.handlePointerMove),
              ie(window, "pointerup", this.handlePointerUp),
              ie(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            Kt.qY.update(this.updatePoint);
        }
      }
      function he(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function pe(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function me({ point: t }, e) {
        return {
          point: t,
          delta: pe(t, ge(e)),
          offset: pe(t, ve(e)),
          velocity: ye(e, 0.1),
        };
      }
      function ve(t) {
        return t[0];
      }
      function ge(t) {
        return t[t.length - 1];
      }
      function ye(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        let n = t.length - 1,
          r = null;
        const i = ge(t);
        for (
          ;
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > (0, Xt.w)(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        const o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function be(t) {
        let e = null;
        return () => {
          const n = () => {
            e = null;
          };
          return null === e && ((e = t), n);
        };
      }
      const we = be("dragHorizontal"),
        xe = be("dragVertical");
      function Se(t) {
        let e = !1;
        if ("y" === t) e = xe();
        else if ("x" === t) e = we();
        else {
          const t = we(),
            n = xe();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function Ce() {
        const t = Se(!0);
        return !t || (t(), !1);
      }
      var Ee = n(1804),
        ke = n(2453),
        Pe = n(9326),
        Oe = n(6773);
      function Ae(t) {
        return t.max - t.min;
      }
      function Te(t, e = 0, n = 0.01) {
        return le(t, e) < n;
      }
      function _e(t, e, n, r = 0.5) {
        (t.origin = r),
          (t.originPoint = (0, ke.C)(e.min, e.max, t.origin)),
          (t.scale = Ae(n) / Ae(e)),
          (Te(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, ke.C)(n.min, n.max, t.origin) - t.originPoint),
          (Te(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function je(t, e, n, r) {
        _e(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          _e(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Re(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Ae(e));
      }
      function Me(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + Ae(e));
      }
      function Ie(t, e, n) {
        Me(t.x, e.x, n.x), Me(t.y, e.y, n.y);
      }
      function Le(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function Ve(t, e) {
        let n = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      const De = 0.35;
      function Ze(t, e, n) {
        return { min: ze(t, e), max: ze(t, n) };
      }
      function ze(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      var Be;
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(Be || (Be = {}));
      function Ne(t) {
        return [t("x"), t("y")];
      }
      function Fe({ top: t, left: e, right: n, bottom: r }) {
        return { x: { min: e, max: n }, y: { min: t, max: r } };
      }
      function $e(t) {
        return void 0 === t || 1 === t;
      }
      function Ue({ scale: t, scaleX: e, scaleY: n }) {
        return !$e(t) || !$e(e) || !$e(n);
      }
      function He(t) {
        return (
          Ue(t) ||
          qe(t.x) ||
          qe(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function qe(t) {
        return t && "0%" !== t;
      }
      function We(t, e, n) {
        return n + e * (t - n);
      }
      function Ge(t, e, n, r, i) {
        return void 0 !== i && (t = We(t, i, r)), We(t, n, r) + e;
      }
      function Ye(t, e = 0, n = 1, r, i) {
        (t.min = Ge(t.min, e, n, r, i)), (t.max = Ge(t.max, e, n, r, i));
      }
      function Ke(t, { x: e, y: n }) {
        Ye(t.x, e.translate, e.scale, e.originPoint),
          Ye(t.y, n.translate, n.scale, n.originPoint);
      }
      function Xe(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function Je(t, e, [n, r, i]) {
        const o = void 0 !== e[i] ? e[i] : 0.5,
          a = (0, ke.C)(t.min, t.max, o);
        Ye(t, e[n], e[r], a, e.scale);
      }
      const Qe = ["x", "scaleX", "originX"],
        tn = ["y", "scaleY", "originY"];
      function en(t, e) {
        Je(t.x, e, Qe), Je(t.y, e, tn);
      }
      function nn(t, e) {
        return Fe(
          (function (t, e) {
            if (!e) return t;
            const n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var rn = n(8150),
        on = n(2969);
      const an = new WeakMap();
      class sn {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          if (!1 === this.visualElement.isPresent) return;
          this.panSession = new fe(
            t,
            {
              onSessionStart: (t) => {
                this.stopAnimation(),
                  e && this.snapToCursor(Gt(t, "page").point);
              },
              onStart: (t, e) => {
                var n;
                const {
                  drag: r,
                  dragPropagation: i,
                  onDragStart: o,
                } = this.getProps();
                (!r ||
                  i ||
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = Se(r)),
                  this.openGlobalLock)) &&
                  ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  Ne((t) => {
                    var e, n;
                    let r = this.getAxisMotionValue(t).get() || 0;
                    if (on.aQ.test(r)) {
                      const i =
                        null ===
                          (n =
                            null === (e = this.visualElement.projection) ||
                            void 0 === e
                              ? void 0
                              : e.layout) || void 0 === n
                          ? void 0
                          : n.actual[t];
                      if (i) {
                        r = Ae(i) * (parseFloat(r) / 100);
                      }
                    }
                    this.originPoint[t] = r;
                  }),
                  null === o || void 0 === o || o(t, e),
                  null === (n = this.visualElement.animationState) ||
                    void 0 === n ||
                    n.setActive(Be.Drag, !0));
              },
              onMove: (t, e) => {
                const {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                const { offset: a } = e;
                if (r && null === this.currentDirection)
                  return (
                    (this.currentDirection = (function (t, e = 10) {
                      let n = null;
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x");
                      return n;
                    })(a)),
                    void (
                      null !== this.currentDirection &&
                      (null === i || void 0 === i || i(this.currentDirection))
                    )
                  );
                this.updateAxis("x", e.point, a),
                  this.updateAxis("y", e.point, a),
                  this.visualElement.syncRender(),
                  null === o || void 0 === o || o(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
            },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          const n = this.isDragging;
          if ((this.cancel(), !n)) return;
          const { velocity: r } = e;
          this.startAnimation(r);
          const { onDragEnd: i } = this.getProps();
          null === i || void 0 === i || i(t, e);
        }
        cancel() {
          var t, e;
          (this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (t = this.panSession) || void 0 === t || t.end(),
            (this.panSession = void 0);
          const { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (e = this.visualElement.animationState) ||
              void 0 === e ||
              e.setActive(Be.Drag, !1);
        }
        updateAxis(t, e, n) {
          const { drag: r } = this.getProps();
          if (!n || !cn(t, r, this.currentDirection)) return;
          const i = this.getAxisMotionValue(t);
          let o = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: n }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? (0, ke.C)(e, t, r.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = r ? (0, ke.C)(n, t, r.max) : Math.min(t, n)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            i.set(o);
        }
        resolveConstraints() {
          const { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: n } = this.visualElement.projection || {},
            r = this.constraints;
          t && (0, Ee.I)(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : (this.constraints =
                !(!t || !n) &&
                (function (t, { top: e, left: n, bottom: r, right: i }) {
                  return { x: Le(t.x, n, i), y: Le(t.y, e, r) };
                })(n.actual, t)),
            (this.elastic = (function (t = De) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = De),
                { x: Ze(t, "left", "right"), y: Ze(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              Ne((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    const n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(n.actual[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          const { dragConstraints: t, onMeasureDragConstraints: e } =
            this.getProps();
          if (!t || !(0, Ee.I)(t)) return !1;
          const n = t.current;
          (0, Ft.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          const { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          const i = (function (t, e, n) {
            const r = nn(t, n),
              { scroll: i } = e;
            return i && (Xe(r.x, i.x), Xe(r.y, i.y)), r;
          })(n, r.root, this.visualElement.getTransformPagePoint());
          let o = (function (t, e) {
            return { x: Ve(t.x, e.x), y: Ve(t.y, e.y) };
          })(r.layout.actual, i);
          if (e) {
            const t = e(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = Fe(t));
          }
          return o;
        }
        startAnimation(t) {
          const {
              drag: e,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            s = this.constraints || {},
            c = Ne((a) => {
              var c;
              if (!cn(a, e, this.currentDirection)) return;
              let u =
                null !== (c = null === s || void 0 === s ? void 0 : s[a]) &&
                void 0 !== c
                  ? c
                  : {};
              o && (u = { min: 0, max: 0 });
              const l = r ? 200 : 1e6,
                d = r ? 40 : 1e7,
                f = {
                  type: "inertia",
                  velocity: n ? t[a] : 0,
                  bounceStiffness: l,
                  bounceDamping: d,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...u,
                };
              return this.startAxisValueAnimation(a, f);
            });
          return Promise.all(c).then(a);
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return (0, rn.b8)(t, n, 0, e);
        }
        stopAnimation() {
          Ne((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          var e, n;
          const r = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps()[r];
          return (
            i ||
            this.visualElement.getValue(
              t,
              null !==
                (n =
                  null === (e = this.visualElement.getProps().initial) ||
                  void 0 === e
                    ? void 0
                    : e[t]) && void 0 !== n
                ? n
                : 0
            )
          );
        }
        snapToCursor(t) {
          Ne((e) => {
            const { drag: n } = this.getProps();
            if (!cn(e, n, this.currentDirection)) return;
            const { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (r && r.layout) {
              const { min: n, max: o } = r.layout.actual[e];
              i.set(t[e] - (0, ke.C)(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          var t;
          const { drag: e, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!(0, Ee.I)(n) || !r || !this.constraints) return;
          this.stopAnimation();
          const i = { x: 0, y: 0 };
          Ne((t) => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5;
                const r = Ae(t),
                  i = Ae(e);
                return (
                  i > r
                    ? (n = (0, Pe.Y)(e.min, e.max - r, t.min))
                    : r > i && (n = (0, Pe.Y)(t.min, t.max - i, e.min)),
                  (0, Oe.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          const { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.getInstance().style.transform = o
            ? o({}, "")
            : "none"),
            null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            Ne((t) => {
              if (!cn(t, e, null)) return;
              const n = this.getAxisMotionValue(t),
                { min: r, max: o } = this.constraints[t];
              n.set((0, ke.C)(r, o, i[t]));
            });
        }
        addListeners() {
          var t;
          an.set(this.visualElement, this);
          const e = ie(this.visualElement.getInstance(), "pointerdown", (t) => {
              const { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            n = () => {
              const { dragConstraints: t } = this.getProps();
              (0, Ee.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", n);
          r &&
            !r.layout &&
            (null === (t = r.root) || void 0 === t || t.updateScroll(),
            r.updateLayout()),
            n();
          const o = Jt(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (Ne((e) => {
                    const n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.syncRender());
              }
            );
          return () => {
            o(), e(), i(), null === a || void 0 === a || a();
          };
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = De,
              dragMomentum: a = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function cn(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var un = n(6681);
      var ln = n(5411);
      const dn = (t) => (e) => (t(e), null),
        fn = {
          pan: dn(function ({
            onPan: t,
            onPanStart: e,
            onPanEnd: n,
            onPanSessionStart: r,
            visualElement: i,
          }) {
            const o = t || e || n || r,
              a = (0, u.useRef)(null),
              { transformPagePoint: s } = (0, u.useContext)(tt._),
              c = {
                onSessionStart: r,
                onStart: e,
                onMove: t,
                onEnd: (t, e) => {
                  (a.current = null), n && n(t, e);
                },
              };
            (0, u.useEffect)(() => {
              null !== a.current && a.current.updateHandlers(c);
            }),
              oe(
                i,
                "pointerdown",
                o &&
                  function (t) {
                    a.current = new fe(t, c, { transformPagePoint: s });
                  }
              ),
              (0, ln.z)(() => a.current && a.current.end());
          }),
          drag: dn(function (t) {
            const { dragControls: e, visualElement: n } = t,
              r = (0, un.h)(() => new sn(n));
            (0, u.useEffect)(() => e && e.subscribe(r), [r, e]),
              (0, u.useEffect)(() => r.addListeners(), [r]);
          }),
        };
      var hn = n(240);
      function pn() {
        const t = (0, u.useContext)(hn.O);
        if (null === t) return [!0, null];
        const { isPresent: e, onExitComplete: n, register: r } = t,
          i = (0, u.useId)();
        (0, u.useEffect)(() => r(i), []);
        return !e && n ? [!1, () => n && n(i)] : [!0];
      }
      var mn = n(5364),
        vn = n(1705),
        gn = n(3083);
      function yn(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      const bn = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" === typeof t) {
            if (!on.px.test(t)) return t;
            t = parseFloat(t);
          }
          return `${yn(t, e.target.x)}% ${yn(t, e.target.y)}%`;
        },
      };
      var wn = n(8407);
      function xn(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      const Sn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Cn(t, e, n = 1) {
        (0, Ft.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        const [r, i] = (function (t) {
          const e = Sn.exec(t);
          if (!e) return [,];
          const [, n, r] = e;
          return [n, r];
        })(t);
        if (!r) return;
        const o = window.getComputedStyle(e).getPropertyValue(r);
        return o ? o.trim() : xn(i) ? Cn(i, e, n + 1) : i;
      }
      const En = "_$css",
        kn = {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            const r = t,
              i = t.includes("var("),
              o = [];
            i && (t = t.replace(Sn, (t) => (o.push(t), En)));
            const a = wn.P.parse(t);
            if (a.length > 5) return r;
            const s = wn.P.createTransformer(t),
              c = "number" !== typeof a[0] ? 1 : 0,
              u = n.x.scale * e.x,
              l = n.y.scale * e.y;
            (a[0 + c] /= u), (a[1 + c] /= l);
            const d = (0, ke.C)(u, l, 0.5);
            "number" === typeof a[2 + c] && (a[2 + c] /= d),
              "number" === typeof a[3 + c] && (a[3 + c] /= d);
            let f = s(a);
            if (i) {
              let t = 0;
              f = f.replace(En, () => {
                const e = o[t];
                return t++, e;
              });
            }
            return f;
          },
        };
      var Pn = n(4561);
      class On extends u.Component {
        componentDidMount() {
          const {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = t;
          (0, Pn.B)(An),
            i &&
              (e.group && e.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (gn.V.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          const {
              layoutDependency: e,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            o = n.projection;
          return o
            ? ((o.isPresent = i),
              r || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== i &&
                (i
                  ? o.promote()
                  : o.relegate() ||
                    Kt.ZP.postRender(() => {
                      var t;
                      (null === (t = o.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          const { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            !t.currentAnimation && t.isLead() && this.safeToRemove());
        }
        componentWillUnmount() {
          const {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            (null === e || void 0 === e ? void 0 : e.group) &&
              e.group.remove(r),
            (null === n || void 0 === n ? void 0 : n.deregister) &&
              n.deregister(r));
        }
        safeToRemove() {
          const { safeToRemove: t } = this.props;
          null === t || void 0 === t || t();
        }
        render() {
          return null;
        }
      }
      const An = {
          borderRadius: {
            ...bn,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: bn,
          borderTopRightRadius: bn,
          borderBottomLeftRadius: bn,
          borderBottomRightRadius: bn,
          boxShadow: kn,
        },
        Tn = {
          measureLayout: function (t) {
            const [e, n] = pn(),
              r = (0, u.useContext)(mn.p);
            return u.createElement(On, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, u.useContext)(vn.g),
              isPresent: e,
              safeToRemove: n,
            });
          },
        };
      var _n = n(2445),
        jn = n(8488);
      function Rn(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var Mn = n(7107),
        In = n(7732),
        Ln = n(2248);
      const Vn = [
          Be.Animate,
          Be.InView,
          Be.Focus,
          Be.Hover,
          Be.Tap,
          Be.Drag,
          Be.Exit,
        ],
        Dn = [...Vn].reverse(),
        Zn = Vn.length;
      function zn(t) {
        let e = (function (t) {
          return (e) =>
            Promise.all(
              e.map(({ animation: e, options: n }) => (0, Mn.d5)(t, e, n))
            );
        })(t);
        const n = {
          [Be.Animate]: Nn(!0),
          [Be.InView]: Nn(),
          [Be.Hover]: Nn(),
          [Be.Tap]: Nn(),
          [Be.Drag]: Nn(),
          [Be.Focus]: Nn(),
          [Be.Exit]: Nn(),
        };
        let r = !0;
        const i = (e, n) => {
          const r = (0, Ln.x)(t, n);
          if (r) {
            const { transition: t, transitionEnd: n, ...i } = r;
            e = { ...e, ...i, ...n };
          }
          return e;
        };
        function o(o, a) {
          var s;
          const c = t.getProps(),
            u = t.getVariantContext(!0) || {},
            l = [],
            d = new Set();
          let f = {},
            h = 1 / 0;
          for (let e = 0; e < Zn; e++) {
            const p = Dn[e],
              m = n[p],
              v = null !== (s = c[p]) && void 0 !== s ? s : u[p],
              g = (0, In.$)(v),
              y = p === a ? m.isActive : null;
            !1 === y && (h = e);
            let b = v === u[p] && v !== c[p] && g;
            if (
              (b && r && t.manuallyAnimateOnMount && (b = !1),
              (m.protectedKeys = { ...f }),
              (!m.isActive && null === y) ||
                (!v && !m.prevProp) ||
                (0, _n.H)(v) ||
                "boolean" === typeof v)
            )
              continue;
            const w = Bn(m.prevProp, v);
            let x = w || (p === a && m.isActive && !b && g) || (e > h && g);
            const S = Array.isArray(v) ? v : [v];
            let C = S.reduce(i, {});
            !1 === y && (C = {});
            const { prevResolvedValues: E = {} } = m,
              k = { ...E, ...C },
              P = (t) => {
                (x = !0), d.delete(t), (m.needsAnimating[t] = !0);
              };
            for (const t in k) {
              const e = C[t],
                n = E[t];
              f.hasOwnProperty(t) ||
                (e !== n
                  ? (0, jn.C)(e) && (0, jn.C)(n)
                    ? !Rn(e, n) || w
                      ? P(t)
                      : (m.protectedKeys[t] = !0)
                    : void 0 !== e
                    ? P(t)
                    : d.add(t)
                  : void 0 !== e && d.has(t)
                  ? P(t)
                  : (m.protectedKeys[t] = !0));
            }
            (m.prevProp = v),
              (m.prevResolvedValues = C),
              m.isActive && (f = { ...f, ...C }),
              r && t.blockInitialAnimation && (x = !1),
              x &&
                !b &&
                l.push(
                  ...S.map((t) => ({
                    animation: t,
                    options: { type: p, ...o },
                  }))
                );
          }
          if (d.size) {
            const e = {};
            d.forEach((n) => {
              const r = t.getBaseTarget(n);
              void 0 !== r && (e[n] = r);
            }),
              l.push({ animation: e });
          }
          let p = Boolean(l.length);
          return (
            r && !1 === c.initial && !t.manuallyAnimateOnMount && (p = !1),
            (r = !1),
            p ? e(l) : Promise.resolve()
          );
        }
        return {
          animateChanges: o,
          setActive: function (e, r, i) {
            var a;
            if (n[e].isActive === r) return Promise.resolve();
            null === (a = t.variantChildren) ||
              void 0 === a ||
              a.forEach((t) => {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            const s = o(i, e);
            for (const t in n) n[t].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: () => n,
        };
      }
      function Bn(t, e) {
        return "string" === typeof e
          ? e !== t
          : !!Array.isArray(e) && !Rn(e, t);
      }
      function Nn(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      const Fn = {
        animation: dn(({ visualElement: t, animate: e }) => {
          t.animationState || (t.animationState = zn(t)),
            (0, _n.H)(e) && (0, u.useEffect)(() => e.subscribe(t), [e]);
        }),
        exit: dn((t) => {
          const { custom: e, visualElement: n } = t,
            [r, i] = pn(),
            o = (0, u.useContext)(hn.O);
          (0, u.useEffect)(() => {
            n.isPresent = r;
            const t =
              n.animationState &&
              n.animationState.setActive(Be.Exit, !r, {
                custom: (o && o.custom) || e,
              });
            t && !r && t.then(i);
          }, [r]);
        }),
      };
      function $n(t, e, n) {
        return (r, i) => {
          $t(r) &&
            !Ce() &&
            (t.animationState && t.animationState.setActive(Be.Hover, e),
            n && n(r, i));
        };
      }
      const Un = (t, e) => !!e && (t === e || Un(t, e.parentElement));
      var Hn = n(9304),
        qn = n(6034);
      const Wn = new WeakMap(),
        Gn = new WeakMap(),
        Yn = (t) => {
          const e = Wn.get(t.target);
          e && e(t);
        },
        Kn = (t) => {
          t.forEach(Yn);
        };
      function Xn(t, e, n) {
        const r = (function ({ root: t, ...e }) {
          const n = t || document;
          Gn.has(n) || Gn.set(n, {});
          const r = Gn.get(n),
            i = JSON.stringify(e);
          return (
            r[i] || (r[i] = new IntersectionObserver(Kn, { root: t, ...e })),
            r[i]
          );
        })(e);
        return (
          Wn.set(t, n),
          r.observe(t),
          () => {
            Wn.delete(t), r.unobserve(t);
          }
        );
      }
      const Jn = { some: 0, all: 1 };
      function Qn(
        t,
        e,
        n,
        { root: r, margin: i, amount: o = "some", once: a }
      ) {
        (0, u.useEffect)(() => {
          if (!t) return;
          const s = {
            root: null === r || void 0 === r ? void 0 : r.current,
            rootMargin: i,
            threshold: "number" === typeof o ? o : Jn[o],
          };
          return Xn(n.getInstance(), s, (t) => {
            const { isIntersecting: r } = t;
            if (e.isInView === r) return;
            if (((e.isInView = r), a && !r && e.hasEnteredView)) return;
            r && (e.hasEnteredView = !0),
              n.animationState && n.animationState.setActive(Be.InView, r);
            const i = n.getProps(),
              o = r ? i.onViewportEnter : i.onViewportLeave;
            o && o(t);
          });
        }, [t, r, i, o]);
      }
      function tr(t, e, n, { fallback: r = !0 }) {
        (0, u.useEffect)(() => {
          t &&
            r &&
            ("production" !== Hn.O &&
              (0, qn.O)(
                !1,
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
              ),
            requestAnimationFrame(() => {
              e.hasEnteredView = !0;
              const { onViewportEnter: t } = n.getProps();
              t && t(null),
                n.animationState && n.animationState.setActive(Be.InView, !0);
            }));
        }, [t]);
      }
      const er = {
        inView: dn(function ({
          visualElement: t,
          whileInView: e,
          onViewportEnter: n,
          onViewportLeave: r,
          viewport: i = {},
        }) {
          const o = (0, u.useRef)({ hasEnteredView: !1, isInView: !1 });
          let a = Boolean(e || n || r);
          i.once && o.current.hasEnteredView && (a = !1),
            ("undefined" === typeof IntersectionObserver ? tr : Qn)(
              a,
              o.current,
              t,
              i
            );
        }),
        tap: dn(function ({
          onTap: t,
          onTapStart: e,
          onTapCancel: n,
          whileTap: r,
          visualElement: i,
        }) {
          const o = t || e || n || r,
            a = (0, u.useRef)(!1),
            s = (0, u.useRef)(null),
            c = { passive: !(e || t || n || p) };
          function l() {
            s.current && s.current(), (s.current = null);
          }
          function d() {
            return (
              l(),
              (a.current = !1),
              i.animationState && i.animationState.setActive(Be.Tap, !1),
              !Ce()
            );
          }
          function f(e, r) {
            d() &&
              (Un(i.getInstance(), e.target) ? t && t(e, r) : n && n(e, r));
          }
          function h(t, e) {
            d() && n && n(t, e);
          }
          function p(t, n) {
            l(),
              a.current ||
                ((a.current = !0),
                (s.current = (0, de.z)(
                  ie(window, "pointerup", f, c),
                  ie(window, "pointercancel", h, c)
                )),
                i.animationState && i.animationState.setActive(Be.Tap, !0),
                e && e(t, n));
          }
          oe(i, "pointerdown", o ? p : void 0, c), (0, ln.z)(l);
        }),
        focus: dn(function ({ whileFocus: t, visualElement: e }) {
          const { animationState: n } = e;
          Qt(
            e,
            "focus",
            t
              ? () => {
                  n && n.setActive(Be.Focus, !0);
                }
              : void 0
          ),
            Qt(
              e,
              "blur",
              t
                ? () => {
                    n && n.setActive(Be.Focus, !1);
                  }
                : void 0
            );
        }),
        hover: dn(function ({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: n,
          visualElement: r,
        }) {
          oe(r, "pointerenter", t || n ? $n(r, !0, t) : void 0, {
            passive: !t,
          }),
            oe(r, "pointerleave", e || n ? $n(r, !1, e) : void 0, {
              passive: !e,
            });
        }),
      };
      var nr = n(270),
        rr = n(9609),
        ir = n(3234),
        or = n(2490),
        ar = n(1560);
      const sr = [
        "LayoutMeasure",
        "BeforeLayoutMeasure",
        "LayoutUpdate",
        "ViewportBoxUpdate",
        "Update",
        "Render",
        "AnimationComplete",
        "LayoutAnimationComplete",
        "AnimationStart",
        "LayoutAnimationStart",
        "SetAxisTarget",
        "Unmount",
      ];
      var cr = n(7504),
        ur = n(9442),
        lr = n(9432);
      const dr = Object.keys(ur.A),
        fr = dr.length,
        hr =
          ({
            treeType: t = "",
            build: e,
            getBaseTarget: n,
            makeTargetAnimatable: r,
            measureViewportBox: i,
            render: o,
            readValueFromInstance: a,
            removeValueFromRenderState: s,
            sortNodePosition: c,
            scrapeMotionValuesFromProps: l,
          }) =>
          (
            {
              parent: d,
              props: f,
              presenceId: h,
              blockInitialAnimation: p,
              visualState: m,
              reducedMotionConfig: v,
            },
            g = {}
          ) => {
            let y = !1;
            const { latestValues: b, renderState: w } = m;
            let x;
            const S = (function () {
                const t = sr.map(() => new ar.L()),
                  e = {},
                  n = {
                    clearAllListeners: () => t.forEach((t) => t.clear()),
                    updatePropListeners: (t) => {
                      sr.forEach((r) => {
                        var i;
                        const o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach((t, e) => {
                    (n["on" + sr[e]] = (e) => t.add(e)),
                      (n["notify" + sr[e]] = (...e) => t.notify(...e));
                  }),
                  n
                );
              })(),
              C = new Map(),
              E = new Map();
            let k = {};
            const P = { ...b },
              O = f.initial ? { ...b } : {};
            let A;
            function T() {
              x && y && (_(), o(x, w, f.style, D.projection));
            }
            function _() {
              e(D, w, b, g, f);
            }
            function j() {
              S.notifyUpdate(b);
            }
            function R(t, e) {
              const n = e.onChange((e) => {
                  (b[t] = e), f.onUpdate && Kt.ZP.update(j, !1, !0);
                }),
                r = e.onRenderRequest(D.scheduleRender);
              E.set(t, () => {
                n(), r();
              });
            }
            const { willChange: M, ...I } = l(f);
            for (const t in I) {
              const e = I[t];
              void 0 !== b[t] &&
                (0, X.i)(e) &&
                (e.set(b[t], !1), (0, or.L)(M) && M.add(t));
            }
            if (f.values)
              for (const t in f.values) {
                const e = f.values[t];
                void 0 !== b[t] && (0, X.i)(e) && e.set(b[t]);
              }
            const L = (0, cr.G)(f),
              V = (0, cr.M)(f),
              D = {
                treeType: t,
                current: null,
                depth: d ? d.depth + 1 : 0,
                parent: d,
                children: new Set(),
                presenceId: h,
                shouldReduceMotion: null,
                variantChildren: V ? new Set() : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(
                  null === d || void 0 === d ? void 0 : d.isMounted()
                ),
                blockInitialAnimation: p,
                isMounted: () => Boolean(x),
                mount(t) {
                  (y = !0),
                    (x = D.current = t),
                    D.projection && D.projection.mount(t),
                    V &&
                      d &&
                      !L &&
                      (A =
                        null === d || void 0 === d
                          ? void 0
                          : d.addVariantChild(D)),
                    C.forEach((t, e) => R(e, t)),
                    rr.O.current || (0, nr.A)(),
                    (D.shouldReduceMotion =
                      "never" !== v && ("always" === v || rr.n.current)),
                    null === d || void 0 === d || d.children.add(D),
                    D.setProps(f);
                },
                unmount() {
                  var t;
                  null === (t = D.projection) || void 0 === t || t.unmount(),
                    Kt.qY.update(j),
                    Kt.qY.render(T),
                    E.forEach((t) => t()),
                    null === A || void 0 === A || A(),
                    null === d || void 0 === d || d.children.delete(D),
                    S.clearAllListeners(),
                    (x = void 0),
                    (y = !1);
                },
                loadFeatures(t, e, n, r, i, o) {
                  const a = [];
                  "production" !== Hn.O &&
                    n &&
                    e &&
                    (0, Ft.k)(
                      !1,
                      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                    );
                  for (let s = 0; s < fr; s++) {
                    const e = dr[s],
                      { isEnabled: n, Component: r } = ur.A[e];
                    n(t) &&
                      r &&
                      a.push(
                        (0, u.createElement)(r, {
                          key: e,
                          ...t,
                          visualElement: D,
                        })
                      );
                  }
                  if (!D.projection && i) {
                    D.projection = new i(
                      r,
                      D.getLatestValues(),
                      d && d.projection
                    );
                    const {
                      layoutId: e,
                      layout: n,
                      drag: a,
                      dragConstraints: s,
                      layoutScroll: c,
                    } = t;
                    D.projection.setOptions({
                      layoutId: e,
                      layout: n,
                      alwaysMeasureLayout: Boolean(a) || (s && (0, Ee.I)(s)),
                      visualElement: D,
                      scheduleRender: () => D.scheduleRender(),
                      animationType: "string" === typeof n ? n : "both",
                      initialPromotionConfig: o,
                      layoutScroll: c,
                    });
                  }
                  return a;
                },
                addVariantChild(t) {
                  var e;
                  const n = D.getClosestVariantNode();
                  if (n)
                    return (
                      null === (e = n.variantChildren) ||
                        void 0 === e ||
                        e.add(t),
                      () => n.variantChildren.delete(t)
                    );
                },
                sortNodePosition: (e) =>
                  c && t === e.treeType
                    ? c(D.getInstance(), e.getInstance())
                    : 0,
                getClosestVariantNode: () =>
                  V
                    ? D
                    : null === d || void 0 === d
                    ? void 0
                    : d.getClosestVariantNode(),
                getLayoutId: () => f.layoutId,
                getInstance: () => x,
                getStaticValue: (t) => b[t],
                setStaticValue: (t, e) => (b[t] = e),
                getLatestValues: () => b,
                setVisibility(t) {
                  D.isVisible !== t && ((D.isVisible = t), D.scheduleRender());
                },
                makeTargetAnimatable: (t, e = !0) => r(D, t, f, e),
                measureViewportBox: () => i(x, f),
                addValue(t, e) {
                  D.hasValue(t) && D.removeValue(t),
                    C.set(t, e),
                    (b[t] = e.get()),
                    R(t, e);
                },
                removeValue(t) {
                  var e;
                  C.delete(t),
                    null === (e = E.get(t)) || void 0 === e || e(),
                    E.delete(t),
                    delete b[t],
                    s(t, w);
                },
                hasValue: (t) => C.has(t),
                getValue(t, e) {
                  if (f.values && f.values[t]) return f.values[t];
                  let n = C.get(t);
                  return (
                    void 0 === n &&
                      void 0 !== e &&
                      ((n = (0, ir.B)(e)), D.addValue(t, n)),
                    n
                  );
                },
                forEachValue: (t) => C.forEach(t),
                readValue: (t) => (void 0 !== b[t] ? b[t] : a(x, t, g)),
                setBaseTarget(t, e) {
                  P[t] = e;
                },
                getBaseTarget(t) {
                  var e;
                  const { initial: r } = f,
                    i =
                      "string" === typeof r || "object" === typeof r
                        ? null === (e = (0, lr.o)(f, r)) || void 0 === e
                          ? void 0
                          : e[t]
                        : void 0;
                  if (r && void 0 !== i) return i;
                  if (n) {
                    const e = n(f, t);
                    if (void 0 !== e && !(0, X.i)(e)) return e;
                  }
                  return void 0 !== O[t] && void 0 === i ? void 0 : P[t];
                },
                ...S,
                build: () => (_(), w),
                scheduleRender() {
                  Kt.ZP.render(T, !1, !0);
                },
                syncRender: T,
                setProps(t) {
                  (t.transformTemplate || f.transformTemplate) &&
                    D.scheduleRender(),
                    (f = t),
                    S.updatePropListeners(t),
                    (k = (function (t, e, n) {
                      const { willChange: r } = e;
                      for (const i in e) {
                        const o = e[i],
                          a = n[i];
                        if ((0, X.i)(o))
                          t.addValue(i, o), (0, or.L)(r) && r.add(i);
                        else if ((0, X.i)(a))
                          t.addValue(i, (0, ir.B)(o)),
                            (0, or.L)(r) && r.remove(i);
                        else if (a !== o)
                          if (t.hasValue(i)) {
                            const e = t.getValue(i);
                            !e.hasAnimated && e.set(o);
                          } else {
                            const e = t.getStaticValue(i);
                            t.addValue(i, (0, ir.B)(void 0 !== e ? e : o));
                          }
                      }
                      for (const i in n) void 0 === e[i] && t.removeValue(i);
                      return e;
                    })(D, l(f), k));
                },
                getProps: () => f,
                getVariant: (t) => {
                  var e;
                  return null === (e = f.variants) || void 0 === e
                    ? void 0
                    : e[t];
                },
                getDefaultTransition: () => f.transition,
                getTransformPagePoint: () => f.transformPagePoint,
                getVariantContext(t = !1) {
                  if (t)
                    return null === d || void 0 === d
                      ? void 0
                      : d.getVariantContext();
                  if (!L) {
                    const t =
                      (null === d || void 0 === d
                        ? void 0
                        : d.getVariantContext()) || {};
                    return void 0 !== f.initial && (t.initial = f.initial), t;
                  }
                  const e = {};
                  for (let n = 0; n < mr; n++) {
                    const t = pr[n],
                      r = f[t];
                    ((0, In.$)(r) || !1 === r) && (e[t] = r);
                  }
                  return e;
                },
              };
            return D;
          },
        pr = ["initial", ...Vn],
        mr = pr.length;
      var vr = n(5759),
        gr = n(8057),
        yr = n(7630),
        br = n(1248),
        wr = n(4714),
        xr = n(6440);
      const Sr = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Cr = (t) => Sr.has(t),
        Er = (t, e) => {
          t.set(e, !1), t.set(e);
        },
        kr = (t) => t === br.Rx || t === on.px;
      var Pr;
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Pr || (Pr = {}));
      const Or = (t, e) => parseFloat(t.split(", ")[e]),
        Ar =
          (t, e) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            const i = r.match(/^matrix3d\((.+)\)$/);
            if (i) return Or(i[1], e);
            {
              const e = r.match(/^matrix\((.+)\)$/);
              return e ? Or(e[1], t) : 0;
            }
          },
        Tr = new Set(["x", "y", "z"]),
        _r = wr._.filter((t) => !Tr.has(t));
      const jr = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: Ar(4, 13),
          y: Ar(5, 14),
        },
        Rr = (t, e, n = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          const i = Object.keys(e).filter(Cr);
          let o = [],
            a = !1;
          const s = [];
          if (
            (i.forEach((i) => {
              const c = t.getValue(i);
              if (!t.hasValue(i)) return;
              let u = n[i],
                l = (0, xr.C)(u);
              const d = e[i];
              let f;
              if ((0, jn.C)(d)) {
                const t = d.length,
                  e = null === d[0] ? 1 : 0;
                (u = d[e]), (l = (0, xr.C)(u));
                for (let n = e; n < t; n++)
                  f
                    ? (0, Ft.k)(
                        (0, xr.C)(d[n]) === f,
                        "All keyframes must be of the same type"
                      )
                    : ((f = (0, xr.C)(d[n])),
                      (0, Ft.k)(
                        f === l || (kr(l) && kr(f)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else f = (0, xr.C)(d);
              if (l !== f)
                if (kr(l) && kr(f)) {
                  const t = c.get();
                  "string" === typeof t && c.set(parseFloat(t)),
                    "string" === typeof d
                      ? (e[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        f === on.px &&
                        (e[i] = d.map(parseFloat));
                } else
                  (null === l || void 0 === l ? void 0 : l.transform) &&
                  (null === f || void 0 === f ? void 0 : f.transform) &&
                  (0 === u || 0 === d)
                    ? 0 === u
                      ? c.set(f.transform(u))
                      : (e[i] = l.transform(d))
                    : (a ||
                        ((o = (function (t) {
                          const e = [];
                          return (
                            _r.forEach((n) => {
                              const r = t.getValue(n);
                              void 0 !== r &&
                                (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.syncRender(),
                            e
                          );
                        })(t)),
                        (a = !0)),
                      s.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                      Er(c, d));
            }),
            s.length)
          ) {
            const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((t, e, n) => {
                const r = e.measureViewportBox(),
                  i = e.getInstance(),
                  o = getComputedStyle(i),
                  { display: a } = o,
                  s = {};
                "none" === a &&
                  e.setStaticValue("display", t.display || "block"),
                  n.forEach((t) => {
                    s[t] = jr[t](r, o);
                  }),
                  e.syncRender();
                const c = e.measureViewportBox();
                return (
                  n.forEach((n) => {
                    const r = e.getValue(n);
                    Er(r, s[n]), (t[n] = jr[n](c, o));
                  }),
                  t
                );
              })(e, t, s);
            return (
              o.length &&
                o.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.syncRender(),
              te.j && null !== n && window.scrollTo({ top: n }),
              { target: i, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function Mr(t, e, n, r) {
        return ((t) => Object.keys(t).some(Cr))(e)
          ? Rr(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      const Ir = (t, e, n, r) => {
        const i = (function (t, { ...e }, n) {
          const r = t.getInstance();
          if (!(r instanceof Element)) return { target: e, transitionEnd: n };
          n && (n = { ...n }),
            t.forEachValue((t) => {
              const e = t.get();
              if (!xn(e)) return;
              const n = Cn(e, r);
              n && t.set(n);
            });
          for (const i in e) {
            const t = e[i];
            if (!xn(t)) continue;
            const o = Cn(t, r);
            o && ((e[i] = o), n && void 0 === n[i] && (n[i] = t));
          }
          return { target: e, transitionEnd: n };
        })(t, e, r);
        return Mr(t, (e = i.target), n, (r = i.transitionEnd));
      };
      var Lr = n(189),
        Vr = n(4242),
        Dr = n(2728);
      const Zr = {
          treeType: "dom",
          readValueFromInstance(t, e) {
            if (wr.G.has(e)) {
              const t = (0, Dr.A)(e);
              return (t && t.default) || 0;
            }
            {
              const r = ((n = t), window.getComputedStyle(n)),
                i = ((0, yr.o)(e) ? r.getPropertyValue(e) : r[e]) || 0;
              return "string" === typeof i ? i.trim() : i;
            }
            var n;
          },
          sortNodePosition: (t, e) =>
            2 & t.compareDocumentPosition(e) ? 1 : -1,
          getBaseTarget(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: (t, { transformPagePoint: e }) => nn(t, e),
          resetTransform(t, e, n) {
            const { transformTemplate: r } = n;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform(t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState(t, { vars: e, style: n }) {
            delete e[t], delete n[t];
          },
          makeTargetAnimatable(
            t,
            { transition: e, transitionEnd: n, ...r },
            { transformValues: i },
            o = !0
          ) {
            let a = (0, vr.P$)(r, e || {}, t);
            if ((i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), o)) {
              (0, vr.GJ)(t, r, a);
              const e = Ir(t, r, a, n);
              (n = e.transitionEnd), (r = e.target);
            }
            return { transition: e, transitionEnd: n, ...r };
          },
          scrapeMotionValuesFromProps: Lr.U,
          build(t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              (0, gr.r)(e, n, r, i.transformTemplate);
          },
          render: Vr.N,
        },
        zr = hr(Zr);
      var Br = n(6832),
        Nr = n(5415),
        Fr = n(3193),
        $r = n(7302),
        Ur = n(8504);
      const Hr = hr({
        ...Zr,
        getBaseTarget: (t, e) => t[e],
        readValueFromInstance(t, e) {
          var n;
          return wr.G.has(e)
            ? (null === (n = (0, Dr.A)(e)) || void 0 === n
                ? void 0
                : n.default) || 0
            : ((e = $r.s.has(e) ? e : (0, Fr.D)(e)), t.getAttribute(e));
        },
        scrapeMotionValuesFromProps: Br.U,
        build(t, e, n, r, i) {
          (0, Nr.i)(e, n, r, i.transformTemplate);
        },
        render: Ur.K,
      });
      var qr = n(2627);
      const Wr = {
        renderer: (t, e) =>
          (0, qr.q)(t)
            ? Hr(e, { enableHardwareAcceleration: !1 })
            : zr(e, { enableHardwareAcceleration: !0 }),
        ...Fn,
        ...er,
      };
      var Gr = n(2064),
        Yr = n(4710);
      const Kr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Xr = Kr.length,
        Jr = (t) => ("string" === typeof t ? parseFloat(t) : t),
        Qr = (t) => "number" === typeof t || on.px.test(t);
      function ti(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      const ei = ri(0, 0.5, Yr.Bn),
        ni = ri(0.5, 0.95, Yr.GE);
      function ri(t, e, n) {
        return (r) => (r < t ? 0 : r > e ? 1 : n((0, Pe.Y)(t, e, r)));
      }
      function ii(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function oi(t, e) {
        ii(t.x, e.x), ii(t.y, e.y);
      }
      function ai(t, e, n, r, i) {
        return (
          (t = We((t -= e), 1 / n, r)), void 0 !== i && (t = We(t, 1 / i, r)), t
        );
      }
      function si(t, e, [n, r, i], o, a) {
        !(function (t, e = 0, n = 1, r = 0.5, i, o = t, a = t) {
          on.aQ.test(e) &&
            ((e = parseFloat(e)),
            (e = (0, ke.C)(a.min, a.max, e / 100) - a.min));
          if ("number" !== typeof e) return;
          let s = (0, ke.C)(o.min, o.max, r);
          t === o && (s -= e),
            (t.min = ai(t.min, e, n, s, i)),
            (t.max = ai(t.max, e, n, s, i));
        })(t, e[n], e[r], e[i], e.scale, o, a);
      }
      const ci = ["x", "scaleX", "originX"],
        ui = ["y", "scaleY", "originY"];
      function li(t, e, n, r) {
        si(
          t.x,
          e,
          ci,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          si(
            t.y,
            e,
            ui,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function di(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function fi(t) {
        return di(t.x) && di(t.y);
      }
      function hi(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function pi(t) {
        return Ae(t.x) / Ae(t.y);
      }
      var mi = n(10);
      class vi {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, mi.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, mi.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e) => t === e);
          if (0 === e) return !1;
          let n;
          for (let r = e; r >= 0; r--) {
            const t = this.members[r];
            if (!1 !== t.isPresent) {
              n = t;
              break;
            }
          }
          return !!n && (this.promote(n), !0);
        }
        promote(t, e) {
          var n;
          const r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues = r.animationValues || r.latestValues),
                (t.snapshot.isShared = !0)),
              (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) &&
                (t.isLayoutDirty = !0);
            const { crossfade: i } = t.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            var e, n, r, i, o;
            null === (n = (e = t.options).onExitComplete) ||
              void 0 === n ||
              n.call(e),
              null ===
                (o =
                  null === (r = t.resumingFrom) || void 0 === r
                    ? void 0
                    : (i = r.options).onExitComplete) ||
                void 0 === o ||
                o.call(i);
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function gi(t, e, n) {
        let r = `translate3d(${t.x.translate / e.x}px, ${
          t.y.translate / e.y
        }px, 0) `;
        if (((r += `scale(${1 / e.x}, ${1 / e.y}) `), n)) {
          const { rotate: t, rotateX: e, rotateY: i } = n;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            i && (r += `rotateY(${i}deg) `);
        }
        return (
          (r += `scale(${t.x.scale * e.x}, ${t.y.scale * e.y})`),
          "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === r ? "none" : r
        );
      }
      const yi = (t, e) => t.depth - e.depth;
      class bi {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, mi.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, mi.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(yi),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var wi = n(6399);
      const xi = ["", "X", "Y", "Z"];
      function Si({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(
            t,
            n = {},
            r = null === e || void 0 === e ? void 0 : e()
          ) {
            (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(Ti), this.nodes.forEach(_i);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = n),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new bi());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ar.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            null === n || void 0 === n || n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e);
          }
          mount(e, n = !1) {
            var r;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            const { layoutId: i, layout: o, visualElement: a } = this.options;
            if (
              (a && !a.getInstance() && a.mount(e),
              this.root.nodes.add(this),
              null === (r = this.parent) ||
                void 0 === r ||
                r.children.add(this),
              this.id && this.root.potentialNodes.delete(this.id),
              n && (o || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              const r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  clearTimeout(n),
                  (n = window.setTimeout(r, 250)),
                  gn.V.hasAnimatedSinceResize &&
                    ((gn.V.hasAnimatedSinceResize = !1),
                    this.nodes.forEach(Ai));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                a &&
                (i || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    var i, o, s, c, u;
                    if (this.isTreeAnimationBlocked())
                      return (
                        (this.target = void 0),
                        void (this.relativeTarget = void 0)
                      );
                    const l =
                        null !==
                          (o =
                            null !== (i = this.options.transition) &&
                            void 0 !== i
                              ? i
                              : a.getDefaultTransition()) && void 0 !== o
                          ? o
                          : Vi,
                      {
                        onLayoutAnimationStart: d,
                        onLayoutAnimationComplete: f,
                      } = a.getProps(),
                      h = !this.targetLayout || !hi(this.targetLayout, r) || n,
                      p = !e && n;
                    if (
                      (null === (s = this.resumeFrom) || void 0 === s
                        ? void 0
                        : s.instance) ||
                      p ||
                      (e && (h || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, p);
                      const e = {
                        ...(0, rn.ev)(l, "layout"),
                        onPlay: d,
                        onComplete: f,
                      };
                      a.shouldReduceMotion && ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e ||
                        0 !== this.animationProgress ||
                        this.finishAnimation(),
                        this.isLead() &&
                          (null === (u = (c = this.options).onExitComplete) ||
                            void 0 === u ||
                            u.call(c));
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (t = this.getStack()) || void 0 === t || t.remove(this),
              null === (e = this.parent) ||
                void 0 === e ||
                e.children.delete(this),
              (this.instance = void 0),
              Kt.qY.preRender(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            var t;
            return (
              this.isAnimationBlocked ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() ||
              ((this.isUpdating = !0),
              null === (t = this.nodes) || void 0 === t || t.forEach(ji));
          }
          willUpdate(t = !0) {
            var e, n, r;
            if (this.root.isUpdateBlocked())
              return void (
                null === (n = (e = this.options).onExitComplete) ||
                void 0 === n ||
                n.call(e)
              );
            if (
              (!this.root.isUpdating && this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let s = 0; s < this.path.length; s++) {
              const t = this.path[s];
              (t.shouldResetTransform = !0), t.updateScroll();
            }
            const { layoutId: i, layout: o } = this.options;
            if (void 0 === i && !o) return;
            const a =
              null === (r = this.options.visualElement) || void 0 === r
                ? void 0
                : r.getProps().transformTemplate;
            (this.prevTransformTemplateValue =
              null === a || void 0 === a ? void 0 : a(this.latestValues, "")),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          didUpdate() {
            if (this.isUpdateBlocked())
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(Pi)
              );
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(Di), this.potentialNodes.clear()),
              this.nodes.forEach(Oi),
              this.nodes.forEach(Ci),
              this.nodes.forEach(Ei),
              this.clearAllSnapshots(),
              Kt.iW.update(),
              Kt.iW.preRender(),
              Kt.iW.render());
          }
          clearAllSnapshots() {
            this.nodes.forEach(ki), this.sharedNodes.forEach(Ri);
          }
          scheduleUpdateProjection() {
            Kt.ZP.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            Kt.ZP.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            if (this.snapshot || !this.instance) return;
            const t = this.measure(),
              e = this.removeTransform(this.removeElementScroll(t));
            zi(e),
              (this.snapshot = { measured: t, layout: e, latestValues: {} });
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (
              (this.updateScroll(),
              (!this.options.alwaysMeasureLayout || !this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let r = 0; r < this.path.length; r++) {
                this.path[r].updateScroll();
              }
            const e = this.measure();
            zi(e);
            const n = this.layout;
            (this.layout = {
              measured: e,
              actual: this.removeElementScroll(e),
            }),
              (this.layoutCorrected = {
                x: { min: 0, max: 0 },
                y: { min: 0, max: 0 },
              }),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.actual),
              null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.notifyLayoutMeasure(
                  this.layout.actual,
                  null === n || void 0 === n ? void 0 : n.actual
                );
          }
          updateScroll() {
            this.options.layoutScroll &&
              this.instance &&
              ((this.isScrollRoot = r(this.instance)),
              (this.scroll = n(this.instance)));
          }
          resetTransform() {
            var t;
            if (!i) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !fi(this.projectionDelta),
              r =
                null === (t = this.options.visualElement) || void 0 === t
                  ? void 0
                  : t.getProps().transformTemplate,
              o =
                null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
              a = o !== this.prevTransformTemplateValue;
            e &&
              (n || He(this.latestValues) || a) &&
              (i(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            const { visualElement: t } = this.options;
            if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            const e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (Xe(e.x, n.x), Xe(e.y, n.y)), e;
          }
          removeElementScroll(t) {
            const e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            oi(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                { scroll: i, options: o, isScrollRoot: a } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (a) {
                  oi(e, t);
                  const { scroll: n } = this.root;
                  n && (Xe(e.x, -n.x), Xe(e.y, -n.y));
                }
                Xe(e.x, i.x), Xe(e.y, i.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            oi(n, t);
            for (let r = 0; r < this.path.length; r++) {
              const t = this.path[r];
              !e &&
                t.options.layoutScroll &&
                t.scroll &&
                t !== t.root &&
                en(n, { x: -t.scroll.x, y: -t.scroll.y }),
                He(t.latestValues) && en(n, t.latestValues);
            }
            return He(this.latestValues) && en(n, this.latestValues), n;
          }
          removeTransform(t) {
            var e;
            const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            oi(n, t);
            for (let r = 0; r < this.path.length; r++) {
              const t = this.path[r];
              if (!t.instance) continue;
              if (!He(t.latestValues)) continue;
              Ue(t.latestValues) && t.updateSnapshot();
              const i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              oi(i, t.measure()),
                li(
                  n,
                  t.latestValues,
                  null === (e = t.snapshot) || void 0 === e ? void 0 : e.layout,
                  i
                );
            }
            return He(this.latestValues) && li(n, this.latestValues), n;
          }
          setTargetDelta(t) {
            (this.targetDelta = t), this.root.scheduleUpdateProjection();
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          resolveTargetDelta() {
            var t;
            const { layout: e, layoutId: n } = this.options;
            var r, i, o;
            this.layout &&
              (e || n) &&
              (this.targetDelta ||
                this.relativeTarget ||
                ((this.relativeParent = this.getClosestProjectingParent()),
                this.relativeParent &&
                  this.relativeParent.layout &&
                  ((this.relativeTarget = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.relativeTargetOrigin = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  Ie(
                    this.relativeTargetOrigin,
                    this.layout.actual,
                    this.relativeParent.layout.actual
                  ),
                  oi(this.relativeTarget, this.relativeTargetOrigin))),
              (this.relativeTarget || this.targetDelta) &&
                (this.target ||
                  ((this.target = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.targetWithTransforms = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  })),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                (null === (t = this.relativeParent) || void 0 === t
                  ? void 0
                  : t.target)
                  ? ((r = this.target),
                    (i = this.relativeTarget),
                    (o = this.relativeParent.target),
                    Re(r.x, i.x, o.x),
                    Re(r.y, i.y, o.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(this.layout.actual))
                      : oi(this.target, this.layout.actual),
                    Ke(this.target, this.targetDelta))
                  : oi(this.target, this.layout.actual),
                this.attemptToResolveRelativeTarget &&
                  ((this.attemptToResolveRelativeTarget = !1),
                  (this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    Boolean(this.relativeParent.resumingFrom) ===
                      Boolean(this.resumingFrom) &&
                    !this.relativeParent.options.layoutScroll &&
                    this.relativeParent.target &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    Ie(
                      this.relativeTargetOrigin,
                      this.target,
                      this.relativeParent.target
                    ),
                    oi(this.relativeTarget, this.relativeTargetOrigin)))));
          }
          getClosestProjectingParent() {
            if (this.parent && !He(this.parent.latestValues))
              return (this.parent.relativeTarget || this.parent.targetDelta) &&
                this.parent.layout
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          calcProjection() {
            var t;
            const { layout: e, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!e && !n))
            )
              return;
            const r = this.getLead();
            oi(this.layoutCorrected, this.layout.actual),
              (function (t, e, n, r = !1) {
                var i, o;
                const a = n.length;
                if (!a) return;
                let s, c;
                e.x = e.y = 1;
                for (let u = 0; u < a; u++)
                  (s = n[u]),
                    (c = s.projectionDelta),
                    "contents" !==
                      (null ===
                        (o =
                          null === (i = s.instance) || void 0 === i
                            ? void 0
                            : i.style) || void 0 === o
                        ? void 0
                        : o.display) &&
                      (r &&
                        s.options.layoutScroll &&
                        s.scroll &&
                        s !== s.root &&
                        en(t, { x: -s.scroll.x, y: -s.scroll.y }),
                      c && ((e.x *= c.x.scale), (e.y *= c.y.scale), Ke(t, c)),
                      r && He(s.latestValues) && en(t, s.latestValues));
              })(
                this.layoutCorrected,
                this.treeScale,
                this.path,
                Boolean(this.resumingFrom) || this !== r
              );
            const { target: i } = r;
            if (!i) return;
            this.projectionDelta ||
              ((this.projectionDelta = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              }),
              (this.projectionDeltaWithTransform = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              }));
            const o = this.treeScale.x,
              a = this.treeScale.y,
              s = this.projectionTransform;
            je(
              this.projectionDelta,
              this.layoutCorrected,
              i,
              this.latestValues
            ),
              (this.projectionTransform = gi(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform === s &&
                this.treeScale.x === o &&
                this.treeScale.y === a) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", i));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e, n, r;
            null === (n = (e = this.options).scheduleRender) ||
              void 0 === n ||
              n.call(e),
              t &&
                (null === (r = this.getStack()) ||
                  void 0 === r ||
                  r.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            var n;
            const r = this.snapshot,
              i = (null === r || void 0 === r ? void 0 : r.latestValues) || {},
              o = { ...this.latestValues },
              a = {
                x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              };
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
              c = null === r || void 0 === r ? void 0 : r.isShared,
              u =
                ((null === (n = this.getStack()) || void 0 === n
                  ? void 0
                  : n.members.length) || 0) <= 1,
              l = Boolean(
                c && !u && !0 === this.options.crossfade && !this.path.some(Li)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var n;
                const r = e / 1e3;
                var d, f, h, p;
                Mi(a.x, t.x, r),
                  Mi(a.y, t.y, r),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (n = this.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (Ie(
                      s,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    (d = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (h = s),
                    (p = r),
                    Ii(d.x, f.x, h.x, p),
                    Ii(d.y, f.y, h.y, p)),
                  c &&
                    ((this.animationValues = o),
                    (function (t, e, n, r, i, o) {
                      var a, s, c, u;
                      i
                        ? ((t.opacity = (0, ke.C)(
                            0,
                            null !== (a = n.opacity) && void 0 !== a ? a : 1,
                            ei(r)
                          )),
                          (t.opacityExit = (0, ke.C)(
                            null !== (s = e.opacity) && void 0 !== s ? s : 1,
                            0,
                            ni(r)
                          )))
                        : o &&
                          (t.opacity = (0, ke.C)(
                            null !== (c = e.opacity) && void 0 !== c ? c : 1,
                            null !== (u = n.opacity) && void 0 !== u ? u : 1,
                            r
                          ));
                      for (let l = 0; l < Xr; l++) {
                        const i = `border${Kr[l]}Radius`;
                        let o = ti(e, i),
                          a = ti(n, i);
                        (void 0 === o && void 0 === a) ||
                          (o || (o = 0),
                          a || (a = 0),
                          0 === o || 0 === a || Qr(o) === Qr(a)
                            ? ((t[i] = Math.max((0, ke.C)(Jr(o), Jr(a), r), 0)),
                              (on.aQ.test(a) || on.aQ.test(o)) && (t[i] += "%"))
                            : (t[i] = a));
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = (0, ke.C)(e.rotate || 0, n.rotate || 0, r));
                    })(o, i, this.latestValues, r, l, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(0);
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"),
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
              this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
              this.pendingAnimation &&
                (Kt.qY.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Kt.ZP.update(() => {
                (gn.V.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, Gr.j)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      var n;
                      this.mixTargetDelta(e),
                        null === (n = t.onUpdate) ||
                          void 0 === n ||
                          n.call(t, e);
                    },
                    onComplete: () => {
                      var e;
                      null === (e = t.onComplete) || void 0 === e || e.call(t),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            var t;
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (t = this.getStack()) ||
                void 0 === t ||
                t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            var t;
            this.currentAnimation &&
              (null === (t = this.mixTargetDelta) ||
                void 0 === t ||
                t.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: r,
              latestValues: i,
            } = t;
            if (e && n && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                Bi(this.options.animationType, this.layout.actual, r.actual)
              ) {
                n = this.target || {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                };
                const e = Ae(this.layout.actual.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                const r = Ae(this.layout.actual.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + r);
              }
              oi(e, n),
                en(e, i),
                je(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            var n, r, i;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new vi());
            this.sharedNodes.get(t).add(e),
              e.promote({
                transition:
                  null === (n = e.options.initialPromotionConfig) ||
                  void 0 === n
                    ? void 0
                    : n.transition,
                preserveFollowOpacity:
                  null ===
                    (i =
                      null === (r = e.options.initialPromotionConfig) ||
                      void 0 === r
                        ? void 0
                        : r.shouldPreserveFollowOpacity) || void 0 === i
                    ? void 0
                    : i.call(r, e),
              });
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            const { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            const { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            const { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            const r = this.getStack();
            r && r.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            const { visualElement: t } = this.options;
            if (!t) return;
            let e = !1;
            const n = {};
            for (let r = 0; r < xi.length; r++) {
              const i = "rotate" + xi[r];
              t.getStaticValue(i) &&
                ((e = !0),
                (n[i] = t.getStaticValue(i)),
                t.setStaticValue(i, 0));
            }
            if (e) {
              null === t || void 0 === t || t.syncRender();
              for (const e in n) t.setStaticValue(e, n[e]);
              t.scheduleRender();
            }
          }
          getProjectionStyles(t = {}) {
            var e, n, r;
            const i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return { visibility: "hidden" };
            i.visibility = "";
            const o =
              null === (e = this.options.visualElement) || void 0 === e
                ? void 0
                : e.getProps().transformTemplate;
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents = (0, wi.b)(t.pointerEvents) || ""),
                (i.transform = o ? o(this.latestValues, "") : "none"),
                i
              );
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              const e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = (0, wi.b)(t.pointerEvents) || "")),
                this.hasProjected &&
                  !He(this.latestValues) &&
                  ((e.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            const s = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = gi(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              o && (i.transform = o(s, i.transform));
            const { x: c, y: u } = this.projectionDelta;
            (i.transformOrigin = `${100 * c.origin}% ${100 * u.origin}% 0`),
              a.animationValues
                ? (i.opacity =
                    a === this
                      ? null !==
                          (r =
                            null !== (n = s.opacity) && void 0 !== n
                              ? n
                              : this.latestValues.opacity) && void 0 !== r
                        ? r
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
                : (i.opacity =
                    a === this
                      ? void 0 !== s.opacity
                        ? s.opacity
                        : ""
                      : void 0 !== s.opacityExit
                      ? s.opacityExit
                      : 0);
            for (const l in Pn.P) {
              if (void 0 === s[l]) continue;
              const { correct: t, applyTo: e } = Pn.P[l],
                n = t(s[l], a);
              if (e) {
                const t = e.length;
                for (let r = 0; r < t; r++) i[e[r]] = n;
              } else i[l] = n;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  a === this ? (0, wi.b)(t.pointerEvents) || "" : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(Pi),
              this.root.sharedNodes.clear();
          }
        };
      }
      function Ci(t) {
        t.updateLayout();
      }
      function Ei(t) {
        var e, n, r;
        const i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          const { actual: e, measured: n } = t.layout,
            { animationType: r } = t.options;
          "size" === r
            ? Ne((t) => {
                const n = i.isShared ? i.measured[t] : i.layout[t],
                  r = Ae(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : Bi(r, i.layout, e) &&
              Ne((t) => {
                const n = i.isShared ? i.measured[t] : i.layout[t],
                  r = Ae(e[t]);
                n.max = n.min + r;
              });
          const o = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          je(o, e, i.layout);
          const a = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          i.isShared
            ? je(a, t.applyTransform(n, !0), i.measured)
            : je(a, e, i.layout);
          const s = !fi(o);
          let c = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            const { snapshot: n, layout: r } = t.relativeParent;
            if (n && r) {
              const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ie(t, i.layout, n.layout);
              const o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              Ie(o, e, r.actual), hi(t, o) || (c = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: s,
            hasRelativeTargetChanged: c,
          });
        } else
          t.isLead() &&
            (null === (r = (n = t.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        t.options.transition = void 0;
      }
      function ki(t) {
        t.clearSnapshot();
      }
      function Pi(t) {
        t.clearMeasurements();
      }
      function Oi(t) {
        const { visualElement: e } = t.options;
        (null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function Ai(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function Ti(t) {
        t.resolveTargetDelta();
      }
      function _i(t) {
        t.calcProjection();
      }
      function ji(t) {
        t.resetRotation();
      }
      function Ri(t) {
        t.removeLeadSnapshot();
      }
      function Mi(t, e, n) {
        (t.translate = (0, ke.C)(e.translate, 0, n)),
          (t.scale = (0, ke.C)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function Ii(t, e, n, r) {
        (t.min = (0, ke.C)(e.min, n.min, r)),
          (t.max = (0, ke.C)(e.max, n.max, r));
      }
      function Li(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      const Vi = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Di(t, e) {
        let n = t.root;
        for (let i = t.path.length - 1; i >= 0; i--)
          if (Boolean(t.path[i].instance)) {
            n = t.path[i];
            break;
          }
        const r = (n && n !== t.root ? n.instance : document).querySelector(
          `[data-projection-id="${e}"]`
        );
        r && t.mount(r, !0);
      }
      function Zi(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function zi(t) {
        Zi(t.x), Zi(t.y);
      }
      function Bi(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t &&
            !(function (t, e, n = 0.1) {
              return le(t, e) <= n;
            })(pi(e), pi(n), 0.2))
        );
      }
      const Ni = Si({
          attachResizeListener: (t, e) => Jt(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        Fi = { current: void 0 },
        $i = {
          ...Wr,
          ...fn,
          ...Tn,
          projectionNodeConstructor: Si({
            measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
            defaultParent: () => {
              if (!Fi.current) {
                const t = new Ni(0, {});
                t.mount(window),
                  t.setOptions({ layoutScroll: !0 }),
                  (Fi.current = t);
              }
              return Fi.current;
            },
            resetTransform: (t, e) => {
              t.style.transform = void 0 !== e ? e : "none";
            },
            checkIsScrollRoot: (t) =>
              Boolean("fixed" === window.getComputedStyle(t).position),
          }),
        };
      var Ui = n(2216),
        Hi = function () {
          var t = (0, u.useRef)(0),
            e = function () {
              if (t.current !== window.innerWidth) {
                t.current = window.innerWidth;
                var e = 0.01 * window.innerHeight;
                document.documentElement.style.setProperty(
                  "--vh",
                  "".concat(e, "px")
                );
              }
            };
          ft(e),
            (0, u.useEffect)(function () {
              setTimeout(function () {
                e();
              }, 400);
            }, []);
        },
        qi = n(661),
        Wi = n(7294).useState,
        Gi = n(1915).Ux,
        Yi = function (t) {
          var e = t.children,
            n = Wi({});
          return (0, i.jsx)(Gi.Provider, { value: n, children: e });
        };
      function Ki() {
        var t = (0, f.Z)(["\n  :root {\n    ", ";\n    ", "\n  }\n"]);
        return (
          (Ki = function () {
            return t;
          }),
          t
        );
      }
      var Xi = Object.entries(p.DM)
          .map(function (t) {
            var e = (0, d.Z)(t, 2),
              n = e[0],
              r = e[1];
            return "--color-".concat(n, ": ").concat(r, ";");
          })
          .join(" "),
        Ji = (0, h.vJ)(Ki(), Xi, p.t0),
        Qi = n(1915),
        to = function (t) {
          var e = t.children,
            n = (0, u.useState)(!1);
          return (0, i.jsx)(Qi.Pj.Provider, { value: n, children: e });
        },
        eo = function (t) {
          var e = t.children,
            n = (0, u.useRef)({}),
            r = (0, u.useRef)({}),
            o = (0, u.useRef)({}),
            a = (0, u.useMemo)(function () {
              return {
                addListener: function (t, e) {
                  return n.current[t]
                    ? (r.current[t].push(e), n.current[t].matches)
                    : ((n.current[t] = window.matchMedia(t)),
                      (r.current[t] = [e]),
                      (o.current[t] = (function (t) {
                        return function (e) {
                          var n;
                          null === (n = r.current[t]) ||
                            void 0 === n ||
                            n.forEach(function (t) {
                              return t(e);
                            });
                        };
                      })(t)),
                      n.current[t].addEventListener
                        ? n.current[t].addEventListener("change", o.current[t])
                        : n.current[t].addListener(o.current[t]),
                      n.current[t].matches);
                },
                removeListener: function (t, e) {
                  (r.current[t] = r.current[t].filter(function (t) {
                    return t !== e;
                  })),
                    r.current[t].length > 0 ||
                      !n.current[t] ||
                      (n.current[t].addEventListener
                        ? n.current[t].removeEventListener(
                            "change",
                            o.current[t]
                          )
                        : n.current[t].removeListener(o.current[t]),
                      (n.current[t] = null));
                },
                getMatchQuery: function (t) {
                  var e, r;
                  return (
                    (null === (e = n.current) ||
                    void 0 === e ||
                    null === (r = e[t]) ||
                    void 0 === r
                      ? void 0
                      : r.matches) || !1
                  );
                },
              };
            }, []);
          return (0, i.jsx)(Qi.HX.Provider, { value: a, children: e });
        },
        no = (0, u.memo)(eo),
        ro = function (t) {
          var e = t.children,
            n = (0, s.useRouter)().isPreview,
            r = (0, u.useState)(!1),
            o = r[0],
            a = r[1],
            c = (0, u.useMemo)(
              function () {
                return n ? [!1, function () {}] : [o, a];
              },
              [o, n]
            );
          return (0, i.jsx)(Qi.pl.Provider, { value: c, children: e });
        },
        io = function (t) {
          var e = t.children,
            n = (0, u.useState)({}),
            r = n[0],
            o = n[1],
            a = (0, u.useState)(!1),
            s = a[0],
            c = a[1],
            l = {
              overlayContent: r,
              setOverlayContent: o,
              overlayOpen: s,
              handleOverlayClick: function () {
                c(function (t) {
                  return !t;
                });
              },
            };
          return (0, i.jsx)(Qi.tZ.Provider, { value: l, children: e });
        },
        oo = function (t, e) {
          var n = (function (t) {
              var e = (0, u.useRef)(t);
              return (
                (0, u.useEffect)(
                  function () {
                    e.current = t;
                  },
                  [t]
                ),
                e
              );
            })(e),
            r = (0, s.useRouter)();
          (0, u.useEffect)(
            function () {
              var e,
                i = function () {
                  var t;
                  null === (t = n.current) || void 0 === t || t.call(n);
                };
              return (
                null === r ||
                  void 0 === r ||
                  null === (e = r.events) ||
                  void 0 === e ||
                  e.on(t, i),
                function () {
                  var e;
                  return null === r ||
                    void 0 === r ||
                    null === (e = r.events) ||
                    void 0 === e
                    ? void 0
                    : e.off(t, i);
                }
              );
            },
            [r, n, t]
          );
        },
        ao = function (t) {
          var e = t.children,
            n = (0, s.useRouter)().isPreview,
            r = (0, u.useState)({ isFirstVisit: !0, shouldPlayIntro: !n }),
            o = r[0],
            a = r[1];
          return (
            oo("routeChangeStart", function () {
              return a({ isFirstVisit: !1, shouldPlayIntro: !1 });
            }),
            (0, i.jsx)(Qi.B3.Provider, { value: o, children: e })
          );
        },
        so = 0,
        co = [
          "content",
          "caseIntroAnim",
          "top-bar",
          "intro-bg",
          "intro-text",
          "menu-backdrop",
          "menu",
          "overlay",
        ].reduce(function (t, e) {
          return so++, (t[e] = so), t;
        }, {});
      function uo() {
        var t = (0, f.Z)(["\n  :root {\n    ", ";\n  }\n"]);
        return (
          (uo = function () {
            return t;
          }),
          t
        );
      }
      var lo = Object.entries(co)
          .map(function (t) {
            var e = (0, d.Z)(t, 2),
              n = e[0],
              r = e[1];
            return "--z-".concat(n, ": ").concat(r, ";");
          })
          .join(" "),
        fo = (0, h.vJ)(uo(), lo),
        ho = function (t) {
          var e = t.children;
          return (
            Hi(),
            (0, i.jsxs)(Bt, {
              features: $i,
              strict: !0,
              children: [
                (0, i.jsx)(Ji, {}),
                (0, i.jsx)(fo, {}),
                (0, i.jsx)(ao, {
                  children: (0, i.jsx)(Yi, {
                    children: (0, i.jsx)(no, {
                      children: (0, i.jsx)(to, {
                        children: (0, i.jsx)(qi.Z, {
                          children: (0, i.jsx)(io, {
                            children: (0, i.jsx)(ro, { children: e }),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                (0, i.jsx)("div", { id: Ui.z }),
              ],
            })
          );
        },
        po = n(7514),
        mo = n(5820),
        vo = n(2808),
        go = [0.42, 0.02, 0.06, 0.97],
        yo = {
          show: { x: 0, transition: { duration: 1, ease: go } },
          hide: { x: "-100%", transition: { duration: 1, ease: go } },
        },
        bo = {
          show: { opacity: 0.4, transition: { duration: 0.75, ease: go } },
          hide: { opacity: 0, transition: { duration: 0.75, ease: go } },
        };
      function wo() {
        var t = (0, f.Z)([
          "\n  background-color: var(--color-black);\n  color: var(--color-white);\n  position: fixed;\n  z-index: var(--z-overlay);\n  inset: 0;\n  height: 100%;\n  width: 80vw;\n  overflow-y: auto;\n  padding: 4.5rem 2rem 1.25rem 1.25rem;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  ",
          " {\n    padding: 6.25rem 10rem 2rem 2rem;\n  }\n",
        ]);
        return (
          (wo = function () {
            return t;
          }),
          t
        );
      }
      function xo() {
        var t = (0, f.Z)([
          "\n  background-color: var(--color-black);\n  position: fixed;\n  z-index: var(--z-content);\n  inset: 0;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n",
        ]);
        return (
          (xo = function () {
            return t;
          }),
          t
        );
      }
      var So,
        Co = (0, h.ZP)(Y.m.div).withConfig({ componentId: "sc-4cbb530d-0" })(
          wo(),
          m.qk.s
        ),
        Eo = (0, h.ZP)(Y.m.div).withConfig({ componentId: "sc-4cbb530d-1" })(
          xo()
        ),
        ko = function () {
          var t = (0, vo.Z)(),
            e = t.overlayOpen,
            n = t.overlayContent,
            r = t.handleOverlayClick;
          return (0, i.jsx)(mo.M, {
            children:
              e &&
              (0, i.jsxs)(po.Y, {
                onEscapeKey: r,
                children: [
                  (0, i.jsx)(Co, {
                    variants: yo,
                    initial: "hide",
                    animate: "show",
                    exit: "hide",
                    children: n,
                  }),
                  (0, i.jsx)(Eo, {
                    onClick: r,
                    variants: bo,
                    initial: "hide",
                    animate: "show",
                    exit: "hide",
                  }),
                ],
              }),
          });
        },
        Po = n(3302),
        Oo = n(688),
        Ao = n(3736),
        To = n(4711),
        _o = /case\b/g,
        jo = /(404|500)\b/g,
        Ro = function () {
          var t = (0, d.Z)((0, g.Z)(), 2),
            e = t[0],
            n = t[1],
            r = (0, d.Z)((0, Ao.Z)(), 2),
            i = r[0],
            o = r[1],
            a = (0, To.Z)().activeFilters.length > 0,
            c = (0, s.useRouter)(),
            u = c.asPath.match(_o),
            l = c.asPath.match(jo),
            f = (0, d.Z)((0, Oo.Z)(), 1)[0].color;
          if (u)
            return {
              text: "Close",
              blendText: !0,
              hasInitialState: !1,
              textColor: "var(--color-white)",
              backgroundColor: f || p.DM.terracotta,
              onClick: function () {
                return c.push("/cases/");
              },
            };
          if (e)
            return {
              id: "menu-close",
              text: "Close",
              hasInitialState: !1,
              textColor: "var(--color-white)",
              backgroundColor: "var(--color-blue)",
              delay: 220,
              onClick: function () {
                return n(!1);
              },
            };
          if (i) {
            if (a)
              return {
                id: "menu-filter-apply",
                text: "Apply",
                hasInitialState: !1,
                textColor: "var(--color-black)",
                backgroundColor: "var(--color-blue)",
                onClick: function () {
                  return o(!1);
                },
              };
            if (!a)
              return {
                id: "menu-filter-close",
                text: "Close",
                hasInitialState: !1,
                textColor: "var(--color-black)",
                backgroundColor: "var(--color-terracotta)",
                onClick: function () {
                  return o(!1);
                },
              };
          }
          return l
            ? {
                text: "Menu",
                hasInitialState: !0,
                blendText: !0,
                textColor: "var(--color-white)",
                backgroundColor: "var(--color-terracotta)",
                onClick: function () {
                  return n(!0);
                },
              }
            : {
                id: "menu-open",
                text: "Menu",
                hasInitialState: !0,
                textColor: "var(--color-black)",
                backgroundColor: "var(--color-terracotta)",
                onClick: function () {
                  return n(!0);
                },
              };
        },
        Mo = n(8112);
      function Io() {
        return (
          (Io = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Io.apply(this, arguments)
        );
      }
      var Lo,
        Vo = function (t) {
          return u.createElement(
            "svg",
            Io({ role: "img" }, t),
            So ||
              (So = u.createElement(
                "defs",
                null,
                u.createElement("path", {
                  d: "M44.5 0A44.5 44.5 0 1 1 0 44.5 44.5 44.5 0 0 1 44.5 0Z",
                  id: "circle",
                })
              ))
          );
        };
      function Do() {
        return (
          (Do = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          Do.apply(this, arguments)
        );
      }
      var Zo = function (t) {
          return u.createElement(
            "svg",
            Do({ role: "img" }, t),
            Lo ||
              (Lo = u.createElement(
                "defs",
                null,
                u.createElement(
                  "filter",
                  {
                    id: "filter",
                    x: -50,
                    y: -50,
                    width: 250,
                    height: 250,
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  u.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 2.76726 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 1.1069 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0431086 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_2332_7367",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 6.6501 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 2.66004 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0600461 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect1_dropShadow_2332_7367",
                    result: "effect2_dropShadow_2332_7367",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 12.5216 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 5.00862 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0704624 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect2_dropShadow_2332_7367",
                    result: "effect3_dropShadow_2332_7367",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 22.3363 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 8.93452 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0781982 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect3_dropShadow_2332_7367",
                    result: "effect4_dropShadow_2332_7367",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 41.7776 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 16.711 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0845232 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect4_dropShadow_2332_7367",
                    result: "effect5_dropShadow_2332_7367",
                  }),
                  u.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  u.createElement("feOffset", { dy: 100 }),
                  u.createElement("feGaussianBlur", { stdDeviation: 40 }),
                  u.createElement("feColorMatrix", {
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in2: "effect5_dropShadow_2332_7367",
                    result: "effect6_dropShadow_2332_7367",
                  }),
                  u.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect6_dropShadow_2332_7367",
                    result: "shape",
                  })
                )
              ))
          );
        },
        zo = n(3093),
        Bo = n(3036),
        No = n(6513),
        Fo = {
          type: "spring",
          mass: 1,
          damping: 13,
          tension: 1e3,
          friction: 80,
        },
        $o = {
          initial: { rotate: -20, y: 20, scale: 0.85 },
          animate: { rotate: 70, y: 0, scale: 1 },
          exit: { rotate: 170, y: -20, scale: 0.85 },
        },
        Uo = {
          default: { scale: 1 },
          hover: { scale: 1.05 },
          tap: { scale: 0.95 },
        },
        Ho = function (t) {
          var e = (0, No._)(),
            n = (0, u.useRef)();
          return (
            (0, u.useEffect)(
              function () {
                var i = (function () {
                  var t = (0, x.Z)(function () {
                    return (0, S.__generator)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, e.start("animate")];
                        case 1:
                          return (
                            t.sent(),
                            [
                              4,
                              e.start(
                                "exit",
                                (0, w.Z)((0, r.Z)({}, Fo), { delay: 0.5 })
                              ),
                            ]
                          );
                        case 2:
                          return t.sent(), e.set("initial"), [2];
                      }
                    });
                  });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                if (t) {
                  var o = setInterval(i, 3500);
                  n.current = o;
                }
                return function () {
                  return clearInterval(n.current);
                };
              },
              [e, t]
            ),
            t
              ? {
                  controls: e,
                  onHoverStart: function () {
                    n.current && (clearInterval(n.current), (n.current = null)),
                      e.start("animate");
                  },
                  onHoverEnd: function () {
                    var t = (function () {
                      var t = (0, x.Z)(function () {
                        return (0, S.__generator)(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [4, e.start("exit")];
                            case 1:
                              return t.sent(), e.set("initial"), [2];
                          }
                        });
                      });
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })();
                    t();
                  },
                }
              : {
                  controls: "animate",
                  onHoverStart: function () {},
                  onHoverEnd: function () {},
                }
          );
        };
      function qo() {
        var t = (0, f.Z)([
          "\n  pointer-events: auto;\n  text-align: center;\n",
        ]);
        return (
          (qo = function () {
            return t;
          }),
          t
        );
      }
      function Wo() {
        var t = (0, f.Z)([
          "\n  position: relative;\n  overflow: visible;\n\n  width: 4.8rem;\n  height: 4.8rem;\n  transform: translateZ(0);\n  transition: ",
          ";\n\n  ",
          " {\n    width: 5.25rem;\n    height: 5.25rem;\n  }\n\n  ",
          " {\n    width: 6.5rem;\n    height: 6.5rem;\n  }\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (Wo = function () {
            return t;
          }),
          t
        );
      }
      function Go() {
        var t = (0, f.Z)([
          "\n  ",
          ";\n  transition: ",
          ";\n\n  fill: ",
          ";\n  ",
          ";\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (Go = function () {
            return t;
          }),
          t
        );
      }
      function Yo() {
        var t = (0, f.Z)([
          "\n  fill: ",
          ";\n  transition: ",
          ";\n  transition-delay: ",
          ";\n\n  @media (prefers-reduced-motion) {\n    transition: none;\n  }\n",
        ]);
        return (
          (Yo = function () {
            return t;
          }),
          t
        );
      }
      function Ko() {
        var t = (0, f.Z)(["\n  will-change: transform;\n"]);
        return (
          (Ko = function () {
            return t;
          }),
          t
        );
      }
      var Xo = h.ZP.button.withConfig({ componentId: "sc-1a30ae13-0" })(qo()),
        Jo = (0, h.ZP)(Y.m.svg).withConfig({ componentId: "sc-1a30ae13-1" })(
          Wo(),
          v.P3,
          m.qk.s,
          m.qk.m
        ),
        Qo = h.ZP.textPath.withConfig({ componentId: "sc-1a30ae13-2" })(
          Go(),
          Bo.g.b6,
          v.P3,
          function (t) {
            return t.$fill;
          },
          function (t) {
            var e = t.$blendMode;
            return e && "mix-blend-mode: ".concat(e);
          }
        ),
        ta = h.ZP.path.withConfig({ componentId: "sc-1a30ae13-3" })(
          Yo(),
          function (t) {
            return t.$fill;
          },
          v.P3,
          function (t) {
            var e = t.$delay;
            return "".concat(e, "ms");
          }
        ),
        ea = (0, h.ZP)(Y.m.g).withConfig({ componentId: "sc-1a30ae13-4" })(
          Ko()
        ),
        na = function (t) {
          var e = t.text,
            n = t.backgroundColor,
            r = t.id,
            o = t.textColor,
            a = t.blendText,
            s = t.hasInitialState,
            c = t.className,
            u = t.delay,
            l = t.onClick,
            d = (0, Po.J)(),
            f = Ho(s),
            h = f.controls,
            p = f.onHoverStart,
            m = f.onHoverEnd;
          return (0, i.jsx)(zo.A, {
            transition: Fo,
            children: (0, i.jsx)(Xo, {
              className: c,
              onClick: l,
              children: (0, i.jsxs)(Jo, {
                viewBox: "0 0 90 90",
                initial: "initial",
                whileHover: "hover",
                whileTap: "tap",
                variants: !d && Uo,
                onHoverStart: p,
                onHoverEnd: m,
                children: [
                  (0, i.jsx)(ea, {
                    style: { originX: "50%", originY: "50%" },
                    variants: !d && $o,
                    initial: "initial",
                    animate: h,
                    children: (0, i.jsx)("text", {
                      children: (0, i.jsx)(Qo, {
                        xlinkHref: "#circle",
                        $fill: o,
                        $blendMode: a && "difference",
                        children: e,
                      }),
                    }),
                  }),
                  (0, i.jsx)(Vo, {}),
                  (0, i.jsx)(Zo, {}),
                  (0, i.jsx)(ta, {
                    id: r,
                    filter: "url(#filter)",
                    d: "M44.5 7.5a37 37 0 1 1-37 37 37 37 0 0 1 37-37Z",
                    $fill: n,
                    $delay: u,
                  }),
                ],
              }),
            }),
          });
        };
      (na.defaultProps = {
        text: "",
        backgroundColor: "var(--color-terracotta)",
        color: "var(--color-black)",
        blendText: !1,
        hasInitialState: !0,
        onClick: function () {},
      }),
        (na.propTypes = {
          delay: b().oneOfType([b().number, b().string]),
          color: b().string,
          blendText: b().bool,
          hasInitialState: b().bool,
          backgroundColor: b().string,
          text: b().string.isRequired,
          onClick: b().func.isRequired,
        });
      var ra = na,
        ia = { initial: { y: "200%" }, animate: { y: "0%" } },
        oa = { "/": 2.25, "/404": 0.5, "/contact": 0.5, "/cases": 1 },
        aa = function (t) {
          var e = t.isHidden,
            n = t.children,
            r = (0, s.useRouter)().pathname,
            o = (0, Po.J)(),
            a = oa[r] || 0,
            c = { ease: O.L[1], delay: o ? 0 : a, duration: o ? 0 : 1 };
          return (0, i.jsx)(Y.m.div, {
            variants: ia,
            initial: "initial",
            animate: e ? "initial" : "animate",
            transition: c,
            children: n,
          });
        };
      (aa.defaultProps = { hasDelay: !1, isHidden: !1, children: null }),
        (aa.propTypes = {
          hasDelay: b().bool,
          isHidden: b().bool,
          children: b().node.isRequired,
        });
      var sa = aa;
      function ca() {
        var t = (0, f.Z)(["\n  ", "\n"]);
        return (
          (ca = function () {
            return t;
          }),
          t
        );
      }
      var ua = h.ZP.div.withConfig({ componentId: "sc-4d28cb5e-0" })(
        ca(),
        function (t) {
          var e = t.$theme;
          return (0, p.LK)(e);
        }
      );
      (ua.defaultProps = { $theme: "light" }),
        (ua.propTypes = { $theme: b().oneOf(Object.keys(p.v)) });
      var la = ua;
      function da() {
        var t = (0, f.Z)([
          "\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: var(--z-menu);\n\n  width: 100%;\n  padding-bottom: 1.25rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  pointer-events: none;\n\n  ",
          " {\n    padding-bottom: 1.8rem;\n  }\n",
        ]);
        return (
          (da = function () {
            return t;
          }),
          t
        );
      }
      function fa() {
        var t = (0, f.Z)([
          "\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n",
        ]);
        return (
          (fa = function () {
            return t;
          }),
          t
        );
      }
      var ha = h.ZP.nav.withConfig({ componentId: "sc-5cc1a41b-0" })(
          da(),
          m.qk.m
        ),
        pa = h.ZP.div.withConfig({ componentId: "sc-5cc1a41b-1" })(fa()),
        ma = function () {
          var t = (function () {
              var t = (0, s.useRouter)().pathname,
                e = (0, Mo.Z)().navigation;
              return (void 0 === e ? [] : e).map(function (e) {
                return (0, w.Z)((0, r.Z)({}, e), { active: t === e.hef });
              });
            })(),
            e = Ro(),
            n = (0, d.Z)((0, g.Z)(), 2),
            o = n[0],
            a = n[1],
            c = (0, d.Z)((0, Ao.Z)(), 1)[0],
            l = (0, To.Z)().activeFilters.length > 0,
            f = function () {
              return a(!1);
            },
            h = (0, Po.J)();
          oo("routeChangeStart", function () {
            return o && f();
          });
          var p = (0, u.useRef)(),
            m = (0, s.useRouter)(),
            v = m.asPath.match("case/"),
            y = (0, u.useState)(!1),
            b = y[0],
            x = y[1],
            S = (0, k.Z)("m"),
            E = window.document.body.querySelector("main");
          (0, C.useScroll)(
            function (t) {
              var e = (0, d.Z)(t.xy, 2)[1],
                n = (0, d.Z)(t.direction, 2)[1],
                r = p.current.offsetHeight,
                i = E.scrollHeight - r;
              x(!(e >= i) && 1 === n);
            },
            { target: E, enabled: !h && !S && m.asPath.includes("case/") }
          );
          return (0, i.jsxs)(po.Y, {
            enabled: o,
            onEscapeKey: f,
            onClickOutside: function (t) {
              "touchstart" !== t.type && f();
            },
            children: [
              (0, i.jsx)(ha, {
                children: (0, i.jsxs)(la, {
                  $theme: l ? "dark" : "light",
                  children: [
                    (0, i.jsx)(jt, { items: t, isOpen: o }),
                    (0, i.jsx)(sa, {
                      isHidden: b,
                      children: (0, i.jsx)(
                        ra,
                        (0, r.Z)({}, e),
                        "menu-button-"
                          .concat(Boolean(c), "-")
                          .concat(Boolean(v))
                      ),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(pa, { ref: p }),
            ],
          });
        },
        va = a()(
          function () {
            return n.e(639).then(n.bind(n, 639));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [639];
              },
            },
            ssr: !1,
          }
        ),
        ga = a()(
          function () {
            return n.e(324).then(n.bind(n, 5324));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5324];
              },
            },
          }
        ),
        ya = a()(
          function () {
            return n.e(642).then(n.bind(n, 642));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [642];
              },
            },
          }
        ),
        ba = function (t) {
          var e = t.Component,
            n = t.pageProps,
            o = (0, s.useRouter)().isPreview;
          return (
            l(),
            (0, i.jsxs)(ho, {
              children: [
                o && (0, i.jsx)(ga, {}),
                c.yG && (0, i.jsx)(ya, {}),
                (0, i.jsx)(Dt, { children: (0, i.jsx)(e, (0, r.Z)({}, n)) }),
                (0, i.jsx)(ko, {}),
                (0, i.jsx)(ma, {}),
                c.yv && (0, i.jsx)(va, { id: "GTM-TKDCKTD" }),
              ],
            })
          );
        };
    },
    1482: function (t, e, n) {
      "use strict";
      n.d(e, {
        Dm: function () {
          return c;
        },
        mh: function () {
          return u;
        },
        sZ: function () {
          return l;
        },
      });
      var r = n(828),
        i = n(7297),
        o = n(5178);
      function a() {
        var t = (0, i.Z)([
          "\n  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.09),\n    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0845232),\n    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0781982),\n    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.0704624),\n    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0600461),\n    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0431086);\n",
        ]);
        return (
          (a = function () {
            return t;
          }),
          t
        );
      }
      function s() {
        var t = (0, i.Z)([
          "\n  box-shadow: 0px 50px 30px rgba(0, 0, 0, 0.09),\n    0px 21.7776px 16.4221px rgba(0, 0, 0, 0.0845232),\n    0px 11.3363px 8.869px rgba(0, 0, 0, 0.0781982),\n    0px 6.5216px 5.0172px rgba(0, 0, 0, 0.0704624),\n    0px 3.6501px 2.32008px rgba(0, 0, 0, 0.0600461),\n    0px 1.76726px 1.21381px rgba(0, 0, 0, 0.0431086);\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      var c = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = (0, r.Z)(t.split("/"), 2),
            n = e[0],
            i = e[1];
          return "\n    width: 100%;\n    padding-bottom: "
            .concat((i / n) * 100, "%;\n\n    @supports (aspect-ratio: ")
            .concat(
              t,
              ") {\n      padding-bottom: initial;\n      aspect-ratio: "
            )
            .concat(t, ";\n    }\n  ");
        },
        u = (0, o.iv)(a()),
        l = (0, o.iv)(s());
    },
    2216: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      var r = "case_intro_portal";
    },
    1734: function (t, e, n) {
      "use strict";
      n.d(e, {
        DM: function () {
          return r;
        },
        LK: function () {
          return a;
        },
        t0: function () {
          return o;
        },
        v: function () {
          return i;
        },
      });
      var r = {
          transparent: "rgba(0, 0, 0, 0)",
          black: "#000000",
          "black-200": "rgba(0, 0, 0, 0.2)",
          "black-750": "rgba(0, 0, 0, 0.75)",
          "black-800": "rgba(0, 0, 0, 0.8)",
          white: "#FFFFFF",
          "white-200": "rgba(255, 255, 255, 0.2)",
          "white-500": "rgba(255, 255, 255, 0.5)",
          "off-white": "#F2EFE6",
          terracotta: "#C38133",
          blue: "#3C4CC7",
        },
        i = {
          light:
            "\n    --primary: var(--color-white);\n    --secondary: var(--color-black);\n    --tertiary: var(--color-off-white);\n    --quaternary: var(--color-white-200)\n    ",
          dark: "\n    --primary: var(--color-black);\n    --secondary: var(--color-white);\n    --tertiary: var(--color-terracotta);\n    --quaternary: var(--color-black-200)\n  ",
        },
        o = i.light,
        a = function (t) {
          return i[t] || o;
        };
    },
    1915: function (t, e, n) {
      "use strict";
      n.d(e, {
        B3: function () {
          return s;
        },
        HX: function () {
          return i;
        },
        Pj: function () {
          return o;
        },
        Ux: function () {
          return d;
        },
        VE: function () {
          return l;
        },
        W7: function () {
          return p;
        },
        hQ: function () {
          return c;
        },
        pl: function () {
          return a;
        },
        tZ: function () {
          return f;
        },
        yB: function () {
          return u;
        },
      });
      var r = n(7294),
        i = (0, r.createContext)({}),
        o = (0, r.createContext)([]),
        a = (0, r.createContext)([]),
        s = (0, r.createContext)({}),
        c = (0, r.createContext)({}),
        u = (0, r.createContext)({ from: [], scrollY: null }),
        l = (0, r.createContext)({}),
        d = (0, r.createContext)([null, function () {}]),
        f = (0, r.createContext)({}),
        h = {
          scrollRangeIntro: [0, 0],
          scrollRangeVertical: [0, 0],
          scrollRangeHorizontal: [0, 0],
          scrollSpace: 0,
          introTextVisible: !0,
        },
        p = (0, r.createContext)(h);
    },
    5137: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
        t: function () {
          return i;
        },
      });
      var r = [
          [0.87, 0, 0.13, 1],
          [0.45, 0.02, 0.09, 0.98],
        ],
        i = {
          manvydas1: "cubic-bezier(0.87, 0, 0.13, 1)",
          manvydas2: "cubic-bezier(0.45, 0.02, 0.09, 0.98)",
          snap: "cubic-bezier(0, 1, 0.5, 1)",
          easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
          easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
          easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
          easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
          easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
          easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
          easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
          easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
          easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
          easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
          easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
          easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
          easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
          easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
          easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
          easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
          easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
          easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        };
    },
    9978: function (t, e, n) {
      "use strict";
      n.d(e, {
        yG: function () {
          return i;
        },
        yv: function () {
          return o;
        },
      });
      var r = n(4155),
        i = !1,
        o = !0;
      r.env.VERCEL_ENV, r.env.VERCEL_ENV;
    },
    3036: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return m;
        },
      });
      var r = n(4924),
        i = n(6042),
        o = n(9396),
        a = n(828),
        s = n(7297),
        c = n(5178),
        u = n(8785),
        l = n(8556);
      function d() {
        var t = (0, s.Z)([
          '\n        font-family: "',
          '", "Helvetica", "Arial", sans-serif;\n        font-size: ',
          "px;\n        font-style: ",
          ";\n        font-weight: ",
          ";\n        line-height: ",
          ";\n        text-transform: ",
          ";\n        letter-spacing: ",
          ";\n\n        font-feature-settings: ",
          ";\n\n        ",
          " {\n          font-size: ",
          ";\n        }\n\n        ",
          " {\n          font-size: ",
          "px;\n          line-height: ",
          ";\n          letter-spacing: ",
          ";\n        }\n\n        ",
          " {\n          font-size: ",
          ";\n        }\n      ",
        ]);
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }
      var f = ["ss04", "ss06", "ss07", "ss10", "ss14"],
        h = {
          h1: {
            sizes: { small: 120, medium: 145 },
            lineHeights: { small: 0.75, medium: 0.75 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          h2: {
            sizes: { small: 70, medium: 100 },
            lineHeights: { small: 0.85, medium: 0.85 },
            letterSpacings: { small: "-0.04em", medium: "-0.04em" },
            family: "NeueHaasGrotesk-Roman",
            textTransform: "uppercase",
          },
          h404: {
            sizes: { small: 120, medium: 250 },
            lineHeights: { small: 0.75, medium: 0.75 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
        },
        p = {
          b1: {
            sizes: { small: 40, medium: 70 },
            lineHeights: { small: 1.1, medium: 1.1 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b2: {
            sizes: { small: 24, medium: 50 },
            lineHeights: { small: 1.2, medium: 1.1 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b3: {
            sizes: { small: 20, medium: 36 },
            lineHeights: { small: 1.1, medium: 1.6 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b4: {
            sizes: { small: 18, medium: 28 },
            lineHeights: { small: 1.1, medium: 1.05 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b5: {
            sizes: { small: 15, medium: 20 },
            lineHeights: { small: 1.1, medium: 1.1 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b6: {
            sizes: { small: 16, medium: 16 },
            lineHeights: { small: 1.1, medium: 1.7 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b7: {
            sizes: { small: 10, medium: 14 },
            lineHeights: { small: 1.1, medium: 1.2 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b8: {
            sizes: { small: 20, medium: 26 },
            lineHeights: { small: 1.1, medium: 1.05 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b9: {
            sizes: { small: 40, medium: 36 },
            lineHeights: { small: 1.1, medium: 1.6 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b10: {
            sizes: { small: 17, medium: 19 },
            lineHeights: { small: 1.1, medium: 1.2 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b11: {
            sizes: { small: 20, medium: 28 },
            lineHeights: { small: 1.15, medium: 1.05 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b12: {
            sizes: { small: 24, medium: 36 },
            lineHeights: { small: 1.6, medium: 1.6 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b13: {
            sizes: { small: 40, medium: 50 },
            lineHeights: { small: 1.1, medium: 1.1 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
          b14: {
            sizes: { small: 14, medium: 14 },
            lineHeights: { small: 1.2, medium: 1.2 },
            letterSpacings: { small: "-0.01em", medium: "-0.01em" },
            family: "RecklessNeue-Book",
            fontFeatureSettings: f,
          },
        },
        m = Object.entries(
          (0, i.Z)({}, h, p, {
            l1: {
              sizes: { small: 10, medium: 12 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Medium",
              textTransform: "uppercase",
            },
            l2: {
              sizes: { small: 12, medium: 16 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Medium",
              textTransform: "uppercase",
            },
            l3: {
              sizes: { small: 11, medium: 14 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Roman",
            },
            l4: {
              sizes: { small: 11, medium: 14 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Medium",
            },
            l5: {
              sizes: { small: 8, medium: 16 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Roman",
            },
            l6: {
              sizes: { small: 8, medium: 16 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Medium",
            },
            l7: {
              sizes: { small: 10, medium: 10 },
              lineHeights: { small: 1.2, medium: 1.2 },
              family: "NeueHaasGrotesk-Roman",
            },
          })
        ).reduce(function (t, e) {
          var n = (0, a.Z)(e, 2),
            s = n[0],
            f = n[1],
            h = f.sizes,
            p = f.lineHeights,
            m = f.letterSpacings,
            v = f.weight,
            g = void 0 === v ? 400 : v,
            y = f.family,
            b = f.fontStyle,
            w = void 0 === b ? "normal" : b,
            x = f.fontFeatureSettings,
            S = void 0 === x ? [] : x,
            C = f.textTransform,
            E = void 0 === C ? "none" : C;
          return (0, o.Z)(
            (0, i.Z)({}, t),
            (0, r.Z)(
              {},
              s,
              (0, c.iv)(
                d(),
                y,
                null === h || void 0 === h ? void 0 : h.small,
                w,
                g,
                null === p || void 0 === p ? void 0 : p.small,
                E,
                null === m || void 0 === m ? void 0 : m.small,
                S.map(function (t) {
                  return '"'.concat(t, '" on');
                }).join(", "),
                l.qk.xs,
                (0, u.zj)(h.small, l.j$.xs, 0.2),
                l.qk.m,
                null === h || void 0 === h ? void 0 : h.medium,
                null === p || void 0 === p ? void 0 : p.medium,
                null === m || void 0 === m ? void 0 : m.medium,
                l.qk.xl,
                (0, u.zj)(h.medium, l.j$.xl, 0.3)
              )
            )
          );
        }, {});
    },
    8785: function (t, e, n) {
      "use strict";
      n.d(e, {
        BT: function () {
          return h;
        },
        EV: function () {
          return f;
        },
        _: function () {
          return d;
        },
        hl: function () {
          return p;
        },
        zj: function () {
          return l;
        },
      });
      var r = n(7297),
        i = n(5178),
        o = n(8899);
      function a() {
        var t = (0, r.Z)([
          "calc(\n  ",
          "px + ",
          " * ",
          " *\n    ((100vw - ",
          "px) / ",
          ")\n)",
        ]);
        return (
          (a = function () {
            return t;
          }),
          t
        );
      }
      function s() {
        var t = (0, r.Z)(["\n    ", "vw\n  "]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      function c() {
        var t = (0, r.Z)(["\n    ", "vw\n  "]);
        return (
          (c = function () {
            return t;
          }),
          t
        );
      }
      function u() {
        var t = (0, r.Z)(["\n    ", "vw\n  "]);
        return (
          (u = function () {
            return t;
          }),
          t
        );
      }
      var l = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.2;
          return (0, i.iv)(a(), t, t, n, e, e);
        },
        d = { columns: [19, 33, 50] },
        f = function (t) {
          return (0, i.iv)(s(), (0, o.NM)((t / d.columns[0]) * 100, 1e3));
        },
        h = function (t) {
          return (0, i.iv)(c(), (0, o.NM)((t / d.columns[1]) * 100, 1e3));
        },
        p = function (t) {
          return (0, i.iv)(u(), (0, o.NM)((t / d.columns[2]) * 100, 1e3));
        };
    },
    8556: function (t, e, n) {
      "use strict";
      n.d(e, {
        Mr: function () {
          return l;
        },
        j$: function () {
          return s;
        },
        qk: function () {
          return u;
        },
      });
      var r = n(4924),
        i = n(6042),
        o = n(9396),
        a = n(828),
        s = {
          xs: 448,
          s: 768,
          m: 1024,
          l: 1280,
          xl: 1440,
          xxl: 1920,
          xxxl: 2500,
        },
        c = Object.entries(s).reduce(function (t, e) {
          var n = (0, a.Z)(e, 2),
            s = n[0],
            c = n[1];
          return (0,
          o.Z)((0, i.Z)({}, t), (0, r.Z)({}, s, "@media (min-width: ".concat(c, "px)")));
        }, {}),
        u = (0, o.Z)((0, i.Z)({}, c), {
          finePointer: "@media (pointer: fine)",
          coarsePointer: "@media (pointer: coarse)",
          landscape: "@media (orientation: landscape)",
          portrait: "@media (orientation: portrait)",
          hover: "@media (hover: hover) and (pointer: fine)",
          autoFill:
            "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus",
        }),
        l = function (t) {
          return "\n"
            .concat(u.hover, " {\n  &:not([disabled]):hover {\n    ")
            .concat(t, "\n  }\n}\n");
        };
    },
    8321: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ov: function () {
          return d;
        },
        P3: function () {
          return l;
        },
        s: function () {
          return c;
        },
      });
      var r = n(7297),
        i = n(5178),
        o = n(5137);
      function a() {
        var t = (0, r.Z)(["\n  transform 0.65s ", ";\n"]);
        return (
          (a = function () {
            return t;
          }),
          t
        );
      }
      function s() {
        var t = (0, r.Z)([
          "\n  background-color ",
          "s,\n  color ",
          "s,\n  border-color ",
          "s,\n  outline-color ",
          "s,\n  fill ",
          "s\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      var c = (0, i.iv)(a(), o.t.manvydas2),
        u = 0.5,
        l = (0, i.iv)(s(), u, u, u, u, u),
        d =
          "color 0.5s ease-in-out, fill 0.5s ease-in-out, opacity 0.5s ease-in-out";
    },
    6380: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return a;
        },
        g: function () {
          return o;
        },
      });
      var r = n(7568),
        i = n(414),
        o = function (t) {
          return new Promise(function (e) {
            return setTimeout(e, t);
          });
        },
        a = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return new Promise(function (e) {
            return requestAnimationFrame(
              (0, r.Z)(function () {
                return (0, i.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return t > 1 ? [4, a(t - 1)] : [3, 2];
                    case 1:
                      n.sent(), (n.label = 2);
                    case 2:
                      return e(), [2];
                  }
                });
              })
            );
          });
        };
    },
    8899: function (t, e, n) {
      "use strict";
      n.d(e, {
        Hg: function () {
          return r;
        },
        Jw: function () {
          return s;
        },
        NM: function () {
          return a;
        },
        UI: function () {
          return o;
        },
        uZ: function () {
          return i;
        },
      });
      var r = function (t, e) {
          return t > e ? t - e : e - t;
        },
        i = function (t, e, n) {
          return t < e ? e : t > n ? n : t;
        },
        o = function (t, e, n) {
          return e[0] + ((n - t[0]) * (e[1] - e[0])) / (t[1] - t[0]);
        },
        a = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 100;
          return ~~(t * e) / e;
        },
        s = function (t) {
          var e = t.target,
            n = t.value,
            i = t.creep,
            o = void 0 === i ? 0.1 : i,
            s = t.cutOff,
            c = void 0 === s ? 0.1 : s,
            u = t.precision,
            l = void 0 === u ? 100 : u,
            d = n + (e - n) * o;
          return r(e, d) < c ? e : a(d, l);
        };
    },
    981: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1915);
      e.Z = function () {
        return (0, r.useContext)(i.pl);
      };
    },
    688: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1915);
      e.Z = function () {
        return (0, r.useContext)(i.Ux);
      };
    },
    3736: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1915);
      e.Z = function () {
        return (0, r.useContext)(i.Pj);
      };
    },
    8112: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return nt;
        },
      });
      var r = n(7568),
        i = n(414),
        o = n(7294);
      function a(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              c(r.next(t));
            } catch (e) {
              o(e);
            }
          }
          function s(t) {
            try {
              c(r.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          c((r = r.apply(t, e || [])).next());
        });
      }
      function s(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (s) {
                  (o = [6, s]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      var c,
        u = function () {},
        l = u(),
        d = Object,
        f = function (t) {
          return t === l;
        },
        h = function (t) {
          return "function" == typeof t;
        },
        p = function (t, e) {
          return d.assign({}, t, e);
        },
        m = "undefined",
        v = function () {
          return typeof window != m;
        },
        g = new WeakMap(),
        y = 0,
        b = function (t) {
          var e,
            n,
            r = typeof t,
            i = t && t.constructor,
            o = i == Date;
          if (d(t) !== t || o || i == RegExp)
            e = o
              ? t.toJSON()
              : "symbol" == r
              ? t.toString()
              : "string" == r
              ? JSON.stringify(t)
              : "" + t;
          else {
            if ((e = g.get(t))) return e;
            if (((e = ++y + "~"), g.set(t, e), i == Array)) {
              for (e = "@", n = 0; n < t.length; n++) e += b(t[n]) + ",";
              g.set(t, e);
            }
            if (i == d) {
              e = "#";
              for (var a = d.keys(t).sort(); !f((n = a.pop())); )
                f(t[n]) || (e += n + ":" + b(t[n]) + ",");
              g.set(t, e);
            }
          }
          return e;
        },
        w = !0,
        x = v(),
        S = typeof document != m,
        C =
          x && window.addEventListener
            ? window.addEventListener.bind(window)
            : u,
        E = S ? document.addEventListener.bind(document) : u,
        k =
          x && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : u,
        P = S ? document.removeEventListener.bind(document) : u,
        O = {
          isOnline: function () {
            return w;
          },
          isVisible: function () {
            var t = S && document.visibilityState;
            return f(t) || "hidden" !== t;
          },
        },
        A = {
          initFocus: function (t) {
            return (
              E("visibilitychange", t),
              C("focus", t),
              function () {
                P("visibilitychange", t), k("focus", t);
              }
            );
          },
          initReconnect: function (t) {
            var e = function () {
                (w = !0), t();
              },
              n = function () {
                w = !1;
              };
            return (
              C("online", e),
              C("offline", n),
              function () {
                k("online", e), k("offline", n);
              }
            );
          },
        },
        T = !v() || "Deno" in window,
        _ = function (t) {
          return v() && typeof window.requestAnimationFrame != m
            ? window.requestAnimationFrame(t)
            : setTimeout(t, 1);
        },
        j = T ? o.useEffect : o.useLayoutEffect,
        R = "undefined" !== typeof navigator && navigator.connection,
        M =
          !T &&
          R &&
          (["slow-2g", "2g"].includes(R.effectiveType) || R.saveData),
        I = function (t) {
          if (h(t))
            try {
              t = t();
            } catch (n) {
              t = "";
            }
          var e = [].concat(t);
          return [
            (t =
              "string" == typeof t
                ? t
                : (Array.isArray(t) ? t.length : t)
                ? b(t)
                : ""),
            e,
            t ? "$swr$" + t : "",
          ];
        },
        L = new WeakMap(),
        V = function (t, e, n, r, i, o, a) {
          void 0 === a && (a = !0);
          var s = L.get(t),
            c = s[0],
            u = s[1],
            l = s[3],
            d = c[e],
            f = u[e];
          if (a && f) for (var h = 0; h < f.length; ++h) f[h](n, r, i);
          return o && (delete l[e], d && d[0])
            ? d[0](2).then(function () {
                return t.get(e);
              })
            : t.get(e);
        },
        D = 0,
        Z = function () {
          return ++D;
        },
        z = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return a(void 0, void 0, void 0, function () {
            var e, n, r, i, o, a, c, u, d, m, v, g, y, b, w, x, S, C, E, k, P;
            return s(this, function (s) {
              switch (s.label) {
                case 0:
                  if (
                    ((e = t[0]),
                    (n = t[1]),
                    (r = t[2]),
                    (i = t[3]),
                    (a =
                      !!f(
                        (o =
                          "boolean" === typeof i ? { revalidate: i } : i || {})
                          .populateCache
                      ) || o.populateCache),
                    (c = !1 !== o.revalidate),
                    (u = !1 !== o.rollbackOnError),
                    (d = o.optimisticData),
                    (m = I(n)),
                    (v = m[0]),
                    (g = m[2]),
                    !v)
                  )
                    return [2];
                  if (((y = L.get(e)), (b = y[2]), t.length < 3))
                    return [2, V(e, v, e.get(v), l, l, c, !0)];
                  if (
                    ((w = r),
                    (S = Z()),
                    (b[v] = [S, 0]),
                    (C = !f(d)),
                    (E = e.get(v)),
                    C && ((k = h(d) ? d(E) : d), e.set(v, k), V(e, v, k)),
                    h(w))
                  )
                    try {
                      w = w(e.get(v));
                    } catch (O) {
                      x = O;
                    }
                  return w && h(w.then)
                    ? [
                        4,
                        w.catch(function (t) {
                          x = t;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((w = s.sent()), S !== b[v][0])) {
                    if (x) throw x;
                    return [2, w];
                  }
                  x && C && u && ((a = !0), (w = E), e.set(v, E)),
                    (s.label = 2);
                case 2:
                  return (
                    a &&
                      (x || (h(a) && (w = a(w, E)), e.set(v, w)),
                      e.set(g, p(e.get(g), { error: x }))),
                    (b[v][1] = Z()),
                    [4, V(e, v, w, x, l, c, !!a)]
                  );
                case 3:
                  if (((P = s.sent()), x)) throw x;
                  return [2, a ? P : w];
              }
            });
          });
        },
        B = function (t, e) {
          for (var n in t) t[n][0] && t[n][0](e);
        },
        N = function (t, e) {
          if (!L.has(t)) {
            var n = p(A, e),
              r = {},
              i = z.bind(l, t),
              o = u;
            if ((L.set(t, [r, {}, {}, {}, i]), !T)) {
              var a = n.initFocus(setTimeout.bind(l, B.bind(l, r, 0))),
                s = n.initReconnect(setTimeout.bind(l, B.bind(l, r, 1)));
              o = function () {
                a && a(), s && s(), L.delete(t);
              };
            }
            return [t, i, o];
          }
          return [t, L.get(t)[4]];
        },
        F = N(new Map()),
        $ = F[0],
        U = F[1],
        H = p(
          {
            onLoadingSlow: u,
            onSuccess: u,
            onError: u,
            onErrorRetry: function (t, e, n, r, i) {
              var o = n.errorRetryCount,
                a = i.retryCount,
                s =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  n.errorRetryInterval;
              (!f(o) && a > o) || setTimeout(r, s, i);
            },
            onDiscarded: u,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: M ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: M ? 5e3 : 3e3,
            compare: function (t, e) {
              return b(t) == b(e);
            },
            isPaused: function () {
              return !1;
            },
            cache: $,
            mutate: U,
            fallback: {},
          },
          O
        ),
        q = function (t, e) {
          var n = p(t, e);
          if (e) {
            var r = t.use,
              i = t.fallback,
              o = e.use,
              a = e.fallback;
            r && o && (n.use = r.concat(o)), i && a && (n.fallback = p(i, a));
          }
          return n;
        },
        W = (0, o.createContext)({}),
        G = function (t) {
          return h(t[1])
            ? [t[0], t[1], t[2] || {}]
            : [t[0], null, (null === t[1] ? t[2] : t[1]) || {}];
        },
        Y = function () {
          return p(H, (0, o.useContext)(W));
        },
        K = function (t, e, n) {
          var r = e[t] || (e[t] = []);
          return (
            r.push(n),
            function () {
              var t = r.indexOf(n);
              t >= 0 && ((r[t] = r[r.length - 1]), r.pop());
            }
          );
        },
        X = { dedupe: !0 },
        J =
          (d.defineProperty(
            function (t) {
              var e = t.value,
                n = q((0, o.useContext)(W), e),
                r = e && e.provider,
                i = (0, o.useState)(function () {
                  return r ? N(r(n.cache || $), e) : l;
                })[0];
              return (
                i && ((n.cache = i[0]), (n.mutate = i[1])),
                j(function () {
                  return i ? i[2] : l;
                }, []),
                (0, o.createElement)(W.Provider, p(t, { value: n }))
              );
            },
            "default",
            { value: H }
          ),
          (c = function (t, e, n) {
            var r = n.cache,
              i = n.compare,
              c = n.fallbackData,
              u = n.suspense,
              d = n.revalidateOnMount,
              m = n.refreshInterval,
              v = n.refreshWhenHidden,
              g = n.refreshWhenOffline,
              y = L.get(r),
              b = y[0],
              w = y[1],
              x = y[2],
              S = y[3],
              C = I(t),
              E = C[0],
              k = C[1],
              P = C[2],
              O = (0, o.useRef)(!1),
              A = (0, o.useRef)(!1),
              R = (0, o.useRef)(E),
              M = (0, o.useRef)(e),
              D = (0, o.useRef)(n),
              B = function () {
                return D.current;
              },
              N = function () {
                return B().isVisible() && B().isOnline();
              },
              F = function (t) {
                return r.set(P, p(r.get(P), t));
              },
              $ = r.get(E),
              U = f(c) ? n.fallback[E] : c,
              H = f($) ? U : $,
              q = r.get(P) || {},
              W = q.error,
              G = !O.current,
              Y = function () {
                return G && !f(d)
                  ? d
                  : !B().isPaused() &&
                      (u
                        ? !f(H) && n.revalidateIfStale
                        : f(H) || n.revalidateIfStale);
              },
              J = !(!E || !e) && (!!q.isValidating || (G && Y())),
              Q = (function (t, e) {
                var n = (0, o.useState)({})[1],
                  r = (0, o.useRef)(t),
                  i = (0, o.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  a = (0, o.useCallback)(function (t) {
                    var o = !1,
                      a = r.current;
                    for (var s in t) {
                      var c = s;
                      a[c] !== t[c] &&
                        ((a[c] = t[c]), i.current[c] && (o = !0));
                    }
                    o && !e.current && n({});
                  }, []);
                return (
                  j(function () {
                    r.current = t;
                  }),
                  [r, i.current, a]
                );
              })({ data: H, error: W, isValidating: J }, A),
              tt = Q[0],
              et = Q[1],
              nt = Q[2],
              rt = (0, o.useCallback)(
                function (t) {
                  return a(void 0, void 0, void 0, function () {
                    var e, o, a, c, u, d, p, m, v, g, y, b, w;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          if (
                            ((e = M.current),
                            !E || !e || A.current || B().isPaused())
                          )
                            return [2, !1];
                          (c = !0),
                            (u = t || {}),
                            (d = !S[E] || !u.dedupe),
                            (p = function () {
                              return !A.current && E === R.current && O.current;
                            }),
                            (m = function () {
                              var t = S[E];
                              t && t[1] === a && delete S[E];
                            }),
                            (v = { isValidating: !1 }),
                            (g = function () {
                              F({ isValidating: !1 }), p() && nt(v);
                            }),
                            F({ isValidating: !0 }),
                            nt({ isValidating: !0 }),
                            (s.label = 1);
                        case 1:
                          return (
                            s.trys.push([1, 3, , 4]),
                            d &&
                              (V(r, E, tt.current.data, tt.current.error, !0),
                              n.loadingTimeout &&
                                !r.get(E) &&
                                setTimeout(function () {
                                  c && p() && B().onLoadingSlow(E, n);
                                }, n.loadingTimeout),
                              (S[E] = [e.apply(void 0, k), Z()])),
                            (w = S[E]),
                            (o = w[0]),
                            (a = w[1]),
                            [4, o]
                          );
                        case 2:
                          return (
                            (o = s.sent()),
                            d && setTimeout(m, n.dedupingInterval),
                            S[E] && S[E][1] === a
                              ? (F({ error: l }),
                                (v.error = l),
                                (y = x[E]),
                                !f(y) && (a <= y[0] || a <= y[1] || 0 === y[1])
                                  ? (g(),
                                    d && p() && B().onDiscarded(E),
                                    [2, !1])
                                  : (i(tt.current.data, o)
                                      ? (v.data = tt.current.data)
                                      : (v.data = o),
                                    i(r.get(E), o) || r.set(E, o),
                                    d && p() && B().onSuccess(o, E, n),
                                    [3, 4]))
                              : (d && p() && B().onDiscarded(E), [2, !1])
                          );
                        case 3:
                          return (
                            (b = s.sent()),
                            m(),
                            B().isPaused() ||
                              (F({ error: b }),
                              (v.error = b),
                              d &&
                                p() &&
                                (B().onError(b, E, n),
                                (("boolean" === typeof n.shouldRetryOnError &&
                                  n.shouldRetryOnError) ||
                                  (h(n.shouldRetryOnError) &&
                                    n.shouldRetryOnError(b))) &&
                                  N() &&
                                  B().onErrorRetry(b, E, n, rt, {
                                    retryCount: (u.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          );
                        case 4:
                          return (
                            (c = !1),
                            g(),
                            p() && d && V(r, E, v.data, v.error, !1),
                            [2, !0]
                          );
                      }
                    });
                  });
                },
                [E]
              ),
              it = (0, o.useCallback)(
                z.bind(l, r, function () {
                  return R.current;
                }),
                []
              );
            if (
              (j(function () {
                (M.current = e), (D.current = n);
              }),
              j(
                function () {
                  if (E) {
                    var t = E !== R.current,
                      e = rt.bind(l, X),
                      n = 0,
                      r = K(E, w, function (t, e, n) {
                        nt(
                          p(
                            { error: e, isValidating: n },
                            i(tt.current.data, t) ? l : { data: t }
                          )
                        );
                      }),
                      o = K(E, b, function (t) {
                        if (0 == t) {
                          var r = Date.now();
                          B().revalidateOnFocus &&
                            r > n &&
                            N() &&
                            ((n = r + B().focusThrottleInterval), e());
                        } else if (1 == t)
                          B().revalidateOnReconnect && N() && e();
                        else if (2 == t) return rt();
                      });
                    return (
                      (A.current = !1),
                      (R.current = E),
                      (O.current = !0),
                      t && nt({ data: H, error: W, isValidating: J }),
                      Y() && (f(H) || T ? e() : _(e)),
                      function () {
                        (A.current = !0), r(), o();
                      }
                    );
                  }
                },
                [E, rt]
              ),
              j(
                function () {
                  var t;
                  function e() {
                    var e = h(m) ? m(H) : m;
                    e && -1 !== t && (t = setTimeout(n, e));
                  }
                  function n() {
                    tt.current.error ||
                    (!v && !B().isVisible()) ||
                    (!g && !B().isOnline())
                      ? e()
                      : rt(X).then(e);
                  }
                  return (
                    e(),
                    function () {
                      t && (clearTimeout(t), (t = -1));
                    }
                  );
                },
                [m, v, g, rt]
              ),
              (0, o.useDebugValue)(H),
              u && f(H) && E)
            )
              throw (
                ((M.current = e),
                (D.current = n),
                (A.current = !1),
                f(W) ? rt(X) : W)
              );
            return {
              mutate: it,
              get data() {
                return (et.data = !0), H;
              },
              get error() {
                return (et.error = !0), W;
              },
              get isValidating() {
                return (et.isValidating = !0), J;
              },
            };
          }),
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = Y(),
              r = G(t),
              i = r[0],
              o = r[1],
              a = r[2],
              s = q(n, a),
              u = c,
              l = s.use;
            if (l) for (var d = l.length; d-- > 0; ) u = l[d](u);
            return u(i, o || s.fetcher, s);
          }),
        Q = { revalidateOnFocus: !1, realidateOnReconnect: !1 },
        tt = { global: {} },
        et = (function () {
          var t = (0, r.Z)(function (t) {
            return (0, i.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, fetch("/api/data/".concat(t))];
                case 1:
                  return [4, e.sent().json()];
                case 2:
                  return [2, e.sent()];
              }
            });
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
        nt = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "global",
            e = J(t, et, Q).data;
          return e || tt[t];
        };
    },
    1083: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1915),
        o = n(8556),
        a = ["landscape", "portrait"],
        s = ["coarse", "fine"],
        c = [
          {
            getMatch: function (t) {
              return o.j$[t];
            },
            getQuery: function (t) {
              return "(min-width: ".concat(t, "px)");
            },
          },
          {
            getMatch: function (t) {
              return a.find(function (e) {
                return e === t;
              });
            },
            getQuery: function (t) {
              return "(orientation: ".concat(t, ")");
            },
          },
          {
            getMatch: function (t) {
              return s.find(function (e) {
                return e === t;
              });
            },
            getQuery: function (t) {
              return "(pointer: ".concat(t, ")");
            },
          },
        ],
        u = function (t) {
          var e = !0,
            n = !1,
            r = void 0;
          try {
            for (
              var i, o = c[Symbol.iterator]();
              !(e = (i = o.next()).done);
              e = !0
            ) {
              var a = i.value,
                s = a.getMatch,
                u = a.getQuery,
                l = s(t);
              if (l) return u(l);
            }
          } catch (d) {
            (n = !0), (r = d);
          } finally {
            try {
              e || null == o.return || o.return();
            } finally {
              if (n) throw r;
            }
          }
          return t;
        };
      e.Z = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "m",
          e = (0, r.useContext)(i.HX),
          n = e.getMatchQuery,
          o = e.addListener,
          a = e.removeListener,
          s = u(t),
          c = (0, r.useState)(
            (null === n || void 0 === n ? void 0 : n(s)) || void 0
          ),
          l = c[0],
          d = c[1];
        return (
          (0, r.useEffect)(
            function () {
              var t = function (t) {
                  return d(t.matches);
                },
                e = null === o || void 0 === o ? void 0 : o(s, t);
              return (
                d(e),
                function () {
                  return null === a || void 0 === a ? void 0 : a(s, t);
                }
              );
            },
            [s, o, a]
          ),
          l
        );
      };
    },
    2808: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1915);
      e.Z = function () {
        return (0, r.useContext)(i.tZ);
      };
    },
    4711: function (t, e, n) {
      "use strict";
      var r = n(7294),
        i = n(1163),
        o = "/cases",
        a = { shallow: !0, scroll: !1 };
      e.Z = function () {
        var t = (0, i.useRouter)(),
          e = t.query,
          n = t.replace;
        return (0, r.useMemo)(
          function () {
            var t = ((null === e || void 0 === e ? void 0 : e.filters) || "")
                .split("+")
                .filter(Boolean),
              r = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  e = o;
                if (t.length > 0) {
                  var r = new URLSearchParams({ filters: t.join("+") });
                  e += "?".concat(r.toString());
                }
                return n(e, null, a);
              };
            return {
              activeFilters: t || [],
              toggleFilter: function (e) {
                var n = t.indexOf(e),
                  i = [];
                n < 0 ? i.push(e) : i.splice(n, 1), r(i);
              },
              clearFilters: function () {
                return r();
              },
            };
          },
          [null === e || void 0 === e ? void 0 : e.filters, n]
        );
      };
    },
    4902: function () {},
    906: function () {},
    5152: function (t, e, n) {
      t.exports = n(638);
    },
    5675: function (t, e, n) {
      t.exports = n(8045);
    },
    1664: function (t, e, n) {
      t.exports = n(8418);
    },
    1163: function (t, e, n) {
      t.exports = n(387);
    },
    4155: function (t) {
      var e,
        n,
        r = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" === typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          n = o;
        }
      })();
      var s,
        c = [],
        u = !1,
        l = -1;
      function d() {
        u &&
          s &&
          ((u = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && f());
      }
      function f() {
        if (!u) {
          var t = a(d);
          u = !0;
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++l < e; ) s && s[l].run();
            (l = -1), (e = c.length);
          }
          (s = null),
            (u = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function h(t, e) {
        (this.fun = t), (this.array = e);
      }
      function p() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || u || a(f);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = p),
        (r.addListener = p),
        (r.once = p),
        (r.off = p),
        (r.removeListener = p),
        (r.removeAllListeners = p),
        (r.emit = p),
        (r.prependListener = p),
        (r.prependOnceListener = p),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    2703: function (t, e, n) {
      "use strict";
      var r = n(5268);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (t.exports = function () {
          function t(t, e, n, i, o, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (t, e, n) {
      t.exports = n(2703)();
    },
    5268: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7514: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return Ce;
        },
      });
      var r = function () {
        return (
          (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          r.apply(this, arguments)
        );
      };
      function i(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var o = n(7294);
      var a = function () {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          a.apply(this, arguments)
        );
      };
      Object.create;
      Object.create;
      var s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function u(t, e) {
        return (function (t, e) {
          var n = (0, o.useState)(function () {
            return {
              value: t,
              callback: e,
              facade: {
                get current() {
                  return n.value;
                },
                set current(t) {
                  var e = n.value;
                  e !== t && ((n.value = t), n.callback(t, e));
                },
              },
            };
          })[0];
          return (n.callback = e), n.facade;
        })(e || null, function (e) {
          return t.forEach(function (t) {
            return (function (t, e) {
              return "function" === typeof t ? t(e) : t && (t.current = e), t;
            })(t, e);
          });
        });
      }
      var l = function () {
        return (
          (l =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          l.apply(this, arguments)
        );
      };
      Object.create;
      Object.create;
      function d(t) {
        return t;
      }
      function f(t, e) {
        void 0 === e && (e = d);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw new Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return n.length ? n[n.length - 1] : t;
          },
          useMedium: function (t) {
            var i = e(t, r);
            return (
              n.push(i),
              function () {
                n = n.filter(function (t) {
                  return t !== i;
                });
              }
            );
          },
          assignSyncMedium: function (t) {
            for (r = !0; n.length; ) {
              var e = n;
              (n = []), e.forEach(t);
            }
            n = {
              push: function (e) {
                return t(e);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (t) {
            r = !0;
            var e = [];
            if (n.length) {
              var i = n;
              (n = []), i.forEach(t), (e = n);
            }
            var o = function () {
                var n = e;
                (e = []), n.forEach(t);
              },
              a = function () {
                return Promise.resolve().then(o);
              };
            a(),
              (n = {
                push: function (t) {
                  e.push(t), a();
                },
                filter: function (t) {
                  return (e = e.filter(t)), n;
                },
              });
          },
        };
      }
      function h(t, e) {
        return void 0 === e && (e = d), f(t, e);
      }
      function p(t) {
        void 0 === t && (t = {});
        var e = f(null);
        return (e.options = l({ async: !0, ssr: !1 }, t)), e;
      }
      var m = p(),
        v = function () {},
        g = o.forwardRef(function (t, e) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: v,
            }),
            i = r[0],
            s = r[1],
            c = t.forwardProps,
            l = t.children,
            d = t.className,
            f = t.removeScrollBar,
            h = t.enabled,
            p = t.shards,
            g = t.sideCar,
            y = t.noIsolation,
            b = t.inert,
            w = t.allowPinchZoom,
            x = t.as,
            S = void 0 === x ? "div" : x,
            C = (function (t, e) {
              var n = {};
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  e.indexOf(r) < 0 &&
                  (n[r] = t[r]);
              if (
                null != t &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                  e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]]);
              }
              return n;
            })(t, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            E = g,
            k = u([n, e]),
            P = a(a({}, C), i);
          return o.createElement(
            o.Fragment,
            null,
            h &&
              o.createElement(E, {
                sideCar: m,
                removeScrollBar: f,
                shards: p,
                noIsolation: y,
                inert: b,
                setCallbacks: s,
                allowPinchZoom: !!w,
                lockRef: n,
              }),
            c
              ? o.cloneElement(o.Children.only(l), a(a({}, P), { ref: k }))
              : o.createElement(S, a({}, P, { className: d, ref: k }), l)
          );
        });
      function y() {
        return (
          (y =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          y.apply(this, arguments)
        );
      }
      (g.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (g.classNames = { fullWidth: c, zeroRight: s });
      var b = "data-focus-lock",
        w = "data-focus-lock-disabled",
        x = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        S = function (t) {
          var e = t.children;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement("div", {
              key: "guard-first",
              "data-focus-guard": !0,
              "data-focus-auto-guard": !0,
              style: x,
            }),
            e,
            e &&
              o.createElement("div", {
                key: "guard-last",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: x,
              })
          );
        };
      (S.propTypes = {}), (S.defaultProps = { children: null });
      var C = h({}, function (t) {
          return { target: t.target, currentTarget: t.currentTarget };
        }),
        E = h(),
        k = h(),
        P = p({ async: !0 }),
        O = [],
        A = o.forwardRef(function (t, e) {
          var n,
            r = o.useState(),
            i = r[0],
            a = r[1],
            s = o.useRef(),
            c = o.useRef(!1),
            l = o.useRef(null),
            d = t.children,
            f = t.disabled,
            h = t.noFocusGuards,
            p = t.persistentFocus,
            m = t.crossFrame,
            v = t.autoFocus,
            g = (t.allowTextSelection, t.group),
            S = t.className,
            k = t.whiteList,
            A = t.hasPositiveIndices,
            T = t.shards,
            _ = void 0 === T ? O : T,
            j = t.as,
            R = void 0 === j ? "div" : j,
            M = t.lockProps,
            I = void 0 === M ? {} : M,
            L = t.sideCar,
            V = t.returnFocus,
            D = t.focusOptions,
            Z = t.onActivation,
            z = t.onDeactivation,
            B = o.useState({})[0],
            N = o.useCallback(
              function () {
                (l.current = l.current || (document && document.activeElement)),
                  s.current && Z && Z(s.current),
                  (c.current = !0);
              },
              [Z]
            ),
            F = o.useCallback(
              function () {
                (c.current = !1), z && z(s.current);
              },
              [z]
            );
          (0, o.useEffect)(function () {
            f || (l.current = null);
          }, []);
          var $ = o.useCallback(
              function (t) {
                var e = l.current;
                if (e && e.focus) {
                  var n = "function" === typeof V ? V(e) : V;
                  if (n) {
                    var r = "object" === typeof n ? n : void 0;
                    (l.current = null),
                      t
                        ? Promise.resolve().then(function () {
                            return e.focus(r);
                          })
                        : e.focus(r);
                  }
                }
              },
              [V]
            ),
            U = o.useCallback(function (t) {
              c.current && C.useMedium(t);
            }, []),
            H = E.useMedium,
            q = o.useCallback(function (t) {
              s.current !== t && ((s.current = t), a(t));
            }, []);
          var W = y((((n = {})[w] = f && "disabled"), (n[b] = g), n), I),
            G = !0 !== h,
            Y = G && "tail" !== h,
            K = u([e, q]);
          return o.createElement(
            o.Fragment,
            null,
            G && [
              o.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: f ? -1 : 0,
                style: x,
              }),
              A
                ? o.createElement("div", {
                    key: "guard-nearest",
                    "data-focus-guard": !0,
                    tabIndex: f ? -1 : 1,
                    style: x,
                  })
                : null,
            ],
            !f &&
              o.createElement(L, {
                id: B,
                sideCar: P,
                observed: i,
                disabled: f,
                persistentFocus: p,
                crossFrame: m,
                autoFocus: v,
                whiteList: k,
                shards: _,
                onActivation: N,
                onDeactivation: F,
                returnFocus: $,
                focusOptions: D,
              }),
            o.createElement(
              R,
              y({ ref: K }, W, { className: S, onBlur: H, onFocus: U }),
              d
            ),
            Y &&
              o.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: f ? -1 : 0,
                style: x,
              })
          );
        });
      (A.propTypes = {}),
        (A.defaultProps = {
          children: void 0,
          disabled: !1,
          returnFocus: !1,
          focusOptions: void 0,
          noFocusGuards: !1,
          autoFocus: !0,
          persistentFocus: !1,
          crossFrame: !0,
          hasPositiveIndices: void 0,
          allowTextSelection: void 0,
          group: void 0,
          className: void 0,
          whiteList: void 0,
          shards: void 0,
          as: "div",
          lockProps: {},
          onActivation: void 0,
          onDeactivation: void 0,
        });
      var T = A,
        _ = p(),
        j = "data-focus-on-hidden",
        R = o.forwardRef(function (t, e) {
          var n = o.useState(!1),
            a = n[0],
            s = n[1],
            c = t.children,
            u = t.autoFocus,
            l = t.shards,
            d = t.enabled,
            f = void 0 === d || d,
            h = t.scrollLock,
            p = void 0 === h || h,
            m = t.focusLock,
            v = void 0 === m || m,
            y = t.returnFocus,
            b = void 0 === y || y,
            w = t.inert,
            x = t.allowPinchZoom,
            S = t.sideCar,
            C = t.className,
            E = t.shouldIgnore,
            k = t.style,
            P = t.as,
            O = i(t, [
              "children",
              "autoFocus",
              "shards",
              "enabled",
              "scrollLock",
              "focusLock",
              "returnFocus",
              "inert",
              "allowPinchZoom",
              "sideCar",
              "className",
              "shouldIgnore",
              "style",
              "as",
            ]),
            A = S,
            j = a.onActivation,
            R = a.onDeactivation,
            M = i(a, ["onActivation", "onDeactivation"]),
            I = r(r({}, M), {
              sideCar: S,
              shards: l,
              allowPinchZoom: x,
              as: P,
              inert: w,
              style: k,
              enabled: f && p,
            });
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              T,
              {
                ref: e,
                sideCar: S,
                disabled: !(a && f && v),
                returnFocus: b,
                autoFocus: u,
                shards: l,
                onActivation: j,
                onDeactivation: R,
                className: C,
                whiteList: E,
                lockProps: I,
                as: g,
              },
              c
            ),
            f &&
              o.createElement(
                A,
                r({}, O, { sideCar: _, setLockProps: s, shards: l })
              )
          );
        }),
        M = function (t) {
          var e = t.sideCar,
            n = (function (t, e) {
              var n = {};
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) &&
                  e.indexOf(r) < 0 &&
                  (n[r] = t[r]);
              if (
                null != t &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                  e.indexOf(r[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                    (n[r[i]] = t[r[i]]);
              }
              return n;
            })(t, ["sideCar"]);
          if (!e)
            throw new Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var r = e.read();
          if (!r) throw new Error("Sidecar medium not found");
          return o.createElement(r, l({}, n));
        };
      function I(t, e) {
        return t.useMedium(e), M;
      }
      function L(t, e) {
        return (
          (L =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          L(t, e)
        );
      }
      M.isSideCarExport = !0;
      var V = function (t, e) {
          return function (n) {
            var r,
              i = [];
            function a() {
              (r = t(
                i.map(function (t) {
                  return t.props;
                })
              )),
                e(r);
            }
            var s,
              c,
              u,
              l = (function (t) {
                var e, s;
                function c() {
                  return t.apply(this, arguments) || this;
                }
                (s = t),
                  ((e = c).prototype = Object.create(s.prototype)),
                  (e.prototype.constructor = e),
                  L(e, s),
                  (c.peek = function () {
                    return r;
                  });
                var u = c.prototype;
                return (
                  (u.componentDidMount = function () {
                    i.push(this), a();
                  }),
                  (u.componentDidUpdate = function () {
                    a();
                  }),
                  (u.componentWillUnmount = function () {
                    var t = i.indexOf(this);
                    i.splice(t, 1), a();
                  }),
                  (u.render = function () {
                    return o.createElement(n, this.props);
                  }),
                  c
                );
              })(o.PureComponent);
            return (
              (s = l),
              (c = "displayName"),
              (u =
                "SideEffect(" +
                (function (t) {
                  return t.displayName || t.name || "Component";
                })(n) +
                ")"),
              c in s
                ? Object.defineProperty(s, c, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (s[c] = u),
              l
            );
          };
        },
        D = function (t) {
          for (var e = Array(t.length), n = 0; n < t.length; ++n) e[n] = t[n];
          return e;
        },
        Z = function (t) {
          return Array.isArray(t) ? t : [t];
        },
        z = function (t) {
          return t.parentNode &&
            t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? t.parentNode.host
            : t.parentNode;
        },
        B = function (t) {
          return t === document || (t && t.nodeType === Node.DOCUMENT_NODE);
        },
        N = function (t, e) {
          return (
            !t ||
            B(t) ||
            (!(function (t) {
              if (t.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(t, null);
              return (
                !(!e || !e.getPropertyValue) &&
                ("none" === e.getPropertyValue("display") ||
                  "hidden" === e.getPropertyValue("visibility"))
              );
            })(t) &&
              e(z(t)))
          );
        },
        F = function (t, e) {
          var n = t.get(e);
          if (void 0 !== n) return n;
          var r = N(e, F.bind(void 0, t));
          return t.set(e, r), r;
        },
        $ = function (t, e) {
          var n = t.get(e);
          if (void 0 !== n) return n;
          var r = (function (t, e) {
            return !(t && !B(t)) || (!!W(t) && e(z(t)));
          })(e, $.bind(void 0, t));
          return t.set(e, r), r;
        },
        U = function (t) {
          return t.dataset;
        },
        H = function (t) {
          return "INPUT" === t.tagName;
        },
        q = function (t) {
          return H(t) && "radio" === t.type;
        },
        W = function (t) {
          var e = t.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e);
        },
        G = function (t) {
          var e;
          return Boolean(
            t && (null === (e = U(t)) || void 0 === e ? void 0 : e.focusGuard)
          );
        },
        Y = function (t) {
          return !G(t);
        },
        K = function (t) {
          return Boolean(t);
        },
        X = function (t, e) {
          var n = t.tabIndex - e.tabIndex,
            r = t.index - e.index;
          if (n) {
            if (!t.tabIndex) return 1;
            if (!e.tabIndex) return -1;
          }
          return n || r;
        },
        J = function (t, e, n) {
          return D(t)
            .map(function (t, e) {
              return {
                node: t,
                index: e,
                tabIndex:
                  n && -1 === t.tabIndex
                    ? (t.dataset || {}).focusGuard
                      ? 0
                      : -1
                    : t.tabIndex,
              };
            })
            .filter(function (t) {
              return !e || t.tabIndex >= 0;
            })
            .sort(X);
        },
        Q = [
          "button:enabled",
          "select:enabled",
          "textarea:enabled",
          "input:enabled",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[tabindex]",
          "[contenteditable]",
          "[autofocus]",
        ].join(","),
        tt = "".concat(Q, ", [data-focus-guard]"),
        et = function (t, e) {
          var n;
          return D(
            (null === (n = t.shadowRoot) || void 0 === n
              ? void 0
              : n.children) || t.children
          ).reduce(function (t, n) {
            return t.concat(n.matches(e ? tt : Q) ? [n] : [], et(n));
          }, []);
        },
        nt = function (t, e) {
          return t.reduce(function (t, n) {
            return t.concat(
              et(n, e),
              n.parentNode
                ? D(n.parentNode.querySelectorAll(Q)).filter(function (t) {
                    return t === n;
                  })
                : []
            );
          }, []);
        },
        rt = function (t, e) {
          return D(t)
            .filter(function (t) {
              return F(e, t);
            })
            .filter(function (t) {
              return (function (t) {
                return !(
                  (H(t) ||
                    (function (t) {
                      return "BUTTON" === t.tagName;
                    })(t)) &&
                  ("hidden" === t.type || t.disabled)
                );
              })(t);
            });
        },
        it = function (t, e) {
          return (
            void 0 === e && (e = new Map()),
            D(t).filter(function (t) {
              return $(e, t);
            })
          );
        },
        ot = function (t, e, n) {
          return J(rt(nt(t, n), e), !0, n);
        },
        at = function (t, e) {
          return J(rt(nt(t), e), !1);
        },
        st = function (t, e) {
          return rt(
            (function (t) {
              var e = t.querySelectorAll(
                "[".concat("data-autofocus-inside", "]")
              );
              return D(e)
                .map(function (t) {
                  return nt([t]);
                })
                .reduce(function (t, e) {
                  return t.concat(e);
                }, []);
            })(t),
            e
          );
        },
        ct = function (t, e) {
          return (
            (t.shadowRoot
              ? ct(t.shadowRoot, e)
              : Object.getPrototypeOf(t).contains.call(t, e)) ||
            D(t.children).some(function (t) {
              return ct(t, e);
            })
          );
        },
        ut = function (t) {
          return t.activeElement
            ? t.activeElement.shadowRoot
              ? ut(t.activeElement.shadowRoot)
              : t.activeElement
            : void 0;
        },
        lt = function () {
          return document.activeElement
            ? document.activeElement.shadowRoot
              ? ut(document.activeElement.shadowRoot)
              : document.activeElement
            : void 0;
        },
        dt = function (t) {
          return t.parentNode ? dt(t.parentNode) : t;
        },
        ft = function (t) {
          return Z(t)
            .filter(Boolean)
            .reduce(function (t, e) {
              var n = e.getAttribute(b);
              return (
                t.push.apply(
                  t,
                  n
                    ? (function (t) {
                        for (
                          var e = new Set(), n = t.length, r = 0;
                          r < n;
                          r += 1
                        )
                          for (var i = r + 1; i < n; i += 1) {
                            var o = t[r].compareDocumentPosition(t[i]);
                            (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 &&
                              e.add(i),
                              (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 &&
                                e.add(r);
                          }
                        return t.filter(function (t, n) {
                          return !e.has(n);
                        });
                      })(
                        D(
                          dt(e).querySelectorAll(
                            "["
                              .concat(b, '="')
                              .concat(n, '"]:not([')
                              .concat(w, '="disabled"])')
                          )
                        )
                      )
                    : [e]
                ),
                t
              );
            }, []);
        },
        ht = function (t) {
          return Boolean(
            D(t.querySelectorAll("iframe")).some(function (t) {
              return t === document.activeElement;
            })
          );
        },
        pt = function (t) {
          var e = document && lt();
          return (
            !(!e || (e.dataset && e.dataset.focusGuard)) &&
            ft(t).some(function (t) {
              return ct(t, e) || ht(t);
            })
          );
        },
        mt = function (t, e) {
          return q(t) && t.name
            ? (function (t, e) {
                return (
                  e
                    .filter(q)
                    .filter(function (e) {
                      return e.name === t.name;
                    })
                    .filter(function (t) {
                      return t.checked;
                    })[0] || t
                );
              })(t, e)
            : t;
        },
        vt = function (t) {
          return t[0] && t.length > 1 ? mt(t[0], t) : t[0];
        },
        gt = function (t, e) {
          return t.length > 1 ? t.indexOf(mt(t[e], t)) : e;
        },
        yt = "NEW_FOCUS",
        bt = function (t, e, n, r) {
          var i = t.length,
            o = t[0],
            a = t[i - 1],
            s = G(n);
          if (!(n && t.indexOf(n) >= 0)) {
            var c = void 0 !== n ? e.indexOf(n) : -1,
              u = r ? e.indexOf(r) : c,
              l = r ? t.indexOf(r) : -1,
              d = c - u,
              f = e.indexOf(o),
              h = e.indexOf(a),
              p = (function (t) {
                var e = new Set();
                return (
                  t.forEach(function (n) {
                    return e.add(mt(n, t));
                  }),
                  t.filter(function (t) {
                    return e.has(t);
                  })
                );
              })(e),
              m = (void 0 !== n ? p.indexOf(n) : -1) - (r ? p.indexOf(r) : c),
              v = gt(t, 0),
              g = gt(t, i - 1);
            return -1 === c || -1 === l
              ? yt
              : !d && l >= 0
              ? l
              : c <= f && s && Math.abs(d) > 1
              ? g
              : c >= h && s && Math.abs(d) > 1
              ? v
              : d && Math.abs(m) > 1
              ? l
              : c <= f
              ? g
              : c > h
              ? v
              : d
              ? Math.abs(d) > 1
                ? l
                : (i + l + d) % i
              : void 0;
          }
        },
        wt = function (t, e) {
          return (
            void 0 === e && (e = []),
            e.push(t),
            t.parentNode && wt(t.parentNode.host || t.parentNode, e),
            e
          );
        },
        xt = function (t, e) {
          for (var n = wt(t), r = wt(e), i = 0; i < n.length; i += 1) {
            var o = n[i];
            if (r.indexOf(o) >= 0) return o;
          }
          return !1;
        },
        St = function (t, e, n) {
          var r = Z(t),
            i = Z(e),
            o = r[0],
            a = !1;
          return (
            i.filter(Boolean).forEach(function (t) {
              (a = xt(a || t, t) || a),
                n.filter(Boolean).forEach(function (t) {
                  var e = xt(o, t);
                  e && (a = !a || ct(e, a) ? e : xt(e, a));
                });
            }),
            a
          );
        },
        Ct = function (t, e) {
          var n = document && lt(),
            r = ft(t).filter(Y),
            i = St(n || t, t, r),
            o = new Map(),
            a = at(r, o),
            s = ot(r, o).filter(function (t) {
              var e = t.node;
              return Y(e);
            });
          if (s[0] || (s = a)[0]) {
            var c,
              u = at([i], o).map(function (t) {
                return t.node;
              }),
              l = (function (t, e) {
                var n = new Map();
                return (
                  e.forEach(function (t) {
                    return n.set(t.node, t);
                  }),
                  t
                    .map(function (t) {
                      return n.get(t);
                    })
                    .filter(K)
                );
              })(u, s),
              d = l.map(function (t) {
                return t.node;
              }),
              f = bt(d, u, n, e);
            if (f === yt) {
              var h = it(
                a.map(function (t) {
                  return t.node;
                })
              ).filter(
                ((c = (function (t, e) {
                  return t.reduce(function (t, n) {
                    return t.concat(st(n, e));
                  }, []);
                })(r, o)),
                function (t) {
                  var e;
                  return (
                    t.autofocus ||
                    !!(null === (e = U(t)) || void 0 === e
                      ? void 0
                      : e.autofocus) ||
                    c.indexOf(t) >= 0
                  );
                })
              );
              return { node: h && h.length ? vt(h) : vt(it(d)) };
            }
            return void 0 === f ? f : l[f];
          }
        },
        Et = 0,
        kt = !1,
        Pt = function (t, e, n) {
          void 0 === n && (n = {});
          var r,
            i,
            o = Ct(t, e);
          if (!kt && o) {
            if (Et > 2)
              return (
                console.error(
                  "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
                ),
                (kt = !0),
                void setTimeout(function () {
                  kt = !1;
                }, 1)
              );
            Et++,
              (r = o.node),
              (i = n.focusOptions),
              "focus" in r && r.focus(i),
              "contentWindow" in r &&
                r.contentWindow &&
                r.contentWindow.focus(),
              Et--;
          }
        },
        Ot = function (t) {
          var e = ft(t).filter(Y),
            n = St(t, t, e),
            r = new Map(),
            i = ot([n], r, !0),
            o = ot(e, r)
              .filter(function (t) {
                var e = t.node;
                return Y(e);
              })
              .map(function (t) {
                return t.node;
              });
          return i.map(function (t) {
            var e = t.node;
            return {
              node: e,
              index: t.index,
              lockItem: o.indexOf(e) >= 0,
              guard: G(e),
            };
          });
        };
      function At(t) {
        var e = window.setImmediate;
        "undefined" !== typeof e ? e(t) : setTimeout(t, 1);
      }
      var Tt = function () {
          return (
            (document && document.activeElement === document.body) ||
            (function () {
              var t = document && lt();
              return (
                !!t &&
                D(
                  document.querySelectorAll(
                    "[".concat("data-no-focus-lock", "]")
                  )
                ).some(function (e) {
                  return ct(e, t);
                })
              );
            })()
          );
        },
        _t = null,
        jt = null,
        Rt = null,
        Mt = !1,
        It = function () {
          return !0;
        };
      function Lt(t, e, n, r) {
        var i = null,
          o = t;
        do {
          var a = r[o];
          if (a.guard) a.node.dataset.focusAutoGuard && (i = a);
          else {
            if (!a.lockItem) break;
            if (o !== t) return;
            i = null;
          }
        } while ((o += n) !== e);
        i && (i.node.tabIndex = 0);
      }
      var Vt = function (t) {
          return t && "current" in t ? t.current : t;
        },
        Dt = function t(e, n, r) {
          return (
            n &&
            ((n.host === e &&
              (!n.activeElement || r.contains(n.activeElement))) ||
              (n.parentNode && t(e, n.parentNode, r)))
          );
        },
        Zt = function () {
          var t,
            e = !1;
          if (_t) {
            var n = _t,
              r = n.observed,
              i = n.persistentFocus,
              o = n.autoFocus,
              a = n.shards,
              s = n.crossFrame,
              c = n.focusOptions,
              u = r || (Rt && Rt.portaledElement),
              l = document && document.activeElement;
            if (u) {
              var d = [u].concat(a.map(Vt).filter(Boolean));
              if (
                ((l &&
                  !(function (t) {
                    return (_t.whiteList || It)(t);
                  })(l)) ||
                  ((i ||
                    (s ? Boolean(Mt) : "meanwhile" === Mt) ||
                    !Tt() ||
                    (!jt && o)) &&
                    (u &&
                      !(
                        pt(d) ||
                        (l &&
                          (function (t, e) {
                            return e.some(function (e) {
                              return Dt(t, e, e);
                            });
                          })(l, d)) ||
                        ((t = l), Rt && Rt.portaledElement === t)
                      ) &&
                      (document && !jt && l && !o
                        ? (l.blur && l.blur(), document.body.focus())
                        : ((e = Pt(d, jt, { focusOptions: c })), (Rt = {}))),
                    (Mt = !1),
                    (jt = document && document.activeElement))),
                document)
              ) {
                var f = document && document.activeElement,
                  h = Ot(d),
                  p = h
                    .map(function (t) {
                      return t.node;
                    })
                    .indexOf(f);
                p > -1 &&
                  (h
                    .filter(function (t) {
                      var e = t.guard,
                        n = t.node;
                      return e && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (t) {
                      return t.node.removeAttribute("tabIndex");
                    }),
                  Lt(p, h.length, 1, h),
                  Lt(p, -1, -1, h));
              }
            }
          }
          return e;
        },
        zt = function (t) {
          Zt() && t && (t.stopPropagation(), t.preventDefault());
        },
        Bt = function () {
          return At(Zt);
        },
        Nt = function (t) {
          var e = t.target,
            n = t.currentTarget;
          n.contains(e) || (Rt = { observerNode: n, portaledElement: e });
        },
        Ft = function () {
          (Mt = "just"),
            setTimeout(function () {
              Mt = "meanwhile";
            }, 0);
        };
      C.assignSyncMedium(Nt),
        E.assignMedium(Bt),
        k.assignMedium(function (t) {
          return t({ moveFocusInside: Pt, focusInside: pt });
        });
      var $t,
        Ut = V(
          function (t) {
            return t.filter(function (t) {
              return !t.disabled;
            });
          },
          function (t) {
            var e = t.slice(-1)[0];
            e &&
              !_t &&
              (document.addEventListener("focusin", zt),
              document.addEventListener("focusout", Bt),
              window.addEventListener("blur", Ft));
            var n = _t,
              r = n && e && e.id === n.id;
            (_t = e),
              n &&
                !r &&
                (n.onDeactivation(),
                t.filter(function (t) {
                  return t.id === n.id;
                }).length || n.returnFocus(!e)),
              e
                ? ((jt = null),
                  (r && n.observed === e.observed) || e.onActivation(),
                  Zt(),
                  At(Zt))
                : (document.removeEventListener("focusin", zt),
                  document.removeEventListener("focusout", Bt),
                  window.removeEventListener("blur", Ft),
                  (jt = null));
          }
        )(function () {
          return null;
        });
      I(P, Ut);
      function Ht() {
        if (!document) return null;
        var t = document.createElement("style");
        t.type = "text/css";
        var e = $t || n.nc;
        return e && t.setAttribute("nonce", e), t;
      }
      var qt = function () {
          var t = 0,
            e = null;
          return {
            add: function (n) {
              var r, i;
              0 == t &&
                (e = Ht()) &&
                ((i = n),
                (r = e).styleSheet
                  ? (r.styleSheet.cssText = i)
                  : r.appendChild(document.createTextNode(i)),
                (function (t) {
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(t);
                })(e)),
                t++;
            },
            remove: function () {
              !--t &&
                e &&
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
            },
          };
        },
        Wt = function () {
          var t = (function () {
            var t = qt();
            return function (e, n) {
              o.useEffect(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove();
                    }
                  );
                },
                [e && n]
              );
            };
          })();
          return function (e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null;
          };
        },
        Gt = { left: 0, top: 0, right: 0, gap: 0 },
        Yt = function (t) {
          return parseInt(t || "", 10) || 0;
        },
        Kt = function (t) {
          if ((void 0 === t && (t = "margin"), "undefined" === typeof window))
            return Gt;
          var e = (function (t) {
              var e = window.getComputedStyle(document.body),
                n = e["padding" === t ? "paddingLeft" : "marginLeft"],
                r = e["padding" === t ? "paddingTop" : "marginTop"],
                i = e["padding" === t ? "paddingRight" : "marginRight"];
              return [Yt(n), Yt(r), Yt(i)];
            })(t),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, r - n + e[2] - e[0]),
          };
        },
        Xt = Wt(),
        Jt = function (t, e, n, r) {
          var i = t.left,
            o = t.top,
            a = t.right,
            u = t.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  e && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        Qt = function (t) {
          var e = t.noRelative,
            n = t.noImportant,
            r = t.gapMode,
            i = void 0 === r ? "margin" : r,
            a = o.useMemo(
              function () {
                return Kt(i);
              },
              [i]
            );
          return o.createElement(Xt, {
            styles: Jt(a, !e, i, n ? "" : "!important"),
          });
        },
        te = !1;
      if ("undefined" !== typeof window)
        try {
          var ee = Object.defineProperty({}, "passive", {
            get: function () {
              return (te = !0), !0;
            },
          });
          window.addEventListener("test", ee, ee),
            window.removeEventListener("test", ee, ee);
        } catch (Ee) {
          te = !1;
        }
      var ne = !!te && { passive: !1 },
        re = function (t, e) {
          var n = window.getComputedStyle(t);
          return (
            "hidden" !== n[e] &&
            !(
              n.overflowY === n.overflowX &&
              !(function (t) {
                return "TEXTAREA" === t.tagName;
              })(t) &&
              "visible" === n[e]
            )
          );
        },
        ie = function (t, e) {
          var n = e;
          do {
            if (
              ("undefined" !== typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              oe(t, n))
            ) {
              var r = ae(t, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        oe = function (t, e) {
          return "v" === t
            ? (function (t) {
                return re(t, "overflowY");
              })(e)
            : (function (t) {
                return re(t, "overflowX");
              })(e);
        },
        ae = function (t, e) {
          return "v" === t
            ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight]
            : (function (t) {
                return [t.scrollLeft, t.scrollWidth, t.clientWidth];
              })(e);
          var n;
        },
        se = function (t) {
          return "changedTouches" in t
            ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
            : [0, 0];
        },
        ce = function (t) {
          return [t.deltaX, t.deltaY];
        },
        ue = function (t) {
          return t && "current" in t ? t.current : t;
        },
        le = function (t) {
          return "\n  .block-interactivity-"
            .concat(t, " {pointer-events: none;}\n  .allow-interactivity-")
            .concat(t, " {pointer-events: all;}\n");
        },
        de = 0,
        fe = [];
      I(m, function (t) {
        var e = o.useRef([]),
          n = o.useRef([0, 0]),
          r = o.useRef(),
          i = o.useState(de++)[0],
          a = o.useState(function () {
            return Wt();
          })[0],
          s = o.useRef(t);
        o.useEffect(
          function () {
            s.current = t;
          },
          [t]
        ),
          o.useEffect(
            function () {
              if (t.inert) {
                document.body.classList.add("block-interactivity-".concat(i));
                var e = (function (t, e, n) {
                  if (n || 2 === arguments.length)
                    for (var r, i = 0, o = e.length; i < o; i++)
                      (!r && i in e) ||
                        (r || (r = Array.prototype.slice.call(e, 0, i)),
                        (r[i] = e[i]));
                  return t.concat(r || Array.prototype.slice.call(e));
                })([t.lockRef.current], (t.shards || []).map(ue), !0).filter(
                  Boolean
                );
                return (
                  e.forEach(function (t) {
                    return t.classList.add("allow-interactivity-".concat(i));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(i)
                    ),
                      e.forEach(function (t) {
                        return t.classList.remove(
                          "allow-interactivity-".concat(i)
                        );
                      });
                  }
                );
              }
            },
            [t.inert, t.lockRef.current, t.shards]
          );
        var c = o.useCallback(function (t, e) {
            if ("touches" in t && 2 === t.touches.length)
              return !s.current.allowPinchZoom;
            var i,
              o = se(t),
              a = n.current,
              c = "deltaX" in t ? t.deltaX : a[0] - o[0],
              u = "deltaY" in t ? t.deltaY : a[1] - o[1],
              l = t.target,
              d = Math.abs(c) > Math.abs(u) ? "h" : "v";
            if ("touches" in t && "h" === d && "range" === l.type) return !1;
            var f = ie(d, l);
            if (!f) return !0;
            if (
              (f ? (i = d) : ((i = "v" === d ? "h" : "v"), (f = ie(d, l))), !f)
            )
              return !1;
            if (
              (!r.current &&
                "changedTouches" in t &&
                (c || u) &&
                (r.current = i),
              !i)
            )
              return !0;
            var h = r.current || i;
            return (function (t, e, n, r, i) {
              var o = (function (t, e) {
                  return "h" === t && "rtl" === e ? -1 : 1;
                })(t, window.getComputedStyle(e).direction),
                a = o * r,
                s = n.target,
                c = e.contains(s),
                u = !1,
                l = a > 0,
                d = 0,
                f = 0;
              do {
                var h = ae(t, s),
                  p = h[0],
                  m = h[1] - h[2] - o * p;
                (p || m) && oe(t, s) && ((d += m), (f += p)),
                  (s = s.parentNode);
              } while ((!c && s !== document.body) || (c && (e.contains(s) || e === s)));
              return (
                ((l && ((i && 0 === d) || (!i && a > d))) ||
                  (!l && ((i && 0 === f) || (!i && -a > f)))) &&
                  (u = !0),
                u
              );
            })(h, e, t, "h" === h ? c : u, !0);
          }, []),
          u = o.useCallback(function (t) {
            var n = t;
            if (fe.length && fe[fe.length - 1] === a) {
              var r = "deltaY" in n ? ce(n) : se(n),
                i = e.current.filter(function (t) {
                  return (
                    t.name === n.type &&
                    t.target === n.target &&
                    (function (t, e) {
                      return t[0] === e[0] && t[1] === e[1];
                    })(t.delta, r)
                  );
                })[0];
              if (i && i.should) n.cancelable && n.preventDefault();
              else if (!i) {
                var o = (s.current.shards || [])
                  .map(ue)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(n.target);
                  });
                (o.length > 0 ? c(n, o[0]) : !s.current.noIsolation) &&
                  n.cancelable &&
                  n.preventDefault();
              }
            }
          }, []),
          l = o.useCallback(function (t, n, r, i) {
            var o = { name: t, delta: n, target: r, should: i };
            e.current.push(o),
              setTimeout(function () {
                e.current = e.current.filter(function (t) {
                  return t !== o;
                });
              }, 1);
          }, []),
          d = o.useCallback(function (t) {
            (n.current = se(t)), (r.current = void 0);
          }, []),
          f = o.useCallback(function (e) {
            l(e.type, ce(e), e.target, c(e, t.lockRef.current));
          }, []),
          h = o.useCallback(function (e) {
            l(e.type, se(e), e.target, c(e, t.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            fe.push(a),
            t.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: h,
            }),
            document.addEventListener("wheel", u, ne),
            document.addEventListener("touchmove", u, ne),
            document.addEventListener("touchstart", d, ne),
            function () {
              (fe = fe.filter(function (t) {
                return t !== a;
              })),
                document.removeEventListener("wheel", u, ne),
                document.removeEventListener("touchmove", u, ne),
                document.removeEventListener("touchstart", d, ne);
            }
          );
        }, []);
        var p = t.removeScrollBar,
          m = t.inert;
        return o.createElement(
          o.Fragment,
          null,
          m ? o.createElement(a, { styles: le(i) }) : null,
          p ? o.createElement(Qt, { gapMode: "margin" }) : null
        );
      });
      var he = new WeakMap(),
        pe = new WeakMap(),
        me = {},
        ve = 0,
        ge = function (t, e, n) {
          void 0 === e &&
            (e = (function (t) {
              return "undefined" === typeof document
                ? null
                : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
            })(t)),
            void 0 === n && (n = "data-aria-hidden");
          var r = Array.isArray(t) ? t : [t];
          me[n] || (me[n] = new WeakMap());
          var i = me[n],
            o = [],
            a = new Set(),
            s = function (t) {
              t && !a.has(t) && (a.add(t), s(t.parentNode));
            };
          r.forEach(s);
          var c = function (t) {
            !t ||
              r.indexOf(t) >= 0 ||
              Array.prototype.forEach.call(t.children, function (t) {
                if (a.has(t)) c(t);
                else {
                  var e = t.getAttribute("aria-hidden"),
                    r = null !== e && "false" !== e,
                    s = (he.get(t) || 0) + 1,
                    u = (i.get(t) || 0) + 1;
                  he.set(t, s),
                    i.set(t, u),
                    o.push(t),
                    1 === s && r && pe.set(t, !0),
                    1 === u && t.setAttribute(n, "true"),
                    r || t.setAttribute("aria-hidden", "true");
                }
              });
          };
          return (
            c(e),
            a.clear(),
            ve++,
            function () {
              o.forEach(function (t) {
                var e = he.get(t) - 1,
                  r = i.get(t) - 1;
                he.set(t, e),
                  i.set(t, r),
                  e ||
                    (pe.has(t) || t.removeAttribute("aria-hidden"),
                    pe.delete(t)),
                  r || t.removeAttribute(n);
              }),
                --ve ||
                  ((he = new WeakMap()),
                  (he = new WeakMap()),
                  (pe = new WeakMap()),
                  (me = {}));
            }
          );
        },
        ye = Wt(),
        be = function () {
          return o.createElement(ye, {
            styles:
              "\n [data-focus-on-hidden] {\n   pointer-events: none !important;\n }\n",
          });
        },
        we = function (t) {
          return "current" in t ? t.current : t;
        };
      var xe = I(_, function (t) {
          var e = t.setLockProps,
            n = t.onEscapeKey,
            r = t.onClickOutside,
            i = t.shards,
            a = t.onActivation,
            s = t.onDeactivation,
            c = t.noIsolation,
            u = (0, o.useState)(void 0),
            l = u[0],
            d = u[1],
            f = (0, o.useRef)(null),
            h = (0, o.useRef)(0);
          return (
            o.useEffect(
              function () {
                var t = function (t) {
                    t.defaultPrevented ||
                      ("Escape" !== t.code &&
                        "Escape" !== t.key &&
                        27 !== t.keyCode) ||
                      !n ||
                      n(t);
                  },
                  e = function (t) {
                    t.defaultPrevented ||
                      t.target === f.current ||
                      (t instanceof MouseEvent && 0 !== t.button) ||
                      (i &&
                        i.map(we).some(function (e) {
                          return (e && e.contains(t.target)) || e === t.target;
                        })) ||
                      (r && r(t));
                  },
                  o = function (t) {
                    e(t), (h.current = t.touches.length);
                  },
                  a = function (t) {
                    h.current = t.touches.length;
                  };
                if (l)
                  return (
                    document.addEventListener("keydown", t),
                    document.addEventListener("mousedown", e),
                    document.addEventListener("touchstart", o),
                    document.addEventListener("touchend", a),
                    function () {
                      document.removeEventListener("keydown", t),
                        document.removeEventListener("mousedown", e),
                        document.removeEventListener("touchstart", o),
                        document.removeEventListener("touchend", a);
                    }
                  );
              },
              [l, r, n]
            ),
            (0, o.useEffect)(
              function () {
                if (l)
                  return (
                    a && a(l),
                    function () {
                      s && s();
                    }
                  );
              },
              [!!l]
            ),
            (0, o.useEffect)(function () {
              var t = function () {
                  return null;
                },
                n = !1;
              return (
                e({
                  onMouseDown: function (t) {
                    f.current = t.target;
                  },
                  onTouchStart: function (t) {
                    f.current = t.target;
                  },
                  onActivation: function (e) {
                    c ||
                      (t = ge(
                        (function () {
                          for (
                            var t = 0, e = 0, n = arguments.length;
                            e < n;
                            e++
                          )
                            t += arguments[e].length;
                          var r = Array(t),
                            i = 0;
                          for (e = 0; e < n; e++)
                            for (
                              var o = arguments[e], a = 0, s = o.length;
                              a < s;
                              a++, i++
                            )
                              r[i] = o[a];
                          return r;
                        })([e], (i || []).map(we)),
                        document.body,
                        j
                      )),
                      d(function () {
                        return e;
                      });
                  },
                  onDeactivation: function () {
                    t(), n || d(null);
                  },
                }),
                function () {
                  (n = !0), e(!1);
                }
              );
            }, []),
            o.createElement(be, null)
          );
        }),
        Se = function (t) {
          return o.createElement(xe, r({}, t));
        },
        Ce = o.forwardRef(function (t, e) {
          return o.createElement(R, r({}, t, { ref: e, sideCar: Se }));
        });
    },
    9921: function (t, e) {
      "use strict";
      var n,
        r = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        l = Symbol.for("react.server_context"),
        d = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        h = Symbol.for("react.suspense_list"),
        p = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        v = Symbol.for("react.offscreen");
      function g(t) {
        if ("object" === typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch ((t = t.type)) {
                case o:
                case s:
                case a:
                case f:
                case h:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case l:
                    case u:
                    case d:
                    case m:
                    case p:
                    case c:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      (n = Symbol.for("react.module.reference")),
        (e.isValidElementType = function (t) {
          return (
            "string" === typeof t ||
            "function" === typeof t ||
            t === o ||
            t === s ||
            t === a ||
            t === f ||
            t === h ||
            t === v ||
            ("object" === typeof t &&
              null !== t &&
              (t.$$typeof === m ||
                t.$$typeof === p ||
                t.$$typeof === c ||
                t.$$typeof === u ||
                t.$$typeof === d ||
                t.$$typeof === n ||
                void 0 !== t.getModuleId))
          );
        }),
        (e.typeOf = g);
    },
    9864: function (t, e, n) {
      "use strict";
      t.exports = n(9921);
    },
    6774: function (t) {
      t.exports = function (t, e, n, r) {
        var i = n ? n.call(r, t, e) : void 0;
        if (void 0 !== i) return !!i;
        if (t === e) return !0;
        if ("object" !== typeof t || !t || "object" !== typeof e || !e)
          return !1;
        var o = Object.keys(t),
          a = Object.keys(e);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(e), c = 0;
          c < o.length;
          c++
        ) {
          var u = o[c];
          if (!s(u)) return !1;
          var l = t[u],
            d = e[u];
          if (
            !1 === (i = n ? n.call(r, l, d, u) : void 0) ||
            (void 0 === i && l !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    5178: function (t, e, n) {
      "use strict";
      n.d(e, {
        f6: function () {
          return jt;
        },
        vJ: function () {
          return Vt;
        },
        iv: function () {
          return bt;
        },
        ZP: function () {
          return Zt;
        },
        F4: function () {
          return Dt;
        },
      });
      var r = n(9864),
        i = n(7294),
        o = n(6774),
        a = n.n(o);
      var s = function (t) {
          function e(t, r, c, u, f) {
            for (
              var h,
                p,
                m,
                v,
                w,
                S = 0,
                C = 0,
                E = 0,
                k = 0,
                P = 0,
                R = 0,
                I = (m = h = 0),
                V = 0,
                D = 0,
                Z = 0,
                z = 0,
                B = c.length,
                N = B - 1,
                F = "",
                $ = "",
                U = "",
                H = "";
              V < B;

            ) {
              if (
                ((p = c.charCodeAt(V)),
                V === N &&
                  0 !== C + k + E + S &&
                  (0 !== C && (p = 47 === C ? 10 : 47),
                  (k = E = S = 0),
                  B++,
                  N++),
                0 === C + k + E + S)
              ) {
                if (
                  V === N &&
                  (0 < D && (F = F.replace(d, "")), 0 < F.trim().length)
                ) {
                  switch (p) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      F += c.charAt(V);
                  }
                  p = 59;
                }
                switch (p) {
                  case 123:
                    for (
                      h = (F = F.trim()).charCodeAt(0), m = 1, z = ++V;
                      V < B;

                    ) {
                      switch ((p = c.charCodeAt(V))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((p = c.charCodeAt(V + 1))) {
                            case 42:
                            case 47:
                              t: {
                                for (I = V + 1; I < N; ++I)
                                  switch (c.charCodeAt(I)) {
                                    case 47:
                                      if (
                                        42 === p &&
                                        42 === c.charCodeAt(I - 1) &&
                                        V + 2 !== I
                                      ) {
                                        V = I + 1;
                                        break t;
                                      }
                                      break;
                                    case 10:
                                      if (47 === p) {
                                        V = I + 1;
                                        break t;
                                      }
                                  }
                                V = I;
                              }
                          }
                          break;
                        case 91:
                          p++;
                        case 40:
                          p++;
                        case 34:
                        case 39:
                          for (; V++ < N && c.charCodeAt(V) !== p; );
                      }
                      if (0 === m) break;
                      V++;
                    }
                    if (
                      ((m = c.substring(z, V)),
                      0 === h &&
                        (h = (F = F.replace(l, "").trim()).charCodeAt(0)),
                      64 === h)
                    ) {
                      switch (
                        (0 < D && (F = F.replace(d, "")), (p = F.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          D = r;
                          break;
                        default:
                          D = j;
                      }
                      if (
                        ((z = (m = e(r, D, m, p, f + 1)).length),
                        0 < M &&
                          ((w = s(3, m, (D = n(j, F, Z)), r, A, O, z, p, f, u)),
                          (F = D.join("")),
                          void 0 !== w &&
                            0 === (z = (m = w.trim()).length) &&
                            ((p = 0), (m = ""))),
                        0 < z)
                      )
                        switch (p) {
                          case 115:
                            F = F.replace(x, a);
                          case 100:
                          case 109:
                          case 45:
                            m = F + "{" + m + "}";
                            break;
                          case 107:
                            (m = (F = F.replace(g, "$1 $2")) + "{" + m + "}"),
                              (m =
                                1 === _ || (2 === _ && o("@" + m, 3))
                                  ? "@-webkit-" + m + "@" + m
                                  : "@" + m);
                            break;
                          default:
                            (m = F + m), 112 === u && (($ += m), (m = ""));
                        }
                      else m = "";
                    } else m = e(r, n(r, F, Z), m, u, f + 1);
                    (U += m),
                      (m = Z = D = I = h = 0),
                      (F = ""),
                      (p = c.charCodeAt(++V));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (z = (F = (0 < D ? F.replace(d, "") : F).trim()).length)
                    )
                      switch (
                        (0 === I &&
                          ((h = F.charCodeAt(0)),
                          45 === h || (96 < h && 123 > h)) &&
                          (z = (F = F.replace(" ", ":")).length),
                        0 < M &&
                          void 0 !==
                            (w = s(1, F, r, t, A, O, $.length, u, f, u)) &&
                          0 === (z = (F = w.trim()).length) &&
                          (F = "\0\0"),
                        (h = F.charCodeAt(0)),
                        (p = F.charCodeAt(1)),
                        h)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === p || 99 === p) {
                            H += F + c.charAt(V);
                            break;
                          }
                        default:
                          58 !== F.charCodeAt(z - 1) &&
                            ($ += i(F, h, p, F.charCodeAt(2)));
                      }
                    (Z = D = I = h = 0), (F = ""), (p = c.charCodeAt(++V));
                }
              }
              switch (p) {
                case 13:
                case 10:
                  47 === C
                    ? (C = 0)
                    : 0 === 1 + h &&
                      107 !== u &&
                      0 < F.length &&
                      ((D = 1), (F += "\0")),
                    0 < M * L && s(0, F, r, t, A, O, $.length, u, f, u),
                    (O = 1),
                    A++;
                  break;
                case 59:
                case 125:
                  if (0 === C + k + E + S) {
                    O++;
                    break;
                  }
                default:
                  switch ((O++, (v = c.charAt(V)), p)) {
                    case 9:
                    case 32:
                      if (0 === k + S + C)
                        switch (P) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = "";
                            break;
                          default:
                            32 !== p && (v = " ");
                        }
                      break;
                    case 0:
                      v = "\\0";
                      break;
                    case 12:
                      v = "\\f";
                      break;
                    case 11:
                      v = "\\v";
                      break;
                    case 38:
                      0 === k + C + S && ((D = Z = 1), (v = "\f" + v));
                      break;
                    case 108:
                      if (0 === k + C + S + T && 0 < I)
                        switch (V - I) {
                          case 2:
                            112 === P && 58 === c.charCodeAt(V - 3) && (T = P);
                          case 8:
                            111 === R && (T = R);
                        }
                      break;
                    case 58:
                      0 === k + C + S && (I = V);
                      break;
                    case 44:
                      0 === C + E + k + S && ((D = 1), (v += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === C && (k = k === p ? 0 : 0 === k ? p : k);
                      break;
                    case 91:
                      0 === k + C + E && S++;
                      break;
                    case 93:
                      0 === k + C + E && S--;
                      break;
                    case 41:
                      0 === k + C + S && E--;
                      break;
                    case 40:
                      if (0 === k + C + S) {
                        if (0 === h)
                          if (2 * P + 3 * R === 533);
                          else h = 1;
                        E++;
                      }
                      break;
                    case 64:
                      0 === C + E + k + S + I + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < k + S + E))
                        switch (C) {
                          case 0:
                            switch (2 * p + 3 * c.charCodeAt(V + 1)) {
                              case 235:
                                C = 47;
                                break;
                              case 220:
                                (z = V), (C = 42);
                            }
                            break;
                          case 42:
                            47 === p &&
                              42 === P &&
                              z + 2 !== V &&
                              (33 === c.charCodeAt(z + 2) &&
                                ($ += c.substring(z, V + 1)),
                              (v = ""),
                              (C = 0));
                        }
                  }
                  0 === C && (F += v);
              }
              (R = P), (P = p), V++;
            }
            if (0 < (z = $.length)) {
              if (
                ((D = r),
                0 < M &&
                  void 0 !== (w = s(2, $, D, t, A, O, z, u, f, u)) &&
                  0 === ($ = w).length)
              )
                return H + $ + U;
              if ((($ = D.join(",") + "{" + $ + "}"), 0 !== _ * T)) {
                switch ((2 !== _ || o($, 2) || (T = 0), T)) {
                  case 111:
                    $ = $.replace(b, ":-moz-$1") + $;
                    break;
                  case 112:
                    $ =
                      $.replace(y, "::-webkit-input-$1") +
                      $.replace(y, "::-moz-$1") +
                      $.replace(y, ":-ms-input-$1") +
                      $;
                }
                T = 0;
              }
            }
            return H + $ + U;
          }
          function n(t, e, n) {
            var i = e.trim().split(m);
            e = i;
            var o = i.length,
              a = t.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (t = 0 === a ? "" : t[0] + " "; s < o; ++s)
                  e[s] = r(t, e[s], n).trim();
                break;
              default:
                var c = (s = 0);
                for (e = []; s < o; ++s)
                  for (var u = 0; u < a; ++u)
                    e[c++] = r(t[u] + " ", i[s], n).trim();
            }
            return e;
          }
          function r(t, e, n) {
            var r = e.charCodeAt(0);
            switch ((33 > r && (r = (e = e.trim()).charCodeAt(0)), r)) {
              case 38:
                return e.replace(v, "$1" + t.trim());
              case 58:
                return t.trim() + e.replace(v, "$1" + t.trim());
              default:
                if (0 < 1 * n && 0 < e.indexOf("\f"))
                  return e.replace(
                    v,
                    (58 === t.charCodeAt(0) ? "" : "$1") + t.trim()
                  );
            }
            return t + e;
          }
          function i(t, e, n, r) {
            var a = t + ";",
              s = 2 * e + 3 * n + 4 * r;
            if (944 === s) {
              t = a.indexOf(":", 9) + 1;
              var c = a.substring(t, a.length - 1).trim();
              return (
                (c = a.substring(0, t).trim() + c + ";"),
                1 === _ || (2 === _ && o(c, 1)) ? "-webkit-" + c + c : c
              );
            }
            if (0 === _ || (2 === _ && !o(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(P, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (c = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  c +
                  a
                );
              case 1005:
                return h.test(a)
                  ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((e = (c = a.substring(13).trim()).indexOf("-") + 1),
                  c.charCodeAt(0) + c.charCodeAt(e))
                ) {
                  case 226:
                    c = a.replace(w, "tb");
                    break;
                  case 232:
                    c = a.replace(w, "tb-rl");
                    break;
                  case 220:
                    c = a.replace(w, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + c + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((e = (a = t).length - 10),
                  (s =
                    (c = (33 === a.charCodeAt(e) ? a.substring(0, e) : a)
                      .substring(t.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | c.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > c.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(c, "-webkit-" + c) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        c,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      a.replace(c, "-webkit-" + c) +
                      ";" +
                      a.replace(c, "-ms-" + c + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (c = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          c +
                          "-ms-flex-" +
                          c +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(C, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(C, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === k.test(t))
                  return 115 ===
                    (c = t.substring(t.indexOf(":") + 1)).charCodeAt(0)
                    ? i(
                        t.replace("stretch", "fill-available"),
                        e,
                        n,
                        r
                      ).replace(":fill-available", ":stretch")
                    : a.replace(c, "-webkit-" + c) +
                        a.replace(c, "-moz-" + c.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === n + r &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(p, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function o(t, e) {
            var n = t.indexOf(1 === e ? ":" : "{"),
              r = t.substring(0, 3 !== e ? n : 10);
            return (
              (n = t.substring(n + 1, t.length - 1)),
              I(2 !== e ? r : r.replace(E, "$1"), n, e)
            );
          }
          function a(t, e) {
            var n = i(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
            return n !== e + ";"
              ? n.replace(S, " or ($1)").substring(4)
              : "(" + e + ")";
          }
          function s(t, e, n, r, i, o, a, s, c, l) {
            for (var d, f = 0, h = e; f < M; ++f)
              switch ((d = R[f].call(u, t, h, n, r, i, o, a, s, c, l))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  h = d;
              }
            if (h !== e) return h;
          }
          function c(t) {
            return (
              void 0 !== (t = t.prefix) &&
                ((I = null),
                t
                  ? "function" !== typeof t
                    ? (_ = 1)
                    : ((_ = 2), (I = t))
                  : (_ = 0)),
              c
            );
          }
          function u(t, n) {
            var r = t;
            if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < M)) {
              var i = s(-1, n, r, r, A, O, 0, 0, 0, 0);
              void 0 !== i && "string" === typeof i && (n = i);
            }
            var o = e(j, r, n, 0, 0);
            return (
              0 < M &&
                void 0 !== (i = s(-2, o, r, r, A, O, o.length, 0, 0, 0)) &&
                (o = i),
              "",
              (T = 0),
              (O = A = 1),
              o
            );
          }
          var l = /^\0+/g,
            d = /[\0\r\f]/g,
            f = /: */g,
            h = /zoo|gra/,
            p = /([,: ])(transform)/g,
            m = /,\r+?/g,
            v = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            b = /:(read-only)/g,
            w = /[svh]\w+-[tblr]{2}/,
            x = /\(\s*(.*)\s*\)/g,
            S = /([\s\S]*?);/g,
            C = /-self|flex-/g,
            E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            k = /stretch|:\s*\w+\-(?:conte|avail)/,
            P = /([^-])(image-set\()/,
            O = 1,
            A = 1,
            T = 0,
            _ = 1,
            j = [],
            R = [],
            M = 0,
            I = null,
            L = 0;
          return (
            (u.use = function t(e) {
              switch (e) {
                case void 0:
                case null:
                  M = R.length = 0;
                  break;
                default:
                  if ("function" === typeof e) R[M++] = e;
                  else if ("object" === typeof e)
                    for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
                  else L = 0 | !!e;
              }
              return t;
            }),
            (u.set = c),
            void 0 !== t && c(t),
            u
          );
        },
        c = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      var u =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        l = (function (t) {
          var e = {};
          return function (n) {
            return void 0 === e[n] && (e[n] = t(n)), e[n];
          };
        })(function (t) {
          return (
            u.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              t.charCodeAt(2) < 91)
          );
        }),
        d = n(8679),
        f = n.n(d),
        h = n(4155);
      function p() {
        return (p =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var m = function (t, e) {
          for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
            n.push(e[r], t[r + 1]);
          return n;
        },
        v = function (t) {
          return (
            null !== t &&
            "object" == typeof t &&
            "[object Object]" ===
              (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
            !(0, r.typeOf)(t)
          );
        },
        g = Object.freeze([]),
        y = Object.freeze({});
      function b(t) {
        return "function" == typeof t;
      }
      function w(t) {
        return t.displayName || t.name || "Component";
      }
      function x(t) {
        return t && "string" == typeof t.styledComponentId;
      }
      var S =
          ("undefined" != typeof h &&
            (h.env.REACT_APP_SC_ATTR || h.env.SC_ATTR)) ||
          "data-styled",
        C = "undefined" != typeof window && "HTMLElement" in window,
        E = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof h &&
              void 0 !== h.env.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !== h.env.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !== h.env.REACT_APP_SC_DISABLE_SPEEDY &&
              h.env.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof h &&
              void 0 !== h.env.SC_DISABLE_SPEEDY &&
              "" !== h.env.SC_DISABLE_SPEEDY &&
              "false" !== h.env.SC_DISABLE_SPEEDY &&
              h.env.SC_DISABLE_SPEEDY
        ),
        k = {};
      function P(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" +
            t +
            " for more information." +
            (n.length > 0 ? " Args: " + n.join(", ") : "")
        );
      }
      var O = (function () {
          function t(t) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = t);
          }
          var e = t.prototype;
          return (
            (e.indexOfGroup = function (t) {
              for (var e = 0, n = 0; n < t; n++) e += this.groupSizes[n];
              return e;
            }),
            (e.insertRules = function (t, e) {
              if (t >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, i = r; t >= i; )
                  (i <<= 1) < 0 && P(16, "" + t);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(n),
                  (this.length = i);
                for (var o = r; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(t + 1), s = 0, c = e.length;
                s < c;
                s++
              )
                this.tag.insertRule(a, e[s]) && (this.groupSizes[t]++, a++);
            }),
            (e.clearGroup = function (t) {
              if (t < this.length) {
                var e = this.groupSizes[t],
                  n = this.indexOfGroup(t),
                  r = n + e;
                this.groupSizes[t] = 0;
                for (var i = n; i < r; i++) this.tag.deleteRule(n);
              }
            }),
            (e.getGroup = function (t) {
              var e = "";
              if (t >= this.length || 0 === this.groupSizes[t]) return e;
              for (
                var n = this.groupSizes[t],
                  r = this.indexOfGroup(t),
                  i = r + n,
                  o = r;
                o < i;
                o++
              )
                e += this.tag.getRule(o) + "/*!sc*/\n";
              return e;
            }),
            t
          );
        })(),
        A = new Map(),
        T = new Map(),
        _ = 1,
        j = function (t) {
          if (A.has(t)) return A.get(t);
          for (; T.has(_); ) _++;
          var e = _++;
          return A.set(t, e), T.set(e, t), e;
        },
        R = function (t) {
          return T.get(t);
        },
        M = function (t, e) {
          e >= _ && (_ = e + 1), A.set(t, e), T.set(e, t);
        },
        I = "style[" + S + '][data-styled-version="5.3.5"]',
        L = new RegExp(
          "^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
        ),
        V = function (t, e, n) {
          for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++)
            (r = i[o]) && t.registerName(e, r);
        },
        D = function (t, e) {
          for (
            var n = (e.textContent || "").split("/*!sc*/\n"),
              r = [],
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var a = n[i].trim();
            if (a) {
              var s = a.match(L);
              if (s) {
                var c = 0 | parseInt(s[1], 10),
                  u = s[2];
                0 !== c &&
                  (M(u, c), V(t, u, s[3]), t.getTag().insertRules(c, r)),
                  (r.length = 0);
              } else r.push(a);
            }
          }
        },
        Z = function () {
          return "undefined" != typeof window &&
            void 0 !== window.__webpack_nonce__
            ? window.__webpack_nonce__
            : null;
        },
        z = function (t) {
          var e = document.head,
            n = t || e,
            r = document.createElement("style"),
            i = (function (t) {
              for (var e = t.childNodes, n = e.length; n >= 0; n--) {
                var r = e[n];
                if (r && 1 === r.nodeType && r.hasAttribute(S)) return r;
              }
            })(n),
            o = void 0 !== i ? i.nextSibling : null;
          r.setAttribute(S, "active"),
            r.setAttribute("data-styled-version", "5.3.5");
          var a = Z();
          return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r;
        },
        B = (function () {
          function t(t) {
            var e = (this.element = z(t));
            e.appendChild(document.createTextNode("")),
              (this.sheet = (function (t) {
                if (t.sheet) return t.sheet;
                for (
                  var e = document.styleSheets, n = 0, r = e.length;
                  n < r;
                  n++
                ) {
                  var i = e[n];
                  if (i.ownerNode === t) return i;
                }
                P(17);
              })(e)),
              (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              try {
                return this.sheet.insertRule(e, t), this.length++, !0;
              } catch (t) {
                return !1;
              }
            }),
            (e.deleteRule = function (t) {
              this.sheet.deleteRule(t), this.length--;
            }),
            (e.getRule = function (t) {
              var e = this.sheet.cssRules[t];
              return void 0 !== e && "string" == typeof e.cssText
                ? e.cssText
                : "";
            }),
            t
          );
        })(),
        N = (function () {
          function t(t) {
            var e = (this.element = z(t));
            (this.nodes = e.childNodes), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              if (t <= this.length && t >= 0) {
                var n = document.createTextNode(e),
                  r = this.nodes[t];
                return (
                  this.element.insertBefore(n, r || null), this.length++, !0
                );
              }
              return !1;
            }),
            (e.deleteRule = function (t) {
              this.element.removeChild(this.nodes[t]), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.nodes[t].textContent : "";
            }),
            t
          );
        })(),
        F = (function () {
          function t(t) {
            (this.rules = []), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              return (
                t <= this.length &&
                (this.rules.splice(t, 0, e), this.length++, !0)
              );
            }),
            (e.deleteRule = function (t) {
              this.rules.splice(t, 1), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.rules[t] : "";
            }),
            t
          );
        })(),
        $ = C,
        U = { isServer: !C, useCSSOMInjection: !E },
        H = (function () {
          function t(t, e, n) {
            void 0 === t && (t = y),
              void 0 === e && (e = {}),
              (this.options = p({}, U, {}, t)),
              (this.gs = e),
              (this.names = new Map(n)),
              (this.server = !!t.isServer),
              !this.server &&
                C &&
                $ &&
                (($ = !1),
                (function (t) {
                  for (
                    var e = document.querySelectorAll(I), n = 0, r = e.length;
                    n < r;
                    n++
                  ) {
                    var i = e[n];
                    i &&
                      "active" !== i.getAttribute(S) &&
                      (D(t, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          t.registerId = function (t) {
            return j(t);
          };
          var e = t.prototype;
          return (
            (e.reconstructWithOptions = function (e, n) {
              return (
                void 0 === n && (n = !0),
                new t(
                  p({}, this.options, {}, e),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.allocateGSInstance = function (t) {
              return (this.gs[t] = (this.gs[t] || 0) + 1);
            }),
            (e.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((n = (e = this.options).isServer),
                  (r = e.useCSSOMInjection),
                  (i = e.target),
                  (t = n ? new F(i) : r ? new B(i) : new N(i)),
                  new O(t)))
              );
              var t, e, n, r, i;
            }),
            (e.hasNameForId = function (t, e) {
              return this.names.has(t) && this.names.get(t).has(e);
            }),
            (e.registerName = function (t, e) {
              if ((j(t), this.names.has(t))) this.names.get(t).add(e);
              else {
                var n = new Set();
                n.add(e), this.names.set(t, n);
              }
            }),
            (e.insertRules = function (t, e, n) {
              this.registerName(t, e), this.getTag().insertRules(j(t), n);
            }),
            (e.clearNames = function (t) {
              this.names.has(t) && this.names.get(t).clear();
            }),
            (e.clearRules = function (t) {
              this.getTag().clearGroup(j(t)), this.clearNames(t);
            }),
            (e.clearTag = function () {
              this.tag = void 0;
            }),
            (e.toString = function () {
              return (function (t) {
                for (
                  var e = t.getTag(), n = e.length, r = "", i = 0;
                  i < n;
                  i++
                ) {
                  var o = R(i);
                  if (void 0 !== o) {
                    var a = t.names.get(o),
                      s = e.getGroup(i);
                    if (a && s && a.size) {
                      var c = S + ".g" + i + '[id="' + o + '"]',
                        u = "";
                      void 0 !== a &&
                        a.forEach(function (t) {
                          t.length > 0 && (u += t + ",");
                        }),
                        (r += "" + s + c + '{content:"' + u + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            t
          );
        })(),
        q = /(a)(d)/gi,
        W = function (t) {
          return String.fromCharCode(t + (t > 25 ? 39 : 97));
        };
      function G(t) {
        var e,
          n = "";
        for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = W(e % 52) + n;
        return (W(e % 52) + n).replace(q, "$1-$2");
      }
      var Y = function (t, e) {
          for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
          return t;
        },
        K = function (t) {
          return Y(5381, t);
        };
      function X(t) {
        for (var e = 0; e < t.length; e += 1) {
          var n = t[e];
          if (b(n) && !x(n)) return !1;
        }
        return !0;
      }
      var J = K("5.3.5"),
        Q = (function () {
          function t(t, e, n) {
            (this.rules = t),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && X(t)),
              (this.componentId = e),
              (this.baseHash = Y(J, e)),
              (this.baseStyle = n),
              H.registerId(e);
          }
          return (
            (t.prototype.generateAndInjectStyles = function (t, e, n) {
              var r = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(t, e, n)),
                this.isStatic && !n.hash)
              )
                if (this.staticRulesId && e.hasNameForId(r, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = gt(this.rules, t, e, n).join(""),
                    a = G(Y(this.baseHash, o) >>> 0);
                  if (!e.hasNameForId(r, a)) {
                    var s = n(o, "." + a, void 0, r);
                    e.insertRules(r, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              else {
                for (
                  var c = this.rules.length,
                    u = Y(this.baseHash, n.hash),
                    l = "",
                    d = 0;
                  d < c;
                  d++
                ) {
                  var f = this.rules[d];
                  if ("string" == typeof f) l += f;
                  else if (f) {
                    var h = gt(f, t, e, n),
                      p = Array.isArray(h) ? h.join("") : h;
                    (u = Y(u, p + d)), (l += p);
                  }
                }
                if (l) {
                  var m = G(u >>> 0);
                  if (!e.hasNameForId(r, m)) {
                    var v = n(l, "." + m, void 0, r);
                    e.insertRules(r, m, v);
                  }
                  i.push(m);
                }
              }
              return i.join(" ");
            }),
            t
          );
        })(),
        tt = /^\s*\/\/.*$/gm,
        et = [":", "[", ".", "#"];
      function nt(t) {
        var e,
          n,
          r,
          i,
          o = void 0 === t ? y : t,
          a = o.options,
          c = void 0 === a ? y : a,
          u = o.plugins,
          l = void 0 === u ? g : u,
          d = new s(c),
          f = [],
          h = (function (t) {
            function e(e) {
              if (e)
                try {
                  t(e + "}");
                } catch (t) {}
            }
            return function (n, r, i, o, a, s, c, u, l, d) {
              switch (n) {
                case 1:
                  if (0 === l && 64 === r.charCodeAt(0)) return t(r + ";"), "";
                  break;
                case 2:
                  if (0 === u) return r + "/*|*/";
                  break;
                case 3:
                  switch (u) {
                    case 102:
                    case 112:
                      return t(i[0] + r), "";
                    default:
                      return r + (0 === d ? "/*|*/" : "");
                  }
                case -2:
                  r.split("/*|*/}").forEach(e);
              }
            };
          })(function (t) {
            f.push(t);
          }),
          p = function (t, r, o) {
            return (0 === r && -1 !== et.indexOf(o[n.length])) || o.match(i)
              ? t
              : "." + e;
          };
        function m(t, o, a, s) {
          void 0 === s && (s = "&");
          var c = t.replace(tt, ""),
            u = o && a ? a + " " + o + " { " + c + " }" : c;
          return (
            (e = s),
            (n = o),
            (r = new RegExp("\\" + n + "\\b", "g")),
            (i = new RegExp("(\\" + n + "\\b){2,}")),
            d(a || !o ? "" : o, u)
          );
        }
        return (
          d.use(
            [].concat(l, [
              function (t, e, i) {
                2 === t &&
                  i.length &&
                  i[0].lastIndexOf(n) > 0 &&
                  (i[0] = i[0].replace(r, p));
              },
              h,
              function (t) {
                if (-2 === t) {
                  var e = f;
                  return (f = []), e;
                }
              },
            ])
          ),
          (m.hash = l.length
            ? l
                .reduce(function (t, e) {
                  return e.name || P(15), Y(t, e.name);
                }, 5381)
                .toString()
            : ""),
          m
        );
      }
      var rt = i.createContext(),
        it = (rt.Consumer, i.createContext()),
        ot = (it.Consumer, new H()),
        at = nt();
      function st() {
        return (0, i.useContext)(rt) || ot;
      }
      function ct() {
        return (0, i.useContext)(it) || at;
      }
      function ut(t) {
        var e = (0, i.useState)(t.stylisPlugins),
          n = e[0],
          r = e[1],
          o = st(),
          s = (0, i.useMemo)(
            function () {
              var e = o;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target]
          ),
          c = (0, i.useMemo)(
            function () {
              return nt({
                options: { prefix: !t.disableVendorPrefixes },
                plugins: n,
              });
            },
            [t.disableVendorPrefixes, n]
          );
        return (
          (0, i.useEffect)(
            function () {
              a()(n, t.stylisPlugins) || r(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          i.createElement(
            rt.Provider,
            { value: s },
            i.createElement(it.Provider, { value: c }, t.children)
          )
        );
      }
      var lt = (function () {
          function t(t, e) {
            var n = this;
            (this.inject = function (t, e) {
              void 0 === e && (e = at);
              var r = n.name + e.hash;
              t.hasNameForId(n.id, r) ||
                t.insertRules(n.id, r, e(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return P(12, String(n.name));
              }),
              (this.name = t),
              (this.id = "sc-keyframes-" + t),
              (this.rules = e);
          }
          return (
            (t.prototype.getName = function (t) {
              return void 0 === t && (t = at), this.name + t.hash;
            }),
            t
          );
        })(),
        dt = /([A-Z])/,
        ft = /([A-Z])/g,
        ht = /^ms-/,
        pt = function (t) {
          return "-" + t.toLowerCase();
        };
      function mt(t) {
        return dt.test(t) ? t.replace(ft, pt).replace(ht, "-ms-") : t;
      }
      var vt = function (t) {
        return null == t || !1 === t || "" === t;
      };
      function gt(t, e, n, r) {
        if (Array.isArray(t)) {
          for (var i, o = [], a = 0, s = t.length; a < s; a += 1)
            "" !== (i = gt(t[a], e, n, r)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return vt(t)
          ? ""
          : x(t)
          ? "." + t.styledComponentId
          : b(t)
          ? "function" != typeof (u = t) ||
            (u.prototype && u.prototype.isReactComponent) ||
            !e
            ? t
            : gt(t(e), e, n, r)
          : t instanceof lt
          ? n
            ? (t.inject(n, r), t.getName(r))
            : t
          : v(t)
          ? (function t(e, n) {
              var r,
                i,
                o = [];
              for (var a in e)
                e.hasOwnProperty(a) &&
                  !vt(e[a]) &&
                  ((Array.isArray(e[a]) && e[a].isCss) || b(e[a])
                    ? o.push(mt(a) + ":", e[a], ";")
                    : v(e[a])
                    ? o.push.apply(o, t(e[a], a))
                    : o.push(
                        mt(a) +
                          ": " +
                          ((r = a),
                          (null == (i = e[a]) ||
                          "boolean" == typeof i ||
                          "" === i
                            ? ""
                            : "number" != typeof i || 0 === i || r in c
                            ? String(i).trim()
                            : i + "px") + ";")
                      ));
              return n ? [n + " {"].concat(o, ["}"]) : o;
            })(t)
          : t.toString();
        var u;
      }
      var yt = function (t) {
        return Array.isArray(t) && (t.isCss = !0), t;
      };
      function bt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return b(t) || v(t)
          ? yt(gt(m(g, [t].concat(n))))
          : 0 === n.length && 1 === t.length && "string" == typeof t[0]
          ? t
          : yt(gt(m(t, n)));
      }
      new Set();
      var wt = function (t, e, n) {
          return (
            void 0 === n && (n = y),
            (t.theme !== n.theme && t.theme) || e || n.theme
          );
        },
        xt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        St = /(^-|-$)/g;
      function Ct(t) {
        return t.replace(xt, "-").replace(St, "");
      }
      var Et = function (t) {
        return G(K(t) >>> 0);
      };
      function kt(t) {
        return "string" == typeof t && !0;
      }
      var Pt = function (t) {
          return (
            "function" == typeof t ||
            ("object" == typeof t && null !== t && !Array.isArray(t))
          );
        },
        Ot = function (t) {
          return "__proto__" !== t && "constructor" !== t && "prototype" !== t;
        };
      function At(t, e, n) {
        var r = t[n];
        Pt(e) && Pt(r) ? Tt(r, e) : (t[n] = e);
      }
      function Tt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        for (var i = 0, o = n; i < o.length; i++) {
          var a = o[i];
          if (Pt(a)) for (var s in a) Ot(s) && At(t, a[s], s);
        }
        return t;
      }
      var _t = i.createContext();
      _t.Consumer;
      function jt(t) {
        var e = (0, i.useContext)(_t),
          n = (0, i.useMemo)(
            function () {
              return (function (t, e) {
                return t
                  ? b(t)
                    ? t(e)
                    : Array.isArray(t) || "object" != typeof t
                    ? P(8)
                    : e
                    ? p({}, e, {}, t)
                    : t
                  : P(14);
              })(t.theme, e);
            },
            [t.theme, e]
          );
        return t.children
          ? i.createElement(_t.Provider, { value: n }, t.children)
          : null;
      }
      var Rt = {};
      function Mt(t, e, n) {
        var r = x(t),
          o = !kt(t),
          a = e.attrs,
          s = void 0 === a ? g : a,
          c = e.componentId,
          u =
            void 0 === c
              ? (function (t, e) {
                  var n = "string" != typeof t ? "sc" : Ct(t);
                  Rt[n] = (Rt[n] || 0) + 1;
                  var r = n + "-" + Et("5.3.5" + n + Rt[n]);
                  return e ? e + "-" + r : r;
                })(e.displayName, e.parentComponentId)
              : c,
          d = e.displayName,
          h =
            void 0 === d
              ? (function (t) {
                  return kt(t) ? "styled." + t : "Styled(" + w(t) + ")";
                })(t)
              : d,
          m =
            e.displayName && e.componentId
              ? Ct(e.displayName) + "-" + e.componentId
              : e.componentId || u,
          v =
            r && t.attrs
              ? Array.prototype.concat(t.attrs, s).filter(Boolean)
              : s,
          S = e.shouldForwardProp;
        r &&
          t.shouldForwardProp &&
          (S = e.shouldForwardProp
            ? function (n, r, i) {
                return (
                  t.shouldForwardProp(n, r, i) && e.shouldForwardProp(n, r, i)
                );
              }
            : t.shouldForwardProp);
        var C,
          E = new Q(n, m, r ? t.componentStyle : void 0),
          k = E.isStatic && 0 === s.length,
          P = function (t, e) {
            return (function (t, e, n, r) {
              var o = t.attrs,
                a = t.componentStyle,
                s = t.defaultProps,
                c = t.foldedComponentIds,
                u = t.shouldForwardProp,
                d = t.styledComponentId,
                f = t.target,
                h = (function (t, e, n) {
                  void 0 === t && (t = y);
                  var r = p({}, e, { theme: t }),
                    i = {};
                  return (
                    n.forEach(function (t) {
                      var e,
                        n,
                        o,
                        a = t;
                      for (e in (b(a) && (a = a(r)), a))
                        r[e] = i[e] =
                          "className" === e
                            ? ((n = i[e]),
                              (o = a[e]),
                              n && o ? n + " " + o : n || o)
                            : a[e];
                    }),
                    [r, i]
                  );
                })(wt(e, (0, i.useContext)(_t), s) || y, e, o),
                m = h[0],
                v = h[1],
                g = (function (t, e, n, r) {
                  var i = st(),
                    o = ct();
                  return e
                    ? t.generateAndInjectStyles(y, i, o)
                    : t.generateAndInjectStyles(n, i, o);
                })(a, r, m),
                w = n,
                x = v.$as || e.$as || v.as || e.as || f,
                S = kt(x),
                C = v !== e ? p({}, e, {}, v) : e,
                E = {};
              for (var k in C)
                "$" !== k[0] &&
                  "as" !== k &&
                  ("forwardedAs" === k
                    ? (E.as = C[k])
                    : (u ? u(k, l, x) : !S || l(k)) && (E[k] = C[k]));
              return (
                e.style &&
                  v.style !== e.style &&
                  (E.style = p({}, e.style, {}, v.style)),
                (E.className = Array.prototype
                  .concat(c, d, g !== d ? g : null, e.className, v.className)
                  .filter(Boolean)
                  .join(" ")),
                (E.ref = w),
                (0, i.createElement)(x, E)
              );
            })(C, t, e, k);
          };
        return (
          (P.displayName = h),
          ((C = i.forwardRef(P)).attrs = v),
          (C.componentStyle = E),
          (C.displayName = h),
          (C.shouldForwardProp = S),
          (C.foldedComponentIds = r
            ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId)
            : g),
          (C.styledComponentId = m),
          (C.target = r ? t.target : t),
          (C.withComponent = function (t) {
            var r = e.componentId,
              i = (function (t, e) {
                if (null == t) return {};
                var n,
                  r,
                  i = {},
                  o = Object.keys(t);
                for (r = 0; r < o.length; r++)
                  (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i;
              })(e, ["componentId"]),
              o = r && r + "-" + (kt(t) ? t : Ct(w(t)));
            return Mt(t, p({}, i, { attrs: v, componentId: o }), n);
          }),
          Object.defineProperty(C, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = r ? Tt({}, t.defaultProps, e) : e;
            },
          }),
          (C.toString = function () {
            return "." + C.styledComponentId;
          }),
          o &&
            f()(C, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          C
        );
      }
      var It = function (t) {
        return (function t(e, n, i) {
          if ((void 0 === i && (i = y), !(0, r.isValidElementType)(n)))
            return P(1, String(n));
          var o = function () {
            return e(n, i, bt.apply(void 0, arguments));
          };
          return (
            (o.withConfig = function (r) {
              return t(e, n, p({}, i, {}, r));
            }),
            (o.attrs = function (r) {
              return t(
                e,
                n,
                p({}, i, {
                  attrs: Array.prototype.concat(i.attrs, r).filter(Boolean),
                })
              );
            }),
            o
          );
        })(Mt, t);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan",
      ].forEach(function (t) {
        It[t] = It(t);
      });
      var Lt = (function () {
        function t(t, e) {
          (this.rules = t),
            (this.componentId = e),
            (this.isStatic = X(t)),
            H.registerId(this.componentId + 1);
        }
        var e = t.prototype;
        return (
          (e.createStyles = function (t, e, n, r) {
            var i = r(gt(this.rules, e, n, r).join(""), ""),
              o = this.componentId + t;
            n.insertRules(o, o, i);
          }),
          (e.removeStyles = function (t, e) {
            e.clearRules(this.componentId + t);
          }),
          (e.renderStyles = function (t, e, n, r) {
            t > 2 && H.registerId(this.componentId + t),
              this.removeStyles(t, n),
              this.createStyles(t, e, n, r);
          }),
          t
        );
      })();
      function Vt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var o = bt.apply(void 0, [t].concat(n)),
          a = "sc-global-" + Et(JSON.stringify(o)),
          s = new Lt(o, a);
        function c(t) {
          var e = st(),
            n = ct(),
            r = (0, i.useContext)(_t),
            o = (0, i.useRef)(e.allocateGSInstance(a)).current;
          return (
            e.server && u(o, t, e, r, n),
            (0, i.useLayoutEffect)(
              function () {
                if (!e.server)
                  return (
                    u(o, t, e, r, n),
                    function () {
                      return s.removeStyles(o, e);
                    }
                  );
              },
              [o, t, e, r, n]
            ),
            null
          );
        }
        function u(t, e, n, r, i) {
          if (s.isStatic) s.renderStyles(t, k, n, i);
          else {
            var o = p({}, e, { theme: wt(e, r, c.defaultProps) });
            s.renderStyles(t, o, n, i);
          }
        }
        return i.memo(c);
      }
      function Dt(t) {
        for (
          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var i = bt.apply(void 0, [t].concat(n)).join(""),
          o = Et(i);
        return new lt(o, i);
      }
      !(function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString();
            if (!e) return "";
            var n = Z();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                S + '="true"',
                'data-styled-version="5.3.5"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              e +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return t.sealed ? P(2) : t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var e;
              if (t.sealed) return P(2);
              var n =
                  (((e = {})[S] = ""),
                  (e["data-styled-version"] = "5.3.5"),
                  (e.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  e),
                r = Z();
              return (
                r && (n.nonce = r),
                [i.createElement("style", p({}, n, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new H({ isServer: !0 })),
            (this.sealed = !1);
        }
        var e = t.prototype;
        (e.collectStyles = function (t) {
          return this.sealed
            ? P(2)
            : i.createElement(ut, { sheet: this.instance }, t);
        }),
          (e.interleaveWithNodeStream = function (t) {
            return P(3);
          });
      })();
      var Zt = It;
    },
    943: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    7568: function (t, e, n) {
      "use strict";
      function r(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (u) {
          return void n(u);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, o) {
            var a = t.apply(e, n);
            function s(t) {
              r(a, i, o, s, c, "next", t);
            }
            function c(t) {
              r(a, i, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      n.d(e, {
        Z: function () {
          return i;
        },
      });
    },
    4924: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    3375: function (t, e, n) {
      "use strict";
      function r(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    6042: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(4924);
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            i.forEach(function (e) {
              (0, r.Z)(t, e, n[e]);
            });
        }
        return t;
      }
    },
    9396: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(t);
                  e &&
                    (r = r.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              }),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    9534: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    828: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(3375);
      var i = n(1566);
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (0, r.Z)(t, e) ||
          (0, i.Z)(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    7297: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    1566: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(943);
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return (0, r.Z)(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(n)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.Z)(t, e)
              : void 0
          );
        }
      }
    },
    2064: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return a;
        },
      });
      var r = n(3234),
        i = n(406),
        o = n(8150);
      function a(t, e, n = {}) {
        const a = (0, i.i)(t) ? t : (0, r.B)(t);
        return (
          (0, o.b8)("", a, e, n),
          { stop: () => a.stop(), isAnimating: () => a.isAnimating() }
        );
      }
    },
    6513: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return u;
        },
      });
      var r = n(4394),
        i = n(7107),
        o = n(5759);
      function a() {
        let t = !1;
        const e = [],
          n = new Set(),
          a = {
            subscribe: (t) => (
              n.add(t),
              () => {
                n.delete(t);
              }
            ),
            start(r, o) {
              if (t) {
                const t = [];
                return (
                  n.forEach((e) => {
                    t.push((0, i.d5)(e, r, { transitionOverride: o }));
                  }),
                  Promise.all(t)
                );
              }
              return new Promise((t) => {
                e.push({ animation: [r, o], resolve: t });
              });
            },
            set: (e) => (
              (0, r.k)(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              n.forEach((t) => {
                (0, o.gg)(t, e);
              })
            ),
            stop() {
              n.forEach((t) => {
                (0, i.p_)(t);
              });
            },
            mount: () => (
              (t = !0),
              e.forEach(({ animation: t, resolve: e }) => {
                a.start(...t).then(e);
              }),
              () => {
                (t = !1), a.stop();
              }
            ),
          };
        return a;
      }
      var s = n(7294),
        c = n(6681);
      const u = function () {
        const t = (0, c.h)(a);
        return (0, s.useEffect)(t.mount, []), t;
      };
    },
    2445: function (t, e, n) {
      "use strict";
      function r(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      n.d(e, {
        H: function () {
          return r;
        },
      });
    },
    8488: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
      });
      const r = (t) => Array.isArray(t);
    },
    8150: function (t, e, n) {
      "use strict";
      n.d(e, {
        ev: function () {
          return V;
        },
        b8: function () {
          return D;
        },
      });
      var r = n(6228),
        i = n(9296),
        o = n(4735);
      var a = n(6917),
        s = n(4394),
        c = n(4710);
      const u = (t, e) => 1 - 3 * e + 3 * t,
        l = (t, e) => 3 * e - 6 * t,
        d = (t) => 3 * t,
        f = (t, e, n) => ((u(e, n) * t + l(e, n)) * t + d(e)) * t,
        h = (t, e, n) => 3 * u(e, n) * t * t + 2 * l(e, n) * t + d(e);
      const p = 0.1;
      function m(t, e, n, r) {
        if (t === e && n === r) return c.GE;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = f(a * p, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += p;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * p,
            s = h(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = h(e, n, r);
                  if (0 === i) return e;
                  e -= (f(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = f(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + p, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : f(o(t), e, r));
      }
      const v = {
          linear: c.GE,
          easeIn: c.YQ,
          easeInOut: c.mZ,
          easeOut: c.Vv,
          circIn: c.Z7,
          circInOut: c.X7,
          circOut: c.Bn,
          backIn: c.G2,
          backInOut: c.XL,
          backOut: c.CG,
          anticipate: c.LU,
          bounceIn: c.h9,
          bounceInOut: c.yD,
          bounceOut: c.gJ,
        },
        g = (t) => {
          if (Array.isArray(t)) {
            (0, s.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            const [e, n, r, i] = t;
            return m(e, n, r, i);
          }
          return "string" === typeof t
            ? ((0, s.k)(void 0 !== v[t], `Invalid easing type '${t}'`), v[t])
            : t;
        };
      var y = n(8407);
      const b = (t, e) =>
        "zIndex" !== t &&
        (!("number" !== typeof e && !Array.isArray(e)) ||
          !("string" !== typeof e || !y.P.test(e) || e.startsWith("url(")));
      var w = n(8488);
      const x = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        S = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        C = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        E = (t) => ({ type: "keyframes", duration: 0.8, values: t }),
        k = {
          x: x,
          y: x,
          z: x,
          rotate: x,
          rotateX: x,
          rotateY: x,
          rotateZ: x,
          scaleX: S,
          scaleY: S,
          scale: S,
          opacity: C,
          backgroundColor: C,
          color: C,
          default: S,
        },
        P = (t, e) => {
          let n;
          return (n = (0, w.C)(e) ? E : k[t] || k.default), { to: e, ...n(e) };
        };
      var O = n(9135);
      const A = !1;
      var T = n(8715);
      let _ = !1;
      function j({ ease: t, times: e, yoyo: n, flip: r, loop: i, ...o }) {
        const c = { ...o };
        return (
          e && (c.offset = e),
          o.duration && (c.duration = (0, a.w)(o.duration)),
          o.repeatDelay && (c.repeatDelay = (0, a.w)(o.repeatDelay)),
          t &&
            (c.ease = ((t) => Array.isArray(t) && "number" !== typeof t[0])(t)
              ? t.map(g)
              : g(t)),
          "tween" === o.type && (c.type = "keyframes"),
          (n || i || r) &&
            ((0, s.K)(
              !_,
              "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
            ),
            (_ = !0),
            n
              ? (c.repeatType = "reverse")
              : i
              ? (c.repeatType = "loop")
              : r && (c.repeatType = "mirror"),
            (c.repeat = i || n || r || o.repeat)),
          "spring" !== o.type && (c.type = "keyframes"),
          c
        );
      }
      function R(t, e, n) {
        return (
          Array.isArray(e.to) && void 0 === t.duration && (t.duration = 0.8),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = [...t.to]), (t.to[0] = t.from));
          })(e),
          (function ({
            when: t,
            delay: e,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: o,
            repeatType: a,
            repeatDelay: s,
            from: c,
            ...u
          }) {
            return !!Object.keys(u).length;
          })(t) || (t = { ...t, ...P(n, e.to) }),
          { ...e, ...j(t) }
        );
      }
      function M(t, e, n, a, c) {
        const u = V(a, t) || {};
        let l = void 0 !== u.from ? u.from : e.get();
        const d = b(t, n);
        "none" === l && d && "string" === typeof n
          ? (l = (0, O.T)(t, n))
          : I(l) && "string" === typeof n
          ? (l = L(n))
          : !Array.isArray(n) && I(n) && "string" === typeof l && (n = L(l));
        const f = b(t, l);
        return (
          (0, s.K)(
            f === d,
            `You are trying to animate ${t} from "${l}" to "${n}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${n} via the \`style\` property.`
          ),
          f && d && !1 !== u.type
            ? function () {
                const a = {
                  from: l,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: c,
                  onUpdate: (t) => e.set(t),
                };
                return "inertia" === u.type || "decay" === u.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: a,
                      power: s = 0.8,
                      timeConstant: c = 750,
                      bounceStiffness: u = 500,
                      bounceDamping: l = 10,
                      restDelta: d = 1,
                      modifyTarget: f,
                      driver: h,
                      onUpdate: p,
                      onComplete: m,
                      onStop: v,
                    }) {
                      let g;
                      function y(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== a && t > a)
                        );
                      }
                      function b(t) {
                        return void 0 === n
                          ? a
                          : void 0 === a || Math.abs(n - t) < Math.abs(a - t)
                          ? n
                          : a;
                      }
                      function w(t) {
                        null === g || void 0 === g || g.stop(),
                          (g = (0, r.j)(
                            Object.assign(Object.assign({}, t), {
                              driver: h,
                              onUpdate: (e) => {
                                var n;
                                null === p || void 0 === p || p(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: m,
                              onStop: v,
                            })
                          ));
                      }
                      function x(t) {
                        w(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: u,
                              damping: l,
                              restDelta: d,
                            },
                            t
                          )
                        );
                      }
                      if (y(t)) x({ from: t, velocity: e, to: b(t) });
                      else {
                        let r = s * e + t;
                        "undefined" !== typeof f && (r = f(r));
                        const a = b(r),
                          u = a === n ? -1 : 1;
                        let l, h;
                        const p = (t) => {
                          (l = h),
                            (h = t),
                            (e = (0, i.R)(t - l, (0, o.$B)().delta)),
                            ((1 === u && t > a) || (-1 === u && t < a)) &&
                              x({ from: t, to: a, velocity: e });
                        };
                        w({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: c,
                          power: s,
                          restDelta: d,
                          modifyTarget: f,
                          onUpdate: y(r) ? p : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === g || void 0 === g ? void 0 : g.stop(),
                      };
                    })({ ...a, ...u })
                  : (0, r.j)({
                      ...R(u, a, t),
                      onUpdate: (t) => {
                        a.onUpdate(t), u.onUpdate && u.onUpdate(t);
                      },
                      onComplete: () => {
                        a.onComplete(), u.onComplete && u.onComplete();
                      },
                    });
              }
            : function () {
                const t = (0, T.Y)(n);
                return (
                  e.set(t),
                  c(),
                  u.onUpdate && u.onUpdate(t),
                  u.onComplete && u.onComplete(),
                  { stop: () => {} }
                );
              }
        );
      }
      function I(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function L(t) {
        return "number" === typeof t ? 0 : (0, O.T)("", t);
      }
      function V(t, e) {
        return t[e] || t.default || t;
      }
      function D(t, e, n, r = {}) {
        return (
          A && (r = { type: !1 }),
          e.start((i) => {
            let o, s;
            const c = M(t, e, n, r, i),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (V(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = () => (s = c());
            return (
              u ? (o = window.setTimeout(l, (0, a.w)(u))) : l(),
              () => {
                clearTimeout(o), s && s.stop();
              }
            );
          })
        );
      }
    },
    5820: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return y;
        },
      });
      var r = n(7294),
        i = n(9304),
        o = n(4735),
        a = n(8868);
      function s() {
        const t = (0, r.useRef)(!1);
        return (
          (0, a.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var c = n(240),
        u = n(6681);
      class l extends r.Component {
        getSnapshotBeforeUpdate(t) {
          const e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            const t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: t, isPresent: e }) {
        const n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            const { width: t, height: r, top: a, left: s } = o.current;
            if (e || !i.current || !t || !r) return;
            i.current.dataset.motionPopId = n;
            const c = document.createElement("style");
            return (
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(
                  `\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${s}px !important;\n          }\n        `
                ),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [e]),
          r.createElement(
            l,
            { isPresent: e, childRef: i, sizeRef: o },
            r.cloneElement(t, { ref: i })
          )
        );
      }
      const f = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: a,
        mode: s,
      }) => {
        const l = (0, u.h)(h),
          f = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: f,
              initial: e,
              isPresent: n,
              custom: o,
              onExitComplete: (t) => {
                l.set(t, !0);
                for (const e of l.values()) if (!e) return;
                i && i();
              },
              register: (t) => (l.set(t, !1), () => l.delete(t)),
            }),
            a ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            l.forEach((t, e) => l.set(e, !1));
          }, [n]),
          r.useEffect(() => {
            !n && !l.size && i && i();
          }, [n]),
          "popLayout" === s && (t = r.createElement(d, { isPresent: n }, t)),
          r.createElement(c.O.Provider, { value: p }, t)
        );
      };
      function h() {
        return new Map();
      }
      var p = n(5364),
        m = n(5411),
        v = n(6034);
      const g = (t) => t.key || "";
      const y = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: c,
        exitBeforeEnter: u,
        presenceAffectsLayout: l = !0,
        mode: d = "sync",
      }) => {
        u &&
          ((d = "wait"),
          (0, v.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
        let [h] = (function () {
          const t = s(),
            [e, n] = (0, r.useState)(0),
            i = (0, r.useCallback)(() => {
              t.current && n(e + 1);
            }, [e]);
          return [(0, r.useCallback)(() => o.ZP.postRender(i), [i]), e];
        })();
        const y = (0, r.useContext)(p.p).forceRender;
        y && (h = y);
        const b = s(),
          w = (function (t) {
            const e = [];
            return (
              r.Children.forEach(t, (t) => {
                (0, r.isValidElement)(t) && e.push(t);
              }),
              e
            );
          })(t);
        let x = w;
        const S = new Set(),
          C = (0, r.useRef)(x),
          E = (0, r.useRef)(new Map()).current,
          k = (0, r.useRef)(!0);
        if (
          ((0, a.L)(() => {
            (k.current = !1),
              (function (t, e) {
                t.forEach((t) => {
                  const n = g(t);
                  e.set(n, t);
                });
              })(w, E),
              (C.current = x);
          }),
          (0, m.z)(() => {
            (k.current = !0), E.clear(), S.clear();
          }),
          k.current)
        )
          return r.createElement(
            r.Fragment,
            null,
            x.map((t) =>
              r.createElement(
                f,
                {
                  key: g(t),
                  isPresent: !0,
                  initial: !!n && void 0,
                  presenceAffectsLayout: l,
                  mode: d,
                },
                t
              )
            )
          );
        x = [...x];
        const P = C.current.map(g),
          O = w.map(g),
          A = P.length;
        for (let r = 0; r < A; r++) {
          const t = P[r];
          -1 === O.indexOf(t) && S.add(t);
        }
        return (
          "wait" === d && S.size && (x = []),
          S.forEach((t) => {
            if (-1 !== O.indexOf(t)) return;
            const n = E.get(t);
            if (!n) return;
            const i = P.indexOf(t);
            x.splice(
              i,
              0,
              r.createElement(
                f,
                {
                  key: g(n),
                  isPresent: !1,
                  onExitComplete: () => {
                    E.delete(t), S.delete(t);
                    const e = C.current.findIndex((e) => e.key === t);
                    if ((C.current.splice(e, 1), !S.size)) {
                      if (((C.current = w), !1 === b.current)) return;
                      h(), c && c();
                    }
                  },
                  custom: e,
                  presenceAffectsLayout: l,
                  mode: d,
                },
                n
              )
            );
          }),
          (x = x.map((t) => {
            const e = t.key;
            return S.has(e)
              ? t
              : r.createElement(
                  f,
                  {
                    key: g(t),
                    isPresent: !0,
                    presenceAffectsLayout: l,
                    mode: d,
                  },
                  t
                );
          })),
          "production" !== i.O &&
            "wait" === d &&
            x.length > 1 &&
            console.warn(
              'You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'
            ),
          r.createElement(
            r.Fragment,
            null,
            S.size ? x : x.map((t) => (0, r.cloneElement)(t))
          )
        );
      };
    },
    3093: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return s;
        },
      });
      var r = n(7294),
        i = n(6014),
        o = n(1492),
        a = n(6681);
      function s({ children: t, isValidProp: e, ...n }) {
        e && (0, o.K)(e),
          ((n = { ...(0, r.useContext)(i._), ...n }).isStatic = (0, a.h)(
            () => n.isStatic
          ));
        const s = (0, r.useMemo)(
          () => n,
          [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
        );
        return r.createElement(i._.Provider, { value: s }, t);
      }
    },
    5364: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      const r = (0, n(7294).createContext)({});
    },
    398: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return r;
        },
      });
      const r = (0, n(7294).createContext)({ strict: !1 });
    },
    6014: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      const r = (0, n(7294).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      const r = (0, n(7294).createContext)(null);
    },
    1705: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return r;
        },
      });
      const r = (0, n(7294).createContext)({});
    },
    9442: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return i;
        },
      });
      const r = (t) => ({ isEnabled: (e) => t.some((t) => !!e[t]) }),
        i = {
          measureLayout: r(["layout", "layoutId", "drag"]),
          animation: r([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: r(["exit"]),
          drag: r(["drag", "dragControls"]),
          focus: r(["whileFocus"]),
          hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: r(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
    },
    1879: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return i;
        },
      });
      var r = n(9442);
      function i(t) {
        for (const e in t)
          "projectionNodeConstructor" === e
            ? (r.A.projectionNodeConstructor = t[e])
            : (r.A[e].Component = t[e]);
      }
    },
    6816: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return o;
        },
      });
      var r = n(4561),
        i = n(4714);
      function o(t, { layout: e, layoutId: n }) {
        return (
          i.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!r.P[t] || "opacity" === t))
        );
      }
    },
    3083: function (t, e, n) {
      "use strict";
      n.d(e, {
        V: function () {
          return r;
        },
      });
      const r = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    },
    4561: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return i;
        },
        P: function () {
          return r;
        },
      });
      const r = {};
      function i(t) {
        Object.assign(r, t);
      }
    },
    1208: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return Y;
        },
      });
      var r = n(7294),
        i = n(6014);
      const o = (0, r.createContext)({});
      var a = n(240),
        s = n(8868),
        c = n(398);
      function u(t, e, n, u) {
        const l = (0, r.useContext)(o).visualElement,
          d = (0, r.useContext)(c.u),
          f = (0, r.useContext)(a.O),
          h = (0, r.useContext)(i._).reducedMotion,
          p = (0, r.useRef)(void 0);
        (u = u || d.renderer),
          !p.current &&
            u &&
            (p.current = u(t, {
              visualState: e,
              parent: l,
              props: n,
              presenceId: f ? f.id : void 0,
              blockInitialAnimation: !!f && !1 === f.initial,
              reducedMotionConfig: h,
            }));
        const m = p.current;
        return (
          (0, s.L)(() => {
            m && m.syncRender();
          }),
          (0, r.useEffect)(() => {
            m && m.animationState && m.animationState.animateChanges();
          }),
          (0, s.L)(() => () => m && m.notifyUnmount(), []),
          m
        );
      }
      var l = n(1804);
      var d = n(7732),
        f = n(7504);
      function h(t) {
        const { initial: e, animate: n } = (function (t, e) {
          if ((0, f.G)(t)) {
            const { initial: e, animate: n } = t;
            return {
              initial: !1 === e || (0, d.$)(e) ? e : void 0,
              animate: (0, d.$)(n) ? n : void 0,
            };
          }
          return !1 !== t.inherit ? e : {};
        })(t, (0, r.useContext)(o));
        return (0, r.useMemo)(() => ({ initial: e, animate: n }), [p(e), p(n)]);
      }
      function p(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var m = n(9442),
        v = n(1879),
        g = n(1741),
        y = n(6681),
        b = n(3083);
      let w = 1;
      var x = n(5364);
      class S extends r.Component {
        getSnapshotBeforeUpdate() {
          const { visualElement: t, props: e } = this.props;
          return t && t.setProps(e), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      var C = n(1705);
      const E = Symbol.for("motionComponentSymbol");
      function k({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: a,
        useVisualState: s,
        Component: d,
      }) {
        t && (0, v.K)(t);
        const f = (0, r.forwardRef)(function (f, p) {
          const v = { ...(0, r.useContext)(i._), ...f, layoutId: P(f) },
            { isStatic: x } = v;
          let E = null;
          const k = h(f),
            O = x
              ? void 0
              : (0, y.h)(() => {
                  if (b.V.hasEverUpdated) return w++;
                }),
            A = s(f, x);
          if (!x && g.j) {
            k.visualElement = u(d, A, v, e);
            const i = (0, r.useContext)(c.u).strict,
              o = (0, r.useContext)(C.g);
            k.visualElement &&
              (E = k.visualElement.loadFeatures(
                v,
                i,
                t,
                O,
                n || m.A.projectionNodeConstructor,
                o
              ));
          }
          return r.createElement(
            S,
            { visualElement: k.visualElement, props: v },
            E,
            r.createElement(
              o.Provider,
              { value: k },
              a(
                d,
                f,
                O,
                (function (t, e, n) {
                  return (0, r.useCallback)(
                    (r) => {
                      r && t.mount && t.mount(r),
                        e && (r ? e.mount(r) : e.unmount()),
                        n &&
                          ("function" === typeof n
                            ? n(r)
                            : (0, l.I)(n) && (n.current = r));
                    },
                    [e]
                  );
                })(A, k.visualElement, p),
                A,
                x,
                k.visualElement
              )
            )
          );
        });
        return (f[E] = d), f;
      }
      function P({ layoutId: t }) {
        const e = (0, r.useContext)(x.p).id;
        return e && void 0 !== t ? e + "-" + t : t;
      }
      var O = n(2627),
        A = n(6816),
        T = n(406),
        _ = n(8057);
      const j = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      });
      function R(t, e, n) {
        for (const r in e) (0, T.i)(e[r]) || (0, A.j)(r, n) || (t[r] = e[r]);
      }
      function M(t, e, n) {
        const i = {};
        return (
          R(i, t.style || {}, t),
          Object.assign(
            i,
            (function ({ transformTemplate: t }, e, n) {
              return (0, r.useMemo)(() => {
                const r = {
                  style: {},
                  transform: {},
                  transformKeys: [],
                  transformOrigin: {},
                  vars: {},
                };
                return (
                  (0, _.r)(r, e, { enableHardwareAcceleration: !n }, t),
                  Object.assign({}, r.vars, r.style)
                );
              }, [e]);
            })(t, e, n)
          ),
          t.transformValues ? t.transformValues(i) : i
        );
      }
      function I(t, e, n) {
        const r = {},
          i = M(t, e, n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var L = n(1492),
        V = n(5415);
      const D = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
        attrs: {},
      });
      function Z(t, e) {
        const n = (0, r.useMemo)(() => {
          const n = {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
            attrs: {},
          };
          return (
            (0, V.i)(
              n,
              e,
              { enableHardwareAcceleration: !1 },
              t.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          );
        }, [e]);
        if (t.style) {
          const e = {};
          R(e, t.style, t), (n.style = { ...e, ...n.style });
        }
        return n;
      }
      function z(t = !1) {
        return (e, n, i, o, { latestValues: a }, s) => {
          const c = ((0, O.q)(e) ? Z : I)(n, a, s),
            u = { ...(0, L.L)(n, "string" === typeof e, t), ...c, ref: o };
          return i && (u["data-projection-id"] = i), (0, r.createElement)(e, u);
        };
      }
      var B = n(8504),
        N = n(6832),
        F = n(2445),
        $ = n(9432),
        U = n(6399);
      const H = (t) => (e, n) => {
        const i = (0, r.useContext)(o),
          s = (0, r.useContext)(a.O),
          c = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              r,
              i,
              o
            ) {
              const a = { latestValues: q(r, i, o, t), renderState: e() };
              return n && (a.mount = (t) => n(r, t, a)), a;
            })(t, e, i, s);
        return n ? c() : (0, y.h)(c);
      };
      function q(t, e, n, r) {
        const i = {},
          o = r(t);
        for (const f in o) i[f] = (0, U.b)(o[f]);
        let { initial: a, animate: s } = t;
        const c = (0, f.G)(t),
          u = (0, f.M)(t);
        e &&
          u &&
          !c &&
          !1 !== t.inherit &&
          (void 0 === a && (a = e.initial), void 0 === s && (s = e.animate));
        let l = !!n && !1 === n.initial;
        l = l || !1 === a;
        const d = l ? s : a;
        if (d && "boolean" !== typeof d && !(0, F.H)(d)) {
          (Array.isArray(d) ? d : [d]).forEach((e) => {
            const n = (0, $.o)(t, e);
            if (!n) return;
            const { transitionEnd: r, transition: o, ...a } = n;
            for (const t in a) {
              let e = a[t];
              if (Array.isArray(e)) {
                e = e[l ? e.length - 1 : 0];
              }
              null !== e && (i[t] = e);
            }
            for (const t in r) i[t] = r[t];
          });
        }
        return i;
      }
      const W = {
        useVisualState: H({
          scrapeMotionValuesFromProps: N.U,
          createRenderState: D,
          onMount: (t, e, { renderState: n, latestValues: r }) => {
            try {
              n.dimensions =
                "function" === typeof e.getBBox
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch (i) {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            (0, V.i)(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              t.transformTemplate
            ),
              (0, B.K)(e, n);
          },
        }),
      };
      const G = {
        useVisualState: H({
          scrapeMotionValuesFromProps: n(189).U,
          createRenderState: j,
        }),
      };
      const Y = (function (t) {
        function e(e, n = {}) {
          return k(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        const n = new Map();
        return new Proxy(e, {
          get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r)),
        });
      })(function (t, { forwardMotionProps: e = !1 }, n, r, i) {
        return {
          ...((0, O.q)(t) ? W : G),
          preloadedFeatures: n,
          useRender: z(e),
          createVisualElement: r,
          projectionNodeConstructor: i,
          Component: t,
        };
      });
    },
    3193: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return r;
        },
      });
      const r = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    1492: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return s;
        },
        K: function () {
          return a;
        },
      });
      const r = new Set([
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function i(t) {
        return r.has(t);
      }
      let o = (t) => !i(t);
      function a(t) {
        t && (o = (e) => (e.startsWith("on") ? !i(e) : t(e)));
      }
      try {
        a(require("@emotion/is-prop-valid").default);
      } catch (c) {}
      function s(t, e, n) {
        const r = {};
        for (const a in t)
          (o(a) ||
            (!0 === n && i(a)) ||
            (!e && !i(a)) ||
            (t.draggable && a.startsWith("onDrag"))) &&
            (r[a] = t[a]);
        return r;
      }
    },
    7630: function (t, e, n) {
      "use strict";
      function r(t) {
        return t.startsWith("--");
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    2627: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return i;
        },
      });
      const r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function i(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(r.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
    },
    9135: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return a;
        },
      });
      var r = n(5738),
        i = n(8407),
        o = n(2728);
      function a(t, e) {
        var n;
        let a = (0, o.A)(t);
        return (
          a !== r.h && (a = i.P),
          null === (n = a.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(a, e)
        );
      }
    },
    2728: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var r = n(7405),
        i = n(5738);
      const o = {
          ...n(6173).j,
          color: r.$,
          backgroundColor: r.$,
          outlineColor: r.$,
          fill: r.$,
          stroke: r.$,
          borderColor: r.$,
          borderTopColor: r.$,
          borderRightColor: r.$,
          borderBottomColor: r.$,
          borderLeftColor: r.$,
          filter: i.h,
          WebkitFilter: i.h,
        },
        a = (t) => o[t];
    },
    6440: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return a;
        },
        C: function () {
          return s;
        },
      });
      var r = n(1248),
        i = n(2969),
        o = n(8340);
      const a = [
          r.Rx,
          i.px,
          i.aQ,
          i.RW,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        s = (t) => a.find((0, o.l)(t));
    },
    6173: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return a;
        },
      });
      var r = n(2969),
        i = n(1248);
      const o = { ...i.Rx, transform: Math.round },
        a = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: o,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: o,
        };
    },
    8340: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return r;
        },
      });
      const r = (t) => (e) => e.test(t);
    },
    8057: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return u;
        },
      });
      var r = n(4714);
      const i = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        o = (t, e) => r._.indexOf(t) - r._.indexOf(e);
      var a = n(7630);
      const s = (t, e) => (e && "number" === typeof t ? e.transform(t) : t);
      var c = n(6173);
      function u(t, e, n, u) {
        const {
          style: l,
          vars: d,
          transform: f,
          transformKeys: h,
          transformOrigin: p,
        } = t;
        h.length = 0;
        let m = !1,
          v = !1,
          g = !0;
        for (const i in e) {
          const t = e[i];
          if ((0, a.o)(i)) {
            d[i] = t;
            continue;
          }
          const n = c.j[i],
            o = s(t, n);
          if (r.G.has(i)) {
            if (((m = !0), (f[i] = o), h.push(i), !g)) continue;
            t !== (n.default || 0) && (g = !1);
          } else i.startsWith("origin") ? ((v = !0), (p[i] = o)) : (l[i] = o);
        }
        if (
          (e.transform ||
            (m || u
              ? (l.transform = (function (
                  { transform: t, transformKeys: e },
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: r = !0,
                  },
                  a,
                  s
                ) {
                  let c = "";
                  e.sort(o);
                  for (const o of e) c += `${i[o] || o}(${t[o]}) `;
                  return (
                    n && !t.z && (c += "translateZ(0)"),
                    (c = c.trim()),
                    s ? (c = s(t, a ? "" : c)) : r && a && (c = "none"),
                    c
                  );
                })(t, n, g, u))
              : l.transform && (l.transform = "none")),
          v)
        ) {
          const { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = p;
          l.transformOrigin = `${t} ${e} ${n}`;
        }
      }
    },
    4242: function (t, e, n) {
      "use strict";
      function r(t, { style: e, vars: n }, r, i) {
        Object.assign(t.style, e, i && i.getProjectionStyles(r));
        for (const o in n) t.style.setProperty(o, n[o]);
      }
      n.d(e, {
        N: function () {
          return r;
        },
      });
    },
    189: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var r = n(6816),
        i = n(406);
      function o(t) {
        const { style: e } = t,
          n = {};
        for (const o in e) ((0, i.i)(e[o]) || (0, r.j)(o, t)) && (n[o] = e[o]);
        return n;
      }
    },
    4714: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return i;
        },
        _: function () {
          return r;
        },
      });
      const r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(r);
    },
    5415: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return c;
        },
      });
      var r = n(8057),
        i = n(2969);
      function o(t, e, n) {
        return "string" === typeof t ? t : i.px.transform(e + n * t);
      }
      const a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        s = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function c(
        t,
        {
          attrX: e,
          attrY: n,
          originX: c,
          originY: u,
          pathLength: l,
          pathSpacing: d = 1,
          pathOffset: f = 0,
          ...h
        },
        p,
        m
      ) {
        (0, r.r)(t, h, p, m), (t.attrs = t.style), (t.style = {});
        const { attrs: v, style: g, dimensions: y } = t;
        v.transform && (y && (g.transform = v.transform), delete v.transform),
          y &&
            (void 0 !== c || void 0 !== u || g.transform) &&
            (g.transformOrigin = (function (t, e, n) {
              return `${o(e, t.x, t.width)} ${o(n, t.y, t.height)}`;
            })(y, void 0 !== c ? c : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== e && (v.x = e),
          void 0 !== n && (v.y = n),
          void 0 !== l &&
            (function (t, e, n = 1, r = 0, o = !0) {
              t.pathLength = 1;
              const c = o ? a : s;
              t[c.offset] = i.px.transform(-r);
              const u = i.px.transform(e),
                l = i.px.transform(n);
              t[c.array] = `${u} ${l}`;
            })(v, l, d, f, !1);
      }
    },
    7302: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return r;
        },
      });
      const r = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
    },
    8504: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return a;
        },
      });
      var r = n(3193),
        i = n(4242),
        o = n(7302);
      function a(t, e, n, a) {
        (0, i.N)(t, e, void 0, a);
        for (const i in e.attrs)
          t.setAttribute(o.s.has(i) ? i : (0, r.D)(i), e.attrs[i]);
      }
    },
    6832: function (t, e, n) {
      "use strict";
      n.d(e, {
        U: function () {
          return o;
        },
      });
      var r = n(406),
        i = n(189);
      function o(t) {
        const e = (0, i.U)(t);
        for (const n in t)
          if ((0, r.i)(t[n])) {
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
          }
        return e;
      }
    },
    7107: function (t, e, n) {
      "use strict";
      n.d(e, {
        d5: function () {
          return c;
        },
        p_: function () {
          return d;
        },
      });
      var r = n(8150),
        i = n(5759),
        o = n(2248),
        a = n(4714),
        s = n(2490);
      function c(t, e, n = {}) {
        let r;
        if ((t.notifyAnimationStart(e), Array.isArray(e))) {
          const i = e.map((e) => u(t, e, n));
          r = Promise.all(i);
        } else if ("string" === typeof e) r = u(t, e, n);
        else {
          const i = "function" === typeof e ? (0, o.x)(t, e, n.custom) : e;
          r = l(t, i, n);
        }
        return r.then(() => t.notifyAnimationComplete(e));
      }
      function u(t, e, n = {}) {
        var r;
        const i = (0, o.x)(t, e, n.custom);
        let { transition: a = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (a = n.transitionOverride);
        const s = i ? () => l(t, i, n) : () => Promise.resolve(),
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? (r = 0) => {
                const {
                  delayChildren: i = 0,
                  staggerChildren: o,
                  staggerDirection: s,
                } = a;
                return (function (t, e, n = 0, r = 0, i = 1, o) {
                  const a = [],
                    s = (t.variantChildren.size - 1) * r,
                    c = 1 === i ? (t = 0) => t * r : (t = 0) => s - t * r;
                  return (
                    Array.from(t.variantChildren)
                      .sort(f)
                      .forEach((t, r) => {
                        a.push(
                          u(t, e, { ...o, delay: n + c(r) }).then(() =>
                            t.notifyAnimationComplete(e)
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(t, e, i + r, o, s, n);
              }
            : () => Promise.resolve(),
          { when: d } = a;
        if (d) {
          const [t, e] = "beforeChildren" === d ? [s, c] : [c, s];
          return t().then(e);
        }
        return Promise.all([s(), c(n.delay)]);
      }
      function l(t, e, { delay: n = 0, transitionOverride: o, type: c } = {}) {
        var u;
        let {
          transition: l = t.getDefaultTransition(),
          transitionEnd: d,
          ...f
        } = t.makeTargetAnimatable(e);
        const p = t.getValue("willChange");
        o && (l = o);
        const m = [],
          v =
            c &&
            (null === (u = t.animationState) || void 0 === u
              ? void 0
              : u.getState()[c]);
        for (const i in f) {
          const e = t.getValue(i),
            o = f[i];
          if (!e || void 0 === o || (v && h(v, i))) continue;
          let c = { delay: n, ...l };
          t.shouldReduceMotion &&
            a.G.has(i) &&
            (c = { ...c, type: !1, delay: 0 });
          let u = (0, r.b8)(i, e, o, c);
          (0, s.L)(p) && (p.add(i), (u = u.then(() => p.remove(i)))), m.push(u);
        }
        return Promise.all(m).then(() => {
          d && (0, i.CD)(t, d);
        });
      }
      function d(t) {
        t.forEachValue((t) => t.stop());
      }
      function f(t, e) {
        return t.sortNodePosition(e);
      }
      function h({ protectedKeys: t, needsAnimating: e }, n) {
        const r = t.hasOwnProperty(n) && !0 !== e[n];
        return (e[n] = !1), r;
      }
    },
    7504: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return a;
        },
        M: function () {
          return s;
        },
      });
      var r = n(2445),
        i = n(7732);
      const o = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function a(t) {
        return (0, r.H)(t.animate) || o.some((e) => (0, i.$)(t[e]));
      }
      function s(t) {
        return Boolean(a(t) || t.variants);
      }
    },
    7732: function (t, e, n) {
      "use strict";
      function r(t) {
        return "string" === typeof t || Array.isArray(t);
      }
      n.d(e, {
        $: function () {
          return r;
        },
      });
    },
    2248: function (t, e, n) {
      "use strict";
      n.d(e, {
        x: function () {
          return i;
        },
      });
      var r = n(9432);
      function i(t, e, n) {
        const i = t.getProps();
        return (0, r.o)(
          i,
          e,
          void 0 !== n ? n : i.custom,
          (function (t) {
            const e = {};
            return t.forEachValue((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            const e = {};
            return t.forEachValue((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    9432: function (t, e, n) {
      "use strict";
      function r(t, e, n, r = {}, i = {}) {
        return (
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e && (e = t.variants && t.variants[e]),
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      n.d(e, {
        o: function () {
          return r;
        },
      });
    },
    5759: function (t, e, n) {
      "use strict";
      n.d(e, {
        GJ: function () {
          return y;
        },
        P$: function () {
          return w;
        },
        CD: function () {
          return m;
        },
        gg: function () {
          return g;
        },
      });
      var r = n(8407);
      const i = (t) => /^0[^.\s]+$/.test(t);
      var o = n(8715),
        a = n(3234),
        s = n(9135),
        c = n(7405),
        u = n(6440),
        l = n(8340);
      const d = [...u.$, c.$, r.P],
        f = (t) => d.find((0, l.l)(t));
      var h = n(2248);
      function p(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, a.B)(n));
      }
      function m(t, e) {
        const n = (0, h.x)(t, e);
        let {
          transitionEnd: r = {},
          transition: i = {},
          ...a
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        a = { ...a, ...r };
        for (const s in a) {
          p(t, s, (0, o.Y)(a[s]));
        }
      }
      function v(t, e) {
        [...e].reverse().forEach((n) => {
          var r;
          const i = t.getVariant(n);
          i && m(t, i),
            null === (r = t.variantChildren) ||
              void 0 === r ||
              r.forEach((t) => {
                v(t, e);
              });
        });
      }
      function g(t, e) {
        return Array.isArray(e)
          ? v(t, e)
          : "string" === typeof e
          ? v(t, [e])
          : void m(t, e);
      }
      function y(t, e, n) {
        var o, c;
        const u = Object.keys(e).filter((e) => !t.hasValue(e)),
          l = u.length;
        if (l)
          for (let d = 0; d < l; d++) {
            const l = u[d],
              h = e[l];
            let p = null;
            Array.isArray(h) && (p = h[0]),
              null === p &&
                (p =
                  null !==
                    (c =
                      null !== (o = n[l]) && void 0 !== o
                        ? o
                        : t.readValue(l)) && void 0 !== c
                    ? c
                    : e[l]),
              void 0 !== p &&
                null !== p &&
                ("string" === typeof p && (/^\-?\d*\.?\d+$/.test(p) || i(p))
                  ? (p = parseFloat(p))
                  : !f(p) && r.P.test(h) && (p = (0, s.T)(l, h)),
                t.addValue(l, (0, a.B)(p)),
                void 0 === n[l] && (n[l] = p),
                t.setBaseTarget(l, p));
          }
      }
      function b(t, e) {
        if (!e) return;
        return (e[t] || e.default || e).from;
      }
      function w(t, e, n) {
        var r;
        const i = {};
        for (const o in t) {
          const t = b(o, e);
          i[o] =
            void 0 !== t
              ? t
              : null === (r = n.getValue(o)) || void 0 === r
              ? void 0
              : r.get();
        }
        return i;
      }
    },
    10: function (t, e, n) {
      "use strict";
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return i;
        },
        y4: function () {
          return r;
        },
      });
    },
    1741: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      const r = "undefined" !== typeof document;
    },
    1804: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      n.d(e, {
        I: function () {
          return r;
        },
      });
    },
    9304: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      var r = n(4155);
      const i = ("undefined" === typeof r || r.env, "production");
    },
    270: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return o;
        },
      });
      var r = n(1741),
        i = n(9609);
      function o() {
        if (((i.O.current = !0), r.j))
          if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
              e = () => (i.n.current = t.matches);
            t.addListener(e), e();
          } else i.n.current = !1;
      }
    },
    9609: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
        n: function () {
          return r;
        },
      });
      const r = { current: null },
        i = { current: !1 };
    },
    3302: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var r = n(7294),
        i = n(270),
        o = n(9609);
      function a() {
        !o.O.current && (0, i.A)();
        const [t] = (0, r.useState)(o.n.current);
        return t;
      }
    },
    8715: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return o;
        },
        p: function () {
          return i;
        },
      });
      var r = n(8488);
      const i = (t) =>
          Boolean(t && "object" === typeof t && t.mix && t.toValue),
        o = (t) => ((0, r.C)(t) ? t[t.length - 1] || 0 : t);
    },
    1560: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(10);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.y4)(this.subscriptions, t),
            () => (0, r.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < r; i++) {
                const r = this.subscriptions[i];
                r && r(t, e, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6917: function (t, e, n) {
      "use strict";
      n.d(e, {
        w: function () {
          return r;
        },
      });
      const r = (t) => 1e3 * t;
    },
    6681: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(7294);
      function i(t) {
        const e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8868: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(7294);
      const i = n(1741).j ? r.useLayoutEffect : r.useEffect;
    },
    5411: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(7294);
      function i(t) {
        return (0, r.useEffect)(() => () => t(), []);
      }
    },
    6034: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      const r = new Set();
      function i(t, e, n) {
        t || r.has(e) || (console.warn(e), n && console.warn(n), r.add(e));
      }
    },
    3234: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return s;
        },
      });
      var r = n(4735),
        i = n(9296),
        o = n(1560);
      class a {
        constructor(t) {
          var e;
          (this.version = "7.5.3"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.updateSubscribers = new o.L()),
            (this.velocityUpdateSubscribers = new o.L()),
            (this.renderSubscribers = new o.L()),
            (this.canTrackVelocity = !1),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              const { delta: n, timestamp: i } = (0, r.$B)();
              this.lastUpdated !== i &&
                ((this.timeDelta = n),
                (this.lastUpdated = i),
                r.ZP.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.updateSubscribers.notify(this.current),
                this.velocityUpdateSubscribers.getSize() &&
                  this.velocityUpdateSubscribers.notify(this.getVelocity()),
                e && this.renderSubscribers.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              r.ZP.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.velocityUpdateSubscribers.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity =
              ((e = this.current), !isNaN(parseFloat(e))));
        }
        onChange(t) {
          return this.updateSubscribers.add(t);
        }
        clearListeners() {
          this.updateSubscribers.clear();
        }
        onRenderRequest(t) {
          return t(this.get()), this.renderSubscribers.add(t);
        }
        attach(t) {
          this.passiveEffect = t;
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, i.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0), (this.stopAnimation = t(e));
            }).then(() => this.clearAnimation())
          );
        }
        stop() {
          this.stopAnimation && this.stopAnimation(), this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.updateSubscribers.clear(),
            this.renderSubscribers.clear(),
            this.stop();
        }
      }
      function s(t) {
        return new a(t);
      }
    },
    4960: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return s;
        },
      });
      var r = n(7294),
        i = n(3234),
        o = n(6014),
        a = n(6681);
      function s(t) {
        const e = (0, a.h)(() => (0, i.B)(t)),
          { isStatic: n } = (0, r.useContext)(o._);
        if (n) {
          const [, n] = (0, r.useState)(t);
          (0, r.useEffect)(() => e.onChange(n), []);
        }
        return e;
      }
    },
    5262: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return a;
        },
        p: function () {
          return o;
        },
      });
      var r = n(406),
        i = n(8868);
      function o(t, e) {
        (0, i.L)(() => {
          if ((0, r.i)(t)) return t.onChange(e);
        }, [e]);
      }
      function a(t, e, n) {
        (0, i.L)(() => {
          const r = t.map((t) => t.onChange(e));
          return () => {
            r.forEach((t) => t()), n();
          };
        });
      }
    },
    2490: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(406);
      function i(t) {
        return Boolean((0, r.i)(t) && t.add);
      }
    },
    406: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return r;
        },
      });
      const r = (t) => !!(null === t || void 0 === t ? void 0 : t.getVelocity);
    },
    6399: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return o;
        },
      });
      var r = n(8715),
        i = n(406);
      function o(t) {
        const e = (0, i.i)(t) ? t.get() : t;
        return (0, r.p)(e) ? e.toValue() : e;
      }
    },
    4735: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return h;
        },
        ZP: function () {
          return b;
        },
        iW: function () {
          return p;
        },
        $B: function () {
          return y;
        },
      });
      const r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r);
      let a = !0,
        s = !1,
        c = !1;
      const u = { delta: 0, timestamp: 0 },
        l = ["read", "update", "preRender", "render", "postRender"],
        d = l.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const c = s && i,
                      u = c ? e : n;
                    return (
                      o && a.add(t),
                      -1 === u.indexOf(t) &&
                        (u.push(t), c && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (c) => {
                    if (i) o = !0;
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(c), a.has(r) && (s.schedule(r), t());
                        }
                      (i = !1), o && ((o = !1), s.process(c));
                    }
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        f = l.reduce((t, e) => {
          const n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (s || g(), n.schedule(t, e, r))), t
          );
        }, {}),
        h = l.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        p = l.reduce((t, e) => ((t[e] = () => d[e].process(u)), t), {}),
        m = (t) => d[t].process(u),
        v = (t) => {
          (s = !1),
            (u.delta = a ? r : Math.max(Math.min(t - u.timestamp, 40), 1)),
            (u.timestamp = t),
            (c = !0),
            l.forEach(m),
            (c = !1),
            s && ((a = !1), o(v));
        },
        g = () => {
          (s = !0), (a = !0), c || o(v);
        },
        y = () => u;
      var b = f;
    },
    6228: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return S;
        },
      });
      function r(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var i = n(4394),
        o = n(6773);
      const a = 0.001;
      function s({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let s, u;
        (0, i.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
        let l = 1 - e;
        (l = (0, o.u)(0.05, 1, l)),
          (t = (0, o.u)(0.01, 10, t / 1e3)),
          l < 1
            ? ((s = (e) => {
                const r = e * l,
                  i = r * t,
                  o = r - n,
                  s = c(e, l),
                  u = Math.exp(-i);
                return a - (o / s) * u;
              }),
              (u = (e) => {
                const r = e * l * t,
                  i = r * n + n,
                  o = Math.pow(l, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  d = c(Math.pow(e, 2), l);
                return ((-s(e) + a > 0 ? -1 : 1) * ((i - o) * u)) / d;
              }))
            : ((s = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (u = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const d = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(s, u, 5 / t);
        if (((t *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(d, 2) * r;
          return {
            stiffness: e,
            damping: 2 * l * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function c(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const u = ["duration", "bounce"],
        l = ["stiffness", "damping", "mass"];
      function d(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function f(t) {
        var { from: e = 0, to: n = 1, restSpeed: i = 2, restDelta: o } = t,
          a = r(t, ["from", "to", "restSpeed", "restDelta"]);
        const f = { done: !1, value: e };
        let {
            stiffness: p,
            damping: m,
            mass: v,
            velocity: g,
            duration: y,
            isResolvedFromDuration: b,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!d(t, l) && d(t, u)) {
              const n = s(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(a),
          w = h,
          x = h;
        function S() {
          const t = g ? -g / 1e3 : 0,
            r = n - e,
            i = m / (2 * Math.sqrt(p * v)),
            a = Math.sqrt(p / v) / 1e3;
          if (
            (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, 0.4)), i < 1)
          ) {
            const e = c(a, i);
            (w = (o) => {
              const s = Math.exp(-i * a * o);
              return (
                n -
                s *
                  (((t + i * a * r) / e) * Math.sin(e * o) +
                    r * Math.cos(e * o))
              );
            }),
              (x = (n) => {
                const o = Math.exp(-i * a * n);
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * n) * (t + i * a * r)) / e +
                      r * Math.cos(e * n)) -
                  o *
                    (Math.cos(e * n) * (t + i * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === i)
            w = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(i * i - 1);
            w = (o) => {
              const s = Math.exp(-i * a * o),
                c = Math.min(e * o, 300);
              return (
                n -
                (s * ((t + i * a * r) * Math.sinh(c) + e * r * Math.cosh(c))) /
                  e
              );
            };
          }
        }
        return (
          S(),
          {
            next: (t) => {
              const e = w(t);
              if (b) f.done = t >= y;
              else {
                const r = 1e3 * x(t),
                  a = Math.abs(r) <= i,
                  s = Math.abs(n - e) <= o;
                f.done = a && s;
              }
              return (f.value = f.done ? n : e), f;
            },
            flipTarget: () => {
              (g = -g), ([e, n] = [n, e]), S();
            },
          }
        );
      }
      f.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const h = (t) => 0;
      var p = n(9180),
        m = n(4710);
      function v(t, e) {
        return t.map(() => e || m.mZ).splice(0, t.length - 1);
      }
      function g({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function c() {
          return (0, p.s)(s, a, { ease: Array.isArray(n) ? n : v(a, n) });
        }
        let u = c();
        return {
          next: (t) => ((o.value = u(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (u = c());
          },
        };
      }
      const y = {
        keyframes: g,
        spring: f,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const c = e + s,
            u = void 0 === o ? c : o(c);
          return (
            u !== c && (s = u - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? u : u + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var b = n(4735);
      function w(t, e, n = 0) {
        return t - e - n;
      }
      const x = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => b.ZP.update(e, !0), stop: () => b.qY.update(e) };
      };
      function S(t) {
        var e,
          n,
          {
            from: i,
            autoplay: o = !0,
            driver: a = x,
            elapsed: s = 0,
            repeat: c = 0,
            repeatType: u = "loop",
            repeatDelay: l = 0,
            onPlay: d,
            onStop: h,
            onComplete: m,
            onRepeat: v,
            onUpdate: b,
          } = t,
          S = r(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let C,
          E,
          k,
          { to: P } = S,
          O = 0,
          A = S.duration,
          T = !1,
          _ = !0;
        const j = (function (t) {
          if (Array.isArray(t.to)) return g;
          if (y[t.type]) return y[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? g
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? f
            : g;
        })(S);
        (null === (n = (e = j).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, i, P)) &&
          ((k = (0, p.s)([0, 100], [i, P], { clamp: !1 })), (i = 0), (P = 100));
        const R = j(Object.assign(Object.assign({}, S), { from: i, to: P }));
        function M() {
          O++,
            "reverse" === u
              ? ((_ = O % 2 === 0),
                (s = (function (t, e, n = 0, r = !0) {
                  return r ? w(e + -t, e, n) : e - (t - e) + n;
                })(s, A, l, _)))
              : ((s = w(s, A, l)), "mirror" === u && R.flipTarget()),
            (T = !1),
            v && v();
        }
        function I(t) {
          if ((_ || (t = -t), (s += t), !T)) {
            const t = R.next(Math.max(0, s));
            (E = t.value), k && (E = k(E)), (T = _ ? t.done : s <= 0);
          }
          null === b || void 0 === b || b(E),
            T &&
              (0 === O && ((null !== A && void 0 !== A) || (A = s)),
              O < c
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(s, A, l, _) && M()
                : (C.stop(), m && m()));
        }
        return (
          o && (null === d || void 0 === d || d(), (C = a(I)), C.start()),
          {
            stop: () => {
              null === h || void 0 === h || h(), C.stop();
            },
          }
        );
      }
    },
    4710: function (t, e, n) {
      "use strict";
      n.d(e, {
        LU: function () {
          return g;
        },
        G2: function () {
          return p;
        },
        XL: function () {
          return v;
        },
        CG: function () {
          return m;
        },
        h9: function () {
          return b;
        },
        yD: function () {
          return w;
        },
        gJ: function () {
          return y;
        },
        Z7: function () {
          return d;
        },
        X7: function () {
          return h;
        },
        Bn: function () {
          return f;
        },
        YQ: function () {
          return s;
        },
        mZ: function () {
          return l;
        },
        Vv: function () {
          return u;
        },
        GE: function () {
          return a;
        },
      });
      const r = (t) => (e) => 1 - t(1 - e),
        i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        o = (t) => (e) => e * e * ((t + 1) * e - t),
        a = (t) => t,
        s = ((c = 2), (t) => Math.pow(t, c));
      var c;
      const u = r(s),
        l = i(s),
        d = (t) => 1 - Math.sin(Math.acos(t)),
        f = r(d),
        h = i(f),
        p = o(1.525),
        m = r(p),
        v = i(p),
        g = ((t) => {
          const e = o(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        y = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        b = r(y),
        w = (t) =>
          t < 0.5 ? 0.5 * (1 - y(1 - 2 * t)) : 0.5 * y(2 * t - 1) + 0.5;
    },
    6773: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return r;
        },
      });
      const r = (t, e, n) => Math.min(Math.max(n, t), e);
    },
    734: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return r;
        },
      });
      const r = (t) => "number" === typeof t;
    },
    9180: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return A;
        },
      });
      var r = n(9326),
        i = n(2453),
        o = n(2960),
        a = n(8059),
        s = n(4582),
        c = n(4394);
      function u(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function l({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = u(s, r, t + 1 / 3)), (o = u(s, r, t)), (a = u(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const d = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        f = [o.$, a.m, s.J],
        h = (t) => f.find((e) => e.test(t)),
        p = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        m = (t, e) => {
          let n = h(t),
            r = h(e);
          (0, c.k)(!!n, p(t)), (0, c.k)(!!r, p(e));
          let o = n.parse(t),
            u = r.parse(e);
          n === s.J && ((o = l(o)), (n = a.m)),
            r === s.J && ((u = l(u)), (r = a.m));
          const f = Object.assign({}, o);
          return (t) => {
            for (const e in f) "alpha" !== e && (f[e] = d(o[e], u[e], t));
            return (f.alpha = (0, i.C)(o.alpha, u.alpha, t)), n.transform(f);
          };
        };
      var v = n(7405),
        g = n(8407),
        y = n(734),
        b = n(9897);
      function w(t, e) {
        return (0, y.e)(t)
          ? (n) => (0, i.C)(t, e, n)
          : v.$.test(t)
          ? m(t, e)
          : E(t, e);
      }
      const x = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => w(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        S = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = w(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function C(t) {
        const e = g.P.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const E = (t, e) => {
        const n = g.P.createTransformer(e),
          r = C(t),
          i = C(e);
        return r.numHSL === i.numHSL &&
          r.numRGB === i.numRGB &&
          r.numNumbers >= i.numNumbers
          ? (0, b.z)(x(r.parsed, i.parsed), n)
          : ((0, c.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            (n) => `${n > 0 ? e : t}`);
      };
      var k = n(6773);
      const P = (t, e) => (n) => (0, i.C)(t, e, n);
      function O(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? P
              : "string" === typeof o
              ? v.$.test(o)
                ? m
                : E
              : Array.isArray(o)
              ? x
              : "object" === typeof o
              ? S
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = (0, b.z)(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function A(t, e, { clamp: n = !0, ease: i, mixer: o } = {}) {
        const a = t.length;
        (0, c.k)(
          a === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, c.k)(
            !i || !Array.isArray(i) || i.length === a - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[a - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const s = O(e, i, o),
          u =
            2 === a
              ? (function ([t, e], [n]) {
                  return (i) => n((0, r.Y)(t, e, i));
                })(t, s)
              : (function (t, e) {
                  const n = t.length,
                    i = n - 1;
                  return (o) => {
                    let a = 0,
                      s = !1;
                    if (
                      (o <= t[0]
                        ? (s = !0)
                        : o >= t[i] && ((a = i - 1), (s = !0)),
                      !s)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > o || e === i); e++);
                      a = e - 1;
                    }
                    const c = (0, r.Y)(t[a], t[a + 1], o);
                    return e[a](c);
                  };
                })(t, s);
        return n ? (e) => u((0, k.u)(t[0], t[a - 1], e)) : u;
      }
    },
    2453: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
      });
      const r = (t, e, n) => -n * t + n * e + t;
    },
    9897: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      const r = (t, e) => (n) => e(t(n)),
        i = (...t) => t.reduce(r);
    },
    9326: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return r;
        },
      });
      const r = (t, e, n) => {
        const r = e - t;
        return 0 === r ? 1 : (n - t) / r;
      };
    },
    9296: function (t, e, n) {
      "use strict";
      function r(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      n.d(e, {
        R: function () {
          return r;
        },
      });
    },
    7650: function (t, e, n) {
      "use strict";
      n.d(e, {
        YD: function () {
          return p;
        },
        df: function () {
          return h;
        },
      });
      var r = n(7294);
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          i.apply(this, arguments)
        );
      }
      const o = new Map(),
        a = new WeakMap();
      let s,
        c = 0;
      function u(t) {
        return Object.keys(t)
          .sort()
          .filter((e) => void 0 !== t[e])
          .map((e) => {
            return `${e}_${
              "root" === e
                ? ((n = t.root),
                  n
                    ? (a.has(n) || ((c += 1), a.set(n, c.toString())), a.get(n))
                    : "0")
                : t[e]
            }`;
            var n;
          })
          .toString();
      }
      function l(t, e, n = {}, r = s) {
        if (
          "undefined" === typeof window.IntersectionObserver &&
          void 0 !== r
        ) {
          const i = t.getBoundingClientRect();
          return (
            e(r, {
              isIntersecting: r,
              target: t,
              intersectionRatio:
                "number" === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            () => {}
          );
        }
        const {
          id: i,
          observer: a,
          elements: c,
        } = (function (t) {
          let e = u(t),
            n = o.get(e);
          if (!n) {
            const r = new Map();
            let i;
            const a = new IntersectionObserver((e) => {
              e.forEach((e) => {
                var n;
                const o =
                  e.isIntersecting && i.some((t) => e.intersectionRatio >= t);
                t.trackVisibility &&
                  "undefined" === typeof e.isVisible &&
                  (e.isVisible = o),
                  null == (n = r.get(e.target)) ||
                    n.forEach((t) => {
                      t(o, e);
                    });
              });
            }, t);
            (i =
              a.thresholds ||
              (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0])),
              (n = { id: e, observer: a, elements: r }),
              o.set(e, n);
          }
          return n;
        })(n);
        let l = c.get(t) || [];
        return (
          c.has(t) || c.set(t, l),
          l.push(e),
          a.observe(t),
          function () {
            l.splice(l.indexOf(e), 1),
              0 === l.length && (c.delete(t), a.unobserve(t)),
              0 === c.size && (a.disconnect(), o.delete(i));
          }
        );
      }
      const d = [
        "children",
        "as",
        "triggerOnce",
        "threshold",
        "root",
        "rootMargin",
        "onChange",
        "skip",
        "trackVisibility",
        "delay",
        "initialInView",
        "fallbackInView",
      ];
      function f(t) {
        return "function" !== typeof t.children;
      }
      class h extends r.Component {
        constructor(t) {
          super(t),
            (this.node = null),
            (this._unobserveCb = null),
            (this.handleNode = (t) => {
              this.node &&
                (this.unobserve(),
                t ||
                  this.props.triggerOnce ||
                  this.props.skip ||
                  this.setState({
                    inView: !!this.props.initialInView,
                    entry: void 0,
                  })),
                (this.node = t || null),
                this.observeNode();
            }),
            (this.handleChange = (t, e) => {
              t && this.props.triggerOnce && this.unobserve(),
                f(this.props) || this.setState({ inView: t, entry: e }),
                this.props.onChange && this.props.onChange(t, e);
            }),
            (this.state = { inView: !!t.initialInView, entry: void 0 });
        }
        componentDidUpdate(t) {
          (t.rootMargin === this.props.rootMargin &&
            t.root === this.props.root &&
            t.threshold === this.props.threshold &&
            t.skip === this.props.skip &&
            t.trackVisibility === this.props.trackVisibility &&
            t.delay === this.props.delay) ||
            (this.unobserve(), this.observeNode());
        }
        componentWillUnmount() {
          this.unobserve(), (this.node = null);
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: t,
            root: e,
            rootMargin: n,
            trackVisibility: r,
            delay: i,
            fallbackInView: o,
          } = this.props;
          this._unobserveCb = l(
            this.node,
            this.handleChange,
            {
              threshold: t,
              root: e,
              rootMargin: n,
              trackVisibility: r,
              delay: i,
            },
            o
          );
        }
        unobserve() {
          this._unobserveCb &&
            (this._unobserveCb(), (this._unobserveCb = null));
        }
        render() {
          if (!f(this.props)) {
            const { inView: t, entry: e } = this.state;
            return this.props.children({
              inView: t,
              entry: e,
              ref: this.handleNode,
            });
          }
          const t = this.props,
            { children: e, as: n } = t,
            o = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                i = {},
                o = Object.keys(t);
              for (r = 0; r < o.length; r++)
                (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
              return i;
            })(t, d);
          return r.createElement(n || "div", i({ ref: this.handleNode }, o), e);
        }
      }
      function p({
        threshold: t,
        delay: e,
        trackVisibility: n,
        rootMargin: i,
        root: o,
        triggerOnce: a,
        skip: s,
        initialInView: c,
        fallbackInView: u,
        onChange: d,
      } = {}) {
        var f;
        const [h, p] = r.useState(null),
          m = r.useRef(),
          [v, g] = r.useState({ inView: !!c, entry: void 0 });
        (m.current = d),
          r.useEffect(() => {
            if (s || !h) return;
            let r = l(
              h,
              (t, e) => {
                g({ inView: t, entry: e }),
                  m.current && m.current(t, e),
                  e.isIntersecting && a && r && (r(), (r = void 0));
              },
              {
                root: o,
                rootMargin: i,
                threshold: t,
                trackVisibility: n,
                delay: e,
              },
              u
            );
            return () => {
              r && r();
            };
          }, [Array.isArray(t) ? t.toString() : t, h, o, i, a, s, n, u, e]);
        const y = null == (f = v.entry) ? void 0 : f.target;
        r.useEffect(() => {
          h || !y || a || s || g({ inView: !!c, entry: void 0 });
        }, [h, y, a, s, c]);
        const b = [p, v.inView, v.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
    },
    2960: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return i;
        },
      });
      var r = n(8059);
      const i = {
        test: (0, n(3953).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substr(1, 2)),
                (n = t.substr(3, 2)),
                (r = t.substr(5, 2)),
                (i = t.substr(7, 2)))
              : ((e = t.substr(1, 1)),
                (n = t.substr(2, 1)),
                (r = t.substr(3, 1)),
                (i = t.substr(4, 1)),
                (e += e),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    4582: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return s;
        },
      });
      var r = n(1248),
        i = n(2969),
        o = n(6777),
        a = n(3953);
      const s = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, o.Nw)(e)) +
          ", " +
          i.aQ.transform((0, o.Nw)(n)) +
          ", " +
          (0, o.Nw)(r.Fq.transform(a)) +
          ")",
      };
    },
    7405: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return s;
        },
      });
      var r = n(6777),
        i = n(2960),
        o = n(4582),
        a = n(8059);
      const s = {
        test: (t) => a.m.test(t) || i.$.test(t) || o.J.test(t),
        parse: (t) =>
          a.m.test(t)
            ? a.m.parse(t)
            : o.J.test(t)
            ? o.J.parse(t)
            : i.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.m.transform(t)
            : o.J.transform(t),
      };
    },
    8059: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return c;
        },
      });
      var r = n(1248),
        i = n(6777),
        o = n(3953);
      const a = (0, i.uZ)(0, 255),
        s = Object.assign(Object.assign({}, r.Rx), {
          transform: (t) => Math.round(a(t)),
        }),
        c = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: o = 1 }) =>
            "rgba(" +
            s.transform(t) +
            ", " +
            s.transform(e) +
            ", " +
            s.transform(n) +
            ", " +
            (0, i.Nw)(r.Fq.transform(o)) +
            ")",
        };
    },
    3953: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return o;
        },
        i: function () {
          return i;
        },
      });
      var r = n(6777);
      const i = (t, e) => (n) =>
          Boolean(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        o = (t, e, n) => (i) => {
          if (!(0, r.HD)(i)) return i;
          const [o, a, s, c] = i.match(r.KP);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(a),
            [n]: parseFloat(s),
            alpha: void 0 !== c ? parseFloat(c) : 1,
          };
        };
    },
    5738: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return c;
        },
      });
      var r = n(8407),
        i = n(6777);
      const o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(i.KP) || [];
        if (!r) return t;
        const a = n.replace(r, "");
        let s = o.has(e) ? 1 : 0;
        return r !== n && (s *= 100), e + "(" + s + a + ")";
      }
      const s = /([a-z-]*)\(.*?\)/g,
        c = Object.assign(Object.assign({}, r.P), {
          getAnimatableNone: (t) => {
            const e = t.match(s);
            return e ? e.map(a).join(" ") : t;
          },
        });
    },
    8407: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return f;
        },
      });
      var r = n(7405),
        i = n(1248),
        o = n(6777);
      const a = "${c}",
        s = "${n}";
      function c(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const c = t.match(o.dA);
        c &&
          ((n = c.length),
          (t = t.replace(o.dA, a)),
          e.push(...c.map(r.$.parse)));
        const u = t.match(o.KP);
        return (
          u && ((t = t.replace(o.KP, s)), e.push(...u.map(i.Rx.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function u(t) {
        return c(t).values;
      }
      function l(t) {
        const { values: e, numColors: n, tokenised: i } = c(t),
          u = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < u; i++)
            e = e.replace(
              i < n ? a : s,
              i < n ? r.$.transform(t[i]) : (0, o.Nw)(t[i])
            );
          return e;
        };
      }
      const d = (t) => ("number" === typeof t ? 0 : t);
      const f = {
        test: function (t) {
          var e, n, r, i;
          return (
            isNaN(t) &&
            (0, o.HD)(t) &&
            (null !==
              (n =
                null === (e = t.match(o.KP)) || void 0 === e
                  ? void 0
                  : e.length) && void 0 !== n
              ? n
              : 0) +
              (null !==
                (i =
                  null === (r = t.match(o.dA)) || void 0 === r
                    ? void 0
                    : r.length) && void 0 !== i
                ? i
                : 0) >
              0
          );
        },
        parse: u,
        createTransformer: l,
        getAnimatableNone: function (t) {
          const e = u(t);
          return l(t)(e.map(d));
        },
      };
    },
    1248: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return a;
        },
      });
      var r = n(6777);
      const i = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = Object.assign(Object.assign({}, i), { transform: (0, r.uZ)(0, 1) }),
        a = Object.assign(Object.assign({}, i), { default: 1 });
    },
    2969: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return l;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return s;
        },
        vh: function () {
          return c;
        },
        vw: function () {
          return u;
        },
      });
      var r = n(6777);
      const i = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        o = i("deg"),
        a = i("%"),
        s = i("px"),
        c = i("vh"),
        u = i("vw"),
        l = Object.assign(Object.assign({}, a), {
          parse: (t) => a.parse(t) / 100,
          transform: (t) => a.transform(100 * t),
        });
    },
    6777: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return c;
        },
        KP: function () {
          return o;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return a;
        },
        mj: function () {
          return s;
        },
        uZ: function () {
          return r;
        },
      });
      const r = (t, e) => (n) => Math.max(Math.min(n, e), t),
        i = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        o = /(-)?([\d]*\.?[\d])+/g,
        a =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        s =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function c(t) {
        return "string" === typeof t;
      }
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1118), e(387);
    });
    var n = t.O();
    _N_E = n;
  },
]);
