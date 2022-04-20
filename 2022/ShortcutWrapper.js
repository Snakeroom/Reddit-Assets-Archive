// https://www.redditstatic.com/desktop2x/ShortcutWrapper.d0e892f9b14338971094.js
// Retrieved at 4/20/2022, 5:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ShortcutWrapper"], {
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
				for (var s = 0; s < e.length; ++s) this.bindSingle(e[s], t, o)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSequence.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, s, n) {
				var r = this;

				function i(t) {
					return function() {
						r.nextExpectedAction = t, ++r.sequenceLevels[e], r.resetSequenceTimer()
					}
				}

				function a(t) {
					var i;
					r.fireCallback(s, t, e), "keyup" !== n && (i = o("./node_modules/combokeys/helpers/characterFromEvent.js"), r.ignoreNextKeyup = i(t)), setTimeout((function() {
						r.resetSequences()
					}), 10)
				}
				r.sequenceLevels[e] = 0;
				for (var c = 0; c < t.length; ++c) {
					var l = c + 1 === t.length ? a : i(n || r.getKeyInfo(t[c + 1]).action);
					r.bindSingle(t[c], l, n, e, c)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/bindSingle.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, o, s, n) {
				this.directMap[e + ":" + o] = t;
				var r, i = (e = e.replace(/\s+/g, " ")).split(" ");
				i.length > 1 ? this.bindSequence(e, i, t, o) : (r = this.getKeyInfo(e, o), this.callbacks[r.key] = this.callbacks[r.key] || [], this.getMatches(r.key, r.modifiers, {
					type: r.action
				}, s, e, n), this.callbacks[r.key][s ? "unshift" : "push"]({
					callback: t,
					modifiers: r.modifiers,
					action: r.action,
					seq: s,
					level: n,
					combo: e
				}))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/detach.js": function(e, t, o) {
			var s = o("./node_modules/combokeys/Combokeys/prototype/dom-event.js").off;
			e.exports = function() {
				var e = this.element;
				s(e, "keypress", this.eventHandler), s(e, "keydown", this.eventHandler), s(e, "keyup", this.eventHandler)
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/dom-event.js": function(e, t) {
			function o(e, t, o, s) {
				return !e.addEventListener && (t = "on" + t), (e.addEventListener || e.attachEvent).call(e, t, o, s), o
			}
			e.exports = o, e.exports.on = o, e.exports.off = function(e, t, o, s) {
				return !e.removeEventListener && (t = "on" + t), (e.removeEventListener || e.detachEvent).call(e, t, o, s), o
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/fireCallback.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, s, n) {
				this.stopCallback(t, t.target || t.srcElement, s, n) || !1 === e(t, s) && (o("./node_modules/combokeys/helpers/preventDefault.js")(t), o("./node_modules/combokeys/helpers/stopPropagation.js")(t))
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t) {
				var s, n, r, i, a, c, l = [];
				for (s = o("./node_modules/combokeys/helpers/keysFromString.js")(e), i = o("./node_modules/combokeys/helpers/special-aliases.js"), a = o("./node_modules/combokeys/helpers/shift-map.js"), c = o("./node_modules/combokeys/helpers/isModifier.js"), r = 0; r < s.length; ++r) i[n = s[r]] && (n = i[n]), t && "keypress" !== t && a[n] && (n = a[n], l.push("shift")), c(n) && l.push(n);
				return {
					key: n,
					modifiers: l,
					action: t = this.pickBestAction(n, l, t)
				}
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getMatches.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, s, n, r, i) {
				var a, c, l, u, d = [],
					p = s.type;
				"keypress" !== p || s.code && "Arrow" === s.code.slice(0, 5) || (this.callbacks["any-character"] || []).forEach((function(e) {
					d.push(e)
				}));
				if (!this.callbacks[e]) return d;
				for (l = o("./node_modules/combokeys/helpers/isModifier.js"), "keyup" === p && l(e) && (t = [e]), a = 0; a < this.callbacks[e].length; ++a)
					if (c = this.callbacks[e][a], (n || !c.seq || this.sequenceLevels[c.seq] === c.level) && p === c.action && (u = o("./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"), "keypress" === p && !s.metaKey && !s.ctrlKey || u(t, c.modifiers))) {
						var m = !n && c.combo === r,
							b = n && c.seq === n && c.level === i;
						(m || b) && this.callbacks[e].splice(a, 1), d.push(c)
					} return d
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/getReverseMap.js": function(e, t, o) {
			"use strict";
			e.exports = function() {
				var e, t = this.constructor;
				if (!t.REVERSE_MAP)
					for (var s in t.REVERSE_MAP = {}, e = o("./node_modules/combokeys/helpers/special-keys-map.js")) s > 95 && s < 112 || e.hasOwnProperty(s) && (t.REVERSE_MAP[e[s]] = s);
				return t.REVERSE_MAP
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKey.js": function(e, t, o) {
			"use strict";
			e.exports = function(e, t, s) {
				var n, r, i, a, c = {},
					l = 0,
					u = !1;
				for (n = this.getMatches(e, t, s), r = 0; r < n.length; ++r) n[r].seq && (l = Math.max(l, n[r].level));
				for (r = 0; r < n.length; ++r)
					if (n[r].seq) {
						if (n[r].level !== l) continue;
						u = !0, c[n[r].seq] = 1, this.fireCallback(n[r].callback, s, n[r].combo, n[r].seq)
					} else u || this.fireCallback(n[r].callback, s, n[r].combo);
				a = "keypress" === s.type && this.ignoreNextKeypress, i = o("./node_modules/combokeys/helpers/isModifier.js"), s.type !== this.nextExpectedAction || i(e) || a || this.resetSequences(c), this.ignoreNextKeypress = u && "keydown" === s.type
			}
		},
		"./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t;
				"number" != typeof e.which && (e.which = e.keyCode);
				var s = o("./node_modules/combokeys/helpers/characterFromEvent.js")(e);
				void 0 !== s && ("keyup" !== e.type || this.ignoreNextKeyup !== s ? (t = o("./node_modules/combokeys/helpers/eventModifiers.js"), this.handleKey(s, t(e), e)) : this.ignoreNextKeyup = !1)
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
				var t, s;
				if (t = o("./node_modules/combokeys/helpers/special-keys-map.js"), s = o("./node_modules/combokeys/helpers/special-characters-map.js"), "keypress" === e.type) {
					var n = String.fromCharCode(e.which);
					return e.shiftKey || (n = n.toLowerCase()), n
				}
				return void 0 !== t[e.which] ? t[e.which] : void 0 !== s[e.which] ? s[e.which] : String.fromCharCode(e.which).toLowerCase()
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
			for (var s = 1; s < 20; ++s) e.exports[111 + s] = "f" + s;
			for (s = 0; s <= 9; ++s) e.exports[s + 96] = s
		},
		"./node_modules/combokeys/helpers/stopPropagation.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
			}
		},
		"./node_modules/just-reduce-object/index.js": function(e, t) {
			e.exports = function(e, t) {
				var o = [function(o, n, r, i) {
						s || (o = e[i[0]], s = !0);
						return t(o, n, e[n], r, i)
					}],
					s = 2 in arguments;
				return s && o.push(arguments[2]), Array.prototype.reduce.apply(Object.keys(e), o)
			}
		},
		"./node_modules/platform/platform.js": function(e, t, o) {
			(function(e, s) {
				var n;
				(function() {
					"use strict";
					var r = {
							function: !0,
							object: !0
						},
						i = r[typeof window] && window || this,
						a = r[typeof t] && t,
						c = r[typeof e] && e && !e.nodeType && e,
						l = a && c && "object" == typeof s && s;
					!l || l.global !== l && l.window !== l && l.self !== l || (i = l);
					var u = Math.pow(2, 53) - 1,
						d = /\bOpera/,
						p = Object.prototype,
						m = p.hasOwnProperty,
						b = p.toString;

					function f(e) {
						return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
					}

					function y(e) {
						return e = g(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : f(e)
					}

					function h(e, t) {
						for (var o in e) m.call(e, o) && t(e[o], o, e)
					}

					function x(e) {
						return null == e ? f(e) : b.call(e).slice(8, -1)
					}

					function k(e) {
						return String(e).replace(/([ -])(?!$)/g, "$1?")
					}

					function v(e, t) {
						var o = null;
						return function(e, t) {
							var o = -1,
								s = e ? e.length : 0;
							if ("number" == typeof s && s > -1 && s <= u)
								for (; ++o < s;) t(e[o], o, e);
							else h(e, t)
						}(e, (function(s, n) {
							o = t(o, s, n, e)
						})), o
					}

					function g(e) {
						return String(e).replace(/^ +| +$/g, "")
					}
					var _ = function e(t) {
						var o = i,
							s = t && "object" == typeof t && "String" != x(t);
						s && (o = t, t = null);
						var n = o.navigator || {},
							r = n.userAgent || "";
						t || (t = r);
						var a, c, l, u, p, m = s ? !!n.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(b.toString()),
							f = s ? "Object" : "ScriptBridgingProxyObject",
							_ = s ? "Object" : "Environment",
							S = s && o.java ? "JavaPackage" : x(o.java),
							j = s ? "Object" : "RuntimeObject",
							O = /\bJava/.test(S) && o.java,
							C = O && x(o.environment) == _,
							E = O ? "a" : "α",
							w = O ? "b" : "β",
							P = o.document || {},
							M = o.operamini || o.opera,
							T = d.test(T = s && M ? M["[[Class]]"] : x(M)) ? T : M = null,
							N = t,
							I = [],
							A = null,
							R = t == r,
							K = R && M && "function" == typeof M.version && M.version(),
							B = v([{
								label: "EdgeHTML",
								pattern: "Edge"
							}, "Trident", {
								label: "WebKit",
								pattern: "AppleWebKit"
							}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, o) {
								return e || RegExp("\\b" + (o.pattern || k(o)) + "\\b", "i").exec(t) && (o.label || o)
							})),
							L = function(e) {
								return v(e, (function(e, o) {
									return e || RegExp("\\b" + (o.pattern || k(o)) + "\\b", "i").exec(t) && (o.label || o)
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
							W = G([{
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
							F = function(e) {
								return v(e, (function(e, o, s) {
									return e || (o[W] || o[/^[a-z]+(?: +[a-z]+\b)*/i.exec(W)] || RegExp("\\b" + k(s) + "(?:\\b|\\w*\\d)", "i").exec(t)) && s
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
								return v(e, (function(e, o) {
									var s = o.pattern || k(o);
									return !e && (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, o) {
										var s = {
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
										return t && o && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (s = s[/[\d.]+$/.exec(e)]) && (e = "Windows " + s), e = String(e), t && o && (e = e.replace(RegExp(t, "i"), o)), e = y(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
									}(e, s, o.label || o)), e
								}))
							}(["Windows Phone", "Android", "CentOS", {
								label: "Chrome OS",
								pattern: "CrOS"
							}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

						function G(e) {
							return v(e, (function(e, o) {
								var s = o.pattern || k(o);
								return !e && (e = RegExp("\\b" + s + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + s + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + s + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(o.label && !RegExp(s, "i").test(o.label) ? o.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), o = o.label || o, e = y(e[0].replace(RegExp(s, "i"), o).replace(RegExp("; *(?:" + o + "[_-])?", "i"), " ").replace(RegExp("(" + o + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
							}))
						}
						if (B && (B = [B]), F && !W && (W = G([F])), (a = /\bGoogle TV\b/.exec(W)) && (W = a[0]), /\bSimulator\b/i.test(t) && (W = (W ? W + " " : "") + "Simulator"), "Opera Mini" == L && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == L && /\blike iPhone OS\b/.test(t) ? (F = (a = e(t.replace(/like iPhone OS/, ""))).manufacturer, W = a.product) : /^iP/.test(W) ? (L || (L = "Safari"), q = "iOS" + ((a = / OS ([\d_]+)/i.exec(t)) ? " " + a[1].replace(/_/g, ".") : "")) : "Konqueror" != L || /buntu/i.test(q) ? F && "Google" != F && (/Chrome/.test(L) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(W)) || /\bAndroid\b/.test(q) && /^Chrome/.test(L) && /\bVersion\//i.test(t) ? (L = "Android Browser", q = /\bAndroid\b/.test(q) ? q : "Android") : "Silk" == L ? (/\bMobi/i.test(t) || (q = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "PaleMoon" == L && (a = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + a[1]) : "Firefox" == L && (a = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (q || (q = "Firefox OS"), W || (W = a[1])) : !L || (a = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(L)) ? (L && !W && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(a + "/") + 8)) && (L = null), (a = W || F || q) && (W || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(q)) && (L = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(q) ? q : a) + " Browser")) : "Electron" == L && (a = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + a) : q = "Kubuntu", K || (K = v(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", k(L), "(?:Firefox|Minefield|NetFront)"], (function(e, o) {
								return e || (RegExp(o + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
							}))), (a = ("iCab" == B && parseFloat(K) > 3 ? "WebKit" : /\bOpera\b/.test(L) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(t) && ("Mac OS" == q ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(L) && "NetFront") && (B = [a]), "IE" == L && (a = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (L += " Mobile", q = "Windows Phone " + (/\+$/.test(a) ? a : a + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (L = "IE Mobile", q = "Windows Phone 8.x", I.unshift("desktop mode"), K || (K = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != L && "Trident" == B && (a = /\brv:([\d.]+)/.exec(t)) && (L && I.push("identifying as " + L + (K ? " " + K : "")), L = "IE", K = a[1]), R) {
							if (u = "global", p = null != (l = o) ? typeof l[u] : "number", /^(?:boolean|number|string|undefined)$/.test(p) || "object" == p && !l[u]) x(a = o.runtime) == f ? (L = "Adobe AIR", q = a.flash.system.Capabilities.os) : x(a = o.phantom) == j ? (L = "PhantomJS", K = (a = a.version || null) && a.major + "." + a.minor + "." + a.patch) : "number" == typeof P.documentMode && (a = /\bTrident\/(\d+)/i.exec(t)) ? (K = [K, P.documentMode], (a = +a[1] + 4) != K[1] && (I.push("IE " + K[1] + " mode"), B && (B[1] = ""), K[1] = a), K = "IE" == L ? String(K[1].toFixed(1)) : K[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(L) && (I.push("masking as " + L + " " + K), L = "IE", K = "11.0", B = ["Trident"], q = "Windows");
							else if (O && (N = (a = O.lang.System).getProperty("os.arch"), q = q || a.getProperty("os.name") + " " + a.getProperty("os.version")), C) {
								try {
									K = o.require("ringo/engine").version.join("."), L = "RingoJS"
								} catch ($) {
									(a = o.system) && a.global.system == o.system && (L = "Narwhal", q || (q = a[0].os || null))
								}
								L || (L = "Rhino")
							} else "object" == typeof o.process && !o.process.browser && (a = o.process) && ("object" == typeof a.versions && ("string" == typeof a.versions.electron ? (I.push("Node " + a.versions.node), L = "Electron", K = a.versions.electron) : "string" == typeof a.versions.nw && (I.push("Chromium " + K, "Node " + a.versions.node), L = "NW.js", K = a.versions.nw)), L || (L = "Node.js", N = a.arch, q = a.platform, K = (K = /[\d.]+/.exec(a.version)) ? K[0] : null));
							q = q && y(q)
						}
						if (K && (a = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(K) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (R && n.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (A = /b/i.test(a) ? "beta" : "alpha", K = K.replace(RegExp(a + "\\+?$"), "") + ("beta" == A ? w : E) + (/\d+\+?/.exec(a) || "")), "Fennec" == L || "Firefox" == L && /\b(?:Android|Firefox OS)\b/.test(q)) L = "Firefox Mobile";
						else if ("Maxthon" == L && K) K = K.replace(/\.[\d.]+/, ".x");
						else if (/\bXbox\b/i.test(W)) "Xbox 360" == W && (q = null), "Xbox 360" == W && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
						else if (!/^(?:Chrome|IE|Opera)$/.test(L) && (!L || W || /Browser|Mobi/.test(L)) || "Windows CE" != q && !/Mobi/i.test(t))
							if ("IE" == L && R) try {
								null === o.external && I.unshift("platform preview")
							} catch ($) {
								I.unshift("embedded")
							} else(/\bBlackBerry\b/.test(W) || /\bBB10\b/.test(t)) && (a = (RegExp(W.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || K) ? (q = ((a = [a, /BB10/.test(t)])[1] ? (W = null, F = "BlackBerry") : "Device Software") + " " + a[0], K = null) : this != h && "Wii" != W && (R && M || /Opera/.test(L) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == L && /\bOS X (?:\d+\.){2,}/.test(q) || "IE" == L && (q && !/^Win/.test(q) && K > 5.5 || /\bWindows XP\b/.test(q) && K > 8 || 8 == K && !/\bTrident\b/.test(t))) && !d.test(a = e.call(h, t.replace(d, "") + ";")) && a.name && (a = "ing as " + a.name + ((a = a.version) ? " " + a : ""), d.test(L) ? (/\bIE\b/.test(a) && "Mac OS" == q && (q = null), a = "identify" + a) : (a = "mask" + a, L = T ? y(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(a) && (q = null), R || (K = null)), B = ["Presto"], I.push(a));
							else L += " Mobile";
						(a = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (a = [parseFloat(a.replace(/\.(\d)$/, ".0$1")), a], "Safari" == L && "+" == a[1].slice(-1) ? (L = "WebKit Nightly", A = "alpha", K = a[1].slice(0, -1)) : K != a[1] && K != (a[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (K = null), a[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == a[0] && 537.36 == a[2] && parseFloat(a[1]) >= 28 && "WebKit" == B && (B = ["Blink"]), R && (m || a[1]) ? (B && (B[1] = "like Chrome"), a = a[1] || ((a = a[0]) < 530 ? 1 : a < 532 ? 2 : a < 532.05 ? 3 : a < 533 ? 4 : a < 534.03 ? 5 : a < 534.07 ? 6 : a < 534.1 ? 7 : a < 534.13 ? 8 : a < 534.16 ? 9 : a < 534.24 ? 10 : a < 534.3 ? 11 : a < 535.01 ? 12 : a < 535.02 ? "13+" : a < 535.07 ? 15 : a < 535.11 ? 16 : a < 535.19 ? 17 : a < 536.05 ? 18 : a < 536.1 ? 19 : a < 537.01 ? 20 : a < 537.11 ? "21+" : a < 537.13 ? 23 : a < 537.18 ? 24 : a < 537.24 ? 25 : a < 537.36 ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"), a = (a = a[0]) < 400 ? 1 : a < 500 ? 2 : a < 526 ? 3 : a < 533 ? 4 : a < 534 ? "4+" : a < 535 ? 5 : a < 537 ? 6 : a < 538 ? 7 : a < 601 ? 8 : "8"), B && (B[1] += " " + (a += "number" == typeof a ? ".x" : /[.+]/.test(a) ? "" : "+")), "Safari" == L && (!K || parseInt(K) > 45) && (K = a)), "Opera" == L && (a = /\bzbov|zvav$/.exec(q)) ? (L += " ", I.unshift("desktop mode"), "zvav" == a ? (L += "Mini", K = null) : L += "Mobile", q = q.replace(RegExp(" *" + a + "$"), "")) : "Safari" == L && /\bChrome\b/.exec(B && B[1]) && (I.unshift("desktop mode"), L = "Chrome Mobile", K = null, /\bOS X\b/.test(q) ? (F = "Apple", q = "iOS 4.3+") : q = null), K && 0 == K.indexOf(a = /[\d.]+$/.exec(q)) && t.indexOf("/" + a + "-") > -1 && (q = g(q.replace(a, ""))), B && !/\b(?:Avant|Nook)\b/.test(L) && (/Browser|Lunascape|Maxthon/.test(L) || "Safari" != L && /^iOS/.test(q) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(L) && B[1]) && (a = B[B.length - 1]) && I.push(a), I.length && (I = ["(" + I.join("; ") + ")"]), F && W && W.indexOf(F) < 0 && I.push("on " + F), W && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + W), q && (a = / ([\d.+]+)$/.exec(q), c = a && "/" == q.charAt(q.length - a[0].length - 1), q = {
							architecture: 32,
							family: a && !c ? q.replace(a[0], "") : q,
							version: a ? a[1] : null,
							toString: function() {
								var e = this.version;
								return this.family + (e && !c ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
							}
						}), (a = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (q && (q.architecture = 64, q.family = q.family.replace(RegExp(" *" + a), "")), L && (/\bWOW64\b/i.test(t) || R && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : q && /^OS X/.test(q.family) && "Chrome" == L && parseFloat(K) >= 39 && (q.architecture = 64), t || (t = null);
						var H = {};
						return H.description = t, H.layout = B && B[0], H.manufacturer = F, H.name = L, H.prerelease = A, H.product = W, H.ua = t, H.version = L && K, H.os = q || {
							architecture: null,
							family: null,
							version: null,
							toString: function() {
								return "null"
							}
						}, H.parse = e, H.toString = function() {
							return this.description || ""
						}, H.version && I.unshift(K), H.name && I.unshift(L), q && L && (q != String(q).split(" ")[0] || q != L.split(" ")[0] && !W) && I.push(W ? "(" + q + ")" : "on " + q), I.length && (H.description = I.join(" ")), H
					}();
					i.platform = _, void 0 === (n = function() {
						return _
					}.call(t, o, t, e)) || (e.exports = n)
				}).call(this)
			}).call(this, o("./node_modules/webpack/buildin/module.js")(e), o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, o, n, r, i) {
					if (i !== s) {
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
		"./node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
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
			var s = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var s = t[o];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, o, s) {
						return o && e(t.prototype, o), s && e(t, s), t
					}
				}(),
				n = l(o("./node_modules/react/index.js")),
				r = l(o("./node_modules/invariant/browser.js")),
				i = l(o("./node_modules/combokeys/Combokeys/index.js")),
				a = l(o("./node_modules/react-shortcuts/node_modules/prop-types/index.js")),
				c = l(o("./node_modules/react-shortcuts/lib/helpers.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var d = function(e) {
				function t() {
					var e, o, s;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
					return o = s = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), s._combokeys = null, s._lastEvent = null, s._bindShortcuts = function(e) {
						var t = s._getElementToBind();
						t.setAttribute("tabindex", s.props.tabIndex), s._combokeys = new i.default(t), s._decorateCombokeys(), s._combokeys.bind(e, s._handleShortcuts, s.props.eventType), s.props.global && t.addEventListener("shortcuts:global", s._customGlobalHandler)
					}, s._customGlobalHandler = function(e) {
						var t = e.detail,
							o = t.character,
							n = t.modifiers,
							r = t.event,
							i = null;
						s.props.targetNodeSelector && (i = document.querySelector(s.props.targetNodeSelector)), e.target !== s._domNode && e.target !== i && s._combokeys.handleKey(o, n, r, !0)
					}, s._decorateCombokeys = function() {
						var e = s._getElementToBind(),
							t = s._combokeys.handleKey.bind(s._combokeys);
						s._combokeys.stopCallback = function(e, t, o) {
							var n = "INPUT" === t.tagName || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || t.contentEditable && "true" === t.contentEditable,
								r = void 0;
							return r = e.key ? 1 === e.key.length : Boolean(c.default.getCharacter(e)), !(!n || !r || s.props.alwaysFireHandler)
						}, s._combokeys.handleKey = function(o, n, r, i) {
							if (!s._lastEvent || r.timeStamp !== s._lastEvent.timeStamp || r.type !== s._lastEvent.type) {
								s._lastEvent = r;
								var a = !1;
								if (s.props.isolate && !r.__isolateShortcuts && (r.__isolateShortcuts = !0, a = !0), i || e.dispatchEvent(new CustomEvent("shortcuts:global", {
										detail: {
											character: o,
											modifiers: n,
											event: r
										},
										bubbles: !0,
										cancelable: !0
									})), !r.__isolateShortcuts) return s.props.preventDefault && r.preventDefault(), s.props.stopPropagation && !i && r.stopPropagation(), void t(o, n, r);
								(s.props.global || a) && t(o, n, r)
							}
						}
					}, s._getElementToBind = function() {
						var e = null;
						return s.props.targetNodeSelector ? (e = document.querySelector(s.props.targetNodeSelector), (0, r.default)(e, "Node selector '" + s.props.targetNodeSelector + "'  was not found.")) : e = s._domNode, e
					}, s._unbindShortcuts = function() {
						s._combokeys && (s._combokeys.detach(), s._combokeys.reset())
					}, s._onUpdate = function() {
						var e = s.props.name && s.context.shortcuts.getShortcuts(s.props.name);
						s._unbindShortcuts(), s._bindShortcuts(e || [])
					}, s._handleShortcuts = function(e, t) {
						if (s.props.name) {
							var o = s.context.shortcuts.findShortcutName(t, s.props.name);
							s.props.handler && s.props.handler(o, e)
						}
					}, u(s, o)
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
				}(t, e), s(t, [{
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
			var s, n = o("./node_modules/platform/platform.js"),
				r = (s = n) && s.__esModule ? s : {
					default: s
				};
			t.default = {
				getPlatformName: function() {
					var e = r.default.os.family || "";
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
			(function(s) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = function() {
						function e(e, t) {
							for (var o = 0; o < t.length; o++) {
								var s = t[o];
								s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
							}
						}
						return function(t, o, s) {
							return o && e(t.prototype, o), s && e(t, s), t
						}
					}(),
					r = u(o("./node_modules/just-reduce-object/index.js")),
					i = u(o("./node_modules/invariant/browser.js")),
					a = o("./node_modules/node-libs-browser/node_modules/events/events.js"),
					c = u(o("./node_modules/react-shortcuts/lib/helpers.js")),
					l = o("./node_modules/react-shortcuts/lib/utils.js");

				function u(e) {
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
						return o._platformName = c.default.getPlatformName(), o._parseShortcutDescriptor = function(e) {
							return (0, l.isPlainObject)(e) ? e[o._platformName] : e
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
								return (0, r.default)(o, (function(o, s, n) {
									if ((0, l.isPlainObject)(n)) {
										if (!n[e]) return o[s] = t(n), o;
										n = n[e]
									}
									return o[s] = n, o
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
							if (t) return (0, l.compact)((0, l.flatten)((0, l.map)(t, this._parseShortcutDescriptor)))
						}
					}, {
						key: "_parseShortcutKeyName",
						value: function(e, t) {
							var o = this;
							return (0, l.findKey)(e, (function(e) {
								if ((0, l.isPlainObject)(e) && (e = e[o._platformName]), (0, l.isArray)(e)) {
									var s = e.indexOf(t);
									s >= 0 && (e = e[s])
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
			var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				n = t.isArray = function(e) {
					return Array.isArray(e)
				},
				r = t.isPlainObject = function(e) {
					if (!("object" === (void 0 === e ? "undefined" : s(e)) && null !== e && !n(e)) || e.toString && "[object Object]" !== e.toString()) return !1;
					var t = Object.getPrototypeOf(e);
					if (null === t) return !0;
					var o = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
					return "function" == typeof o && o instanceof o && Function.prototype.toString.call(o) === Function.prototype.toString.call(Object)
				};
			t.findKey = function(e, t) {
				if (r(e) || n(e)) return Object.keys(e).find((function(o) {
					return t(e[o])
				}))
			}, t.compact = function(e) {
				return e.filter(Boolean)
			}, t.flatten = function(e) {
				if (!n(e)) throw new Error("flatten expects an array");
				return function e(t) {
					var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return t.reduce((function(t, s) {
						return n(s) && o ? t.concat(e(s, !1)) : (t.push(s), t)
					}), [])
				}(e)
			}, t.map = function(e, t) {
				if (n(e)) return e.map(t);
				for (var o = [], s = Object.keys(e), r = s.length, i = 0; i < r; i += 1) {
					var a = s[i];
					o.push(t(e[a], a))
				}
				return o
			}
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react-shortcuts/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function r() {}
			r.resetWarningCache = n, e.exports = function() {
				function e(e, t, o, n, r, i) {
					if (i !== s) {
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
					checkPropTypes: r,
					resetWarningCache: n
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-shortcuts/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-shortcuts/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(s.a)(n.a),
				i = Object(s.a)(n.b)
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return i
			}));
			let s = {};

			function n(e) {
				return e in s
			}

			function r(e) {
				s[e] = !0
			}

			function i() {
				s = {}
			}
		},
		"./src/reddit/components/ShortcutWrapper/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/lodash/noop.js"),
				n = o.n(s),
				r = o("./node_modules/prop-types/index.js"),
				i = o.n(r),
				a = o("./node_modules/react/index.js"),
				c = o.n(a),
				l = o("./node_modules/react-redux/es/index.js"),
				u = o("./node_modules/react-shortcuts/lib/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				p = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/constants/shortcuts.ts"),
				b = o("./src/reddit/selectors/activeModal.ts");
			var f = o("./src/reddit/selectors/structuredStyles.ts");
			const y = {
					[m.c.OpenIndex]: {
						osx: ["cmd + ?", "?"],
						windows: ["ctrl + ?", "?"],
						linux: ["ctrl + ?", "?"],
						other: ["ctrl + ?", "?"]
					},
					[m.c.Close]: "esc",
					[m.c.Konami]: "up up down down left right left right b a enter"
				},
				h = {
					[m.c.Upvote]: "a",
					[m.c.Downvote]: "z",
					[m.c.Save]: "s",
					[m.c.Hide]: "h",
					[m.c.OpenLink]: "l"
				},
				x = {
					[m.c.CollapseOrLoad]: "enter",
					[m.c.NextComment]: "j",
					[m.c.PrevComment]: "k",
					[m.c.Reply]: "r"
				};
			var k = {
					[m.d.CommentPage]: {
						...y,
						...h,
						...x
					},
					[m.d.Global]: {
						...y
					},
					[m.d.Lightbox]: {
						...y,
						...h,
						...x,
						[m.c.NextPost]: "n",
						[m.c.PrevPost]: "p"
					},
					[m.d.Listing]: {
						...y,
						...h,
						[m.c.OpenLightbox]: "enter",
						[m.c.NextPost]: "j",
						[m.c.PrevPost]: "k",
						[m.c.Expando]: "x",
						[m.c.NewPost]: "c",
						Reserved: ["n", "p", "r"]
					},
					[m.d.Modqueue]: {
						...y,
						...h,
						[m.c.OpenLightbox]: "enter",
						[m.c.NextPost]: "j",
						[m.c.PrevPost]: "k",
						[m.c.Expando]: "x",
						[m.c.NewPost]: "c"
					}
				},
				v = o("./node_modules/react-router-redux/es/index.js"),
				g = o("./src/reddit/actions/comment/index.ts"),
				_ = o("./src/reddit/actions/comment/authoring.ts"),
				S = o("./src/reddit/actions/modal.ts"),
				j = o("./src/reddit/actions/post.ts"),
				O = o("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				C = o("./src/reddit/constants/elementIds.ts"),
				E = o("./src/reddit/constants/modals.ts"),
				w = o("./src/reddit/constants/postLayout.ts"),
				P = o("./src/reddit/helpers/overlay/index.ts"),
				M = o("./src/reddit/helpers/trackers/lightbox.ts"),
				T = o("./src/reddit/helpers/trackers/shortcuts.ts"),
				N = o("./src/reddit/selectors/listings.ts"),
				I = o("./src/reddit/selectors/platform.ts"),
				A = o("./src/reddit/actions/shortcuts/active.ts"),
				R = o("./src/reddit/actions/shortcuts/utils.ts"),
				K = o("./src/lib/initializeClient/installReducer.ts"),
				B = o("./src/reddit/reducers/features/comments/index.ts");
			Object(K.a)({
				features: {
					comments: B.a
				}
			});
			const L = (e, t) => async (o, s, n) => {
				let {
					apiContext: r
				} = n;
				const i = s(),
					a = i.shortcuts.activePostId,
					c = i.listings.activeKey,
					l = i.listings.postOrder.ids[c];
				if (!a || l && l.indexOf(a) < 0) {
					const e = l[0];
					return o(Object(A.b)(e)), void Object(R.a)(e)
				}
				let u, d = a;
				do {
					if (!(u = Object(N.b)(i, {
							postId: d
						})) || !u.nextPost) return;
					d = u.nextPost.id
				} while (i.posts.models[d].hidden);
				i.shortcuts.namespace === m.d.Lightbox ? (F(o, u.nextPost), e(t ? M.b(a, "next_post", !0) : T.l(d))) : (o(Object(A.b)(d)), Object(R.a)(d), e(T.k(d)))
			}, W = e => async (t, o, s) => {
				let {
					apiContext: n
				} = s;
				const r = o(),
					i = Object(R.c)(r);
				if (!i) return;
				let a;
				const c = r.shortcuts.activeCommentId;
				if (c && c !== r.pages.comments.keyToHeadCommentId[i]) {
					const e = r.pages.comments.keyToCommentThreadLinkSets[i];
					for (a = e[c].prev.id; O.b(a);) a = e[a].prev.id
				} else {
					const e = r.pages.comments.keyToHeadCommentId[i];
					if (!e || c === e) return;
					a = e
				}
				t(Object(A.a)(a)), Object(R.a)(a), e(T.n(a))
			}, F = (e, t) => {
				Object(R.b)(m.b), e(Object(A.b)(t.id)), document.body.style.overflow = "", Object(R.a)(t.id), document.body.style.overflow = "hidden", e(Object(P.a)(t.permalink));
				const o = document.getElementById(C.d);
				o && o.scrollTo(0, 0)
			};
			var q = o("./src/reddit/actions/shortcuts/close.ts");
			const G = {
					[m.c.Close]: q.a,
					[m.c.CollapseOrLoad]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = r.shortcuts.activeCommentId,
							a = Object(R.c)(r);
						if (a && i) {
							if (r.features.comments.models[i]) t(g.o({
								commentId: i,
								commentsPageKey: a,
								scrollToAndRemeasure: () => null
							}));
							else if (r.continueThreads.models[i]) {
								const e = r.continueThreads.models[i].parentId,
									o = r.features.comments.models[e].permalink;
								t(Object(v.b)(o))
							} else t(W(e)), t(g.l(a, i));
							e(T.b(i))
						}
					},
					[m.c.Downvote]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							{
								activeCommentId: i,
								activePostId: a
							} = r.shortcuts,
							c = Object(R.c)(r);
						c && (i && !r.features.comments.collapsed[c][i] ? (t(g.j(i)), e(T.e(i))) : a && (t(j.w(a)), e(T.f(a))))
					},
					[m.c.Expando]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = r.shortcuts.activePostId,
							a = w.b[r.user.prefs.layout];
						if (i && (a === w.g.Compact || a === w.g.Classic)) {
							const o = r.posts.models[i].crosspostRootId;
							(r.posts.models[i].media || o && r.posts.models[o] && r.posts.models[o].media) && (t(j.x({
								postId: i
							})), e(T.g(i)))
						}
					},
					[m.c.Hide]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = r.shortcuts.activePostId;
						i && !r.posts.models[i].isSponsored && (t(j.fb(i, !r.posts.models[i].hidden, r.shortcuts.namespace === m.d.Lightbox, !0)), t(L(e)), e(T.i(i)))
					},
					[m.c.NextComment]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = Object(R.c)(r);
						if (!i) return;
						let a;
						const c = r.shortcuts.activeCommentId;
						if (c) {
							const e = r.features.comments.collapsed[i],
								t = r.pages.comments.keyToCommentThreadLinkSets[i];
							if (e[a = c])
								do {
									if (!t[a].next) return;
									a = t[a].next.id
								} while (O.b(a));
							else a = t[a].next.id
						} else {
							const e = r.pages.comments.keyToHeadCommentId[i];
							if (!e) return;
							a = e
						}
						t(Object(A.a)(a)), Object(R.a)(a), e(T.j(a))
					},
					[m.c.NextPost]: L,
					[m.c.NewPost]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o();
						if (!r.user.account) return;
						const i = Object(I.e)(r),
							a = i ? i.url : "/";
						t(Object(v.b)(`${a}submit`)), e(T.d)
					},
					[m.c.OpenIndex]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						t(Object(S.i)(E.a.KEYBOARD_SHORTCUTS)), e(T.s)
					},
					[m.c.OpenLightbox]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = r.listings.activeKey,
							a = r.listings.postOrder.ids[i],
							c = r.shortcuts.activePostId;
						!a || !c || a.indexOf(c) < 0 || (t(Object(P.a)(r.posts.models[c].permalink)), e(T.m(c)))
					},
					[m.c.OpenLink]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							{
								activePostId: i
							} = r.shortcuts;
						if (i) {
							const t = r.posts.models[i];
							if (t.source) {
								const o = t.source.url,
									s = window.open(o, "_blank");
								s && s.focus(), e(T.h(i))
							}
						}
					},
					[m.c.PrevComment]: W,
					[m.c.PrevPost]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = r.shortcuts.activePostId,
							a = r.listings.activeKey,
							c = r.listings.postOrder.ids[a];
						if (!i || c && c.indexOf(i) < 0) return t(Object(A.b)(c[0])), void Object(R.a)(c[0]);
						if (0 === c.indexOf(i)) return;
						let l, u = i;
						do {
							if (!(l = Object(N.b)(r, {
									postId: u
								})) || !l.prevPost) return;
							u = l.prevPost.id
						} while (r.posts.models[u].hidden);
						r.shortcuts.namespace === m.d.Lightbox ? (F(t, l.prevPost), e(T.p(u))) : (t(Object(A.b)(u)), Object(R.a)(u), e(T.o(u)))
					},
					[m.c.Reply]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							i = Object(R.c)(r),
							{
								activeCommentId: a
							} = r.shortcuts;
						a && i && i !== r.listings.activeKey && (t(_.q({
							commentsPageKey: i,
							parentCommentId: a
						})), e(T.c(a)))
					},
					[m.c.Save]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							{
								activeCommentId: i,
								activePostId: a
							} = r.shortcuts,
							c = Object(R.c)(r);
						c && (i && !r.features.comments.collapsed[c][i] ? (t(g.m(i)), e(T.q(i))) : a && (t(j.V(a)), e(T.r(a))))
					},
					[m.c.Upvote]: e => async (t, o, s) => {
						let {
							apiContext: n
						} = s;
						const r = o(),
							{
								activeCommentId: i,
								activePostId: a
							} = r.shortcuts,
							c = Object(R.c)(r);
						c && (i && !r.features.comments.collapsed[c][i] ? (t(g.q(i)), e(T.t(i))) : a && (t(j.kb(a)), e(T.u(a))))
					},
					[m.c.Konami]: null
				},
				H = (e, t) => (o, s) => {
					if (!document.activeElement) return;
					const n = document.activeElement.nodeName;
					if ("INPUT" === n || "TEXTAREA" === n || "BUTTON" === n && m.a.includes(s.which)) return;
					const r = G[o];
					r && e(r(t))
				},
				$ = new u.ShortcutManager(k),
				D = Object(d.c)({
					isBladeOpen: f.i,
					namespace: e => Object(b.b)(e) ? m.d.Global : e.shortcuts.namespace
				}),
				U = Object(l.b)(D, e => ({
					dispatchAction: t => e(t)
				}));
			class V extends a.Component {
				getChildContext() {
					return {
						shortcuts: $
					}
				}
				componentDidMount() {
					const e = document.getElementById(m.b);
					if (e) {
						const t = window.scrollX,
							o = window.scrollY;
						e.focus(), window.scrollTo(t, o)
					}
				}
				render() {
					const {
						dispatchAction: e,
						isBladeOpen: t,
						namespace: o,
						sendEvent: s
					} = this.props;
					return c.a.createElement(u.Shortcuts, {
						handler: t ? n.a : H(e, s),
						isolate: !0,
						name: o,
						targetNodeSelector: `#${m.b}`
					})
				}
			}
			V.childContextTypes = {
				shortcuts: i.a.object.isRequired
			};
			t.default = U(Object(p.c)(V))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ShortcutWrapper.d0e892f9b14338971094.js.map