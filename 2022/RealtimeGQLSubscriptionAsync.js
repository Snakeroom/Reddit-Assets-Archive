// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.c89c62e561b4816f488a.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
		"./node_modules/@apollo/client/react/context/ApolloContext.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				r = new(n("./node_modules/@apollo/client/utilities/common/canUse.js").a ? WeakMap : Map);

			function s() {
				var e = r.get(o.a.createContext);
				return e || ((e = o.a.createContext({})).displayName = "ApolloContext", r.set(o.a.createContext, e)), e
			}
		},
		"./node_modules/@apollo/client/react/data/OperationData.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var i = n("./node_modules/@wry/equality/lib/equality.esm.js"),
				o = n("./node_modules/ts-invariant/lib/invariant.esm.js"),
				r = n("./node_modules/@apollo/client/react/parser/index.js"),
				s = function() {
					function e(e, t) {
						this.isMounted = !1, this.previousOptions = {}, this.context = {}, this.options = {}, this.options = e || {}, this.context = t || {}
					}
					return e.prototype.getOptions = function() {
						return this.options
					}, e.prototype.setOptions = function(e, t) {
						void 0 === t && (t = !1), t && !Object(i.a)(this.options, e) && (this.previousOptions = this.options), this.options = e
					}, e.prototype.unmount = function() {
						this.isMounted = !1
					}, e.prototype.refreshClient = function() {
						var e = this.options && this.options.client || this.context && this.context.client;
						Object(o.b)(!!e, 29);
						var t = !1;
						return e !== this.client && (t = !0, this.client = e, this.cleanup()), {
							client: this.client,
							isNew: t
						}
					}, e.prototype.verifyDocumentType = function(e, t) {
						var n = Object(r.c)(e);
						Object(r.b)(t), Object(r.b)(n.type);
						Object(o.b)(n.type === t, 30)
					}, e
				}()
		},
		"./node_modules/@apollo/client/react/parser/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			var i, o = n("./node_modules/ts-invariant/lib/invariant.esm.js");
			! function(e) {
				e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
			}(i || (i = {}));
			var r = new Map;

			function s(e) {
				var t;
				switch (e) {
					case i.Query:
						t = "Query";
						break;
					case i.Mutation:
						t = "Mutation";
						break;
					case i.Subscription:
						t = "Subscription"
				}
				return t
			}

			function a(e) {
				var t, n, s = r.get(e);
				if (s) return s;
				Object(o.b)(!!e && !!e.kind, 34);
				var a = e.definitions.filter((function(e) {
						return "FragmentDefinition" === e.kind
					})),
					u = e.definitions.filter((function(e) {
						return "OperationDefinition" === e.kind && "query" === e.operation
					})),
					c = e.definitions.filter((function(e) {
						return "OperationDefinition" === e.kind && "mutation" === e.operation
					})),
					l = e.definitions.filter((function(e) {
						return "OperationDefinition" === e.kind && "subscription" === e.operation
					}));
				Object(o.b)(!a.length || u.length || c.length || l.length, 35), Object(o.b)(u.length + c.length + l.length <= 1, 36), n = u.length ? i.Query : i.Mutation, u.length || c.length || (n = i.Subscription);
				var p = u.length ? u : c.length ? c : l;
				Object(o.b)(1 === p.length, 37);
				var d = p[0];
				t = d.variableDefinitions || [];
				var f = {
					name: d.name && "Name" === d.name.kind ? d.name.value : "data",
					type: n,
					variables: t
				};
				return r.set(e, f), f
			}
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
		"./node_modules/graphql/language/blockString.js": function(e, t, n) {
			"use strict";

			function i(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function o(e) {
				for (var t, n = !0, i = !0, o = 0, r = null, s = 0; s < e.length; ++s) switch (e.charCodeAt(s)) {
					case 13:
						10 === e.charCodeAt(s + 1) && ++s;
					case 10:
						n = !1, i = !0, o = 0;
						break;
					case 9:
					case 32:
						++o;
						break;
					default:
						i && !n && (null === r || o < r) && (r = o), i = !1
				}
				return null !== (t = r) && void 0 !== t ? t : 0
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.dedentBlockStringValue = function(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = o(e);
				if (0 !== n)
					for (var r = 1; r < t.length; r++) t[r] = t[r].slice(n);
				var s = 0;
				for (; s < t.length && i(t[s]);) ++s;
				var a = t.length;
				for (; a > s && i(t[a - 1]);) --a;
				return t.slice(s, a).join("\n")
			}, t.getBlockStringIndentation = o, t.printBlockString = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = -1 === e.indexOf("\n"),
					o = " " === e[0] || "\t" === e[0],
					r = '"' === e[e.length - 1],
					s = "\\" === e[e.length - 1],
					a = !i || r || s || n,
					u = "";
				!a || i && o || (u += "\n" + t);
				u += t ? e.replace(/\n/g, "\n" + t) : e, a && (u += "\n");
				return '"""' + u.replace(/"""/g, '\\"""') + '"""'
			}
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
		"./node_modules/graphql/language/printer.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.print = function(e) {
				return (0, i.visit)(e, {
					leave: r
				})
			};
			var i = n("./node_modules/graphql/language/visitor.js"),
				o = n("./node_modules/graphql/language/blockString.js");
			var r = {
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
						i = c("(", a(e.variableDefinitions, ", "), ")"),
						o = a(e.directives, " "),
						r = e.selectionSet;
					return n || o || i || "query" !== t ? a([t, a([n, i]), o, r], " ") : r
				},
				VariableDefinition: function(e) {
					var t = e.variable,
						n = e.type,
						i = e.defaultValue,
						o = e.directives;
					return t + ": " + n + c(" = ", i) + c(" ", a(o, " "))
				},
				SelectionSet: function(e) {
					return u(e.selections)
				},
				Field: function(e) {
					var t = e.alias,
						n = e.name,
						i = e.arguments,
						o = e.directives,
						r = e.selectionSet,
						s = c("", t, ": ") + n,
						u = s + c("(", a(i, ", "), ")");
					return u.length > 80 && (u = s + c("(\n", l(a(i, "\n")), "\n)")), a([u, a(o, " "), r], " ")
				},
				Argument: function(e) {
					return e.name + ": " + e.value
				},
				FragmentSpread: function(e) {
					return "..." + e.name + c(" ", a(e.directives, " "))
				},
				InlineFragment: function(e) {
					var t = e.typeCondition,
						n = e.directives,
						i = e.selectionSet;
					return a(["...", c("on ", t), a(n, " "), i], " ")
				},
				FragmentDefinition: function(e) {
					var t = e.name,
						n = e.typeCondition,
						i = e.variableDefinitions,
						o = e.directives,
						r = e.selectionSet;
					return "fragment ".concat(t).concat(c("(", a(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(c("", a(o, " "), " ")) + r
				},
				IntValue: function(e) {
					return e.value
				},
				FloatValue: function(e) {
					return e.value
				},
				StringValue: function(e, t) {
					var n = e.value;
					return e.block ? (0, o.printBlockString)(n, "description" === t ? "" : "  ") : JSON.stringify(n)
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
					return "@" + e.name + c("(", a(e.arguments, ", "), ")")
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
					return a(["schema", a(t, " "), u(n)], " ")
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
						o = e.fields;
					return a(["type", t, c("implements ", a(n, " & ")), a(i, " "), u(o)], " ")
				})),
				FieldDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.type,
						o = e.directives;
					return t + (d(n) ? c("(\n", l(a(n, "\n")), "\n)") : c("(", a(n, ", "), ")")) + ": " + i + c(" ", a(o, " "))
				})),
				InputValueDefinition: s((function(e) {
					var t = e.name,
						n = e.type,
						i = e.defaultValue,
						o = e.directives;
					return a([t + ": " + n, c("= ", i), a(o, " ")], " ")
				})),
				InterfaceTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						o = e.fields;
					return a(["interface", t, c("implements ", a(n, " & ")), a(i, " "), u(o)], " ")
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
					return a(["enum", t, a(n, " "), u(i)], " ")
				})),
				EnumValueDefinition: s((function(e) {
					return a([e.name, a(e.directives, " ")], " ")
				})),
				InputObjectTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return a(["input", t, a(n, " "), u(i)], " ")
				})),
				DirectiveDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.repeatable,
						o = e.locations;
					return "directive @" + t + (d(n) ? c("(\n", l(a(n, "\n")), "\n)") : c("(", a(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + a(o, " | ")
				})),
				SchemaExtension: function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return a(["extend schema", a(t, " "), u(n)], " ")
				},
				ScalarTypeExtension: function(e) {
					return a(["extend scalar", e.name, a(e.directives, " ")], " ")
				},
				ObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						o = e.fields;
					return a(["extend type", t, c("implements ", a(n, " & ")), a(i, " "), u(o)], " ")
				},
				InterfaceTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						o = e.fields;
					return a(["extend interface", t, c("implements ", a(n, " & ")), a(i, " "), u(o)], " ")
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
					return a(["extend enum", t, a(n, " "), u(i)], " ")
				},
				InputObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return a(["extend input", t, a(n, " "), u(i)], " ")
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

			function u(e) {
				return c("{\n", l(a(e, "\n")), "\n}")
			}

			function c(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return null != t && "" !== t ? e + t + n : ""
			}

			function l(e) {
				return c("  ", e.replace(/\n/g, "\n  "))
			}

			function p(e) {
				return -1 !== e.indexOf("\n")
			}

			function d(e) {
				return null != e && e.some(p)
			}
		},
		"./node_modules/graphql/utilities/getOperationAST.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getOperationAST = function(e, t) {
				for (var n = null, o = 0, r = e.definitions; o < r.length; o++) {
					var s, a = r[o];
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
								for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
							return e
						}).apply(this, arguments)
					},
					o = this && this.__awaiter || function(e, t, n, i) {
						return new(n || (n = Promise))((function(o, r) {
							function s(e) {
								try {
									u(i.next(e))
								} catch (t) {
									r(t)
								}
							}

							function a(e) {
								try {
									u(i.throw(e))
								} catch (t) {
									r(t)
								}
							}

							function u(e) {
								var t;
								e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
									e(t)
								}))).then(s, a)
							}
							u((i = i.apply(e, t || [])).next())
						}))
					},
					r = this && this.__generator || function(e, t) {
						var n, i, o, r, s = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return r = {
							next: a(0),
							throw: a(1),
							return: a(2)
						}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
							return this
						}), r;

						function a(r) {
							return function(a) {
								return function(r) {
									if (n) throw new TypeError("Generator is already executing.");
									for (; s;) try {
										if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
										switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
											case 0:
											case 1:
												o = r;
												break;
											case 4:
												return s.label++, {
													value: r[1],
													done: !1
												};
											case 5:
												s.label++, i = r[1], r = [0];
												continue;
											case 7:
												r = s.ops.pop(), s.trys.pop();
												continue;
											default:
												if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
													s = 0;
													continue
												}
												if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
													s.label = r[1];
													break
												}
												if (6 === r[0] && s.label < o[1]) {
													s.label = o[1], o = r;
													break
												}
												if (o && s.label < o[2]) {
													s.label = o[2], s.ops.push(r);
													break
												}
												o[2] && s.ops.pop(), s.trys.pop();
												continue
										}
										r = t.call(e, s)
									} catch (a) {
										r = [6, a], i = 0
									} finally {
										n = o = 0
									}
									if (5 & r[0]) throw r[1];
									return {
										value: r[0] ? r[1] : void 0,
										done: !0
									}
								}([r, a])
							}
						}
					},
					s = this && this.__spreadArrays || function() {
						for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
						var i = Array(e),
							o = 0;
						for (t = 0; t < n; t++)
							for (var r = arguments[t], s = 0, a = r.length; s < a; s++, o++) i[o] = r[s];
						return i
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SubscriptionClient = void 0;
				var a = void 0 !== e ? e : "undefined" != typeof window ? window : {},
					u = a.WebSocket || a.MozWebSocket,
					c = n("./node_modules/backo2/index.js"),
					l = n("./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js"),
					p = n("./node_modules/subscriptions-transport-ws/dist/utils/is-string.js"),
					d = n("./node_modules/subscriptions-transport-ws/dist/utils/is-object.js"),
					f = n("./node_modules/graphql/language/printer.js"),
					h = n("./node_modules/graphql/utilities/getOperationAST.js"),
					b = n("./node_modules/symbol-observable/es/index.js"),
					v = n("./node_modules/subscriptions-transport-ws/dist/protocol.js"),
					m = n("./node_modules/subscriptions-transport-ws/dist/defaults.js"),
					y = n("./node_modules/subscriptions-transport-ws/dist/message-types.js"),
					g = function() {
						function e(e, t, n, i) {
							var o = t || {},
								r = o.connectionCallback,
								s = void 0 === r ? void 0 : r,
								a = o.connectionParams,
								p = void 0 === a ? {} : a,
								d = o.minTimeout,
								f = void 0 === d ? m.MIN_WS_TIMEOUT : d,
								h = o.timeout,
								b = void 0 === h ? m.WS_TIMEOUT : h,
								y = o.reconnect,
								g = void 0 !== y && y,
								O = o.reconnectionAttempts,
								_ = void 0 === O ? 1 / 0 : O,
								I = o.lazy,
								T = void 0 !== I && I,
								E = o.inactivityTimeout,
								S = void 0 === E ? 0 : E,
								N = o.wsOptionArguments,
								C = void 0 === N ? [] : N;
							if (this.wsImpl = n || u, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = i || v.GRAPHQL_WS, this.connectionCallback = s, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = f, this.wsTimeout = b, this.unsentMessagesQueue = [], this.reconnect = g, this.reconnecting = !1, this.reconnectionAttempts = _, this.lazy = !!T, this.inactivityTimeout = S, this.closedByUser = !1, this.backoff = new c({
								jitter: .5
							}), this.eventEmitter = new l.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(p), this.wsOptionArguments = C, this.lazy || this.connect()
						}
						return Object.defineProperty(e.prototype, "status", {
							get: function() {
								return null === this.client ? this.wsImpl.CLOSED : this.client.readyState
							},
							enumerable: !1,
							configurable: !0
						}), e.prototype.close = function(e, t) {
							void 0 === e && (e = !0), void 0 === t && (t = !0), this.clearInactivityTimeout(), null !== this.client && (this.closedByUser = t, e && (this.clearCheckConnectionInterval(), this.clearMaxConnectTimeout(), this.clearTryReconnectTimeout(), this.unsubscribeAll(), this.sendMessage(void 0, y.default.GQL_CONNECTION_TERMINATE, null)), this.client.close(), this.client.onopen = null, this.client.onclose = null, this.client.onerror = null, this.client.onmessage = null, this.client = null, this.eventEmitter.emit("disconnected"), e || this.tryReconnect())
						}, e.prototype.request = function(e) {
							var t, n, i = this.getObserver.bind(this),
								o = this.executeOperation.bind(this),
								r = this.unsubscribe.bind(this);
							return this.clearInactivityTimeout(), (t = {})[b.default] = function() {
								return this
							}, t.subscribe = function(t, s, a) {
								var u = i(t, s, a);
								return n = o(e, (function(e, t) {
									null === e && null === t ? u.complete && u.complete() : e ? u.error && u.error(e[0]) : u.next && u.next(t)
								})), {
									unsubscribe: function() {
										n && (r(n), n = null)
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
								var o, r, a;
								o = s(t.middlewares), r = t, (a = function(t) {
									if (t) i(t);
									else if (o.length > 0) {
										var s = o.shift();
										s && s.applyMiddleware.apply(r, [e, a])
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
								}, n.sendMessage(i, y.default.GQL_START, e))
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
							return new c({
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
								o = e.operationName;
							if (!n) throw new Error("Must provide a query.");
							if (!t) throw new Error("Must provide an handler.");
							if (!p.default(n) && !h.getOperationAST(n, o) || o && !p.default(o) || i && !d.default(i)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
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
									e.unsentMessagesQueue.push(e.buildMessage(t, y.default.GQL_START, e.operations[t].options))
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
								return o(t, void 0, void 0, (function() {
									var e, t;
									return r(this, (function(n) {
										switch (n.label) {
											case 0:
												if (this.status !== this.wsImpl.OPEN) return [3, 4];
												this.clearMaxConnectTimeout(), this.closedByUser = !1, this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting"), n.label = 1;
											case 1:
												return n.trys.push([1, 3, , 4]), [4, this.connectionParams()];
											case 2:
												return e = n.sent(), this.sendMessage(void 0, y.default.GQL_CONNECTION_INIT, e), this.flushUnsentMessagesQueue(), [3, 4];
											case 3:
												return t = n.sent(), this.sendMessage(void 0, y.default.GQL_CONNECTION_ERROR, t), this.flushUnsentMessagesQueue(), [3, 4];
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
							if (-1 === [y.default.GQL_DATA, y.default.GQL_COMPLETE, y.default.GQL_ERROR].indexOf(t.type) || this.operations[n]) switch (t.type) {
								case y.default.GQL_CONNECTION_ERROR:
									this.connectionCallback && this.connectionCallback(t.payload);
									break;
								case y.default.GQL_CONNECTION_ACK:
									this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", t.payload), this.reconnecting = !1, this.backoff.reset(), this.maxConnectTimeGenerator.reset(), this.connectionCallback && this.connectionCallback();
									break;
								case y.default.GQL_COMPLETE:
									var o = this.operations[n].handler;
									delete this.operations[n], o.call(this, null, null);
									break;
								case y.default.GQL_ERROR:
									this.operations[n].handler(this.formatErrors(t.payload), null), delete this.operations[n];
									break;
								case y.default.GQL_DATA:
									var r = t.payload.errors ? i(i({}, t.payload), {
										errors: this.formatErrors(t.payload.errors)
									}) : t.payload;
									this.operations[n].handler(null, r);
									break;
								case y.default.GQL_CONNECTION_KEEP_ALIVE:
									var s = void 0 === this.wasKeepAliveReceived;
									this.wasKeepAliveReceived = !0, s && this.checkConnection(), this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnection()), this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
									break;
								default:
									throw new Error("Invalid message type!")
							} else this.unsubscribe(n)
						}, e.prototype.unsubscribe = function(e) {
							this.operations[e] && (delete this.operations[e], this.setInactivityTimeout(), this.sendMessage(e, y.default.GQL_STOP, void 0))
						}, e
					}();
				t.SubscriptionClient = g
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
				o = "~";

			function r() {}

			function s(e, t, n) {
				this.fn = e, this.context = t, this.once = n || !1
			}

			function a(e, t, n, i, r) {
				if ("function" != typeof n) throw new TypeError("The listener must be a function");
				var a = new s(n, i || e, r),
					u = o ? o + t : t;
				return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e
			}

			function u(e, t) {
				0 == --e._eventsCount ? e._events = new r : delete e._events[t]
			}

			function c() {
				this._events = new r, this._eventsCount = 0
			}
			Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (o = !1)), c.prototype.eventNames = function() {
				var e, t, n = [];
				if (0 === this._eventsCount) return n;
				for (t in e = this._events) i.call(e, t) && n.push(o ? t.slice(1) : t);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
			}, c.prototype.listeners = function(e) {
				var t = o ? o + e : e,
					n = this._events[t];
				if (!n) return [];
				if (n.fn) return [n.fn];
				for (var i = 0, r = n.length, s = new Array(r); i < r; i++) s[i] = n[i].fn;
				return s
			}, c.prototype.listenerCount = function(e) {
				var t = o ? o + e : e,
					n = this._events[t];
				return n ? n.fn ? 1 : n.length : 0
			}, c.prototype.emit = function(e, t, n, i, r, s) {
				var a = o ? o + e : e;
				if (!this._events[a]) return !1;
				var u, c, l = this._events[a],
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
							return l.fn.call(l.context, t, n, i, r), !0;
						case 6:
							return l.fn.call(l.context, t, n, i, r, s), !0
					}
					for (c = 1, u = new Array(p - 1); c < p; c++) u[c - 1] = arguments[c];
					l.fn.apply(l.context, u)
				} else {
					var d, f = l.length;
					for (c = 0; c < f; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), p) {
						case 1:
							l[c].fn.call(l[c].context);
							break;
						case 2:
							l[c].fn.call(l[c].context, t);
							break;
						case 3:
							l[c].fn.call(l[c].context, t, n);
							break;
						case 4:
							l[c].fn.call(l[c].context, t, n, i);
							break;
						default:
							if (!u)
								for (d = 1, u = new Array(p - 1); d < p; d++) u[d - 1] = arguments[d];
							l[c].fn.apply(l[c].context, u)
					}
				}
				return !0
			}, c.prototype.on = function(e, t, n) {
				return a(this, e, t, n, !1)
			}, c.prototype.once = function(e, t, n) {
				return a(this, e, t, n, !0)
			}, c.prototype.removeListener = function(e, t, n, i) {
				var r = o ? o + e : e;
				if (!this._events[r]) return this;
				if (!t) return u(this, r), this;
				var s = this._events[r];
				if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || u(this, r);
				else {
					for (var a = 0, c = [], l = s.length; a < l; a++)(s[a].fn !== t || i && !s[a].once || n && s[a].context !== n) && c.push(s[a]);
					c.length ? this._events[r] = 1 === c.length ? c[0] : c : u(this, r)
				}
				return this
			}, c.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = o ? o + e : e, this._events[t] && u(this, t)) : (this._events = new r, this._eventsCount = 0), this
			}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = o, c.EventEmitter = c, e.exports = c
		},
		"./src/realtime/GQLSubscription/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "useClientSingleton", (function() {
				return b
			}));
			var i = n("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/@wry/equality/lib/equality.esm.js"),
				a = function(e) {
					function t(t) {
						var n = t.options,
							i = t.context,
							o = t.setResult,
							r = e.call(this, n, i) || this;
						return r.currentObservable = {}, r.setResult = o, r.initialize(n), r
					}
					return Object(i.c)(t, e), t.prototype.execute = function(e) {
						if (!0 === this.getOptions().skip) return this.cleanup(), {
							loading: !1,
							error: void 0,
							data: void 0,
							variables: this.getOptions().variables
						};
						var t = e;
						this.refreshClient().isNew && (t = this.getLoadingResult());
						var n = this.getOptions().shouldResubscribe;
						return "function" == typeof n && (n = !!n(this.getOptions())), !1 !== n && this.previousOptions && Object.keys(this.previousOptions).length > 0 && (this.previousOptions.subscription !== this.getOptions().subscription || !Object(s.a)(this.previousOptions.variables, this.getOptions().variables) || this.previousOptions.skip !== this.getOptions().skip) && (this.cleanup(), t = this.getLoadingResult()), this.initialize(this.getOptions()), this.startSubscription(), this.previousOptions = this.getOptions(), Object(i.a)(Object(i.a)({}, t), {
							variables: this.getOptions().variables
						})
					}, t.prototype.afterExecute = function() {
						this.isMounted = !0
					}, t.prototype.cleanup = function() {
						this.endSubscription(), delete this.currentObservable.query
					}, t.prototype.initialize = function(e) {
						this.currentObservable.query || !0 === this.getOptions().skip || (this.currentObservable.query = this.refreshClient().client.subscribe({
							query: e.subscription,
							variables: e.variables,
							fetchPolicy: e.fetchPolicy,
							context: e.context
						}))
					}, t.prototype.startSubscription = function() {
						this.currentObservable.subscription || (this.currentObservable.subscription = this.currentObservable.query.subscribe({
							next: this.updateCurrentData.bind(this),
							error: this.updateError.bind(this),
							complete: this.completeSubscription.bind(this)
						}))
					}, t.prototype.getLoadingResult = function() {
						return {
							loading: !0,
							error: void 0,
							data: void 0
						}
					}, t.prototype.updateResult = function(e) {
						this.isMounted && this.setResult(e)
					}, t.prototype.updateCurrentData = function(e) {
						var t = this.getOptions().onSubscriptionData;
						this.updateResult({
							data: e.data,
							loading: !1,
							error: void 0
						}), t && t({
							client: this.refreshClient().client,
							subscriptionData: e
						})
					}, t.prototype.updateError = function(e) {
						this.updateResult({
							error: e,
							loading: !1
						})
					}, t.prototype.completeSubscription = function() {
						var e = this;
						Promise.resolve().then((function() {
							var t = e.getOptions().onSubscriptionComplete;
							t && t(), e.endSubscription()
						}))
					}, t.prototype.endSubscription = function() {
						this.currentObservable.subscription && (this.currentObservable.subscription.unsubscribe(), delete this.currentObservable.subscription)
					}, t
				}(n("./node_modules/@apollo/client/react/data/OperationData.js").a),
				u = n("./node_modules/@apollo/client/react/context/ApolloContext.js");
			var c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/realtime/connection.ts"),
				p = n("./node_modules/graphql-tag/lib/index.js");
			var d = {
				postVoteCount: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on VoteCountUpdateMessageData {
              voteCountChange
            }
          }
        }
      }
    }
  `,
				postCommentCount: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              commentCountChange
            }
          }
        }
      }
    }
  `,
				topLevelCommentCountChange: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on CommentCountUpdateMessageData {
              topLevelCommentCountChange
            }
          }
        }
      }
    }
  `,
				userIsTypingOnPost: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
				postTypingIndicator: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostTypingIndicatorMessageData {
              numUsers
            }
          }
        }
      }
    }
  `,
				userIsOnline: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
				isUserOnline: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on UserOnlineStatusMessageData {
              isOnline
            }
          }
        }
      }
    }
  `,
				userIsReadingPost: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
				usersReadingIndicator: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on PostReadingCountMessageData {
              numUsers
            }
          }
        }
      }
    }
  `,
				liveChatCommentReactions: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on LiveChatReactionMessageData {
              actionTaken
              userID
              commentID
              reaction {
                id
                iconURL
              }
            }
          }
        }
      }
    }
  `,
				onModUpdate: p.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
        ... on BasicMessage {
          data {
            ... on ModActionMessageData {
              id
              createdAt
              subredditID
              moderatorID
              targetID
              targetType
              action
            }
          }
        }
      }
    }
  `
			};

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			let h;
			const b = e => {
					const [t, n] = Object(o.useState)(h), i = Object(c.e)(e => e.user.session);
					Object(o.useEffect)(() => {
						h || n(h = {
							getInstance: () => Object(l.a)(null == i ? void 0 : i.accessToken)
						}), h && !t && n(h)
					}, [i, n, t]);
					const r = Object(o.useRef)((e => {
						if (e) {
							return !!document.getElementById(e)
						}
						return !1
					})(e));
					return t && t.getInstance() && d && !r.current ? t : null
				},
				v = r.a.memo(e => {
					let {
						apolloClient: t,
						onData: n,
						onError: r,
						onLoading: s,
						queryKey: c,
						subscriptionQueries: l,
						variables: p
					} = e;
					const d = l[c],
						{
							data: f,
							loading: h,
							error: b
						} = function(e, t) {
							var n = Object(o.useContext)(Object(u.a)()),
								r = t ? Object(i.a)(Object(i.a)({}, t), {
									subscription: e
								}) : {
									subscription: e
								},
								s = Object(o.useState)({
									loading: !r.skip,
									error: void 0,
									data: void 0
								}),
								c = s[0],
								l = s[1],
								p = Object(o.useRef)(),
								d = (p.current || (p.current = new a({
									options: r,
									context: n,
									setResult: l
								})), p.current);
							return d.setOptions(r, !0), d.context = n, Object(o.useEffect)((function() {
								return d.afterExecute()
							})), Object(o.useEffect)((function() {
								return d.cleanup.bind(d)
							}), []), d.execute(c)
						}(d, {
							variables: p,
							client: t
						});
					return b ? r && r() : h ? s && s() : !b && !h && f && f.subscribe && f.subscribe.data && n && n(f), null
				});
			t.default = e => {
				const t = b(e.uniqueKey);
				return t && r.a.createElement(r.a.Fragment, null, r.a.createElement(v, f({}, e, {
					apolloClient: t.getInstance(),
					subscriptionQueries: d
				})), r.a.createElement("span", {
					id: e.uniqueKey
				}))
			}
		},
		"./src/realtime/connection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var i = n("./node_modules/@apollo/client/core/ApolloClient.js"),
				o = n("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				r = n("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				s = n("./node_modules/subscriptions-transport-ws/dist/client.js"),
				a = function(e) {
					function t(t) {
						var n = e.call(this) || this;
						return t instanceof s.SubscriptionClient ? n.subscriptionClient = t : n.subscriptionClient = new s.SubscriptionClient(t.uri, t.options, t.webSocketImpl), n
					}
					return Object(r.c)(t, e), t.prototype.request = function(e) {
						return this.subscriptionClient.request(e)
					}, t
				}(n("./node_modules/@apollo/client/link/core/ApolloLink.js").a),
				u = n("./src/config.ts");
			let c;
			const l = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				p = {
					name: "web2x",
					version: "0.0.1"
				};

			function d(e) {
				if (!c) {
					const t = new a(new s.SubscriptionClient(`wss://${u.a.gqlRealtimeAddress}`, {
						...l,
						connectionParams: {
							Authorization: e ? `Bearer ${e}` : ""
						}
					}));
					c = new i.a({
						...p,
						cache: new o.a,
						link: t
					})
				}
				return c
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.c89c62e561b4816f488a.js.map