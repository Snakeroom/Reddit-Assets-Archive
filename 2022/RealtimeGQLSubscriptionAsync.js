// https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.57f6e310e87e5d462d19.js
// Retrieved at 1/26/2022, 8:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RealtimeGQLSubscriptionAsync"], {
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
				var u = t.length;
				for (; u > s && i(t[u - 1]);) --u;
				return t.slice(s, u).join("\n")
			}, t.getBlockStringIndentation = r, t.printBlockString = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = -1 === e.indexOf("\n"),
					r = " " === e[0] || "\t" === e[0],
					o = '"' === e[e.length - 1],
					s = "\\" === e[e.length - 1],
					u = !i || o || s || n,
					a = "";
				!u || i && r || (a += "\n" + t);
				a += t ? e.replace(/\n/g, "\n" + t) : e, u && (a += "\n");
				return '"""' + a.replace(/"""/g, '\\"""') + '"""'
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
					return u(e.definitions, "\n\n") + "\n"
				},
				OperationDefinition: function(e) {
					var t = e.operation,
						n = e.name,
						i = c("(", u(e.variableDefinitions, ", "), ")"),
						r = u(e.directives, " "),
						o = e.selectionSet;
					return n || r || i || "query" !== t ? u([t, u([n, i]), r, o], " ") : o
				},
				VariableDefinition: function(e) {
					var t = e.variable,
						n = e.type,
						i = e.defaultValue,
						r = e.directives;
					return t + ": " + n + c(" = ", i) + c(" ", u(r, " "))
				},
				SelectionSet: function(e) {
					return a(e.selections)
				},
				Field: function(e) {
					var t = e.alias,
						n = e.name,
						i = e.arguments,
						r = e.directives,
						o = e.selectionSet,
						s = c("", t, ": ") + n,
						a = s + c("(", u(i, ", "), ")");
					return a.length > 80 && (a = s + c("(\n", l(u(i, "\n")), "\n)")), u([a, u(r, " "), o], " ")
				},
				Argument: function(e) {
					return e.name + ": " + e.value
				},
				FragmentSpread: function(e) {
					return "..." + e.name + c(" ", u(e.directives, " "))
				},
				InlineFragment: function(e) {
					var t = e.typeCondition,
						n = e.directives,
						i = e.selectionSet;
					return u(["...", c("on ", t), u(n, " "), i], " ")
				},
				FragmentDefinition: function(e) {
					var t = e.name,
						n = e.typeCondition,
						i = e.variableDefinitions,
						r = e.directives,
						o = e.selectionSet;
					return "fragment ".concat(t).concat(c("(", u(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(c("", u(r, " "), " ")) + o
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
					return "[" + u(e.values, ", ") + "]"
				},
				ObjectValue: function(e) {
					return "{" + u(e.fields, ", ") + "}"
				},
				ObjectField: function(e) {
					return e.name + ": " + e.value
				},
				Directive: function(e) {
					return "@" + e.name + c("(", u(e.arguments, ", "), ")")
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
					return u(["schema", u(t, " "), a(n)], " ")
				})),
				OperationTypeDefinition: function(e) {
					return e.operation + ": " + e.type
				},
				ScalarTypeDefinition: s((function(e) {
					return u(["scalar", e.name, u(e.directives, " ")], " ")
				})),
				ObjectTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return u(["type", t, c("implements ", u(n, " & ")), u(i, " "), a(r)], " ")
				})),
				FieldDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.type,
						r = e.directives;
					return t + (d(n) ? c("(\n", l(u(n, "\n")), "\n)") : c("(", u(n, ", "), ")")) + ": " + i + c(" ", u(r, " "))
				})),
				InputValueDefinition: s((function(e) {
					var t = e.name,
						n = e.type,
						i = e.defaultValue,
						r = e.directives;
					return u([t + ": " + n, c("= ", i), u(r, " ")], " ")
				})),
				InterfaceTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return u(["interface", t, c("implements ", u(n, " & ")), u(i, " "), a(r)], " ")
				})),
				UnionTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.types;
					return u(["union", t, u(n, " "), i && 0 !== i.length ? "= " + u(i, " | ") : ""], " ")
				})),
				EnumTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.values;
					return u(["enum", t, u(n, " "), a(i)], " ")
				})),
				EnumValueDefinition: s((function(e) {
					return u([e.name, u(e.directives, " ")], " ")
				})),
				InputObjectTypeDefinition: s((function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return u(["input", t, u(n, " "), a(i)], " ")
				})),
				DirectiveDefinition: s((function(e) {
					var t = e.name,
						n = e.arguments,
						i = e.repeatable,
						r = e.locations;
					return "directive @" + t + (d(n) ? c("(\n", l(u(n, "\n")), "\n)") : c("(", u(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + u(r, " | ")
				})),
				SchemaExtension: function(e) {
					var t = e.directives,
						n = e.operationTypes;
					return u(["extend schema", u(t, " "), a(n)], " ")
				},
				ScalarTypeExtension: function(e) {
					return u(["extend scalar", e.name, u(e.directives, " ")], " ")
				},
				ObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return u(["extend type", t, c("implements ", u(n, " & ")), u(i, " "), a(r)], " ")
				},
				InterfaceTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						i = e.directives,
						r = e.fields;
					return u(["extend interface", t, c("implements ", u(n, " & ")), u(i, " "), a(r)], " ")
				},
				UnionTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.types;
					return u(["extend union", t, u(n, " "), i && 0 !== i.length ? "= " + u(i, " | ") : ""], " ")
				},
				EnumTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.values;
					return u(["extend enum", t, u(n, " "), a(i)], " ")
				},
				InputObjectTypeExtension: function(e) {
					var t = e.name,
						n = e.directives,
						i = e.fields;
					return u(["extend input", t, u(n, " "), a(i)], " ")
				}
			};

			function s(e) {
				return function(t) {
					return u([t.description, e(t)], "\n")
				}
			}

			function u(e) {
				var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return null !== (t = null == e ? void 0 : e.filter((function(e) {
					return e
				})).join(n)) && void 0 !== t ? t : ""
			}

			function a(e) {
				return c("{\n", l(u(e, "\n")), "\n}")
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
				for (var n = null, r = 0, o = e.definitions; r < o.length; r++) {
					var s, u = o[r];
					if (u.kind === i.Kind.OPERATION_DEFINITION)
						if (null == t) {
							if (n) return null;
							n = u
						} else if ((null === (s = u.name) || void 0 === s ? void 0 : s.value) === t) return u
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
									a(i.next(e))
								} catch (t) {
									o(t)
								}
							}

							function u(e) {
								try {
									a(i.throw(e))
								} catch (t) {
									o(t)
								}
							}

							function a(e) {
								var t;
								e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
									e(t)
								}))).then(s, u)
							}
							a((i = i.apply(e, t || [])).next())
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
							next: u(0),
							throw: u(1),
							return: u(2)
						}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
							return this
						}), o;

						function u(o) {
							return function(u) {
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
									} catch (u) {
										o = [6, u], i = 0
									} finally {
										n = r = 0
									}
									if (5 & o[0]) throw o[1];
									return {
										value: o[0] ? o[1] : void 0,
										done: !0
									}
								}([o, u])
							}
						}
					},
					s = this && this.__spreadArrays || function() {
						for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
						var i = Array(e),
							r = 0;
						for (t = 0; t < n; t++)
							for (var o = arguments[t], s = 0, u = o.length; s < u; s++, r++) i[r] = o[s];
						return i
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SubscriptionClient = void 0;
				var u = void 0 !== e ? e : "undefined" != typeof window ? window : {},
					a = u.WebSocket || u.MozWebSocket,
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
					_ = function() {
						function e(e, t, n, i) {
							var r = t || {},
								o = r.connectionCallback,
								s = void 0 === o ? void 0 : o,
								u = r.connectionParams,
								p = void 0 === u ? {} : u,
								d = r.minTimeout,
								f = void 0 === d ? m.MIN_WS_TIMEOUT : d,
								h = r.timeout,
								b = void 0 === h ? m.WS_TIMEOUT : h,
								y = r.reconnect,
								_ = void 0 !== y && y,
								O = r.reconnectionAttempts,
								g = void 0 === O ? 1 / 0 : O,
								T = r.lazy,
								I = void 0 !== T && T,
								E = r.inactivityTimeout,
								N = void 0 === E ? 0 : E,
								S = r.wsOptionArguments,
								C = void 0 === S ? [] : S;
							if (this.wsImpl = n || a, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = i || v.GRAPHQL_WS, this.connectionCallback = s, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = f, this.wsTimeout = b, this.unsentMessagesQueue = [], this.reconnect = _, this.reconnecting = !1, this.reconnectionAttempts = g, this.lazy = !!I, this.inactivityTimeout = N, this.closedByUser = !1, this.backoff = new c({
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
								r = this.executeOperation.bind(this),
								o = this.unsubscribe.bind(this);
							return this.clearInactivityTimeout(), (t = {})[b.default] = function() {
								return this
							}, t.subscribe = function(t, s, u) {
								var a = i(t, s, u);
								return n = r(e, (function(e, t) {
									null === e && null === t ? a.complete && a.complete() : e ? a.error && a.error(e[0]) : a.next && a.next(t)
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
								var r, o, u;
								r = s(t.middlewares), o = t, (u = function(t) {
									if (t) i(t);
									else if (r.length > 0) {
										var s = r.shift();
										s && s.applyMiddleware.apply(o, [e, u])
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
								r = e.operationName;
							if (!n) throw new Error("Must provide a query.");
							if (!t) throw new Error("Must provide an handler.");
							if (!p.default(n) && !h.getOperationAST(n, r) || r && !p.default(r) || i && !d.default(i)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
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
							} catch (u) {
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
									var r = this.operations[n].handler;
									delete this.operations[n], r.call(this, null, null);
									break;
								case y.default.GQL_ERROR:
									this.operations[n].handler(this.formatErrors(t.payload), null), delete this.operations[n];
									break;
								case y.default.GQL_DATA:
									var o = t.payload.errors ? i(i({}, t.payload), {
										errors: this.formatErrors(t.payload.errors)
									}) : t.payload;
									this.operations[n].handler(null, o);
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
				t.SubscriptionClient = _
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

			function u(e, t, n, i, o) {
				if ("function" != typeof n) throw new TypeError("The listener must be a function");
				var u = new s(n, i || e, o),
					a = r ? r + t : t;
				return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], u] : e._events[a].push(u) : (e._events[a] = u, e._eventsCount++), e
			}

			function a(e, t) {
				0 == --e._eventsCount ? e._events = new o : delete e._events[t]
			}

			function c() {
				this._events = new o, this._eventsCount = 0
			}
			Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), c.prototype.eventNames = function() {
				var e, t, n = [];
				if (0 === this._eventsCount) return n;
				for (t in e = this._events) i.call(e, t) && n.push(r ? t.slice(1) : t);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
			}, c.prototype.listeners = function(e) {
				var t = r ? r + e : e,
					n = this._events[t];
				if (!n) return [];
				if (n.fn) return [n.fn];
				for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
				return s
			}, c.prototype.listenerCount = function(e) {
				var t = r ? r + e : e,
					n = this._events[t];
				return n ? n.fn ? 1 : n.length : 0
			}, c.prototype.emit = function(e, t, n, i, o, s) {
				var u = r ? r + e : e;
				if (!this._events[u]) return !1;
				var a, c, l = this._events[u],
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
					for (c = 1, a = new Array(p - 1); c < p; c++) a[c - 1] = arguments[c];
					l.fn.apply(l.context, a)
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
							if (!a)
								for (d = 1, a = new Array(p - 1); d < p; d++) a[d - 1] = arguments[d];
							l[c].fn.apply(l[c].context, a)
					}
				}
				return !0
			}, c.prototype.on = function(e, t, n) {
				return u(this, e, t, n, !1)
			}, c.prototype.once = function(e, t, n) {
				return u(this, e, t, n, !0)
			}, c.prototype.removeListener = function(e, t, n, i) {
				var o = r ? r + e : e;
				if (!this._events[o]) return this;
				if (!t) return a(this, o), this;
				var s = this._events[o];
				if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || a(this, o);
				else {
					for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
					c.length ? this._events[o] = 1 === c.length ? c[0] : c : a(this, o)
				}
				return this
			}, c.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = r ? r + e : e, this._events[t] && a(this, t)) : (this._events = new o, this._eventsCount = 0), this
			}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, e.exports = c
		},
		"./src/realtime/GQLSubscription/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/@apollo/client/core/ApolloClient.js"),
				r = n("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				o = n("./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js"),
				s = n("./node_modules/react/index.js"),
				u = n.n(s),
				a = n("./node_modules/@wry/equality/lib/equality.esm.js"),
				c = function(e) {
					function t(t) {
						var n = t.options,
							i = t.context,
							r = t.setResult,
							o = e.call(this, n, i) || this;
						return o.currentObservable = {}, o.setResult = r, o.initialize(n), o
					}
					return Object(o.c)(t, e), t.prototype.execute = function(e) {
						if (!0 === this.getOptions().skip) return this.cleanup(), {
							loading: !1,
							error: void 0,
							data: void 0,
							variables: this.getOptions().variables
						};
						var t = e;
						this.refreshClient().isNew && (t = this.getLoadingResult());
						var n = this.getOptions().shouldResubscribe;
						return "function" == typeof n && (n = !!n(this.getOptions())), !1 !== n && this.previousOptions && Object.keys(this.previousOptions).length > 0 && (this.previousOptions.subscription !== this.getOptions().subscription || !Object(a.a)(this.previousOptions.variables, this.getOptions().variables) || this.previousOptions.skip !== this.getOptions().skip) && (this.cleanup(), t = this.getLoadingResult()), this.initialize(this.getOptions()), this.startSubscription(), this.previousOptions = this.getOptions(), Object(o.a)(Object(o.a)({}, t), {
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
				l = n("./node_modules/@apollo/client/react/context/ApolloContext.js");
			var p = n("./node_modules/subscriptions-transport-ws/dist/client.js"),
				d = function(e) {
					function t(t) {
						var n = e.call(this) || this;
						return t instanceof p.SubscriptionClient ? n.subscriptionClient = t : n.subscriptionClient = new p.SubscriptionClient(t.uri, t.options, t.webSocketImpl), n
					}
					return Object(o.c)(t, e), t.prototype.request = function(e) {
						return this.subscriptionClient.request(e)
					}, t
				}(n("./node_modules/@apollo/client/link/core/ApolloLink.js").a),
				f = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/@apollo/client/node_modules/graphql-tag/lib/index.js");
			var b = {
					postVoteCount: h.a`
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
					postCommentCount: h.a`
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
					topLevelCommentCountChange: h.a`
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
					userIsTypingOnPost: h.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					postTypingIndicator: h.a`
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
					userIsOnline: h.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					isUserOnline: h.a`
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
					userIsReadingPost: h.a`
    subscription SubscribeSubscription($input: SubscribeInput!) {
      subscribe(input: $input) {
        id
      }
    }
  `,
					usersReadingIndicator: h.a`
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
  `
				},
				v = n("./src/config.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			let y;
			const _ = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				O = {
					name: "web2x",
					version: "0.0.1"
				},
				g = u.a.memo(({
					apolloClient: e,
					onData: t,
					onError: n,
					onLoading: i,
					queryKey: r,
					subscriptionQueries: u,
					variables: a
				}) => {
					const p = u[r],
						{
							data: d,
							loading: f,
							error: h
						} = function(e, t) {
							var n = Object(s.useContext)(Object(l.a)()),
								i = t ? Object(o.a)(Object(o.a)({}, t), {
									subscription: e
								}) : {
									subscription: e
								},
								r = Object(s.useState)({
									loading: !i.skip,
									error: void 0,
									data: void 0
								}),
								u = r[0],
								a = r[1],
								p = Object(s.useRef)(),
								d = (p.current || (p.current = new c({
									options: i,
									context: n,
									setResult: a
								})), p.current);
							return d.setOptions(i, !0), d.context = n, Object(s.useEffect)((function() {
								return d.afterExecute()
							})), Object(s.useEffect)((function() {
								return d.cleanup.bind(d)
							}), []), d.execute(u)
						}(p, {
							variables: a,
							client: e
						});
					return h ? n && n() : f ? i && i() : !h && !f && d && d.subscribe && d.subscribe.data && t && t(d), null
				});
			t.default = e => {
				const [t, n] = Object(s.useState)(y), o = Object(f.e)(e => e.user.session);
				Object(s.useEffect)(() => {
					y || (y = function() {
						let e;
						return {
							getInstance: () => (e || (e = function() {
								const e = new d(new p.SubscriptionClient(`wss://${v.a.gqlRealtimeAddress}`, {
									..._,
									connectionParams: {
										Authorization: o && o.accessToken ? `Bearer ${o.accessToken}` : ""
									}
								}));
								return new i.a({
									...O,
									cache: new r.a,
									link: e
								})
							}()), e)
						}
					}(), n(y)), y && !t && n(y)
				}, [o, n, t]);
				const a = Object(s.useRef)((e => {
					if (e) {
						return !!document.getElementById(e)
					}
					return !1
				})(e.uniqueKey));
				return t && t.getInstance() && b && !a.current ? t && u.a.createElement(u.a.Fragment, null, u.a.createElement(g, m({}, e, {
					apolloClient: t.getInstance(),
					subscriptionQueries: b
				})), u.a.createElement("span", {
					id: e.uniqueKey
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RealtimeGQLSubscriptionAsync.57f6e310e87e5d462d19.js.map