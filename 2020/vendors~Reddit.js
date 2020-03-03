// https://www.redditstatic.com/desktop2x/vendors~Reddit.b3c5948aa506fb8a9a4c.js
// Retrieved at 3/2/2020, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				},
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				s = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t.default = e, t
				}(o("./node_modules/@r/frames/compiled.js"));
			var i = "gtm-" + (0, n.v4)(),
				a = !1,
				l = [],
				u = function() {
					var e = document.getElementById(i);
					return e && e.contentWindow ? e : null
				},
				c = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				d = t.trigger = function(e, t) {
					var o = u();
					o && a ? (t && s.postMessage(o.contentWindow, "data.gtm", t), s.postMessage(o.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						l.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				p = function() {
					if (u() && a) {
						var e = l.slice();
						l = [], e.forEach((function(e) {
							var t = e.eventName,
								o = e.payload;
							return d(t, o)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					o = e.jailUrl,
					n = e.payload;
				if (t)
					if (o) {
						s.listen("gtm"), s.receiveMessageOnce("loaded.gtm", (function() {
							a = !0, s.stopListening("gtm")
						}));
						var l = document.createElement("iframe");
						l.style.display = "none", l.id = i, l.name = JSON.stringify(r({
							referrer: document.referrer
						}, c(), n)), l.src = o + "?id=" + t, l.onload = p, document.body.appendChild(l)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, o) {
			var r = o("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				s = n;
			s.v1 = r, s.v4 = n, e.exports = s
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var o = [], r = 0; r < 256; ++r) o[r] = (r + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var r = t || 0,
					n = o;
				return n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + "-" + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]] + n[e[r++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, o) {
			(function(t) {
				var o, r = t.crypto || t.msCrypto;
				if (r && r.getRandomValues) {
					var n = new Uint8Array(16);
					o = function() {
						return r.getRandomValues(n), n
					}
				}
				if (!o) {
					var s = new Array(16);
					o = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), s[t] = e >>> ((3 & t) << 3) & 255;
						return s
					}
				}
				e.exports = o
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, o) {
			var r = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				s = r(),
				i = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
				a = 16383 & (s[6] << 8 | s[7]),
				l = 0,
				u = 0;
			e.exports = function(e, t, o) {
				var r = t && o || 0,
					s = t || [],
					c = void 0 !== (e = e || {}).clockseq ? e.clockseq : a,
					d = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					p = void 0 !== e.nsecs ? e.nsecs : u + 1,
					m = d - l + (p - u) / 1e4;
				if (m < 0 && void 0 === e.clockseq && (c = c + 1 & 16383), (m < 0 || d > l) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				l = d, u = p, a = c;
				var f = (1e4 * (268435455 & (d += 122192928e5)) + p) % 4294967296;
				s[r++] = f >>> 24 & 255, s[r++] = f >>> 16 & 255, s[r++] = f >>> 8 & 255, s[r++] = 255 & f;
				var b = d / 4294967296 * 1e4 & 268435455;
				s[r++] = b >>> 8 & 255, s[r++] = 255 & b, s[r++] = b >>> 24 & 15 | 16, s[r++] = b >>> 16 & 255, s[r++] = c >>> 8 | 128, s[r++] = 255 & c;
				for (var h = e.node || i, y = 0; y < 6; ++y) s[r + y] = h[y];
				return t || n(s)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, o) {
			var r = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, o) {
				var s = t && o || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var i = (e = e || {}).random || (e.rng || r)();
				if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
					for (var a = 0; a < 16; ++a) t[s + a] = i[a];
				return t || n(i)
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				n = o.n(r),
				s = o("./node_modules/react-dom/index.js"),
				i = (o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(o, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var l = new Map;

			function u(e) {
				void 0 === e && (e = {});
				for (var t, o = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							o = t[0],
							r = void 0 === o ? "0px" : o,
							n = t[1],
							s = void 0 === n ? r : n,
							a = t[2],
							l = void 0 === a ? r : a,
							u = t[3];
						return r + " " + s + " " + l + " " + (void 0 === u ? s : u)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = l.keys(); t = s.next().value;) {
					if (!(o !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function c(e, t) {
				var o = l.get(e);
				if (o)
					for (var r, n = o.values(); r = n.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function d(e, t) {
				for (var o = 0; o < e.length; o++) {
					var r = c(t, e[o]);
					r && r.handleChange(e[o])
				}
			}

			function p(e) {
				return u(e) || new IntersectionObserver(d, e)
			}
			var m = o("./node_modules/invariant/browser.js"),
				f = o.n(m),
				b = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function y(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, o) {
				return t in e ? Object.defineProperty(e, t, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = o, e
			}
			var g = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				k = Object.prototype,
				x = k.hasOwnProperty,
				j = k.toString,
				S = function(e) {
					return g.reduce((function(t, o) {
						if (x.call(e, o)) {
							var r = "root" === o && "[object String]" === j.call(e[o]);
							t[o] = r ? document.querySelector(e[o]) : e[o]
						}
						return t
					}), {})
				},
				O = function(e) {
					var t, o;

					function r() {
						for (var t, o = arguments.length, r = new Array(o), n = 0; n < o; n++) r[n] = arguments[n];
						return v(y(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(y(t), "handleNode", (function(e) {
							var o = t.props.children;
							if (null != o) {
								var r = o.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), v(y(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(S(t.props)), t.target = t.targetNode, e = y(t), l.has(e.observer) || l.set(e.observer, new Set), l.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(y(t), "unobserve", (function(e) {
							! function(e, t) {
								if (l.has(e.observer)) {
									var o = l.get(e.observer);
									o.delete(e) && (o.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), l.delete(e.observer)))
								}
							}(y(t), e)
						})), v(y(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					o = e, (t = r).prototype = Object.create(o.prototype), t.prototype.constructor = t, t.__proto__ = o;
					var i = r.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var o = _.some((function(o) {
							return a(t.props[o], e[o])
						}));
						return o && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), o
					}, i.componentDidUpdate = function(e, t, o) {
						var r = !1;
						o || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (o || r) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(n.a.Component);
			v(O, "displayName", "IntersectionObserver"), o.d(t, "a", (function() {
				return O
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, t, o, n, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, t, o) {
			"use strict";
			t.a = function(e) {
				var t = {},
					o = 1,
					r = e;
				return {
					getState: function() {
						return r
					},
					setState: function(e) {
						r = e;
						for (var o = Object.keys(t), n = 0, s = o.length; n < s; n++) t[o[n]] && t[o[n]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var r = o;
						return t[r] = e, o += 1, r
					},
					unsubscribe: function(e) {
						t[e] = void 0
					}
				}
			}
		},
		"./node_modules/combokeys/Combokeys/index.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t = this.constructor;
				return this.callbacks = {}, this.directMap = {}, this.sequenceLevels = {}, this.resetTimer = null, this.ignoreNextKeyup = !1, this.ignoreNextKeypress = !1, this.nextExpectedAction = !1, this.element = e, this.addEvents(), t.instances.push(this), this
			}, e.exports.prototype.bind = o("./node_modules/combokeys/Combokeys/prototype/bind.js"), e.exports.prototype.bindMultiple = o("./node_modules/combokeys/Combokeys/prototype/bindMultiple.js"), e.exports.prototype.unbind = o("./node_modules/combokeys/Combokeys/prototype/unbind.js"), e.exports.prototype.trigger = o("./node_modules/combokeys/Combokeys/prototype/trigger.js"), e.exports.prototype.reset = o("./node_modules/combokeys/Combokeys/prototype/reset.js"), e.exports.prototype.stopCallback = o("./node_modules/combokeys/Combokeys/prototype/stopCallback.js"), e.exports.prototype.handleKey = o("./node_modules/combokeys/Combokeys/prototype/handleKey.js"), e.exports.prototype.addEvents = o("./node_modules/combokeys/Combokeys/prototype/addEvents.js"), e.exports.prototype.bindSingle = o("./node_modules/combokeys/Combokeys/prototype/bindSingle.js"), e.exports.prototype.getKeyInfo = o("./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"), e.exports.prototype.pickBestAction = o("./node_modules/combokeys/Combokeys/prototype/pickBestAction.js"), e.exports.prototype.getReverseMap = o("./node_modules/combokeys/Combokeys/prototype/getReverseMap.js"), e.exports.prototype.getMatches = o("./node_modules/combokeys/Combokeys/prototype/getMatches.js"), e.exports.prototype.resetSequences = o("./node_modules/combokeys/Combokeys/prototype/resetSequences.js"), e.exports.prototype.fireCallback = o("./node_modules/combokeys/Combokeys/prototype/fireCallback.js"), e.exports.prototype.bindSequence = o("./node_modules/combokeys/Combokeys/prototype/bindSequence.js"), e.exports.prototype.resetSequenceTimer = o("./node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"), e.exports.prototype.detach = o("./node_modules/combokeys/Combokeys/prototype/detach.js"), e.exports.instances = [], e.exports.reset = o("./node_modules/combokeys/Combokeys/reset.js"), e.exports.REVERSE_MAP = null
		},
		"./node_modules/combokeys/Combokeys/prototype/addEvents.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				var e = o("./node_modules/combokeys/Combokeys/prototype/dom-event.js"),
					t = this.element;
				this.eventHandler = o("./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(this), e(t, "keypress", this.eventHandler), e(t, "keydown", this.eventHandler), e(t, "keyup", this.eventHandler)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bind.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o) {
				return e = e instanceof Array ? e : [e], this.bindMultiple(e, t, o), this
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindMultiple.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o) {
				for (var r = 0; r < e.length; ++r) this.bindSingle(e[r], t, o)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSequence.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, r, n) {
				var s = this;

				function i(t) {
					return function() {
						s.nextExpectedAction = t, ++s.sequenceLevels[e], s.resetSequenceTimer()
					}
				}

				function a(t) {
					var i;
					s.fireCallback(r, t, e), "keyup" !== n && (i = o("./node_modules/combokeys/helpers/characterFromEvent.js"), s.ignoreNextKeyup = i(t)), setTimeout((function() {
						s.resetSequences()
					}), 10)
				}
				s.sequenceLevels[e] = 0;
				for (var l = 0; l < t.length; ++l) {
					var u = l + 1 === t.length ? a : i(n || s.getKeyInfo(t[l + 1]).action);
					s.bindSingle(t[l], u, n, e, l)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSingle.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o, r, n) {
				this.directMap[e + ":" + o] = t;
				var s, i = (e = e.replace(/\s+/g, " ")).split(" ");
				i.length > 1 ? this.bindSequence(e, i, t, o) : (s = this.getKeyInfo(e, o), this.callbacks[s.key] = this.callbacks[s.key] || [], this.getMatches(s.key, s.modifiers, {
					type: s.action
				}, r, e, n), this.callbacks[s.key][r ? "unshift" : "push"]({
					callback: t,
					modifiers: s.modifiers,
					action: s.action,
					seq: r,
					level: n,
					combo: e
				}))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/detach.js": function(e, t, o) {
			var r = o("./node_modules/combokeys/Combokeys/prototype/dom-event.js").off;
			e.exports = function() {
				var e = this.element;
				r(e, "keypress", this.eventHandler), r(e, "keydown", this.eventHandler), r(e, "keyup", this.eventHandler)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/dom-event.js": function(e, t) {
			function o(e, t, o, r) {
				return !e.addEventListener && (t = "on" + t), (e.addEventListener || e.attachEvent).call(e, t, o, r), o
			}
			e.exports = o, e.exports.on = o, e.exports.off = function(e, t, o, r) {
				return !e.removeEventListener && (t = "on" + t), (e.removeEventListener || e.detachEvent).call(e, t, o, r), o
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/fireCallback.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, r, n) {
				this.stopCallback(t, t.target || t.srcElement, r, n) || !1 === e(t, r) && (o("./node_modules/combokeys/helpers/preventDefault.js")(t), o("./node_modules/combokeys/helpers/stopPropagation.js")(t))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				var r, n, s, i, a, l, u = [];
				for (r = o("./node_modules/combokeys/helpers/keysFromString.js")(e), i = o("./node_modules/combokeys/helpers/special-aliases.js"), a = o("./node_modules/combokeys/helpers/shift-map.js"), l = o("./node_modules/combokeys/helpers/isModifier.js"), s = 0; s < r.length; ++s) i[n = r[s]] && (n = i[n]), t && "keypress" !== t && a[n] && (n = a[n], u.push("shift")), l(n) && u.push(n);
				return {
					key: n,
					modifiers: u,
					action: t = this.pickBestAction(n, u, t)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getMatches.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, r, n, s, i) {
				var a, l, u, c, d = [],
					p = r.type;
				"keypress" !== p || r.code && "Arrow" === r.code.slice(0, 5) || (this.callbacks["any-character"] || []).forEach((function(e) {
					d.push(e)
				}));
				if (!this.callbacks[e]) return d;
				for (u = o("./node_modules/combokeys/helpers/isModifier.js"), "keyup" === p && u(e) && (t = [e]), a = 0; a < this.callbacks[e].length; ++a)
					if (l = this.callbacks[e][a], (n || !l.seq || this.sequenceLevels[l.seq] === l.level) && p === l.action && (c = o("./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"), "keypress" === p && !r.metaKey && !r.ctrlKey || c(t, l.modifiers))) {
						var m = !n && l.combo === s,
							f = n && l.seq === n && l.level === i;
						(m || f) && this.callbacks[e].splice(a, 1), d.push(l)
					} return d
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getReverseMap.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				var e, t = this.constructor;
				if (!t.REVERSE_MAP)
					for (var r in t.REVERSE_MAP = {}, e = o("./node_modules/combokeys/helpers/special-keys-map.js")) r > 95 && r < 112 || e.hasOwnProperty(r) && (t.REVERSE_MAP[e[r]] = r);
				return t.REVERSE_MAP
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKey.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, r) {
				var n, s, i, a, l = {},
					u = 0,
					c = !1;
				for (n = this.getMatches(e, t, r), s = 0; s < n.length; ++s) n[s].seq && (u = Math.max(u, n[s].level));
				for (s = 0; s < n.length; ++s)
					if (n[s].seq) {
						if (n[s].level !== u) continue;
						c = !0, l[n[s].seq] = 1, this.fireCallback(n[s].callback, r, n[s].combo, n[s].seq)
					} else c || this.fireCallback(n[s].callback, r, n[s].combo);
				a = "keypress" === r.type && this.ignoreNextKeypress, i = o("./node_modules/combokeys/helpers/isModifier.js"), r.type !== this.nextExpectedAction || i(e) || a || this.resetSequences(l), this.ignoreNextKeypress = c && "keydown" === r.type
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t;
				"number" != typeof e.which && (e.which = e.keyCode);
				var r = o("./node_modules/combokeys/helpers/characterFromEvent.js")(e);
				void 0 !== r && ("keyup" !== e.type || this.ignoreNextKeyup !== r ? (t = o("./node_modules/combokeys/helpers/eventModifiers.js"), this.handleKey(r, t(e), e)) : this.ignoreNextKeyup = !1)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				return e.sort().join(",") === t.sort().join(",")
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/pickBestAction.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o) {
				return o || (o = this.getReverseMap()[e] ? "keydown" : "keypress"), "keypress" === o && t.length && (o = "keydown"), o
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/reset.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				return this.callbacks = {}, this.directMap = {}, this
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				var e = this;
				clearTimeout(e.resetTimer), e.resetTimer = setTimeout((function() {
					e.resetSequences()
				}), 1e3)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/resetSequences.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				e = e || {};
				var t, o = !1;
				for (t in this.sequenceLevels) e[t] ? o = !0 : this.sequenceLevels[t] = 0;
				o || (this.nextExpectedAction = !1)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/stopCallback.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				if ((" " + t.className + " ").indexOf(" combokeys ") > -1) return !1;
				var o = t.tagName.toLowerCase();
				return "input" === o || "select" === o || "textarea" === o || t.isContentEditable
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/trigger.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				return this.directMap[e + ":" + t] && this.directMap[e + ":" + t]({}, e), this
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/unbind.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				return this.bind(e, (function() {}), t)
			}
		},
		"./node_modules/combokeys/Combokeys/reset.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				this.instances.forEach((function(e) {
					e.reset()
				}))
			}
		},
		"./node_modules/combokeys/helpers/characterFromEvent.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t, r;
				if (t = o("./node_modules/combokeys/helpers/special-keys-map.js"), r = o("./node_modules/combokeys/helpers/special-characters-map.js"), "keypress" === e.type) {
					var n = String.fromCharCode(e.which);
					return e.shiftKey || (n = n.toLowerCase()), n
				}
				return void 0 !== t[e.which] ? t[e.which] : void 0 !== r[e.which] ? r[e.which] : String.fromCharCode(e.which).toLowerCase()
			}
		},
		"./node_modules/combokeys/helpers/eventModifiers.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t = [];
				return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
			}
		},
		"./node_modules/combokeys/helpers/isModifier.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				return "shift" === e || "ctrl" === e || "alt" === e || "meta" === e
			}
		},
		"./node_modules/combokeys/helpers/keysFromString.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				return "+" === e ? ["+"] : e.split("+")
			}
		},
		"./node_modules/combokeys/helpers/preventDefault.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				e.preventDefault ? e.preventDefault() : e.returnValue = !1
			}
		},
		"./node_modules/combokeys/helpers/shift-map.js": function(e, t, o) {
			"use strict";
			e.exports = {
				"~": "`",
				"!": "1",
				"@": "2",
				"#": "3",
				$: "4",
				"%": "5",
				"^": "6",
				"&": "7",
				"*": "8",
				"(": "9",
				")": "0",
				_: "-",
				"+": "=",
				":": ";",
				'"': "'",
				"<": ",",
				">": ".",
				"?": "/",
				"|": "\\"
			}
		},
		"./node_modules/combokeys/helpers/special-aliases.js": function(e, t, o) {
			"use strict";
			e.exports = {
				option: "alt",
				command: "meta",
				return: "enter",
				escape: "esc",
				mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
			}
		},
		"./node_modules/combokeys/helpers/special-characters-map.js": function(e, t, o) {
			"use strict";
			e.exports = {
				106: "*",
				107: "plus",
				109: "minus",
				110: ".",
				111: "/",
				186: ";",
				187: "=",
				188: ",",
				189: "-",
				190: ".",
				191: "/",
				192: "`",
				219: "[",
				220: "\\",
				221: "]",
				222: "'"
			}
		},
		"./node_modules/combokeys/helpers/special-keys-map.js": function(e, t, o) {
			"use strict";
			e.exports = {
				8: "backspace",
				9: "tab",
				13: "enter",
				16: "shift",
				17: "ctrl",
				18: "alt",
				20: "capslock",
				27: "esc",
				32: "space",
				33: "pageup",
				34: "pagedown",
				35: "end",
				36: "home",
				37: "left",
				38: "up",
				39: "right",
				40: "down",
				45: "ins",
				46: "del",
				91: "meta",
				93: "meta",
				173: "minus",
				187: "plus",
				189: "minus",
				224: "meta"
			};
			for (var r = 1; r < 20; ++r) e.exports[111 + r] = "f" + r;
			for (r = 0; r <= 9; ++r) e.exports[r + 96] = r
		},
		"./node_modules/combokeys/helpers/stopPropagation.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
			}
		},
		"./node_modules/fbjs/lib/emptyFunction.js": function(e, t, o) {
			"use strict";

			function r(e) {
				return function() {
					return e
				}
			}
			var n = function() {};
			n.thatReturns = r, n.thatReturnsFalse = r(!1), n.thatReturnsTrue = r(!0), n.thatReturnsNull = r(null), n.thatReturnsThis = function() {
				return this
			}, n.thatReturnsArgument = function(e) {
				return e
			}, e.exports = n
		},
		"./node_modules/just-reduce-object/index.js": function(e, t) {
			e.exports = function(e, t) {
				var o = [function(o, n, s, i) {
						r || (o = e[i[0]], r = !0);
						return t(o, n, e[n], s, i)
					}],
					r = 2 in arguments;
				return r && o.push(arguments[2]), Array.prototype.reduce.apply(Object.keys(e), o)
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var o = -1, r = null == e ? 0 : e.length; ++o < r;)
					if (!t(e[o], o, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseClamp.js"),
				n = o("./node_modules/lodash/_copyArray.js"),
				s = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return s(n(e), r(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var o = !0;
				return r(e, (function(e, r, n) {
					return o = !!t(e, r, n)
				})), o
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var o = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + o(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseClamp.js"),
				n = o("./node_modules/lodash/_shuffleSelf.js"),
				s = o("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var o = s(e);
				return n(o, r(t, 0, o.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var o = -1,
					n = e.length,
					s = n - 1;
				for (t = void 0 === t ? n : t; ++o < t;) {
					var i = r(o, s),
						a = e[i];
					e[i] = e[o], e[o] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/every.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_arrayEvery.js"),
				n = o("./node_modules/lodash/_baseEvery.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, o) {
				var l = i(e) ? r : n;
				return o && a(e, t, o) && (t = void 0), l(e, s(t, 3))
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_arraySampleSize.js"),
				n = o("./node_modules/lodash/_baseSampleSize.js"),
				s = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				a = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, o) {
				return t = (o ? i(e, t, o) : void 0 === t) ? 1 : a(t), (s(e) ? r : n)(e, t)
			}
		},
		"./node_modules/platform/platform.js": function(e, t, o) {
			(function(e, r) {
				var n;
				(function() {
					"use strict";
					var s = {
							function: !0,
							object: !0
						},
						i = s[typeof window] && window || this,
						a = s[typeof t] && t,
						l = s[typeof e] && e && !e.nodeType && e,
						u = a && l && "object" == typeof r && r;
					!u || u.global !== u && u.window !== u && u.self !== u || (i = u);
					var c = Math.pow(2, 53) - 1,
						d = /\bOpera/,
						p = Object.prototype,
						m = p.hasOwnProperty,
						f = p.toString;

					function b(e) {
						return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
					}

					function h(e) {
						return e = k(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : b(e)
					}

					function y(e, t) {
						for (var o in e) m.call(e, o) && t(e[o], o, e)
					}

					function v(e) {
						return null == e ? b(e) : f.call(e).slice(8, -1)
					}

					function g(e) {
						return String(e).replace(/([ -])(?!$)/g, "$1?")
					}

					function _(e, t) {
						var o = null;
						return function(e, t) {
							var o = -1,
								r = e ? e.length : 0;
							if ("number" == typeof r && r > -1 && r <= c)
								for (; ++o < r;) t(e[o], o, e);
							else y(e, t)
						}(e, (function(r, n) {
							o = t(o, r, n, e)
						})), o
					}

					function k(e) {
						return String(e).replace(/^ +| +$/g, "")
					}
					var x = function e(t) {
						var o = i,
							r = t && "object" == typeof t && "String" != v(t);
						r && (o = t, t = null);
						var n = o.navigator || {},
							s = n.userAgent || "";
						t || (t = s);
						var a, l, u, c, p, m = r ? !!n.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
							b = r ? "Object" : "ScriptBridgingProxyObject",
							x = r ? "Object" : "Environment",
							j = r && o.java ? "JavaPackage" : v(o.java),
							S = r ? "Object" : "RuntimeObject",
							O = /\bJava/.test(j) && o.java,
							E = O && v(o.environment) == x,
							w = O ? "a" : "α",
							C = O ? "b" : "β",
							P = o.document || {},
							M = o.operamini || o.opera,
							T = d.test(T = r && M ? M["[[Class]]"] : v(M)) ? T : M = null,
							N = t,
							R = [],
							A = null,
							I = t == s,
							K = I && M && "function" == typeof M.version && M.version(),
							W = _([{
								label: "EdgeHTML",
								pattern: "Edge"
							}, "Trident", {
								label: "WebKit",
								pattern: "AppleWebKit"
							}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, o) {
								return e || RegExp("\\b" + (o.pattern || g(o)) + "\\b", "i").exec(t) && (o.label || o)
							})),
							B = function(e) {
								return _(e, (function(e, o) {
									return e || RegExp("\\b" + (o.pattern || g(o)) + "\\b", "i").exec(t) && (o.label || o)
								}))
							}(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
								label: "Microsoft Edge",
								pattern: "Edge"
							}, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
								label: "Samsung Internet",
								pattern: "SamsungBrowser"
							}, "SeaMonkey", {
								label: "Silk",
								pattern: "(?:Cloud9|Silk-Accelerated)"
							}, "Sleipnir", "SlimBrowser", {
								label: "SRWare Iron",
								pattern: "Iron"
							}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
								label: "Opera Mini",
								pattern: "OPiOS"
							}, "Opera", {
								label: "Opera",
								pattern: "OPR"
							}, "Chrome", {
								label: "Chrome Mobile",
								pattern: "(?:CriOS|CrMo)"
							}, {
								label: "Firefox",
								pattern: "(?:Firefox|Minefield)"
							}, {
								label: "Firefox for iOS",
								pattern: "FxiOS"
							}, {
								label: "IE",
								pattern: "IEMobile"
							}, {
								label: "IE",
								pattern: "MSIE"
							}, "Safari"]),
							F = G([{
								label: "BlackBerry",
								pattern: "BB10"
							}, "BlackBerry", {
								label: "Galaxy S",
								pattern: "GT-I9000"
							}, {
								label: "Galaxy S2",
								pattern: "GT-I9100"
							}, {
								label: "Galaxy S3",
								pattern: "GT-I9300"
							}, {
								label: "Galaxy S4",
								pattern: "GT-I9500"
							}, {
								label: "Galaxy S5",
								pattern: "SM-G900"
							}, {
								label: "Galaxy S6",
								pattern: "SM-G920"
							}, {
								label: "Galaxy S6 Edge",
								pattern: "SM-G925"
							}, {
								label: "Galaxy S7",
								pattern: "SM-G930"
							}, {
								label: "Galaxy S7 Edge",
								pattern: "SM-G935"
							}, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
								label: "Kindle Fire",
								pattern: "(?:Cloud9|Silk-Accelerated)"
							}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
								label: "Wii U",
								pattern: "WiiU"
							}, "Wii", "Xbox One", {
								label: "Xbox 360",
								pattern: "Xbox"
							}, "Xoom"]),
							L = function(e) {
								return _(e, (function(e, o, r) {
									return e || (o[F] || o[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + g(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
								}))
							}({
								Apple: {
									iPad: 1,
									iPhone: 1,
									iPod: 1
								},
								Archos: {},
								Amazon: {
									Kindle: 1,
									"Kindle Fire": 1
								},
								Asus: {
									Transformer: 1
								},
								"Barnes & Noble": {
									Nook: 1
								},
								BlackBerry: {
									PlayBook: 1
								},
								Google: {
									"Google TV": 1,
									Nexus: 1
								},
								HP: {
									TouchPad: 1
								},
								HTC: {},
								LG: {},
								Microsoft: {
									Xbox: 1,
									"Xbox One": 1
								},
								Motorola: {
									Xoom: 1
								},
								Nintendo: {
									"Wii U": 1,
									Wii: 1
								},
								Nokia: {
									Lumia: 1
								},
								Samsung: {
									"Galaxy S": 1,
									"Galaxy S2": 1,
									"Galaxy S3": 1,
									"Galaxy S4": 1
								},
								Sony: {
									PlayStation: 1,
									"PlayStation Vita": 1
								}
							}),
							q = function(e) {
								return _(e, (function(e, o) {
									var r = o.pattern || g(o);
									return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, o) {
										var r = {
											"10.0": "10",
											6.4: "10 Technical Preview",
											6.3: "8.1",
											6.2: "8",
											6.1: "Server 2008 R2 / 7",
											"6.0": "Server 2008 / Vista",
											5.2: "Server 2003 / XP 64-bit",
											5.1: "XP",
											5.01: "2000 SP1",
											"5.0": "2000",
											"4.0": "NT",
											"4.90": "ME"
										};
										return t && o && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && o && (e = e.replace(RegExp(t, "i"), o)), e = h(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
									}(e, r, o.label || o)), e
								}))
							}(["Windows Phone", "Android", "CentOS", {
								label: "Chrome OS",
								pattern: "CrOS"
							}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

						function G(e) {
							return _(e, (function(e, o) {
								var r = o.pattern || g(o);
								return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(o.label && !RegExp(r, "i").test(o.label) ? o.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), o = o.label || o, e = h(e[0].replace(RegExp(r, "i"), o).replace(RegExp("; *(?:" + o + "[_-])?", "i"), " ").replace(RegExp("(" + o + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
							}))
						}
						if (W && (W = [W]), L && !F && (F = G([L])), (a = /\bGoogle TV\b/.exec(F)) && (F = a[0]), /\bSimulator\b/i.test(t) && (F = (F ? F + " " : "") + "Simulator"), "Opera Mini" == B && /\bOPiOS\b/.test(t) && R.push("running in Turbo/Uncompressed mode"), "IE" == B && /\blike iPhone OS\b/.test(t) ? (L = (a = e(t.replace(/like iPhone OS/, ""))).manufacturer, F = a.product) : /^iP/.test(F) ? (B || (B = "Safari"), q = "iOS" + ((a = / OS ([\d_]+)/i.exec(t)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != B || /buntu/i.test(q) ? L && "Google" != L && (/Chrome/.test(B) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(q) && /^Chrome/.test(B) && /\bVersion\//i.test(t) ? (B = "Android Browser", q = /\bAndroid\b/.test(q) ? q : "Android") : "Silk" == B ? (/\bMobi/i.test(t) || (q = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && R.unshift("accelerated")) : "PaleMoon" == B && (a = /\bFirefox\/([\d.]+)\b/.exec(t)) ? R.push("identifying as Firefox " + a[1]) : "Firefox" == B && (a = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (q || (q = "Firefox OS"), F || (F = a[1])) : !B || (a = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !F && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(a + "/") + 8)) && (B = null), (a = F || L || q) && (F || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(q)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(q) ? q : a) + " Browser")) : "Electron" == B && (a = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && R.push("Chromium " + a) : q = "Kubuntu", K || (K = _(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(B), "(?:Firefox|Minefield|NetFront)"], (function(e, o) {
								return e || (RegExp(o + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
							}))), (a = ("iCab" == W && parseFloat(K) > 3 ? "WebKit" : /\bOpera\b/.test(B) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(W) && "WebKit" || !W && /\bMSIE\b/i.test(t) && ("Mac OS" == q ? "Tasman" : "Trident") || "WebKit" == W && /\bPlayStation\b(?! Vita\b)/i.test(B) && "NetFront") && (W = [a]), "IE" == B && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (B += " Mobile", q = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (B = "IE Mobile", q = "Windows Phone 8.x", R.unshift("desktop mode"), K || (K = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != B && "Trident" == W && (a = /\brv:([\d.]+)/.exec(t)) && (B && R.push("identifying as " + B + (K ? " " + K : "")), B = "IE", K = a[1]), I) {
							if (c = "global", p = null != (u = o) ? typeof u[c] : "number", /^(?:boolean|number|string|undefined)$/.test(p) || "object" == p && !u[c]) v(a = o.runtime) == b ? (B = "Adobe AIR", q = a.flash.system.Capabilities.os) : v(a = o.phantom) == S ? (B = "PhantomJS", K = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof P.documentMode && (a = /\bTrident\/(\d+)/i.exec(t)) ? (K = [K, P.documentMode], (a = +a[1] + 4) != K[1] && (R.push("IE " + K[1] + " mode"), W && (W[1] = ""), K[1] = a), K = "IE" == B ? String(K[1].toFixed(1)) : K[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(B) && (R.push("masking as " + B + " " + K), B = "IE", K = "11.0", W = ["Trident"], q = "Windows");
							else if (O && (N = (a = O.lang.System).getProperty("os.arch"), q = q || a.getProperty("os.name") + " " + a.getProperty("os.version")), E) {
								try {
									K = o.require("ringo/engine").version.join("."), B = "RingoJS"
								} catch (U) {
									(a = o.system) && a.global.system == o.system && (B = "Narwhal", q || (q = a[0].os || null))
								}
								B || (B = "Rhino")
							} else "object" == typeof o.process && !o.process.browser && (a = o.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (R.push("Node " + a.versions.node), B = "Electron", K = a.versions.electron) : "string" == typeof a.versions.nw && (R.push("Chromium " + K, "Node " + a.versions.node), B = "NW.js", K = a.versions.nw)), B || (B = "Node.js", N = a.arch, q = a.platform, K = (K = /[\d.]+/.exec(a.version)) ? K[0] : null));
							q = q && h(q)
						}
						if (K && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(K) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (I && n.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (A = /b/i.test(a) ? "beta" : "alpha", K = K.replace(RegExp(a + "\\+?$"), "") + ("beta" == A ? C : w) + (/\d+\+?/.exec(a) || "")), "Fennec" == B || "Firefox" == B && /\b(?:Android|Firefox OS)\b/.test(q)) B = "Firefox Mobile";
						else if ("Maxthon" == B && K) K = K.replace(/\.[\d.]+/, ".x");
						else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (q = null), "Xbox 360" == F && /\bIEMobile\b/.test(t) && R.unshift("mobile mode");
						else if (!/^(?:Chrome|IE|Opera)$/.test(B) && (!B || F || /Browser|Mobi/.test(B)) || "Windows CE" != q && !/Mobi/i.test(t))
							if ("IE" == B && I) try {
								null === o.external && R.unshift("platform preview")
							} catch (U) {
								R.unshift("embedded")
							} else(/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(t)) && (a = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || K) ? (q = ((a = [a, /BB10/.test(t)])[1] ? (F = null, L = "BlackBerry") : "Device Software") + " " + a[0], K = null) : this != y && "Wii" != F && (I && M || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == B && /\bOS X (?:\d+\.){2,}/.test(q) || "IE" == B && (q && !/^Win/.test(q) && K > 5.5 || /\bWindows XP\b/.test(q) && K > 8 || 8 == K && !/\bTrident\b/.test(t))) && !d.test(a = e.call(y, t.replace(d, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), d.test(B) ? (/\bIE\b/.test(a) && "Mac OS" == q && (q = null), a = "identify" + a) : (a = "mask" + a, B = T ? h(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (q = null), I || (K = null)), W = ["Presto"], R.push(a));
							else B += " Mobile";
						(a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == B && "+" == a[1].slice(-1) ? (B = "WebKit Nightly", A = "alpha", K = a[1].slice(0, -1)) : K != a[1] && K != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (K = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == W && (W = ["Blink"]), I && (m || a[1]) ? (W && (W[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != W ? "27" : "28")) : (W && (W[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), W && (W[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == B && (!K || parseInt(K) > 45) && (K = a)), "Opera" == B && (a = /\bzbov|zvav$/.exec(q)) ? (B += " ", R.unshift("desktop mode"), "zvav" == a ? (B += "Mini", K = null) : B += "Mobile", q = q.replace(RegExp(" *" + a + "$"), "")) : "Safari" == B && /\bChrome\b/.exec(W && W[1]) && (R.unshift("desktop mode"), B = "Chrome Mobile", K = null, /\bOS X\b/.test(q) ? (L = "Apple", q = "iOS 4.3+") : q = null), K && 0 == K.indexOf(a = /[\d.]+$/.exec(q)) && t.indexOf("/" + a + "-") > -1 && (q = k(q.replace(a, ""))), W && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || "Safari" != B && /^iOS/.test(q) && /\bSafari\b/.test(W[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(B) && W[1]) && (a = W[W.length - 1]) && R.push(a), R.length && (R = ["(" + R.join("; ") + ")"]), L && F && F.indexOf(L) < 0 && R.push("on " + L), F && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + F), q && (a = / ([\d.+]+)$/.exec(q), l = a && "/" == q.charAt(q.length - a[0].length - 1), q = {
							architecture: 32,
							family: a && !l ? q.replace(a[0], "") : q,
							version: a ? a[1] : null,
							toString: function() {
								var e = this.version;
								return this.family + (e && !l ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
							}
						}), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (q && (q.architecture = 64, q.family = q.family.replace(RegExp(" *" + a), "")), B && (/\bWOW64\b/i.test(t) || I && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(t)) && R.unshift("32-bit")) : q && /^OS X/.test(q.family) && "Chrome" == B && parseFloat(K) >= 39 && (q.architecture = 64), t || (t = null);
						var D = {};
						return D.description = t, D.layout = W && W[0], D.manufacturer = L, D.name = B, D.prerelease = A, D.product = F, D.ua = t, D.version = B && K, D.os = q || {
							architecture: null,
							family: null,
							version: null,
							toString: function() {
								return "null"
							}
						}, D.parse = e, D.toString = function() {
							return this.description || ""
						}, D.version && R.unshift(K), D.name && R.unshift(B), q && B && (q != String(q).split(" ")[0] || q != B.split(" ")[0] && !F) && R.push(F ? "(" + q + ")" : "on " + q), R.length && (D.description = R.join(" ")), D
					}();
					i.platform = x, void 0 === (n = function() {
						return x
					}.call(t, o, t, e)) || (e.exports = n)
				}).call(this)
			}).call(this, o("./node_modules/webpack/buildin/module.js")(e), o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/fbjs/lib/emptyFunction.js"),
				n = o("./node_modules/fbjs/lib/invariant.js");
			e.exports = function() {
				function e() {
					n(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t
				};
				return o.checkPropTypes = r, o.PropTypes = o, o
			}
		},
		"./node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var r = o("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/react-router/esm/react-router.js"),
				a = o("./node_modules/history/esm/history.js"),
				l = (o("./node_modules/react-router-dom/node_modules/prop-types/index.js"), o("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				u = o("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				c = o("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var d = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				Object(r.a)(t, e);
				var o = t.prototype;
				return o.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (o) {
						throw e.preventDefault(), o
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, o.render = function() {
					var e = this,
						t = this.props,
						o = t.innerRef,
						r = (t.replace, t.to),
						n = Object(u.a)(t, ["innerRef", "replace", "to"]);
					return s.a.createElement(i.g.Consumer, null, (function(t) {
						t || Object(c.default)(!1);
						var i = "string" == typeof r ? Object(a.c)(r, null, null, t.location) : r,
							u = i ? t.history.createHref(i) : "";
						return s.a.createElement("a", Object(l.a)({}, n, {
							onClick: function(o) {
								return e.handleClick(o, t.history)
							},
							href: u,
							ref: o
						}))
					}))
				}, t
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, o, n, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-shortcuts/lib/component/index.js": function(e, t, o) {
			"use strict";
			e.exports = o("./node_modules/react-shortcuts/lib/component/shortcuts.js")
		},
		"./node_modules/react-shortcuts/lib/component/shortcuts.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var r = t[o];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, o, r) {
						return o && e(t.prototype, o), r && e(t, r), t
					}
				}(),
				n = u(o("./node_modules/react/index.js")),
				s = u(o("./node_modules/invariant/browser.js")),
				i = u(o("./node_modules/combokeys/Combokeys/index.js")),
				a = u(o("./node_modules/react-shortcuts/node_modules/prop-types/index.js")),
				l = u(o("./node_modules/react-shortcuts/lib/helpers.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var d = function(e) {
				function t() {
					var e, o, r;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var n = arguments.length, a = Array(n), u = 0; u < n; u++) a[u] = arguments[u];
					return o = r = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r._combokeys = null, r._lastEvent = null, r._bindShortcuts = function(e) {
						var t = r._getElementToBind();
						t.setAttribute("tabindex", r.props.tabIndex), r._combokeys = new i.default(t), r._decorateCombokeys(), r._combokeys.bind(e, r._handleShortcuts, r.props.eventType), r.props.global && t.addEventListener("shortcuts:global", r._customGlobalHandler)
					}, r._customGlobalHandler = function(e) {
						var t = e.detail,
							o = t.character,
							n = t.modifiers,
							s = t.event,
							i = null;
						r.props.targetNodeSelector && (i = document.querySelector(r.props.targetNodeSelector)), e.target !== r._domNode && e.target !== i && r._combokeys.handleKey(o, n, s, !0)
					}, r._decorateCombokeys = function() {
						var e = r._getElementToBind(),
							t = r._combokeys.handleKey.bind(r._combokeys);
						r._combokeys.stopCallback = function(e, t, o) {
							var n = "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.contentEditable && "true" === t.contentEditable,
								s = void 0;
							return s = e.key ? 1 === e.key.length : Boolean(l.default.getCharacter(e)), !(!n || !s || r.props.alwaysFireHandler)
						}, r._combokeys.handleKey = function(o, n, s, i) {
							if (!r._lastEvent || s.timeStamp !== r._lastEvent.timeStamp || s.type !== r._lastEvent.type) {
								r._lastEvent = s;
								var a = !1;
								if (r.props.isolate && !s.__isolateShortcuts && (s.__isolateShortcuts = !0, a = !0), i || e.dispatchEvent(new CustomEvent("shortcuts:global", {
										detail: {
											character: o,
											modifiers: n,
											event: s
										},
										bubbles: !0,
										cancelable: !0
									})), !s.__isolateShortcuts) return r.props.preventDefault && s.preventDefault(), r.props.stopPropagation && !i && s.stopPropagation(), void t(o, n, s);
								(r.props.global || a) && t(o, n, s)
							}
						}
					}, r._getElementToBind = function() {
						var e = null;
						return r.props.targetNodeSelector ? (e = document.querySelector(r.props.targetNodeSelector), (0, s.default)(e, "Node selector '" + r.props.targetNodeSelector + "'  was not found.")) : e = r._domNode, e
					}, r._unbindShortcuts = function() {
						r._combokeys && (r._combokeys.detach(), r._combokeys.reset())
					}, r._onUpdate = function() {
						var e = r.props.name && r.context.shortcuts.getShortcuts(r.props.name);
						r._unbindShortcuts(), r._bindShortcuts(e || [])
					}, r._handleShortcuts = function(e, t) {
						if (r.props.name) {
							var o = r.context.shortcuts.findShortcutName(t, r.props.name);
							r.props.handler && r.props.handler(o, e)
						}
					}, c(r, o)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), r(t, [{
					key: "componentDidMount",
					value: function() {
						this._onUpdate(), this.props.name && this.context.shortcuts.addUpdateListener(this._onUpdate)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						(this._unbindShortcuts(), this.props.name && this.context.shortcuts.removeUpdateListener(this._onUpdate), this.props.global) && this._getElementToBind().removeEventListener("shortcuts:global", this._customGlobalHandler)
					}
				}, {
					key: "render",
					value: function() {
						var e = this;
						return n.default.createElement("div", {
							ref: function(t) {
								e._domNode = t
							},
							tabIndex: this.props.tabIndex,
							className: this.props.className
						}, this.props.children)
					}
				}]), t
			}(n.default.Component);
			d.displayName = "Shortcuts", d.contextTypes = {
				shortcuts: a.default.object.isRequired
			}, d.propTypes = {
				children: a.default.node,
				handler: a.default.func,
				name: a.default.string,
				tabIndex: a.default.number,
				className: a.default.string,
				eventType: a.default.string,
				stopPropagation: a.default.bool,
				preventDefault: a.default.bool,
				targetNodeSelector: a.default.string,
				global: a.default.bool,
				isolate: a.default.bool,
				alwaysFireHandler: a.default.bool
			}, d.defaultProps = {
				tabIndex: -1,
				className: null,
				eventType: null,
				stopPropagation: !0,
				preventDefault: !1,
				targetNodeSelector: null,
				global: !1,
				isolate: !1,
				alwaysFireHandler: !1
			}, t.default = d, e.exports = t.default
		},
		"./node_modules/react-shortcuts/lib/helpers.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, n = o("./node_modules/platform/platform.js"),
				s = (r = n) && r.__esModule ? r : {
					default: r
				};
			t.default = {
				getPlatformName: function() {
					var e = s.default.os.family || "";
					return e = e.toLowerCase().replace(/ /g, ""), e = /\bwin/.test(e) ? "windows" : /darwin|osx/.test(e) ? "osx" : /linux|freebsd|sunos|ubuntu|debian|fedora|redhat|suse/.test(e) ? "linux" : "other"
				},
				getCharacter: function(e) {
					return null == e.which ? String.fromCharCode(e.keyCode) : 0 !== e.which && 0 !== e.charCode ? String.fromCharCode(e.which) : null
				}
			}, e.exports = t.default
		},
		"./node_modules/react-shortcuts/lib/index.js": function(e, t, o) {
			"use strict";
			e.exports = {
				ShortcutManager: o("./node_modules/react-shortcuts/lib/shortcut-manager.js"),
				Shortcuts: o("./node_modules/react-shortcuts/lib/component/index.js")
			}
		},
		"./node_modules/react-shortcuts/lib/shortcut-manager.js": function(e, t, o) {
			"use strict";
			(function(r) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = function() {
						function e(e, t) {
							for (var o = 0; o < t.length; o++) {
								var r = t[o];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, o, r) {
							return o && e(t.prototype, o), r && e(t, r), t
						}
					}(),
					s = c(o("./node_modules/just-reduce-object/index.js")),
					i = c(o("./node_modules/invariant/browser.js")),
					a = o("./node_modules/node-libs-browser/node_modules/events/events.js"),
					l = c(o("./node_modules/react-shortcuts/lib/helpers.js")),
					u = o("./node_modules/react-shortcuts/lib/utils.js");

				function c(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var d = function(e) {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
						return o._platformName = l.default.getPlatformName(), o._parseShortcutDescriptor = function(e) {
							return (0, u.isPlainObject)(e) ? e[o._platformName] : e
						}, o._keymap = e, o
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), n(t, [{
						key: "addUpdateListener",
						value: function(e) {
							(0, i.default)(e, "addUpdateListener: callback argument is not defined or falsy"), this.on(t.CHANGE_EVENT, e)
						}
					}, {
						key: "removeUpdateListener",
						value: function(e) {
							this.removeListener(t.CHANGE_EVENT, e)
						}
					}, {
						key: "setKeymap",
						value: function(e) {
							(0, i.default)(e, "setKeymap: keymap argument is not defined or falsy."), this._keymap = e, this.emit(t.CHANGE_EVENT)
						}
					}, {
						key: "extendKeymap",
						value: function(e) {
							(0, i.default)(e, "extendKeymap: keymap argument is not defined or falsy."), this._keymap = Object.assign({}, this._keymap, e), this.emit(t.CHANGE_EVENT)
						}
					}, {
						key: "getAllShortcuts",
						value: function() {
							return this._keymap
						}
					}, {
						key: "getAllShortcutsForPlatform",
						value: function(e) {
							return function t(o) {
								return (0, s.default)(o, (function(o, r, n) {
									if ((0, u.isPlainObject)(n)) {
										if (!n[e]) return o[r] = t(n), o;
										n = n[e]
									}
									return o[r] = n, o
								}), {})
							}(this._keymap)
						}
					}, {
						key: "getAllShortcutsForCurrentPlatform",
						value: function() {
							return this.getAllShortcutsForPlatform(this._platformName)
						}
					}, {
						key: "getShortcuts",
						value: function(e) {
							(0, i.default)(e, "getShortcuts: name argument is not defined or falsy.");
							var t = this._keymap[e];
							if (t) return (0, u.compact)((0, u.flatten)((0, u.map)(t, this._parseShortcutDescriptor)))
						}
					}, {
						key: "_parseShortcutKeyName",
						value: function(e, t) {
							var o = this;
							return (0, u.findKey)(e, (function(e) {
								if ((0, u.isPlainObject)(e) && (e = e[o._platformName]), (0, u.isArray)(e)) {
									var r = e.indexOf(t);
									r >= 0 && (e = e[r])
								}
								return e === t
							}))
						}
					}, {
						key: "findShortcutName",
						value: function(e, t) {
							(0, i.default)(e, "findShortcutName: keyName argument is not defined or falsy."), (0, i.default)(t, "findShortcutName: componentName argument is not defined or falsy.");
							var o = this._keymap[t];
							return this._parseShortcutKeyName(o, e)
						}
					}]), t
				}(a.EventEmitter);
				d.CHANGE_EVENT = "shortcuts:update", t.default = d, e.exports = t.default
			}).call(this, o("./node_modules/process/browser.js"))
		},
		"./node_modules/react-shortcuts/lib/utils.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				n = t.isArray = function(e) {
					return Array.isArray(e)
				},
				s = t.isPlainObject = function(e) {
					if (!("object" === (void 0 === e ? "undefined" : r(e)) && null !== e && !n(e)) || e.toString && "[object Object]" !== e.toString()) return !1;
					var t = Object.getPrototypeOf(e);
					if (null === t) return !0;
					var o = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
					return "function" == typeof o && o instanceof o && Function.prototype.toString.call(o) === Function.prototype.toString.call(Object)
				};
			t.findKey = function(e, t) {
				if (s(e) || n(e)) return Object.keys(e).find((function(o) {
					return t(e[o])
				}))
			}, t.compact = function(e) {
				return e.filter(Boolean)
			}, t.flatten = function(e) {
				if (!n(e)) throw new Error("flatten expects an array");
				return function e(t) {
					var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return t.reduce((function(t, r) {
						return n(r) && o ? t.concat(e(r, !1)) : (t.push(r), t)
					}), [])
				}(e)
			}, t.map = function(e, t) {
				if (n(e)) return e.map(t);
				for (var o = [], r = Object.keys(e), s = r.length, i = 0; i < s; i += 1) {
					var a = r[i];
					o.push(t(e[a], a))
				}
				return o
			}
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react-shortcuts/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, o, n, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-shortcuts/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~Reddit.b3c5948aa506fb8a9a4c.js.map