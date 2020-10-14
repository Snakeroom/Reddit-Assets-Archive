// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.6db5fac700b99b0bb26e.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, o, s) {
			"use strict";
			(function(e) {
				Object.defineProperty(o, "__esModule", {
					value: !0
				});
				var s = arguments,
					n = ".*",
					t = ".postMessage",
					r = {
						targetOrigin: "*"
					},
					d = /\..+$/;

				function a(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function i(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var u = [n],
					l = i(u),
					c = [t],
					f = a(c),
					_ = {},
					m = !1;

				function j(o, s, n) {
					e.addEventListener ? e.addEventListener(o, s, n) : e.attachEvent && e.attachEvent("on" + o, s)
				}

				function p(o, s) {
					e.removeEventListener ? e.removeEventListener(o, s) : e.detachEvent && e.detachEvent("on" + o, s)
				}

				function h(e) {
					return /\*/.test(e)
				}
				var v = o.postMessage = function(e, o, s) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						d.test(o) || (o += t);
						var a = n;
						Object.keys(r).forEach((function(e) {
							a[e] = r[e]
						})), e.postMessage(JSON.stringify({
							type: o,
							data: s,
							defaultedOptions: a
						}), a.targetOrigin)
					},
					y = o.receiveMessage = function(e, o, s, n) {
						"string" == typeof e && (n = s, s = o, o = e, e = null), n = n || void 0;
						var t = function(o) {
							for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++) r[d - 1] = arguments[d];
							e && e !== o.source && e.contentWindow !== o.source || s.apply(n, [o].concat(r))
						};
						return j(o, t), {
							off: function() {
								p(o, t)
							}
						}
					},
					b = (o.receiveMessageOnce = function(e, o, n, t) {
						var r = y(e, o, (function() {
							n && n.apply(void 0, s), r.off()
						}), t);
						return r
					}, o.removePostMessageOrigin = function(e) {
						var o = u.indexOf(e); - 1 !== o && (u.splice(o, 1), l = i(u))
					}),
					g = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof g) {
					var O = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(g = function(e, o) {
						o = o || O;
						var s = document.createEvent("CustomEvent");
						return s.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), s
					}).prototype = e.Event.prototype
				}
				o.addPostMessageOrigin = function(e) {
					h(e) ? u = [n] : -1 === u.indexOf(e) && (b(n), u.push(e), l = i(u))
				};

				function E(o) {
					if (o.origin === e.location.origin || l.test(o.origin) || "null" === o.origin) {
						var s = {};
						try {
							s = JSON.parse(o.data)
						} catch (o) {}
						var n = s.type;
						if (f.test(n)) {
							var t = n.split(".", 2)[1];
							if (_[t]) _[t].targets.forEach((function(e) {
								return v(e, n, s.data, s.options)
							}));
							var r = new g(n, {
								detail: s.data
							});
							r.source = o.source, e.dispatchEvent(r)
						}
					}
				}
				var w = o.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = a(c)), m || (j("message", E), m = !0)
				};
				o.stopListening = function(e) {
					var o = c.indexOf(e); - 1 !== o && (c.splice(o, 1), c.length ? f = a(c) : (p("message", E), m = !1))
				}, o.proxy = function(e, o) {
					w(e), Array.isArray(o) || (o = [o]);
					var s = _[e];
					s ? s.targets = [].concat(s.targets, o) : s = {
						targets: o
					}, _[e] = s
				}
			}).call(this, s("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, o, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/_a-function.js");

			function t(e) {
				var o, s;
				this.promise = new e((function(e, n) {
					if (void 0 !== o || void 0 !== s) throw TypeError("Bad Promise constructor");
					o = e, s = n
				})), this.resolve = n(o), this.reject = n(s)
			}
			e.exports.f = function(e) {
				return new t(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, o, s) {
			var n = s("./node_modules/core-js/modules/_an-object.js"),
				t = s("./node_modules/core-js/modules/_is-object.js"),
				r = s("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, o) {
				if (n(e), t(o) && o.constructor === e) return o;
				var s = r.f(e);
				return (0, s.resolve)(o), s.promise
			}
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, o, s) {
			"use strict";
			var n = s("./node_modules/core-js/modules/_export.js"),
				t = s("./node_modules/core-js/modules/_core.js"),
				r = s("./node_modules/core-js/modules/_global.js"),
				d = s("./node_modules/core-js/modules/_species-constructor.js"),
				a = s("./node_modules/core-js/modules/_promise-resolve.js");
			n(n.P + n.R, "Promise", {
				finally: function(e) {
					var o = d(this, t.Promise || r.Promise),
						s = "function" == typeof e;
					return this.then(s ? function(s) {
						return a(o, e()).then((function() {
							return s
						}))
					} : e, s ? function(s) {
						return a(o, e()).then((function() {
							throw s
						}))
					} : e)
				}
			})
		},
		"./node_modules/core-js/modules/es7.symbol.async-iterator.js": function(e, o, s) {
			s("./node_modules/core-js/modules/_wks-define.js")("asyncIterator")
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseAssignValue.js"),
				t = s("./node_modules/lodash/eq.js");
			e.exports = function(e, o, s) {
				(void 0 === s || t(e[o], s)) && (void 0 !== s || o in e) || n(e, o, s)
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_Stack.js"),
				t = s("./node_modules/lodash/_assignMergeValue.js"),
				r = s("./node_modules/lodash/_baseFor.js"),
				d = s("./node_modules/lodash/_baseMergeDeep.js"),
				a = s("./node_modules/lodash/isObject.js"),
				i = s("./node_modules/lodash/keysIn.js"),
				u = s("./node_modules/lodash/_safeGet.js");
			e.exports = function e(o, s, l, c, f) {
				o !== s && r(s, (function(r, i) {
					if (f || (f = new n), a(r)) d(o, s, i, l, e, c, f);
					else {
						var _ = c ? c(u(o, i), r, i + "", o, s, f) : void 0;
						void 0 === _ && (_ = r), t(o, i, _)
					}
				}), i)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_assignMergeValue.js"),
				t = s("./node_modules/lodash/_cloneBuffer.js"),
				r = s("./node_modules/lodash/_cloneTypedArray.js"),
				d = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_initCloneObject.js"),
				i = s("./node_modules/lodash/isArguments.js"),
				u = s("./node_modules/lodash/isArray.js"),
				l = s("./node_modules/lodash/isArrayLikeObject.js"),
				c = s("./node_modules/lodash/isBuffer.js"),
				f = s("./node_modules/lodash/isFunction.js"),
				_ = s("./node_modules/lodash/isObject.js"),
				m = s("./node_modules/lodash/isPlainObject.js"),
				j = s("./node_modules/lodash/isTypedArray.js"),
				p = s("./node_modules/lodash/_safeGet.js"),
				h = s("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, o, s, v, y, b, g) {
				var O = p(e, s),
					E = p(o, s),
					w = g.get(E);
				if (w) n(e, s, w);
				else {
					var x = b ? b(O, E, s + "", e, o, g) : void 0,
						P = void 0 === x;
					if (P) {
						var A = u(E),
							M = !A && c(E),
							k = !A && !M && j(E);
						x = E, A || M || k ? u(O) ? x = O : l(O) ? x = d(O) : M ? (P = !1, x = t(E, !0)) : k ? (P = !1, x = r(E, !0)) : x = [] : m(E) || i(E) ? (x = O, i(O) ? x = h(O) : _(O) && !f(O) || (x = a(E))) : P = !1
					}
					P && (g.set(E, x), y(x, E, v, b, g), g.delete(E)), n(e, s, x)
				}
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseRest.js"),
				t = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return n((function(o, s) {
					var n = -1,
						r = s.length,
						d = r > 1 ? s[r - 1] : void 0,
						a = r > 2 ? s[2] : void 0;
					for (d = e.length > 3 && "function" == typeof d ? (r--, d) : void 0, a && t(s[0], s[1], a) && (d = r < 3 ? void 0 : d, r = 1), o = Object(o); ++n < r;) {
						var i = s[n];
						i && e(o, i, n, d)
					}
					return o
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, o) {
			e.exports = function(e, o) {
				if (("constructor" !== o || "function" != typeof e[o]) && "__proto__" != o) return e[o]
			}
		},
		"./node_modules/lodash/defaults.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseRest.js"),
				t = s("./node_modules/lodash/eq.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				d = s("./node_modules/lodash/keysIn.js"),
				a = Object.prototype,
				i = a.hasOwnProperty,
				u = n((function(e, o) {
					e = Object(e);
					var s = -1,
						n = o.length,
						u = n > 2 ? o[2] : void 0;
					for (u && r(o[0], o[1], u) && (n = 1); ++s < n;)
						for (var l = o[s], c = d(l), f = -1, _ = c.length; ++f < _;) {
							var m = c[f],
								j = e[m];
							(void 0 === j || t(j, a[m]) && !i.call(e, m)) && (e[m] = l[m])
						}
					return e
				}));
			e.exports = u
		},
		"./node_modules/lodash/isEqualWith.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, o, s) {
				var t = (s = "function" == typeof s ? s : void 0) ? s(e, o) : void 0;
				return void 0 === t ? n(e, o, void 0, s) : !!t
			}
		},
		"./node_modules/lodash/merge.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseMerge.js"),
				t = s("./node_modules/lodash/_createAssigner.js")((function(e, o, s) {
					n(e, o, s)
				}));
			e.exports = t
		},
		"./node_modules/lodash/mergeWith.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseMerge.js"),
				t = s("./node_modules/lodash/_createAssigner.js")((function(e, o, s, t) {
					n(e, o, s, t)
				}));
			e.exports = t
		},
		"./node_modules/lodash/negate.js": function(e, o) {
			var s = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(s);
				return function() {
					var o = arguments;
					switch (o.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, o[0]);
						case 2:
							return !e.call(this, o[0], o[1]);
						case 3:
							return !e.call(this, o[0], o[1], o[2])
					}
					return !e.apply(this, o)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				t = s("./node_modules/lodash/negate.js"),
				r = s("./node_modules/lodash/pickBy.js");
			e.exports = function(e, o) {
				return r(e, t(n(o)))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_copyObject.js"),
				t = s("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return n(e, t(e))
			}
		},
		"./node_modules/lodash/union.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				t = s("./node_modules/lodash/_baseRest.js"),
				r = s("./node_modules/lodash/_baseUniq.js"),
				d = s("./node_modules/lodash/isArrayLikeObject.js"),
				a = t((function(e) {
					return r(n(e, 1, d, !0))
				}));
			e.exports = a
		},
		"./node_modules/lodash/xorWith.js": function(e, o, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				t = s("./node_modules/lodash/_baseRest.js"),
				r = s("./node_modules/lodash/_baseXor.js"),
				d = s("./node_modules/lodash/isArrayLikeObject.js"),
				a = s("./node_modules/lodash/last.js"),
				i = t((function(e) {
					var o = a(e);
					return o = "function" == typeof o ? o : void 0, r(n(e, d), void 0, o)
				}));
			e.exports = i
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, o, s) {
			"use strict";
			o.__esModule = void 0, o.__esModule = !0;
			var n = s("./node_modules/ts-error/lib/helpers.js"),
				t = n.setPrototypeOf,
				r = n.getPrototypeOf,
				d = n.defineProperty,
				a = n.objectCreate,
				i = "[object Error]" === (new Error).toString(),
				u = "";

			function l(e) {
				var o, s = this.constructor,
					n = s.name || (null === (o = s.toString().match(/^function\s*([^\s(]+)/)) ? u || "Error" : o[1]),
					a = "Error" === n,
					c = a ? u : n,
					f = Error.apply(this, arguments);
				if (t(f, r(this)), !(f instanceof s && f instanceof l)) {
					f = this;
					Error.apply(this, arguments), d(f, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (d(f, "name", {
						configurable: !0,
						enumerable: !1,
						value: c,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(f, a ? l : s), void 0 === f.stack) {
					var _ = new Error(e);
					_.name = f.name, f.stack = _.stack
				}
				return i && d(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			u = l.name || "ExtendableError", l.prototype = a(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), o.ExtendableError = l, o.default = o.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, o, s) {
			"use strict";
			o.__esModule = void 0, o.__esModule = !0;
			var n = "function" == typeof Object.setPrototypeOf,
				t = "function" == typeof Object.getPrototypeOf,
				r = "function" == typeof Object.defineProperty,
				d = "function" == typeof Object.create,
				a = "function" == typeof Object.prototype.hasOwnProperty;
			o.setPrototypeOf = function(e, o) {
				n ? Object.setPrototypeOf(e, o) : e.__proto__ = o
			};
			o.getPrototypeOf = function(e) {
				return t ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var i = !1;
			o.defineProperty = function e(o, s, n) {
				if (r && !i) try {
					Object.defineProperty(o, s, n)
				} catch (t) {
					i = !0, e(o, s, n)
				} else o[s] = n.value
			};
			var u = function(e, o) {
				return a ? e.hasOwnProperty(e, o) : void 0 === e[o]
			};
			o.hasOwnProperty = u;
			o.objectCreate = function(e, o) {
				if (d) return Object.create(e, o);
				var s = function() {};
				s.prototype = e;
				var n = new s;
				if (void 0 === o) return n;
				if ("null" == typeof o) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof o)
					for (var t in o) u(o, t) && (n[t] = o[t].value);
				return n
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.6db5fac700b99b0bb26e.js.map