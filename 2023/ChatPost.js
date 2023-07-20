// https://www.redditstatic.com/desktop2x/ChatPost.3458005d803986d23434.js
// Retrieved at 7/20/2023, 4:40:03 PM by Reddit Dataminer v1.0.0
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
						o = d("(", i(e.variableDefinitions, ", "), ")"),
						s = i(e.directives, " "),
						r = e.selectionSet;
					return n || s || o || "query" !== t ? i([t, i([n, o]), s, r], " ") : r
				},
				VariableDefinition: function(e) {
					var t = e.variable,
						n = e.type,
						o = e.defaultValue,
						s = e.directives;
					return t + ": " + n + d(" = ", o) + d(" ", i(s, " "))
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
						a = d("", t, ": ") + n,
						c = a + d("(", i(o, ", "), ")");
					return c.length > 80 && (c = a + d("(\n", l(i(o, "\n")), "\n)")), i([c, i(s, " "), r], " ")
				},
				Argument: function(e) {
					return e.name + ": " + e.value
				},
				FragmentSpread: function(e) {
					return "..." + e.name + d(" ", i(e.directives, " "))
				},
				InlineFragment: function(e) {
					var t = e.typeCondition,
						n = e.directives,
						o = e.selectionSet;
					return i(["...", d("on ", t), i(n, " "), o], " ")
				},
				FragmentDefinition: function(e) {
					var t = e.name,
						n = e.typeCondition,
						o = e.variableDefinitions,
						s = e.directives,
						r = e.selectionSet;
					return "fragment ".concat(t).concat(d("(", i(o, ", "), ")"), " ") + "on ".concat(n, " ").concat(d("", i(s, " "), " ")) + r
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
					return "@" + e.name + d("(", i(e.arguments, ", "), ")")
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
					return i(["type", t, d("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				})),
				FieldDefinition: a((function(e) {
					var t = e.name,
						n = e.arguments,
						o = e.type,
						s = e.directives;
					return t + (u(n) ? d("(\n", l(i(n, "\n")), "\n)") : d("(", i(n, ", "), ")")) + ": " + o + d(" ", i(s, " "))
				})),
				InputValueDefinition: a((function(e) {
					var t = e.name,
						n = e.type,
						o = e.defaultValue,
						s = e.directives;
					return i([t + ": " + n, d("= ", o), i(s, " ")], " ")
				})),
				InterfaceTypeDefinition: a((function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["interface", t, d("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
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
					return "directive @" + t + (u(n) ? d("(\n", l(i(n, "\n")), "\n)") : d("(", i(n, ", "), ")")) + (o ? " repeatable" : "") + " on " + i(s, " | ")
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
					return i(["extend type", t, d("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
				},
				InterfaceTypeExtension: function(e) {
					var t = e.name,
						n = e.interfaces,
						o = e.directives,
						s = e.fields;
					return i(["extend interface", t, d("implements ", i(n, " & ")), i(o, " "), c(s)], " ")
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
				return d("{\n", l(i(e, "\n")), "\n}")
			}

			function d(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				return null != t && "" !== t ? e + t + n : ""
			}

			function l(e) {
				return d("  ", e.replace(/\n/g, "\n  "))
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
					d = n("./node_modules/backo2/index.js"),
					l = n("./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js"),
					m = n("./node_modules/subscriptions-transport-ws/dist/utils/is-string.js"),
					u = n("./node_modules/subscriptions-transport-ws/dist/utils/is-object.js"),
					h = n("./node_modules/graphql/language/printer.js"),
					p = n("./node_modules/graphql/utilities/getOperationAST.js"),
					C = n("./node_modules/symbol-observable/es/index.js"),
					f = n("./node_modules/subscriptions-transport-ws/dist/protocol.js"),
					b = n("./node_modules/subscriptions-transport-ws/dist/defaults.js"),
					v = n("./node_modules/subscriptions-transport-ws/dist/message-types.js"),
					g = function() {
						function e(e, t, n, o) {
							var s = t || {},
								r = s.connectionCallback,
								a = void 0 === r ? void 0 : r,
								i = s.connectionParams,
								m = void 0 === i ? {} : i,
								u = s.minTimeout,
								h = void 0 === u ? b.MIN_WS_TIMEOUT : u,
								p = s.timeout,
								C = void 0 === p ? b.WS_TIMEOUT : p,
								v = s.reconnect,
								g = void 0 !== v && v,
								_ = s.reconnectionAttempts,
								E = void 0 === _ ? 1 / 0 : _,
								I = s.lazy,
								O = void 0 !== I && I,
								y = s.inactivityTimeout,
								w = void 0 === y ? 0 : y,
								T = s.wsOptionArguments,
								x = void 0 === T ? [] : T;
							if (this.wsImpl = n || c, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = o || f.GRAPHQL_WS, this.connectionCallback = a, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = h, this.wsTimeout = C, this.unsentMessagesQueue = [], this.reconnect = g, this.reconnecting = !1, this.reconnectionAttempts = E, this.lazy = !!O, this.inactivityTimeout = w, this.closedByUser = !1, this.backoff = new d({
								jitter: .5
							}), this.eventEmitter = new l.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(m), this.wsOptionArguments = x, this.lazy || this.connect()
						}
						return Object.defineProperty(e.prototype, "status", {
							get: function() {
								return null === this.client ? this.wsImpl.CLOSED : this.client.readyState
							},
							enumerable: !1,
							configurable: !0
						}), e.prototype.close = function(e, t) {
							void 0 === e && (e = !0), void 0 === t && (t = !0), this.clearInactivityTimeout(), null !== this.client && (this.closedByUser = t, e && (this.clearCheckConnectionInterval(), this.clearMaxConnectTimeout(), this.clearTryReconnectTimeout(), this.unsubscribeAll(), this.sendMessage(void 0, v.default.GQL_CONNECTION_TERMINATE, null)), this.client.close(), this.client.onopen = null, this.client.onclose = null, this.client.onerror = null, this.client.onmessage = null, this.client = null, this.eventEmitter.emit("disconnected"), e || this.tryReconnect())
						}, e.prototype.request = function(e) {
							var t, n, o = this.getObserver.bind(this),
								s = this.executeOperation.bind(this),
								r = this.unsubscribe.bind(this);
							return this.clearInactivityTimeout(), (t = {})[C.default] = function() {
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
								}, n.sendMessage(o, v.default.GQL_START, e))
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
							return new d({
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
							if (!m.default(n) && !p.getOperationAST(n, s) || s && !m.default(s) || o && !u.default(o)) throw new Error("Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.")
						}, e.prototype.buildMessage = function(e, t, n) {
							return {
								id: e,
								type: t,
								payload: n && n.query ? o(o({}, n), {
									query: "string" == typeof n.query ? n.query : h.print(n.query)
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
									e.unsentMessagesQueue.push(e.buildMessage(t, v.default.GQL_START, e.operations[t].options))
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
												return e = n.sent(), this.sendMessage(void 0, v.default.GQL_CONNECTION_INIT, e), this.flushUnsentMessagesQueue(), [3, 4];
											case 3:
												return t = n.sent(), this.sendMessage(void 0, v.default.GQL_CONNECTION_ERROR, t), this.flushUnsentMessagesQueue(), [3, 4];
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
							if (-1 === [v.default.GQL_DATA, v.default.GQL_COMPLETE, v.default.GQL_ERROR].indexOf(t.type) || this.operations[n]) switch (t.type) {
								case v.default.GQL_CONNECTION_ERROR:
									this.connectionCallback && this.connectionCallback(t.payload);
									break;
								case v.default.GQL_CONNECTION_ACK:
									this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected", t.payload), this.reconnecting = !1, this.backoff.reset(), this.maxConnectTimeGenerator.reset(), this.connectionCallback && this.connectionCallback();
									break;
								case v.default.GQL_COMPLETE:
									var s = this.operations[n].handler;
									delete this.operations[n], s.call(this, null, null);
									break;
								case v.default.GQL_ERROR:
									this.operations[n].handler(this.formatErrors(t.payload), null), delete this.operations[n];
									break;
								case v.default.GQL_DATA:
									var r = t.payload.errors ? o(o({}, t.payload), {
										errors: this.formatErrors(t.payload.errors)
									}) : t.payload;
									this.operations[n].handler(null, r);
									break;
								case v.default.GQL_CONNECTION_KEEP_ALIVE:
									var a = void 0 === this.wasKeepAliveReceived;
									this.wasKeepAliveReceived = !0, a && this.checkConnection(), this.checkConnectionIntervalId && (clearInterval(this.checkConnectionIntervalId), this.checkConnection()), this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
									break;
								default:
									throw new Error("Invalid message type!")
							} else this.unsubscribe(n)
						}, e.prototype.unsubscribe = function(e) {
							this.operations[e] && (delete this.operations[e], this.setInactivityTimeout(), this.sendMessage(e, v.default.GQL_STOP, void 0))
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

			function d() {
				this._events = new r, this._eventsCount = 0
			}
			Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (s = !1)), d.prototype.eventNames = function() {
				var e, t, n = [];
				if (0 === this._eventsCount) return n;
				for (t in e = this._events) o.call(e, t) && n.push(s ? t.slice(1) : t);
				return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
			}, d.prototype.listeners = function(e) {
				var t = s ? s + e : e,
					n = this._events[t];
				if (!n) return [];
				if (n.fn) return [n.fn];
				for (var o = 0, r = n.length, a = new Array(r); o < r; o++) a[o] = n[o].fn;
				return a
			}, d.prototype.listenerCount = function(e) {
				var t = s ? s + e : e,
					n = this._events[t];
				return n ? n.fn ? 1 : n.length : 0
			}, d.prototype.emit = function(e, t, n, o, r, a) {
				var i = s ? s + e : e;
				if (!this._events[i]) return !1;
				var c, d, l = this._events[i],
					m = arguments.length;
				if (l.fn) {
					switch (l.once && this.removeListener(e, l.fn, void 0, !0), m) {
						case 1:
							return l.fn.call(l.context), !0;
						case 2:
							return l.fn.call(l.context, t), !0;
						case 3:
							return l.fn.call(l.context, t, n), !0;
						case 4:
							return l.fn.call(l.context, t, n, o), !0;
						case 5:
							return l.fn.call(l.context, t, n, o, r), !0;
						case 6:
							return l.fn.call(l.context, t, n, o, r, a), !0
					}
					for (d = 1, c = new Array(m - 1); d < m; d++) c[d - 1] = arguments[d];
					l.fn.apply(l.context, c)
				} else {
					var u, h = l.length;
					for (d = 0; d < h; d++) switch (l[d].once && this.removeListener(e, l[d].fn, void 0, !0), m) {
						case 1:
							l[d].fn.call(l[d].context);
							break;
						case 2:
							l[d].fn.call(l[d].context, t);
							break;
						case 3:
							l[d].fn.call(l[d].context, t, n);
							break;
						case 4:
							l[d].fn.call(l[d].context, t, n, o);
							break;
						default:
							if (!c)
								for (u = 1, c = new Array(m - 1); u < m; u++) c[u - 1] = arguments[u];
							l[d].fn.apply(l[d].context, c)
					}
				}
				return !0
			}, d.prototype.on = function(e, t, n) {
				return i(this, e, t, n, !1)
			}, d.prototype.once = function(e, t, n) {
				return i(this, e, t, n, !0)
			}, d.prototype.removeListener = function(e, t, n, o) {
				var r = s ? s + e : e;
				if (!this._events[r]) return this;
				if (!t) return c(this, r), this;
				var a = this._events[r];
				if (a.fn) a.fn !== t || o && !a.once || n && a.context !== n || c(this, r);
				else {
					for (var i = 0, d = [], l = a.length; i < l; i++)(a[i].fn !== t || o && !a[i].once || n && a[i].context !== n) && d.push(a[i]);
					d.length ? this._events[r] = 1 === d.length ? d[0] : d : c(this, r)
				}
				return this
			}, d.prototype.removeAllListeners = function(e) {
				var t;
				return e ? (t = s ? s + e : e, this._events[t] && c(this, t)) : (this._events = new r, this._eventsCount = 0), this
			}, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = s, d.EventEmitter = d, e.exports = d
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				s = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
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
			let d;
			const l = {
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
				if (!d) {
					const t = new i(new a.SubscriptionClient(`wss://${c.a.gqlRealtimeAddress}`, {
						...l,
						connectionParams: {
							Authorization: e ? `Bearer ${e}` : ""
						}
					}));
					d = new o.a({
						...m,
						cache: new s.a,
						link: t
					})
				}
				return d
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "g", (function() {
				return v
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
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				h = Object(o.a)(c),
				p = Object(o.a)(d),
				C = Object(o.a)(l),
				f = Object(o.a)(m),
				b = Object(o.a)(u),
				v = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const s = t(),
						r = Object(i.a)(s);
					if (Object(i.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let c = !1,
						d = "";
					do {
						e(b());
						const t = {
								after: d,
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
									c = e, d = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(C({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return O
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				m = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				h = Object(s.a)(l),
				p = Object(s.a)(m),
				C = Object(s.a)(u),
				f = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					var l, m;
					if (n().blockUser.api.pending[e]) return;
					t(h({
						username: e
					}));
					const u = await Object(i.a)(d(), e),
						b = `error-block-${e}`;
					if (u.ok) u.body.name && t(p(u.body)), u.body.id && t(Object(r.f)(u.body.id)), t(a.g(b)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: u.error ? u.error.type : "Unknown error",
							username: e
						};
						t(C(n)), "REBLOCK_RATE_LIMIT" === (null === (l = u.body) || void 0 === l ? void 0 : l.reason) ? t(a.f({
							id: b,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: f(e)
						})) : "BLOCK_MAXIMUM" === (null === (m = u.body) || void 0 === m ? void 0 : m.reason) ? t(a.f({
							id: b,
							kind: c.b.Error,
							text: o.fbt._("You cannot block more than 1000 users.", null, {
								hk: "1G5SbN"
							})
						})) : t(a.f({
							id: b,
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
				}, b = "USER_UNBLOCK__PENDING", v = "USER_UNBLOCK__SUCCESS", g = "USER_UNBLOCK__FAILED", _ = Object(s.a)(b), E = Object(s.a)(v), I = Object(s.a)(g), O = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const m = n(),
						u = Object(d.m)(m),
						h = u ? u.id : void 0,
						p = m.user.blocked.data.filter(t => t.name === e)[0];
					h && (t(_({
						name: e
					})), (await Object(i.c)(l(), h, e)).ok ? (t(E({
						name: e
					})), p && p.id && t(Object(r.h)(p.id)), t(a.f({
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
		"./src/reddit/components/CommentsChat/Comment/AwardsBadge/AwardsHovercard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3N2--8XMGhlwIDHkqnQXdg",
				header: "_37XfJe5ntoxN0x-YdBJrjU",
				title: "_3O4g3ZIwK71MLTvLgARzrZ",
				closeIcon: "rRnb2K9Mqi7uhTIFKlwqd",
				"awards-list": "_2GIsavkGDGAHVV3ggbsYMl",
				awardsList: "_2GIsavkGDGAHVV3ggbsYMl",
				award: "_1mP1colZaQflC0P2IKyOfy",
				awardIcon: "_38B_oDvOmJSHaalVhCHIT-",
				giveAwardButton: "_15BhZ4E6kLE27hix_5EbF3"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/AwardsBadge/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_3qVl-ZNULRzChaIUAYBj6X",
				awarded: "_2mcaTa7XM5nUpInMvhfGIv",
				awardIcon: "_2WehioORBisu7Na5awImRk",
				countText: "_3EwKDfVSmBqh4wBwONldx0",
				awardsTooltip: "Ax4VcA8yi_5KHtlzUwAib"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/config.ts"),
				d = n("./node_modules/lodash/memoize.js"),
				l = n.n(d),
				m = n("./src/lib/constants/index.ts"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				h = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = n.n(h);
			const C = i.a.div("Userpic", p.a);
			var f = l()(e => {
					let {
						defaultImage: t,
						userId: n
					} = e;
					const {
						processingAvatarImageUrl: o
					} = c.a, r = (e => e.replace(m.Ob.Account + "_", ""))(n), {
						avatar: a,
						color: i
					} = (e => {
						const t = u.length,
							n = parseInt(e, 36),
							o = n % 20 + 1,
							s = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + o).slice(-2),
							color: u[s]
						}
					})(r), d = `${o}/avatar_default_${a}_${i}.png`;
					return s.a.createElement(C, {
						"data-testid": "old-default-icon",
						style: {
							backgroundImage: `url(${d})`,
							backgroundColor: `#${i}`
						}
					})
				}),
				b = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				v = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				g = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				_ = n("./src/reddit/icons/svgs/Remove/index.tsx");
			const E = Object(a.c)({
					account: e => e.user.account
				}),
				I = Object(r.b)(E);
			t.a = i.a.wrapped(I(e => {
				let {
					account: t,
					className: n,
					height: o,
					icon: r,
					isNSFW: a,
					trash: i,
					userId: c,
					width: d
				} = e;
				const l = c || `${null==t?void 0:t.id}`,
					m = {
						height: o || 20,
						width: d || 20,
						minWidth: d || 20
					};
				if (i) return s.a.createElement("div", {
					className: n,
					style: m
				}, s.a.createElement(_.a, {
					className: p.a.TrashIcon
				}));
				const u = t && t.id === c ? t.accountIcon : a ? v.a : null != r ? r : void 0;
				return Object(g.a)(u) ? s.a.createElement("div", {
					className: n,
					style: m
				}, s.a.createElement(b.a, {
					headshot: u
				})) : s.a.createElement("div", {
					className: n,
					style: m
				}, s.a.createElement(f, {
					userId: l,
					defaultImage: u
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/Comment/Chatbot/Chatbot.m.less": function(e, t, n) {
			e.exports = {
				chatbot: "QLi1Mh_z_LdE0ORbmK8zw",
				avatar: "_1DQfL-c1GrmHcZueKtI4wG",
				name: "cd4SQb0jInqoHGO0RqJ1D"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, n) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less": function(e, t, n) {
			e.exports = {
				ChatIcon: "Y4elHycQm7QR_6fCrvjzq",
				chatIcon: "Y4elHycQm7QR_6fCrvjzq",
				TrashIcon: "_29fCuEaNwXf3oWvxop579Y",
				trashIcon: "_29fCuEaNwXf3oWvxop579Y",
				DeleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				deleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				isV2Enabled: "_2XcjXctAHWpWD1W3AQ80Ar",
				icon: "TLIhUcY9wWx-TMYDK9qQi",
				label: "_1T1Bs-9BGk1V30l9Xxj6zh"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				d = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				l = n.n(d);
			const m = e => {
					let {
						className: t,
						isV2Enabled: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, n ? r.a.createElement(c.a, {
						className: l.a.TrashIcon
					}) : r.a.createElement(i.a, {
						className: l.a.ChatIcon,
						trash: !0
					}), r.a.createElement("span", {
						className: Object(a.a)(l.a.DeleteText, {
							[l.a.isV2Enabled]: n
						})
					}, o.fbt._("deleted", null, {
						hk: "3NxJy9"
					})))
				},
				u = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: l.a.icon
				}, r.a.createElement(c.a, null)), r.a.createElement("span", {
					className: l.a.label
				}, o.fbt._("This message was deleted", null, {
					hk: "23fI7b"
				})))
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoomojiWrapper: "_1EGL0dP0SLKDl_E_4COHcX"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_2Wvwu550WznaKCrrHLMhgd",
				innerWrapper: "_RpomlnlGKlZaoWjz4EmB",
				verticalBar: "_1pu5bmCdBA2Z_k5iJqokAd",
				"menu-item": "_1eUNKKgUHWYuyGP2hGfHX5",
				menuItem: "_1eUNKKgUHWYuyGP2hGfHX5",
				suppressBackgroundOnHover: "wWoMdLL_LpyTj2XgUdoSM",
				icon: "_1dsP0S8AboGJY8z_dgTnCG",
				"dropdown-menu": "_2r-iXvjxUYKgfBf_AXOEEh",
				dropdownMenu: "_2r-iXvjxUYKgfBf_AXOEEh",
				"dropdown-menu-item": "_nT4WGATBrNpGYJKLJ_QM",
				dropdownMenuItem: "_nT4WGATBrNpGYJKLJ_QM",
				"dropdown-icon": "_1rCsr0TH33f-P2albx95kQ",
				dropdownIcon: "_1rCsr0TH33f-P2albx95kQ"
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
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2j45BC7mJt89dJHJgKedOn",
				isDeleted: "_3a9maZzcpVpY-ObbePJy1c",
				userIcon: "flM3MSxMp9wK1LunC6g04",
				closeIcon: "p6gNeYY8JA6w2d-pJHmPf",
				author: "_2gJ_h34BkafTE6g1uvPgED",
				commentBody: "_3fPHqFYSkWC7g1-Sps2hXc",
				messageComposer: "bboHgGXDhe78fy-QMNllC"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/chat/helpers/dom.ts"),
				d = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/components/RichTextJson/elements.tsx"),
				u = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				h = n("./src/reddit/models/RichTextJson/index.ts");
			const p = e => r.a.createElement(m.f, null, e),
				C = e => {
					const t = [],
						n = e.c || [],
						o = n.length;
					for (let s = 0; s < o; s++) {
						const e = n[s];
						t.push(e.e === h.y ? e.t : Object(u.e)(e, {}, s))
					}
					return r.a.createElement(r.a.Fragment, null, t)
				},
				f = e => e.c && e.c.length ? r.a.createElement(r.a.Fragment, null, Object(u.i)({
					nodes: e.c,
					mediaMetadata: null,
					rtJsonElementProps: {}
				})) : r.a.createElement("br", null);
			var b = n("./src/reddit/constants/elementClassNames.ts");
			const v = {
				[h.a]: "<animated image>",
				[h.b]: "<quote>",
				[h.c]: "<code block>",
				[h.i]: "<embed>",
				[h.n]: "<image>",
				[h.q]: "<list>",
				[h.B]: "<table>",
				[h.F]: "<video>"
			};
			var g = e => {
					let {
						className: t,
						content: n
					} = e;
					const o = n.document,
						s = [],
						a = Object(l.c)(o),
						c = Object(l.d)(o);
					if (-1 !== a)
						for (let r = a; r <= c; r++) {
							const e = o[r],
								t = e && v[e.e];
							switch (e.e) {
								case h.m:
									break;
								case h.b:
								case h.c:
								case h.q:
								case h.B:
								case h.n:
								case h.a:
								case h.F:
								case h.i:
									s.push(p(t));
									break;
								case h.l:
									s.push(C(e));
									break;
								case h.w:
									s.push(f(e))
							}
						}
					return r.a.createElement("div", {
						className: Object(i.a)(b.j, t)
					}, s)
				},
				_ = n("./src/reddit/components/UserIcon/index.tsx"),
				E = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				I = n("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				O = n("./src/reddit/selectors/comments.ts"),
				y = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				T = n.n(w);
			const x = e => {
				let {
					commentId: t,
					className: n,
					isV2Enabled: s = !1,
					isMessageComposer: l = !1,
					onReplyClick: m
				} = e;
				const u = Object(a.e)(e => Object(y.c)(e, {
						commentId: t
					})),
					h = Object(a.e)(e => Object(O.m)(e, {
						commentId: t
					}));
				return u ? u.isDeleted ? r.a.createElement("div", {
					className: Object(i.a)(T.a.container, T.a.isDeleted, n)
				}, r.a.createElement(d.b, {
					isV2Enabled: s
				})) : r.a.createElement("a", {
					className: Object(i.a)(T.a.container, n, {
						[T.a.messageComposer]: l
					}),
					href: h,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(c.a)(() => m(u.id))
				}, r.a.createElement(_.a, {
					className: Object(i.a)(T.a.userIcon),
					iconUrl: u.profileImage || u.authorIconImage,
					userName: u.author,
					isNSFW: Boolean(u.profileOver18 || u.authorIconIsNSFW)
				}), r.a.createElement("span", {
					className: T.a.author
				}, l ? o.fbt._("Replying to u/{username}:", [o.fbt._param("username", u.author)], {
					hk: "15ByZb"
				}) : u.author), r.a.createElement(g, {
					className: T.a.commentBody,
					content: Object(E.a)(u)
				}), l && r.a.createElement(I.a, {
					className: T.a.closeIcon
				})) : null
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, n) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ThreadPreview/ThreadPreview.m.less": function(e, t, n) {
			e.exports = {
				ThreadPreview: "O2y_R1o5NsgV12trEnpxV",
				threadPreview: "O2y_R1o5NsgV12trEnpxV",
				caption: "_1_W71GyK7P_L_Esv7mtW61",
				icons: "_3NDWQTET-gWMHqez78I5N1",
				ThreadUserIcon: "_1ypw8xmTa-1O7CFpsJwIhZ",
				threadUserIcon: "_1ypw8xmTa-1O7CFpsJwIhZ"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_17L3dYzD_Lp0NU7RHOfrWl",
				container: "_379OIAriTEqn8_Evqs44ZK",
				hasError: "_1-bd0oLqzHAVcpv3c08X1C",
				BotComment: "_3-blQBKGymnJ5vvSENOPWH",
				botComment: "_3-blQBKGymnJ5vvSENOPWH",
				hover: "_3EkxTLv5oyjvmECZsS65K6",
				selectedForReply: "_23SnIXMQMc1j6XCacXJ-Rw",
				readMoreButton: "_267cT6JiGoolHrAzgjwKt2",
				comment: "_6woFHCpxLAwJsHffKlfbl",
				systemMessageComment: "_1B_7OfE3uG2rnsPzpjezJg",
				commentBody: "_3-KRIJtnSg-u99uWIvhd3",
				expanded: "_1DMnM59MSQzmBp605G5sAb",
				timestamp: "oR7I0h2pifcT7vbCJRy6O",
				highlighted: "_3u2XzwMG8Vrsw8Blpdwg5j",
				errorText: "xBa5i8R7uQbY0eWAwnn6U",
				richTextJson: "_1X1cv2ewlB5Wobqcsc99C6",
				TopMeta: "SJ4qRd99ApBBSiNYdfSoh",
				topMeta: "SJ4qRd99ApBBSiNYdfSoh",
				avatar: "_1kLXHwTdUqOYld2X3jr-WQ",
				icon: "cZkEEf5_6rTqwSsYt5uiZ",
				replyWrapper: "_2yTjBYgnbAmNLfM_SyqSBN",
				reactions: "MRkf2CQqJ1nhQgDtyfI90",
				error: "_2Wk08muzTVTe6sYtFibZoT",
				retryButton: "_2jVgqNv6zGIJMPhZcEzbhX"
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
				ChunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				chunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				top: "ZuYs_5l7Qf6T91OUOD4pG"
			}
		},
		"./src/reddit/components/CommentsChat/index.m.less": function(e, t, n) {
			e.exports = {
				EmbeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb",
				embeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb",
				scrollerWrap: "_2cIJwmZhpsvMcqjCp0_W1y",
				FixedHeightScroller: "_3Ftst7atr1RlZ_qyIH5nj8",
				fixedHeightScroller: "_3Ftst7atr1RlZ_qyIH5nj8",
				ThreadScroller: "_2pznjsPwczL2NnGbFngSas",
				threadScroller: "_2pznjsPwczL2NnGbFngSas",
				Thread: "_3sR9BpElJyLna1gcS1j_5_",
				thread: "_3sR9BpElJyLna1gcS1j_5_",
				"slide-left": "L2Mf1SO7evc0PxFuzb4na",
				slideLeft: "L2Mf1SO7evc0PxFuzb4na",
				scrollAway: "_1AABf-PkNuIHfvh3ir_MUI",
				"slide-right": "_1T5ojDMZPs7tDUbsW-4cek",
				slideRight: "_1T5ojDMZPs7tDUbsW-4cek",
				ThreadTitle: "_2Z_Ru5pBSs7_hG9S_8M9_Y",
				threadTitle: "_2Z_Ru5pBSs7_hG9S_8M9_Y",
				IconBubbles: "_2P3GB6HVx8vMiGy7S8j_u0",
				iconBubbles: "_2P3GB6HVx8vMiGy7S8j_u0",
				IconArrow: "_17BjiyO15vpauBQ29AYmtn",
				iconArrow: "_17BjiyO15vpauBQ29AYmtn"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return go
			})), n.d(t, "CHATBOT_REACTIONS_HINT_DURATION_MS", (function() {
				return Eo
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = function(e, t) {
					for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) o[s - 2] = arguments[s];
					let r, a = !1;
					const i = async () => {
						o && o.length ? await e.call(window, ...o) : await e.call(window), a || (r = window.setTimeout(i, t))
					};
					return r = window.setTimeout(i, t), () => {
						a = !0, window.clearTimeout(r)
					}
				},
				i = n("./src/lib/timeAgo/index.ts"),
				c = n("./node_modules/lodash/debounce.js"),
				d = n.n(c),
				l = n("./node_modules/lodash/last.js"),
				m = n.n(l),
				u = n("./node_modules/react/index.js"),
				h = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				C = n("./src/realtime/GQLSubscription/async.tsx"),
				f = n("./src/reddit/actions/blockedRedditors.ts"),
				b = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./node_modules/lodash/first.js"),
				_ = n.n(g),
				E = n("./node_modules/lodash/isArray.js"),
				I = n.n(E),
				O = n("./src/reddit/helpers/isComment.ts"),
				y = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				w = n("./src/reddit/models/Comment/index.ts"),
				T = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts");
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
							isAdmin: n === w.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === w.e.Submitter,
							isMod: n === w.e.Moderator,
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
								rteMode: x.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(O.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: k.a.notVoted,
							...t || {}
						}
					}
				},
				N = e => {
					switch (e) {
						case w.e.Admin:
							return r.I.ADMIN;
						case w.e.Moderator:
							return r.I.MODERATOR;
						case w.e.Alumni:
							return r.I.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				M = e => _()((e || []).filter(e => I()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || w.e.None;
			const S = (e, t, n) => {
				const o = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: d,
						author_flair_type: l
					} = n;
				if (s && l) {
					if (l === T.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[s]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: d
								}
							}
						}
					}
					if (l === T.f.Text) {
						if (!c) return o;
						return {
							[t]: {
								[s]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: d
								}
							}
						}
					}
				}
			};
			var L = n("./src/lib/env/index.ts");
			const A = new Map,
				R = e => e,
				B = new Set;
			var D;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(D || (D = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				U = (e, t) => {
					const n = R(t),
						o = A.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				F = (e, t, n, o) => {
					const s = R(t),
						r = A.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					A.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...P
						}
					}), a.socket.addEventListener("message", V.bind(null, o)), a.socket.addEventListener("close", H.bind(null, s, o)), a.socket.addEventListener("error", K.bind(null, s)), window && window.addEventListener("beforeunload", U.bind(null, e, t))
				},
				H = (e, t, n) => {
					const o = A.get(e);
					o && (o.isClosePlanned ? A.delete(e) : G(e, t))
				},
				G = (e, t) => {
					const n = A.get(e);
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
						url: d
					} = n;
					if (A.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							F(d, c, l, t)
						}, i), Object(L.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				V = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(L.a)() && console.error(t)
					}
				},
				K = (e, t) => {
					const n = A.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? A.delete(e) : Object(L.a)() && console.error(t)
				};
			var q = n("./src/reddit/selectors/comments.ts"),
				W = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const z = Object(v.a)(Z.b),
				J = Object(v.a)(Z.c),
				$ = Object(v.a)(Z.a),
				Y = Object(v.a)(Z.d),
				X = {},
				ee = (e, t, n, o) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						B.has(s) ? t() : (B.add(s), setTimeout(() => {
							B.delete(s), F(o, s, {
								...P
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
										c = n && Object(W.c)(i, {
											commentId: n
										}),
										d = !(!n || !X[n]);
									if (a && !d) {
										const n = S(0, o, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(q.w)(i, {
												commentsPageKey: e
											});
											s(z({
												authorFlair: n,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else s(J({
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
										i = n && Object(W.c)(a, {
											commentId: n
										}),
										c = j(t.payload);
									if (i && c) {
										const n = S(0, o, t.payload),
											r = t.payload.total_comment_count;
										s(J({
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
										i = Object(W.c)(a, {
											commentId: n
										});
									i && s(J({
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
										o = Object(W.c)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s($({
										id: e
									})) : X[e] = D.DELETE_COMMENT;
									break
								}
								case D.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = r(),
										a = Object(W.c)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(Q.m)(o, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? X[n] = D.REMOVE_COMMENT : s($({
										id: n
									}));
									break
								}
								case D.USER_JOIN: {
									const n = j(t.payload, {
											isSystem: !0
										}),
										o = !0;
									n && s(Y({
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
			var te = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				ne = n("./src/reddit/actions/pages/comments.ts"),
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
				de = n("./src/reddit/endpoints/awards/index.ts"),
				le = n("./src/lib/makeGqlRequest/index.ts"),
				me = n("./src/lib/makeRequest/index.ts"),
				ue = n("./src/reddit/models/Gold/Award.ts"),
				he = n("./src/redditGQL/operations/AvailableAwards.json");
			var pe = n("./src/reddit/models/Toast/index.ts"),
				Ce = n("./src/reddit/selectors/communityAwards.ts"),
				fe = n("./src/reddit/selectors/experiments/chat.ts"),
				be = n("./src/reddit/selectors/gold/awardIcon.ts"),
				ve = n("./src/lib/isDefined.ts"),
				ge = n("./node_modules/reselect/es/index.js");
			const _e = e => "chat_reaction_upvote" === e.id,
				Ee = (e, t) => {
					var n;
					return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(Ce.a)(e, t)).filter(ve.a)
				},
				Ie = Object(ge.a)((e, t) => Ee(e, t.subredditId), (e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const r = Object(Ce.a)(e, n),
							a = null !== (s = null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n]) && void 0 !== s ? s : 0;
						if (r && r.awardSubType === ue.d.ChatReaction && !(a <= 0)) return {
							award: r,
							total: a
						}
					}).filter(ve.a)
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
				Oe = (e, t, n) => {
					var o, s;
					return !!(null === (s = null === (o = e.awards.chatReactions.pending) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s[t])
				};
			var ye = n("./src/reddit/selectors/user.ts");
			const we = Object(v.a)(ie.c),
				Te = Object(v.a)(ie.b),
				xe = Object(v.a)(ie.a),
				ke = Object(v.a)(ie.e),
				je = Object(v.a)(ie.f),
				Ne = Object(v.a)(ie.d),
				Me = Object(v.a)(ie.h),
				Se = Object(v.a)(ie.i),
				Le = Object(v.a)(ie.g),
				Ae = Object(v.a)(ie.j),
				Re = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(we());
					try {
						const n = await (async (e, t) => {
							const n = await Object(le.a)(e, {
								...he,
								variables: {
									subredditId: t,
									subTypes: [ue.d.ChatReaction]
								}
							});
							if (!Object(me.c)(n)) throw n.error;
							return n.body.data.availableAwards
						})(s(), e);
						t(Te({
							subredditId: e,
							availableAwards: n
						}))
					} catch (r) {
						t(xe(r))
					}
				}, Be = async (e, t) => {
					let {
						awardId: n,
						commentId: o,
						operation: s
					} = t;
					var r;
					const a = Object(W.c)(e, {
						commentId: o
					});
					if (!a) return;
					const i = Object(Ce.a)(e, n),
						c = Object(ye.k)(e);
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
										iconURL: Object(be.c)({
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
				}, De = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = await Object(de.a)(s(), {
						thingId: e
					});
					t(Object(b.e)(r))
				}, Pe = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					const a = n();
					if (!Object(ye.S)(a)) return t(Object(ae.openLoginModal)());
					if (!Oe(a, e.awardId, e.commentId)) {
						t(ke(e));
						try {
							const {
								awardId: n,
								commentId: o
							} = e, s = Object(oe.a)(), i = Object(Ce.a)(a, n), c = Object(fe.g)(a);
							if ((e => _e(e) || (e => "chat_reaction_downvote" === e.id)(e))(i)) {
								const e = _e(i) ? "chat_reaction_downvote" : "chat_reaction_upvote",
									n = ((e, t, n) => {
										var o, s;
										const r = Object(W.c)(e, {
											commentId: n
										});
										return null === (s = null === (o = null == r ? void 0 : r.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[0]
									})(a, e, o);
								n && await t(Ue({
									awardId: e,
									awardingId: n,
									commentId: o
								}, {
									suppressCommentDataRefresh: !0
								}))
							}
							await Object(de.b)(r(), {
								awardId: n,
								targetId: o,
								isAnonymous: !1,
								nonce: s
							}), c || await Be(a, {
								awardId: n,
								commentId: o,
								operation: ue.f.Add
							}), await t(De(o)), t(je({
								awardId: n,
								commentId: o
							}))
						} catch (i) {
							t(Ne({
								...e,
								error: i
							})), t(Object(ce.f)({
								kind: pe.b.Error,
								duration: ce.a,
								text: o.fbt._("An error has occurred while giving a reaction. Please try again.", null, {
									hk: "2JvsOk"
								})
							}))
						}
					}
				}, Ue = (e, t) => async (n, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = s();
					if (!Object(ye.S)(i)) return n(Object(ae.openLoginModal)());
					if (!Oe(i, e.awardId, e.commentId)) {
						n(Me(e));
						try {
							const {
								awardId: o,
								awardingId: s,
								commentId: r
							} = e, c = Object(fe.g)(i);
							await Object(de.c)(a(), {
								awardingId: s
							}), c || await Be(i, {
								awardId: o,
								commentId: r,
								operation: ue.f.Remove
							}), !(null == t ? void 0 : t.suppressCommentDataRefresh) && await n(De(e.commentId)), n(Se({
								awardId: o,
								awardingId: s,
								commentId: r
							}))
						} catch (c) {
							n(Le({
								...e,
								error: c
							})), n(Object(ce.f)({
								kind: pe.b.Error,
								duration: ce.a,
								text: o.fbt._("An error has occurred while removing a reaction. Please try again.", null, {
									hk: "4kopxI"
								})
							}))
						}
					}
				};
			var Fe = n("./src/reddit/components/Comments/States/index.tsx"),
				He = n("./src/reddit/icons/svgs/ChatBotAvatar/index.tsx"),
				Ge = n("./src/reddit/components/CommentsChat/Comment/Chatbot/Chatbot.m.less"),
				Ve = n.n(Ge);
			const Ke = o.fbt._("redditbot", null, {
					hk: "2LuwVl"
				}),
				qe = e => j({
					name: "cb_botmsg",
					author: "redditbot",
					author_id: 0,
					created_utc: Math.floor((new Date).getTime() / 1e3),
					subreddit_id: e.subredditId,
					body_html: e.text,
					author_fullname: Ke,
					attribs: [],
					body: e.text,
					context: "",
					link_id: "",
					score: 0
				}),
				We = o.fbt._("Now you can hover over messages to react to them. Give it a try!", null, {
					hk: "3kimKR"
				}),
				Qe = e => {
					let {
						message: t,
						className: n = ""
					} = e;
					return h.a.createElement("div", {
						className: Ve.a.chatbot + n
					}, h.a.createElement("div", {
						className: Ve.a.avatar
					}, h.a.createElement(He.a, null)), h.a.createElement("p", {
						className: Ve.a.name
					}, Ke), h.a.createElement("p", {
						className: Ve.a.text
					}, t))
				},
				Ze = (e, t) => {
					let {
						commentId: n
					} = t;
					var o, s, r;
					return null !== (r = null === (s = null === (o = null == e ? void 0 : e.continueThreads) || void 0 === o ? void 0 : o.models[`continueThread-${n}`]) || void 0 === s ? void 0 : s.count) && void 0 !== r ? r : 0
				};
			var ze = n("./src/lib/makeDraftKey/index.ts"),
				Je = n("./src/reddit/actions/comment/authoring.ts"),
				$e = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ye = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Xe = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				et = n.n(Xe);
			var tt = e => {
					let {
						commentCount: t,
						onClick: n
					} = e;
					const r = Object(s.a)(et.a.CollapsedComment);
					return h.a.createElement("div", {
						className: r,
						onClick: n
					}, o.fbt._("collapsed {collapsed message} (may be sensitive)", [o.fbt._param("collapsed message", o.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [o.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				nt = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				ot = n("./src/reddit/actions/gold/modals.ts"),
				st = n("./src/reddit/actions/modal.ts"),
				rt = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				at = n("./src/reddit/components/ReportFlow/index.tsx"),
				it = n("./src/reddit/components/ReportFlow/new.tsx"),
				ct = n("./src/reddit/helpers/correlationIdTracker.ts"),
				dt = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				lt = n("./src/reddit/hooks/useTracking.ts"),
				mt = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				ut = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ht = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				pt = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				Ct = n("./src/reddit/selectors/activeModalId.ts"),
				ft = n("./src/reddit/selectors/blockedRedditors.ts"),
				bt = n("./src/reddit/actions/tooltip.ts"),
				vt = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				gt = n("./src/reddit/hooks/usePageLayer.ts");
			var _t = () => {
					const e = Object(gt.a)();
					return Object(u.useMemo)(() => !!e && Object(vt.b)(e), [e]) ? {
						container: window.document.body,
						alwaysHandleOverflow: !0
					} : null
				},
				Et = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				It = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Ot = n.n(It);

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = e => {
				let {
					children: t,
					commentId: n,
					onClick: o,
					tooltipId: r,
					tooltipText: a,
					trackingNoun: i,
					suppressBackgroundOnHover: c = !1,
					...d
				} = e;
				const l = Object(p.d)(),
					m = Object(lt.a)(),
					u = _t();
				return h.a.createElement("button", yt({}, d, {
					id: r,
					className: Object(s.a)(Ot.a.menuItem, {
						[Ot.a.suppressBackgroundOnHover]: c
					}),
					onMouseEnter: () => {
						l(Object(bt.f)({
							tooltipId: r
						}))
					},
					onMouseLeave: () => {
						l(Object(bt.i)())
					},
					onClick: e => {
						null == o || o(e), i && n && m(Object(dt.f)(i, n))
					}
				}), t, h.a.createElement(Et.c, yt({
					tooltipId: r
				}, u), a))
			};
			var Tt = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				xt = n("./src/reddit/controls/Dropdown/index.tsx"),
				kt = n("./src/reddit/selectors/tooltip.ts");

			function jt() {
				return (jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = Object(Tt.a)(xt.a),
				Mt = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const r = Object(p.d)(),
						a = _t(),
						i = Object(p.e)(e => Object(kt.b)(t)(e)),
						c = h.a.useCallback(() => {
							r(Object(bt.h)({
								tooltipId: t
							})), null == s || s()
						}, [r, t, s]);
					return h.a.createElement("button", {
						id: t,
						className: Ot.a.menuItem,
						onClick: c
					}, n, h.a.createElement(Nt, jt({
						className: Ot.a.dropdownMenu,
						isOpen: i,
						tooltipId: t
					}, a), o))
				};
			var St = n("./src/reddit/actions/comment/moderation.ts"),
				Lt = n("./src/reddit/components/ModModeReports/helpers.ts"),
				At = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Rt = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				Bt = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Dt = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Pt = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				Ut = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const Ft = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const s = t.id,
					a = Object(Lt.b)(t),
					i = t.isApproved && a,
					c = t.bannedBy === r.l,
					d = t.isMod,
					l = !n && (!t.bannedBy || c),
					m = Object(p.d)(),
					u = Object(lt.a)(),
					C = h.a.useCallback(e => {
						u(Object(dt.f)(e, s))
					}, [u, s]),
					f = h.a.useCallback(() => {
						m(Object(St.a)(s)), C("approve")
					}, [m, C, s]),
					b = h.a.useCallback(() => {
						const e = c ? "confirm_remove" : "remove";
						m(Object(St.e)(s, !1)), C(e)
					}, [m, C, s, c]),
					v = h.a.useCallback(() => {
						m(Object(St.e)(s, !0)), C("spam")
					}, [m, C, s]),
					g = h.a.useCallback(() => {
						m(Object(St.b)(s, r.I.MODERATOR))
					}, [m, s]),
					_ = h.a.useCallback(() => {
						m(Object(St.b)(s, r.I.NONE))
					}, [m, s]);
				return h.a.createElement(h.a.Fragment, null, n && d && h.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: o.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: _
				}, h.a.createElement(Pt.a, {
					className: Ot.a.dropdownIcon
				})), n && !d && h.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: o.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: g
				}, h.a.createElement(Ut.a, {
					className: Ot.a.dropdownIcon
				})), (t.bannedBy || a) && h.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: i ? o.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : o.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: f
				}, h.a.createElement(Rt.a, {
					className: Ot.a.dropdownIcon
				})), l && h.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: c ? o.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: b
				}, h.a.createElement(Bt.a, {
					className: Ot.a.dropdownIcon
				})), l && h.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: o.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: v
				}, h.a.createElement(Dt.a, {
					className: Ot.a.dropdownIcon
				})))
			};
			var Ht = n("./src/reddit/actions/reportFlow/index.ts"),
				Gt = n("./src/reddit/actions/userBlocks.ts"),
				Vt = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				Kt = n("./src/reddit/icons/fonts/Report/index.tsx"),
				qt = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				Wt = n("./src/reddit/icons/svgs/UserBlock/index.tsx"),
				Qt = n("./src/reddit/models/PostDraft/index.ts");
			const Zt = e => `Comment-${e}--Modal--DeleteComment`,
				zt = e => `CommentChatPost--ModMenu--${e}`,
				Jt = e => `CommentChatPost--OverflowMenu--${e}`,
				$t = e => {
					let {
						comment: t,
						commentsPageKey: n
					} = e;
					const s = t.id,
						r = Object(p.d)(),
						a = Object(lt.a)(),
						i = Object(p.e)(ye.m),
						c = Object(p.e)(e => Object(ft.c)(e, t.authorId)),
						d = i && i.id === t.authorId,
						l = h.a.useCallback(e => {
							a(Object(dt.f)(e, s))
						}, [a, s]),
						m = h.a.useCallback(() => {
							r(Object(Ht.c)(s, !1)), l("report")
						}, [r, l, s]),
						u = h.a.useCallback(() => {
							r(Object(st.i)(Zt(t.id))), l("delete")
						}, [r, l, t]),
						C = h.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && r(Object(Je.e)({
								commentId: t.id,
								draftKey: Object(ze.a)(Qt.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), l("edit")
						}, [r, l, t, n]),
						f = h.a.useCallback(() => {
							r(Object(Gt.h)(t.author)), l("block")
						}, [r, l, t]),
						b = h.a.useCallback(() => {
							r(Object(Gt.g)(t.author)), l("unblock")
						}, [r, l, t]);
					return h.a.createElement(h.a.Fragment, null, d && h.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: o.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: C
					}, h.a.createElement(Vt.a, {
						className: Ot.a.dropdownIcon
					})), d && h.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: o.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: u
					}, h.a.createElement(qt.a, {
						className: Ot.a.dropdownIcon
					})), !d && h.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: o.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: m
					}, h.a.createElement(Kt.a, {
						className: Ot.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !d && !c && h.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: o.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: f
					}, h.a.createElement(Wt.a, {
						className: Ot.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !d && c && h.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: o.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: b
					}, h.a.createElement(Wt.a, {
						className: Ot.a.dropdownIcon
					})))
				};
			var Yt = n("./src/reddit/selectors/userPrefs.ts"),
				Xt = n("./src/reddit/components/CommentsChat/Comment/Menu/ReactionButton/index.m.less"),
				en = n.n(Xt);
			const tn = e => {
					let {
						reaction: t,
						comment: n
					} = e;
					var o, s;
					const r = Object(lt.a)(),
						a = Object(p.d)(),
						i = Object(p.e)(Yt.d),
						c = null === (s = null === (o = n.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t.id]) || void 0 === s ? void 0 : s[0];
					return h.a.createElement(wt, {
						commentId: n.id,
						tooltipId: `CommentChatPost--${t.id}${n.id}`,
						tooltipText: t.name,
						suppressBackgroundOnHover: !0,
						onClick: c ? () => {
							c && (a(Ue({
								awardId: t.id,
								awardingId: c,
								commentId: n.id
							})), r(Object(dt.h)(t.id, n.id, "actions_menu")))
						} : () => {
							a(Pe({
								awardId: t.id,
								commentId: n.id
							})), r(Object(dt.g)(t.id, n.id, "actions_menu"))
						}
					}, h.a.createElement("img", {
						className: en.a.snoomojiWrapper,
						src: Object(be.c)({
							award: t,
							postOrComment: n,
							size: 64,
							prefersReducedMotion: i
						}),
						alt: t.name
					}))
				},
				nn = (e, t) => `CommentChatPost--${e}--${t}`,
				on = Object(ge.c)({
					availableReactionAwards: (e, t) => {
						let {
							comment: n
						} = t;
						return Ee(e, n.subredditId)
					},
					currentUser: ye.m,
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
						return Object(Ct.a)(e) === Zt(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(ft.c)(e, n.authorId)
					},
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Q.a)(e, {
							postId: n.postId
						})
					},
					isLiveChatThreadingEnabled: fe.e
				});
			var sn = Object(p.b)(on, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(Je.s)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						giveAward: () => {
							const t = Object(ct.d)(ct.a.GildingFlow, !0);
							return e(Object(ot.d)({
								correlationId: t,
								thingId: n.id
							}))
						},
						deleteComment: () => o && e(Object(Je.i)(n.id, n.postId)),
						toggleDeleteCommentModal: () => e(Object(st.i)(Zt(n.id)))
					}
				})(e => {
					let {
						comment: t,
						commentsPageKey: n,
						className: r,
						currentUser: a,
						deleteComment: i,
						giveAward: c,
						isAuthorBlocked: d,
						isDeleteModalOpen: l,
						isMod: m,
						isChatCreateOnlyPerm: u,
						isLiveChatThreadingEnabled: p,
						hideThreadButton: C,
						onReplyClick: f,
						onThreadClick: b,
						reportFlowIsOpen: v,
						toggleDeleteCommentModal: g,
						availableReactionAwards: _
					} = e;
					const E = !!a && a.id === t.authorId,
						I = Object(lt.a)(),
						O = h.a.useCallback(() => {
							I(Object(dt.f)("other_options", t.id))
						}, [I, t.id]);
					return h.a.createElement("div", {
						className: Object(s.a)(Ot.a.menu, r)
					}, !!(null == _ ? void 0 : _.length) && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
						className: Ot.a.innerWrapper
					}, _.map(e => h.a.createElement(tn, {
						key: e.id,
						comment: t,
						reaction: e
					}))), h.a.createElement("div", {
						className: Ot.a.verticalBar
					})), h.a.createElement("div", {
						className: Ot.a.innerWrapper
					}, !t.isLocked && !d && Boolean(t.authorId) && h.a.createElement(h.a.Fragment, null, (!p || !C) && h.a.createElement(wt, {
						onClick: () => {
							f(), p && b && b()
						},
						commentId: t.id,
						tooltipId: nn("Reply", t.id),
						tooltipText: o.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply",
						"data-testid": "comment-reply"
					}, h.a.createElement(pt.a, {
						className: Ot.a.icon
					})), !E && h.a.createElement(wt, {
						onClick: c,
						commentId: t.id,
						tooltipId: nn("Award", t.id),
						tooltipText: o.fbt._("Give Award", null, {
							hk: "3rUq40"
						}),
						trackingNoun: "award",
						"data-testid": "comment-award"
					}, h.a.createElement(mt.a, {
						className: Ot.a.icon
					}))), m && !u && h.a.createElement(Mt, {
						dropdownId: zt(t.id),
						icon: h.a.createElement(ut.a, {
							className: Ot.a.icon
						})
					}, h.a.createElement(Ft, {
						comment: t,
						isCommentAuthor: E
					})), h.a.createElement(Mt, {
						dropdownId: Jt(t.id),
						icon: h.a.createElement(ht.a, {
							className: Ot.a.icon
						}),
						onClick: O
					}, h.a.createElement($t, {
						comment: t,
						commentsPageKey: n
					})), v && h.a.createElement(it.a, {
						withOverlay: !0,
						overlayCustomStyles: at.b,
						postId: t.postId,
						commentId: t.id
					}), l && h.a.createElement(rt.a, {
						actionText: o.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: o.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: o.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: o.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: i,
						toggleModal: g,
						withOverlay: !0
					})))
				}),
				rn = n("./src/lib/prettyPrintNumber/index.ts"),
				an = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				cn = n.n(an);
			const dn = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: o,
					reaction: r
				} = e;
				var a, i, c, d;
				const l = Object(p.d)(),
					m = Object(lt.a)(),
					u = Object(p.e)(Yt.d),
					C = null !== (i = null === (a = o.awardingsByCurrentUser) || void 0 === a ? void 0 : a[r.id]) && void 0 !== i ? i : [],
					f = Boolean(C.length);
				return h.a.createElement("button", {
					className: Object(s.a)(t, cn.a.reactionAwardButton, {
						[cn.a.darkMode]: n,
						[cn.a.activeReactionButton]: f
					}),
					onClick: f ? () => {
						l(Ue({
							awardId: r.id,
							awardingId: C[0],
							commentId: o.id
						})), m(Object(dt.h)(r.id, o.id, "quick_button"))
					} : () => {
						l(Pe({
							awardId: r.id,
							commentId: o.id
						})), m(Object(dt.g)(r.id, o.id, "quick_button"))
					}
				}, h.a.createElement("img", {
					className: cn.a.snoomoji,
					src: Object(be.c)({
						award: r,
						postOrComment: o,
						size: 64,
						prefersReducedMotion: u
					}),
					alt: r.name
				}), h.a.createElement("span", {
					className: Object(s.a)(cn.a.countText, {
						[cn.a.darkMode]: n
					})
				}, Object(rn.b)(null !== (d = null === (c = o.awardCountsById) || void 0 === c ? void 0 : c[r.id]) && void 0 !== d ? d : 0)))
			};
			var ln = n("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx"),
				mn = n("./src/lib/objectSelector/index.ts"),
				un = n("./src/reddit/components/RichTextJson/index.tsx"),
				hn = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				pn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Cn = n.n(pn);
			const fn = Object(mn.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var bn = e => {
					const {
						comment: t
					} = e;
					return void 0 === fn(e) ? null : h.a.createElement(un.b, {
						className: Cn.a.SystemMessageText,
						content: Object(hn.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: fn(e),
						useExplicitTextColor: !0
					})
				},
				vn = n("./src/reddit/components/UserIcon/index.tsx"),
				gn = n("./src/reddit/components/CommentsChat/Comment/ThreadPreview/ThreadPreview.m.less"),
				_n = n.n(gn);
			const En = e => {
				let {
					commentIds: t,
					onClick: n,
					fallbackCount: s
				} = e;
				const r = Object(p.e)(e => Object(W.e)(e, {
						commentIds: t
					})),
					a = t.length || s || 0;
				return h.a.createElement("div", {
					onClick: n,
					className: _n.a.ThreadPreview
				}, h.a.createElement("div", {
					className: _n.a.icons
				}, r.slice(0, 3).map(e => h.a.createElement(vn.a, {
					key: e.id,
					className: _n.a.ThreadUserIcon,
					iconUrl: e.profileImage || e.authorIconImage,
					userName: e.author,
					isNSFW: Boolean(e.profileOver18 || e.authorIconIsNSFW)
				}))), h.a.createElement("span", {
					className: _n.a.caption
				}, a ? o.fbt._({
					"*": "{number} replies",
					_1: "1 reply"
				}, [o.fbt._plural(a, "number")], {
					hk: "3Whj3u"
				}) : o.fbt._("Show replies", null, {
					hk: "20xfAa"
				})))
			};
			var In = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				On = n("./src/reddit/components/HumanDate/index.tsx"),
				yn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				wn = n("./src/reddit/controls/ErrorText/index.tsx"),
				Tn = n("./src/reddit/icons/svgs/Error/index.tsx"),
				xn = n("./src/reddit/constants/experiments.ts"),
				kn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const jn = e => Object(kn.c)(e, {
					experimentName: xn.zb,
					experimentEligibilitySelector: kn.a
				}) === xn.qb.Enabled,
				Nn = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(W.c)(e, {
						commentId: n
					});
					if (o && o.associatedAwardId) return Object(Ce.a)(e, o.associatedAwardId)
				};
			var Mn = n("./src/reddit/selectors/poll/index.ts"),
				Sn = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				Ln = n("./src/reddit/components/ContentTooltip/index.tsx"),
				An = n("./src/reddit/helpers/trackers/gild.ts"),
				Rn = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Bn = n("./src/reddit/components/CommentsChat/Comment/AwardsBadge/AwardsHovercard/index.m.less"),
				Dn = n.n(Bn);

			function Pn() {
				return (Pn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Un = {
					height: 280,
					width: 275
				},
				Fn = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: s
					} = e;
					const r = t.awardCountsById,
						a = Object(p.d)(),
						i = Object(lt.a)(),
						c = Object(p.e)(e => Object(Ce.j)(e, {
							thing: t
						})),
						d = Object(p.e)(e => {
							const n = Object(ye.m)(e);
							return (null == n ? void 0 : n.id) === t.authorId
						}),
						l = _t(),
						m = Object(p.e)(Yt.d),
						u = h.a.useCallback(() => {
							a(Object(bt.i)())
						}, [a]);
					return r && c.length ? h.a.createElement(Ln.a, Pn({
						className: Dn.a.container,
						tooltipId: s,
						tooltipSizeEstimate: Un,
						defaultTooltipPosition: "top"
					}, l), h.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, h.a.createElement("div", {
						className: Dn.a.header
					}, h.a.createElement("span", {
						className: Dn.a.title
					}, o.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), h.a.createElement("button", {
						onClick: u
					}, h.a.createElement(Rn.a, {
						className: Dn.a.closeIcon
					}))), h.a.createElement("div", {
						className: Dn.a.awardsList
					}, c.map(e => h.a.createElement("div", {
						key: e.id,
						className: Dn.a.award
					}, h.a.createElement("span", null, Object(rn.b)(r[e.id])), h.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: Dn.a.awardIcon,
						src: Object(be.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: m
						})
					}), h.a.createElement("span", null, e.name))), !d && h.a.createElement("button", {
						className: Dn.a.giveAwardButton,
						onClick: () => {
							u();
							const e = Object(ct.d)(ct.a.GildingFlow, !0);
							return i(Object(An.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), a(Object(ot.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, h.a.createElement(mt.a, {
						className: Dn.a.awardIcon
					}), h.a.createElement("span", null, o.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var Hn = n("./src/reddit/components/CommentsChat/Comment/AwardsBadge/index.m.less"),
				Gn = n.n(Hn);
			const Vn = () => {},
				Kn = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						r = `awards-badge-tooltip-content-${t.id}`,
						a = Object(p.d)(),
						i = Object(lt.a)(),
						c = Object(p.e)(e => Object(Ce.j)(e, {
							thing: t
						})),
						d = h.a.useMemo(() => c.reduce((e, n) => {
							var o;
							return e + ((null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n.id]) || 0)
						}, 0), [c, t]),
						l = h.a.useMemo(() => !(!Object(O.b)(t) || !t.awardingsByCurrentUser) && c.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [c, t]),
						m = Object(p.e)(Yt.d),
						u = Object(p.e)(e => Object(kt.b)(n)(e)),
						C = h.a.useCallback(() => {
							a(Object(bt.h)({
								tooltipId: n
							}))
						}, [a, n]),
						f = h.a.useCallback(() => {
							a(Object(bt.i)())
						}, [a]);
					h.a.useEffect(() => {
						u && i(Object(dt.n)(t.id))
					}, [t.id, u]);
					const b = c.slice(0, 3);
					return b.length ? h.a.createElement(Sn.b, {
						onCloseUserDropdown: f,
						onOpenUserDropdown: Vn,
						dropdownIsOpen: u,
						hoverId: r,
						tooltipId: n
					}, h.a.createElement("button", {
						id: n,
						className: Object(s.a)(Gn.a.badge, {
							[Gn.a.awarded]: l
						}),
						onClick: C
					}, b.map(e => h.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: Gn.a.awardIcon,
						src: Object(be.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: m
						})
					})), h.a.createElement("span", {
						className: Gn.a.countText
					}, o.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [o.fbt._plural(d, "number", Object(rn.b)(d))], {
						hk: "34eaW8"
					}))), h.a.createElement(Fn, {
						id: r,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var qn = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				Wn = n.n(qn);
			var Qn = Object(yn.v)()(Object(p.b)(() => Object(ge.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return Nn(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = Nn(e, {
							commentId: n
						});
						if (o) return Object(be.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: W.c,
					commentPermalink: q.m,
					errorMsgs: q.I,
					flair: q.e,
					threadCount: Ze,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: q.z,
					prediction: Mn.f,
					isSelectedForReply: (e, t) => {
						let {
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(q.L)(e, {
							commentId: n,
							commentsPageKey: o
						})
					},
					subreddit: yn.s,
					shouldRenderSystemMessages: jn,
					commentSubmitError: W.d,
					isPendingComment: W.f,
					isDropdownMenuVisible: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = zt(n),
							s = Jt(n);
						return Object(kt.b)(o)(e) || Object(kt.b)(s)(e)
					}
				}), (e, t) => {
					let {
						commentId: n,
						commentsPageKey: o
					} = t;
					return {
						onSubmitRetry: () => e(Object(Je.n)({
							commentId: n,
							commentsPageKey: o
						})),
						triggerReplyForm: () => e(Object(Je.s)({
							parentCommentId: n,
							commentsPageKey: o,
							singleOpen: !0
						}))
					}
				})(e => {
					let {
						associatedAward: t,
						awardIconUrl: n,
						childrenInfo: r,
						comment: a,
						commentPermalink: i,
						commentsPageKey: c,
						commentSubmitError: d,
						errorMsgs: l,
						flair: m,
						threadCount: u,
						isActive: C,
						isEditing: f,
						isDropdownMenuVisible: b,
						isEmbeddedLiveChat: v = !1,
						isPendingComment: g,
						isSelectedForReply: _,
						postId: E,
						prediction: I,
						renderedInOverlay: O,
						sendEvent: y,
						targetComment: w,
						threadCommentId: T,
						addToRefList: x,
						onReplyClick: k,
						onSubmitRetry: j,
						onThreadClick: N,
						shouldRenderSystemMessages: M,
						triggerReplyForm: S,
						commentThreadingMetadata: L
					} = e;
					var A, R;
					const B = h.a.useRef(null),
						D = h.a.useRef(null),
						[P, U] = h.a.useState(a && a.collapsed),
						[F, H] = h.a.useState(!1),
						[G, V] = h.a.useState(!1),
						K = h.a.useMemo(() => ({
							renderingObjectInfo: a || void 0
						}), [a]),
						q = Object(p.e)(e => a ? Ie(e, a) : []),
						W = Object(p.e)(fe.e),
						Q = () => {
							U(!P)
						};
					if (h.a.useEffect(() => {
							var e;
							D.current && (null === (e = D.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && V(!0)
						}, []), h.a.useEffect(() => {
							if (!D.current) return;
							const e = D.current;
							let t = 250;
							if (F) {
								t = e.scrollHeight + 10;
								const n = () => {
									e.style.maxHeight = "", e.removeEventListener("transitionend", n)
								};
								e.addEventListener("transitionend", n)
							}
							e.style.maxHeight = `${t}px`
						}, [F, G]), h.a.useEffect(() => {
							var e;
							C && (null === (e = B.current) || void 0 === e || e.focus())
						}, [C]), h.a.useEffect(() => {
							B.current && x && x(B)
						}, [x]), !a) return null;
					const Z = a.isSystem,
						z = !a.isDeleted && !Z,
						J = Object.keys(a.awardCountsById || {}).length > 0,
						$ = !!(null == q ? void 0 : q.length),
						Y = null === (A = null == a ? void 0 : a.id) || void 0 === A ? void 0 : A.includes("cb_botmsg");
					return P ? h.a.createElement(tt, {
						commentCount: 1,
						onClick: Q
					}) : h.a.createElement("div", {
						className: Object(s.a)(Wn.a.container, {
							[Wn.a.selectedForReply]: _,
							[Wn.a.hover]: b,
							[Wn.a.hasError]: Boolean(d),
							[Wn.a.BotComment]: Y
						}),
						tabIndex: 0,
						ref: B
					}, a.parentId && !W && h.a.createElement("div", {
						className: Wn.a.replyWrapper
					}, h.a.createElement(ln.a, {
						commentId: a.parentId,
						onReplyClick: e => {
							y(Object(dt.b)(e)), k(e)
						},
						isV2Enabled: !0
					})), h.a.createElement("div", {
						id: w ? "targetComment" : void 0,
						className: Object(s.a)({
							[Wn.a.comment]: !Z,
							[Wn.a.systemMessageComment]: Z && M,
							[Wn.a.highlighted]: w,
							[Wn.a.expanded]: F
						})
					}, z && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
						className: Wn.a.avatar
					}, Y ? h.a.createElement(He.a, null) : h.a.createElement(vn.a, {
						className: Object(s.a)(Wn.a.icon),
						iconUrl: a.profileImage || a.authorIconImage,
						userName: a.author,
						isNSFW: Boolean(a.profileOver18 || a.authorIconIsNSFW)
					})), h.a.createElement("div", null, h.a.createElement($e.a, {
						className: Wn.a.TopMeta,
						childrenInfo: r,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: a,
						commentsPageKey: c,
						compact: !0,
						flair: m,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isEmbeddedLiveChat: v,
						renderedInOverlay: O,
						hideAwards: !0
					}), !Y && h.a.createElement("span", {
						className: Wn.a.timestamp
					}, h.a.createElement(On.d, {
						seconds: a.created
					}))), !f && h.a.createElement("div", {
						ref: D,
						className: Object(s.a)(Wn.a.commentBody, {
							[Wn.a.expanded]: F
						})
					}, I ? h.a.createElement(Ye.a, {
						comment: a,
						prediction: I
					}) : h.a.createElement(h.a.Fragment, null, h.a.createElement(un.b, {
						className: Object(s.a)(Wn.a.richTextJson),
						content: Object(hn.a)(a),
						rtJsonElementProps: K
					}), (J || $) && h.a.createElement("div", {
						className: Wn.a.reactions
					}, J && h.a.createElement(Kn, {
						postOrComment: a
					}), $ && q.map(e => {
						let {
							award: t
						} = e;
						return h.a.createElement(dn, {
							key: t.id,
							comment: a,
							reaction: t
						})
					})), d && h.a.createElement("div", {
						className: Wn.a.error
					}, h.a.createElement(Tn.a, null), h.a.createElement("span", null, o.fbt._("Message failed to send.", null, {
						hk: "24xGQi"
					})), h.a.createElement("button", {
						className: Wn.a.retryButton,
						onClick: j
					}, o.fbt._("Retry", null, {
						hk: "37t7Iq"
					}))), !g && !d && h.a.createElement(sn, {
						className: Wn.a.menu,
						comment: a,
						commentPermalink: i,
						commentsPageKey: c,
						hideThreadButton: !!T,
						onThreadClick: () => N(null == a ? void 0 : a.id)
					}))), f && h.a.createElement(In.a, {
						isV2: !0,
						isEmbeddedLiveChat: v,
						postId: E,
						sendEvent: y,
						draftKey: Object(ze.a)(Qt.c.edit, a.id),
						commentsPageKey: c,
						isEditing: f,
						comment: a
					})), a.isDeleted && h.a.createElement(nt.a, null), z && !f && l && l.map((e, t) => h.a.createElement(wn.b, {
						key: `${t}-${e}`,
						className: Wn.a.errorText
					}, e)), !f && G && !F && h.a.createElement("button", {
						type: "button",
						className: Object(s.a)(Wn.a.readMoreButton),
						onClick: () => {
							H(!F)
						}
					}, o.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), Z && M && h.a.createElement(bn, {
						comment: a
					}), W && !T && (!!(null === (R = null == L ? void 0 : L.replyCommentIds[a.id]) || void 0 === R ? void 0 : R.length) || !!u) && h.a.createElement(En, {
						onClick: () => {
							S(), N(null == a ? void 0 : a.id)
						},
						commentIds: (null == L ? void 0 : L.replyCommentIds[a.id]) || [],
						fallbackCount: u
					})))
				})),
				Zn = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				zn = n("./src/reddit/icons/svgs/ChatBubbles/index.tsx"),
				Jn = n("./src/reddit/components/CommentsChat/index.m.less"),
				$n = n.n(Jn),
				Yn = n("./node_modules/lodash/isEqual.js"),
				Xn = n.n(Yn),
				eo = n("./src/lib/lessComponent.tsx"),
				to = n("./src/reddit/controls/Button/index.tsx"),
				no = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				oo = n.n(no);
			const so = eo.a.div("ButtonWrapper", oo.a),
				ro = e => {
					let {
						top: t
					} = e;
					return h.a.createElement("span", {
						className: Object(s.a)(oo.a.ChunkPlaceholder, {
							[oo.a.top]: t
						})
					}, o.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				ao = e => {
					let {
						className: t,
						isLoading: n,
						setRef: o,
						...r
					} = e;
					return h.a.createElement("div", {
						ref: o,
						className: Object(s.a)(t, oo.a.ScrollerWrapper, {
							[oo.a.loading]: n
						})
					}, !n && r.isPrevLoading && h.a.createElement(ro, {
						top: !0
					}), r.children, !n && r.isNextLoading && h.a.createElement(ro, null))
				};
			class io extends h.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = h.a.createRef(), this._refBeforeActiveComments = h.a.createRef(), this._refNextActiveComments = h.a.createRef(), this._refActiveComments = h.a.createRef(), this.resizeObserver = null, this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
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
					const t = e.children.length !== this.props.children.length || !Xn()(_()(e.children), _()(this.props.children)) || !Xn()(m()(e.children), m()(this.props.children));
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
						className: e
					} = this.props, t = this.state.newCommentsCount > 0 ? Object(s.a)([oo.a.NewComments, oo.a.show]) : oo.a.NewComments;
					return h.a.createElement(h.a.Fragment, null, h.a.createElement(ao, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, h.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), h.a.createElement("div", {
						key: "activeCommentsSection",
						ref: this._refActiveComments,
						className: oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), h.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), h.a.createElement(so, null, h.a.createElement(to.l, {
						className: t,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", o.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [o.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var co = io,
				lo = n("./src/reddit/components/TrackingHelper/index.tsx"),
				mo = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				uo = n("./src/reddit/selectors/posts.ts"),
				ho = n("./src/redditGQL/types.ts");
			const po = e => {
				if (!e) return null;
				const t = {},
					n = {},
					o = t => {
						var n;
						return (null === (n = null == e ? void 0 : e[t]) || void 0 === n ? void 0 : n.parentId) ? o(e[t].parentId) : t
					};
				return Object.values(e).forEach(e => {
					if (e)
						if (null == e ? void 0 : e.parentId) {
							const s = o(e.parentId);
							t[e.id] = s, n[s] = n[s] ? [...n[s], e.id] : [e.id]
						} else t[e.id] = null
				}), {
					rootParentIdMap: t,
					replyCommentIds: n
				}
			};
			var Co = n("./node_modules/classnames/index.js"),
				fo = n.n(Co),
				bo = n("./src/lib/hooks/usePrevious.ts");
			const vo = e => {
					const [t, n] = Object(u.useState)(e.isMounted), [o, s] = Object(u.useState)(!1), r = Object(bo.a)(e.isMounted), a = Object(u.useRef)();
					return Object(u.useEffect)(() => {
						r && !e.isMounted && (e.durationMs ? (s(!0), a.current = setTimeout(() => {
							n(!1), s(!1)
						}, e.durationMs)) : n(!1)), !r && e.isMounted && n(!0)
					}, [r, e.isMounted, e.durationMs]), Object(u.useEffect)(() => () => {
						a.current && clearTimeout(a.current)
					}, []), t ? h.a.createElement("div", {
						className: fo()(e.className || "", {
							[e.unmountAnimationClass]: o
						})
					}, e.children) : null
				},
				go = 6e4,
				_o = 500,
				Eo = 5e3,
				Io = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				Oo = Object(ge.c)({
					blockedRedditors: ft.a,
					blockedRedditorsPending: ft.b,
					chatCommentLinks: q.g,
					isPending: q.d,
					liveCommentsWebsocket: uo.D,
					moreCommentsLink: q.H,
					isCommentReactionStreamingKillSwitchEnabled: fe.g,
					currentUserId: ye.k,
					comments: W.a,
					isLiveChatThreadingEnabled: fe.e,
					showReactionsHint: e => {
						const t = Object(fe.d)(e),
							n = Object(ye.b)(3 * r.D)(e),
							o = Object(mo.a)(e, {
								experience: ho.eb.LiveChatReactionEdu
							});
						return t && n && !!(null == o ? void 0 : o.value)
					}
				}),
				yo = Object(p.b)(Oo, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(ee(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						U(0, t)
					})(0, n)),
					loadMoreComments: (n, o) => e(Object(b.n)(t.commentsPageKey, n, o)),
					loadBlockedRedditors: () => e(Object(f.g)()),
					loadComments: async n => await e(Object(ne.commentsPageDataRequested)(t.postId, null == n ? void 0 : n.commentId, {
						sort: r.v.NEW,
						comment_awardings_by_current_user: !0
					}, r.v.NEW, null == n ? void 0 : n.threadRequest)),
					fetchAvailableReactionAwards: async t => e(Re(t)),
					processReactionAwardStreamData: t => e(Ae(t)),
					clearReplyForm: n => e(Object(Je.b)({
						parentCommentId: n,
						commentsPageKey: t.commentsPageKey
					})),
					createBotComment: () => {
						e(z({
							authorFlair: void 0,
							headCommentId: void 0,
							numComments: 0,
							commentsPageKey: t.commentsPageKey,
							comment: qe({
								subredditId: t.subredditId,
								text: We
							})
						})), e(Object(te.c)({
							experience: ho.eb.LiveChatReactionEdu,
							value: !1
						})), e(Object(te.d)(ho.eb.LiveChatReactionEdu))
					}
				})),
				wo = e => {
					const t = new Set;
					return e.filter(e => !t.has(e.id) && (t.add(e.id), !0))
				};
			class To extends h.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = h.a.createRef(), this._refThreadScroller = h.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, this.scrollThreadToBottom = () => {
						this._refThreadScroller && this._refThreadScroller.current && this._refThreadScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.handleReactionStreamData = this.handleReactionStreamData.bind(this), this.sendViewLastMessageTelemetry = d()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now(),
						realtimeGQLVariables: void 0,
						threadMetaData: po(this.props.comments),
						threadCommentId: null,
						loadedThreads: {},
						pinnedChatbotMessage: e.showReactionsHint
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(i.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = a(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, go)
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
					e(t), this.updateRealtimeGQLVariables(), this.props.showReactionsHint && !this._removeReactionsHintTimeout && this.setReactionsHintTimeout(), this.props.isLiveChatThreadingEnabled && this.props.loadComments({
						threadRequest: !0
					})
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater()), this._removeReactionsHintTimeout && clearTimeout(this._removeReactionsHintTimeout)
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
						draftKey: d,
						showReactionsHint: l
					} = this.props, {
						expandedCommentIds: m,
						timestampUpdateTrigger: u,
						threadCommentId: h,
						threadMetaData: p,
						pinnedChatbotMessage: C
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks !== s || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.threadMetaData !== p || e.showReactionsHint !== l || t.expandedCommentIds.length !== m.length || t.pinnedChatbotMessage !== C || t.timestampUpdateTrigger !== u || t.threadCommentId !== h
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: r,
						offLiveCommentsSubscribe: i,
						onLiveCommentsSubscribe: c,
						postId: d
					} = this.props;
					if (d !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && i(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), d && r && (c(s, r, d), this._subscribedPostId = d, this._subscribedLiveCommentsWebsocket = r), this.updateRealtimeGQLVariables()), e.blockedRedditors.ids !== t.ids) {
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
						const e = a(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(o), o && n.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
					this.props.showReactionsHint && this.props.showReactionsHint !== e.showReactionsHint && (this.setState({
						pinnedChatbotMessage: !0
					}), this.setReactionsHintTimeout()), this.props.isLiveChatThreadingEnabled && e.comments !== this.props.comments && this.setState(() => ({
						threadMetaData: po(this.props.comments)
					}))
				}
				setReactionsHintTimeout() {
					this._removeReactionsHintTimeout = setTimeout(() => {
						this.setState({
							pinnedChatbotMessage: !1
						}), this.props.createBotComment(), this.props.sendEvent(Object(dt.m)())
					}, Eo)
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
						sendEvent: o,
						isLiveChatThreadingEnabled: s
					} = this.props;
					t && !t.pending && (e(t.moreCommentId, s), o(Object(dt.l)("history", n)))
				}
				openThread(e) {
					const {
						loadedThreads: t
					} = this.state;
					t[e] || (this.props.loadComments({
						commentId: e,
						threadRequest: !0
					}), this.setState({
						loadedThreads: {
							...this.state.loadedThreads,
							[e]: !0
						}
					})), this.setState({
						threadCommentId: e
					})
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = m()(e);
					(null == n ? void 0 : n.id) && t(Object(dt.c)(n.id))
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
				filteredComments(e) {
					const {
						threadMetaData: t
					} = this.state, {
						isLiveChatThreadingEnabled: n,
						comments: o,
						chatCommentLinks: s
					} = this.props;
					return wo(s).filter(s => {
						if (n) {
							const n = null == o ? void 0 : o[s.id];
							if (!n) return !1;
							if (e) {
								if (n.id !== e && (null == t ? void 0 : t.rootParentIdMap[n.id]) !== e) return !1
							} else if (n.parentId) return !1
						}
						return !0
					})
				}
				renderScroller(e) {
					let {
						isThread: t
					} = e;
					const {
						blockedRedditors: n,
						className: r,
						commentId: a,
						commentsPageKey: i,
						isLiveChatThreadingEnabled: c,
						isEmbeddedLiveChat: d,
						isLoading: l,
						isPending: m,
						postId: u,
						renderedInOverlay: p,
						clearReplyForm: C,
						sendEvent: f,
						moreCommentsLink: b
					} = this.props, {
						expandedCommentIds: v,
						targetCommentIndex: g,
						timestampUpdateTrigger: _,
						threadMetaData: E,
						threadCommentId: I
					} = this.state;
					return h.a.createElement(vo, {
						durationMs: t ? _o : 0,
						isMounted: !t || !!I,
						className: Object(s.a)("", {
							[$n.a.Thread]: t
						}),
						unmountAnimationClass: $n.a.scrollAway
					}, t && h.a.createElement("div", {
						className: $n.a.ThreadTitle
					}, h.a.createElement(Zn.a, {
						className: $n.a.IconArrow,
						onClick: () => {
							C(I), this.setState({
								threadCommentId: null
							})
						}
					}), h.a.createElement(zn.a, {
						className: $n.a.IconBubbles
					}), h.a.createElement("span", null, o.fbt._("Thread", null, {
						hk: "267PsV"
					}))), h.a.createElement(co, {
						className: Object(s.a)(r, {
							[$n.a.EmbeddedLiveChatScroller]: d,
							[$n.a.ThreadScroller]: t,
							[$n.a.FixedHeightScroller]: c
						}),
						ref: t ? this._refThreadScroller : this._refScroller,
						key: `comments-chat-scroller${t?"-thread":""}`,
						isLoading: l || m,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!b,
						targetCommentIndex: g,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, this.filteredComments(t ? I : null).map(e => Io(n.ids, v, e) ? h.a.createElement(tt, {
						commentCount: 1,
						key: `scroll-node-${e.id}`,
						onClick: () => this.expandComment(e.id)
					}) : h.a.createElement(Qn, {
						key: `scroll-node-${e.id}${t?"-thread":""}`,
						commentId: e.id,
						commentsPageKey: i,
						isEmbeddedLiveChat: d,
						postId: u,
						renderedInOverlay: !!p,
						sendEvent: f,
						timestampUpdateTrigger: _,
						targetComment: e.id === a,
						threadCommentId: t ? I : null,
						commentThreadingMetadata: E,
						addToRefList: t => this._refList[e.id] = t,
						onReplyClick: e => this.scrollToTargetComment(e),
						onThreadClick: e => {
							f(Object(dt.i)(e)), this.openThread(e)
						}
					}))))
				}
				render() {
					const {
						chatCommentLinks: e,
						emptyStateClassName: t,
						isEmbeddedLiveChat: n,
						isLoading: o,
						isPending: r,
						isCommentReactionStreamingKillSwitchEnabled: a,
						isLiveChatThreadingEnabled: i
					} = this.props, {
						realtimeGQLVariables: c,
						pinnedChatbotMessage: d
					} = this.state, l = !(e && e.length || o || r);
					return h.a.createElement(h.a.Fragment, null, !a && c && h.a.createElement(C.a, {
						variables: c,
						onData: this.handleReactionStreamData,
						queryKey: "liveChatCommentReactions"
					}), l ? h.a.createElement(Fe.c, {
						className: Object(s.a)(t, {
							[$n.a.EmbeddedLiveChatScroller]: n
						}),
						isChat: !0
					}) : h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
						className: $n.a.scrollerWrap
					}, i && this.renderScroller({
						isThread: !0
					}), this.renderScroller({
						isThread: !1
					}))), d && h.a.createElement(Qe, {
						message: We
					}), this.props.children && this.props.children({
						scrollToBottom: this.state.threadCommentId ? this.scrollThreadToBottom : this.scrollToBottom
					}))
				}
			}
			t.default = yo(Object(lo.c)(To))
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.ob.POST
			}), l = async (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.ob.POST
			}), m = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.ob.POST
			}), u = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.ob.POST
			}), h = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: s.ob.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
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
				d = n("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, n) => {
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
					...d,
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
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/ChatBotAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = () => s.a.createElement("svg", {
				width: "32",
				height: "32",
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M26.4615 13.1693V13.0339C26.4615 11.4831 26.5415 10 24.6646 9.78464C22.8185 9.78464 20.7446 9.83387 18.9169 9.83387H18.2277C18.2266 9.48593 18.2019 9.13847 18.1539 8.79387C18.1363 8.72881 18.098 8.6713 18.0446 8.63017C17.9912 8.58904 17.9258 8.56656 17.8585 8.56618C17.3539 8.51695 16.8492 8.49233 16.3446 8.48618V7.77233C16.3446 7.38464 16.2277 6.1908 16.2277 5.92618C16.2277 6.28926 17.36 5.58772 17.4585 5.50156C17.7766 5.15023 17.9832 4.71239 18.0522 4.24351C18.1212 3.77462 18.0495 3.29581 17.8462 2.86772C17.0031 1.36618 14.56 1.2308 13.8708 3.07695C13.7066 3.47811 13.6593 3.91757 13.7344 4.34447C13.8096 4.77138 14.0041 5.16829 14.2954 5.48926C14.3877 5.60003 15.4585 6.26464 15.4585 5.91387C15.4585 6.27695 15.3108 7.58772 15.3108 8.07387V8.5108C14.8677 8.5108 14.4246 8.55387 13.9815 8.6031C13.3662 8.67079 13.3662 9.3231 13.3662 9.83387H12.5415C10.6954 9.83387 9.06462 10.0185 7.24308 10.0185C5.42154 10.0185 5.00308 11.6062 5.00308 13.0277V13.3416C3.69231 14.0369 2.42462 15.0216 2.42462 17.2308C2.42462 19.2062 3.65539 20.3693 5.00308 21.0585V25.5693C5.00308 26.96 5.67385 28.2093 7.16924 28.2093C8.76308 28.2093 10.4308 28.0431 12.0246 28.0431C16.0985 28.0431 20.3385 27.9877 24.4062 27.9877C25.9015 27.9877 26.4739 26.96 26.4739 25.5693V21.1816C27.3643 20.9603 28.1534 20.4437 28.7122 19.7161C29.2711 18.9884 29.5667 18.0928 29.5508 17.1754C29.5406 16.2628 29.2337 15.3783 28.6764 14.6555C28.119 13.9328 27.3416 13.4111 26.4615 13.1693V13.1693Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M15.8769 2.4616C17.8954 2.32006 18.1046 5.42775 15.9877 5.53852C15.5796 5.55321 15.1825 5.40521 14.8836 5.12708C14.5847 4.84895 14.4085 4.46347 14.3938 4.05545C14.3791 3.64742 14.5271 3.25027 14.8053 2.95137C15.0834 2.65246 15.4689 2.47629 15.8769 2.4616V2.4616Z",
				fill: "#CCCCCA"
			}), s.a.createElement("path", {
				d: "M3.18152 17.4462C3.21876 16.773 3.4115 16.1176 3.74463 15.5314C4.07776 14.9452 4.54221 14.4442 5.10152 14.0677C5.63554 16.1137 5.63342 18.2628 5.09536 20.3077C4.00613 19.6062 3.24921 18.8062 3.18152 17.4462Z",
				fill: "#CCCCCA"
			}), s.a.createElement("path", {
				d: "M24.2092 27.1324C22.72 27.1324 21.0831 27.36 19.5938 27.36H7.34154C5.24308 27.36 5.75384 24.6154 5.75384 23.3847V20.3693C5.75881 20.3346 5.75881 20.2994 5.75384 20.2647C6.03692 17.2308 5.50769 13.6185 5.64308 13.5385C5.64308 11.92 6.19077 10.5477 7.97538 10.5477C10.4369 10.5477 21.8031 10.3077 24.4246 10.3077C25.7661 10.4616 25.7046 12.1539 25.6554 13.6124C25.6554 13.6124 25.6554 15.7785 25.6554 16.1908C25.6554 18.597 25.7723 21.2308 25.7723 23.6308C25.7662 24.8 26.2708 27.1324 24.2092 27.1324Z",
				fill: "#CCCCCA"
			}), s.a.createElement("path", {
				d: "M26.5169 20.3938C25.9201 18.2959 25.9201 16.0732 26.5169 13.9753C27.1757 14.23 27.743 14.6763 28.1455 15.2566C28.5481 15.8369 28.7675 16.5245 28.7754 17.2307C28.7668 17.9255 28.5459 18.6009 28.1421 19.1664C27.7384 19.7318 27.1712 20.1602 26.5169 20.3938V20.3938Z",
				fill: "#CCCCCA"
			}), s.a.createElement("path", {
				d: "M12.8492 17.2308C12.9231 15.8769 11.6677 14.9169 10.4185 14.8492C9.94438 14.8553 9.4827 15.0017 9.09171 15.2699C8.70072 15.5381 8.39793 15.9161 8.22156 16.3563C8.04518 16.7964 8.00311 17.2789 8.10067 17.7429C8.19822 18.2068 8.43103 18.6316 8.76971 18.9634C9.10839 19.2952 9.53777 19.5193 10.0037 19.6073C10.4696 19.6953 10.9511 19.6434 11.3875 19.4581C11.8239 19.2727 12.1956 18.9623 12.4558 18.5659C12.7159 18.1695 12.8529 17.7049 12.8492 17.2308V17.2308Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M21.2984 14.9416C20.6647 14.9342 20.0514 15.1656 19.5805 15.5898C19.1096 16.0139 18.8156 16.5998 18.7569 17.2308C18.7649 17.8436 19.0119 18.4291 19.4452 18.8625C19.8786 19.2958 20.4641 19.5428 21.0769 19.5508C24.0738 19.3908 24.2954 15.1016 21.2984 14.9416Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M8.71387 17.2308C8.71387 16.7722 8.89605 16.3324 9.22035 16.0081C9.54464 15.6838 9.98448 15.5016 10.4431 15.5016C10.9017 15.5016 11.3416 15.6838 11.6658 16.0081C11.9901 16.3324 12.1723 16.7722 12.1723 17.2308C12.1723 17.6894 11.9901 18.1293 11.6658 18.4536C11.3416 18.7779 10.9017 18.96 10.4431 18.96C9.98448 18.96 9.54464 18.7779 9.22035 18.4536C8.89605 18.1293 8.71387 17.6894 8.71387 17.2308V17.2308Z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M21.0954 18.9539C20.6376 18.9539 20.1985 18.772 19.8748 18.4483C19.5511 18.1246 19.3692 17.6855 19.3692 17.2277C19.3692 16.7699 19.5511 16.3309 19.8748 16.0072C20.1985 15.6834 20.6376 15.5016 21.0954 15.5016C21.5532 15.5016 21.9922 15.6834 22.3159 16.0072C22.6396 16.3309 22.8215 16.7699 22.8215 17.2277C22.8215 17.6855 22.6396 18.1246 22.3159 18.4483C21.9922 18.772 21.5532 18.9539 21.0954 18.9539Z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M11.04 11.0769C9.96923 11.0769 9.07077 11.2369 7.99384 11.2246C7.85091 11.1795 7.70031 11.1639 7.55116 11.1787C7.40202 11.1935 7.25743 11.2384 7.12615 11.3107C7.08639 11.3551 7.06008 11.4099 7.05029 11.4687C7.0405 11.5274 7.04764 11.5878 7.07087 11.6426C7.09411 11.6975 7.13247 11.7446 7.18149 11.7784C7.23051 11.8123 7.28816 11.8315 7.34769 11.8338C9.28 11.8338 11.04 11.6984 12.9661 11.7231L16.1846 11.76C16.3275 11.8054 16.4781 11.8212 16.6273 11.8064C16.7765 11.7916 16.9212 11.7465 17.0523 11.6738C17.2185 11.4831 16.5292 11.1446 16.2585 11.1446L11.04 11.0769Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M18.7754 11.0277C18.5169 11.0277 17.8216 10.8861 17.6185 11.1261C17.5806 11.1706 17.5558 11.2248 17.5471 11.2826C17.5383 11.3405 17.5459 11.3996 17.5689 11.4533C17.5919 11.507 17.6295 11.5533 17.6774 11.5868C17.7253 11.6203 17.7816 11.6398 17.84 11.643C18.0985 11.643 19.2308 11.7292 19.4339 11.4954C19.6369 11.2615 19.0769 11.0277 18.7754 11.0277Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M4.35079 15.2369C4.23387 15.3969 3.16926 17.4154 4.10464 16.9846C4.46391 16.7201 4.76545 16.385 4.99079 16C5.15695 15.7169 4.84926 14.5415 4.37541 15.2123L4.35079 15.2369Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M26.9908 14.7692C26.5785 14.7077 26.1785 16.08 26.8369 16.08C28.0677 16.08 27.3846 14.8308 26.9908 14.7692Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M15.0031 3.54455C15.2923 3.74763 15.8031 3.32917 15.8092 3.01532C15.8277 2.27686 14.24 3.00917 15.0031 3.54455Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M10.0492 16.1477C10.0357 16.1032 10.0124 16.0624 9.98114 16.028C9.94986 15.9936 9.91134 15.9666 9.86836 15.949C9.82537 15.9313 9.77901 15.9234 9.7326 15.9258C9.6862 15.9283 9.64091 15.941 9.60001 15.9631C9.44617 16.0369 9.20001 16.0554 9.07694 16.1784C9.01506 16.2485 8.96836 16.3306 8.93976 16.4195C8.91117 16.5085 8.9013 16.6024 8.91078 16.6954C8.91311 16.7372 8.92378 16.7781 8.94215 16.8157C8.96053 16.8533 8.98624 16.8869 9.01778 16.9144C9.04932 16.9419 9.08604 16.9628 9.12579 16.976C9.16555 16.9891 9.20752 16.9941 9.24925 16.9908C9.26366 17.0091 9.28018 17.0256 9.29848 17.04L9.91386 17.44C9.96641 17.4696 10.0265 17.4832 10.0867 17.479C10.1469 17.4747 10.2045 17.4529 10.2524 17.4162C10.3003 17.3794 10.3363 17.3294 10.356 17.2724C10.3756 17.2154 10.3781 17.1538 10.3631 17.0954L10.0492 16.1477Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M20.9969 17.0338L20.4677 16.1538C20.444 16.1127 20.4111 16.0777 20.3715 16.0514C20.332 16.0252 20.287 16.0084 20.2399 16.0024C20.1928 15.9965 20.145 16.0015 20.1002 16.0171C20.0554 16.0327 20.0148 16.0584 19.9815 16.0923L19.6739 16.4923C19.6367 16.5423 19.6153 16.6023 19.6123 16.6646C19.5946 16.6966 19.5838 16.7319 19.5804 16.7683C19.5771 16.8048 19.5814 16.8415 19.5929 16.8762C19.6045 16.9109 19.6231 16.9428 19.6476 16.9699C19.6722 16.9971 19.702 17.0188 19.7354 17.0338L20.5723 17.4584C20.6314 17.4959 20.7014 17.5121 20.7709 17.5044C20.8404 17.4967 20.9052 17.4656 20.9546 17.4161C21.0041 17.3667 21.0352 17.3019 21.0429 17.2324C21.0506 17.1629 21.0344 17.0929 20.9969 17.0338V17.0338Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M14.2339 9.23082C14.6831 9.18774 15.1323 9.16928 15.5816 9.15697C16.2734 9.14124 16.9657 9.16178 17.6554 9.21851C17.6842 9.45119 17.6965 9.68563 17.6923 9.92005H13.9016C13.9016 9.64928 13.9077 9.23082 14.2339 9.23082Z",
				fill: "#CCCCCA"
			}), s.a.createElement("path", {
				d: "M7.28001 13.1446C7.26985 13.1896 7.27012 13.2362 7.28078 13.281C7.29145 13.3258 7.31224 13.3676 7.34155 13.4031C7.33564 13.5697 7.38491 13.7337 7.48172 13.8694C7.57854 14.0052 7.71747 14.1052 7.87694 14.1539C7.97929 14.1772 8.08529 14.1797 8.18863 14.1612C8.29196 14.1427 8.39051 14.1035 8.47838 14.0461C8.56626 13.9887 8.64166 13.9141 8.7001 13.8269C8.75853 13.7397 8.79879 13.6416 8.81848 13.5385C9.12001 12.5169 7.50155 12.0185 7.28001 13.1446Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M24.0923 12.923C24.0261 12.8019 23.9281 12.7012 23.8088 12.6318C23.6894 12.5623 23.5534 12.5269 23.4154 12.5292C23.3661 12.4906 23.3057 12.469 23.2431 12.4677C22.7939 12.4677 22.7016 13.083 22.7446 13.4092C22.7877 13.7353 23.3231 13.963 23.6923 13.8769C23.7936 13.8589 23.8888 13.8158 23.9692 13.7515C24.0495 13.6872 24.1125 13.6038 24.1522 13.509C24.192 13.4141 24.2074 13.3107 24.1969 13.2084C24.1865 13.106 24.1505 13.0079 24.0923 12.923Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M8.11078 13.68C7.76001 13.8584 7.64309 13.2677 7.8154 13.1015C7.9877 12.9354 8.34463 13.1384 8.36309 13.28C8.36715 13.3645 8.34512 13.4482 8.29999 13.5197C8.25485 13.5913 8.1888 13.6472 8.11078 13.68V13.68Z",
				fill: "#A5A4A4"
			}), s.a.createElement("path", {
				d: "M23.4769 13.5385C23.3965 13.5421 23.3171 13.5198 23.2504 13.4749C23.1836 13.43 23.1331 13.3648 23.1062 13.2889C23.0793 13.2131 23.0775 13.1306 23.101 13.0537C23.1246 12.9767 23.1722 12.9094 23.2369 12.8616C23.8277 12.6893 24 13.5385 23.4769 13.5385Z",
				fill: "#A5A4A4"
			}), s.a.createElement("path", {
				d: "M27.4154 0.615433C26.5169 0.935433 25.6185 1.23082 24.7262 1.60005C24.2216 1.79697 23.7723 2.11697 23.2923 2.34466L23.1016 1.16928C23.0791 1.10161 23.0334 1.04408 22.9726 1.0069C22.9117 0.969721 22.8397 0.955303 22.7692 0.966202C21.3354 1.1262 19.6923 2.39389 18.6339 3.32312C18.5973 3.35171 18.5694 3.3898 18.5531 3.43323C18.5368 3.47665 18.5328 3.52373 18.5416 3.56928V3.79082C18.5418 3.8379 18.5529 3.88429 18.5739 3.92643C18.5949 3.96856 18.6253 4.00531 18.6628 4.03384C18.7002 4.06238 18.7437 4.08193 18.7899 4.09101C18.8361 4.10009 18.8838 4.09844 18.9292 4.0862C19.6923 3.92005 20.4492 3.69236 21.2 3.51389C21.2 4.48005 21.2 6.35082 22.48 5.61851C24.4779 4.4632 26.245 2.94852 27.6923 1.15082C27.8892 0.935433 27.7354 0.523125 27.4154 0.615433Z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M12.6708 3.45235L10.4 3.33543L11.2308 2.10466C11.254 2.06399 11.2677 2.01856 11.2708 1.97181C11.2738 1.92506 11.2661 1.87824 11.2483 1.8349C11.2305 1.79157 11.203 1.75288 11.168 1.72178C11.133 1.69067 11.0913 1.66798 11.0462 1.65543C8.78155 1.33543 6.51078 0.75081 4.20924 0.966194C4.17209 0.96063 4.13416 0.963431 4.09823 0.974395C4.0623 0.985358 4.02927 1.00421 4.00156 1.02956C3.97384 1.05492 3.95214 1.08615 3.93803 1.12097C3.92392 1.15578 3.91776 1.19331 3.92001 1.23081C3.91089 1.27203 3.91176 1.31484 3.92255 1.35566C3.93335 1.39647 3.95375 1.43411 3.98206 1.46544C4.01037 1.49676 4.04577 1.52085 4.08529 1.5357C4.12481 1.55056 4.16731 1.55574 4.20924 1.55081C5.70463 1.74773 6.96617 2.73235 8.36309 3.24927C8.00001 3.90158 7.36617 4.32004 7.13232 5.09542C7.12131 5.14081 7.12057 5.18807 7.13014 5.23378C7.13972 5.27948 7.15937 5.32248 7.18768 5.35962C7.21598 5.39677 7.25221 5.42713 7.29373 5.44849C7.33526 5.46986 7.38103 5.48169 7.4277 5.48312C9.37847 5.56927 11.12 4.86773 12.8185 4.02466C13.12 3.88312 12.96 3.47081 12.6708 3.45235Z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M10.5415 2.11689L9.63075 3.47689C9.60133 3.5266 9.58563 3.58322 9.58526 3.64098C9.58489 3.69874 9.59987 3.75556 9.62866 3.80564C9.65745 3.85571 9.69903 3.89724 9.74913 3.92598C9.79923 3.95471 9.85607 3.96963 9.91383 3.9692C10.4677 3.9692 11.5631 3.82766 12.1169 3.85843C10.7735 4.46983 9.33524 4.84656 7.8646 4.97228C8.22152 4.35689 8.83691 3.87689 9.09537 3.18766C9.11803 3.10443 9.10679 3.01561 9.06412 2.94065C9.02144 2.86568 8.95081 2.81068 8.86768 2.78766C7.59082 2.36536 6.33771 1.87439 5.11383 1.31689C6.64614 1.41536 9.01537 1.88305 10.5415 2.11689Z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M24.7262 3.51996C24.0304 4.07931 23.2963 4.58928 22.5292 5.04611C21.5385 5.6615 21.6554 3.42765 21.6308 3.07688C21.6308 2.84919 21.2677 2.92919 21.0154 2.98458C20.4 3.12611 19.7108 3.35381 19.0954 3.52611C19.6 3.17534 20.3262 2.55381 20.8739 2.22765L21.7969 1.64919C22.7262 1.03381 22.6154 2.39996 22.6831 2.81227C22.6945 2.85716 22.7148 2.8993 22.7428 2.93617C22.7708 2.97304 22.806 3.00389 22.8462 3.02686C22.8864 3.04984 22.9308 3.06448 22.9768 3.0699C23.0228 3.07532 23.0694 3.07142 23.1139 3.05842C23.8339 2.81842 24.3877 2.33842 25.1016 2.05534C25.7169 1.81534 26.7139 1.28611 27.3292 1.06458C26.5118 1.93473 25.6425 2.75469 24.7262 3.51996V3.51996Z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M22.6092 20.6585C22.4985 20.6585 22.1662 20.5908 22.0985 20.5908C21.3969 20.5908 14.16 20.8001 11.2923 20.8493C10.8948 20.7857 10.4898 20.7857 10.0923 20.8493H9.00308C8.60924 20.8493 8.42462 21.1201 8.73847 21.3539C8.88794 21.4502 9.04929 21.5268 9.21847 21.5816C9.28616 22.5662 9.21847 24.9477 10.0677 25.2001C10.9468 25.3886 11.8465 25.4631 12.7446 25.4216L16.1723 25.3908C17.9385 25.3908 20.0062 25.477 21.7662 25.0524C22.1969 24.9477 22.3385 22.5293 22.3815 21.3601C22.5269 21.3265 22.6675 21.2748 22.8 21.2062C23.2739 20.9847 23.0092 20.6524 22.6092 20.6585Z",
				fill: "black"
			}), s.a.createElement("path", {
				d: "M21.8523 21.1692L9.81537 21.3846C9.87691 21.9076 10.1046 23.3907 10.0861 23.7415V23.8769C10.2277 25.1076 11.3169 24.9046 12.1538 24.8984L17.2923 24.8492C17.7477 24.8492 19.8031 24.8492 20.0615 24.8123C21.0769 24.7507 21.4646 24.603 21.6246 23.643C21.79 22.8291 21.8663 21.9996 21.8523 21.1692V21.1692Z",
				fill: "white"
			}), s.a.createElement("path", {
				d: "M21.9077 22.8308L18.4615 22.9416C17.3908 22.9724 16.0984 23.1693 15.1446 22.6093C15.0775 22.5667 15.0012 22.5407 14.9221 22.5332C14.8429 22.5257 14.7632 22.537 14.6892 22.5662C14.523 22.6626 14.375 22.7876 14.2523 22.9354L13.9015 22.4431C13.8215 22.3324 13.4092 22.2031 13.3292 22.3631L12.8184 23.3847C12.688 22.9836 12.5933 22.5717 12.5354 22.1539C12.5354 21.9877 12.0246 21.8954 11.92 22.037C11.6554 22.4739 11.5508 23.0093 10.8861 22.997C10.4677 22.997 10.0308 22.997 9.61229 23.0462C9.29845 23.0462 9.83999 23.3293 9.99383 23.3231C11.4954 23.2431 11.6554 23.477 12.0861 22.8739C12.1874 23.2633 12.3297 23.6408 12.5108 24C12.5784 24.1354 13.0154 24.2954 13.1261 24.117L13.7415 22.9477L14.0554 23.3908C14.1415 23.5077 14.5354 23.6308 14.6277 23.4708C14.7416 23.2457 14.9059 23.0499 15.1077 22.8985C15.5593 23.1289 16.0591 23.2491 16.5661 23.2493C18.4123 23.2985 20.32 23.1693 22.1969 23.12C22.5538 23.1016 22.0984 22.8247 21.9077 22.8308Z",
				fill: "black"
			}))
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => e.isFilled ? s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M4.88595 13.444C4.36701 13.2885 3.86823 13.0723 3.39995 12.8L1.14695 13.362C1.04227 13.3879 0.932671 13.3863 0.828782 13.3574C0.724894 13.3285 0.630237 13.2732 0.553985 13.1969C0.477733 13.1207 0.422472 13.026 0.393557 12.9221C0.364642 12.8183 0.363055 12.7087 0.388949 12.604L0.949948 10.354C0.0362578 8.79992 -0.232941 6.94998 0.199949 5.19997C0.500428 3.96481 1.14111 2.83861 2.04929 1.94916C2.95748 1.05971 4.09679 0.442643 5.33795 0.167974C6.47394 -0.0883142 7.65628 -0.0533851 8.77516 0.269517C9.89404 0.59242 10.9132 1.19282 11.7379 2.01497C12.5377 2.81615 13.1259 3.80335 13.4499 4.88797C12.727 4.8582 12.0031 4.9207 11.2959 5.07397C9.80268 5.40459 8.43199 6.14717 7.33944 7.21745C6.24689 8.28772 5.47624 9.64283 5.11495 11.129C4.93328 11.8866 4.85623 12.6655 4.88595 13.444ZM17.9859 8.26497C17.1609 7.44322 16.1418 6.84307 15.023 6.5202C13.9042 6.19732 12.722 6.16216 11.5859 6.41797C10.3453 6.69314 9.20666 7.31044 8.29905 8.19985C7.39143 9.08926 6.75119 10.2152 6.45095 11.45C6.01885 13.1986 6.28766 15.0469 7.19995 16.6L6.63595 18.852C6.60975 18.9567 6.61112 19.0664 6.63993 19.1704C6.66873 19.2745 6.72399 19.3693 6.80032 19.4456C6.87665 19.5219 6.97145 19.5772 7.07548 19.606C7.17951 19.6348 7.28923 19.6362 7.39395 19.61L9.64695 19.047C10.7002 19.6709 11.9018 20.0001 13.1259 20C13.6895 19.9994 14.2511 19.9323 14.7989 19.8C16.0342 19.5 17.1607 18.8597 18.0505 17.9519C18.9403 17.0441 19.5578 15.905 19.8329 14.664C20.0882 13.5282 20.0529 12.3463 19.7302 11.2278C19.4076 10.1093 18.808 9.09026 17.9869 8.26497H17.9859Z"
			})) : s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z"
			}))
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
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
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
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
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, n) {
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
					viewBox: "0 0 16 16"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.3458005d803986d23434.js.map