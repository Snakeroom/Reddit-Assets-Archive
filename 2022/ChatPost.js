// https://www.redditstatic.com/desktop2x/ChatPost.49094bc919e3b8773e2c.js
// Retrieved at 9/15/2022, 10:50:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
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

			function o(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function s(e) {
				for (var t, n = !0, o = !0, s = 0, r = null, a = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
					case 13:
						10 === e.charCodeAt(a + 1) && ++a;
					case 10:
						n = !1, o = !0, s = 0;
						break;
					case 9:
					case 32:
						++s;
						break;
					default:
						o && !n && (null === r || s < r) && (r = s), o = !1
				}
				return null !== (t = r) && void 0 !== t ? t : 0
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.dedentBlockStringValue = function(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = s(e);
				if (0 !== n)
					for (var r = 1; r < t.length; r++) t[r] = t[r].slice(n);
				var a = 0;
				for (; a < t.length && o(t[a]);) ++a;
				var i = t.length;
				for (; i > a && o(t[i - 1]);) --i;
				return t.slice(a, i).join("\n")
			}, t.getBlockStringIndentation = s, t.printBlockString = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					o = -1 === e.indexOf("\n"),
					s = " " === e[0] || "\t" === e[0],
					r = '"' === e[e.length - 1],
					a = "\\" === e[e.length - 1],
					i = !o || r || a || n,
					c = "";
				!i || o && s || (c += "\n" + t);
				c += t ? e.replace(/\n/g, "\n" + t) : e, i && (c += "\n");
				return '"""' + c.replace(/"""/g, '\\"""') + '"""'
			}
		},
		"./node_modules/graphql/language/kinds.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.Kind = void 0;
			var o = Object.freeze({
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
			t.Kind = o
		},
		"./node_modules/graphql/language/printer.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.print = function(e) {
				return (0, o.visit)(e, {
					leave: r
				})
			};
			var o = n("./node_modules/graphql/language/visitor.js"),
				s = n("./node_modules/graphql/language/blockString.js");
			var r = {
				Name: function(e) {
					return e.value
				},
				Variable: function(e) {
					return "$" + e.name
				},
				Document: function(e) {
					return i(e.definitions, "\n\n") + "\n"
				},
				OperationDefinition: function(e) {
					var t = e.operation,
						n = e.name,
						o = l("(", i(e.variableDefinitions, ", "), ")"),
						s = i(e.directives, " "),
						r = e.selectionSet;
					return n || s || o || "query" !== t ? i([t, i([n, o]), s, r], " ") : r
				},
				VariableDefinition: function(e) {
					var t = e.variable,
						n = e.type,
						o = e.defaultValue,
						s = e.directives;
					return t + ": " + n + l(" = ", o) + l(" ", i(s, " "))
				},
				SelectionSet: function(e) {
					return c(e.selections)
				},
				Field: function(e) {
					var t = e.alias,
						n = e.name,
						o = e.arguments,
						s = e.directives,
						r = e.selectionSet,
						a = l("", t, ": ") + n,
						c = a + l("(", i(o, ", "), ")");
					return c.length > 80 && (c = a + l("(\n", d(i(o, "\n")), "\n)")), i([c, i(s, " "), r], " ")
				},
				Argument: function(e) {
					return e.name + ": " + e.value
				},
				FragmentSpread: function(e) {
					return "..." + e.name + l(" ", i(e.directives, " "))
				},
				InlineFragment: function(e) {
					var t = e.typeCondition,
						n = e.directives,
						o = e.selectionSet;
					return i(["...", l("on ", t), i(n, " "), o], " ")
				},
				FragmentDefinition: function(e) {
					var t = e.name,
						n = e.typeCondition,
						o = e.variableDefinitions,
						s = e.directives,
						r = e.selectionSet;
					return "fragment ".concat(t).concat(l("(", i(o, ", "), ")"), " ") + "on ".concat(n, " ").concat(l("", i(s, " "), " ")) + r
				},
				IntValue: function(e) {
					return e.value
				},
				FloatValue: function(e) {
					return e.value
				},
				StringValue: function(e, t) {
					var n = e.value;
					return e.block ? (0, s.printBlockString)(n, "description" === t ? "" : "  ") : JSON.stringify(n)
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
					return "[" + i(e.values, ", ") + "]"
				},
				ObjectValue: function(e) {
					return "{" + i(e.fields, ", ") + "}"
				},
				ObjectField: function(e) {
					return e.name + ": " + e.value
				},
				Directive: function(e) {
					return "@" + e.name + l("(", i(e.arguments, ", "), ")")
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
				SchemaDefinition: a((function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return i(["schema", i(t, " "), c(n)], " ")
				})),
				OperationTypeDefinition: function(e) {
					return e.operation + ": " + e.type
				},
				ScalarTypeDefinition: a((function(e) {
					return i(["scalar", e.name, i(e.directives, " ")], " ")
				})),
				ObjectTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["type", t, l("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				})),
				FieldDefinition: a((function(e) {
					var t = e.name,
						n = e.arguments,
						o = e.type,
						s = e.directives;
					return t + (u(n) ? l("(\n", d(i(n, "\n")), "\n)") : l("(", i(n, ", "), ")")) + ": " + o + l(" ", i(s, " "))
				})),
				InputValueDefinition: a((function(e) {
					var t = e.name,
						n = e.type,
						o = e.defaultValue,
						s = e.directives;
					return i([t + ": " + n, l("= ", o), i(s, " ")], " ")
				})),
				InterfaceTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["interface", t, l("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				})),
				UnionTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.directives,
						o = e.types;
					return i(["union", t, i(n, " "), o && 0 !== o.length ? "= " + i(o, " | ") : ""], " ")
				})),
				EnumTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.directives,
						o = e.values;
					return i(["enum", t, i(n, " "), c(o)], " ")
				})),
				EnumValueDefinition: a((function(e) {
					return i([e.name, i(e.directives, " ")], " ")
				})),
				InputObjectTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.directives,
						o = e.fields;
					return i(["input", t, i(n, " "), c(o)], " ")
				})),
				DirectiveDefinition: a((function(e) {
					var t = e.name,
						n = e.arguments,
						o = e.repeatable,
						s = e.locations;
					return "directive @" + t + (u(n) ? l("(\n", d(i(n, "\n")), "\n)") : l("(", i(n, ", "), ")")) + (o ? " repeatable" : "") + " on " + i(s, " | ")
				})),
				SchemaExtension: function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return i(["extend schema", i(t, " "), c(n)], " ")
				},
				ScalarTypeExtension: function(e) {
					return i(["extend scalar", e.name, i(e.directives, " ")], " ")
				},
				ObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["extend type", t, l("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				},
				InterfaceTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["extend interface", t, l("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				},
				UnionTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						o = e.types;
					return i(["extend union", t, i(n, " "), o && 0 !== o.length ? "= " + i(o, " | ") : ""], " ")
				},
				EnumTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						o = e.values;
					return i(["extend enum", t, i(n, " "), c(o)], " ")
				},
				InputObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						o = e.fields;
					return i(["extend input", t, i(n, " "), c(o)], " ")
				}
			};

			function a(e) {
				return function(t) {
					return i([t.description, e(t)], "\n")
				}
			}

			function i(e) {
				var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return null !== (t = null == e ? void 0 : e.filter((function(e) {
					return e
				})).join(n)) && void 0 !== t ? t : ""
			}

			function c(e) {
				return l("{\n", d(i(e, "\n")), "\n}")
			}

			function l(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return null != t && "" !== t ? e + t + n : ""
			}

			function d(e) {
				return l("  ", e.replace(/\n/g, "\n  "))
			}

			function m(e) {
				return -1 !== e.indexOf("\n")
			}

			function u(e) {
				return null != e && e.some(m)
			}
		},
		"./node_modules/graphql/utilities/getOperationAST.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getOperationAST = function(e, t) {
				for (var n = null, s = 0, r = e.definitions; s < r.length; s++) {
					var a, i = r[s];
					if (i.kind === o.Kind.OPERATION_DEFINITION)
						if (null == t) {
							if (n) return null;
							n = i
						} else if ((null === (a = i.name) || void 0 === a ? void 0 : a.value) === t) return i
				}
				return n
			};
			var o = n("./node_modules/graphql/language/kinds.js")
		},
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseDelay.js"),
				s = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var n = i,
					l = c(e, i);
				t = s(t), e -= i;
				for (var d = o(l, t); ++n < e;) t(n);
				return d
			}
		},
		"./node_modules/subscriptions-transport-ws/dist/client.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var o = this && this.__assign || function() {
						return (o = Object.assign || function(e) {
							for (var t, n = 1, o = arguments.length; n < o; n++)
								for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
							return e
						}).apply(this, arguments)
					},
					s = this && this.__awaiter || function(e, t, n, o) {
						return new(n || (n = Promise))((function(s, r) {
							function a(e) {
								try {
									c(o.next(e))
								} catch (t) {
									r(t)
								}
							}

							function i(e) {
								try {
									c(o.throw(e))
								} catch (t) {
									r(t)
								}
							}

							function c(e) {
								var t;
								e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
									e(t)
								}))).then(a, i)
							}
							c((o = o.apply(e, t || [])).next())
						}))
					},
					r = this && this.__generator || function(e, t) {
						var n, o, s, r, a = {
							label: 0,
							sent: function() {
								if (1 & s[0]) throw s[1];
								return s[1]
							},
							trys: [],
							ops: []
						};
						return r = {
							next: i(0),
							throw: i(1),
							return: i(2)
						}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
							return this
						}), r;

						function i(r) {
							return function(i) {
								return function(r) {
									if (n) throw new TypeError("Generator is already executing.");
									for (; a;) try {
										if (n = 1, o && (s = 2 & r[0] ? o.return : r[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, r[1])).done) return s;
										switch (o = 0, s && (r = [2 & r[0], s.value]), r[0]) {
											case 0:
											case 1:
												s = r;
												break;
											case 4:
												return a.label++, {
													value: r[1],
													done: !1
												};
											case 5:
												a.label++, o = r[1], r = [0];
												continue;
											case 7:
												r = a.ops.pop(), a.trys.pop();
												continue;
											default:
												if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === r[0] || 2 === r[0])) {
													a = 0;
													continue
												}
												if (3 === r[0] && (!s || r[1] > s[0] && r[1] < s[3])) {
													a.label = r[1];
													break
												}
												if (6 === r[0] && a.label < s[1]) {
													a.label = s[1], s = r;
													break
												}
												if (s && a.label < s[2]) {
													a.label = s[2], a.ops.push(r);
													break
												}
												s[2] && a.ops.pop(), a.trys.pop();
												continue
										}
										r = t.call(e, a)
									} catch (i) {
										r = [6, i], o = 0
									} finally {
										n = s = 0
									}
									if (5 & r[0]) throw r[1];
									return {
										value: r[0] ? r[1] : void 0,
										done: !0
									}
								}([r, i])
							}
						}
					},
					a = this && this.__spreadArrays || function() {
						for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
						var o = Array(e),
							s = 0;
						for (t = 0; t < n; t++)
							for (var r = arguments[t], a = 0, i = r.length; a < i; a++, s++) o[s] = r[a];
						return o
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SubscriptionClient = void 0;
				var i = void 0 !== e ? e : "undefined" != typeof window ? window : {},
					c = i.WebSocket || i.MozWebSocket,
					l = n("./node_modules/backo2/index.js"),
					d = n("./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js"),
					m = n("./node_modules/subscriptions-transport-ws/dist/utils/is-string.js"),
					u = n("./node_modules/subscriptions-transport-ws/dist/utils/is-object.js"),
					p = n("./node_modules/graphql/language/printer.js"),
					h = n("./node_modules/graphql/utilities/getOperationAST.js"),
					b = n("./node_modules/symbol-observable/es/index.js"),
					f = n("./node_modules/subscriptions-transport-ws/dist/protocol.js"),
					v = n("./node_modules/subscriptions-transport-ws/dist/defaults.js"),
					C = n("./node_modules/subscriptions-transport-ws/dist/message-types.js"),
					g = function() {
						function e(e, t, n, o) {
							var s = t || {},
								r = s.connectionCallback,
								a = void 0 === r ? void 0 : r,
								i = s.connectionParams,
								m = void 0 === i ? {} : i,
								u = s.minTimeout,
								p = void 0 === u ? v.MIN_WS_TIMEOUT : u,
								h = s.timeout,
								b = void 0 === h ? v.WS_TIMEOUT : h,
								C = s.reconnect,
								g = void 0 !== C && C,
								_ = s.reconnectionAttempts,
								E = void 0 === _ ? 1 / 0 : _,
								I = s.lazy,
								x = void 0 !== I && I,
								y = s.inactivityTimeout,
								O = void 0 === y ? 0 : y,
								k = s.wsOptionArguments,
								T = void 0 === k ? [] : k;
							if (this.wsImpl = n || c, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = o || f.GRAPHQL_WS, this.connectionCallback = a, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = p, this.wsTimeout = b, this.unsentMessagesQueue = [], this.reconnect = g, this.reconnecting = !1, this.reconnectionAttempts = E, this.lazy = !!x, this.inactivityTimeout = O, this.closedByUser = !1, this.backoff = new l({
								jitter: .5
							}), this.eventEmitter = new d.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(m), this.wsOptionArguments = T, this.lazy || this.connect()
						}
						return Object.defineProperty(e.prototype, "status", {
							get: function() {
								return null === this.client ? this.wsImpl.CLOSED : this.client.readyState
							},
							enumerable: !1,
							configurable: !0
						}), e.prototype.close = function(e, t) {
							void 0 === e && (e = !0), void 0 === t && (t = !0), this.clearInactivityTimeout(), null !== this.client && (this.closedByUser = t, e && (this.clearCheckConnectionInterval(), this.clearMaxConnectTimeout(), this.clearTryReconnectTimeout(), this.unsubscribeAll(), this.sendMessage(void 0, C.default.GQL_CONNECTION_TERMINATE, null)), this.client.close(), this.client.onopen = null, this.client.onclose = null, this.client.onerror = null, this.client.onmessage = null, this.client = null, this.eventEmitter.emit("disconnected"), e || this.tryReconnect())
						}, e.prototype.request = function(e) {
							var t, n, o = this.getObserver.bind(this),
								s = this.executeOperation.bind(this),
								r = this.unsubscribe.bind(this);
							return this.clearInactivityTimeout(), (t = {})[b.default] = function() {
								return this
							}, t.subscribe = function(t, a, i) {
								var c = o(t, a, i);
								return n = s(e, (function(e, t) {
									null === e && null === t ? c.complete && c.complete() : e ? c.error && c.error(e[0]) : c.next && c.next(t)
								})), {
									unsubscribe: function() {
										n && (r(n), n = null)
									}
								}
							}, t
						}, e.prototype.on = function(e, t, n) {
							var o = this.eventEmitter.on(e, t, n);
							return function() {
								o.off(e, t, n)
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
							return new Promise((function(n, o) {
								var s, r, i;
								s = a(t.middlewares), r = t, (i = function(t) {
									if (t) o(t);
									else if (s.length > 0) {
										var a = s.shift();
										a && a.applyMiddleware.apply(r, [e, i])
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
									} catch (o) {
										return n(o)
									}
									t(e)
								}))
							}
						}, e.prototype.executeOperation = function(e, t) {
							var n = this;
							null === this.client && this.connect();
							var o = this.generateOperationId();
							return this.operations[o] = {
								options: e,
								handler: t
							}, this.applyMiddlewares(e).then((function(e) {
								n.checkOperationOptions(e, t), n.operations[o] && (n.operations[o] = {
									options: e,
									handler: t
								}, n.sendMessage(o, C.default.GQL_START, e))
							})).catch((function(e) {
								n.unsubscribe(o), t(n.formatErrors(e))
							})), o
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
							return new l({
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
								o = e.variables,
								s = e.operationName;
							if (!n) throw new Error("Must provide a query.");
							if (!t) throw new Error("Must provide an handler.");
							if (!m.default(n) && !h.getOperationAST(n, s) || s && !m.default(s) || o && !u.default(o)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
						}, e.prototype.buildMessage = function(e, t, n) {
							return {
								id: e,
								type: t,
								payload: n && n.query ? o(o({}, n), {
									query: "string" == typeof n.query ? n.query : p.print(n.query)
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
									e.unsentMessagesQueue.push(e.buildMessage(t, C.default.GQL_START, e.operations[t].options))
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
							this.client = new((e = this.wsImpl).bind.apply(e, a([void 0, this.url, this.wsProtocols], this.wsOptionArguments))), this.checkMaxConnectTimeout(), this.client.onopen = function() {
								return s(t, void 0, void 0, (function() {
									var e, t;
									return r(this, (function(n) {
										switch (n.label) {
											case 0:
												if (this.status !== this.wsImpl.OPEN) return [3, 4];
												this.clearMaxConnectTimeout(), this.closedByUser = !1, this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting"), n.label = 1;
											case 1:
												return n.trys.push([1, 3, , 4]), [4, this.connectionParams()];
											case 2:
												return e = n.sent(), this.sendMessage(void 0, C.default.GQL_CONNECTION_INIT, e), this.flushUnsentMessagesQueue(), [3, 4];
											case 3:
												return t = n.sent(), this.sendMessage(void 0, C.default.GQL_CONNECTION_ERROR, t), this.flushUnsentMessagesQueue(), [3, 4];
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
							} catch (i) {
								throw new Error("Message must be JSON-parseable. Got: " + e)
							}
							if (-1 === [C.default.GQL_DATA, C.default.GQL_COMPLETE, C.default.GQL_ERROR].indexOf(t.type) || this.operations[n]) switch (t.type) {
								case C.default.GQL_CONNECTION_ERROR:
									this.connectionCallback && this.connectionCallback(t.payload);
									break;
								case C.default.GQL_CONNECTION_ACK:
									this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", t.payload), this.reconnecting = !1, this.backoff.reset(), this.maxConnectTimeGenerator.reset(), this.connectionCallback && this.connectionCallback();
									break;
								case C.default.GQL_COMPLETE:
									var s = this.operations[n].handler;
									delete this.operations[n], s.call(this, null, null);
									break;
								case C.default.GQL_ERROR:
									this.operations[n].handler(this.formatErrors(t.payload), null), delete this.operations[n];
									break;
								case C.default.GQL_DATA:
									var r = t.payload.errors ? o(o({}, t.payload), {
										errors: this.formatErrors(t.payload.errors)
									}) : t.payload;
									this.operations[n].handler(null, r);
									break;
								case C.default.GQL_CONNECTION_KEEP_ALIVE:
									var a = void 0 === this.wasKeepAliveReceived;
									this.wasKeepAliveReceived = !0, a && this.checkConnection(), this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnection()), this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
									break;
								default:
									throw new Error("Invalid message type!")
							} else this.unsubscribe(n)
						}, e.prototype.unsubscribe = function(e) {
							this.operations[e] && (delete this.operations[e], this.setInactivityTimeout(), this.sendMessage(e, C.default.GQL_STOP, void 0))
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
			var o = function() {
				function e() {
					throw new Error("Static Class")
				}
				return e.GQL_CONNECTION_INIT = "connection_init", e.GQL_CONNECTION_ACK = "connection_ack", e.GQL_CONNECTION_ERROR = "connection_error", e.GQL_CONNECTION_KEEP_ALIVE = "ka", e.GQL_CONNECTION_TERMINATE = "connection_terminate", e.GQL_START = "start", e.GQL_DATA = "data", e.GQL_ERROR = "error", e.GQL_COMPLETE = "complete", e.GQL_STOP = "stop", e.SUBSCRIPTION_START = "subscription_start", e.SUBSCRIPTION_DATA = "subscription_data", e.SUBSCRIPTION_SUCCESS = "subscription_success", e.SUBSCRIPTION_FAIL = "subscription_fail", e.SUBSCRIPTION_END = "subscription_end", e.INIT = "init", e.INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.KEEP_ALIVE = "keepalive", e
			}();
			t.default = o
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
			var o = Object.prototype.hasOwnProperty,
				s = "~";

			function r() {}

			function a(e, t, n) {
				this.fn = e, this.context = t, this.once = n || !1
			}

			function i(e, t, n, o, r) {
				if ("function" != typeof n) throw new TypeError("The listener must be a function");
				var i = new a(n, o || e, r),
					c = s ? s + t : t;
				return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], i] : e._events[c].push(i) : (e._events[c] = i, e._eventsCount++), e
			}

			function c(e, t) {
				0 == --e._eventsCount ? e._events = new r : delete e._events[t]
			}

			function l() {
				this._events = new r, this._eventsCount = 0
			}
			Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (s = !1)), l.prototype.eventNames = function() {
				var e, t, n = [];
				if (0 === this._eventsCount) return n;
				for (t in e = this._events) o.call(e, t) && n.push(s ? t.slice(1) : t);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
			}, l.prototype.listeners = function(e) {
				var t = s ? s + e : e,
					n = this._events[t];
				if (!n) return [];
				if (n.fn) return [n.fn];
				for (var o = 0, r = n.length, a = new Array(r); o < r; o++) a[o] = n[o].fn;
				return a
			}, l.prototype.listenerCount = function(e) {
				var t = s ? s + e : e,
					n = this._events[t];
				return n ? n.fn ? 1 : n.length : 0
			}, l.prototype.emit = function(e, t, n, o, r, a) {
				var i = s ? s + e : e;
				if (!this._events[i]) return !1;
				var c, l, d = this._events[i],
					m = arguments.length;
				if (d.fn) {
					switch (d.once && this.removeListener(e, d.fn, void 0, !0), m) {
						case 1:
							return d.fn.call(d.context), !0;
						case 2:
							return d.fn.call(d.context, t), !0;
						case 3:
							return d.fn.call(d.context, t, n), !0;
						case 4:
							return d.fn.call(d.context, t, n, o), !0;
						case 5:
							return d.fn.call(d.context, t, n, o, r), !0;
						case 6:
							return d.fn.call(d.context, t, n, o, r, a), !0
					}
					for (l = 1, c = new Array(m - 1); l < m; l++) c[l - 1] = arguments[l];
					d.fn.apply(d.context, c)
				} else {
					var u, p = d.length;
					for (l = 0; l < p; l++) switch (d[l].once && this.removeListener(e, d[l].fn, void 0, !0), m) {
						case 1:
							d[l].fn.call(d[l].context);
							break;
						case 2:
							d[l].fn.call(d[l].context, t);
							break;
						case 3:
							d[l].fn.call(d[l].context, t, n);
							break;
						case 4:
							d[l].fn.call(d[l].context, t, n, o);
							break;
						default:
							if (!c)
								for (u = 1, c = new Array(m - 1); u < m; u++) c[u - 1] = arguments[u];
							d[l].fn.apply(d[l].context, c)
					}
				}
				return !0
			}, l.prototype.on = function(e, t, n) {
				return i(this, e, t, n, !1)
			}, l.prototype.once = function(e, t, n) {
				return i(this, e, t, n, !0)
			}, l.prototype.removeListener = function(e, t, n, o) {
				var r = s ? s + e : e;
				if (!this._events[r]) return this;
				if (!t) return c(this, r), this;
				var a = this._events[r];
				if (a.fn) a.fn !== t || o && !a.once || n && a.context !== n || c(this, r);
				else {
					for (var i = 0, l = [], d = a.length; i < d; i++)(a[i].fn !== t || o && !a[i].once || n && a[i].context !== n) && l.push(a[i]);
					l.length ? this._events[r] = 1 === l.length ? l[0] : l : c(this, r)
				}
				return this
			}, l.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = s ? s + e : e, this._events[t] && c(this, t)) : (this._events = new r, this._eventsCount = 0), this
			}, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = s, l.EventEmitter = l, e.exports = l
		},
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t) {
				for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) o[s - 2] = arguments[s];
				let r, a = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/realtime/connection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/@apollo/client/core/ApolloClient.js"),
				s = n("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				r = n("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				a = n("./node_modules/subscriptions-transport-ws/dist/client.js"),
				i = function(e) {
					function t(t) {
						var n = e.call(this) || this;
						return t instanceof a.SubscriptionClient ? n.subscriptionClient = t : n.subscriptionClient = new a.SubscriptionClient(t.uri, t.options, t.webSocketImpl), n
					}
					return Object(r.c)(t, e), t.prototype.request = function(e) {
						return this.subscriptionClient.request(e)
					}, t
				}(n("./node_modules/@apollo/client/link/core/ApolloLink.js").a),
				c = n("./src/config.ts");
			let l;
			const d = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				m = {
					name: "web2x",
					version: "0.0.1"
				};

			function u(e) {
				if (!l) {
					const t = new i(new a.SubscriptionClient(`wss://${c.a.gqlRealtimeAddress}`, {
						...d,
						connectionParams: {
							Authorization: e ? `Bearer ${e}` : ""
						}
					}));
					l = new o.a({
						...m,
						cache: new s.a,
						link: t
					})
				}
				return l
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return C
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = n("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				l = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(o.a)(c),
				h = Object(o.a)(l),
				b = Object(o.a)(d),
				f = Object(o.a)(m),
				v = Object(o.a)(u),
				C = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const s = t(),
						r = Object(i.a)(s);
					if (Object(i.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let c = !1,
						l = "";
					do {
						e(v());
						const t = {
								after: l,
								pageSize: 100
							},
							n = await a(o(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(f(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									c = e, l = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = "USER_BLOCK__PENDING",
				m = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				p = Object(s.a)(d),
				h = Object(s.a)(m),
				b = Object(s.a)(u),
				f = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					var d;
					if (n().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const m = await Object(i.a)(l(), e),
						u = `error-block-${e}`;
					if (m.ok) m.body.name && t(h(m.body)), m.body.id && t(Object(r.f)(m.body.id)), t(a.g(u)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: m.error ? m.error.type : "Unknown error",
							username: e
						};
						t(b(n)), "REBLOCK_RATE_LIMIT" === (null === (d = m.body) || void 0 === d ? void 0 : d.reason) ? t(a.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: f(e)
						})) : t(a.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, v = "USER_UNBLOCK__PENDING", C = "USER_UNBLOCK__SUCCESS", g = "USER_UNBLOCK__FAILED", _ = Object(s.a)(v), E = Object(s.a)(C), I = Object(s.a)(g), x = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					const m = n(),
						u = Object(l.k)(m),
						p = u ? u.id : void 0,
						h = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(i.c)(d(), p, e)).ok ? (t(E({
						name: e
					})), h && h.id && t(Object(r.h)(h.id)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: c.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(I({
						name: e
					}))))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H",
				LastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy",
				lastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const h = e => {
				const {
					className: t,
					collapsed: n,
					comment: s,
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: l,
					isEmbeddedLiveChat: d,
					isStrong: u,
					onClick: h,
					style: b
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: s.author,
					className: Object(c.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: l,
					forceOpenInNewTab: d,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: h,
					style: b
				}, s.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				C = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				_ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				I = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				k = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/lib/constants/index.ts"),
				w = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(N);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: a,
					isEmbeddedLiveChat: i,
					isStrong: l,
					onClick: d,
					renderedInOverlay: m
				} = e;
				const u = Object(O.f)(o),
					p = r.a.createElement(w.b, {
						ignore: u || !!o.distinguishType && o.distinguishType !== T.H.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(O.f)(o),
						isCommentAuthorBlocked: Object(O.g)(o),
						isLivestreaming: a,
						isEmbeddedLiveChat: i,
						isStrong: l,
						onClick: d
					}));
				return u || i ? p : r.a.createElement(j.b, {
					className: Object(c.a)(M.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(O.g)(o),
					postOrComment: o,
					tooltipType: m ? _.c.Lightbox : void 0
				}, p)
			};
			var S = n("./src/config.ts"),
				R = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				D = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(B);
			const U = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const i = Object(a.d)(),
					l = () => i(Object(R.h)({
						tooltipId: d
					})),
					d = P("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, t),
					src: `${S.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: d,
					onMouseEnter: l,
					onMouseLeave: l,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(A.c, {
					tooltipId: d,
					text: m
				}))
			};
			var H = n("./src/lib/addQueryParams/index.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/post.ts"),
				G = n("./src/reddit/components/HumanDate/index.tsx"),
				W = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: l
					} = e, d = Object(a.d)(), m = P("CommentTopMeta--Created--", n.id, c), u = () => d(Object(R.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(H.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == s || s(e), Q(d, n.id), l && (e.preventDefault(), d(Object(K.Z)(Object(W.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(G.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(A.c, {
						tooltipId: m
					}, r.a.createElement(G.b, {
						seconds: n.created
					})))
				},
				Q = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(V.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(V.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(E.a, {
				className: X.a.crowdControlText
			}, Y._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var $ = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return r.a.createElement(E.a, {
					className: ee.a.editedText
				}, te._("edited {time}", [te._param("time", r.a.createElement(G.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var oe = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				re = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				le = n("./src/reddit/icons/fonts/Report/index.tsx"),
				de = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ue = n.n(me);
			const pe = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: i,
					isAdmin: c
				} = e;
				const l = Object(a.d)(),
					d = e => () => l(Object(R.f)({
						tooltipId: e
					})),
					m = () => l(Object(R.i)()),
					u = e => P(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					b = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					v = d(h);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: ue.a.approveIcon,
					desc: Object(se.a)(t),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: p,
					text: Object(se.a)(t)
				})), Object(oe.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: ue.a.removeIcon,
					desc: Object(se.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(se.b)(t)
				})), Object(oe.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement("a", {
					className: ue.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => l(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(oe.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement("a", {
					className: ue.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: m
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && r.a.createElement(ie.a, {
					className: ue.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: ue.a.spamIcon,
					desc: Object(se.d)(t),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: f,
					text: Object(se.d)(t)
				})), Object(re.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: ue.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && c && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: ue.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: ue.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var he, be = n("./src/lib/colors/constants.ts"),
				fe = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ce = n.n(ve);
			const ge = {
					[he.Admin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: be.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[he.ModTeam]: {
						color: be.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[he.Op]: {
						color: be.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
						color: be.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				_e = e => {
					const t = Object(a.d)(),
						n = function(e) {
							if (e.isAdmin) return he.Admin;
							const t = e.isMod || e.distinguishType === T.H.MODERATOR;
							return t && e.author && Object(fe.a)(e.author) ? he.ModTeam : t ? he.Mod : e.isOp ? he.Op : e.distinguishType === T.H.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: i,
						tooltipTemplate: l
					} = ge[n], d = i(), m = P(o, e.comment.id, e.renderedInOverlay), u = l(e), p = () => t(Object(R.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(c.a)(Ce.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, d), (n === he.Mod || n === he.ModTeam) && r.a.createElement(Ee, null)), r.a.createElement(A.c, {
						tooltipId: m,
						text: u
					}))
				},
				Ee = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: Ce.a.modAchievement,
					src: `${S.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				xe = n.n(Ie);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = () => r.a.createElement(E.a, {
				className: xe.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Te = n.n(ke);
			const we = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: l,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: T,
					permalink: w,
					renderContractorBadge: j,
					renderedInOverlay: N,
					subredditDisplayText: M,
					isAdmin: S
				} = e, R = Object(y.a)(), A = i.subredditId, P = Object(a.e)(e => Object(k.m)(e, {
					subredditId: A
				}));
				if (i.isDeleted && !S) return r.a.createElement("div", {
					className: Object(c.a)(Te.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Te.a.authorLine
				}, r.a.createElement("span", {
					className: Te.a.metaText
				}, i.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(E.c, {
					className: Te.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Te.a.metaText,
					comment: i,
					compact: !0,
					permalink: w,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(Te.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Te.a.authorLine
				}, !Object(O.f)(i) && r.a.createElement(f.b, {
					className: Te.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Te.a.baselineItem
				}, r.a.createElement(L, {
					authorClassName: Te.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(O.f)(i) && u && r.a.createElement(g.a, {
					postOrComment: i,
					className: Te.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(Z, null), r.a.createElement(_e, {
					className: Te.a.role,
					comment: i,
					subredditDisplayText: M,
					renderContractorBadge: j,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? r.a.createElement(U, {
					className: Te.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(O.f)(i) && P && r.a.createElement(b.a, {
					className: Te.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(x.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(C.a, {
					className: Te.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(E.c, {
					className: Te.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Te.a.metaText,
					comment: i,
					compact: !0,
					onClick: T,
					permalink: w,
					renderedInOverlay: N
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Te.a.separator
				}), r.a.createElement(Oe, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Te.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: N,
					isAdmin: S
				}), r.a.createElement(d.a, {
					thing: i,
					tooltipType: N ? _.c.Lightbox : void 0
				})), l && !Object(I.o)(l) && r.a.createElement("span", {
					className: Te.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: Te.a.flair,
					flair: l,
					forceSmallEmojis: !0
				})))
			};
			var je = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Le = n("./src/reddit/selectors/comments.ts"),
				Se = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Re = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ae = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./src/reddit/selectors/userFlair.ts"),
				De = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Be = n.n(De);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = l.a.wrapped(v.b, "RightPositionedAuthorFlair", Be.a),
				He = l.a.span("DeletedText", Be.a),
				Ve = l.a.wrapped(E.a, "MetaSeparator", Be.a),
				Ke = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Ne.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Ae.L)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Pe.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Le.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Se.b,
					isBlockingInterstitialV2Enabled: Se.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Re.i)(e, n.subredditId)
					}
				}));
			t.a = Ke(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					commentPermalink: i,
					commentsPageKey: l,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: g,
					ignoreLock: I,
					isAdmin: x,
					isBlockingInterstitialEnabled: y,
					isBlockingInterstitialV2Enabled: k,
					isModWithUserNotesPermissions: T,
					isLivestreaming: w,
					isEmbeddedLiveChat: j,
					isPostComment: N,
					onCommentAuthorClick: M,
					onCommentTimestampClick: S,
					renderContractorBadge: R,
					renderedInOverlay: A,
					subredditDisplayText: P,
					userHasNft: D
				} = e, B = r.a.createElement(r.a.Fragment, null, r.a.createElement(je.b, {
					commentId: a.id
				}), r.a.createElement(je.a, {
					commentId: a.id,
					commentsPageKey: l
				}));
				if (N) return r.a.createElement(r.a.Fragment, null, r.a.createElement(we, {
					className: Object(c.a)(n, {
						[Be.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: u || null,
					ignoreLock: I,
					isAdmin: x,
					isModWithUserNotesPermissions: T,
					isLivestreaming: w,
					onCommentAuthorClick: M,
					onCommentTimestampClick: S,
					permalink: i,
					renderContractorBadge: !!R,
					renderedInOverlay: A,
					subredditDisplayText: P
				}), B);
				if (a.isDeleted) return r.a.createElement(Ge, Fe({}, e, {
					className: Object(c.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(We, Fe({}, e, {
					className: Object(c.a)(n, Be.a.container, {
						[Be.a.collapsed]: o
					})
				}));
				const F = !g && p === Me.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Be.a.container, {
						[Be.a.collapsed]: o,
						[Be.a.hasBadges]: h,
						[Be.a.liveStreaming]: w
					}),
					"data-testid": "comment-top-meta"
				}, u && F && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(a) && r.a.createElement(f.b, {
					className: Be.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(L, {
					authorClassName: D ? Be.a.NftAuthor : void 0,
					collapsed: o,
					comment: a,
					isLivestreaming: w,
					isEmbeddedLiveChat: j,
					isStrong: !!m,
					onClick: M,
					renderedInOverlay: A
				}), s && r.a.createElement(Z, null), s && r.a.createElement(E.c, {
					className: Be.a.metaText,
					key: "crowdControlSeparator"
				}), u && !F && r.a.createElement(Ue, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(C.a, {
					className: Be.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(E.c, {
						className: Be.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), B, r.a.createElement(_e, {
					className: Be.a.authorRole,
					comment: a,
					subredditDisplayText: P,
					renderContractorBadge: !!R,
					renderedInOverlay: A
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !N && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.b, {
					className: Be.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(E.c, {
					className: Be.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(q, {
					key: "Created",
					className: Be.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: A,
					isBlockingInterstitialEnabled: y || k
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Be.a.separator
				}), r.a.createElement(Oe, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Be.a.separator
				}), r.a.createElement(ne, {
					editedAt: a.editedAt
				}))), r.a.createElement(pe, {
					comment: a,
					ignoreLock: I,
					renderedInOverlay: A
				}), !b && r.a.createElement(d.a, {
					thing: a,
					tooltipType: A ? _.c.Lightbox : void 0
				}))
			});
			const Ge = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: l,
						renderedInOverlay: d
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(He, null, a.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(q, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c || l
					}), n && qe({
						childrenInfo: t
					}))
				},
				We = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: l
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: a
					})), r.a.createElement(E.b, {
						className: Be.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(E.c, {
						className: Be.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(q, {
						key: "Created",
						className: Be.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c || l
					}), qe({
						childrenInfo: o
					}))
				},
				qe = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ve, {
						className: Be.a.metaText
					}, t ? o.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : o.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U",
				userDeletion: "_1KVzcRpEm0U5vCgrZbgiyN"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Comments-PredictionComment").then(n.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "a", (function() {
				return U
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/times.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/pages/comments.ts"),
				u = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				f = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = n("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				E = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				I = n("./src/reddit/components/Comments/States/index.m.less"),
				x = n.n(I);
			const y = d.a.p("EmptyTitle", x.a),
				O = d.a.p("ErrorTitle", x.a),
				k = d.a.p("EmptyText", x.a),
				T = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(x.a.StateContainer, t)
					}, n ? i.a.createElement(_.a, {
						className: x.a.LiveChatIcon
					}) : i.a.createElement(g.a, {
						className: x.a.CommentsIcon
					}), i.a.createElement(y, null, n ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(k, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(g.a, {
					className: x.a.CommentsIcon
				}), i.a.createElement(y, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(k, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				j = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: x.a.StateContainer
					}, i.a.createElement(g.a, {
						className: x.a.CommentsIcon
					}), i.a.createElement(y, null, o.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(b.b)(t)
					}, o.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(c.b)(null, (e, t) => {
					let {
						postId: n,
						commentId: o,
						sort: s
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(n, o, {
							sort: s
						}, s))
					}
				})(e => {
					let {
						apiError: t,
						onClick: n
					} = e;
					return i.a.createElement("div", {
						className: x.a.StateContainer
					}, i.a.createElement(E.a, {
						className: x.a.SnooFacepalm
					}), i.a.createElement(O, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : o.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(p.l, {
						onClick: n
					}, o.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				M = e => {
					let {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(x.a.StateContainer, x.a.ErrorFullPage)
					}, i.a.createElement(N, {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					}))
				},
				L = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", x.a),
				S = d.a.div("CommentsPlaceholderContainer", x.a),
				R = d.a.div("CommentPlaceholder", x.a),
				A = d.a.div("Avatar", x.a),
				P = d.a.div("VoteColumn", x.a),
				D = d.a.div("TextColumn", x.a),
				B = () => i.a.createElement("div", {
					className: Object(l.a)(x.a.TopMetaPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				F = () => i.a.createElement("div", {
					className: Object(l.a)(x.a.CommentBodyPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				U = e => i.a.createElement(S, null, r()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(A, {
					className: Object(f.a)({
						isLoading: !0
					})
				}) : i.a.createElement(P, null, i.a.createElement(C.b, {
					className: x.a.Upvote
				}), i.a.createElement(v.a, {
					className: x.a.Downvote
				})), i.a.createElement(D, null, i.a.createElement(B, null), i.a.createElement(F, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, n) {
			e.exports = {
				awardComment: "Qkdtf2CTKJDknbazL-AMW",
				silverTierAwardComment: "_2K5jTegGACZTi8TWvs4SyB",
				goldTierAwardComment: "_37sBwMRYEzwkWdokXOOlQJ",
				platinumTierAwardComment: "_11aS54KCcFm_OLfRPhp_3D",
				imageContainer: "_1vPp7dOkl_3DKjZYjW06BW",
				backgroundAnimation: "_2i4HeuNgltvyx1u5avuVnK",
				backgroundStar: "_3nk7xeDcgOeGYAfF3Spsbh",
				spinCW: "_2Puyz3btdtqWX6E5eI2hBB",
				spinCw: "_2Puyz3btdtqWX6E5eI2hBB",
				backgroundStar2: "_2kPpfDsovGUW6dzF2F4n3P",
				backgroundSparkle: "_3z4E7G1TTNdvve0FxUTLUo",
				twinkle: "Vv46qL__rbNs6Bj4N8Dsl",
				sparkleBottomLeft: "u1JiASpbiuGwsfsTCsHCf",
				sparkleTopRight: "_3rJK5s9oFDAt1F0Hpr7BRE",
				sparkleBottomRight: "_1RcdEbzgGuOANa3oJzFJdl",
				awardCommentText: "_1uqs3HOwKgnPYqpbzW9WqV",
				coinIcon: "_2uSjw9de_n2QHtDV1EiJPd"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, n) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3RM4nGWSSpBOcS_7_2TRL1",
				Menu: "_1r0V_BtD8JOSLllkKmO-7D",
				menu: "_1r0V_BtD8JOSLllkKmO-7D",
				Livestreaming: "DpZUkCtotz3Q-xHAAKsJt",
				livestreaming: "DpZUkCtotz3Q-xHAAKsJt",
				MenuItem: "_3y7UZGXBJwiIbOypKfHs6R",
				menuItem: "_3y7UZGXBJwiIbOypKfHs6R",
				MenuItemPermalink: "BWDMEstphCE9S5k0LgDMs",
				menuItemPermalink: "BWDMEstphCE9S5k0LgDMs",
				ApproveIcon: "_2JyVuFZOLWUjqdbzBwPR6g",
				approveIcon: "_2JyVuFZOLWUjqdbzBwPR6g",
				BlockIcon: "S8b8Yo036GTbrkyvUQd8e",
				blockIcon: "S8b8Yo036GTbrkyvUQd8e",
				DownvoteIcon: "_29Fl5NT6hxjQEnk1kg1TUU",
				downvoteIcon: "_29Fl5NT6hxjQEnk1kg1TUU",
				EditIcon: "_1bFrIUIdQS59m5Pn01k2I3",
				editIcon: "_1bFrIUIdQS59m5Pn01k2I3",
				FlagIcon: "_3LxukrMhIXqML7pIh5l-fN",
				flagIcon: "_3LxukrMhIXqML7pIh5l-fN",
				ModeratorIcon: "xrWHOyX20Zy5xOlGGP_2",
				moderatorIcon: "xrWHOyX20Zy5xOlGGP_2",
				RemoveIcon: "_2sH27wIi4tppeKb5B6UnRW",
				removeIcon: "_2sH27wIi4tppeKb5B6UnRW",
				ReplyIcon: "_1XMtwTRpHk0MNBSROUHP2_",
				replyIcon: "_1XMtwTRpHk0MNBSROUHP2_",
				SpamIcon: "_2iHziOFo3f_b8q-S6rc5Hi",
				spamIcon: "_2iHziOFo3f_b8q-S6rc5Hi",
				TrashIcon: "_2R0GrSuMRMLMSJp_ywgPjV",
				trashIcon: "_2R0GrSuMRMLMSJp_ywgPjV",
				UnblockIcon: "_2rGz-X_zA5eOVVA5chLI2Z",
				unblockIcon: "_2rGz-X_zA5eOVVA5chLI2Z",
				UpvoteIcon: "_1dn9YTpIZ2T7OOpkttHd9t",
				upvoteIcon: "_1dn9YTpIZ2T7OOpkttHd9t",
				HorizontalVotes: "_2yG0P58-KJBPnUcq26Kxt2",
				horizontalVotes: "_2yG0P58-KJBPnUcq26Kxt2"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v2/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoomojiWrapper: "_1q-vh271mWtdGG9sjc7Cr-"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_2X0J8YdXfokev-v3ud5t_y",
				livestreaming: "_3TQYNFWpPss8xjmKrBFT0K",
				innerWrapper: "_3-tpsxD8ZAB0Q7gVbzdZF6",
				verticalBar: "JbHijELz1zmFvP0YJ1YuE",
				"menu-item": "_19Oknc--43y-15yu9_cXvM",
				menuItem: "_19Oknc--43y-15yu9_cXvM",
				suppressBackgroundOnHover: "_2AF2JyX_RCyCbahFEfhD60",
				icon: "_2c4Vwo7oqlN6Uy7jE8vOMG",
				"dropdown-menu": "_5-qWgdQX88_8RpqBUS2Hk",
				dropdownMenu: "_5-qWgdQX88_8RpqBUS2Hk",
				"dropdown-menu-item": "Yxh6i1JK2Fa0erIglDupg",
				dropdownMenuItem: "Yxh6i1JK2Fa0erIglDupg",
				"dropdown-icon": "p2X8ezHA9FBKN1J4cCbfg",
				dropdownIcon: "p2X8ezHA9FBKN1J4cCbfg"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				reactionAwardButton: "TXD4m5ZBUop_xyAm6omz3",
				darkMode: "_-0Tzfp-HQlTHeER4GQzTv",
				activeReactionButton: "eRGv3QC2w3Mtdcsf01V-T",
				countText: "_1CQlN5JJnMpgUtWIqhiHHO",
				snoomoji: "_1ndqm7wea-c0WM6sHvkPKM"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, n) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v1/index.m.less": function(e, t, n) {
			e.exports = {
				Menu: "_2D1wKiUYeveEDBPI0HHp6X",
				menu: "_2D1wKiUYeveEDBPI0HHp6X",
				CommentWrapper: "_10fd3obrlCj1zux-3Xj7vT",
				commentWrapper: "_10fd3obrlCj1zux-3Xj7vT",
				CommentReadMoreButton: "ajW-w9YltMIcD2oUK4wqX",
				commentReadMoreButton: "ajW-w9YltMIcD2oUK4wqX",
				SystemMessageWrapper: "_2VgjauG0vTccJDkiDX7gY9",
				systemMessageWrapper: "_2VgjauG0vTccJDkiDX7gY9",
				LivestreamingCommentWrapper: "_1F1WlzOb5NyTnFYLmgMC2N",
				livestreamingCommentWrapper: "_1F1WlzOb5NyTnFYLmgMC2N",
				livestreamingTimeStamp: "_2w_i8f5hIJwS6fDKeKeFQQ",
				HighlightTarget: "_36AcNiuVTxDg9azQinmNmG",
				highlightTarget: "_36AcNiuVTxDg9azQinmNmG",
				Time: "_1VxgSc7BnjNloaqS8_izfk",
				time: "_1VxgSc7BnjNloaqS8_izfk",
				ErrorText: "_2YgNI6jD-3GvvUBB3YtqU",
				errorText: "_2YgNI6jD-3GvvUBB3YtqU",
				RichTextJson: "NaMqLT6atm8Fw7wuVMEHK",
				richTextJson: "NaMqLT6atm8Fw7wuVMEHK",
				Livestreaming: "_9Xm0gli-Fwmi4qPqGik0C",
				livestreaming: "_9Xm0gli-Fwmi4qPqGik0C",
				TopMeta: "_3MsWUaCWqk4IBPrUQI0f1C",
				topMeta: "_3MsWUaCWqk4IBPrUQI0f1C",
				ChatIcon: "_3iIryzjeUEunWH_iFdY9su",
				chatIcon: "_3iIryzjeUEunWH_iFdY9su",
				Reply: "VSV9_VjJjg4kollzoF1tY",
				reply: "VSV9_VjJjg4kollzoF1tY",
				CommentTruncated: "_3CqFSg_s0YV39PECtobRnC",
				commentTruncated: "_3CqFSg_s0YV39PECtobRnC",
				CommentExpanded: "_2vrvGrYMpNAYdTLP7EzrPl",
				commentExpanded: "_2vrvGrYMpNAYdTLP7EzrPl",
				TruncatedVotesButton: "_1Eh8q2_z0x8QuNXjVNawHy",
				truncatedVotesButton: "_1Eh8q2_z0x8QuNXjVNawHy",
				DeletedComment: "_2Lbp-A5wH4vIxd63-SDxgH",
				deletedComment: "_2Lbp-A5wH4vIxd63-SDxgH"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_8Z1ljGP8NMgcQ6HiIU8BL",
				header: "_2JMq2sJfE8R1mD7hmnXvLF",
				title: "_2MMfIVVy6Y_AevoKnTKJic",
				closeIcon: "_6Ze541UF7OKb99GvJBdLj",
				"awards-list": "lBs2O5z8E3z3e0hSoLgSN",
				awardsList: "lBs2O5z8E3z3e0hSoLgSN",
				award: "_1EBnuCQ7rKpDbE5RQG-nSR",
				awardIcon: "_1lHgKhQjm2kEJNPMj3Kmsy",
				giveAwardButton: "_3V8ENzdR3Kl7lqnhxT9FoM"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_2uU7u484E-m3dz3sKEOxzw",
				awarded: "_2Wi-fP85nlQ2PN90Xl61wv",
				awardIcon: "_3FFkpDU9h2yRx3b7Pb_lLO",
				countText: "_2jensSxKzRapkf1m-pZYa",
				awardsTooltip: "_1KkHuZoxTcHkfsyTvbkeFD"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "VHAqLb7yUTVfkYgIR5MRQ",
				label: "eQxORSmlK2VUQrBjUlswY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_1QG_thA8DgRnt_AjQOfeRl",
				container: "_1AId_LMcCQuz86cvDA7jK6",
				hasError: "snUCoKlyWrZs-nw9BQXoA",
				hover: "_2MhoQ_mMNm54FiSxP8-Z_G",
				selectedForReply: "_1WhkzKgTj0oHJnKGMt2x5L",
				livestreaming: "_1gi7LkGMNm9HZkuRS0Je8P",
				readMoreButton: "_3QKQ9dcvz5zJAsWW4-Rshi",
				comment: "P3lKuDiuqqPn9pX4xOWT-",
				systemMessageComment: "_2FabxJps3ogPvmC-ptWBrL",
				commentBody: "_11nl5EjPfY1ghzfpJ8TztD",
				expanded: "_3VNpZeu_egQQx3RA_JgGX_",
				timestamp: "_3bETRAp-IiaudhHu3ztI7b",
				highlighted: "_3yBOjQrSGuGRL2ocfQeZlR",
				errorText: "_3KMNYDuiGdrHAb6C7x1654",
				richTextJson: "_208xMgGZZ3YUEYmLFffDJl",
				TopMeta: "ZDHHulqkPjwlT2-HC1hd0",
				topMeta: "ZDHHulqkPjwlT2-HC1hd0",
				avatar: "kXw14-_UbsEXbYzEMMKjh",
				icon: "_3bGpVwL699bZAw950J4QKC",
				replyWrapper: "_1ynXMY9Mxs-wjpOpZwSFxU",
				reactions: "_1ian-9D_TIro-y2s-Z_XFc",
				error: "_1rK5d-JN2zJE-uAeKNDDF5",
				retryButton: "_3QRoS-g0d2u1LNCDK_TNqj"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, n) {
			e.exports = {
				NewComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				newComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				show: "Tptm_9duqsvpN1p297GT0",
				ButtonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				buttonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				ScrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				scrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				loading: "_2Nsq1nyEjWMCKSWs72G7lx",
				ScrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				scrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				gradientAnimation: "_1GHoi4QoUeFfb4IzUIMCoR",
				LivestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				livestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				ChunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				chunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				top: "ZuYs_5l7Qf6T91OUOD4pG"
			}
		},
		"./src/reddit/components/CommentsChat/index.m.less": function(e, t, n) {
			e.exports = {
				EmbeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb",
				embeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return es
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/last.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/setInterval/index.ts"),
				h = n("./src/lib/timeAgo/index.ts"),
				b = n("./src/realtime/GQLSubscription/async.tsx"),
				f = n("./src/reddit/actions/blockedRedditors.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				C = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./node_modules/lodash/first.js"),
				_ = n.n(g),
				E = n("./node_modules/lodash/isArray.js"),
				I = n.n(E),
				x = n("./src/reddit/helpers/isComment.ts"),
				y = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				k = n("./src/reddit/models/Flair/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/Vote/index.ts");
			const j = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = M(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(y.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							authorIconImage: e.author_icon_img,
							authorIconIsDefault: e.author_is_default_icon,
							authorIconIsNSFW: e.author_is_nsfw_icon,
							authorSnoovatarImage: e.author_snoovatar_img,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedReasonCode: e.collapsed_reason_code,
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: N(n),
							id: e.name,
							isAdmin: n === O.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === O.e.Submitter,
							isMod: n === O.e.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: T.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(x.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: w.a.notVoted,
							...t || {}
						}
					}
				},
				N = e => {
					switch (e) {
						case O.e.Admin:
							return u.H.ADMIN;
						case O.e.Moderator:
							return u.H.MODERATOR;
						case O.e.Alumni:
							return u.H.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				M = e => _()((e || []).filter(e => I()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || O.e.None;
			const L = (e, t, n) => {
				const o = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = n;
				if (s && d) {
					if (d === k.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: l
								}
							}
						}
					}
					if (d === k.f.Text) {
						if (!c) return o;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: l
								}
							}
						}
					}
				}
			};
			var S = n("./src/lib/env/index.ts");
			const R = new Map,
				A = e => e,
				P = new Set;
			var D;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(D || (D = {}));
			const B = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				F = (e, t) => {
					const n = A(t),
						o = R.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				U = (e, t, n, o) => {
					const s = A(t),
						r = R.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					R.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...B
						}
					}), a.socket.addEventListener("message", K.bind(null, o)), a.socket.addEventListener("close", H.bind(null, s, o)), a.socket.addEventListener("error", G.bind(null, s)), window && window.addEventListener("beforeunload", F.bind(null, e, t))
				},
				H = (e, t, n) => {
					const o = R.get(e);
					o && (o.isClosePlanned ? R.delete(e) : V(e, t))
				},
				V = (e, t) => {
					const n = R.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: s,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: l
					} = n;
					if (R.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							U(l, c, d, t)
						}, i), Object(S.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				K = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(S.a)() && console.error(t)
					}
				},
				G = (e, t) => {
					const n = R.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? R.delete(e) : Object(S.a)() && console.error(t)
				};
			var W = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const J = Object(C.a)(z.b),
				X = Object(C.a)(z.c),
				Y = Object(C.a)(z.a),
				Z = Object(C.a)(z.d),
				$ = {},
				ee = (e, t, n, o) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						P.has(s) ? t() : (P.add(s), setTimeout(() => {
							P.delete(s), U(o, s, {
								...B
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case D.NEW_COMMENT: {
									const n = t.payload.name,
										a = j(t.payload),
										i = r(),
										c = n && Object(q.b)(i, {
											commentId: n
										}),
										l = !(!n || !$[n]);
									if (a && !l) {
										const n = L(0, o, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(W.w)(i, {
												commentsPageKey: e
											});
											s(J({
												authorFlair: n,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else s(X({
											authorFlair: n,
											comment: a,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case D.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = n && Object(q.b)(a, {
											commentId: n
										}),
										c = j(t.payload);
									if (i && c) {
										const n = L(0, o, t.payload),
											r = t.payload.total_comment_count;
										s(X({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case D.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										a = r(),
										i = Object(q.b)(a, {
											commentId: n
										});
									i && s(X({
										comment: {
											...i,
											score: o
										},
										commentsPageKey: e
									}));
									break
								}
								case D.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										o = Object(q.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(Y({
										id: e
									})) : $[e] = D.DELETE_COMMENT;
									break
								}
								case D.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = r(),
										a = Object(q.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(Q.m)(o, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? $[n] = D.REMOVE_COMMENT : s(Y({
										id: n
									}));
									break
								}
								case D.USER_JOIN: {
									const n = j(t.payload, {
											isSystem: !0
										}),
										o = !0;
									n && s(Z({
										comment: n,
										commentsPageKey: e,
										isChatSort: o
									}));
									break
								}
							}
						}
					})
				};
			var te = n("./src/reddit/actions/pages/comments.ts"),
				ne = n("./node_modules/fbt/lib/FbtPublic.js"),
				oe = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				se = n("./src/realtime/connection.ts");
			var re = {
					publish: n("./node_modules/graphql-tag/lib/index.js").a`
    mutation Mutation($input: PublishInput!) {
      publish(input: $input) {
        ok
      }
    }
  `
				},
				ae = n("./src/reddit/actions/login.ts"),
				ie = n("./src/reddit/actions/reactionAwards/constants.ts"),
				ce = n("./src/reddit/actions/toaster.ts"),
				le = n("./src/reddit/endpoints/awards/index.ts"),
				de = n("./src/lib/makeGqlRequest/index.ts"),
				me = n("./src/lib/makeRequest/index.ts"),
				ue = n("./src/reddit/models/Gold/Award.ts"),
				pe = n("./src/redditGQL/operations/AvailableAwards.json");
			var he = n("./src/reddit/models/Toast/index.ts"),
				be = n("./src/reddit/selectors/communityAwards.ts"),
				fe = n("./src/reddit/selectors/experiments/chat.ts"),
				ve = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Ce = n("./src/lib/isDefined.ts");
			const ge = e => "chat_reaction_upvote" === e.id,
				_e = (e, t) => {
					var n;
					return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(be.a)(e, t)).filter(Ce.a)
				},
				Ee = Object(d.a)((e, t) => _e(e, t.subredditId), (e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const r = Object(be.a)(e, n),
							a = null !== (s = null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n]) && void 0 !== s ? s : 0;
						if (r && r.awardSubType === ue.d.ChatReaction && !(a <= 0)) return {
							award: r,
							total: a
						}
					}).filter(Ce.a)
				}, (e, t) => {
					const n = (e => {
						const t = e.reduce((e, t, n) => ({
								...e,
								[t.id]: n
							}), {}),
							n = e.length;
						return (e, o) => {
							var s, r;
							return (null !== (s = t[e.award.id]) && void 0 !== s ? s : n) - (null !== (r = t[o.award.id]) && void 0 !== r ? r : n)
						}
					})(e);
					return t.slice().sort(n)
				}),
				Ie = (e, t, n) => {
					var o, s;
					return !!(null === (s = null === (o = e.awards.chatReactions.pending) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s[t])
				};
			var xe = n("./src/reddit/selectors/user.ts");
			const ye = Object(C.a)(ie.c),
				Oe = Object(C.a)(ie.b),
				ke = Object(C.a)(ie.a),
				Te = Object(C.a)(ie.e),
				we = Object(C.a)(ie.f),
				je = Object(C.a)(ie.d),
				Ne = Object(C.a)(ie.h),
				Me = Object(C.a)(ie.i),
				Le = Object(C.a)(ie.g),
				Se = Object(C.a)(ie.j),
				Re = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(ye());
					try {
						const n = await (async (e, t) => {
							const n = await Object(de.a)(e, {
								...pe,
								variables: {
									subredditId: t,
									subTypes: [ue.d.ChatReaction]
								}
							});
							if (!Object(me.c)(n)) throw n.error;
							return n.body.data.availableAwards
						})(s(), e);
						t(Oe({
							subredditId: e,
							availableAwards: n
						}))
					} catch (r) {
						t(ke(r))
					}
				}, Ae = async (e, t) => {
					let {
						awardId: n,
						commentId: o,
						operation: s
					} = t;
					var r;
					const a = Object(q.b)(e, {
						commentId: o
					});
					if (!a) return;
					const i = Object(be.a)(e, n),
						c = Object(xe.i)(e);
					return Object(se.a)(null === (r = e.user.session) || void 0 === r ? void 0 : r.accessToken).mutate({
						mutation: re.publish,
						variables: {
							input: {
								channel: {
									category: "COMMENT_REACTIONS",
									teamOwner: "CHAT",
									postID: a.postId
								},
								LiveChatReactionMessageData: {
									actionTaken: s,
									userID: c,
									reaction: {
										id: n,
										iconURL: Object(ve.c)({
											award: i,
											size: 64,
											prefersReducedMotion: !1,
											postOrComment: a
										})
									},
									commentID: o
								}
							}
						}
					})
				}, Pe = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = await Object(le.a)(s(), {
						thingId: e
					});
					t(Object(v.e)(r))
				}, De = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n();
					if (!Object(xe.Q)(r)) return t(Object(ae.openLoginModal)());
					if (!Ie(r, e.awardId, e.commentId)) {
						t(Te(e));
						try {
							const {
								awardId: n,
								commentId: o
							} = e, a = Object(oe.a)(), i = Object(be.a)(r, n), c = Object(fe.e)(r);
							if ((e => ge(e) || (e => "chat_reaction_downvote" === e.id)(e))(i)) {
								const e = ge(i) ? "chat_reaction_downvote" : "chat_reaction_upvote",
									n = ((e, t, n) => {
										var o, s;
										const r = Object(q.b)(e, {
											commentId: n
										});
										return null === (s = null === (o = null == r ? void 0 : r.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[0]
									})(r, e, o);
								n && await t(Be({
									awardId: e,
									awardingId: n,
									commentId: o
								}, {
									suppressCommentDataRefresh: !0
								}))
							}
							await Object(le.b)(s(), {
								awardId: n,
								targetId: o,
								isAnonymous: !1,
								nonce: a
							}), c || await Ae(r, {
								awardId: n,
								commentId: o,
								operation: ue.g.Add
							}), await t(Pe(o)), t(we({
								awardId: n,
								commentId: o
							}))
						} catch (a) {
							t(je({
								...e,
								error: a
							})), t(Object(ce.f)({
								kind: he.b.Error,
								duration: ce.a,
								text: ne.fbt._("An error has occurred while giving a reaction. Please try again.", null, {
									hk: "2JvsOk"
								})
							}))
						}
					}
				}, Be = (e, t) => async (n, o, s) => {
					let {
						gqlContext: r
					} = s;
					const a = o();
					if (!Object(xe.Q)(a)) return n(Object(ae.openLoginModal)());
					if (!Ie(a, e.awardId, e.commentId)) {
						n(Ne(e));
						try {
							const {
								awardId: o,
								awardingId: s,
								commentId: i
							} = e, c = Object(fe.e)(a);
							await Object(le.c)(r(), {
								awardingId: s
							}), c || await Ae(a, {
								awardId: o,
								commentId: i,
								operation: ue.g.Remove
							}), !(null == t ? void 0 : t.suppressCommentDataRefresh) && await n(Pe(e.commentId)), n(Me({
								awardId: o,
								awardingId: s,
								commentId: i
							}))
						} catch (i) {
							n(Le({
								...e,
								error: i
							})), n(Object(ce.f)({
								kind: he.b.Error,
								duration: ce.a,
								text: ne.fbt._("An error has occurred while removing a reaction. Please try again.", null, {
									hk: "4kopxI"
								})
							}))
						}
					}
				};
			var Fe = n("./src/reddit/components/Comments/States/index.tsx"),
				Ue = n("./node_modules/lodash/defer.js"),
				He = n.n(Ue),
				Ve = n("./src/lib/lessComponent.tsx"),
				Ke = n("./src/lib/makeDraftKey/index.ts"),
				Ge = n("./src/lib/objectSelector/index.ts"),
				We = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				qe = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Qe = n("./src/reddit/helpers/awards/message.ts"),
				ze = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Je = n("./src/reddit/components/RichTextJson/index.tsx"),
				Xe = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Star/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				$e = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				et = n.n($e);
			const tt = Object(Ge.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				nt = e => {
					const {
						award: t,
						comment: n,
						iconUrl: o
					} = e;
					let s = "",
						r = !0,
						a = !1;
					return t.coinPrice < Qe.a ? (s = et.a.silverTierAwardComment, r = !1) : t.coinPrice < Qe.b ? s = et.a.goldTierAwardComment : (s = et.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(m.a)(et.a.awardComment, s)
					}, c.a.createElement("div", {
						className: et.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ye.a, {
						className: Object(m.a)(et.a.backgroundAnimation, et.a.backgroundStar)
					}), c.a.createElement(Ze.a, {
						className: Object(m.a)(et.a.backgroundAnimation, et.a.backgroundStar, et.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.a, {
						className: Object(m.a)(et.a.backgroundAnimation, et.a.backgroundSparkle, et.a.sparkleBottomLeft)
					}), c.a.createElement(Xe.a, {
						className: Object(m.a)(et.a.backgroundAnimation, et.a.backgroundSparkle, et.a.sparkleTopRight)
					}), c.a.createElement(Xe.a, {
						className: Object(m.a)(et.a.backgroundAnimation, et.a.backgroundSparkle, et.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: o
					})), c.a.createElement(Je.b, {
						className: et.a.awardCommentText,
						content: Object(ze.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: tt(e),
						useExplicitTextColor: !0
					}))
				};
			var ot = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				st = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				rt = n.n(st);
			var at = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: o
					} = e;
					const s = Object(m.a)(rt.a.CollapsedComment, {
						[rt.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: s,
						onClick: o
					}, ne.fbt._("collapsed {collapsed message} (may be sensitive)", [ne.fbt._param("collapsed message", ne.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [ne.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				it = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				ct = n("./src/reddit/actions/comment/authoring.ts"),
				lt = n("./src/reddit/actions/comment/moderation.ts"),
				dt = n("./src/reddit/actions/modal.ts"),
				mt = n("./src/reddit/actions/reportFlow/index.ts"),
				ut = n("./src/reddit/actions/tooltip.ts"),
				pt = n("./src/reddit/actions/userBlocks.ts"),
				ht = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				bt = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				ft = n("./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less"),
				vt = n.n(ft);

			function Ct() {
				return (Ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const gt = Ve.a.button("MenuItem", vt.a),
				_t = Ve.a.a("MenuItemPermalink", vt.a),
				Et = e => {
					let {
						children: t,
						comment: n,
						onClick: o,
						onHideTooltip: s,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return c.a.createElement(gt, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: s.bind(void 0, i),
						onClick: e => {
							o(e), d && a(Object(bt.f)(d, n.id))
						}
					}, t, c.a.createElement(ht.c, {
						tooltipId: i
					}, l))
				},
				It = e => c.a.createElement(Et, Ct({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(_t, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var xt = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				yt = n("./src/reddit/components/HumanDate/index.tsx"),
				Ot = n("./src/reddit/components/ModModeReports/helpers.ts"),
				kt = n("./src/reddit/components/ReportFlow/index.tsx"),
				Tt = n("./src/reddit/components/ReportFlow/new.tsx"),
				wt = n("./src/reddit/components/TrackingHelper/index.tsx"),
				jt = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Nt = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Mt = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				Lt = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				St = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Rt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				At = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				Pt = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				Dt = n("./src/reddit/models/PostDraft/index.ts"),
				Bt = n("./src/reddit/selectors/activeModalId.ts"),
				Ft = n("./src/reddit/selectors/blockedRedditors.ts"),
				Ut = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts");

			function Ht() {
				return (Ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Vt = Ve.a.wrapped(Lt.a, "BlockIcon", vt.a),
				Kt = Ve.a.wrapped(Mt.a, "FlagIcon", vt.a),
				Gt = Ve.a.wrapped(Nt.a, "EditIcon", vt.a),
				Wt = Ve.a.wrapped(jt.a, "ApproveIcon", vt.a),
				qt = Ve.a.wrapped(At.a, "ReplyIcon", vt.a),
				Qt = Ve.a.wrapped(Rt.a, "RemoveIcon", vt.a),
				zt = Ve.a.wrapped(Pt.a, "SpamIcon", vt.a),
				Jt = Ve.a.wrapped(St.a, "ModeratorIcon", vt.a),
				Xt = e => (t, n) => {
					let {
						comment: o
					} = n;
					return `${e}${o.id}`
				},
				Yt = e => `Comment-${e}--Modal--DeleteComment`,
				Zt = Object(d.c)({
					currentUser: xe.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Q.m)(e, {
							postId: n.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ft.c)(e, n.authorId)
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var o, s;
						return (null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === n.id
					},
					approveTooltipId: Xt("CommentChatPost--Approve--"),
					blockTooltipId: Xt("CommentChatPost--Block--"),
					createTooltipId: Xt("CommentChatPost--Create--"),
					editTooltipId: Xt("CommentChatPost--Edit--"),
					replyTooltipId: Xt("CommentChatPost--Reply--"),
					reportTooltipId: Xt("CommentChatPost--Report--"),
					upvoteTooltipId: Xt("CommentChatPost--Upvote--"),
					downvoteTooltipId: Xt("CommentChatPost--Downvote--"),
					distinguishTooltipId: Xt("CommentChatPost--Distinguish--"),
					spamTooltipId: Xt("CommentChatPost--Spam--"),
					removeTooltipId: Xt("CommentChatPost--Remove--"),
					deleteTooltipId: Xt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Bt.a)(e) === Yt(n.id)
					},
					reportingRevampEnabled: Ut.a
				});
			var $t = Object(l.b)(Zt, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(ct.s)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(mt.c)(n.id, !1))
						},
						onHideTooltip: () => e(Object(ut.i)()),
						onShowTooltip: t => e(Object(ut.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							o && e(Object(ct.e)({
								commentId: n.id,
								draftKey: Object(Ke.a)(Dt.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(lt.a)(n.id)),
						onBlockClick: () => e(Object(pt.h)(n.author)),
						onUnblockClick: () => e(Object(pt.g)(n.author)),
						onUpvoteClick: () => e(Object(v.s)(n.id)),
						onDownvoteClick: () => e(Object(v.k)(n.id)),
						onDistinguishClick: t => e(Object(lt.b)(n.id, t)),
						onSpamClick: () => e(Object(lt.e)(n.id, !0)),
						onRemoveClick: () => e(Object(lt.e)(n.id, !1)),
						deleteComment: () => o && e(Object(ct.i)(n.id, n.postId)),
						onDeleteClick: () => e(Object(dt.i)(Yt(n.id))),
						toggleDeleteCommentModal: () => e(Object(dt.i)(Yt(n.id)))
					}
				})(Object(wt.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: o,
						currentUser: s,
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
						isLivestreaming: p,
						isMod: h,
						onApproveClick: b,
						onBlockClick: f,
						onDeleteClick: v,
						onEditClick: C,
						onHideTooltip: g,
						onRemoveClick: _,
						onReplyClick: E,
						onReportClick: I,
						onShowTooltip: x,
						onSpamClick: y,
						onUnblockClick: O,
						onDistinguishClick: k,
						reportFlowIsOpen: T,
						replyTooltipId: w,
						reportTooltipId: j,
						approveTooltipId: N,
						blockTooltipId: M,
						removeTooltipId: L,
						distinguishTooltipId: S,
						sendEvent: R,
						spamTooltipId: A,
						toggleDeleteCommentModal: P,
						timestampUpdateTrigger: D,
						showTime: B
					} = e, F = !!s && s.id === t.authorId, U = Object(Ot.b)(t), H = t.isApproved && U, V = !t.bannedBy || t.bannedBy === u.l, K = {
						comment: t,
						onHideTooltip: g,
						onShowTooltip: x,
						sendEvent: R
					}, G = t.isMod;
					return c.a.createElement("div", {
						className: Object(m.a)(vt.a.container, n)
					}, c.a.createElement("div", {
						className: Object(m.a)(vt.a.Menu, {
							[vt.a.Livestreaming]: p
						})
					}, (t.bannedBy || U) && h && c.a.createElement(Et, Ht({
						onClick: b,
						tooltipId: N,
						tooltipText: H ? ne.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : ne.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Wt, null)), !t.isLocked && c.a.createElement(Et, Ht({
						onClick: E,
						tooltipId: w,
						tooltipText: ne.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(qt, null)), h && F && c.a.createElement(Et, Ht({
						onClick: () => k(G ? u.H.NONE : u.H.MODERATOR),
						tooltipId: S,
						tooltipText: G ? ne.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : ne.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Jt, null)), h && V && c.a.createElement(Et, Ht({
						onClick: y,
						tooltipId: A,
						tooltipText: ne.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(zt, null)), !F && c.a.createElement(Et, Ht({
						onClick: I,
						tooltipId: j,
						tooltipText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Kt, null)), T && (() => e.reportingRevampEnabled ? c.a.createElement(Tt.a, {
						withOverlay: !0,
						overlayCustomStyles: kt.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(kt.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: kt.b,
						postId: t.postId
					}))(), F && !p && c.a.createElement(Et, Ht({
						onClick: C,
						tooltipId: i,
						tooltipText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, K), c.a.createElement(Gt, null)), h && V ? c.a.createElement(Et, Ht({
						onClick: _,
						tooltipId: L,
						tooltipText: t.bannedBy === u.l ? ne.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : ne.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === u.l ? "confirm_remove" : "remove"
					}, K), c.a.createElement(Qt, null)) : F && c.a.createElement(Et, Ht({
						onClick: v,
						tooltipId: a,
						tooltipText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Qt, null)), d && c.a.createElement(xt.a, {
						actionText: ne.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: ne.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: ne.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: ne.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: r,
						toggleModal: P,
						withOverlay: !0
					}), !!s && !F && c.a.createElement(Et, Ht({
						onClick: () => l ? O() : f(),
						tooltipId: M,
						tooltipText: l ? ne.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : ne.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${l?"unblock":"block"}`
					}, K), c.a.createElement(Vt, null))), B && c.a.createElement(It, Ht({}, e, {
						tooltipId: o,
						tooltipText: c.a.createElement(yt.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: D
					}), c.a.createElement(yt.d, {
						seconds: t.created
					})))
				})),
				en = n("./src/reddit/actions/gold/modals.ts"),
				tn = n("./src/reddit/helpers/correlationIdTracker.ts"),
				nn = n("./src/reddit/hooks/useTracking.ts"),
				on = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				sn = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				rn = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				an = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				cn = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				ln = n("./src/reddit/hooks/usePageLayer.ts");
			var dn = () => {
					const e = Object(ln.a)();
					return Object(i.useMemo)(() => !!e && Object(cn.b)(e), [e]) ? {
						container: window.document.body,
						alwaysHandleOverflow: !0
					} : null
				},
				mn = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less"),
				un = n.n(mn);

			function pn() {
				return (pn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const hn = e => {
				let {
					children: t,
					commentId: n,
					onClick: o,
					tooltipId: s,
					tooltipText: r,
					trackingNoun: a,
					suppressBackgroundOnHover: i = !1,
					...d
				} = e;
				const u = Object(l.d)(),
					p = Object(nn.a)(),
					h = dn();
				return c.a.createElement("button", pn({}, d, {
					id: s,
					className: Object(m.a)(un.a.menuItem, {
						[un.a.suppressBackgroundOnHover]: i
					}),
					onMouseEnter: () => {
						u(Object(ut.f)({
							tooltipId: s
						}))
					},
					onMouseLeave: () => {
						u(Object(ut.i)())
					},
					onClick: e => {
						null == o || o(e), a && n && p(Object(bt.f)(a, n))
					}
				}), t, c.a.createElement(ht.c, pn({
					tooltipId: s
				}, h), r))
			};
			var bn = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				fn = n("./src/reddit/controls/Dropdown/index.tsx"),
				vn = n("./src/reddit/selectors/tooltip.ts");

			function Cn() {
				return (Cn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const gn = Object(bn.a)(fn.a),
				_n = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const r = Object(l.d)(),
						a = dn(),
						i = Object(l.e)(e => Object(vn.b)(t)(e)),
						d = c.a.useCallback(() => {
							r(Object(ut.h)({
								tooltipId: t
							})), null == s || s()
						}, [r, t, s]);
					return c.a.createElement("button", {
						id: t,
						className: un.a.menuItem,
						onClick: d
					}, n, c.a.createElement(gn, Cn({
						className: un.a.dropdownMenu,
						isOpen: i,
						tooltipId: t
					}, a), o))
				};
			var En = n("./src/reddit/controls/Dropdown/Row.tsx"),
				In = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				xn = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				yn = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				On = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				kn = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const Tn = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const o = t.id,
					s = Object(Ot.b)(t),
					r = t.isApproved && s,
					a = t.bannedBy === u.l,
					i = t.isMod,
					d = !n && (!t.bannedBy || a),
					m = Object(l.d)(),
					p = Object(nn.a)(),
					h = c.a.useCallback(e => {
						p(Object(bt.f)(e, o))
					}, [p, o]),
					b = c.a.useCallback(() => {
						m(Object(lt.a)(o)), h("approve")
					}, [m, h, o]),
					f = c.a.useCallback(() => {
						const e = a ? "confirm_remove" : "remove";
						m(Object(lt.e)(o, !1)), h(e)
					}, [m, h, o, a]),
					v = c.a.useCallback(() => {
						m(Object(lt.e)(o, !0)), h("spam")
					}, [m, h, o]),
					C = c.a.useCallback(() => {
						m(Object(lt.b)(o, u.H.MODERATOR))
					}, [m, o]),
					g = c.a.useCallback(() => {
						m(Object(lt.b)(o, u.H.NONE))
					}, [m, o]);
				return c.a.createElement(c.a.Fragment, null, n && i && c.a.createElement(En.b, {
					className: un.a.dropdownMenuItem,
					displayText: ne.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: g
				}, c.a.createElement(On.a, {
					className: un.a.dropdownIcon
				})), n && !i && c.a.createElement(En.b, {
					className: un.a.dropdownMenuItem,
					displayText: ne.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: C
				}, c.a.createElement(kn.a, {
					className: un.a.dropdownIcon
				})), (t.bannedBy || s) && c.a.createElement(En.b, {
					className: un.a.dropdownMenuItem,
					displayText: r ? ne.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : ne.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: b
				}, c.a.createElement(In.a, {
					className: un.a.dropdownIcon
				})), d && c.a.createElement(En.b, {
					className: un.a.dropdownMenuItem,
					displayText: a ? ne.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : ne.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: f
				}, c.a.createElement(xn.a, {
					className: un.a.dropdownIcon
				})), d && c.a.createElement(En.b, {
					className: un.a.dropdownMenuItem,
					displayText: ne.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: v
				}, c.a.createElement(yn.a, {
					className: un.a.dropdownIcon
				})))
			};
			var wn = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				jn = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				Mn = n("./src/reddit/icons/svgs/UserBlock/index.tsx");
			const Ln = e => `Comment-${e}--Modal--DeleteComment`,
				Sn = e => `CommentChatPost--ModMenu--${e}`,
				Rn = e => `CommentChatPost--OverflowMenu--${e}`,
				An = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: o = !1
					} = e;
					const s = t.id,
						r = Object(l.d)(),
						a = Object(nn.a)(),
						i = Object(l.e)(xe.k),
						d = Object(l.e)(e => Object(Ft.c)(e, t.authorId)),
						m = i && i.id === t.authorId,
						u = c.a.useCallback(e => {
							a(Object(bt.f)(e, s))
						}, [a, s]),
						p = c.a.useCallback(() => {
							r(Object(mt.c)(s, !1)), u("report")
						}, [r, u, s]),
						h = c.a.useCallback(() => {
							r(Object(dt.i)(Ln(t.id))), u("delete")
						}, [r, u, t]),
						b = c.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && r(Object(ct.e)({
								commentId: t.id,
								draftKey: Object(Ke.a)(Dt.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), u("edit")
						}, [r, u, t, n]),
						f = c.a.useCallback(() => {
							r(Object(pt.h)(t.author)), u("block")
						}, [r, u, t]),
						v = c.a.useCallback(() => {
							r(Object(pt.g)(t.author)), u("unblock")
						}, [r, u, t]);
					return c.a.createElement(c.a.Fragment, null, m && !o && c.a.createElement(En.b, {
						className: un.a.dropdownMenuItem,
						displayText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, c.a.createElement(wn.a, {
						className: un.a.dropdownIcon
					})), m && c.a.createElement(En.b, {
						className: un.a.dropdownMenuItem,
						displayText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, c.a.createElement(Nn.a, {
						className: un.a.dropdownIcon
					})), !m && c.a.createElement(En.b, {
						className: un.a.dropdownMenuItem,
						displayText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: p
					}, c.a.createElement(jn.a, {
						className: un.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && !d && c.a.createElement(En.b, {
						className: un.a.dropdownMenuItem,
						displayText: ne.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: f
					}, c.a.createElement(Mn.a, {
						className: un.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && d && c.a.createElement(En.b, {
						className: un.a.dropdownMenuItem,
						displayText: ne.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: v
					}, c.a.createElement(Mn.a, {
						className: un.a.dropdownIcon
					})))
				};
			var Pn = n("./src/reddit/selectors/userPrefs.ts"),
				Dn = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/ReactionButton/index.m.less"),
				Bn = n.n(Dn);
			const Fn = e => {
					let {
						reaction: t,
						comment: n
					} = e;
					var o, s;
					const r = Object(nn.a)(),
						a = Object(l.d)(),
						i = Object(l.e)(Pn.d),
						d = null === (s = null === (o = n.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t.id]) || void 0 === s ? void 0 : s[0];
					return c.a.createElement(hn, {
						commentId: n.id,
						tooltipId: `CommentChatPost--${t.id}${n.id}`,
						tooltipText: t.name,
						suppressBackgroundOnHover: !0,
						onClick: d ? () => {
							d && (a(Be({
								awardId: t.id,
								awardingId: d,
								commentId: n.id
							})), r(Object(bt.h)(t.id, n.id, "actions_menu")))
						} : () => {
							a(De({
								awardId: t.id,
								commentId: n.id
							})), r(Object(bt.g)(t.id, n.id, "actions_menu"))
						}
					}, c.a.createElement("img", {
						className: Bn.a.snoomojiWrapper,
						src: Object(ve.c)({
							award: t,
							postOrComment: n,
							size: 64,
							prefersReducedMotion: i
						}),
						alt: t.name
					}))
				},
				Un = (e, t) => `CommentChatPost--${e}--${t}`,
				Hn = Object(d.c)({
					availableReactionAwards: (e, t) => {
						let {
							comment: n
						} = t;
						return _e(e, n.subredditId)
					},
					currentUser: xe.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Q.m)(e, {
							postId: n.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var o, s;
						return (null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === n.id
					},
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Bt.a)(e) === Ln(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ft.c)(e, n.authorId)
					},
					isLivePostCreatorModRoleEnabled: e => Object(fe.g)(e),
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Q.a)(e, {
							postId: n.postId
						})
					}
				});
			var Vn = Object(l.b)(Hn, (e, t) => {
				let {
					comment: n,
					commentsPageKey: o
				} = t;
				return {
					onReplyClick: () => e(Object(ct.s)({
						parentCommentId: n.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					giveAward: () => {
						const t = Object(tn.d)(tn.a.GildingFlow, !0);
						return e(Object(en.d)({
							correlationId: t,
							thingId: n.id
						}))
					},
					deleteComment: () => o && e(Object(ct.i)(n.id, n.postId)),
					toggleDeleteCommentModal: () => e(Object(dt.i)(Ln(n.id)))
				}
			})(e => {
				let {
					comment: t,
					commentsPageKey: n,
					className: o,
					currentUser: s,
					deleteComment: r,
					giveAward: a,
					isAuthorBlocked: i,
					isDeleteModalOpen: l,
					isLivestreaming: d,
					isMod: u,
					isChatCreateOnlyPerm: p,
					isLivePostCreatorModRoleEnabled: h,
					onReplyClick: b,
					reportFlowIsOpen: f,
					toggleDeleteCommentModal: v,
					availableReactionAwards: C
				} = e;
				const g = !!s && s.id === t.authorId,
					_ = Object(nn.a)(),
					E = c.a.useCallback(() => {
						_(Object(bt.f)("other_options", t.id))
					}, [_, t.id]);
				return c.a.createElement("div", {
					className: Object(m.a)(un.a.menu, o, {
						[un.a.livestreaming]: d
					})
				}, !d && !!(null == C ? void 0 : C.length) && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: un.a.innerWrapper
				}, C.map(e => c.a.createElement(Fn, {
					key: e.id,
					comment: t,
					reaction: e
				}))), c.a.createElement("div", {
					className: un.a.verticalBar
				})), c.a.createElement("div", {
					className: un.a.innerWrapper
				}, !t.isLocked && !i && Boolean(t.authorId) && c.a.createElement(c.a.Fragment, null, c.a.createElement(hn, {
					onClick: b,
					commentId: t.id,
					tooltipId: Un("Reply", t.id),
					tooltipText: ne.fbt._("Reply", null, {
						hk: "14j3OR"
					}),
					trackingNoun: "reply",
					"data-testid": "comment-reply"
				}, c.a.createElement(an.a, {
					className: un.a.icon
				})), !d && !g && c.a.createElement(hn, {
					onClick: a,
					commentId: t.id,
					tooltipId: Un("Award", t.id),
					tooltipText: ne.fbt._("Give Award", null, {
						hk: "3rUq40"
					}),
					trackingNoun: "award",
					"data-testid": "comment-award"
				}, c.a.createElement(on.a, {
					className: un.a.icon
				}))), u && !(p && h) && c.a.createElement(_n, {
					dropdownId: Sn(t.id),
					icon: c.a.createElement(sn.a, {
						className: un.a.icon
					})
				}, c.a.createElement(Tn, {
					comment: t,
					isCommentAuthor: g
				})), c.a.createElement(_n, {
					dropdownId: Rn(t.id),
					icon: c.a.createElement(rn.a, {
						className: un.a.icon
					}),
					onClick: E
				}, c.a.createElement(An, {
					comment: t,
					isLivestreaming: d,
					commentsPageKey: n
				})), f && c.a.createElement(Tt.a, {
					withOverlay: !0,
					overlayCustomStyles: kt.b,
					postId: t.postId,
					commentId: t.id
				}), l && c.a.createElement(xt.a, {
					actionText: ne.fbt._("Delete", null, {
						hk: "3j0q3Z"
					}),
					cancelActionText: ne.fbt._("Keep", null, {
						hk: "3LTfYE"
					}),
					headerText: ne.fbt._("Delete comment", null, {
						hk: "4uv7tI"
					}),
					modalText: ne.fbt._("Are you sure you want to delete your comment?", null, {
						hk: "227ya0"
					}),
					onConfirm: r,
					toggleModal: v,
					withOverlay: !0
				})))
			});
			const Kn = e => {
				return Object(l.e)(fe.d) ? c.a.createElement(Vn, e) : c.a.createElement($t, e)
			};
			var Gn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx"),
				Wn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				qn = n.n(Wn);
			const Qn = Object(Ge.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var zn = e => {
					const {
						comment: t
					} = e;
					return void 0 === Qn(e) ? null : c.a.createElement(Je.b, {
						className: qn.a.SystemMessageText,
						content: Object(ze.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Qn(e),
						useExplicitTextColor: !0
					})
				},
				Jn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Xn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Yn = n("./src/reddit/controls/ErrorText/index.tsx"),
				Zn = n("./src/reddit/constants/experiments.ts"),
				$n = n("./src/reddit/helpers/chooseVariant/index.ts");
			const eo = e => Object($n.c)(e, {
					experimentName: Zn.Ab,
					experimentEligibilitySelector: $n.a
				}) === Zn.wb.Enabled,
				to = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(q.b)(e, {
						commentId: n
					});
					if (o && o.associatedAwardId) return Object(be.a)(e, o.associatedAwardId)
				};
			var no = n("./src/reddit/selectors/poll/index.ts"),
				oo = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				so = n.n(oo);
			const ro = 250,
				ao = 10,
				io = Ve.a.wrapped(Yn.b, "ErrorText", so.a),
				co = Ve.a.wrapped(We.a, "TopMeta", so.a),
				lo = Object(Xn.u)(),
				mo = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return to(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = to(e, {
							commentId: n
						});
						if (o) return Object(ve.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: q.b,
					commentPermalink: W.m,
					errorMsgs: W.H,
					flair: W.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: W.z,
					prediction: no.f,
					subreddit: Xn.r,
					shouldRenderSystemMessages: eo
				})),
				uo = Object(Ge.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class po extends c.a.Component {
				constructor(e) {
					super(e), this.elemRef = c.a.createRef(), this.toggleBody = () => {
						const e = !this.state.isExpanded;
						this.setState({
							isExpanded: e
						})
					}, this.expandCollapsedComment = () => {
						const e = !this.state.isCollapsed;
						this.setState({
							isCollapsed: e
						})
					};
					const t = Boolean(e.comment && e.comment.collapsed);
					this.state = {
						isCollapsed: t,
						isExpanded: !1,
						isTruncated: !1
					}
				}
				componentDidMount() {
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > ro && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: n
					} = this.state, o = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && o) {
						const e = this.elemRef.current;
						let n = ro;
						if (t) {
							n = e.scrollHeight + ao;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${n}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: n,
						comment: o,
						commentPermalink: s,
						commentsPageKey: r,
						errorMsgs: a,
						flair: i,
						isActive: l,
						isEditing: d,
						isLivestreaming: u,
						postId: p,
						prediction: h,
						renderedInOverlay: b,
						sendEvent: f,
						targetComment: v,
						timestampUpdateTrigger: C,
						addToRefList: g,
						onReplyClick: _,
						shouldRenderSystemMessages: E
					} = this.props, {
						isCollapsed: I,
						isExpanded: x,
						isTruncated: y
					} = this.state;
					if (!o) return null;
					l && He()(() => this.elemRef.current && this.elemRef.current.focus()), He()(() => this.elemRef && this.elemRef.current && g && g(this.elemRef));
					const O = o.isSystem,
						k = !d && !o.isDeleted && !O,
						T = !!e,
						w = Object(m.a)({
							[so.a.SystemMessageWrapper]: O && !u && E,
							[so.a.CommentWrapper]: !u && !O,
							[so.a.CommentExpanded]: x,
							[so.a.CommentTruncated]: y,
							[so.a.HighlightTarget]: v,
							[so.a.LivestreamingCommentWrapper]: u
						});
					return I ? c.a.createElement(at, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: v ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: w
					}, d && c.a.createElement(Jn.a, {
						key: "chatCommentsForm",
						isLivestreaming: u,
						postId: p,
						sendEvent: f,
						draftKey: Object(Ke.a)(Dt.c.edit, o.id),
						commentsPageKey: r,
						isEditing: d,
						comment: o
					}), k && c.a.createElement(c.a.Fragment, null, c.a.createElement(co, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: r,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: u,
						renderedInOverlay: b
					}, c.a.createElement(ot.a, {
						className: Object(m.a)(so.a.ChatIcon, {
							[so.a.Livestreaming]: u
						}),
						isLivestreaming: u,
						icon: o.profileImage,
						userId: o.authorId,
						isNSFW: o.profileOver18 || o.authorIconIsNSFW
					})), o.parentId && c.a.createElement(Gn.a, {
						className: so.a.Reply,
						commentId: o.parentId,
						onReplyClick: _,
						isLivestreaming: u
					}), u && c.a.createElement("span", {
						className: so.a.livestreamingTimeStamp
					}, c.a.createElement(yt.d, {
						seconds: o.created
					})), T && e && u ? c.a.createElement(nt, {
						award: e,
						comment: o,
						iconUrl: t
					}) : h ? c.a.createElement(qe.a, {
						comment: o,
						prediction: h
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Je.b, {
						className: Object(m.a)(so.a.RichTextJson, {
							[so.a.Livestreaming]: u
						}),
						content: Object(ze.a)(o),
						rtJsonElementProps: uo(this.props),
						useExplicitTextColor: u
					}), c.a.createElement(Kn, {
						className: Object(m.a)(so.a.Menu, {
							[so.a.Livestreaming]: u
						}),
						comment: o,
						commentPermalink: s,
						commentsPageKey: r,
						isLivestreaming: u,
						showTime: !u,
						timestampUpdateTrigger: C
					}))), o.isDeleted && c.a.createElement(it.a, {
						className: Object(m.a)(so.a.DeletedComment, {
							[so.a.Livestreaming]: u
						})
					}), k && a && a.map((e, t) => c.a.createElement(io, {
						key: `${t}-${e}`
					}, e)), !d && y && c.a.createElement("button", {
						className: Object(m.a)(so.a.CommentReadMoreButton, {
							[so.a.Livestreaming]: u
						}),
						onClick: this.toggleBody
					}, ne.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), O && !u && E && c.a.createElement(zn, {
						comment: o
					}))
				}
			}
			var ho = lo(mo(po)),
				bo = n("./src/lib/prettyPrintNumber/index.ts"),
				fo = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				vo = n.n(fo);
			const Co = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: o,
					reaction: s
				} = e;
				var r, a, i, d;
				const u = Object(l.d)(),
					p = Object(nn.a)(),
					h = Object(l.e)(Pn.d),
					b = null !== (a = null === (r = o.awardingsByCurrentUser) || void 0 === r ? void 0 : r[s.id]) && void 0 !== a ? a : [],
					f = Boolean(b.length);
				return c.a.createElement("button", {
					className: Object(m.a)(t, vo.a.reactionAwardButton, {
						[vo.a.darkMode]: n,
						[vo.a.activeReactionButton]: f
					}),
					onClick: f ? () => {
						u(Be({
							awardId: s.id,
							awardingId: b[0],
							commentId: o.id
						})), p(Object(bt.h)(s.id, o.id, "quick_button"))
					} : () => {
						u(De({
							awardId: s.id,
							commentId: o.id
						})), p(Object(bt.g)(s.id, o.id, "quick_button"))
					}
				}, c.a.createElement("img", {
					className: vo.a.snoomoji,
					src: Object(ve.c)({
						award: s,
						postOrComment: o,
						size: 64,
						prefersReducedMotion: h
					}),
					alt: s.name
				}), c.a.createElement("span", {
					className: Object(m.a)(vo.a.countText, {
						[vo.a.darkMode]: n
					})
				}, Object(bo.b)(null !== (d = null === (i = o.awardCountsById) || void 0 === i ? void 0 : i[s.id]) && void 0 !== d ? d : 0)))
			};
			var go = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				_o = n.n(go);
			const Eo = () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
				className: _o.a.icon
			}, c.a.createElement(Nn.a, null)), c.a.createElement("span", {
				className: _o.a.label
			}, ne.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var Io = n("./src/reddit/components/UserIcon/index.tsx"),
				xo = n("./src/reddit/icons/svgs/Error/index.tsx"),
				yo = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				Oo = n("./src/reddit/components/ContentTooltip/index.tsx"),
				ko = n("./src/reddit/helpers/trackers/gild.ts"),
				To = n("./src/reddit/icons/svgs/Close/index.tsx"),
				wo = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less"),
				jo = n.n(wo);

			function No() {
				return (No = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Mo = {
					height: 280,
					width: 275
				},
				Lo = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: o
					} = e;
					const s = t.awardCountsById,
						r = Object(l.d)(),
						a = Object(nn.a)(),
						i = Object(l.e)(e => Object(be.j)(e, {
							thing: t
						})),
						d = Object(l.e)(e => {
							const n = Object(xe.k)(e);
							return (null == n ? void 0 : n.id) === t.authorId
						}),
						m = dn(),
						u = Object(l.e)(Pn.d),
						p = c.a.useCallback(() => {
							r(Object(ut.i)())
						}, [r]);
					return s && i.length ? c.a.createElement(Oo.a, No({
						className: jo.a.container,
						tooltipId: o,
						tooltipSizeEstimate: Mo,
						defaultTooltipPosition: "top"
					}, m), c.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, c.a.createElement("div", {
						className: jo.a.header
					}, c.a.createElement("span", {
						className: jo.a.title
					}, ne.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), c.a.createElement("button", {
						onClick: p
					}, c.a.createElement(To.a, {
						className: jo.a.closeIcon
					}))), c.a.createElement("div", {
						className: jo.a.awardsList
					}, i.map(e => c.a.createElement("div", {
						key: e.id,
						className: jo.a.award
					}, c.a.createElement("span", null, Object(bo.b)(s[e.id])), c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: jo.a.awardIcon,
						src: Object(ve.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: u
						})
					}), c.a.createElement("span", null, e.name))), !d && c.a.createElement("button", {
						className: jo.a.giveAwardButton,
						onClick: () => {
							p();
							const e = Object(tn.d)(tn.a.GildingFlow, !0);
							return a(Object(ko.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), r(Object(en.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, c.a.createElement(on.a, {
						className: jo.a.awardIcon
					}), c.a.createElement("span", null, ne.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var So = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less"),
				Ro = n.n(So);
			const Ao = () => {},
				Po = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						o = `awards-badge-tooltip-content-${t.id}`,
						s = Object(l.d)(),
						r = Object(nn.a)(),
						a = Object(l.e)(e => Object(be.j)(e, {
							thing: t
						})),
						i = c.a.useMemo(() => a.reduce((e, n) => {
							var o;
							return e + ((null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n.id]) || 0)
						}, 0), [a, t]),
						d = c.a.useMemo(() => !(!Object(x.b)(t) || !t.awardingsByCurrentUser) && a.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [a, t]),
						u = Object(l.e)(Pn.d),
						p = Object(l.e)(e => Object(vn.b)(n)(e)),
						h = c.a.useCallback(() => {
							s(Object(ut.h)({
								tooltipId: n
							}))
						}, [s, n]),
						b = c.a.useCallback(() => {
							s(Object(ut.i)())
						}, [s]);
					c.a.useEffect(() => {
						p && r(Object(bt.k)(t.id))
					}, [t.id, p]);
					const f = a.slice(0, 3);
					return f.length ? c.a.createElement(yo.b, {
						onCloseUserDropdown: b,
						onOpenUserDropdown: Ao,
						dropdownIsOpen: p,
						hoverId: o,
						tooltipId: n
					}, c.a.createElement("button", {
						id: n,
						className: Object(m.a)(Ro.a.badge, {
							[Ro.a.awarded]: d
						}),
						onClick: h
					}, f.map(e => c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: Ro.a.awardIcon,
						src: Object(ve.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: u
						})
					})), c.a.createElement("span", {
						className: Ro.a.countText
					}, ne.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [ne.fbt._plural(i, "number", Object(bo.b)(i))], {
						hk: "34eaW8"
					}))), c.a.createElement(Lo, {
						id: o,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var Do = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				Bo = n.n(Do);
			var Fo = Object(Xn.u)()(Object(l.b)(() => Object(d.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return to(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = to(e, {
						commentId: n
					});
					if (o) return Object(ve.a)(e, {
						award: o,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: q.b,
				commentPermalink: W.m,
				errorMsgs: W.H,
				flair: W.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isEditing: W.z,
				prediction: no.f,
				isSelectedForReply: (e, t) => {
					let {
						commentId: n,
						commentsPageKey: o
					} = t;
					return Object(W.K)(e, {
						commentId: n,
						commentsPageKey: o
					})
				},
				subreddit: Xn.r,
				shouldRenderSystemMessages: eo,
				commentSubmitError: q.c,
				isPendingComment: q.e,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Sn(n),
						s = Rn(n);
					return Object(vn.b)(o)(e) || Object(vn.b)(s)(e)
				}
			}), (e, t) => {
				let {
					commentId: n,
					commentsPageKey: o,
					isLivestreaming: s
				} = t;
				return {
					onSubmitRetry: () => e(Object(ct.n)({
						commentId: n,
						commentsPageKey: o,
						isLivestreaming: s
					}))
				}
			})(e => {
				let {
					associatedAward: t,
					awardIconUrl: n,
					childrenInfo: o,
					comment: s,
					commentPermalink: r,
					commentsPageKey: a,
					commentSubmitError: i,
					errorMsgs: d,
					flair: u,
					isActive: p,
					isEditing: h,
					isDropdownMenuVisible: b,
					isLivestreaming: f = !1,
					isEmbeddedLiveChat: v = !1,
					isPendingComment: C,
					isSelectedForReply: g,
					postId: _,
					prediction: E,
					renderedInOverlay: I,
					sendEvent: x,
					targetComment: y,
					timestampUpdateTrigger: O,
					addToRefList: k,
					onReplyClick: T,
					onSubmitRetry: w,
					shouldRenderSystemMessages: j
				} = e;
				const N = c.a.useRef(null),
					M = c.a.useRef(null),
					[L, S] = c.a.useState(s && s.collapsed),
					[R, A] = c.a.useState(!1),
					[P, D] = c.a.useState(!1),
					B = c.a.useMemo(() => ({
						renderingObjectInfo: s || void 0
					}), [s]),
					F = Object(l.e)(e => s ? Ee(e, s) : []),
					U = () => {
						S(!L)
					};
				if (c.a.useEffect(() => {
						var e;
						M.current && (null === (e = M.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !f && D(!0)
					}, []), c.a.useEffect(() => {
						if (!M.current || f) return;
						const e = M.current;
						let t = 250;
						if (R) {
							t = e.scrollHeight + 10;
							const n = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", n)
							};
							e.addEventListener("transitionend", n)
						}
						e.style.maxHeight = `${t}px`
					}, [R, P, f]), c.a.useEffect(() => {
						var e;
						p && (null === (e = N.current) || void 0 === e || e.focus())
					}, [p]), c.a.useEffect(() => {
						N.current && k && k(N)
					}, [k]), !s) return null;
				const H = s.isSystem,
					V = !s.isDeleted && !H,
					K = !!t,
					G = Object.keys(s.awardCountsById || {}).length > 0,
					W = !!(null == F ? void 0 : F.length);
				return L ? c.a.createElement(at, {
					commentCount: 1,
					onClick: U
				}) : c.a.createElement("div", {
					className: Object(m.a)(Bo.a.container, {
						[Bo.a.livestreaming]: f,
						[Bo.a.selectedForReply]: g,
						[Bo.a.hover]: b,
						[Bo.a.hasError]: Boolean(i)
					}),
					tabIndex: 0,
					ref: N
				}, s.parentId && c.a.createElement("div", {
					className: Bo.a.replyWrapper
				}, c.a.createElement(Gn.a, {
					commentId: s.parentId,
					onReplyClick: e => {
						x(Object(bt.b)(e)), T(e)
					},
					isLivestreaming: f,
					isV2Enabled: !0
				})), c.a.createElement("div", {
					id: y ? "targetComment" : void 0,
					className: Object(m.a)({
						[Bo.a.comment]: !H,
						[Bo.a.systemMessageComment]: H && !f && j,
						[Bo.a.highlighted]: y,
						[Bo.a.expanded]: R
					})
				}, V && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Bo.a.avatar
				}, c.a.createElement(Io.a, {
					className: Object(m.a)(Bo.a.icon),
					iconUrl: s.profileImage || s.authorIconImage,
					userName: s.author,
					isNSFW: Boolean(s.profileOver18 || s.authorIconIsNSFW)
				})), c.a.createElement("div", null, c.a.createElement(We.a, {
					className: Bo.a.TopMeta,
					childrenInfo: o,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: s,
					commentsPageKey: a,
					compact: !0,
					flair: u,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: f,
					isEmbeddedLiveChat: v,
					renderedInOverlay: I,
					hideAwards: !0
				}), c.a.createElement("span", {
					className: Bo.a.timestamp
				}, c.a.createElement(yt.d, {
					seconds: s.created
				}))), !h && c.a.createElement("div", {
					ref: M,
					className: Object(m.a)(Bo.a.commentBody, {
						[Bo.a.expanded]: R
					})
				}, K && t && f ? c.a.createElement(nt, {
					award: t,
					comment: s,
					iconUrl: n
				}) : E ? c.a.createElement(qe.a, {
					comment: s,
					prediction: E
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Je.b, {
					className: Object(m.a)(Bo.a.richTextJson, {
						[Bo.a.livestreaming]: f
					}),
					content: Object(ze.a)(s),
					rtJsonElementProps: B,
					useExplicitTextColor: f
				}), (G || W) && c.a.createElement("div", {
					className: Bo.a.reactions
				}, G && c.a.createElement(Po, {
					postOrComment: s
				}), W && F.map(e => {
					let {
						award: t
					} = e;
					return c.a.createElement(Co, {
						key: t.id,
						enforceDarkMode: f,
						comment: s,
						reaction: t
					})
				})), i && c.a.createElement("div", {
					className: Bo.a.error
				}, c.a.createElement(xo.a, null), c.a.createElement("span", null, ne.fbt._("Message failed to send.", null, {
					hk: "24xGQi"
				})), c.a.createElement("button", {
					className: Bo.a.retryButton,
					onClick: w
				}, ne.fbt._("Retry", null, {
					hk: "37t7Iq"
				}))), !C && !i && c.a.createElement(Kn, {
					className: Bo.a.menu,
					comment: s,
					commentPermalink: r,
					commentsPageKey: a,
					isLivestreaming: f,
					timestampUpdateTrigger: O
				}))), h && c.a.createElement(Jn.a, {
					isV2: !0,
					isLivestreaming: f,
					isEmbeddedLiveChat: v,
					postId: _,
					sendEvent: x,
					draftKey: Object(Ke.a)(Dt.c.edit, s.id),
					commentsPageKey: a,
					isEditing: h,
					comment: s
				})), s.isDeleted && c.a.createElement(Eo, null), V && !h && d && d.map((e, t) => c.a.createElement(Yn.b, {
					key: `${t}-${e}`,
					className: Bo.a.errorText
				}, e)), !h && P && !R && c.a.createElement("button", {
					type: "button",
					className: Object(m.a)(Bo.a.readMoreButton, {
						[Bo.a.livestreaming]: f
					}),
					onClick: () => {
						A(!R)
					}
				}, ne.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), H && !f && j && c.a.createElement(zn, {
					comment: s
				})))
			}));
			const Uo = e => {
				return Object(l.e)(fe.f) ? c.a.createElement(Fo, e) : c.a.createElement(ho, e)
			};
			var Ho = n("./node_modules/lodash/isEqual.js"),
				Vo = n.n(Ho),
				Ko = n("./src/reddit/controls/Button/index.tsx"),
				Go = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Wo = n.n(Go);
			const qo = Ve.a.div("ButtonWrapper", Wo.a),
				Qo = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(m.a)(Wo.a.ChunkPlaceholder, {
							[Wo.a.top]: t
						})
					}, ne.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				zo = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: o,
						setRef: s,
						...r
					} = e;
					return c.a.createElement("div", {
						ref: s,
						className: Object(m.a)(t, {
							[Wo.a.ScrollerWrapper]: !n,
							[Wo.a.LivestreamingWrapper]: n,
							[Wo.a.loading]: o
						})
					}, !o && r.isPrevLoading && !n && c.a.createElement(Qo, {
						top: !0
					}), r.children, !o && r.isNextLoading && !n && c.a.createElement(Qo, null))
				};
			class Jo extends c.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = c.a.createRef(), this._refBeforeActiveComments = c.a.createRef(), this._refNextActiveComments = c.a.createRef(), this._refActiveComments = c.a.createRef(), this.resizeObserver = null, this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return e >= t.scrolledPosition()
					}, this.scrollToLastBottomChunk = () => {
						const e = this.state.chunks.length - 1;
						e !== this.state.activeChunkIndex ? this.setState({
							activeChunkIndex: e
						}, () => {
							this.scrollToBottom(), this.hideNewComments(!0)
						}) : (this.scrollToBottom(), this.hideNewComments(!0))
					}, this.addScrollListener = () => this.$ref && this.$ref.addEventListener("wheel", this.onScroll), this.removeScrollListener = () => this.$ref && this.$ref.removeEventListener("wheel", this.onScroll), this.preventParentScroll = e => {
						e.preventDefault();
						const t = this.$ref && this.$ref.scrollTop + e.deltaY;
						this.scrollTo(t || 0)
					}, this.shouldLoadMoreData = () => {
						this.props.loadMore && this.scrolledToTop() && this.props.loadMore(), this.loadedMore = !(!this.scrolledToTop() || !this.props.hasMoreComments)
					}, this.onScroll = e => {
						this.preventParentScroll(e), this.setNextTopChunk(), this.setNextBottomChunk(), this.shouldLoadMoreData(), this.hideNewComments(), this.isScrolledToBottomStateOutOfSync() && this.setState({
							shouldAutomaticallyScrollToBottom: !1
						}), !this.state.shouldAutomaticallyScrollToBottom && this.scrolledToBottom() && this.setState({
							shouldAutomaticallyScrollToBottom: !0
						})
					}, this.state = {
						initialized: !1,
						list: this.props.children,
						chunks: this.splitChunks([...this.props.children]),
						activeChunkIndex: 0,
						newCommentsCount: 0,
						shouldAutomaticallyScrollToBottom: !0
					}
				}
				get $ref() {
					return this._ref.current
				}
				get $refBeforeActiveComments() {
					return this._refBeforeActiveComments.current
				}
				get $refNextActiveComments() {
					return this._refNextActiveComments.current
				}
				scrollTo(e) {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: e
					}) : this.$ref.scrollTop = e)
				}
				scrollToBottom() {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: this.scrollHeight() - this.clientHeight()
					}) : this.$ref.scrollTop = this.scrollHeight(), this.setState({
						shouldAutomaticallyScrollToBottom: !0
					}))
				}
				scrolledToFirstTopChunk() {
					return !this.props.hasMoreComments && this.state.activeChunkIndex <= 1
				}
				scrolledToLastBottomChunk() {
					const e = this.state.chunks.length - 1;
					return this.state.activeChunkIndex + 1 >= e
				}
				scrollToTargetComment(e) {
					const t = Math.floor(this.clientHeight() / 2);
					if (void 0 !== e) return void this.scrollTo(e - t);
					const {
						targetCommentIndex: n,
						children: o
					} = this.props;
					if (o && o.length && void 0 !== n && o[n]) {
						const e = Math.floor(n / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const o = document.querySelector("#targetComment").offsetTop;
						o > t ? this.scrollTo(o - t) : this.scrollTo(o)
					}
				}
				isScrolledToBottomStateOutOfSync() {
					return this.state.shouldAutomaticallyScrollToBottom && !this.scrolledToBottom()
				}
				hideNewComments(e) {
					(this.state.newCommentsCount > 0 && this.scrolledToBottom() || e) && this.setState({
						newCommentsCount: 0
					})
				}
				splitChunks(e) {
					const t = [];
					for (; e.length;) t.push(e.splice(0, this.chunkSize));
					return t
				}
				setNextBottomScroll() {
					const e = this.$refNextActiveComments ? this.$refNextActiveComments.clientHeight : 0;
					this.scrollTo(this.scrollHeight() - this.clientHeight() - e)
				}
				setNextBottomChunk() {
					if (this.scrolledToBottom()) {
						const e = this.state.activeChunkIndex + 1,
							t = this.state.chunks.length - 1,
							n = e < t ? e : t;
						this.setState({
							activeChunkIndex: n
						}, this.setNextBottomScroll)
					}
				}
				setNextTopScroll() {
					this.scrollTo(this.$refBeforeActiveComments && this.$refBeforeActiveComments.clientHeight || 0)
				}
				setNextTopChunk() {
					if (this.scrolledToTop()) {
						const e = this.state.activeChunkIndex - 1,
							t = this.state.chunks.length - 1,
							n = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: n
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							n = this.state.activeChunkIndex + e;
						if (e > 1) return n
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView(), window && window.ResizeObserver && this._refActiveComments.current && (this.resizeObserver = new ResizeObserver(() => {
						this.isScrolledToBottomStateOutOfSync() && this.scrollToLastBottomChunk()
					}), this.resizeObserver.observe(this._refActiveComments.current))
				}
				componentWillUnmount() {
					this.removeScrollListener(), this.resizeObserver && this.resizeObserver.disconnect()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !Vo()(_()(e.children), _()(this.props.children)) || !Vo()(a()(e.children), a()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, n) {
					if (n && n.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							o = this.getChunkIndexOnUpdate(e, t),
							s = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: o || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== s || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + s
						}, () => {
							o && this.setNextTopScroll(), n.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, n.scrolledBottom && s > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(m.a)([Wo.a.NewComments, Wo.a.show]) : Wo.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(zo, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, c.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: Wo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						ref: this._refActiveComments,
						className: Wo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Wo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(qo, null, c.a.createElement(Ko.l, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", ne.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [ne.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Xo = Jo,
				Yo = n("./src/reddit/selectors/posts.ts"),
				Zo = n("./src/reddit/components/CommentsChat/index.m.less"),
				$o = n.n(Zo);
			const es = 6e4,
				ts = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				ns = Object(d.c)({
					blockedRedditors: Ft.a,
					blockedRedditorsPending: Ft.b,
					chatCommentLinks: W.g,
					isPending: W.d,
					liveCommentsWebsocket: Yo.E,
					moreCommentsLink: W.G,
					isCommentReactionStreamingKillSwitchEnabled: fe.e,
					currentUserId: xe.i
				}),
				os = Object(l.b)(ns, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(ee(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						F(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(v.n)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(f.g)()),
					loadComments: async () => await e(Object(te.commentsPageDataRequested)(t.postId, void 0, {
						sort: u.u.CHAT,
						comment_awardings_by_current_user: !0
					}, u.u.CHAT)),
					fetchAvailableReactionAwards: async t => e(Re(t)),
					processReactionAwardStreamData: t => e(Se(t))
				}));
			class ss extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.handleReactionStreamData = this.handleReactionStreamData.bind(this), this.sendViewLastMessageTelemetry = s()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now(),
						realtimeGQLVariables: void 0
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(h.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, es)
				}
				expandComment(e) {
					this.setState({
						expandedCommentIds: [...this.state.expandedCommentIds, e]
					})
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentsPageKey: t,
						liveCommentsWebsocket: n,
						loadComments: o,
						onLiveCommentsSubscribe: s,
						postId: r
					} = this.props;
					n && (e && o(), s(t, n, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = n)
				}
				componentDidMount() {
					const {
						fetchAvailableReactionAwards: e,
						subredditId: t
					} = this.props;
					e(t), this.updateRealtimeGQLVariables()
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: n,
						blockedRedditorsPending: o,
						chatCommentLinks: s,
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks !== s || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: r,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && r && (i(s, r, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = r), this.updateRealtimeGQLVariables()), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							o = {};
						n.forEach(e => o[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const n = o[t];
								return !e.has(n)
							})
						})
					}
					if (this.deferTimestampUpdate(), o) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(o), o && n.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				updateRealtimeGQLVariables() {
					const {
						postId: e
					} = this.props;
					this.setState({
						realtimeGQLVariables: {
							input: {
								channel: {
									teamOwner: "CHAT",
									category: "COMMENT_REACTIONS",
									postID: e
								}
							}
						}
					})
				}
				handleReactionStreamData(e) {
					var t, n;
					const {
						processReactionAwardStreamData: o,
						currentUserId: s
					} = this.props;
					s !== (null === (n = null === (t = null == e ? void 0 : e.subscribe) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.userID) && o(e)
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: n,
						sendEvent: o
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), o(Object(bt.j)("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = a()(e);
					(null == n ? void 0 : n.id) && t(Object(bt.c)(n.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							n = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(n), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, n = t && document.querySelector("#targetComment");
					n && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(n.offsetTop)
				}
				render() {
					const {
						blockedRedditors: e,
						chatCommentLinks: t,
						className: n,
						commentId: o,
						commentsPageKey: s,
						emptyStateClassName: r,
						isLivestreaming: a,
						isEmbeddedLiveChat: i,
						isLoading: l,
						isPending: d,
						postId: u,
						renderedInOverlay: p,
						sendEvent: h,
						isCommentReactionStreamingKillSwitchEnabled: f
					} = this.props, {
						expandedCommentIds: v,
						targetCommentIndex: C,
						timestampUpdateTrigger: g,
						realtimeGQLVariables: _
					} = this.state, E = !(t && t.length || l || d);
					return c.a.createElement(c.a.Fragment, null, !f && _ && c.a.createElement(b.a, {
						variables: _,
						onData: this.handleReactionStreamData,
						queryKey: "liveChatCommentReactions"
					}), E ? c.a.createElement(Fe.c, {
						className: Object(m.a)(r, {
							[$o.a.EmbeddedLiveChatScroller]: i
						}),
						isChat: !0
					}) : c.a.createElement(Xo, {
						className: Object(m.a)(n, {
							[$o.a.EmbeddedLiveChatScroller]: i
						}),
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: l || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: C,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => ts(e.ids, v, t) ? c.a.createElement(at, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Uo, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: a,
						isEmbeddedLiveChat: i,
						postId: u,
						renderedInOverlay: !!p,
						sendEvent: h,
						timestampUpdateTrigger: g,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = os(Object(wt.c)(ss))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				C = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				g = Object(l.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: a,
						onClick: i,
						hideCaret: l
					} = e;
					return r.a.createElement("div", {
						onClick: i,
						className: Object(c.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === s,
							[b.a.caretOnLeft]: "left" === s,
							[b.a.caretOnRight]: "right" === s,
							[b.a.caretOnBottom]: "bottom" === s,
							[b.a.hideCaret]: l
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": a && a[s] ? a[s] : Object(u.a)(e).body
						}
					}, t)
				}),
				_ = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				E = Object(m.a)(g, [o.a.Click, o.a.Keydown]),
				I = Object(a.b)(_);
			class x extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						d.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const o = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									s = o.left > t.width;
									break;
								case "right":
									s = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = o.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(E, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = I(x)
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				l = n.n(c);
			const d = a.a.span("metaText", l.a),
				m = e => r.a.createElement(d, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: s,
						...a
					} = e;
					const c = Object(i.b)(n),
						l = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? l : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(d, a, m)
				},
				p = e => r.a.createElement(d, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const l = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.mb.POST
			}), d = async (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.mb.POST
			}), m = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.mb.POST
			}), u = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.mb.POST
			}), p = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: s.mb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				i = (n("./src/redditGQL/operations/AvailableAwards.json"), n("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = n("./src/redditGQL/operations/GiveAward.json"),
				l = n("./src/redditGQL/operations/RemoveAward.json");
			const d = async (e, t, n) => {
				var a;
				const i = await Object(o.a)(e, {
					...c,
					variables: {
						input: t
					}
				}, {
					query: n ? {} : Object(r.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (a = i.body.data.giveAward.errors) || void 0 === a ? void 0 : a.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, m = async (e, t) => {
				var n, r, a;
				const i = await Object(o.a)(e, {
					...l,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (a = null === (r = null === (n = i.body.data.removeAward.errors) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, u = async (e, t, n) => {
				const c = await Object(o.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(a.a)(t.thingId)
					}
				}, {
					query: n ? {} : Object(r.b)()
				});
				if (!Object(s.c)(c)) throw new Error("An unknown error occurred");
				if (c.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				if (c.body.data.commentById) {
					const {
						identity: e,
						commentById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			}));
			const o = 500,
				s = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < o ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				a = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const o = r(t, n);
					return e.slice(0, o)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case s.J.AUTHORIZATION_ERROR:
						return n ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.J.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.J.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.J.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.J.LIKELY_UBLOCK_ERROR:
						return o.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const c = Object(s.e)(i, {
							commentId: e
						}),
						l = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.o(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(o.g)(c) : void 0,
							achievementFlairId: null == l ? void 0 : l.type,
							achievementFlairTitle: null == l ? void 0 : l.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.o(e)
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("i", l({}, e, {
				className: Object(r.a)(Object(a.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, s.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), s.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Distinguish/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M11.9996 24C11.809 24.0005 11.6234 23.9383 11.4716 23.8229C11.3198 23.7075 11.2102 23.5454 11.1596 23.3616C10.4517 20.854 9.11229 18.5699 7.26953 16.7278C5.42677 14.8857 3.14226 13.5471 0.634422 12.84C0.452558 12.7871 0.292771 12.6766 0.179072 12.5251C0.065374 12.3737 0.00390625 12.1894 0.00390625 12C0.00390625 11.8106 0.065374 11.6263 0.179072 11.4748C0.292771 11.3234 0.452558 11.2129 0.634422 11.16C3.14231 10.4518 5.42672 9.11245 7.2694 7.26977C9.11209 5.42709 10.4515 3.14267 11.1596 0.634788C11.2125 0.452924 11.323 0.293137 11.4745 0.179439C11.6259 0.0657402 11.8102 0.00427246 11.9996 0.00427246C12.189 0.00427246 12.3733 0.0657402 12.5248 0.179439C12.6763 0.293137 12.7867 0.452924 12.8396 0.634788C13.5469 3.1431 14.886 5.42795 16.7289 7.27076C18.5717 9.11357 20.8565 10.4527 23.3648 11.16C23.5467 11.2129 23.7065 11.3234 23.8202 11.4748C23.9339 11.6263 23.9953 11.8106 23.9953 12C23.9953 12.1894 23.9339 12.3737 23.8202 12.5251C23.7065 12.6766 23.5467 12.7871 23.3648 12.84C20.8575 13.5484 18.5737 14.8878 16.7315 16.7302C14.8892 18.5726 13.5501 20.8566 12.842 23.364C12.7911 23.5479 12.681 23.7099 12.5287 23.8248C12.3764 23.9398 12.1904 24.0014 11.9996 24ZM2.77042 12C4.8502 12.8389 6.73946 14.0886 8.32522 15.6744C9.91099 17.2602 11.1607 19.1494 11.9996 21.2292C12.8385 19.1494 14.0883 17.2602 15.674 15.6744C17.2598 14.0886 19.149 12.8389 21.2288 12C19.149 11.1611 17.2598 9.91136 15.674 8.32559C14.0883 6.73983 12.8385 4.85057 11.9996 2.77079C11.1607 4.85057 9.91099 6.73983 8.32522 8.32559C6.73946 9.91136 4.8502 11.1611 2.77042 12Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, n) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, s.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, s.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Error/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, e), s.a.createElement("path", {
				d: "M8.00001 9.00001C7.85187 8.9991 7.70916 8.94414 7.59868 8.84544C7.4882 8.74675 7.41755 8.61111 7.40001 8.46401L7.00001 4.86401C6.99239 4.78039 7.00194 4.6961 7.02808 4.6163C7.05422 4.53651 7.09639 4.46291 7.15201 4.40001C7.20838 4.33699 7.27743 4.28659 7.35464 4.25212C7.43184 4.21766 7.51546 4.1999 7.60001 4.20001H8.40001C8.48456 4.1999 8.56818 4.21766 8.64539 4.25212C8.7226 4.28659 8.79165 4.33699 8.84801 4.40001C8.90363 4.46291 8.94581 4.53651 8.97195 4.6163C8.99809 4.6961 9.00764 4.78039 9.00001 4.86401L8.60001 8.46401C8.58247 8.61111 8.51183 8.74675 8.40135 8.84544C8.29087 8.94414 8.14815 8.9991 8.00001 9.00001Z"
			}), s.a.createElement("path", {
				d: "M7.62171 11.7766C7.738 11.8391 7.86796 11.8719 8 11.872C8.10585 11.8716 8.21055 11.8501 8.30805 11.809C8.40555 11.7678 8.49391 11.7076 8.568 11.632C8.717 11.4821 8.80064 11.2794 8.80064 11.068C8.80064 10.8567 8.717 10.6539 8.568 10.504C8.49363 10.429 8.40515 10.3695 8.30766 10.3289C8.21018 10.2883 8.10561 10.2674 8 10.2674C7.89439 10.2674 7.78983 10.2883 7.69234 10.3289C7.59485 10.3695 7.50637 10.429 7.432 10.504C7.36004 10.5777 7.303 10.6647 7.264 10.76C7.2125 10.8816 7.1919 11.0141 7.20404 11.1455C7.21617 11.277 7.26066 11.4035 7.33354 11.5136C7.40642 11.6237 7.50542 11.714 7.62171 11.7766Z"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.00001 15.4C6.53643 15.4 5.10571 14.966 3.88879 14.1529C2.67187 13.3398 1.72339 12.184 1.1633 10.8319C0.603212 9.47969 0.456668 7.9918 0.742198 6.55634C1.02773 5.12088 1.73251 3.80233 2.76742 2.76742C3.80233 1.73251 5.12088 1.02773 6.55634 0.742198C7.9918 0.456668 9.47969 0.603212 10.8319 1.1633C12.184 1.72339 13.3398 2.67187 14.1529 3.88879C14.966 5.10571 15.4 6.53643 15.4 8.00001C15.3979 9.96196 14.6176 11.843 13.2303 13.2303C11.843 14.6176 9.96196 15.3979 8.00001 15.4ZM8.00001 1.80001C6.77377 1.80001 5.57506 2.16363 4.55547 2.8449C3.53589 3.52616 2.74122 4.49447 2.27196 5.62737C1.80269 6.76027 1.67991 8.00689 1.91914 9.20957C2.15837 10.4123 2.74886 11.517 3.61595 12.3841C4.48303 13.2512 5.58777 13.8416 6.79045 14.0809C7.99313 14.3201 9.23975 14.1973 10.3726 13.7281C11.5055 13.2588 12.4739 12.4641 13.1551 11.4445C13.8364 10.425 14.2 9.22625 14.2 8.00001C14.1979 6.35632 13.544 4.78055 12.3817 3.61829C11.2195 2.45602 9.6437 1.80213 8.00001 1.80001Z"
			}))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), s.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), s.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), s.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Reply2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, e), s.a.createElement("path", {
				d: "M10.6398 5.60011H2.4518L6.471 1.58171L5.7598 0.874512L0.8462 5.79211C0.799757 5.83854 0.762915 5.89367 0.73778 5.95434C0.712644 6.01501 0.699707 6.08004 0.699707 6.14571C0.699707 6.21138 0.712644 6.27641 0.73778 6.33708C0.762915 6.39775 0.799757 6.45288 0.8462 6.49931L5.7598 11.4161L6.4678 10.7089L2.3614 6.60011H10.6398C11.5757 6.59308 12.4762 6.95765 13.1437 7.61383C13.8111 8.27001 14.1909 9.16419 14.1998 10.1001V13.6001H15.1998V10.1001C15.1905 8.8991 14.7052 7.75083 13.8503 6.90721C12.9954 6.06358 11.8408 5.59351 10.6398 5.60011Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, s.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/UserBlock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, e), s.a.createElement("path", {
				d: "M22.06 22.5599L22.0756 22.5443L2.98242 3.44869L1.91922 4.51069L10.612 13.1999H9.04482C6.98492 13.182 5.00204 13.9819 3.5312 15.4242C2.06037 16.8664 1.2217 18.8332 1.19922 20.8931V21.4715C1.20144 21.8256 1.34409 22.1644 1.59584 22.4134C1.8476 22.6625 2.18789 22.8015 2.54202 22.7999H20.212L21.016 23.6039L21.9292 22.6895C21.991 22.6655 22.0515 22.6382 22.1104 22.6079L22.06 22.5599ZM2.70042 21.2999V20.8931C2.72256 19.2312 3.40291 17.6459 4.59226 16.4849C5.7816 15.3239 7.38285 14.6819 9.04482 14.6999H12.112L18.712 21.2999H2.70042ZM16.1992 13.3067C17.8371 13.5564 19.3524 14.3229 20.5239 15.4944C21.6954 16.666 22.4619 18.1812 22.7116 19.8191L19.5916 16.6991C19.4956 16.5971 19.3984 16.4975 19.2952 16.4027L16.1992 13.3067ZM7.67922 4.78669L6.50322 3.60709C6.89178 2.70868 7.49425 1.91898 8.25807 1.30686C9.02189 0.694742 9.92387 0.278789 10.8853 0.0952792C11.8468 -0.0882305 12.8386 -0.0337233 13.7742 0.254047C14.7098 0.541818 15.5607 1.05411 16.2529 1.74625C16.945 2.43839 17.4573 3.28936 17.7451 4.22493C18.0328 5.16051 18.0873 6.15228 17.9038 7.11376C17.7203 8.07524 17.3044 8.97722 16.6922 9.74104C16.0801 10.5049 15.2904 11.1073 14.392 11.4959L13.21 10.3199C13.9672 10.1114 14.6564 9.70784 15.2089 9.14961C15.7614 8.59138 16.1577 7.89799 16.3583 7.13867C16.559 6.37935 16.5569 5.58068 16.3523 4.82241C16.1477 4.06414 15.7478 3.37282 15.1924 2.81747C14.6371 2.26212 13.9458 1.86219 13.1875 1.6576C12.4292 1.45301 11.6306 1.45094 10.8712 1.65158C10.1119 1.85222 9.41853 2.24855 8.8603 2.80101C8.30207 3.35346 7.89854 4.0427 7.69002 4.79989L7.67922 4.78669Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			n("./src/reddit/selectors/user.ts");
			const o = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				r = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"e10d7f0411a4"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.49094bc919e3b8773e2c.js.map