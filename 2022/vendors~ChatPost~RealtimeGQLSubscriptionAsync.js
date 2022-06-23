// https://www.redditstatic.com/desktop2x/vendors~ChatPost~RealtimeGQLSubscriptionAsync.8357ea142b1ccda1881f.js
// Retrieved at 6/23/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ChatPost~RealtimeGQLSubscriptionAsync"], {
		"./node_modules/@apollo/client/link/ws/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				r = n("./node_modules/subscriptions-transport-ws/dist/client.js"),
				o = function(e) {
					function t(t) {
						var n = e.call(this) || this;
						return t instanceof r.SubscriptionClient ? n.subscriptionClient = t : n.subscriptionClient = new r.SubscriptionClient(t.uri, t.options, t.webSocketImpl), n
					}
					return Object(i.c)(t, e), t.prototype.request = function(e) {
						return this.subscriptionClient.request(e)
					}, t
				}(n("./node_modules/@apollo/client/link/core/ApolloLink.js").a)
		},
		"./node_modules/backo2/index.js": function(e, t) {
			function n(e) {
				e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
			}
			e.exports = n, n.prototype.duration = function() {
				var e = this.ms * Math.pow(this.factor, this.attempts++);
				if (this.jitter) {
					var t = Math.random(),
						n = Math.floor(t * this.jitter * e);
					e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
				}
				return 0 | Math.min(e, this.max)
			}, n.prototype.reset = function() {
				this.attempts = 0
			}, n.prototype.setMin = function(e) {
				this.ms = e
			}, n.prototype.setMax = function(e) {
				this.max = e
			}, n.prototype.setJitter = function(e) {
				this.jitter = e
			}
		},
		"./node_modules/graphql/jsutils/inspect.mjs": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var i = n("./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var o = 10,
				s = 2;

			function a(e) {
				return c(e, [])
			}

			function c(e, t) {
				switch (r(e)) {
					case "string":
						return JSON.stringify(e);
					case "function":
						return e.name ? "[function ".concat(e.name, "]") : "[function]";
					case "object":
						return null === e ? "null" : function(e, t) {
							if (-1 !== t.indexOf(e)) return "[Circular]";
							var n = [].concat(t, [e]),
								r = function(e) {
									var t = e[String(i.a)];
									if ("function" == typeof t) return t;
									if ("function" == typeof e.inspect) return e.inspect
								}(e);
							if (void 0 !== r) {
								var a = r.call(e);
								if (a !== e) return "string" == typeof a ? a : c(a, n)
							} else if (Array.isArray(e)) return function(e, t) {
								if (0 === e.length) return "[]";
								if (t.length > s) return "[Array]";
								for (var n = Math.min(o, e.length), i = e.length - n, r = [], a = 0; a < n; ++a) r.push(c(e[a], t));
								1 === i ? r.push("... 1 more item") : i > 1 && r.push("... ".concat(i, " more items"));
								return "[" + r.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								var n = Object.keys(e);
								if (0 === n.length) return "{}";
								if (t.length > s) return "[" + function(e) {
									var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
									if ("Object" === t && "function" == typeof e.constructor) {
										var n = e.constructor.name;
										if ("string" == typeof n && "" !== n) return n
									}
									return t
								}(e) + "]";
								return "{ " + n.map((function(n) {
									return n + ": " + c(e[n], t)
								})).join(", ") + " }"
							}(e, n)
						}(e, t);
					default:
						return String(e)
				}
			}
		},
		"./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs": function(e, t, n) {
			"use strict";
			var i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
			t.a = i
		},
		"./node_modules/graphql/language/ast.mjs": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			var i = n("./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

			function r(e) {
				var t = e.prototype.toJSON;
				"function" == typeof t || function(e, t) {
					if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
				}(0), e.prototype.inspect = t, i.a && (e.prototype[i.a] = t)
			}
			var o = function() {
				function e(e, t, n) {
					this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
				}
				return e.prototype.toJSON = function() {
					return {
						start: this.start,
						end: this.end
					}
				}, e
			}();
			r(o);
			var s = function() {
				function e(e, t, n, i, r, o, s) {
					this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = s, this.prev = o, this.next = null
				}
				return e.prototype.toJSON = function() {
					return {
						kind: this.kind,
						value: this.value,
						line: this.line,
						column: this.column
					}
				}, e
			}();

			function a(e) {
				return null != e && "string" == typeof e.kind
			}
			r(s)
		},
		"./node_modules/graphql/language/blockString.js": function(e, t, n) {
			"use strict";

			function i(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function r(e) {
				for (var t, n = !0, i = !0, r = 0, o = null, s = 0; s < e.length; ++s) switch (e.charCodeAt(s)) {
					case 13:
						10 === e.charCodeAt(s + 1) && ++s;
					case 10:
						n = !1, i = !0, r = 0;
						break;
					case 9:
					case 32:
						++r;
						break;
					default:
						i && !n && (null === o || r < o) && (o = r), i = !1
				}
				return null !== (t = o) && void 0 !== t ? t : 0
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.dedentBlockStringValue = function(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = r(e);
				if (0 !== n)
					for (var o = 1; o < t.length; o++) t[o] = t[o].slice(n);
				var s = 0;
				for (; s < t.length && i(t[s]);) ++s;
				var a = t.length;
				for (; a > s && i(t[a - 1]);) --a;
				return t.slice(s, a).join("\n")
			}, t.getBlockStringIndentation = r, t.printBlockString = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = -1 === e.indexOf("\n"),
					r = " " === e[0] || "\t" === e[0],
					o = '"' === e[e.length - 1],
					s = "\\" === e[e.length - 1],
					a = !i || o || s || n,
					c = "";
				!a || i && r || (c += "\n" + t);
				c += t ? e.replace(/\n/g, "\n" + t) : e, a && (c += "\n");
				return '"""' + c.replace(/"""/g, '\\"""') + '"""'
			}
		},
		"./node_modules/graphql/language/blockString.mjs": function(e, t, n) {
			"use strict";

			function i(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = function(e) {
						for (var t, n = !0, i = !0, r = 0, o = null, s = 0; s < e.length; ++s) switch (e.charCodeAt(s)) {
							case 13:
								10 === e.charCodeAt(s + 1) && ++s;
							case 10:
								n = !1, i = !0, r = 0;
								break;
							case 9:
							case 32:
								++r;
								break;
							default:
								i && !n && (null === o || r < o) && (o = r), i = !1
						}
						return null !== (t = o) && void 0 !== t ? t : 0
					}(e);
				if (0 !== n)
					for (var i = 1; i < t.length; i++) t[i] = t[i].slice(n);
				for (var o = 0; o < t.length && r(t[o]);) ++o;
				for (var s = t.length; s > o && r(t[s - 1]);) --s;
				return t.slice(o, s).join("\n")
			}

			function r(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function o(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = -1 === e.indexOf("\n"),
					r = " " === e[0] || "\t" === e[0],
					o = '"' === e[e.length - 1],
					s = "\\" === e[e.length - 1],
					a = !i || o || s || n,
					c = "";
				return !a || i && r || (c += "\n" + t), c += t ? e.replace(/\n/g, "\n" + t) : e, a && (c += "\n"), '"""' + c.replace(/"""/g, '\\"""') + '"""'
			}
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}))
		},
		"./node_modules/graphql/language/kinds.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Kind = void 0;
			var i = Object.freeze({
				NAME: "Name",
				DOCUMENT: "Document",
				OPERATION_DEFINITION: "OperationDefinition",
				VARIABLE_DEFINITION: "VariableDefinition",
				SELECTION_SET: "SelectionSet",
				FIELD: "Field",
				ARGUMENT: "Argument",
				FRAGMENT_SPREAD: "FragmentSpread",
				INLINE_FRAGMENT: "InlineFragment",
				FRAGMENT_DEFINITION: "FragmentDefinition",
				VARIABLE: "Variable",
				INT: "IntValue",
				FLOAT: "FloatValue",
				STRING: "StringValue",
				BOOLEAN: "BooleanValue",
				NULL: "NullValue",
				ENUM: "EnumValue",
				LIST: "ListValue",
				OBJECT: "ObjectValue",
				OBJECT_FIELD: "ObjectField",
				DIRECTIVE: "Directive",
				NAMED_TYPE: "NamedType",
				LIST_TYPE: "ListType",
				NON_NULL_TYPE: "NonNullType",
				SCHEMA_DEFINITION: "SchemaDefinition",
				OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
				SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
				OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
				FIELD_DEFINITION: "FieldDefinition",
				INPUT_VALUE_DEFINITION: "InputValueDefinition",
				INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
				UNION_TYPE_DEFINITION: "UnionTypeDefinition",
				ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
				ENUM_VALUE_DEFINITION: "EnumValueDefinition",
				INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
				DIRECTIVE_DEFINITION: "DirectiveDefinition",
				SCHEMA_EXTENSION: "SchemaExtension",
				SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
				OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
				INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
				UNION_TYPE_EXTENSION: "UnionTypeExtension",
				ENUM_TYPE_EXTENSION: "EnumTypeExtension",
				INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
			});
			t.Kind = i
		},
		"./node_modules/graphql/language/parser.mjs": function(e, t, n) {
			"use strict";

			function i(e) {
				return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			n.d(t, "a", (function() {
				return G
			}));
			"function" == typeof Symbol && null != Symbol.iterator && Symbol.iterator, "function" == typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
			var r = "function" == typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag";

			function o(e, t) {
				for (var n, i = /\r\n|[\n\r]/g, r = 1, o = t + 1;
					(n = i.exec(e.body)) && n.index < t;) r += 1, o = t + 1 - (n.index + n[0].length);
				return {
					line: r,
					column: o
				}
			}

			function s(e) {
				return a(e.source, o(e.source, e.start))
			}

			function a(e, t) {
				var n = e.locationOffset.column - 1,
					i = u(n) + e.body,
					r = t.line - 1,
					o = e.locationOffset.line - 1,
					s = t.line + o,
					a = 1 === t.line ? n : 0,
					l = t.column + a,
					p = "".concat(e.name, ":").concat(s, ":").concat(l, "\n"),
					h = i.split(/\r\n|[\n\r]/g),
					f = h[r];
				if (f.length > 120) {
					for (var d = Math.floor(l / 80), v = l % 80, E = [], m = 0; m < f.length; m += 80) E.push(f.slice(m, m + 80));
					return p + c([
						["".concat(s), E[0]]
					].concat(E.slice(1, d + 1).map((function(e) {
						return ["", e]
					})), [
						[" ", u(v - 1) + "^"],
						["", E[d + 1]]
					]))
				}
				return p + c([
					["".concat(s - 1), h[r - 1]],
					["".concat(s), f],
					["", u(l - 1) + "^"],
					["".concat(s + 1), h[r + 1]]
				])
			}

			function c(e) {
				var t = e.filter((function(e) {
						e[0];
						return void 0 !== e[1]
					})),
					n = Math.max.apply(Math, t.map((function(e) {
						return e[0].length
					})));
				return t.map((function(e) {
					var t, i = e[0],
						r = e[1];
					return u(n - (t = i).length) + t + (r ? " | " + r : " |")
				})).join("\n")
			}

			function u(e) {
				return Array(e + 1).join(" ")
			}

			function l(e) {
				return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function p(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}

			function h(e, t) {
				return !t || "object" !== l(t) && "function" != typeof t ? f(e) : t
			}

			function f(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function d(e) {
				var t = "function" == typeof Map ? new Map : void 0;
				return (d = function(e) {
					if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
					var n;
					if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e);
						t.set(e, i)
					}

					function i() {
						return v(e, arguments, T(this).constructor)
					}
					return i.prototype = Object.create(e.prototype, {
						constructor: {
							value: i,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), m(i, e)
				})(e)
			}

			function v(e, t, n) {
				return (v = E() ? Reflect.construct : function(e, t, n) {
					var i = [null];
					i.push.apply(i, t);
					var r = new(Function.bind.apply(e, i));
					return n && m(r, n.prototype), r
				}).apply(null, arguments)
			}

			function E() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function m(e, t) {
				return (m = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function T(e) {
				return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var y = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && m(e, t)
				}(v, e);
				var t, n, c, u, l, d = (t = v, n = E(), function() {
					var e, i = T(t);
					if (n) {
						var r = T(this).constructor;
						e = Reflect.construct(i, arguments, r)
					} else e = i.apply(this, arguments);
					return h(this, e)
				});

				function v(e, t, n, r, s, a, c) {
					var u, l, p, E, m;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, v), m = d.call(this, e);
					var T, y = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
						N = n;
					!N && y && (N = null === (T = y[0].loc) || void 0 === T ? void 0 : T.source);
					var _, I = r;
					!I && y && (I = y.reduce((function(e, t) {
						return t.loc && e.push(t.loc.start), e
					}), [])), I && 0 === I.length && (I = void 0), r && n ? _ = r.map((function(e) {
						return o(n, e)
					})) : y && (_ = y.reduce((function(e, t) {
						return t.loc && e.push(o(t.loc.source, t.loc.start)), e
					}), []));
					var O, b = c;
					if (null == b && null != a) {
						var g = a.extensions;
						"object" == i(O = g) && null !== O && (b = g)
					}
					return Object.defineProperties(f(m), {
						name: {
							value: "GraphQLError"
						},
						message: {
							value: e,
							enumerable: !0,
							writable: !0
						},
						locations: {
							value: null !== (u = _) && void 0 !== u ? u : void 0,
							enumerable: null != _
						},
						path: {
							value: null != s ? s : void 0,
							enumerable: null != s
						},
						nodes: {
							value: null != y ? y : void 0
						},
						source: {
							value: null !== (l = N) && void 0 !== l ? l : void 0
						},
						positions: {
							value: null !== (p = I) && void 0 !== p ? p : void 0
						},
						originalError: {
							value: a
						},
						extensions: {
							value: null !== (E = b) && void 0 !== E ? E : void 0,
							enumerable: null != b
						}
					}), null != a && a.stack ? (Object.defineProperty(f(m), "stack", {
						value: a.stack,
						writable: !0,
						configurable: !0
					}), h(m)) : (Error.captureStackTrace ? Error.captureStackTrace(f(m), v) : Object.defineProperty(f(m), "stack", {
						value: Error().stack,
						writable: !0,
						configurable: !0
					}), m)
				}
				return c = v, (u = [{
					key: "toString",
					value: function() {
						return function(e) {
							var t = e.message;
							if (e.nodes)
								for (var n = 0, i = e.nodes; n < i.length; n++) {
									var r = i[n];
									r.loc && (t += "\n\n" + s(r.loc))
								} else if (e.source && e.locations)
									for (var o = 0, c = e.locations; o < c.length; o++) {
										var u = c[o];
										t += "\n\n" + a(e.source, u)
									}
							return t
						}(this)
					}
				}, {
					key: r,
					get: function() {
						return "Object"
					}
				}]) && p(c.prototype, u), l && p(c, l), v
			}(d(Error));

			function N(e, t, n) {
				return new y("Syntax Error: ".concat(n), void 0, e, [t])
			}
			var _ = Object.freeze({
					NAME: "Name",
					DOCUMENT: "Document",
					OPERATION_DEFINITION: "OperationDefinition",
					VARIABLE_DEFINITION: "VariableDefinition",
					SELECTION_SET: "SelectionSet",
					FIELD: "Field",
					ARGUMENT: "Argument",
					FRAGMENT_SPREAD: "FragmentSpread",
					INLINE_FRAGMENT: "InlineFragment",
					FRAGMENT_DEFINITION: "FragmentDefinition",
					VARIABLE: "Variable",
					INT: "IntValue",
					FLOAT: "FloatValue",
					STRING: "StringValue",
					BOOLEAN: "BooleanValue",
					NULL: "NullValue",
					ENUM: "EnumValue",
					LIST: "ListValue",
					OBJECT: "ObjectValue",
					OBJECT_FIELD: "ObjectField",
					DIRECTIVE: "Directive",
					NAMED_TYPE: "NamedType",
					LIST_TYPE: "ListType",
					NON_NULL_TYPE: "NonNullType",
					SCHEMA_DEFINITION: "SchemaDefinition",
					OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
					SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
					OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
					FIELD_DEFINITION: "FieldDefinition",
					INPUT_VALUE_DEFINITION: "InputValueDefinition",
					INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
					UNION_TYPE_DEFINITION: "UnionTypeDefinition",
					ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
					ENUM_VALUE_DEFINITION: "EnumValueDefinition",
					INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
					DIRECTIVE_DEFINITION: "DirectiveDefinition",
					SCHEMA_EXTENSION: "SchemaExtension",
					SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
					OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
					INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
					UNION_TYPE_EXTENSION: "UnionTypeExtension",
					ENUM_TYPE_EXTENSION: "EnumTypeExtension",
					INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
				}),
				I = n("./node_modules/graphql/language/ast.mjs"),
				O = Object.freeze({
					SOF: "<SOF>",
					EOF: "<EOF>",
					BANG: "!",
					DOLLAR: "$",
					AMP: "&",
					PAREN_L: "(",
					PAREN_R: ")",
					SPREAD: "...",
					COLON: ":",
					EQUALS: "=",
					AT: "@",
					BRACKET_L: "[",
					BRACKET_R: "]",
					BRACE_L: "{",
					PIPE: "|",
					BRACE_R: "}",
					NAME: "Name",
					INT: "Int",
					FLOAT: "Float",
					STRING: "String",
					BLOCK_STRING: "BlockString",
					COMMENT: "Comment"
				}),
				b = n("./node_modules/graphql/jsutils/inspect.mjs");

			function g(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			var A = function(e, t) {
				return e instanceof t
			};

			function S(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			var x = function() {
				function e(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
							line: 1,
							column: 1
						};
					"string" == typeof e || g(0, "Body must be a string. Received: ".concat(Object(b.a)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || g(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || g(0, "column in locationOffset is 1-indexed and must be positive.")
				}
				var t, n, i;
				return t = e, (n = [{
					key: r,
					get: function() {
						return "Source"
					}
				}]) && S(t.prototype, n), i && S(t, i), e
			}();
			var D = Object.freeze({
					QUERY: "QUERY",
					MUTATION: "MUTATION",
					SUBSCRIPTION: "SUBSCRIPTION",
					FIELD: "FIELD",
					FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
					FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
					INLINE_FRAGMENT: "INLINE_FRAGMENT",
					VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
					SCHEMA: "SCHEMA",
					SCALAR: "SCALAR",
					OBJECT: "OBJECT",
					FIELD_DEFINITION: "FIELD_DEFINITION",
					ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
					INTERFACE: "INTERFACE",
					UNION: "UNION",
					ENUM: "ENUM",
					ENUM_VALUE: "ENUM_VALUE",
					INPUT_OBJECT: "INPUT_OBJECT",
					INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
				}),
				k = n("./node_modules/graphql/language/blockString.mjs"),
				C = function() {
					function e(e) {
						var t = new I.b(O.SOF, 0, 0, 0, 0, null);
						this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
					}
					var t = e.prototype;
					return t.advance = function() {
						return this.lastToken = this.token, this.token = this.lookahead()
					}, t.lookahead = function() {
						var e = this.token;
						if (e.kind !== O.EOF)
							do {
								var t;
								e = null !== (t = e.next) && void 0 !== t ? t : e.next = R(this, e)
							} while (e.kind === O.COMMENT);
						return e
					}, e
				}();

			function w(e) {
				return isNaN(e) ? O.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
			}

			function R(e, t) {
				for (var n = e.source, i = n.body, r = i.length, o = t.end; o < r;) {
					var s = i.charCodeAt(o),
						a = e.line,
						c = 1 + o - e.lineStart;
					switch (s) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++o;
							continue;
						case 10:
							++o, ++e.line, e.lineStart = o;
							continue;
						case 13:
							10 === i.charCodeAt(o + 1) ? o += 2 : ++o, ++e.line, e.lineStart = o;
							continue;
						case 33:
							return new I.b(O.BANG, o, o + 1, a, c, t);
						case 35:
							return M(n, o, a, c, t);
						case 36:
							return new I.b(O.DOLLAR, o, o + 1, a, c, t);
						case 38:
							return new I.b(O.AMP, o, o + 1, a, c, t);
						case 40:
							return new I.b(O.PAREN_L, o, o + 1, a, c, t);
						case 41:
							return new I.b(O.PAREN_R, o, o + 1, a, c, t);
						case 46:
							if (46 === i.charCodeAt(o + 1) && 46 === i.charCodeAt(o + 2)) return new I.b(O.SPREAD, o, o + 3, a, c, t);
							break;
						case 58:
							return new I.b(O.COLON, o, o + 1, a, c, t);
						case 61:
							return new I.b(O.EQUALS, o, o + 1, a, c, t);
						case 64:
							return new I.b(O.AT, o, o + 1, a, c, t);
						case 91:
							return new I.b(O.BRACKET_L, o, o + 1, a, c, t);
						case 93:
							return new I.b(O.BRACKET_R, o, o + 1, a, c, t);
						case 123:
							return new I.b(O.BRACE_L, o, o + 1, a, c, t);
						case 124:
							return new I.b(O.PIPE, o, o + 1, a, c, t);
						case 125:
							return new I.b(O.BRACE_R, o, o + 1, a, c, t);
						case 34:
							return 34 === i.charCodeAt(o + 1) && 34 === i.charCodeAt(o + 2) ? U(n, o, a, c, t, e) : j(n, o, a, c, t);
						case 45:
						case 48:
						case 49:
						case 50:
						case 51:
						case 52:
						case 53:
						case 54:
						case 55:
						case 56:
						case 57:
							return P(n, o, s, a, c, t);
						case 65:
						case 66:
						case 67:
						case 68:
						case 69:
						case 70:
						case 71:
						case 72:
						case 73:
						case 74:
						case 75:
						case 76:
						case 77:
						case 78:
						case 79:
						case 80:
						case 81:
						case 82:
						case 83:
						case 84:
						case 85:
						case 86:
						case 87:
						case 88:
						case 89:
						case 90:
						case 95:
						case 97:
						case 98:
						case 99:
						case 100:
						case 101:
						case 102:
						case 103:
						case 104:
						case 105:
						case 106:
						case 107:
						case 108:
						case 109:
						case 110:
						case 111:
						case 112:
						case 113:
						case 114:
						case 115:
						case 116:
						case 117:
						case 118:
						case 119:
						case 120:
						case 121:
						case 122:
							return V(n, o, a, c, t)
					}
					throw N(n, o, L(s))
				}
				var u = e.line,
					l = 1 + o - e.lineStart;
				return new I.b(O.EOF, r, r, u, l, t)
			}

			function L(e) {
				return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(w(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(w(e), ".")
			}

			function M(e, t, n, i, r) {
				var o, s = e.body,
					a = t;
				do {
					o = s.charCodeAt(++a)
				} while (!isNaN(o) && (o > 31 || 9 === o));
				return new I.b(O.COMMENT, t, a, n, i, r, s.slice(t + 1, a))
			}

			function P(e, t, n, i, r, o) {
				var s = e.body,
					a = n,
					c = t,
					u = !1;
				if (45 === a && (a = s.charCodeAt(++c)), 48 === a) {
					if ((a = s.charCodeAt(++c)) >= 48 && a <= 57) throw N(e, c, "Invalid number, unexpected digit after 0: ".concat(w(a), "."))
				} else c = F(e, c, a), a = s.charCodeAt(c);
				if (46 === a && (u = !0, a = s.charCodeAt(++c), c = F(e, c, a), a = s.charCodeAt(c)), 69 !== a && 101 !== a || (u = !0, 43 !== (a = s.charCodeAt(++c)) && 45 !== a || (a = s.charCodeAt(++c)), c = F(e, c, a), a = s.charCodeAt(c)), 46 === a || function(e) {
						return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
					}(a)) throw N(e, c, "Invalid number, expected digit but got: ".concat(w(a), "."));
				return new I.b(u ? O.FLOAT : O.INT, t, c, i, r, o, s.slice(t, c))
			}

			function F(e, t, n) {
				var i = e.body,
					r = t,
					o = n;
				if (o >= 48 && o <= 57) {
					do {
						o = i.charCodeAt(++r)
					} while (o >= 48 && o <= 57);
					return r
				}
				throw N(e, r, "Invalid number, expected digit but got: ".concat(w(o), "."))
			}

			function j(e, t, n, i, r) {
				for (var o, s, a, c, u = e.body, l = t + 1, p = l, h = 0, f = ""; l < u.length && !isNaN(h = u.charCodeAt(l)) && 10 !== h && 13 !== h;) {
					if (34 === h) return f += u.slice(p, l), new I.b(O.STRING, t, l + 1, n, i, r, f);
					if (h < 32 && 9 !== h) throw N(e, l, "Invalid character within String: ".concat(w(h), "."));
					if (++l, 92 === h) {
						switch (f += u.slice(p, l - 1), h = u.charCodeAt(l)) {
							case 34:
								f += '"';
								break;
							case 47:
								f += "/";
								break;
							case 92:
								f += "\\";
								break;
							case 98:
								f += "\b";
								break;
							case 102:
								f += "\f";
								break;
							case 110:
								f += "\n";
								break;
							case 114:
								f += "\r";
								break;
							case 116:
								f += "\t";
								break;
							case 117:
								var d = (o = u.charCodeAt(l + 1), s = u.charCodeAt(l + 2), a = u.charCodeAt(l + 3), c = u.charCodeAt(l + 4), B(o) << 12 | B(s) << 8 | B(a) << 4 | B(c));
								if (d < 0) {
									var v = u.slice(l + 1, l + 5);
									throw N(e, l, "Invalid character escape sequence: \\u".concat(v, "."))
								}
								f += String.fromCharCode(d), l += 4;
								break;
							default:
								throw N(e, l, "Invalid character escape sequence: \\".concat(String.fromCharCode(h), "."))
						}
						p = ++l
					}
				}
				throw N(e, l, "Unterminated string.")
			}

			function U(e, t, n, i, r, o) {
				for (var s = e.body, a = t + 3, c = a, u = 0, l = ""; a < s.length && !isNaN(u = s.charCodeAt(a));) {
					if (34 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2)) return l += s.slice(c, a), new I.b(O.BLOCK_STRING, t, a + 3, n, i, r, Object(k.a)(l));
					if (u < 32 && 9 !== u && 10 !== u && 13 !== u) throw N(e, a, "Invalid character within String: ".concat(w(u), "."));
					10 === u ? (++a, ++o.line, o.lineStart = a) : 13 === u ? (10 === s.charCodeAt(a + 1) ? a += 2 : ++a, ++o.line, o.lineStart = a) : 92 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2) && 34 === s.charCodeAt(a + 3) ? (l += s.slice(c, a) + '"""', c = a += 4) : ++a
				}
				throw N(e, a, "Unterminated string.")
			}

			function B(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function V(e, t, n, i, r) {
				for (var o = e.body, s = o.length, a = t + 1, c = 0; a !== s && !isNaN(c = o.charCodeAt(a)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++a;
				return new I.b(O.NAME, t, a, n, i, r, o.slice(t, a))
			}

			function G(e, t) {
				return new K(e, t).parseDocument()
			}
			var K = function() {
				function e(e, t) {
					var n = function(e) {
						return A(e, x)
					}(e) ? e : new x(e);
					this._lexer = new C(n), this._options = t
				}
				var t = e.prototype;
				return t.parseName = function() {
					var e = this.expectToken(O.NAME);
					return {
						kind: _.NAME,
						value: e.value,
						loc: this.loc(e)
					}
				}, t.parseDocument = function() {
					var e = this._lexer.token;
					return {
						kind: _.DOCUMENT,
						definitions: this.many(O.SOF, this.parseDefinition, O.EOF),
						loc: this.loc(e)
					}
				}, t.parseDefinition = function() {
					if (this.peek(O.NAME)) switch (this._lexer.token.value) {
						case "query":
						case "mutation":
						case "subscription":
							return this.parseOperationDefinition();
						case "fragment":
							return this.parseFragmentDefinition();
						case "schema":
						case "scalar":
						case "type":
						case "interface":
						case "union":
						case "enum":
						case "input":
						case "directive":
							return this.parseTypeSystemDefinition();
						case "extend":
							return this.parseTypeSystemExtension()
					} else {
						if (this.peek(O.BRACE_L)) return this.parseOperationDefinition();
						if (this.peekDescription()) return this.parseTypeSystemDefinition()
					}
					throw this.unexpected()
				}, t.parseOperationDefinition = function() {
					var e = this._lexer.token;
					if (this.peek(O.BRACE_L)) return {
						kind: _.OPERATION_DEFINITION,
						operation: "query",
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					};
					var t, n = this.parseOperationType();
					return this.peek(O.NAME) && (t = this.parseName()), {
						kind: _.OPERATION_DEFINITION,
						operation: n,
						name: t,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseOperationType = function() {
					var e = this.expectToken(O.NAME);
					switch (e.value) {
						case "query":
							return "query";
						case "mutation":
							return "mutation";
						case "subscription":
							return "subscription"
					}
					throw this.unexpected(e)
				}, t.parseVariableDefinitions = function() {
					return this.optionalMany(O.PAREN_L, this.parseVariableDefinition, O.PAREN_R)
				}, t.parseVariableDefinition = function() {
					var e = this._lexer.token;
					return {
						kind: _.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(O.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(O.EQUALS) ? this.parseValueLiteral(!0) : void 0,
						directives: this.parseDirectives(!0),
						loc: this.loc(e)
					}
				}, t.parseVariable = function() {
					var e = this._lexer.token;
					return this.expectToken(O.DOLLAR), {
						kind: _.VARIABLE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseSelectionSet = function() {
					var e = this._lexer.token;
					return {
						kind: _.SELECTION_SET,
						selections: this.many(O.BRACE_L, this.parseSelection, O.BRACE_R),
						loc: this.loc(e)
					}
				}, t.parseSelection = function() {
					return this.peek(O.SPREAD) ? this.parseFragment() : this.parseField()
				}, t.parseField = function() {
					var e, t, n = this._lexer.token,
						i = this.parseName();
					return this.expectOptionalToken(O.COLON) ? (e = i, t = this.parseName()) : t = i, {
						kind: _.FIELD,
						alias: e,
						name: t,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(O.BRACE_L) ? this.parseSelectionSet() : void 0,
						loc: this.loc(n)
					}
				}, t.parseArguments = function(e) {
					var t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(O.PAREN_L, t, O.PAREN_R)
				}, t.parseArgument = function() {
					var e = this._lexer.token,
						t = this.parseName();
					return this.expectToken(O.COLON), {
						kind: _.ARGUMENT,
						name: t,
						value: this.parseValueLiteral(!1),
						loc: this.loc(e)
					}
				}, t.parseConstArgument = function() {
					var e = this._lexer.token;
					return {
						kind: _.ARGUMENT,
						name: this.parseName(),
						value: (this.expectToken(O.COLON), this.parseValueLiteral(!0)),
						loc: this.loc(e)
					}
				}, t.parseFragment = function() {
					var e = this._lexer.token;
					this.expectToken(O.SPREAD);
					var t = this.expectOptionalKeyword("on");
					return !t && this.peek(O.NAME) ? {
						kind: _.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1),
						loc: this.loc(e)
					} : {
						kind: _.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseFragmentDefinition = function() {
					var e, t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
						kind: _.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					} : {
						kind: _.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					}
				}, t.parseFragmentName = function() {
					if ("on" === this._lexer.token.value) throw this.unexpected();
					return this.parseName()
				}, t.parseValueLiteral = function(e) {
					var t = this._lexer.token;
					switch (t.kind) {
						case O.BRACKET_L:
							return this.parseList(e);
						case O.BRACE_L:
							return this.parseObject(e);
						case O.INT:
							return this._lexer.advance(), {
								kind: _.INT,
								value: t.value,
								loc: this.loc(t)
							};
						case O.FLOAT:
							return this._lexer.advance(), {
								kind: _.FLOAT,
								value: t.value,
								loc: this.loc(t)
							};
						case O.STRING:
						case O.BLOCK_STRING:
							return this.parseStringLiteral();
						case O.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return {
										kind: _.BOOLEAN, value: !0, loc: this.loc(t)
									};
								case "false":
									return {
										kind: _.BOOLEAN, value: !1, loc: this.loc(t)
									};
								case "null":
									return {
										kind: _.NULL, loc: this.loc(t)
									};
								default:
									return {
										kind: _.ENUM, value: t.value, loc: this.loc(t)
									}
							}
							case O.DOLLAR:
								if (!e) return this.parseVariable()
					}
					throw this.unexpected()
				}, t.parseStringLiteral = function() {
					var e = this._lexer.token;
					return this._lexer.advance(), {
						kind: _.STRING,
						value: e.value,
						block: e.kind === O.BLOCK_STRING,
						loc: this.loc(e)
					}
				}, t.parseList = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: _.LIST,
						values: this.any(O.BRACKET_L, (function() {
							return t.parseValueLiteral(e)
						}), O.BRACKET_R),
						loc: this.loc(n)
					}
				}, t.parseObject = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: _.OBJECT,
						fields: this.any(O.BRACE_L, (function() {
							return t.parseObjectField(e)
						}), O.BRACE_R),
						loc: this.loc(n)
					}
				}, t.parseObjectField = function(e) {
					var t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(O.COLON), {
						kind: _.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e),
						loc: this.loc(t)
					}
				}, t.parseDirectives = function(e) {
					for (var t = []; this.peek(O.AT);) t.push(this.parseDirective(e));
					return t
				}, t.parseDirective = function(e) {
					var t = this._lexer.token;
					return this.expectToken(O.AT), {
						kind: _.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e),
						loc: this.loc(t)
					}
				}, t.parseTypeReference = function() {
					var e, t = this._lexer.token;
					return this.expectOptionalToken(O.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(O.BRACKET_R), e = {
						kind: _.LIST_TYPE,
						type: e,
						loc: this.loc(t)
					}) : e = this.parseNamedType(), this.expectOptionalToken(O.BANG) ? {
						kind: _.NON_NULL_TYPE,
						type: e,
						loc: this.loc(t)
					} : e
				}, t.parseNamedType = function() {
					var e = this._lexer.token;
					return {
						kind: _.NAMED_TYPE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseTypeSystemDefinition = function() {
					var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
					if (e.kind === O.NAME) switch (e.value) {
						case "schema":
							return this.parseSchemaDefinition();
						case "scalar":
							return this.parseScalarTypeDefinition();
						case "type":
							return this.parseObjectTypeDefinition();
						case "interface":
							return this.parseInterfaceTypeDefinition();
						case "union":
							return this.parseUnionTypeDefinition();
						case "enum":
							return this.parseEnumTypeDefinition();
						case "input":
							return this.parseInputObjectTypeDefinition();
						case "directive":
							return this.parseDirectiveDefinition()
					}
					throw this.unexpected(e)
				}, t.peekDescription = function() {
					return this.peek(O.STRING) || this.peek(O.BLOCK_STRING)
				}, t.parseDescription = function() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}, t.parseSchemaDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					var n = this.parseDirectives(!0),
						i = this.many(O.BRACE_L, this.parseOperationTypeDefinition, O.BRACE_R);
					return {
						kind: _.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: i,
						loc: this.loc(e)
					}
				}, t.parseOperationTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(O.COLON);
					var n = this.parseNamedType();
					return {
						kind: _.OPERATION_TYPE_DEFINITION,
						operation: t,
						type: n,
						loc: this.loc(e)
					}
				}, t.parseScalarTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("scalar");
					var n = this.parseName(),
						i = this.parseDirectives(!0);
					return {
						kind: _.SCALAR_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						loc: this.loc(e)
					}
				}, t.parseObjectTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("type");
					var n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseDirectives(!0),
						o = this.parseFieldsDefinition();
					return {
						kind: _.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: o,
						loc: this.loc(e)
					}
				}, t.parseImplementsInterfaces = function() {
					var e;
					if (!this.expectOptionalKeyword("implements")) return [];
					if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
						var t = [];
						this.expectOptionalToken(O.AMP);
						do {
							t.push(this.parseNamedType())
						} while (this.expectOptionalToken(O.AMP) || this.peek(O.NAME));
						return t
					}
					return this.delimitedMany(O.AMP, this.parseNamedType)
				}, t.parseFieldsDefinition = function() {
					var e;
					return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(O.BRACE_L) && this._lexer.lookahead().kind === O.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(O.BRACE_L, this.parseFieldDefinition, O.BRACE_R)
				}, t.parseFieldDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseArgumentDefs();
					this.expectToken(O.COLON);
					var r = this.parseTypeReference(),
						o = this.parseDirectives(!0);
					return {
						kind: _.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						type: r,
						directives: o,
						loc: this.loc(e)
					}
				}, t.parseArgumentDefs = function() {
					return this.optionalMany(O.PAREN_L, this.parseInputValueDef, O.PAREN_R)
				}, t.parseInputValueDef = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(O.COLON);
					var i, r = this.parseTypeReference();
					this.expectOptionalToken(O.EQUALS) && (i = this.parseValueLiteral(!0));
					var o = this.parseDirectives(!0);
					return {
						kind: _.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: r,
						defaultValue: i,
						directives: o,
						loc: this.loc(e)
					}
				}, t.parseInterfaceTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					var n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseDirectives(!0),
						o = this.parseFieldsDefinition();
					return {
						kind: _.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: o,
						loc: this.loc(e)
					}
				}, t.parseUnionTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("union");
					var n = this.parseName(),
						i = this.parseDirectives(!0),
						r = this.parseUnionMemberTypes();
					return {
						kind: _.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						types: r,
						loc: this.loc(e)
					}
				}, t.parseUnionMemberTypes = function() {
					return this.expectOptionalToken(O.EQUALS) ? this.delimitedMany(O.PIPE, this.parseNamedType) : []
				}, t.parseEnumTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					var n = this.parseName(),
						i = this.parseDirectives(!0),
						r = this.parseEnumValuesDefinition();
					return {
						kind: _.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						values: r,
						loc: this.loc(e)
					}
				}, t.parseEnumValuesDefinition = function() {
					return this.optionalMany(O.BRACE_L, this.parseEnumValueDefinition, O.BRACE_R)
				}, t.parseEnumValueDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseDirectives(!0);
					return {
						kind: _.ENUM_VALUE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						loc: this.loc(e)
					}
				}, t.parseInputObjectTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("input");
					var n = this.parseName(),
						i = this.parseDirectives(!0),
						r = this.parseInputFieldsDefinition();
					return {
						kind: _.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseInputFieldsDefinition = function() {
					return this.optionalMany(O.BRACE_L, this.parseInputValueDef, O.BRACE_R)
				}, t.parseTypeSystemExtension = function() {
					var e = this._lexer.lookahead();
					if (e.kind === O.NAME) switch (e.value) {
						case "schema":
							return this.parseSchemaExtension();
						case "scalar":
							return this.parseScalarTypeExtension();
						case "type":
							return this.parseObjectTypeExtension();
						case "interface":
							return this.parseInterfaceTypeExtension();
						case "union":
							return this.parseUnionTypeExtension();
						case "enum":
							return this.parseEnumTypeExtension();
						case "input":
							return this.parseInputObjectTypeExtension()
					}
					throw this.unexpected(e)
				}, t.parseSchemaExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("schema");
					var t = this.parseDirectives(!0),
						n = this.optionalMany(O.BRACE_L, this.parseOperationTypeDefinition, O.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return {
						kind: _.SCHEMA_EXTENSION,
						directives: t,
						operationTypes: n,
						loc: this.loc(e)
					}
				}, t.parseScalarTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("scalar");
					var t = this.parseName(),
						n = this.parseDirectives(!0);
					if (0 === n.length) throw this.unexpected();
					return {
						kind: _.SCALAR_TYPE_EXTENSION,
						name: t,
						directives: n,
						loc: this.loc(e)
					}
				}, t.parseObjectTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("type");
					var t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						i = this.parseDirectives(!0),
						r = this.parseFieldsDefinition();
					if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
					return {
						kind: _.OBJECT_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: i,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseInterfaceTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("interface");
					var t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						i = this.parseDirectives(!0),
						r = this.parseFieldsDefinition();
					if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
					return {
						kind: _.INTERFACE_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: i,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseUnionTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("union");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						i = this.parseUnionMemberTypes();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return {
						kind: _.UNION_TYPE_EXTENSION,
						name: t,
						directives: n,
						types: i,
						loc: this.loc(e)
					}
				}, t.parseEnumTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("enum");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						i = this.parseEnumValuesDefinition();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return {
						kind: _.ENUM_TYPE_EXTENSION,
						name: t,
						directives: n,
						values: i,
						loc: this.loc(e)
					}
				}, t.parseInputObjectTypeExtension = function() {
					var e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("input");
					var t = this.parseName(),
						n = this.parseDirectives(!0),
						i = this.parseInputFieldsDefinition();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return {
						kind: _.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseDirectiveDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(O.AT);
					var n = this.parseName(),
						i = this.parseArgumentDefs(),
						r = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					var o = this.parseDirectiveLocations();
					return {
						kind: _.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						repeatable: r,
						locations: o,
						loc: this.loc(e)
					}
				}, t.parseDirectiveLocations = function() {
					return this.delimitedMany(O.PIPE, this.parseDirectiveLocation)
				}, t.parseDirectiveLocation = function() {
					var e = this._lexer.token,
						t = this.parseName();
					if (void 0 !== D[t.value]) return t;
					throw this.unexpected(e)
				}, t.loc = function(e) {
					var t;
					if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new I.a(e, this._lexer.lastToken, this._lexer.source)
				}, t.peek = function(e) {
					return this._lexer.token.kind === e
				}, t.expectToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw N(this._lexer.source, t.start, "Expected ".concat(Q(e), ", found ").concat(Y(t), "."))
				}, t.expectOptionalToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t
				}, t.expectKeyword = function(e) {
					var t = this._lexer.token;
					if (t.kind !== O.NAME || t.value !== e) throw N(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(Y(t), "."));
					this._lexer.advance()
				}, t.expectOptionalKeyword = function(e) {
					var t = this._lexer.token;
					return t.kind === O.NAME && t.value === e && (this._lexer.advance(), !0)
				}, t.unexpected = function(e) {
					var t = null != e ? e : this._lexer.token;
					return N(this._lexer.source, t.start, "Unexpected ".concat(Y(t), "."))
				}, t.any = function(e, t, n) {
					this.expectToken(e);
					for (var i = []; !this.expectOptionalToken(n);) i.push(t.call(this));
					return i
				}, t.optionalMany = function(e, t, n) {
					if (this.expectOptionalToken(e)) {
						var i = [];
						do {
							i.push(t.call(this))
						} while (!this.expectOptionalToken(n));
						return i
					}
					return []
				}, t.many = function(e, t, n) {
					this.expectToken(e);
					var i = [];
					do {
						i.push(t.call(this))
					} while (!this.expectOptionalToken(n));
					return i
				}, t.delimitedMany = function(e, t) {
					this.expectOptionalToken(e);
					var n = [];
					do {
						n.push(t.call(this))
					} while (this.expectOptionalToken(e));
					return n
				}, e
			}();

			function Y(e) {
				var t = e.value;
				return Q(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
			}

			function Q(e) {
				return function(e) {
					return e === O.BANG || e === O.DOLLAR || e === O.AMP || e === O.PAREN_L || e === O.PAREN_R || e === O.SPREAD || e === O.COLON || e === O.EQUALS || e === O.AT || e === O.BRACKET_L || e === O.BRACKET_R || e === O.BRACE_L || e === O.PIPE || e === O.BRACE_R
				}(e) ? '"'.concat(e, '"') : e
			}
		},
		"./node_modules/graphql/language/printer.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.print = function(e) {
				return (0, i.visit)(e, {
					leave: o
				})
			};
			var i = n("./node_modules/graphql/language/visitor.js"),
				r = n("./node_modules/graphql/language/blockString.js");
			var o = {
				Name: function(e) {
					return e.value
				},
				Variable: function(e) {
					return "$" + e.name
				},
				Document: function(e) {
					return a(e.definitions, "\n\n") + "\n"
				},
				OperationDefinition: function(e) {
					var t = e.operation,
						n = e.name,
						i = u("(", a(e.variableDefinitions, ", "), ")"),
						r = a(e.directives, " "),
						o = e.selectionSet;
					return n || r || i || "query" !== t ? a([t, a([n, i]), r, o], " ") : o
				},
				VariableDefinition: function(e) {
					var t = e.variable,
						n = e.type,
						i = e.defaultValue,
						r = e.directives;
					return t + ": " + n + u(" = ", i) + u(" ", a(r, " "))
				},
				SelectionSet: function(e) {
					return c(e.selections)
				},
				Field: function(e) {
					var t = e.alias,
						n = e.name,
						i = e.arguments,
						r = e.directives,
						o = e.selectionSet,
						s = u("", t, ": ") + n,
						c = s + u("(", a(i, ", "), ")");
					return c.length > 80 && (c = s + u("(\n", l(a(i, "\n")), "\n)")), a([c, a(r, " "), o], " ")
				},
				Argument: function(e) {
					return e.name + ": " + e.value
				},
				FragmentSpread: function(e) {
					return "..." + e.name + u(" ", a(e.directives, " "))
				},
				InlineFragment: function(e) {
					var t = e.typeCondition,
						n = e.directives,
						i = e.selectionSet;
					return a(["...", u("on ", t), a(n, " "), i], " ")
				},
				FragmentDefinition: function(e) {
					var t = e.name,
						n = e.typeCondition,
						i = e.variableDefinitions,
						r = e.directives,
						o = e.selectionSet;
					return "fragment ".concat(t).concat(u("(", a(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(u("", a(r, " "), " ")) + o
				},
				IntValue: function(e) {
					return e.value
				},
				FloatValue: function(e) {
					return e.value
				},
				StringValue: function(e, t) {
					var n = e.value;
					return e.block ? (0, r.printBlockString)(n, "description" === t ? "" : "  ") : JSON.stringify(n)
				},
				BooleanValue: function(e) {
					return e.value ? "true" : "false"
				},
				NullValue: function() {
					return "null"
				},
				EnumValue: function(e) {
					return e.value
				},
				ListValue: function(e) {
					return "[" + a(e.values, ", ") + "]"
				},
				ObjectValue: function(e) {
					return "{" + a(e.fields, ", ") + "}"
				},
				ObjectField: function(e) {
					return e.name + ": " + e.value
				},
				Directive: function(e) {
					return "@" + e.name + u("(", a(e.arguments, ", "), ")")
				},
				NamedType: function(e) {
					return e.name
				},
				ListType: function(e) {
					return "[" + e.type + "]"
				},
				NonNullType: function(e) {
					return e.type + "!"
				},
				SchemaDefinition: s((function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return a(["schema", a(t, " "), c(n)], " ")
				})),
				OperationTypeDefinition: function(e) {
					return e.operation + ": " + e.type
				},
				ScalarTypeDefinition: s((function(e) {
					return a(["scalar", e.name, a(e.directives, " ")], " ")
				})),
				ObjectTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return a(["type", t, u("implements ", a(n, " & ")), a(i, " "), c(r)], " ")
				})),
				FieldDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.type,
						r = e.directives;
					return t + (h(n) ? u("(\n", l(a(n, "\n")), "\n)") : u("(", a(n, ", "), ")")) + ": " + i + u(" ", a(r, " "))
				})),
				InputValueDefinition: s((function(e) {
					var t = e.name,
						n = e.type,
						i = e.defaultValue,
						r = e.directives;
					return a([t + ": " + n, u("= ", i), a(r, " ")], " ")
				})),
				InterfaceTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return a(["interface", t, u("implements ", a(n, " & ")), a(i, " "), c(r)], " ")
				})),
				UnionTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.types;
					return a(["union", t, a(n, " "), i && 0 !== i.length ? "= " + a(i, " | ") : ""], " ")
				})),
				EnumTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.values;
					return a(["enum", t, a(n, " "), c(i)], " ")
				})),
				EnumValueDefinition: s((function(e) {
					return a([e.name, a(e.directives, " ")], " ")
				})),
				InputObjectTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return a(["input", t, a(n, " "), c(i)], " ")
				})),
				DirectiveDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.repeatable,
						r = e.locations;
					return "directive @" + t + (h(n) ? u("(\n", l(a(n, "\n")), "\n)") : u("(", a(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + a(r, " | ")
				})),
				SchemaExtension: function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return a(["extend schema", a(t, " "), c(n)], " ")
				},
				ScalarTypeExtension: function(e) {
					return a(["extend scalar", e.name, a(e.directives, " ")], " ")
				},
				ObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return a(["extend type", t, u("implements ", a(n, " & ")), a(i, " "), c(r)], " ")
				},
				InterfaceTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return a(["extend interface", t, u("implements ", a(n, " & ")), a(i, " "), c(r)], " ")
				},
				UnionTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.types;
					return a(["extend union", t, a(n, " "), i && 0 !== i.length ? "= " + a(i, " | ") : ""], " ")
				},
				EnumTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.values;
					return a(["extend enum", t, a(n, " "), c(i)], " ")
				},
				InputObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return a(["extend input", t, a(n, " "), c(i)], " ")
				}
			};

			function s(e) {
				return function(t) {
					return a([t.description, e(t)], "\n")
				}
			}

			function a(e) {
				var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return null !== (t = null == e ? void 0 : e.filter((function(e) {
					return e
				})).join(n)) && void 0 !== t ? t : ""
			}

			function c(e) {
				return u("{\n", l(a(e, "\n")), "\n}")
			}

			function u(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return null != t && "" !== t ? e + t + n : ""
			}

			function l(e) {
				return u("  ", e.replace(/\n/g, "\n  "))
			}

			function p(e) {
				return -1 !== e.indexOf("\n")
			}

			function h(e) {
				return null != e && e.some(p)
			}
		},
		"./node_modules/graphql/utilities/getOperationAST.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getOperationAST = function(e, t) {
				for (var n = null, r = 0, o = e.definitions; r < o.length; r++) {
					var s, a = o[r];
					if (a.kind === i.Kind.OPERATION_DEFINITION)
						if (null == t) {
							if (n) return null;
							n = a
						} else if ((null === (s = a.name) || void 0 === s ? void 0 : s.value) === t) return a
				}
				return n
			};
			var i = n("./node_modules/graphql/language/kinds.js")
		},
		"./node_modules/subscriptions-transport-ws/dist/client.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var i = this && this.__assign || function() {
						return (i = Object.assign || function(e) {
							for (var t, n = 1, i = arguments.length; n < i; n++)
								for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
							return e
						}).apply(this, arguments)
					},
					r = this && this.__awaiter || function(e, t, n, i) {
						return new(n || (n = Promise))((function(r, o) {
							function s(e) {
								try {
									c(i.next(e))
								} catch (t) {
									o(t)
								}
							}

							function a(e) {
								try {
									c(i.throw(e))
								} catch (t) {
									o(t)
								}
							}

							function c(e) {
								var t;
								e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
									e(t)
								}))).then(s, a)
							}
							c((i = i.apply(e, t || [])).next())
						}))
					},
					o = this && this.__generator || function(e, t) {
						var n, i, r, o, s = {
							label: 0,
							sent: function() {
								if (1 & r[0]) throw r[1];
								return r[1]
							},
							trys: [],
							ops: []
						};
						return o = {
							next: a(0),
							throw: a(1),
							return: a(2)
						}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
							return this
						}), o;

						function a(o) {
							return function(a) {
								return function(o) {
									if (n) throw new TypeError("Generator is already executing.");
									for (; s;) try {
										if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
										switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
											case 0:
											case 1:
												r = o;
												break;
											case 4:
												return s.label++, {
													value: o[1],
													done: !1
												};
											case 5:
												s.label++, i = o[1], o = [0];
												continue;
											case 7:
												o = s.ops.pop(), s.trys.pop();
												continue;
											default:
												if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
													s = 0;
													continue
												}
												if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
													s.label = o[1];
													break
												}
												if (6 === o[0] && s.label < r[1]) {
													s.label = r[1], r = o;
													break
												}
												if (r && s.label < r[2]) {
													s.label = r[2], s.ops.push(o);
													break
												}
												r[2] && s.ops.pop(), s.trys.pop();
												continue
										}
										o = t.call(e, s)
									} catch (a) {
										o = [6, a], i = 0
									} finally {
										n = r = 0
									}
									if (5 & o[0]) throw o[1];
									return {
										value: o[0] ? o[1] : void 0,
										done: !0
									}
								}([o, a])
							}
						}
					},
					s = this && this.__spreadArrays || function() {
						for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
						var i = Array(e),
							r = 0;
						for (t = 0; t < n; t++)
							for (var o = arguments[t], s = 0, a = o.length; s < a; s++, r++) i[r] = o[s];
						return i
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SubscriptionClient = void 0;
				var a = void 0 !== e ? e : "undefined" != typeof window ? window : {},
					c = a.WebSocket || a.MozWebSocket,
					u = n("./node_modules/backo2/index.js"),
					l = n("./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js"),
					p = n("./node_modules/subscriptions-transport-ws/dist/utils/is-string.js"),
					h = n("./node_modules/subscriptions-transport-ws/dist/utils/is-object.js"),
					f = n("./node_modules/graphql/language/printer.js"),
					d = n("./node_modules/graphql/utilities/getOperationAST.js"),
					v = n("./node_modules/symbol-observable/es/index.js"),
					E = n("./node_modules/subscriptions-transport-ws/dist/protocol.js"),
					m = n("./node_modules/subscriptions-transport-ws/dist/defaults.js"),
					T = n("./node_modules/subscriptions-transport-ws/dist/message-types.js"),
					y = function() {
						function e(e, t, n, i) {
							var r = t || {},
								o = r.connectionCallback,
								s = void 0 === o ? void 0 : o,
								a = r.connectionParams,
								p = void 0 === a ? {} : a,
								h = r.minTimeout,
								f = void 0 === h ? m.MIN_WS_TIMEOUT : h,
								d = r.timeout,
								v = void 0 === d ? m.WS_TIMEOUT : d,
								T = r.reconnect,
								y = void 0 !== T && T,
								N = r.reconnectionAttempts,
								_ = void 0 === N ? 1 / 0 : N,
								I = r.lazy,
								O = void 0 !== I && I,
								b = r.inactivityTimeout,
								g = void 0 === b ? 0 : b,
								A = r.wsOptionArguments,
								S = void 0 === A ? [] : A;
							if (this.wsImpl = n || c, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = i || E.GRAPHQL_WS, this.connectionCallback = s, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = f, this.wsTimeout = v, this.unsentMessagesQueue = [], this.reconnect = y, this.reconnecting = !1, this.reconnectionAttempts = _, this.lazy = !!O, this.inactivityTimeout = g, this.closedByUser = !1, this.backoff = new u({
								jitter: .5
							}), this.eventEmitter = new l.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(p), this.wsOptionArguments = S, this.lazy || this.connect()
						}
						return Object.defineProperty(e.prototype, "status", {
							get: function() {
								return null === this.client ? this.wsImpl.CLOSED : this.client.readyState
							},
							enumerable: !1,
							configurable: !0
						}), e.prototype.close = function(e, t) {
							void 0 === e && (e = !0), void 0 === t && (t = !0), this.clearInactivityTimeout(), null !== this.client && (this.closedByUser = t, e && (this.clearCheckConnectionInterval(), this.clearMaxConnectTimeout(), this.clearTryReconnectTimeout(), this.unsubscribeAll(), this.sendMessage(void 0, T.default.GQL_CONNECTION_TERMINATE, null)), this.client.close(), this.client.onopen = null, this.client.onclose = null, this.client.onerror = null, this.client.onmessage = null, this.client = null, this.eventEmitter.emit("disconnected"), e || this.tryReconnect())
						}, e.prototype.request = function(e) {
							var t, n, i = this.getObserver.bind(this),
								r = this.executeOperation.bind(this),
								o = this.unsubscribe.bind(this);
							return this.clearInactivityTimeout(), (t = {})[v.default] = function() {
								return this
							}, t.subscribe = function(t, s, a) {
								var c = i(t, s, a);
								return n = r(e, (function(e, t) {
									null === e && null === t ? c.complete && c.complete() : e ? c.error && c.error(e[0]) : c.next && c.next(t)
								})), {
									unsubscribe: function() {
										n && (o(n), n = null)
									}
								}
							}, t
						}, e.prototype.on = function(e, t, n) {
							var i = this.eventEmitter.on(e, t, n);
							return function() {
								i.off(e, t, n)
							}
						}, e.prototype.onConnected = function(e, t) {
							return this.on("connected", e, t)
						}, e.prototype.onConnecting = function(e, t) {
							return this.on("connecting", e, t)
						}, e.prototype.onDisconnected = function(e, t) {
							return this.on("disconnected", e, t)
						}, e.prototype.onReconnected = function(e, t) {
							return this.on("reconnected", e, t)
						}, e.prototype.onReconnecting = function(e, t) {
							return this.on("reconnecting", e, t)
						}, e.prototype.onError = function(e, t) {
							return this.on("error", e, t)
						}, e.prototype.unsubscribeAll = function() {
							var e = this;
							Object.keys(this.operations).forEach((function(t) {
								e.unsubscribe(t)
							}))
						}, e.prototype.applyMiddlewares = function(e) {
							var t = this;
							return new Promise((function(n, i) {
								var r, o, a;
								r = s(t.middlewares), o = t, (a = function(t) {
									if (t) i(t);
									else if (r.length > 0) {
										var s = r.shift();
										s && s.applyMiddleware.apply(o, [e, a])
									} else n(e)
								})()
							}))
						}, e.prototype.use = function(e) {
							var t = this;
							return e.map((function(e) {
								if ("function" != typeof e.applyMiddleware) throw new Error("Middleware must implement the applyMiddleware function.");
								t.middlewares.push(e)
							})), this
						}, e.prototype.getConnectionParams = function(e) {
							return function() {
								return new Promise((function(t, n) {
									if ("function" == typeof e) try {
										return t(e.call(null))
									} catch (i) {
										return n(i)
									}
									t(e)
								}))
							}
						}, e.prototype.executeOperation = function(e, t) {
							var n = this;
							null === this.client && this.connect();
							var i = this.generateOperationId();
							return this.operations[i] = {
								options: e,
								handler: t
							}, this.applyMiddlewares(e).then((function(e) {
								n.checkOperationOptions(e, t), n.operations[i] && (n.operations[i] = {
									options: e,
									handler: t
								}, n.sendMessage(i, T.default.GQL_START, e))
							})).catch((function(e) {
								n.unsubscribe(i), t(n.formatErrors(e))
							})), i
						}, e.prototype.getObserver = function(e, t, n) {
							return "function" == typeof e ? {
								next: function(t) {
									return e(t)
								},
								error: function(e) {
									return t && t(e)
								},
								complete: function() {
									return n && n()
								}
							} : e
						}, e.prototype.createMaxConnectTimeGenerator = function() {
							var e = this.minWsTimeout,
								t = this.wsTimeout;
							return new u({
								min: e,
								max: t,
								factor: 1.2
							})
						}, e.prototype.clearCheckConnectionInterval = function() {
							this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnectionIntervalId = null)
						}, e.prototype.clearMaxConnectTimeout = function() {
							this.maxConnectTimeoutId && (clearTimeout(this.maxConnectTimeoutId), this.maxConnectTimeoutId = null)
						}, e.prototype.clearTryReconnectTimeout = function() {
							this.tryReconnectTimeoutId && (clearTimeout(this.tryReconnectTimeoutId), this.tryReconnectTimeoutId = null)
						}, e.prototype.clearInactivityTimeout = function() {
							this.inactivityTimeoutId && (clearTimeout(this.inactivityTimeoutId), this.inactivityTimeoutId = null)
						}, e.prototype.setInactivityTimeout = function() {
							var e = this;
							this.inactivityTimeout > 0 && 0 === Object.keys(this.operations).length && (this.inactivityTimeoutId = setTimeout((function() {
								0 === Object.keys(e.operations).length && e.close()
							}), this.inactivityTimeout))
						}, e.prototype.checkOperationOptions = function(e, t) {
							var n = e.query,
								i = e.variables,
								r = e.operationName;
							if (!n) throw new Error("Must provide a query.");
							if (!t) throw new Error("Must provide an handler.");
							if (!p.default(n) && !d.getOperationAST(n, r) || r && !p.default(r) || i && !h.default(i)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
						}, e.prototype.buildMessage = function(e, t, n) {
							return {
								id: e,
								type: t,
								payload: n && n.query ? i(i({}, n), {
									query: "string" == typeof n.query ? n.query : f.print(n.query)
								}) : n
							}
						}, e.prototype.formatErrors = function(e) {
							return Array.isArray(e) ? e : e && e.errors ? this.formatErrors(e.errors) : e && e.message ? [e] : [{
								name: "FormatedError",
								message: "Unknown error",
								originalError: e
							}]
						}, e.prototype.sendMessage = function(e, t, n) {
							this.sendMessageRaw(this.buildMessage(e, t, n))
						}, e.prototype.sendMessageRaw = function(e) {
							switch (this.status) {
								case this.wsImpl.OPEN:
									var t = JSON.stringify(e);
									try {
										JSON.parse(t)
									} catch (n) {
										this.eventEmitter.emit("error", new Error("Message must be JSON-serializable. Got: " + e))
									}
									this.client.send(t);
									break;
								case this.wsImpl.CONNECTING:
									this.unsentMessagesQueue.push(e);
									break;
								default:
									this.reconnecting || this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(e)))
							}
						}, e.prototype.generateOperationId = function() {
							return String(++this.nextOperationId)
						}, e.prototype.tryReconnect = function() {
							var e = this;
							if (this.reconnect && !(this.backoff.attempts >= this.reconnectionAttempts)) {
								this.reconnecting || (Object.keys(this.operations).forEach((function(t) {
									e.unsentMessagesQueue.push(e.buildMessage(t, T.default.GQL_START, e.operations[t].options))
								})), this.reconnecting = !0), this.clearTryReconnectTimeout();
								var t = this.backoff.duration();
								this.tryReconnectTimeoutId = setTimeout((function() {
									e.connect()
								}), t)
							}
						}, e.prototype.flushUnsentMessagesQueue = function() {
							var e = this;
							this.unsentMessagesQueue.forEach((function(t) {
								e.sendMessageRaw(t)
							})), this.unsentMessagesQueue = []
						}, e.prototype.checkConnection = function() {
							this.wasKeepAliveReceived ? this.wasKeepAliveReceived = !1 : this.reconnecting || this.close(!1, !0)
						}, e.prototype.checkMaxConnectTimeout = function() {
							var e = this;
							this.clearMaxConnectTimeout(), this.maxConnectTimeoutId = setTimeout((function() {
								e.status !== e.wsImpl.OPEN && (e.reconnecting = !0, e.close(!1, !0))
							}), this.maxConnectTimeGenerator.duration())
						}, e.prototype.connect = function() {
							var e, t = this;
							this.client = new((e = this.wsImpl).bind.apply(e, s([void 0, this.url, this.wsProtocols], this.wsOptionArguments))), this.checkMaxConnectTimeout(), this.client.onopen = function() {
								return r(t, void 0, void 0, (function() {
									var e, t;
									return o(this, (function(n) {
										switch (n.label) {
											case 0:
												if (this.status !== this.wsImpl.OPEN) return [3, 4];
												this.clearMaxConnectTimeout(), this.closedByUser = !1, this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting"), n.label = 1;
											case 1:
												return n.trys.push([1, 3, , 4]), [4, this.connectionParams()];
											case 2:
												return e = n.sent(), this.sendMessage(void 0, T.default.GQL_CONNECTION_INIT, e), this.flushUnsentMessagesQueue(), [3, 4];
											case 3:
												return t = n.sent(), this.sendMessage(void 0, T.default.GQL_CONNECTION_ERROR, t), this.flushUnsentMessagesQueue(), [3, 4];
											case 4:
												return [2]
										}
									}))
								}))
							}, this.client.onclose = function() {
								t.closedByUser || t.close(!1, !1)
							}, this.client.onerror = function(e) {
								t.eventEmitter.emit("error", e)
							}, this.client.onmessage = function(e) {
								var n = e.data;
								t.processReceivedData(n)
							}
						}, e.prototype.processReceivedData = function(e) {
							var t, n;
							try {
								n = (t = JSON.parse(e)).id
							} catch (a) {
								throw new Error("Message must be JSON-parseable. Got: " + e)
							}
							if (-1 === [T.default.GQL_DATA, T.default.GQL_COMPLETE, T.default.GQL_ERROR].indexOf(t.type) || this.operations[n]) switch (t.type) {
								case T.default.GQL_CONNECTION_ERROR:
									this.connectionCallback && this.connectionCallback(t.payload);
									break;
								case T.default.GQL_CONNECTION_ACK:
									this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", t.payload), this.reconnecting = !1, this.backoff.reset(), this.maxConnectTimeGenerator.reset(), this.connectionCallback && this.connectionCallback();
									break;
								case T.default.GQL_COMPLETE:
									var r = this.operations[n].handler;
									delete this.operations[n], r.call(this, null, null);
									break;
								case T.default.GQL_ERROR:
									this.operations[n].handler(this.formatErrors(t.payload), null), delete this.operations[n];
									break;
								case T.default.GQL_DATA:
									var o = t.payload.errors ? i(i({}, t.payload), {
										errors: this.formatErrors(t.payload.errors)
									}) : t.payload;
									this.operations[n].handler(null, o);
									break;
								case T.default.GQL_CONNECTION_KEEP_ALIVE:
									var s = void 0 === this.wasKeepAliveReceived;
									this.wasKeepAliveReceived = !0, s && this.checkConnection(), this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnection()), this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
									break;
								default:
									throw new Error("Invalid message type!")
							} else this.unsubscribe(n)
						}, e.prototype.unsubscribe = function(e) {
							this.operations[e] && (delete this.operations[e], this.setInactivityTimeout(), this.sendMessage(e, T.default.GQL_STOP, void 0))
						}, e
					}();
				t.SubscriptionClient = y
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/subscriptions-transport-ws/dist/defaults.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.WS_TIMEOUT = t.MIN_WS_TIMEOUT = void 0;
			t.MIN_WS_TIMEOUT = 1e3;
			t.WS_TIMEOUT = 3e4
		},
		"./node_modules/subscriptions-transport-ws/dist/message-types.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
				function e() {
					throw new Error("Static Class")
				}
				return e.GQL_CONNECTION_INIT = "connection_init", e.GQL_CONNECTION_ACK = "connection_ack", e.GQL_CONNECTION_ERROR = "connection_error", e.GQL_CONNECTION_KEEP_ALIVE = "ka", e.GQL_CONNECTION_TERMINATE = "connection_terminate", e.GQL_START = "start", e.GQL_DATA = "data", e.GQL_ERROR = "error", e.GQL_COMPLETE = "complete", e.GQL_STOP = "stop", e.SUBSCRIPTION_START = "subscription_start", e.SUBSCRIPTION_DATA = "subscription_data", e.SUBSCRIPTION_SUCCESS = "subscription_success", e.SUBSCRIPTION_FAIL = "subscription_fail", e.SUBSCRIPTION_END = "subscription_end", e.INIT = "init", e.INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.KEEP_ALIVE = "keepalive", e
			}();
			t.default = i
		},
		"./node_modules/subscriptions-transport-ws/dist/protocol.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.GRAPHQL_SUBSCRIPTIONS = t.GRAPHQL_WS = void 0;
			t.GRAPHQL_WS = "graphql-ws";
			t.GRAPHQL_SUBSCRIPTIONS = "graphql-subscriptions"
		},
		"./node_modules/subscriptions-transport-ws/dist/utils/is-object.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				return null !== e && "object" == typeof e
			}
		},
		"./node_modules/subscriptions-transport-ws/dist/utils/is-string.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				return "string" == typeof e
			}
		},
		"./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js": function(e, t, n) {
			"use strict";
			var i = Object.prototype.hasOwnProperty,
				r = "~";

			function o() {}

			function s(e, t, n) {
				this.fn = e, this.context = t, this.once = n || !1
			}

			function a(e, t, n, i, o) {
				if ("function" != typeof n) throw new TypeError("The listener must be a function");
				var a = new s(n, i || e, o),
					c = r ? r + t : t;
				return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
			}

			function c(e, t) {
				0 == --e._eventsCount ? e._events = new o : delete e._events[t]
			}

			function u() {
				this._events = new o, this._eventsCount = 0
			}
			Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), u.prototype.eventNames = function() {
				var e, t, n = [];
				if (0 === this._eventsCount) return n;
				for (t in e = this._events) i.call(e, t) && n.push(r ? t.slice(1) : t);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
			}, u.prototype.listeners = function(e) {
				var t = r ? r + e : e,
					n = this._events[t];
				if (!n) return [];
				if (n.fn) return [n.fn];
				for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
				return s
			}, u.prototype.listenerCount = function(e) {
				var t = r ? r + e : e,
					n = this._events[t];
				return n ? n.fn ? 1 : n.length : 0
			}, u.prototype.emit = function(e, t, n, i, o, s) {
				var a = r ? r + e : e;
				if (!this._events[a]) return !1;
				var c, u, l = this._events[a],
					p = arguments.length;
				if (l.fn) {
					switch (l.once && this.removeListener(e, l.fn, void 0, !0), p) {
						case 1:
							return l.fn.call(l.context), !0;
						case 2:
							return l.fn.call(l.context, t), !0;
						case 3:
							return l.fn.call(l.context, t, n), !0;
						case 4:
							return l.fn.call(l.context, t, n, i), !0;
						case 5:
							return l.fn.call(l.context, t, n, i, o), !0;
						case 6:
							return l.fn.call(l.context, t, n, i, o, s), !0
					}
					for (u = 1, c = new Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
					l.fn.apply(l.context, c)
				} else {
					var h, f = l.length;
					for (u = 0; u < f; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), p) {
						case 1:
							l[u].fn.call(l[u].context);
							break;
						case 2:
							l[u].fn.call(l[u].context, t);
							break;
						case 3:
							l[u].fn.call(l[u].context, t, n);
							break;
						case 4:
							l[u].fn.call(l[u].context, t, n, i);
							break;
						default:
							if (!c)
								for (h = 1, c = new Array(p - 1); h < p; h++) c[h - 1] = arguments[h];
							l[u].fn.apply(l[u].context, c)
					}
				}
				return !0
			}, u.prototype.on = function(e, t, n) {
				return a(this, e, t, n, !1)
			}, u.prototype.once = function(e, t, n) {
				return a(this, e, t, n, !0)
			}, u.prototype.removeListener = function(e, t, n, i) {
				var o = r ? r + e : e;
				if (!this._events[o]) return this;
				if (!t) return c(this, o), this;
				var s = this._events[o];
				if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || c(this, o);
				else {
					for (var a = 0, u = [], l = s.length; a < l; a++)(s[a].fn !== t || i && !s[a].once || n && s[a].context !== n) && u.push(s[a]);
					u.length ? this._events[o] = 1 === u.length ? u[0] : u : c(this, o)
				}
				return this
			}, u.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = r ? r + e : e, this._events[t] && c(this, t)) : (this._events = new o, this._eventsCount = 0), this
			}, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~ChatPost~RealtimeGQLSubscriptionAsync.8357ea142b1ccda1881f.js.map