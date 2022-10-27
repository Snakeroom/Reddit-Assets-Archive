// https://www.redditstatic.com/desktop2x/ChatPost.22965fdfd2d5bc5863cd.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
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
					d = c(e, i);
				t = s(t), e -= i;
				for (var l = o(d, t); ++n < e;) t(n);
				return l
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
					d = n("./node_modules/backo2/index.js"),
					l = n("./node_modules/subscriptions-transport-ws/node_modules/eventemitter3/index.js"),
					m = n("./node_modules/subscriptions-transport-ws/dist/utils/is-string.js"),
					u = n("./node_modules/subscriptions-transport-ws/dist/utils/is-object.js"),
					p = n("./node_modules/graphql/language/printer.js"),
					h = n("./node_modules/graphql/utilities/getOperationAST.js"),
					b = n("./node_modules/symbol-observable/es/index.js"),
					C = n("./node_modules/subscriptions-transport-ws/dist/protocol.js"),
					f = n("./node_modules/subscriptions-transport-ws/dist/defaults.js"),
					v = n("./node_modules/subscriptions-transport-ws/dist/message-types.js"),
					g = function() {
						function e(e, t, n, o) {
							var s = t || {},
								r = s.connectionCallback,
								a = void 0 === r ? void 0 : r,
								i = s.connectionParams,
								m = void 0 === i ? {} : i,
								u = s.minTimeout,
								p = void 0 === u ? f.MIN_WS_TIMEOUT : u,
								h = s.timeout,
								b = void 0 === h ? f.WS_TIMEOUT : h,
								v = s.reconnect,
								g = void 0 !== v && v,
								E = s.reconnectionAttempts,
								_ = void 0 === E ? 1 / 0 : E,
								x = s.lazy,
								y = void 0 !== x && x,
								O = s.inactivityTimeout,
								I = void 0 === O ? 0 : O,
								T = s.wsOptionArguments,
								k = void 0 === T ? [] : T;
							if (this.wsImpl = n || c, !this.wsImpl) throw new Error("Unable to find native implementation, or alternative implementation for WebSocket!");
							this.wsProtocols = o || C.GRAPHQL_WS, this.connectionCallback = a, this.url = e, this.operations = {}, this.nextOperationId = 0, this.minWsTimeout = p, this.wsTimeout = b, this.unsentMessagesQueue = [], this.reconnect = g, this.reconnecting = !1, this.reconnectionAttempts = _, this.lazy = !!y, this.inactivityTimeout = I, this.closedByUser = !1, this.backoff = new d({
								jitter: .5
							}), this.eventEmitter = new l.EventEmitter, this.middlewares = [], this.client = null, this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator(), this.connectionParams = this.getConnectionParams(m), this.wsOptionArguments = k, this.lazy || this.connect()
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
					var u, p = l.length;
					for (d = 0; d < p; d++) switch (l[d].once && this.removeListener(e, l[d].fn, void 0, !0), m) {
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
				return p
			})), n.d(t, "h", (function() {
				return h
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
				p = Object(o.a)(c),
				h = Object(o.a)(d),
				b = Object(o.a)(l),
				C = Object(o.a)(m),
				f = Object(o.a)(u),
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
						e(f());
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
								if (e(C(o.map(e => e.node.id))), n) {
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
							e(b({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/eligibleUxExperiences/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = "ELIGIBLE_UX_EXPERIENCES__FETCH_UX_EXPERIENCES_SUCCESS",
				s = "ELIGIBLE_UX_EXPERIENCES__UPDATE_UX_EXPERIENCE_VALUE"
		},
		"./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/FetchEligibleUXExperiences.json"),
				c = n("./src/redditGQL/operations/StoreUxTargetingAction.json");
			var d = n("./src/reddit/reducers/features/eligibleUXExperiences/index.ts"),
				l = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				m = n("./src/redditGQL/types.ts"),
				u = n("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			Object(o.a)({
				features: {
					eligibleUXExperiences: d.a
				}
			});
			const p = Object(s.a)(u.b),
				h = Object(s.a)(u.a),
				b = e => {
					let {
						experiences: t
					} = e;
					return async (e, n, o) => {
						let {
							gqlContext: s
						} = o;
						var c, d;
						const m = n(),
							u = Object.keys(t).filter(e => {
								const n = Object(l.a)(m, {
									experience: e
								});
								return !(t[e].allowCached && (null == n ? void 0 : n.fetched))
							});
						if (!u.length) return;
						const p = await ((e, t) => Object(a.a)(e, {
							...i,
							variables: {
								experienceInputs: t
							}
						}))(s(), u);
						if (p.ok) {
							const t = p.body,
								n = (null === (d = null === (c = null == t ? void 0 : t.data) || void 0 === c ? void 0 : c.eligibleUxExperiences) || void 0 === d ? void 0 : d.map(e => null == e ? void 0 : e.experience)) || [],
								o = null == n ? void 0 : n.reduce((e, t) => ({
									...e,
									[t]: !0
								}), {}),
								s = u.reduce((e, t) => o[t] ? e : {
									...e,
									[t]: !1
								}, {});
							e(h({
								experiences: {
									...o,
									...s
								}
							}))
						} else r.c.captureException(p.error)
					}
				},
				C = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					((e, t) => Object(a.a)(e, {
						...c,
						variables: {
							input: t
						}
					}))(s(), {
						action: m.a.View,
						eligibleExperience: {
							experience: e
						}
					})
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
				return C
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return y
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
				p = Object(s.a)(l),
				h = Object(s.a)(m),
				b = Object(s.a)(u),
				C = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					var l;
					if (n().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const m = await Object(i.a)(d(), e),
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
						t(b(n)), "REBLOCK_RATE_LIMIT" === (null === (l = m.body) || void 0 === l ? void 0 : l.reason) ? t(a.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: C(e)
						})) : t(a.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: C(e)
						}))
					}
				}, f = "USER_UNBLOCK__PENDING", v = "USER_UNBLOCK__SUCCESS", g = "USER_UNBLOCK__FAILED", E = Object(s.a)(f), _ = Object(s.a)(v), x = Object(s.a)(g), y = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const m = n(),
						u = Object(d.l)(m),
						p = u ? u.id : void 0,
						h = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(E({
						name: e
					})), (await Object(i.c)(l(), p, e)).ok ? (t(_({
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
					})), t(x({
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
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
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
					isLivestreaming: d,
					isEmbeddedLiveChat: l,
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
					isLivestreaming: d,
					forceOpenInNewTab: l,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: h,
					style: b
				}, s.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				E = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				x = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/models/Comment/index.ts"),
				T = n("./src/reddit/selectors/gold/powerups/index.ts"),
				k = n("./src/lib/constants/index.ts"),
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
					isStrong: d,
					onClick: l,
					renderedInOverlay: m
				} = e;
				const u = Object(I.f)(o),
					p = r.a.createElement(w.b, {
						ignore: u || !!o.distinguishType && o.distinguishType !== k.J.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(I.f)(o),
						isCommentAuthorBlocked: Object(I.g)(o),
						isLivestreaming: a,
						isEmbeddedLiveChat: i,
						isStrong: d,
						onClick: l
					}));
				return u || i ? p : r.a.createElement(j.b, {
					className: Object(c.a)(M.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(I.g)(o),
					postOrComment: o,
					tooltipType: m ? E.f.Lightbox : void 0
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
					d = () => i(Object(R.h)({
						tooltipId: l
					})),
					l = P("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, t),
					src: `${S.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(A.c, {
					tooltipId: l,
					text: m
				}))
			};
			var H = n("./src/lib/addQueryParams/index.ts"),
				G = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				K = n("./src/reddit/components/HumanDate/index.tsx"),
				W = n("./src/reddit/helpers/path/index.ts");
			const Q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					} = e, l = Object(a.d)(), m = P("CommentTopMeta--Created--", n.id, c), u = () => l(Object(R.h)({
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
							null == s || s(e), q(l, n.id), d && (e.preventDefault(), l(Object(V.Y)(Object(W.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(K.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(A.c, {
						tooltipId: m
					}, r.a.createElement(K.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(G.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(G.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => r.a.createElement(_.a, {
				className: X.a.crowdControlText
			}, Z._("Crowd Control", null, {
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
				return r.a.createElement(_.a, {
					className: ee.a.editedText
				}, te._("edited {time}", [te._param("time", r.a.createElement(K.d, {
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
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				le = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/selectors/modQueue.ts"),
				ue = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				pe = n.n(ue);
			const he = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: i,
					isAdmin: c
				} = e;
				const d = Object(a.d)(),
					l = Object(a.e)(me.b),
					m = e => () => d(Object(R.f)({
						tooltipId: e
					})),
					u = () => d(Object(R.i)()),
					p = e => P(e, t.id, i),
					h = p("CommentTopMeta--Approve--"),
					b = p("CommentTopMeta--Remove--"),
					C = p("CommentTopMeta--Report--"),
					f = p("CommentTopMeta--Spam--"),
					v = m(b);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: pe.a.approveIcon,
					desc: Object(se.a)(t),
					id: h,
					onMouseEnter: m(h),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(se.a)(t)
				})), Object(oe.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: pe.a.removeIcon,
					desc: Object(se.b)(t),
					id: b,
					onMouseEnter: v,
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(se.b)(t)
				})), Object(oe.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(oe.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && !l && r.a.createElement("a", {
					className: pe.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: u
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && r.a.createElement(ie.a, {
					className: pe.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: pe.a.spamIcon,
					desc: Object(se.d)(t),
					id: f,
					onMouseEnter: m(f),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: f,
					text: Object(se.d)(t)
				})), Object(re.a)(t) && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: pe.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: C,
					onMouseEnter: m(C),
					onMouseLeave: u,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: C,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && c && !l && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: pe.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: pe.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var be, Ce = n("./src/lib/colors/constants.ts"),
				fe = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(be || (be = {}));
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(ve);
			const Ee = {
					[be.Admin]: {
						color: Ce.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[be.Mod]: {
						color: Ce.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[be.ModTeam]: {
						color: Ce.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => D(e.subredditDisplayText)
					},
					[be.Op]: {
						color: Ce.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[be.AlumniAdmin]: {
						color: Ce.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[be.Contractor]: {
						color: Ce.a,
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
							if (e.isAdmin) return be.Admin;
							const t = e.isMod || e.distinguishType === k.J.MODERATOR;
							return t && e.author && Object(fe.a)(e.author) ? be.ModTeam : t ? be.Mod : e.isOp ? be.Op : e.distinguishType === k.J.ALUMNI_ADMIN ? be.AlumniAdmin : e.authorIsContractor ? be.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === be.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: i,
						tooltipTemplate: d
					} = Ee[n], l = i(), m = P(o, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(R.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(c.a)(ge.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), (n === be.Mod || n === be.ModTeam) && r.a.createElement(xe, null)), r.a.createElement(A.c, {
						tooltipId: m,
						text: u
					}))
				},
				xe = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${S.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Oe = n.n(ye);
			const {
				fbt: Ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = () => r.a.createElement(_.a, {
				className: Oe.a.stickiedText
			}, Ie._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				we = n.n(ke);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: d,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: k,
					permalink: w,
					renderContractorBadge: j,
					renderedInOverlay: N,
					subredditDisplayText: M,
					isAdmin: S
				} = e, R = Object(O.a)(), A = i.subredditId, P = Object(a.e)(e => Object(T.f)(e, {
					subredditId: A
				}));
				if (i.isDeleted && !S) return r.a.createElement("div", {
					className: Object(c.a)(we.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: we.a.authorLine
				}, r.a.createElement("span", {
					className: we.a.metaText
				}, i.deletedBy === I.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(Q, {
					key: "Created",
					className: we.a.metaText,
					comment: i,
					compact: !0,
					permalink: w,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(we.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: we.a.authorLine
				}, !Object(I.f)(i) && r.a.createElement(C.b, {
					className: we.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: we.a.baselineItem
				}, r.a.createElement(L, {
					authorClassName: we.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(I.f)(i) && u && r.a.createElement(g.a, {
					postOrComment: i,
					className: we.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(Y, null), r.a.createElement(_e, {
					className: we.a.role,
					comment: i,
					subredditDisplayText: M,
					renderContractorBadge: j,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? r.a.createElement(U, {
					className: we.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(I.f)(i) && P && r.a.createElement(b.a, {
					className: we.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(y.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(v.a, {
					className: we.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(Q, {
					key: "Created",
					className: we.a.metaText,
					comment: i,
					compact: !0,
					onClick: k,
					permalink: w,
					renderedInOverlay: N
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(Te, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(ne, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(he, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: N,
					isAdmin: S
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: N ? E.f.Lightbox : void 0
				})), d && !Object(x.o)(d) && r.a.createElement("span", {
					className: we.a.userFlairLine
				}, r.a.createElement(f.b, {
					className: we.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Ne = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Me = n("./src/reddit/selectors/economics.ts"),
				Le = n("./src/reddit/models/Flair/index.ts"),
				Se = n("./src/reddit/selectors/comments.ts"),
				Re = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Pe = n("./src/reddit/selectors/subreddit.ts"),
				De = n("./src/reddit/selectors/userFlair.ts"),
				Be = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Fe = n.n(Be);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const He = d.a.wrapped(f.b, "RightPositionedAuthorFlair", Fe.a),
				Ge = d.a.span("DeletedText", Fe.a),
				Ve = d.a.wrapped(_.a, "MetaSeparator", Fe.a),
				Ke = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Me.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Pe.N)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(De.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Se.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Re.b,
					isBlockingInterstitialV2Enabled: Re.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.i)(e, n.subredditId)
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
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: g,
					ignoreLock: x,
					isAdmin: y,
					isBlockingInterstitialEnabled: O,
					isBlockingInterstitialV2Enabled: T,
					isModWithUserNotesPermissions: k,
					isLivestreaming: w,
					isEmbeddedLiveChat: j,
					isPostComment: N,
					onCommentAuthorClick: M,
					onCommentTimestampClick: S,
					renderContractorBadge: R,
					renderedInOverlay: A,
					subredditDisplayText: P,
					userHasNft: D
				} = e, B = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne.b, {
					commentId: a.id
				}), r.a.createElement(Ne.a, {
					commentId: a.id,
					commentsPageKey: d
				}));
				if (N) return r.a.createElement(r.a.Fragment, null, r.a.createElement(je, {
					className: Object(c.a)(n, {
						[Fe.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: u || null,
					ignoreLock: x,
					isAdmin: y,
					isModWithUserNotesPermissions: k,
					isLivestreaming: w,
					onCommentAuthorClick: M,
					onCommentTimestampClick: S,
					permalink: i,
					renderContractorBadge: !!R,
					renderedInOverlay: A,
					subredditDisplayText: P
				}), B);
				if (a.isDeleted) return r.a.createElement(We, Ue({}, e, {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(Qe, Ue({}, e, {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o
					})
				}));
				const F = !g && p === Le.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: o,
						[Fe.a.hasBadges]: h,
						[Fe.a.liveStreaming]: w
					}),
					"data-testid": "comment-top-meta"
				}, u && F && r.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(I.f)(a) && r.a.createElement(C.b, {
					className: Fe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(L, {
					authorClassName: D ? Fe.a.NftAuthor : void 0,
					collapsed: o,
					comment: a,
					isLivestreaming: w,
					isEmbeddedLiveChat: j,
					isStrong: !!m,
					onClick: M,
					renderedInOverlay: A
				}), s && r.a.createElement(Y, null), s && r.a.createElement(_.c, {
					className: Fe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !F && r.a.createElement(He, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(v.a, {
					className: Fe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(_.c, {
						className: Fe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), B, r.a.createElement(_e, {
					className: Fe.a.authorRole,
					comment: a,
					subredditDisplayText: P,
					renderContractorBadge: !!R,
					renderedInOverlay: A
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !N && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: Fe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(_.c, {
					className: Fe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(Q, {
					key: "Created",
					className: Fe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: A,
					isBlockingInterstitialEnabled: O || T
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Fe.a.separator
				}), r.a.createElement(Te, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Fe.a.separator
				}), r.a.createElement(ne, {
					editedAt: a.editedAt
				}))), r.a.createElement(he, {
					comment: a,
					ignoreLock: x,
					renderedInOverlay: A
				}), !b && r.a.createElement(l.a, {
					thing: a,
					tooltipType: A ? E.f.Lightbox : void 0
				}))
			});
			const We = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Ge, null, a.deletedBy === I.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Q, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: c || d
					}), n && qe({
						childrenInfo: t
					}))
				},
				Qe = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(I.f)(t),
						collapsed: a
					})), r.a.createElement(_.b, {
						className: Fe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: Fe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Q, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c || d
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
						className: Fe.a.metaText
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
				return k
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
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/pages/comments.ts"),
				u = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				E = n("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				_ = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				x = n("./src/reddit/components/Comments/States/index.m.less"),
				y = n.n(x);
			const O = l.a.p("EmptyTitle", y.a),
				I = l.a.p("ErrorTitle", y.a),
				T = l.a.p("EmptyText", y.a),
				k = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, t)
					}, n ? i.a.createElement(E.a, {
						className: y.a.LiveChatIcon
					}) : i.a.createElement(g.a, {
						className: y.a.CommentsIcon
					}), i.a.createElement(O, null, n ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(T, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => i.a.createElement("div", {
					className: y.a.StateContainer
				}, i.a.createElement(g.a, {
					className: y.a.CommentsIcon
				}), i.a.createElement(O, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(T, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				j = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: y.a.StateContainer
					}, i.a.createElement(g.a, {
						className: y.a.CommentsIcon
					}), i.a.createElement(O, null, o.fbt._("That comment is missing", null, {
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
						className: y.a.StateContainer
					}, i.a.createElement(_.a, {
						className: y.a.SnooFacepalm
					}), i.a.createElement(I, null, t ? Object(h.a)({
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
						className: Object(d.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, i.a.createElement(N, {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					}))
				},
				L = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", y.a),
				S = l.a.div("CommentsPlaceholderContainer", y.a),
				R = l.a.div("CommentPlaceholder", y.a),
				A = l.a.div("Avatar", y.a),
				P = l.a.div("VoteColumn", y.a),
				D = l.a.div("TextColumn", y.a),
				B = () => i.a.createElement("div", {
					className: Object(d.a)(y.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				F = () => i.a.createElement("div", {
					className: Object(d.a)(y.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				U = e => i.a.createElement(S, null, r()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(A, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(P, null, i.a.createElement(v.b, {
					className: y.a.Upvote
				}), i.a.createElement(f.a, {
					className: y.a.Downvote
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
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoomojiWrapper: "_1EGL0dP0SLKDl_E_4COHcX"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_2Wvwu550WznaKCrrHLMhgd",
				livestreaming: "-lvXkGeX4sxjgmJAEQSaY",
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
				BotComment: "_2sh-DII4Y1uBgWLxcS55Dc",
				botComment: "_2sh-DII4Y1uBgWLxcS55Dc",
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
				return Ro
			})), n.d(t, "CHATBOT_REACTIONS_HINT_DURATION_MS", (function() {
				return Ao
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/setInterval/index.ts"),
				a = n("./src/lib/timeAgo/index.ts"),
				i = n("./node_modules/lodash/debounce.js"),
				c = n.n(i),
				d = n("./node_modules/lodash/last.js"),
				l = n.n(d),
				m = n("./node_modules/react/index.js"),
				u = n.n(m),
				p = n("./node_modules/react-redux/es/index.js"),
				h = n("./src/realtime/GQLSubscription/async.tsx"),
				b = n("./src/reddit/actions/blockedRedditors.ts"),
				C = n("./src/reddit/actions/comment/index.ts"),
				f = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./node_modules/lodash/first.js"),
				g = n.n(v),
				E = n("./node_modules/lodash/isArray.js"),
				_ = n.n(E),
				x = n("./src/reddit/helpers/isComment.ts"),
				y = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts");
			const w = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = N(e.attribs);
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
							distinguishType: j(n),
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
							voteState: k.a.notVoted,
							...t || {}
						}
					}
				},
				j = e => {
					switch (e) {
						case O.e.Admin:
							return s.J.ADMIN;
						case O.e.Moderator:
							return s.J.MODERATOR;
						case O.e.Alumni:
							return s.J.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				N = e => g()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || O.e.None;
			const M = (e, t, n) => {
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
					if (l === I.f.Richtext) {
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
					if (l === I.f.Text) {
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
			const S = new Map,
				R = e => e,
				A = new Set;
			var P;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(P || (P = {}));
			const D = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const n = R(t),
						o = S.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				F = (e, t, n, o) => {
					const s = R(t),
						r = S.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					S.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...D
						}
					}), a.socket.addEventListener("message", G.bind(null, o)), a.socket.addEventListener("close", U.bind(null, s, o)), a.socket.addEventListener("error", V.bind(null, s)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				U = (e, t, n) => {
					const o = S.get(e);
					o && (o.isClosePlanned ? S.delete(e) : H(e, t))
				},
				H = (e, t) => {
					const n = S.get(e);
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
					if (S.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
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
				G = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(L.a)() && console.error(t)
					}
				},
				V = (e, t) => {
					const n = S.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? S.delete(e) : Object(L.a)() && console.error(t)
				};
			var K = n("./src/reddit/selectors/comments.ts"),
				W = n("./src/reddit/selectors/commentSelector.ts"),
				Q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				q = n("./src/reddit/actions/comment/websocket/constants.ts");
			const z = Object(f.a)(q.b),
				J = Object(f.a)(q.c),
				X = Object(f.a)(q.a),
				Z = Object(f.a)(q.d),
				Y = {},
				$ = (e, t, n, o) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						A.has(s) ? t() : (A.add(s), setTimeout(() => {
							A.delete(s), F(o, s, {
								...D
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case P.NEW_COMMENT: {
									const n = t.payload.name,
										a = w(t.payload),
										i = r(),
										c = n && Object(W.b)(i, {
											commentId: n
										}),
										d = !(!n || !Y[n]);
									if (a && !d) {
										const n = M(0, o, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(K.w)(i, {
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
								case P.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = n && Object(W.b)(a, {
											commentId: n
										}),
										c = w(t.payload);
									if (i && c) {
										const n = M(0, o, t.payload),
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
								case P.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										a = r(),
										i = Object(W.b)(a, {
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
								case P.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										o = Object(W.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(X({
										id: e
									})) : Y[e] = P.DELETE_COMMENT;
									break
								}
								case P.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = r(),
										a = Object(W.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(Q.m)(o, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? Y[n] = P.REMOVE_COMMENT : s(X({
										id: n
									}));
									break
								}
								case P.USER_JOIN: {
									const n = w(t.payload, {
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
			var ee = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				te = n("./src/reddit/actions/pages/comments.ts"),
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
				de = n("./src/reddit/endpoints/awards/index.ts"),
				le = n("./src/lib/makeGqlRequest/index.ts"),
				me = n("./src/lib/makeRequest/index.ts"),
				ue = n("./src/reddit/models/Gold/Award.ts"),
				pe = n("./src/redditGQL/operations/AvailableAwards.json");
			var he = n("./src/reddit/models/Toast/index.ts"),
				be = n("./src/reddit/selectors/communityAwards.ts"),
				Ce = n("./src/reddit/selectors/experiments/chat.ts"),
				fe = n("./src/reddit/selectors/gold/awardIcon.ts"),
				ve = n("./src/lib/isDefined.ts"),
				ge = n("./node_modules/reselect/es/index.js");
			const Ee = e => "chat_reaction_upvote" === e.id,
				_e = (e, t) => {
					var n;
					return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(be.a)(e, t)).filter(ve.a)
				},
				xe = Object(ge.a)((e, t) => _e(e, t.subredditId), (e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const r = Object(be.a)(e, n),
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
				ye = (e, t, n) => {
					var o, s;
					return !!(null === (s = null === (o = e.awards.chatReactions.pending) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s[t])
				};
			var Oe = n("./src/reddit/selectors/user.ts");
			const Ie = Object(f.a)(ie.c),
				Te = Object(f.a)(ie.b),
				ke = Object(f.a)(ie.a),
				we = Object(f.a)(ie.e),
				je = Object(f.a)(ie.f),
				Ne = Object(f.a)(ie.d),
				Me = Object(f.a)(ie.h),
				Le = Object(f.a)(ie.i),
				Se = Object(f.a)(ie.g),
				Re = Object(f.a)(ie.j),
				Ae = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(Ie());
					try {
						const n = await (async (e, t) => {
							const n = await Object(le.a)(e, {
								...pe,
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
						t(ke(r))
					}
				}, Pe = async (e, t) => {
					let {
						awardId: n,
						commentId: o,
						operation: s
					} = t;
					var r;
					const a = Object(W.b)(e, {
						commentId: o
					});
					if (!a) return;
					const i = Object(be.a)(e, n),
						c = Object(Oe.j)(e);
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
										iconURL: Object(fe.c)({
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
					t(Object(C.e)(r))
				}, Be = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n();
					if (!Object(Oe.R)(r)) return t(Object(ae.openLoginModal)());
					if (!ye(r, e.awardId, e.commentId)) {
						t(we(e));
						try {
							const {
								awardId: n,
								commentId: o
							} = e, a = Object(oe.a)(), i = Object(be.a)(r, n), c = Object(Ce.f)(r);
							if ((e => Ee(e) || (e => "chat_reaction_downvote" === e.id)(e))(i)) {
								const e = Ee(i) ? "chat_reaction_downvote" : "chat_reaction_upvote",
									n = ((e, t, n) => {
										var o, s;
										const r = Object(W.b)(e, {
											commentId: n
										});
										return null === (s = null === (o = null == r ? void 0 : r.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[0]
									})(r, e, o);
								n && await t(Fe({
									awardId: e,
									awardingId: n,
									commentId: o
								}, {
									suppressCommentDataRefresh: !0
								}))
							}
							await Object(de.b)(s(), {
								awardId: n,
								targetId: o,
								isAnonymous: !1,
								nonce: a
							}), c || await Pe(r, {
								awardId: n,
								commentId: o,
								operation: ue.g.Add
							}), await t(De(o)), t(je({
								awardId: n,
								commentId: o
							}))
						} catch (a) {
							t(Ne({
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
				}, Fe = (e, t) => async (n, o, s) => {
					let {
						gqlContext: r
					} = s;
					const a = o();
					if (!Object(Oe.R)(a)) return n(Object(ae.openLoginModal)());
					if (!ye(a, e.awardId, e.commentId)) {
						n(Me(e));
						try {
							const {
								awardId: o,
								awardingId: s,
								commentId: i
							} = e, c = Object(Ce.f)(a);
							await Object(de.c)(r(), {
								awardingId: s
							}), c || await Pe(a, {
								awardId: o,
								commentId: i,
								operation: ue.g.Remove
							}), !(null == t ? void 0 : t.suppressCommentDataRefresh) && await n(De(e.commentId)), n(Le({
								awardId: o,
								awardingId: s,
								commentId: i
							}))
						} catch (i) {
							n(Se({
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
			var Ue = n("./src/reddit/components/Comments/States/index.tsx"),
				He = n("./node_modules/lodash/defer.js"),
				Ge = n.n(He),
				Ve = n("./src/lib/lessComponent.tsx"),
				Ke = n("./src/lib/makeDraftKey/index.ts"),
				We = n("./src/lib/objectSelector/index.ts"),
				Qe = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				qe = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				ze = n("./src/reddit/helpers/awards/message.ts"),
				Je = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Xe = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Star/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				et = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				tt = n.n(et);
			const nt = Object(We.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ot = e => {
					const {
						award: t,
						comment: n,
						iconUrl: s
					} = e;
					let r = "",
						a = !0,
						i = !1;
					return t.coinPrice < ze.a ? (r = tt.a.silverTierAwardComment, a = !1) : t.coinPrice < ze.b ? r = tt.a.goldTierAwardComment : (r = tt.a.platinumTierAwardComment, i = !0), u.a.createElement("div", {
						className: Object(o.a)(tt.a.awardComment, r)
					}, u.a.createElement("div", {
						className: tt.a.imageContainer
					}, a && u.a.createElement(u.a.Fragment, null, u.a.createElement(Ye.a, {
						className: Object(o.a)(tt.a.backgroundAnimation, tt.a.backgroundStar)
					}), u.a.createElement($e.a, {
						className: Object(o.a)(tt.a.backgroundAnimation, tt.a.backgroundStar, tt.a.backgroundStar2)
					})), i && u.a.createElement(u.a.Fragment, null, u.a.createElement(Ze.a, {
						className: Object(o.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomLeft)
					}), u.a.createElement(Ze.a, {
						className: Object(o.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleTopRight)
					}), u.a.createElement(Ze.a, {
						className: Object(o.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomRight)
					})), u.a.createElement("img", {
						src: s
					})), u.a.createElement(Xe.b, {
						className: tt.a.awardCommentText,
						content: Object(Je.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: nt(e),
						useExplicitTextColor: !0
					}))
				};
			var st = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				rt = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				at = n.n(rt);
			var it = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: s
					} = e;
					const r = Object(o.a)(at.a.CollapsedComment, {
						[at.a.LivestreamingWrapper]: n
					});
					return u.a.createElement("div", {
						className: r,
						onClick: s
					}, ne.fbt._("collapsed {collapsed message} (may be sensitive)", [ne.fbt._param("collapsed message", ne.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [ne.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ct = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				dt = n("./src/reddit/actions/comment/authoring.ts"),
				lt = n("./src/reddit/actions/gold/modals.ts"),
				mt = n("./src/reddit/actions/modal.ts"),
				ut = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pt = n("./src/reddit/components/ReportFlow/index.tsx"),
				ht = n("./src/reddit/components/ReportFlow/new.tsx"),
				bt = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ct = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				ft = n("./src/reddit/hooks/useTracking.ts"),
				vt = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				gt = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Et = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				_t = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				xt = n("./src/reddit/selectors/activeModalId.ts"),
				yt = n("./src/reddit/selectors/blockedRedditors.ts"),
				Ot = n("./src/reddit/actions/tooltip.ts"),
				It = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				Tt = n("./src/reddit/hooks/usePageLayer.ts");
			var kt = () => {
					const e = Object(Tt.a)();
					return Object(m.useMemo)(() => !!e && Object(It.b)(e), [e]) ? {
						container: window.document.body,
						alwaysHandleOverflow: !0
					} : null
				},
				wt = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				jt = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Nt = n.n(jt);

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Lt = e => {
				let {
					children: t,
					commentId: n,
					onClick: s,
					tooltipId: r,
					tooltipText: a,
					trackingNoun: i,
					suppressBackgroundOnHover: c = !1,
					...d
				} = e;
				const l = Object(p.d)(),
					m = Object(ft.a)(),
					h = kt();
				return u.a.createElement("button", Mt({}, d, {
					id: r,
					className: Object(o.a)(Nt.a.menuItem, {
						[Nt.a.suppressBackgroundOnHover]: c
					}),
					onMouseEnter: () => {
						l(Object(Ot.f)({
							tooltipId: r
						}))
					},
					onMouseLeave: () => {
						l(Object(Ot.i)())
					},
					onClick: e => {
						null == s || s(e), i && n && m(Object(Ct.f)(i, n))
					}
				}), t, u.a.createElement(wt.c, Mt({
					tooltipId: r
				}, h), a))
			};
			var St = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Rt = n("./src/reddit/controls/Dropdown/index.tsx"),
				At = n("./src/reddit/selectors/tooltip.ts");

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Dt = Object(St.a)(Rt.a),
				Bt = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const r = Object(p.d)(),
						a = kt(),
						i = Object(p.e)(e => Object(At.b)(t)(e)),
						c = u.a.useCallback(() => {
							r(Object(Ot.h)({
								tooltipId: t
							})), null == s || s()
						}, [r, t, s]);
					return u.a.createElement("button", {
						id: t,
						className: Nt.a.menuItem,
						onClick: c
					}, n, u.a.createElement(Dt, Pt({
						className: Nt.a.dropdownMenu,
						isOpen: i,
						tooltipId: t
					}, a), o))
				};
			var Ft = n("./src/reddit/actions/comment/moderation.ts"),
				Ut = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Ht = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Gt = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				Vt = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Kt = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Wt = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				Qt = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const qt = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const o = t.id,
					r = Object(Ut.b)(t),
					a = t.isApproved && r,
					i = t.bannedBy === s.m,
					c = t.isMod,
					d = !n && (!t.bannedBy || i),
					l = Object(p.d)(),
					m = Object(ft.a)(),
					h = u.a.useCallback(e => {
						m(Object(Ct.f)(e, o))
					}, [m, o]),
					b = u.a.useCallback(() => {
						l(Object(Ft.a)(o)), h("approve")
					}, [l, h, o]),
					C = u.a.useCallback(() => {
						const e = i ? "confirm_remove" : "remove";
						l(Object(Ft.e)(o, !1)), h(e)
					}, [l, h, o, i]),
					f = u.a.useCallback(() => {
						l(Object(Ft.e)(o, !0)), h("spam")
					}, [l, h, o]),
					v = u.a.useCallback(() => {
						l(Object(Ft.b)(o, s.J.MODERATOR))
					}, [l, o]),
					g = u.a.useCallback(() => {
						l(Object(Ft.b)(o, s.J.NONE))
					}, [l, o]);
				return u.a.createElement(u.a.Fragment, null, n && c && u.a.createElement(Ht.b, {
					className: Nt.a.dropdownMenuItem,
					displayText: ne.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: g
				}, u.a.createElement(Wt.a, {
					className: Nt.a.dropdownIcon
				})), n && !c && u.a.createElement(Ht.b, {
					className: Nt.a.dropdownMenuItem,
					displayText: ne.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: v
				}, u.a.createElement(Qt.a, {
					className: Nt.a.dropdownIcon
				})), (t.bannedBy || r) && u.a.createElement(Ht.b, {
					className: Nt.a.dropdownMenuItem,
					displayText: a ? ne.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : ne.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: b
				}, u.a.createElement(Gt.a, {
					className: Nt.a.dropdownIcon
				})), d && u.a.createElement(Ht.b, {
					className: Nt.a.dropdownMenuItem,
					displayText: i ? ne.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : ne.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: C
				}, u.a.createElement(Vt.a, {
					className: Nt.a.dropdownIcon
				})), d && u.a.createElement(Ht.b, {
					className: Nt.a.dropdownMenuItem,
					displayText: ne.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: f
				}, u.a.createElement(Kt.a, {
					className: Nt.a.dropdownIcon
				})))
			};
			var zt = n("./src/reddit/actions/reportFlow/index.ts"),
				Jt = n("./src/reddit/actions/userBlocks.ts"),
				Xt = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				Zt = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Yt = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				$t = n("./src/reddit/icons/svgs/UserBlock/index.tsx"),
				en = n("./src/reddit/models/PostDraft/index.ts");
			const tn = e => `Comment-${e}--Modal--DeleteComment`,
				nn = e => `CommentChatPost--ModMenu--${e}`,
				on = e => `CommentChatPost--OverflowMenu--${e}`,
				sn = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: o = !1
					} = e;
					const s = t.id,
						r = Object(p.d)(),
						a = Object(ft.a)(),
						i = Object(p.e)(Oe.l),
						c = Object(p.e)(e => Object(yt.c)(e, t.authorId)),
						d = i && i.id === t.authorId,
						l = u.a.useCallback(e => {
							a(Object(Ct.f)(e, s))
						}, [a, s]),
						m = u.a.useCallback(() => {
							r(Object(zt.c)(s, !1)), l("report")
						}, [r, l, s]),
						h = u.a.useCallback(() => {
							r(Object(mt.i)(tn(t.id))), l("delete")
						}, [r, l, t]),
						b = u.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && r(Object(dt.e)({
								commentId: t.id,
								draftKey: Object(Ke.a)(en.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), l("edit")
						}, [r, l, t, n]),
						C = u.a.useCallback(() => {
							r(Object(Jt.h)(t.author)), l("block")
						}, [r, l, t]),
						f = u.a.useCallback(() => {
							r(Object(Jt.g)(t.author)), l("unblock")
						}, [r, l, t]);
					return u.a.createElement(u.a.Fragment, null, d && !o && u.a.createElement(Ht.b, {
						className: Nt.a.dropdownMenuItem,
						displayText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, u.a.createElement(Xt.a, {
						className: Nt.a.dropdownIcon
					})), d && u.a.createElement(Ht.b, {
						className: Nt.a.dropdownMenuItem,
						displayText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, u.a.createElement(Yt.a, {
						className: Nt.a.dropdownIcon
					})), !d && u.a.createElement(Ht.b, {
						className: Nt.a.dropdownMenuItem,
						displayText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: m
					}, u.a.createElement(Zt.a, {
						className: Nt.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !d && !c && u.a.createElement(Ht.b, {
						className: Nt.a.dropdownMenuItem,
						displayText: ne.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: C
					}, u.a.createElement($t.a, {
						className: Nt.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !d && c && u.a.createElement(Ht.b, {
						className: Nt.a.dropdownMenuItem,
						displayText: ne.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: f
					}, u.a.createElement($t.a, {
						className: Nt.a.dropdownIcon
					})))
				};
			var rn = n("./src/reddit/selectors/userPrefs.ts"),
				an = n("./src/reddit/components/CommentsChat/Comment/Menu/ReactionButton/index.m.less"),
				cn = n.n(an);
			const dn = e => {
					let {
						reaction: t,
						comment: n
					} = e;
					var o, s;
					const r = Object(ft.a)(),
						a = Object(p.d)(),
						i = Object(p.e)(rn.d),
						c = null === (s = null === (o = n.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t.id]) || void 0 === s ? void 0 : s[0];
					return u.a.createElement(Lt, {
						commentId: n.id,
						tooltipId: `CommentChatPost--${t.id}${n.id}`,
						tooltipText: t.name,
						suppressBackgroundOnHover: !0,
						onClick: c ? () => {
							c && (a(Fe({
								awardId: t.id,
								awardingId: c,
								commentId: n.id
							})), r(Object(Ct.h)(t.id, n.id, "actions_menu")))
						} : () => {
							a(Be({
								awardId: t.id,
								commentId: n.id
							})), r(Object(Ct.g)(t.id, n.id, "actions_menu"))
						}
					}, u.a.createElement("img", {
						className: cn.a.snoomojiWrapper,
						src: Object(fe.c)({
							award: t,
							postOrComment: n,
							size: 64,
							prefersReducedMotion: i
						}),
						alt: t.name
					}))
				},
				ln = (e, t) => `CommentChatPost--${e}--${t}`,
				mn = Object(ge.c)({
					availableReactionAwards: (e, t) => {
						let {
							comment: n
						} = t;
						return _e(e, n.subredditId)
					},
					currentUser: Oe.l,
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
						return Object(xt.a)(e) === tn(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(yt.c)(e, n.authorId)
					},
					isLivePostCreatorModRoleEnabled: e => Object(Ce.h)(e),
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Q.a)(e, {
							postId: n.postId
						})
					}
				});
			var un = Object(p.b)(mn, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(dt.s)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						giveAward: () => {
							const t = Object(bt.d)(bt.a.GildingFlow, !0);
							return e(Object(lt.d)({
								correlationId: t,
								thingId: n.id
							}))
						},
						deleteComment: () => o && e(Object(dt.i)(n.id, n.postId)),
						toggleDeleteCommentModal: () => e(Object(mt.i)(tn(n.id)))
					}
				})(e => {
					let {
						comment: t,
						commentsPageKey: n,
						className: s,
						currentUser: r,
						deleteComment: a,
						giveAward: i,
						isAuthorBlocked: c,
						isDeleteModalOpen: d,
						isLivestreaming: l,
						isMod: m,
						isChatCreateOnlyPerm: p,
						isLivePostCreatorModRoleEnabled: h,
						onReplyClick: b,
						reportFlowIsOpen: C,
						toggleDeleteCommentModal: f,
						availableReactionAwards: v
					} = e;
					const g = !!r && r.id === t.authorId,
						E = Object(ft.a)(),
						_ = u.a.useCallback(() => {
							E(Object(Ct.f)("other_options", t.id))
						}, [E, t.id]);
					return u.a.createElement("div", {
						className: Object(o.a)(Nt.a.menu, s, {
							[Nt.a.livestreaming]: l
						})
					}, !l && !!(null == v ? void 0 : v.length) && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
						className: Nt.a.innerWrapper
					}, v.map(e => u.a.createElement(dn, {
						key: e.id,
						comment: t,
						reaction: e
					}))), u.a.createElement("div", {
						className: Nt.a.verticalBar
					})), u.a.createElement("div", {
						className: Nt.a.innerWrapper
					}, !t.isLocked && !c && Boolean(t.authorId) && u.a.createElement(u.a.Fragment, null, u.a.createElement(Lt, {
						onClick: b,
						commentId: t.id,
						tooltipId: ln("Reply", t.id),
						tooltipText: ne.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply",
						"data-testid": "comment-reply"
					}, u.a.createElement(_t.a, {
						className: Nt.a.icon
					})), !l && !g && u.a.createElement(Lt, {
						onClick: i,
						commentId: t.id,
						tooltipId: ln("Award", t.id),
						tooltipText: ne.fbt._("Give Award", null, {
							hk: "3rUq40"
						}),
						trackingNoun: "award",
						"data-testid": "comment-award"
					}, u.a.createElement(vt.a, {
						className: Nt.a.icon
					}))), m && !(p && h) && u.a.createElement(Bt, {
						dropdownId: nn(t.id),
						icon: u.a.createElement(gt.a, {
							className: Nt.a.icon
						})
					}, u.a.createElement(qt, {
						comment: t,
						isCommentAuthor: g
					})), u.a.createElement(Bt, {
						dropdownId: on(t.id),
						icon: u.a.createElement(Et.a, {
							className: Nt.a.icon
						}),
						onClick: _
					}, u.a.createElement(sn, {
						comment: t,
						isLivestreaming: l,
						commentsPageKey: n
					})), C && u.a.createElement(ht.a, {
						withOverlay: !0,
						overlayCustomStyles: pt.b,
						postId: t.postId,
						commentId: t.id
					}), d && u.a.createElement(ut.a, {
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
						onConfirm: a,
						toggleModal: f,
						withOverlay: !0
					})))
				}),
				pn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx"),
				hn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				bn = n.n(hn);
			const Cn = Object(We.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var fn = e => {
					const {
						comment: t
					} = e;
					return void 0 === Cn(e) ? null : u.a.createElement(Xe.b, {
						className: bn.a.SystemMessageText,
						content: Object(Je.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Cn(e),
						useExplicitTextColor: !0
					})
				},
				vn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				gn = n("./src/reddit/components/HumanDate/index.tsx"),
				En = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_n = n("./src/reddit/controls/ErrorText/index.tsx"),
				xn = n("./src/reddit/constants/experiments.ts"),
				yn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const On = e => Object(yn.c)(e, {
					experimentName: xn.Bb,
					experimentEligibilitySelector: yn.a
				}) === xn.xb.Enabled,
				In = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(W.b)(e, {
						commentId: n
					});
					if (o && o.associatedAwardId) return Object(be.a)(e, o.associatedAwardId)
				};
			var Tn = n("./src/reddit/selectors/poll/index.ts"),
				kn = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				wn = n.n(kn);
			const jn = 250,
				Nn = 10,
				Mn = Ve.a.wrapped(_n.b, "ErrorText", wn.a),
				Ln = Ve.a.wrapped(Qe.a, "TopMeta", wn.a),
				Sn = Object(En.u)(),
				Rn = Object(p.b)(() => Object(ge.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return In(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = In(e, {
							commentId: n
						});
						if (o) return Object(fe.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: W.b,
					commentPermalink: K.m,
					errorMsgs: K.I,
					flair: K.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: K.z,
					prediction: Tn.f,
					subreddit: En.r,
					shouldRenderSystemMessages: On
				})),
				An = Object(We.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Pn extends u.a.Component {
				constructor(e) {
					super(e), this.elemRef = u.a.createRef(), this.toggleBody = () => {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > jn && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let n = jn;
						if (t) {
							n = e.scrollHeight + Nn;
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
						comment: s,
						commentPermalink: r,
						commentsPageKey: a,
						errorMsgs: i,
						flair: c,
						isActive: d,
						isEditing: l,
						isLivestreaming: m,
						postId: p,
						prediction: h,
						renderedInOverlay: b,
						sendEvent: C,
						targetComment: f,
						addToRefList: v,
						onReplyClick: g,
						shouldRenderSystemMessages: E
					} = this.props, {
						isCollapsed: _,
						isExpanded: x,
						isTruncated: y
					} = this.state;
					if (!s) return null;
					d && Ge()(() => this.elemRef.current && this.elemRef.current.focus()), Ge()(() => this.elemRef && this.elemRef.current && v && v(this.elemRef));
					const O = s.isSystem,
						I = !l && !s.isDeleted && !O,
						T = !!e,
						k = Object(o.a)({
							[wn.a.SystemMessageWrapper]: O && !m && E,
							[wn.a.CommentWrapper]: !m && !O,
							[wn.a.CommentExpanded]: x,
							[wn.a.CommentTruncated]: y,
							[wn.a.HighlightTarget]: f,
							[wn.a.LivestreamingCommentWrapper]: m
						});
					return _ ? u.a.createElement(it, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : u.a.createElement("div", {
						id: f ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: k
					}, l && u.a.createElement(vn.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: p,
						sendEvent: C,
						draftKey: Object(Ke.a)(en.c.edit, s.id),
						commentsPageKey: a,
						isEditing: l,
						comment: s
					}), I && u.a.createElement(u.a.Fragment, null, u.a.createElement(Ln, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: a,
						compact: !0,
						flair: c,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: b
					}, u.a.createElement(st.a, {
						className: Object(o.a)(wn.a.ChatIcon, {
							[wn.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: s.profileImage,
						userId: s.authorId,
						isNSFW: s.profileOver18 || s.authorIconIsNSFW
					})), s.parentId && u.a.createElement(pn.a, {
						className: wn.a.Reply,
						commentId: s.parentId,
						onReplyClick: g,
						isLivestreaming: m
					}), m && u.a.createElement("span", {
						className: wn.a.livestreamingTimeStamp
					}, u.a.createElement(gn.d, {
						seconds: s.created
					})), T && e && m ? u.a.createElement(ot, {
						award: e,
						comment: s,
						iconUrl: t
					}) : h ? u.a.createElement(qe.a, {
						comment: s,
						prediction: h
					}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Xe.b, {
						className: Object(o.a)(wn.a.RichTextJson, {
							[wn.a.Livestreaming]: m
						}),
						content: Object(Je.a)(s),
						rtJsonElementProps: An(this.props),
						useExplicitTextColor: m
					}), u.a.createElement(un, {
						className: Object(o.a)(wn.a.Menu, {
							[wn.a.Livestreaming]: m
						}),
						comment: s,
						commentPermalink: r,
						commentsPageKey: a,
						isLivestreaming: m
					}))), s.isDeleted && u.a.createElement(ct.a, {
						className: Object(o.a)(wn.a.DeletedComment, {
							[wn.a.Livestreaming]: m
						})
					}), I && i && i.map((e, t) => u.a.createElement(Mn, {
						key: `${t}-${e}`
					}, e)), !l && y && u.a.createElement("button", {
						className: Object(o.a)(wn.a.CommentReadMoreButton, {
							[wn.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, ne.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), O && !m && E && u.a.createElement(fn, {
						comment: s
					}))
				}
			}
			var Dn = Sn(Rn(Pn)),
				Bn = n("./src/reddit/icons/svgs/ChatBotAvatar/index.tsx"),
				Fn = n("./src/reddit/components/CommentsChat/Comment/Chatbot/Chatbot.m.less"),
				Un = n.n(Fn);
			const Hn = ne.fbt._("redditbot", null, {
					hk: "2LuwVl"
				}),
				Gn = e => w({
					name: "cb_botmsg",
					author: "redditbot",
					author_id: 0,
					created_utc: Math.floor((new Date).getTime() / 1e3),
					subreddit_id: e.subredditId,
					body_html: e.text,
					author_fullname: Hn,
					attribs: [],
					body: e.text,
					context: "",
					link_id: "",
					score: 0
				}),
				Vn = ne.fbt._("Now you can hover over messages to react to them. Give it a try!", null, {
					hk: "3kimKR"
				}),
				Kn = e => {
					let {
						message: t,
						className: n = ""
					} = e;
					return u.a.createElement("div", {
						className: Un.a.chatbot + n
					}, u.a.createElement("div", {
						className: Un.a.avatar
					}, u.a.createElement(Bn.a, null)), u.a.createElement("p", {
						className: Un.a.name
					}, Hn), u.a.createElement("p", {
						className: Un.a.text
					}, t))
				};
			var Wn = n("./src/lib/prettyPrintNumber/index.ts"),
				Qn = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				qn = n.n(Qn);
			const zn = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: s,
					reaction: r
				} = e;
				var a, i, c, d;
				const l = Object(p.d)(),
					m = Object(ft.a)(),
					h = Object(p.e)(rn.d),
					b = null !== (i = null === (a = s.awardingsByCurrentUser) || void 0 === a ? void 0 : a[r.id]) && void 0 !== i ? i : [],
					C = Boolean(b.length);
				return u.a.createElement("button", {
					className: Object(o.a)(t, qn.a.reactionAwardButton, {
						[qn.a.darkMode]: n,
						[qn.a.activeReactionButton]: C
					}),
					onClick: C ? () => {
						l(Fe({
							awardId: r.id,
							awardingId: b[0],
							commentId: s.id
						})), m(Object(Ct.h)(r.id, s.id, "quick_button"))
					} : () => {
						l(Be({
							awardId: r.id,
							commentId: s.id
						})), m(Object(Ct.g)(r.id, s.id, "quick_button"))
					}
				}, u.a.createElement("img", {
					className: qn.a.snoomoji,
					src: Object(fe.c)({
						award: r,
						postOrComment: s,
						size: 64,
						prefersReducedMotion: h
					}),
					alt: r.name
				}), u.a.createElement("span", {
					className: Object(o.a)(qn.a.countText, {
						[qn.a.darkMode]: n
					})
				}, Object(Wn.b)(null !== (d = null === (c = s.awardCountsById) || void 0 === c ? void 0 : c[r.id]) && void 0 !== d ? d : 0)))
			};
			var Jn = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				Xn = n.n(Jn);
			const Zn = () => u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
				className: Xn.a.icon
			}, u.a.createElement(Yt.a, null)), u.a.createElement("span", {
				className: Xn.a.label
			}, ne.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var Yn = n("./src/reddit/components/UserIcon/index.tsx"),
				$n = n("./src/reddit/icons/svgs/Error/index.tsx"),
				eo = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				to = n("./src/reddit/components/ContentTooltip/index.tsx"),
				no = n("./src/reddit/helpers/trackers/gild.ts"),
				oo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				so = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less"),
				ro = n.n(so);

			function ao() {
				return (ao = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const io = {
					height: 280,
					width: 275
				},
				co = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: o
					} = e;
					const s = t.awardCountsById,
						r = Object(p.d)(),
						a = Object(ft.a)(),
						i = Object(p.e)(e => Object(be.j)(e, {
							thing: t
						})),
						c = Object(p.e)(e => {
							const n = Object(Oe.l)(e);
							return (null == n ? void 0 : n.id) === t.authorId
						}),
						d = kt(),
						l = Object(p.e)(rn.d),
						m = u.a.useCallback(() => {
							r(Object(Ot.i)())
						}, [r]);
					return s && i.length ? u.a.createElement(to.a, ao({
						className: ro.a.container,
						tooltipId: o,
						tooltipSizeEstimate: io,
						defaultTooltipPosition: "top"
					}, d), u.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, u.a.createElement("div", {
						className: ro.a.header
					}, u.a.createElement("span", {
						className: ro.a.title
					}, ne.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), u.a.createElement("button", {
						onClick: m
					}, u.a.createElement(oo.a, {
						className: ro.a.closeIcon
					}))), u.a.createElement("div", {
						className: ro.a.awardsList
					}, i.map(e => u.a.createElement("div", {
						key: e.id,
						className: ro.a.award
					}, u.a.createElement("span", null, Object(Wn.b)(s[e.id])), u.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: ro.a.awardIcon,
						src: Object(fe.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: l
						})
					}), u.a.createElement("span", null, e.name))), !c && u.a.createElement("button", {
						className: ro.a.giveAwardButton,
						onClick: () => {
							m();
							const e = Object(bt.d)(bt.a.GildingFlow, !0);
							return a(Object(no.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), r(Object(lt.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, u.a.createElement(vt.a, {
						className: ro.a.awardIcon
					}), u.a.createElement("span", null, ne.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var lo = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less"),
				mo = n.n(lo);
			const uo = () => {},
				po = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						s = `awards-badge-tooltip-content-${t.id}`,
						r = Object(p.d)(),
						a = Object(ft.a)(),
						i = Object(p.e)(e => Object(be.j)(e, {
							thing: t
						})),
						c = u.a.useMemo(() => i.reduce((e, n) => {
							var o;
							return e + ((null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n.id]) || 0)
						}, 0), [i, t]),
						d = u.a.useMemo(() => !(!Object(x.b)(t) || !t.awardingsByCurrentUser) && i.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [i, t]),
						l = Object(p.e)(rn.d),
						m = Object(p.e)(e => Object(At.b)(n)(e)),
						h = u.a.useCallback(() => {
							r(Object(Ot.h)({
								tooltipId: n
							}))
						}, [r, n]),
						b = u.a.useCallback(() => {
							r(Object(Ot.i)())
						}, [r]);
					u.a.useEffect(() => {
						m && a(Object(Ct.l)(t.id))
					}, [t.id, m]);
					const C = i.slice(0, 3);
					return C.length ? u.a.createElement(eo.b, {
						onCloseUserDropdown: b,
						onOpenUserDropdown: uo,
						dropdownIsOpen: m,
						hoverId: s,
						tooltipId: n
					}, u.a.createElement("button", {
						id: n,
						className: Object(o.a)(mo.a.badge, {
							[mo.a.awarded]: d
						}),
						onClick: h
					}, C.map(e => u.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: mo.a.awardIcon,
						src: Object(fe.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: l
						})
					})), u.a.createElement("span", {
						className: mo.a.countText
					}, ne.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [ne.fbt._plural(c, "number", Object(Wn.b)(c))], {
						hk: "34eaW8"
					}))), u.a.createElement(co, {
						id: s,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var ho = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				bo = n.n(ho);
			var Co = Object(En.u)()(Object(p.b)(() => Object(ge.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return In(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = In(e, {
						commentId: n
					});
					if (o) return Object(fe.a)(e, {
						award: o,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: W.b,
				commentPermalink: K.m,
				errorMsgs: K.I,
				flair: K.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isEditing: K.z,
				prediction: Tn.f,
				isSelectedForReply: (e, t) => {
					let {
						commentId: n,
						commentsPageKey: o
					} = t;
					return Object(K.L)(e, {
						commentId: n,
						commentsPageKey: o
					})
				},
				subreddit: En.r,
				shouldRenderSystemMessages: On,
				commentSubmitError: W.c,
				isPendingComment: W.e,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = nn(n),
						s = on(n);
					return Object(At.b)(o)(e) || Object(At.b)(s)(e)
				}
			}), (e, t) => {
				let {
					commentId: n,
					commentsPageKey: o,
					isLivestreaming: s
				} = t;
				return {
					onSubmitRetry: () => e(Object(dt.n)({
						commentId: n,
						commentsPageKey: o,
						isLivestreaming: s
					}))
				}
			})(e => {
				let {
					associatedAward: t,
					awardIconUrl: n,
					childrenInfo: s,
					comment: r,
					commentPermalink: a,
					commentsPageKey: i,
					commentSubmitError: c,
					errorMsgs: d,
					flair: l,
					isActive: m,
					isEditing: h,
					isDropdownMenuVisible: b,
					isLivestreaming: C = !1,
					isEmbeddedLiveChat: f = !1,
					isPendingComment: v,
					isSelectedForReply: g,
					postId: E,
					prediction: _,
					renderedInOverlay: x,
					sendEvent: y,
					targetComment: O,
					addToRefList: I,
					onReplyClick: T,
					onSubmitRetry: k,
					shouldRenderSystemMessages: w
				} = e;
				var j;
				const N = u.a.useRef(null),
					M = u.a.useRef(null),
					[L, S] = u.a.useState(r && r.collapsed),
					[R, A] = u.a.useState(!1),
					[P, D] = u.a.useState(!1),
					B = u.a.useMemo(() => ({
						renderingObjectInfo: r || void 0
					}), [r]),
					F = Object(p.e)(e => r ? xe(e, r) : []),
					U = () => {
						S(!L)
					};
				if (u.a.useEffect(() => {
						var e;
						M.current && (null === (e = M.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !C && D(!0)
					}, []), u.a.useEffect(() => {
						if (!M.current || C) return;
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
					}, [R, P, C]), u.a.useEffect(() => {
						var e;
						m && (null === (e = N.current) || void 0 === e || e.focus())
					}, [m]), u.a.useEffect(() => {
						N.current && I && I(N)
					}, [I]), !r) return null;
				const H = r.isSystem,
					G = !r.isDeleted && !H,
					V = !!t,
					K = Object.keys(r.awardCountsById || {}).length > 0,
					W = !!(null == F ? void 0 : F.length),
					Q = null === (j = null == r ? void 0 : r.id) || void 0 === j ? void 0 : j.includes("cb_botmsg");
				return L ? u.a.createElement(it, {
					commentCount: 1,
					onClick: U
				}) : u.a.createElement("div", {
					className: Object(o.a)(bo.a.container, {
						[bo.a.livestreaming]: C,
						[bo.a.selectedForReply]: g,
						[bo.a.hover]: b,
						[bo.a.hasError]: Boolean(c),
						[bo.a.BotComment]: Q
					}),
					tabIndex: 0,
					ref: N
				}, r.parentId && u.a.createElement("div", {
					className: bo.a.replyWrapper
				}, u.a.createElement(pn.a, {
					commentId: r.parentId,
					onReplyClick: e => {
						y(Object(Ct.b)(e)), T(e)
					},
					isLivestreaming: C,
					isV2Enabled: !0
				})), u.a.createElement("div", {
					id: O ? "targetComment" : void 0,
					className: Object(o.a)({
						[bo.a.comment]: !H,
						[bo.a.systemMessageComment]: H && !C && w,
						[bo.a.highlighted]: O,
						[bo.a.expanded]: R
					})
				}, G && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: bo.a.avatar
				}, Q ? u.a.createElement(Bn.a, null) : u.a.createElement(Yn.a, {
					className: Object(o.a)(bo.a.icon),
					iconUrl: r.profileImage || r.authorIconImage,
					userName: r.author,
					isNSFW: Boolean(r.profileOver18 || r.authorIconIsNSFW)
				})), u.a.createElement("div", null, u.a.createElement(Qe.a, {
					className: bo.a.TopMeta,
					childrenInfo: s,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: r,
					commentsPageKey: i,
					compact: !0,
					flair: l,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: C,
					isEmbeddedLiveChat: f,
					renderedInOverlay: x,
					hideAwards: !0
				}), !Q && u.a.createElement("span", {
					className: bo.a.timestamp
				}, u.a.createElement(gn.d, {
					seconds: r.created
				}))), !h && u.a.createElement("div", {
					ref: M,
					className: Object(o.a)(bo.a.commentBody, {
						[bo.a.expanded]: R
					})
				}, V && t && C ? u.a.createElement(ot, {
					award: t,
					comment: r,
					iconUrl: n
				}) : _ ? u.a.createElement(qe.a, {
					comment: r,
					prediction: _
				}) : u.a.createElement(u.a.Fragment, null, u.a.createElement(Xe.b, {
					className: Object(o.a)(bo.a.richTextJson, {
						[bo.a.livestreaming]: C
					}),
					content: Object(Je.a)(r),
					rtJsonElementProps: B,
					useExplicitTextColor: C
				}), (K || W) && u.a.createElement("div", {
					className: bo.a.reactions
				}, K && u.a.createElement(po, {
					postOrComment: r
				}), W && F.map(e => {
					let {
						award: t
					} = e;
					return u.a.createElement(zn, {
						key: t.id,
						enforceDarkMode: C,
						comment: r,
						reaction: t
					})
				})), c && u.a.createElement("div", {
					className: bo.a.error
				}, u.a.createElement($n.a, null), u.a.createElement("span", null, ne.fbt._("Message failed to send.", null, {
					hk: "24xGQi"
				})), u.a.createElement("button", {
					className: bo.a.retryButton,
					onClick: k
				}, ne.fbt._("Retry", null, {
					hk: "37t7Iq"
				}))), !v && !c && u.a.createElement(un, {
					className: bo.a.menu,
					comment: r,
					commentPermalink: a,
					commentsPageKey: i,
					isLivestreaming: C
				}))), h && u.a.createElement(vn.a, {
					isV2: !0,
					isLivestreaming: C,
					isEmbeddedLiveChat: f,
					postId: E,
					sendEvent: y,
					draftKey: Object(Ke.a)(en.c.edit, r.id),
					commentsPageKey: i,
					isEditing: h,
					comment: r
				})), r.isDeleted && u.a.createElement(Zn, null), G && !h && d && d.map((e, t) => u.a.createElement(_n.b, {
					key: `${t}-${e}`,
					className: bo.a.errorText
				}, e)), !h && P && !R && u.a.createElement("button", {
					type: "button",
					className: Object(o.a)(bo.a.readMoreButton, {
						[bo.a.livestreaming]: C
					}),
					onClick: () => {
						A(!R)
					}
				}, ne.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), H && !C && w && u.a.createElement(fn, {
					comment: r
				})))
			}));
			const fo = e => {
				return Object(p.e)(Ce.g) ? u.a.createElement(Co, e) : u.a.createElement(Dn, e)
			};
			var vo = n("./src/reddit/components/CommentsChat/index.m.less"),
				go = n.n(vo),
				Eo = n("./node_modules/lodash/isEqual.js"),
				_o = n.n(Eo),
				xo = n("./src/reddit/controls/Button/index.tsx"),
				yo = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Oo = n.n(yo);
			const Io = Ve.a.div("ButtonWrapper", Oo.a),
				To = e => {
					let {
						top: t
					} = e;
					return u.a.createElement("span", {
						className: Object(o.a)(Oo.a.ChunkPlaceholder, {
							[Oo.a.top]: t
						})
					}, ne.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				ko = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: s,
						setRef: r,
						...a
					} = e;
					return u.a.createElement("div", {
						ref: r,
						className: Object(o.a)(t, {
							[Oo.a.ScrollerWrapper]: !n,
							[Oo.a.LivestreamingWrapper]: n,
							[Oo.a.loading]: s
						})
					}, !s && a.isPrevLoading && !n && u.a.createElement(To, {
						top: !0
					}), a.children, !s && a.isNextLoading && !n && u.a.createElement(To, null))
				};
			class wo extends u.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = u.a.createRef(), this._refBeforeActiveComments = u.a.createRef(), this._refNextActiveComments = u.a.createRef(), this._refActiveComments = u.a.createRef(), this.resizeObserver = null, this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
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
					const t = e.children.length !== this.props.children.length || !_o()(g()(e.children), g()(this.props.children)) || !_o()(l()(e.children), l()(this.props.children));
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
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(o.a)([Oo.a.NewComments, Oo.a.show]) : Oo.a.NewComments;
					return u.a.createElement(u.a.Fragment, null, u.a.createElement(ko, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, u.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: Oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), u.a.createElement("div", {
						key: "activeCommentsSection",
						ref: this._refActiveComments,
						className: Oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), u.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Oo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), u.a.createElement(Io, null, u.a.createElement(xo.l, {
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
			var jo = wo,
				No = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Mo = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				Lo = n("./src/reddit/selectors/posts.ts"),
				So = n("./src/redditGQL/types.ts");
			const Ro = 6e4,
				Ao = 5e3,
				Po = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				Do = Object(ge.c)({
					blockedRedditors: yt.a,
					blockedRedditorsPending: yt.b,
					chatCommentLinks: K.g,
					isPending: K.d,
					liveCommentsWebsocket: Lo.E,
					moreCommentsLink: K.H,
					isCommentReactionStreamingKillSwitchEnabled: Ce.f,
					currentUserId: Oe.j,
					showReactionsHint: e => {
						const t = Object(Ce.d)(e),
							n = Object(Oe.a)(3 * s.E)(e),
							o = Object(Mo.a)(e, {
								experience: So.U.LiveChatReactionEdu
							});
						return t && n && !!(null == o ? void 0 : o.value)
					}
				}),
				Bo = Object(p.b)(Do, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e($(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						B(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(C.n)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(b.g)()),
					loadComments: async () => await e(Object(te.commentsPageDataRequested)(t.postId, void 0, {
						sort: s.w.CHAT,
						comment_awardings_by_current_user: !0
					}, s.w.CHAT)),
					fetchAvailableReactionAwards: async t => e(Ae(t)),
					processReactionAwardStreamData: t => e(Re(t)),
					createBotComment: () => {
						e(z({
							authorFlair: void 0,
							headCommentId: void 0,
							numComments: 0,
							commentsPageKey: t.commentsPageKey,
							comment: Gn({
								subredditId: t.subredditId,
								text: Vn
							})
						})), e(Object(ee.b)({
							experience: So.U.LiveChatReactionEdu,
							value: !1
						})), e(Object(ee.c)(So.U.LiveChatReactionEdu))
					}
				}));
			class Fo extends u.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = u.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.handleReactionStreamData = this.handleReactionStreamData.bind(this), this.sendViewLastMessageTelemetry = c()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now(),
						realtimeGQLVariables: void 0,
						pinnedChatbotMessage: e.showReactionsHint
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(a.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(r.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, Ro)
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
					e(t), this.updateRealtimeGQLVariables(), this.props.showReactionsHint && !this._removeReactionsHintTimeout && this.setReactionsHintTimeout()
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
						pinnedChatbotMessage: p
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks !== s || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || e.showReactionsHint !== l || t.expandedCommentIds.length !== m.length || t.pinnedChatbotMessage !== p || t.timestampUpdateTrigger !== u
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: i,
						onLiveCommentsSubscribe: c,
						postId: d
					} = this.props;
					if (d !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && i(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), d && a && (c(s, a, d), this._subscribedPostId = d, this._subscribedLiveCommentsWebsocket = a), this.updateRealtimeGQLVariables()), e.blockedRedditors.ids !== t.ids) {
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
						const e = Object(r.a)(() => {
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
					}), this.setReactionsHintTimeout())
				}
				setReactionsHintTimeout() {
					this._removeReactionsHintTimeout = setTimeout(() => {
						this.setState({
							pinnedChatbotMessage: !1
						}), this.props.createBotComment(), this.props.sendEvent(Object(Ct.k)())
					}, Ao)
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
					t && !t.pending && (e(t.moreCommentId), o(Object(Ct.j)("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = l()(e);
					(null == n ? void 0 : n.id) && t(Object(Ct.c)(n.id))
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
						commentId: s,
						commentsPageKey: r,
						emptyStateClassName: a,
						isLivestreaming: i,
						isEmbeddedLiveChat: c,
						isLoading: d,
						isPending: l,
						postId: m,
						renderedInOverlay: p,
						sendEvent: b,
						isCommentReactionStreamingKillSwitchEnabled: C
					} = this.props, {
						expandedCommentIds: f,
						targetCommentIndex: v,
						timestampUpdateTrigger: g,
						realtimeGQLVariables: E,
						pinnedChatbotMessage: _
					} = this.state, x = !(t && t.length || d || l);
					return u.a.createElement(u.a.Fragment, null, !C && E && u.a.createElement(h.a, {
						variables: E,
						onData: this.handleReactionStreamData,
						queryKey: "liveChatCommentReactions"
					}), x ? u.a.createElement(Ue.c, {
						className: Object(o.a)(a, {
							[go.a.EmbeddedLiveChatScroller]: c
						}),
						isChat: !0
					}) : u.a.createElement(jo, {
						className: Object(o.a)(n, {
							[go.a.EmbeddedLiveChatScroller]: c
						}),
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: i,
						isLoading: d || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: v,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Po(e.ids, f, t) ? u.a.createElement(it, {
						commentCount: 1,
						isLivestreaming: i,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : u.a.createElement(fo, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: r,
						isLivestreaming: i,
						isEmbeddedLiveChat: c,
						postId: m,
						renderedInOverlay: !!p,
						sendEvent: b,
						timestampUpdateTrigger: g,
						targetComment: t.id === s,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), _ && u.a.createElement(Kn, {
						message: Vn
					}), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = Bo(Object(No.c)(Fo))
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
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				b = n.n(h);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = {
					height: 200,
					width: 200
				},
				v = e => {
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
				g = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: a,
						onClick: i,
						hideCaret: d
					} = e;
					return r.a.createElement("div", {
						onClick: i,
						className: Object(c.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === s,
							[b.a.caretOnLeft]: "left" === s,
							[b.a.caretOnRight]: "right" === s,
							[b.a.caretOnBottom]: "bottom" === s,
							[b.a.hideCaret]: d
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": a && a[s] ? a[s] : Object(u.a)(e).body
						}
					}, t)
				}),
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				_ = Object(m.a)(g, [o.a.Click, o.a.Keydown]),
				x = Object(a.b)(E);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						l.a.read(() => {
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
								position: s ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
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
					return r.a.createElement(_, C({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = x(y)
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
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, n) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/lib/filterQueryParams/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				h = n("./src/reddit/selectors/meta.ts"),
				b = n("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				C = n.n(b);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(o || (o = {}));
			const f = m.a.wrapped(u.b, "Row", C.a),
				v = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					origin: h.k
				}),
				g = Object(i.b)(v);
			t.b = g(e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, a.a.createElement(f, {
				displayText: s.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(d.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.OldestFirst
				})
			}, a.a.createElement(f, {
				displayText: s.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === o.OldestFirst
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(d.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.MostReportedFirst
				})
			}, a.a.createElement(f, {
				displayText: s.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === o.MostReportedFirst
			}))))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
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
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: s,
						...a
					} = e;
					const c = Object(i.b)(n),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, m)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
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
				return p
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
			}), p = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
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
					case s.L.AUTHORIZATION_ERROR:
						return n ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.L.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.L.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.L.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.L.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let s = n && `r/${n}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), e.sort && e.sort !== o.a.NewestFirst && (s += `--[${e.sort}]`), s
			}
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
						d = Object(r.f)(i, {
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
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("i", d({}, e, {
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
		"./src/reddit/reducers/features/eligibleUXExperiences/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						experiences: {}
					},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const n = Date.now(),
							{
								experiences: o
							} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								...Object.keys(o).reduce((e, t) => ({
									...e,
									[t]: {
										value: o[t],
										fetched: n
									}
								}), {})
							}
						}
					}
					case o.b: {
						const {
							experience: n,
							value: o
						} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								[n]: {
									...e.experiences[n],
									value: o
								}
							}
						}
					}
				}
				return e
			}
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
		"./src/reddit/selectors/eligibleUXExperiences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/eligibleUXExperiences/index.ts");
			Object(o.a)({
				features: {
					eligibleUXExperiences: s.a
				}
			});
			const r = (e, t) => {
				var n, o, s;
				return (null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.eligibleUXExperiences) || void 0 === o ? void 0 : o.experiences) || void 0 === s ? void 0 : s[t.experience]) || null
			}
		},
		"./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(s.c)(e, {
				experimentEligibilitySelector: r.R,
				experimentName: o.jc
			}) === o.Sd
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				r = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/comments/index.ts"),
				c = n("./src/reddit/reducers/pages/modHub/index.ts"),
				d = n("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			Object(a.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: c.a
				}
			});
			const l = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				m = Object(r.a)((e, t) => {
					var n, o, s;
					const {
						pageName: r,
						page: a
					} = t, i = l(0, t);
					if (!(null === (s = null === (o = null === (n = e.pages.modHub.modQueue[r]) || void 0 === n ? void 0 : n.itemOrder) || void 0 === o ? void 0 : o[i]) || void 0 === s ? void 0 : s[a])) return;
					const c = e.pages.modHub.modQueue[r].itemOrder[i][a];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var n;
					const {
						pageName: o
					} = t;
					return null === (n = e.pages.modHub.modQueue[o]) || void 0 === n || !n.api || e.pages.modHub.modQueue[o].api.pending
				},
				p = (e, t) => {
					var n;
					const o = l(0, t);
					return null === (n = e.pages.modHub.modQueue[t.pageName]) || void 0 === n ? void 0 : n.loadMore[o]
				},
				h = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				C = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				f = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === o.Sb.MODERATION_PAGES || t.meta.name === o.Sb.MODQUEUE_PAGES)
				},
				v = e => {
					var t;
					const n = e.platform && e.platform.currentPage;
					return (null === (t = null == n ? void 0 : n.meta) || void 0 === t ? void 0 : t.name) === o.Sb.MODQUEUE_PAGES
				},
				g = e => f(e) && Object(d.a)(e) || !1
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
		"./src/redditGQL/operations/FetchEligibleUXExperiences.json": function(e) {
			e.exports = JSON.parse('{"id":"eb0965c8c3a7"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		},
		"./src/redditGQL/operations/StoreUxTargetingAction.json": function(e) {
			e.exports = JSON.parse('{"id":"e734e21836ec"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.22965fdfd2d5bc5863cd.js.map