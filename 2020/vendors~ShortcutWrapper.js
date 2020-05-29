// https://www.redditstatic.com/desktop2x/vendors~ShortcutWrapper.48375518621709a934a5.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ShortcutWrapper"], {
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
				for (var n = 0; n < e.length; ++n) this.bindSingle(e[n], t, o)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSequence.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, n, r) {
				var s = this;

				function i(t) {
					return function() {
						s.nextExpectedAction = t, ++s.sequenceLevels[e], s.resetSequenceTimer()
					}
				}

				function a(t) {
					var i;
					s.fireCallback(n, t, e), "keyup" !== r && (i = o("./node_modules/combokeys/helpers/characterFromEvent.js"), s.ignoreNextKeyup = i(t)), setTimeout((function() {
						s.resetSequences()
					}), 10)
				}
				s.sequenceLevels[e] = 0;
				for (var l = 0; l < t.length; ++l) {
					var c = l + 1 === t.length ? a : i(r || s.getKeyInfo(t[l + 1]).action);
					s.bindSingle(t[l], c, r, e, l)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSingle.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o, n, r) {
				this.directMap[e + ":" + o] = t;
				var s, i = (e = e.replace(/\s+/g, " ")).split(" ");
				i.length > 1 ? this.bindSequence(e, i, t, o) : (s = this.getKeyInfo(e, o), this.callbacks[s.key] = this.callbacks[s.key] || [], this.getMatches(s.key, s.modifiers, {
					type: s.action
				}, n, e, r), this.callbacks[s.key][n ? "unshift" : "push"]({
					callback: t,
					modifiers: s.modifiers,
					action: s.action,
					seq: n,
					level: r,
					combo: e
				}))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/detach.js": function(e, t, o) {
			var n = o("./node_modules/combokeys/Combokeys/prototype/dom-event.js").off;
			e.exports = function() {
				var e = this.element;
				n(e, "keypress", this.eventHandler), n(e, "keydown", this.eventHandler), n(e, "keyup", this.eventHandler)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/dom-event.js": function(e, t) {
			function o(e, t, o, n) {
				return !e.addEventListener && (t = "on" + t), (e.addEventListener || e.attachEvent).call(e, t, o, n), o
			}
			e.exports = o, e.exports.on = o, e.exports.off = function(e, t, o, n) {
				return !e.removeEventListener && (t = "on" + t), (e.removeEventListener || e.detachEvent).call(e, t, o, n), o
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/fireCallback.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, n, r) {
				this.stopCallback(t, t.target || t.srcElement, n, r) || !1 === e(t, n) && (o("./node_modules/combokeys/helpers/preventDefault.js")(t), o("./node_modules/combokeys/helpers/stopPropagation.js")(t))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				var n, r, s, i, a, l, c = [];
				for (n = o("./node_modules/combokeys/helpers/keysFromString.js")(e), i = o("./node_modules/combokeys/helpers/special-aliases.js"), a = o("./node_modules/combokeys/helpers/shift-map.js"), l = o("./node_modules/combokeys/helpers/isModifier.js"), s = 0; s < n.length; ++s) i[r = n[s]] && (r = i[r]), t && "keypress" !== t && a[r] && (r = a[r], c.push("shift")), l(r) && c.push(r);
				return {
					key: r,
					modifiers: c,
					action: t = this.pickBestAction(r, c, t)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getMatches.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, n, r, s, i) {
				var a, l, c, u, p = [],
					d = n.type;
				"keypress" !== d || n.code && "Arrow" === n.code.slice(0, 5) || (this.callbacks["any-character"] || []).forEach((function(e) {
					p.push(e)
				}));
				if (!this.callbacks[e]) return p;
				for (c = o("./node_modules/combokeys/helpers/isModifier.js"), "keyup" === d && c(e) && (t = [e]), a = 0; a < this.callbacks[e].length; ++a)
					if (l = this.callbacks[e][a], (r || !l.seq || this.sequenceLevels[l.seq] === l.level) && d === l.action && (u = o("./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"), "keypress" === d && !n.metaKey && !n.ctrlKey || u(t, l.modifiers))) {
						var b = !r && l.combo === s,
							m = r && l.seq === r && l.level === i;
						(b || m) && this.callbacks[e].splice(a, 1), p.push(l)
					} return p
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getReverseMap.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				var e, t = this.constructor;
				if (!t.REVERSE_MAP)
					for (var n in t.REVERSE_MAP = {}, e = o("./node_modules/combokeys/helpers/special-keys-map.js")) n > 95 && n < 112 || e.hasOwnProperty(n) && (t.REVERSE_MAP[e[n]] = n);
				return t.REVERSE_MAP
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKey.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, n) {
				var r, s, i, a, l = {},
					c = 0,
					u = !1;
				for (r = this.getMatches(e, t, n), s = 0; s < r.length; ++s) r[s].seq && (c = Math.max(c, r[s].level));
				for (s = 0; s < r.length; ++s)
					if (r[s].seq) {
						if (r[s].level !== c) continue;
						u = !0, l[r[s].seq] = 1, this.fireCallback(r[s].callback, n, r[s].combo, r[s].seq)
					} else u || this.fireCallback(r[s].callback, n, r[s].combo);
				a = "keypress" === n.type && this.ignoreNextKeypress, i = o("./node_modules/combokeys/helpers/isModifier.js"), n.type !== this.nextExpectedAction || i(e) || a || this.resetSequences(l), this.ignoreNextKeypress = u && "keydown" === n.type
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t;
				"number" != typeof e.which && (e.which = e.keyCode);
				var n = o("./node_modules/combokeys/helpers/characterFromEvent.js")(e);
				void 0 !== n && ("keyup" !== e.type || this.ignoreNextKeyup !== n ? (t = o("./node_modules/combokeys/helpers/eventModifiers.js"), this.handleKey(n, t(e), e)) : this.ignoreNextKeyup = !1)
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
				var t, n;
				if (t = o("./node_modules/combokeys/helpers/special-keys-map.js"), n = o("./node_modules/combokeys/helpers/special-characters-map.js"), "keypress" === e.type) {
					var r = String.fromCharCode(e.which);
					return e.shiftKey || (r = r.toLowerCase()), r
				}
				return void 0 !== t[e.which] ? t[e.which] : void 0 !== n[e.which] ? n[e.which] : String.fromCharCode(e.which).toLowerCase()
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
			for (var n = 1; n < 20; ++n) e.exports[111 + n] = "f" + n;
			for (n = 0; n <= 9; ++n) e.exports[n + 96] = n
		},
		"./node_modules/combokeys/helpers/stopPropagation.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
			}
		},
		"./node_modules/fbjs/lib/emptyFunction.js": function(e, t, o) {
			"use strict";

			function n(e) {
				return function() {
					return e
				}
			}
			var r = function() {};
			r.thatReturns = n, r.thatReturnsFalse = n(!1), r.thatReturnsTrue = n(!0), r.thatReturnsNull = n(null), r.thatReturnsThis = function() {
				return this
			}, r.thatReturnsArgument = function(e) {
				return e
			}, e.exports = r
		},
		"./node_modules/just-reduce-object/index.js": function(e, t) {
			e.exports = function(e, t) {
				var o = [function(o, r, s, i) {
						n || (o = e[i[0]], n = !0);
						return t(o, r, e[r], s, i)
					}],
					n = 2 in arguments;
				return n && o.push(arguments[2]), Array.prototype.reduce.apply(Object.keys(e), o)
			}
		},
		"./node_modules/platform/platform.js": function(e, t, o) {
			(function(e, n) {
				var r;
				(function() {
					"use strict";
					var s = {
							function: !0,
							object: !0
						},
						i = s[typeof window] && window || this,
						a = s[typeof t] && t,
						l = s[typeof e] && e && !e.nodeType && e,
						c = a && l && "object" == typeof n && n;
					!c || c.global !== c && c.window !== c && c.self !== c || (i = c);
					var u = Math.pow(2, 53) - 1,
						p = /\bOpera/,
						d = Object.prototype,
						b = d.hasOwnProperty,
						m = d.toString;

					function f(e) {
						return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
					}

					function y(e) {
						return e = x(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : f(e)
					}

					function h(e, t) {
						for (var o in e) b.call(e, o) && t(e[o], o, e)
					}

					function k(e) {
						return null == e ? f(e) : m.call(e).slice(8, -1)
					}

					function _(e) {
						return String(e).replace(/([ -])(?!$)/g, "$1?")
					}

					function v(e, t) {
						var o = null;
						return function(e, t) {
							var o = -1,
								n = e ? e.length : 0;
							if ("number" == typeof n && n > -1 && n <= u)
								for (; ++o < n;) t(e[o], o, e);
							else h(e, t)
						}(e, (function(n, r) {
							o = t(o, n, r, e)
						})), o
					}

					function x(e) {
						return String(e).replace(/^ +| +$/g, "")
					}
					var g = function e(t) {
						var o = i,
							n = t && "object" == typeof t && "String" != k(t);
						n && (o = t, t = null);
						var r = o.navigator || {},
							s = r.userAgent || "";
						t || (t = s);
						var a, l, c, u, d, b = n ? !!r.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(m.toString()),
							f = n ? "Object" : "ScriptBridgingProxyObject",
							g = n ? "Object" : "Environment",
							S = n && o.java ? "JavaPackage" : k(o.java),
							j = n ? "Object" : "RuntimeObject",
							E = /\bJava/.test(S) && o.java,
							C = E && k(o.environment) == g,
							O = E ? "a" : "α",
							w = E ? "b" : "β",
							P = o.document || {},
							M = o.operamini || o.opera,
							T = p.test(T = n && M ? M["[[Class]]"] : k(M)) ? T : M = null,
							N = t,
							A = [],
							R = null,
							K = t == s,
							B = K && M && "function" == typeof M.version && M.version(),
							I = v([{
								label: "EdgeHTML",
								pattern: "Edge"
							}, "Trident", {
								label: "WebKit",
								pattern: "AppleWebKit"
							}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, o) {
								return e || RegExp("\\b" + (o.pattern || _(o)) + "\\b", "i").exec(t) && (o.label || o)
							})),
							F = function(e) {
								return v(e, (function(e, o) {
									return e || RegExp("\\b" + (o.pattern || _(o)) + "\\b", "i").exec(t) && (o.label || o)
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
							W = q([{
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
								return v(e, (function(e, o, n) {
									return e || (o[W] || o[/^[a-z]+(?: +[a-z]+\b)*/i.exec(W)] || RegExp("\\b" + _(n) + "(?:\\b|\\w*\\d)", "i").exec(t)) && n
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
							G = function(e) {
								return v(e, (function(e, o) {
									var n = o.pattern || _(o);
									return !e && (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, o) {
										var n = {
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
										return t && o && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (n = n[/[\d.]+$/.exec(e)]) && (e = "Windows " + n), e = String(e), t && o && (e = e.replace(RegExp(t, "i"), o)), e = y(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
									}(e, n, o.label || o)), e
								}))
							}(["Windows Phone", "Android", "CentOS", {
								label: "Chrome OS",
								pattern: "CrOS"
							}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

						function q(e) {
							return v(e, (function(e, o) {
								var n = o.pattern || _(o);
								return !e && (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(o.label && !RegExp(n, "i").test(o.label) ? o.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), o = o.label || o, e = y(e[0].replace(RegExp(n, "i"), o).replace(RegExp("; *(?:" + o + "[_-])?", "i"), " ").replace(RegExp("(" + o + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
							}))
						}
						if (I && (I = [I]), L && !W && (W = q([L])), (a = /\bGoogle TV\b/.exec(W)) && (W = a[0]), /\bSimulator\b/i.test(t) && (W = (W ? W + " " : "") + "Simulator"), "Opera Mini" == F && /\bOPiOS\b/.test(t) && A.push("running in Turbo/Uncompressed mode"), "IE" == F && /\blike iPhone OS\b/.test(t) ? (L = (a = e(t.replace(/like iPhone OS/, ""))).manufacturer, W = a.product) : /^iP/.test(W) ? (F || (F = "Safari"), G = "iOS" + ((a = / OS ([\d_]+)/i.exec(t)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != F || /buntu/i.test(G) ? L && "Google" != L && (/Chrome/.test(F) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(W)) || /\bAndroid\b/.test(G) && /^Chrome/.test(F) && /\bVersion\//i.test(t) ? (F = "Android Browser", G = /\bAndroid\b/.test(G) ? G : "Android") : "Silk" == F ? (/\bMobi/i.test(t) || (G = "Android", A.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && A.unshift("accelerated")) : "PaleMoon" == F && (a = /\bFirefox\/([\d.]+)\b/.exec(t)) ? A.push("identifying as Firefox " + a[1]) : "Firefox" == F && (a = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (G || (G = "Firefox OS"), W || (W = a[1])) : !F || (a = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(F)) ? (F && !W && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(a + "/") + 8)) && (F = null), (a = W || L || G) && (W || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G)) && (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G) ? G : a) + " Browser")) : "Electron" == F && (a = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && A.push("Chromium " + a) : G = "Kubuntu", B || (B = v(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", _(F), "(?:Firefox|Minefield|NetFront)"], (function(e, o) {
								return e || (RegExp(o + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
							}))), (a = ("iCab" == I && parseFloat(B) > 3 ? "WebKit" : /\bOpera\b/.test(F) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(I) && "WebKit" || !I && /\bMSIE\b/i.test(t) && ("Mac OS" == G ? "Tasman" : "Trident") || "WebKit" == I && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront") && (I = [a]), "IE" == F && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (F += " Mobile", G = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), A.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (F = "IE Mobile", G = "Windows Phone 8.x", A.unshift("desktop mode"), B || (B = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != F && "Trident" == I && (a = /\brv:([\d.]+)/.exec(t)) && (F && A.push("identifying as " + F + (B ? " " + B : "")), F = "IE", B = a[1]), K) {
							if (u = "global", d = null != (c = o) ? typeof c[u] : "number", /^(?:boolean|number|string|undefined)$/.test(d) || "object" == d && !c[u]) k(a = o.runtime) == f ? (F = "Adobe AIR", G = a.flash.system.Capabilities.os) : k(a = o.phantom) == j ? (F = "PhantomJS", B = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof P.documentMode && (a = /\bTrident\/(\d+)/i.exec(t)) ? (B = [B, P.documentMode], (a = +a[1] + 4) != B[1] && (A.push("IE " + B[1] + " mode"), I && (I[1] = ""), B[1] = a), B = "IE" == F ? String(B[1].toFixed(1)) : B[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(F) && (A.push("masking as " + F + " " + B), F = "IE", B = "11.0", I = ["Trident"], G = "Windows");
							else if (E && (N = (a = E.lang.System).getProperty("os.arch"), G = G || a.getProperty("os.name") + " " + a.getProperty("os.version")), C) {
								try {
									B = o.require("ringo/engine").version.join("."), F = "RingoJS"
								} catch (H) {
									(a = o.system) && a.global.system == o.system && (F = "Narwhal", G || (G = a[0].os || null))
								}
								F || (F = "Rhino")
							} else "object" == typeof o.process && !o.process.browser && (a = o.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (A.push("Node " + a.versions.node), F = "Electron", B = a.versions.electron) : "string" == typeof a.versions.nw && (A.push("Chromium " + B, "Node " + a.versions.node), F = "NW.js", B = a.versions.nw)), F || (F = "Node.js", N = a.arch, G = a.platform, B = (B = /[\d.]+/.exec(a.version)) ? B[0] : null));
							G = G && y(G)
						}
						if (B && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (K && r.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (R = /b/i.test(a) ? "beta" : "alpha", B = B.replace(RegExp(a + "\\+?$"), "") + ("beta" == R ? w : O) + (/\d+\+?/.exec(a) || "")), "Fennec" == F || "Firefox" == F && /\b(?:Android|Firefox OS)\b/.test(G)) F = "Firefox Mobile";
						else if ("Maxthon" == F && B) B = B.replace(/\.[\d.]+/, ".x");
						else if (/\bXbox\b/i.test(W)) "Xbox 360" == W && (G = null), "Xbox 360" == W && /\bIEMobile\b/.test(t) && A.unshift("mobile mode");
						else if (!/^(?:Chrome|IE|Opera)$/.test(F) && (!F || W || /Browser|Mobi/.test(F)) || "Windows CE" != G && !/Mobi/i.test(t))
							if ("IE" == F && K) try {
								null === o.external && A.unshift("platform preview")
							} catch (H) {
								A.unshift("embedded")
							} else(/\bBlackBerry\b/.test(W) || /\bBB10\b/.test(t)) && (a = (RegExp(W.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || B) ? (G = ((a = [a, /BB10/.test(t)])[1] ? (W = null, L = "BlackBerry") : "Device Software") + " " + a[0], B = null) : this != h && "Wii" != W && (K && M || /Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(G) || "IE" == F && (G && !/^Win/.test(G) && B > 5.5 || /\bWindows XP\b/.test(G) && B > 8 || 8 == B && !/\bTrident\b/.test(t))) && !p.test(a = e.call(h, t.replace(p, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), p.test(F) ? (/\bIE\b/.test(a) && "Mac OS" == G && (G = null), a = "identify" + a) : (a = "mask" + a, F = T ? y(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (G = null), K || (B = null)), I = ["Presto"], A.push(a));
							else F += " Mobile";
						(a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == F && "+" == a[1].slice(-1) ? (F = "WebKit Nightly", R = "alpha", B = a[1].slice(0, -1)) : B != a[1] && B != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (B = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == I && (I = ["Blink"]), K && (b || a[1]) ? (I && (I[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != I ? "27" : "28")) : (I && (I[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), I && (I[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == F && (!B || parseInt(B) > 45) && (B = a)), "Opera" == F && (a = /\bzbov|zvav$/.exec(G)) ? (F += " ", A.unshift("desktop mode"), "zvav" == a ? (F += "Mini", B = null) : F += "Mobile", G = G.replace(RegExp(" *" + a + "$"), "")) : "Safari" == F && /\bChrome\b/.exec(I && I[1]) && (A.unshift("desktop mode"), F = "Chrome Mobile", B = null, /\bOS X\b/.test(G) ? (L = "Apple", G = "iOS 4.3+") : G = null), B && 0 == B.indexOf(a = /[\d.]+$/.exec(G)) && t.indexOf("/" + a + "-") > -1 && (G = x(G.replace(a, ""))), I && !/\b(?:Avant|Nook)\b/.test(F) && (/Browser|Lunascape|Maxthon/.test(F) || "Safari" != F && /^iOS/.test(G) && /\bSafari\b/.test(I[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(F) && I[1]) && (a = I[I.length - 1]) && A.push(a), A.length && (A = ["(" + A.join("; ") + ")"]), L && W && W.indexOf(L) < 0 && A.push("on " + L), W && A.push((/^on /.test(A[A.length - 1]) ? "" : "on ") + W), G && (a = / ([\d.+]+)$/.exec(G), l = a && "/" == G.charAt(G.length - a[0].length - 1), G = {
							architecture: 32,
							family: a && !l ? G.replace(a[0], "") : G,
							version: a ? a[1] : null,
							toString: function() {
								var e = this.version;
								return this.family + (e && !l ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
							}
						}), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (G && (G.architecture = 64, G.family = G.family.replace(RegExp(" *" + a), "")), F && (/\bWOW64\b/i.test(t) || K && /\w(?:86|32)$/.test(r.cpuClass || r.platform) && !/\bWin64; x64\b/i.test(t)) && A.unshift("32-bit")) : G && /^OS X/.test(G.family) && "Chrome" == F && parseFloat(B) >= 39 && (G.architecture = 64), t || (t = null);
						var $ = {};
						return $.description = t, $.layout = I && I[0], $.manufacturer = L, $.name = F, $.prerelease = R, $.product = W, $.ua = t, $.version = F && B, $.os = G || {
							architecture: null,
							family: null,
							version: null,
							toString: function() {
								return "null"
							}
						}, $.parse = e, $.toString = function() {
							return this.description || ""
						}, $.version && A.unshift(B), $.name && A.unshift(F), G && F && (G != String(G).split(" ")[0] || G != F.split(" ")[0] && !W) && A.push(W ? "(" + G + ")" : "on " + G), A.length && ($.description = A.join(" ")), $
					}();
					i.platform = g, void 0 === (r = function() {
						return g
					}.call(t, o, t, e)) || (e.exports = r)
				}).call(this)
			}).call(this, o("./node_modules/webpack/buildin/module.js")(e), o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbjs/lib/emptyFunction.js"),
				r = o("./node_modules/fbjs/lib/invariant.js");
			e.exports = function() {
				function e() {
					r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/prop-types/factoryWithThrowingShims.js")()
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
			var n = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}(),
				r = c(o("./node_modules/react/index.js")),
				s = c(o("./node_modules/invariant/browser.js")),
				i = c(o("./node_modules/combokeys/Combokeys/index.js")),
				a = c(o("./node_modules/react-shortcuts/node_modules/prop-types/index.js")),
				l = c(o("./node_modules/react-shortcuts/lib/helpers.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var p = function(e) {
				function t() {
					var e, o, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, a = Array(r), c = 0; c < r; c++) a[c] = arguments[c];
					return o = n = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n._combokeys = null, n._lastEvent = null, n._bindShortcuts = function(e) {
						var t = n._getElementToBind();
						t.setAttribute("tabindex", n.props.tabIndex), n._combokeys = new i.default(t), n._decorateCombokeys(), n._combokeys.bind(e, n._handleShortcuts, n.props.eventType), n.props.global && t.addEventListener("shortcuts:global", n._customGlobalHandler)
					}, n._customGlobalHandler = function(e) {
						var t = e.detail,
							o = t.character,
							r = t.modifiers,
							s = t.event,
							i = null;
						n.props.targetNodeSelector && (i = document.querySelector(n.props.targetNodeSelector)), e.target !== n._domNode && e.target !== i && n._combokeys.handleKey(o, r, s, !0)
					}, n._decorateCombokeys = function() {
						var e = n._getElementToBind(),
							t = n._combokeys.handleKey.bind(n._combokeys);
						n._combokeys.stopCallback = function(e, t, o) {
							var r = "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.contentEditable && "true" === t.contentEditable,
								s = void 0;
							return s = e.key ? 1 === e.key.length : Boolean(l.default.getCharacter(e)), !(!r || !s || n.props.alwaysFireHandler)
						}, n._combokeys.handleKey = function(o, r, s, i) {
							if (!n._lastEvent || s.timeStamp !== n._lastEvent.timeStamp || s.type !== n._lastEvent.type) {
								n._lastEvent = s;
								var a = !1;
								if (n.props.isolate && !s.__isolateShortcuts && (s.__isolateShortcuts = !0, a = !0), i || e.dispatchEvent(new CustomEvent("shortcuts:global", {
										detail: {
											character: o,
											modifiers: r,
											event: s
										},
										bubbles: !0,
										cancelable: !0
									})), !s.__isolateShortcuts) return n.props.preventDefault && s.preventDefault(), n.props.stopPropagation && !i && s.stopPropagation(), void t(o, r, s);
								(n.props.global || a) && t(o, r, s)
							}
						}
					}, n._getElementToBind = function() {
						var e = null;
						return n.props.targetNodeSelector ? (e = document.querySelector(n.props.targetNodeSelector), (0, s.default)(e, "Node selector '" + n.props.targetNodeSelector + "'  was not found.")) : e = n._domNode, e
					}, n._unbindShortcuts = function() {
						n._combokeys && (n._combokeys.detach(), n._combokeys.reset())
					}, n._onUpdate = function() {
						var e = n.props.name && n.context.shortcuts.getShortcuts(n.props.name);
						n._unbindShortcuts(), n._bindShortcuts(e || [])
					}, n._handleShortcuts = function(e, t) {
						if (n.props.name) {
							var o = n.context.shortcuts.findShortcutName(t, n.props.name);
							n.props.handler && n.props.handler(o, e)
						}
					}, u(n, o)
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
						return r.default.createElement("div", {
							ref: function(t) {
								e._domNode = t
							},
							tabIndex: this.props.tabIndex,
							className: this.props.className
						}, this.props.children)
					}
				}]), t
			}(r.default.Component);
			p.displayName = "Shortcuts", p.contextTypes = {
				shortcuts: a.default.object.isRequired
			}, p.propTypes = {
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
			}, p.defaultProps = {
				tabIndex: -1,
				className: null,
				eventType: null,
				stopPropagation: !0,
				preventDefault: !1,
				targetNodeSelector: null,
				global: !1,
				isolate: !1,
				alwaysFireHandler: !1
			}, t.default = p, e.exports = t.default
		},
		"./node_modules/react-shortcuts/lib/helpers.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, r = o("./node_modules/platform/platform.js"),
				s = (n = r) && n.__esModule ? n : {
					default: n
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
			(function(n) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function() {
						function e(e, t) {
							for (var o = 0; o < t.length; o++) {
								var n = t[o];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
							}
						}
						return function(t, o, n) {
							return o && e(t.prototype, o), n && e(t, n), t
						}
					}(),
					s = u(o("./node_modules/just-reduce-object/index.js")),
					i = u(o("./node_modules/invariant/browser.js")),
					a = o("./node_modules/node-libs-browser/node_modules/events/events.js"),
					l = u(o("./node_modules/react-shortcuts/lib/helpers.js")),
					c = o("./node_modules/react-shortcuts/lib/utils.js");

				function u(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var p = function(e) {
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
							return (0, c.isPlainObject)(e) ? e[o._platformName] : e
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
					}(t, e), r(t, [{
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
								return (0, s.default)(o, (function(o, n, r) {
									if ((0, c.isPlainObject)(r)) {
										if (!r[e]) return o[n] = t(r), o;
										r = r[e]
									}
									return o[n] = r, o
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
							if (t) return (0, c.compact)((0, c.flatten)((0, c.map)(t, this._parseShortcutDescriptor)))
						}
					}, {
						key: "_parseShortcutKeyName",
						value: function(e, t) {
							var o = this;
							return (0, c.findKey)(e, (function(e) {
								if ((0, c.isPlainObject)(e) && (e = e[o._platformName]), (0, c.isArray)(e)) {
									var n = e.indexOf(t);
									n >= 0 && (e = e[n])
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
				p.CHANGE_EVENT = "shortcuts:update", t.default = p, e.exports = t.default
			}).call(this, o("./node_modules/process/browser.js"))
		},
		"./node_modules/react-shortcuts/lib/utils.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				r = t.isArray = function(e) {
					return Array.isArray(e)
				},
				s = t.isPlainObject = function(e) {
					if (!("object" === (void 0 === e ? "undefined" : n(e)) && null !== e && !r(e)) || e.toString && "[object Object]" !== e.toString()) return !1;
					var t = Object.getPrototypeOf(e);
					if (null === t) return !0;
					var o = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
					return "function" == typeof o && o instanceof o && Function.prototype.toString.call(o) === Function.prototype.toString.call(Object)
				};
			t.findKey = function(e, t) {
				if (s(e) || r(e)) return Object.keys(e).find((function(o) {
					return t(e[o])
				}))
			}, t.compact = function(e) {
				return e.filter(Boolean)
			}, t.flatten = function(e) {
				if (!r(e)) throw new Error("flatten expects an array");
				return function e(t) {
					var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return t.reduce((function(t, n) {
						return r(n) && o ? t.concat(e(n, !1)) : (t.push(n), t)
					}), [])
				}(e)
			}, t.map = function(e, t) {
				if (r(e)) return e.map(t);
				for (var o = [], n = Object.keys(e), s = n.length, i = 0; i < s; i += 1) {
					var a = n[i];
					o.push(t(e[a], a))
				}
				return o
			}
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-shortcuts/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, o, r, s, i) {
					if (i !== n) {
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
				return o.checkPropTypes = r, o.PropTypes = o, o
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
//# sourceMappingURL=vendors~ShortcutWrapper.48375518621709a934a5.js.map