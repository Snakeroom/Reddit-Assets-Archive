// https://www.redditstatic.com/desktop2x/1.1f82869fcae513b86fc2.js
// Retrieved at 7/5/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/@reddit/crypto/react/config/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i);
			const o = {
					api: {
						accessToken: "accessToken"
					},
					gql: {
						host: "12345",
						fetchOptions: {}
					},
					nightModeActive: () => !1,
					sendEvent(e) {
						console.log("Event logged: ", e)
					},
					fbt: {
						inline: (e, t) => e,
						singular: (e, t) => r.a.createElement(r.a.Fragment, null, e),
						param: (e, t) => r.a.createElement(r.a.Fragment, null, e),
						plural: (e, t) => r.a.createElement(r.a.Fragment, null, e)
					}
				},
				s = o,
				a = Object(i.createContext)(s),
				c = a.Provider,
				u = () => Object(i.useContext)(a),
				l = () => u().fbt || o.fbt,
				p = () => u().sendEvent || o.sendEvent
		},
		"./node_modules/@reddit/crypto/react/gql/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return nn
			})), n.d(t, "b", (function() {
				return Qt
			})), n.d(t, "c", (function() {
				return Wt
			})), n.d(t, "d", (function() {
				return tn
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				s = n("./node_modules/graphql/language/parser.mjs"),
				a = Object.defineProperty,
				c = Object.defineProperties,
				u = Object.getOwnPropertyDescriptors,
				l = Object.getOwnPropertySymbols,
				p = Object.prototype.hasOwnProperty,
				f = Object.prototype.propertyIsEnumerable,
				d = (e, t, n) => t in e ? a(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				h = (e, t) => {
					for (var n in t || (t = {})) p.call(t, n) && d(e, n, t[n]);
					if (l)
						for (var n of l(t)) f.call(t, n) && d(e, n, t[n]);
					return e
				},
				v = (e, t) => c(e, u(t));

			function m(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			const y = 10,
				E = 2;

			function g(e) {
				return _(e, [])
			}

			function _(e, t) {
				switch (typeof e) {
					case "string":
						return JSON.stringify(e);
					case "function":
						return e.name ? `[function ${e.name}]` : "[function]";
					case "object":
						return function(e, t) {
							if (null === e) return "null";
							if (t.includes(e)) return "[Circular]";
							const n = [...t, e];
							if (function(e) {
									return "function" == typeof e.toJSON
								}(e)) {
								const t = e.toJSON();
								if (t !== e) return "string" == typeof t ? t : _(t, n)
							} else if (Array.isArray(e)) return function(e, t) {
								if (0 === e.length) return "[]";
								if (t.length > E) return "[Array]";
								const n = Math.min(y, e.length),
									i = e.length - n,
									r = [];
								for (let o = 0; o < n; ++o) r.push(_(e[o], t));
								1 === i ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`);
								return "[" + r.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								const n = Object.entries(e);
								if (0 === n.length) return "{}";
								if (t.length > E) return "[" + function(e) {
									const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
									if ("Object" === t && "function" == typeof e.constructor) {
										const t = e.constructor.name;
										if ("string" == typeof t && "" !== t) return t
									}
									return t
								}(e) + "]";
								return "{ " + n.map(([e, n]) => e + ": " + _(n, t)).join(", ") + " }"
							}(e, n)
						}(e, t);
					default:
						return String(e)
				}
			}
			class N {
				constructor(e, t, n) {
					this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
				}
				get[Symbol.toStringTag]() {
					return "Location"
				}
				toJSON() {
					return {
						start: this.start,
						end: this.end
					}
				}
			}
			class T {
				constructor(e, t, n, i, r, o) {
					this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = o, this.prev = null, this.next = null
				}
				get[Symbol.toStringTag]() {
					return "Token"
				}
				toJSON() {
					return {
						kind: this.kind,
						value: this.value,
						line: this.line,
						column: this.column
					}
				}
			}
			const b = {
					Name: [],
					Document: ["definitions"],
					OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
					VariableDefinition: ["variable", "type", "defaultValue", "directives"],
					Variable: ["name"],
					SelectionSet: ["selections"],
					Field: ["alias", "name", "arguments", "directives", "selectionSet"],
					Argument: ["name", "value"],
					FragmentSpread: ["name", "directives"],
					InlineFragment: ["typeCondition", "directives", "selectionSet"],
					FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
					IntValue: [],
					FloatValue: [],
					StringValue: [],
					BooleanValue: [],
					NullValue: [],
					EnumValue: [],
					ListValue: ["values"],
					ObjectValue: ["fields"],
					ObjectField: ["name", "value"],
					Directive: ["name", "arguments"],
					NamedType: ["name"],
					ListType: ["type"],
					NonNullType: ["type"],
					SchemaDefinition: ["description", "directives", "operationTypes"],
					OperationTypeDefinition: ["type"],
					ScalarTypeDefinition: ["description", "name", "directives"],
					ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
					FieldDefinition: ["description", "name", "arguments", "type", "directives"],
					InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
					InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
					UnionTypeDefinition: ["description", "name", "directives", "types"],
					EnumTypeDefinition: ["description", "name", "directives", "values"],
					EnumValueDefinition: ["description", "name", "directives"],
					InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
					DirectiveDefinition: ["description", "name", "arguments", "locations"],
					SchemaExtension: ["directives", "operationTypes"],
					ScalarTypeExtension: ["name", "directives"],
					ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
					InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
					UnionTypeExtension: ["name", "directives", "types"],
					EnumTypeExtension: ["name", "directives", "values"],
					InputObjectTypeExtension: ["name", "directives", "fields"]
				},
				O = new Set(Object.keys(b));

			function x(e) {
				const t = null == e ? void 0 : e.kind;
				return "string" == typeof t && O.has(t)
			}
			let I;
			var k;
			let A;
			var w;
			(k = I || (I = {})).QUERY = "query", k.MUTATION = "mutation", k.SUBSCRIPTION = "subscription", (w = A || (A = {})).NAME = "Name", w.DOCUMENT = "Document", w.OPERATION_DEFINITION = "OperationDefinition", w.VARIABLE_DEFINITION = "VariableDefinition", w.SELECTION_SET = "SelectionSet", w.FIELD = "Field", w.ARGUMENT = "Argument", w.FRAGMENT_SPREAD = "FragmentSpread", w.INLINE_FRAGMENT = "InlineFragment", w.FRAGMENT_DEFINITION = "FragmentDefinition", w.VARIABLE = "Variable", w.INT = "IntValue", w.FLOAT = "FloatValue", w.STRING = "StringValue", w.BOOLEAN = "BooleanValue", w.NULL = "NullValue", w.ENUM = "EnumValue", w.LIST = "ListValue", w.OBJECT = "ObjectValue", w.OBJECT_FIELD = "ObjectField", w.DIRECTIVE = "Directive", w.NAMED_TYPE = "NamedType", w.LIST_TYPE = "ListType", w.NON_NULL_TYPE = "NonNullType", w.SCHEMA_DEFINITION = "SchemaDefinition", w.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", w.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", w.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", w.FIELD_DEFINITION = "FieldDefinition", w.INPUT_VALUE_DEFINITION = "InputValueDefinition", w.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", w.UNION_TYPE_DEFINITION = "UnionTypeDefinition", w.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", w.ENUM_VALUE_DEFINITION = "EnumValueDefinition", w.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", w.DIRECTIVE_DEFINITION = "DirectiveDefinition", w.SCHEMA_EXTENSION = "SchemaExtension", w.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", w.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", w.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", w.UNION_TYPE_EXTENSION = "UnionTypeExtension", w.ENUM_TYPE_EXTENSION = "EnumTypeExtension", w.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
			const D = Object.freeze({});

			function S(e, t, n = b) {
				const i = new Map;
				for (const m of Object.values(A)) i.set(m, C(t, m));
				let r = void 0,
					o = Array.isArray(e),
					s = [e],
					a = -1,
					c = [],
					u = e,
					l = void 0,
					p = void 0;
				const f = [],
					d = [];
				do {
					const e = ++a === s.length,
						E = e && 0 !== c.length;
					if (e) {
						if (l = 0 === d.length ? void 0 : f[f.length - 1], u = p, p = d.pop(), E)
							if (o) {
								u = u.slice();
								let e = 0;
								for (const [t, n] of c) {
									const i = t - e;
									null === n ? (u.splice(i, 1), e++) : u[i] = n
								}
							} else {
								u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
								for (const [e, t] of c) u[e] = t
							} a = r.index, s = r.keys, c = r.edits, o = r.inArray, r = r.prev
					} else if (p) {
						if (null == (u = p[l = o ? a : s[a]])) continue;
						f.push(l)
					}
					let _;
					if (!Array.isArray(u)) {
						var h, v;
						x(u) || m(!1, `Invalid AST Node: ${g(u)}.`);
						const n = e ? null === (h = i.get(u.kind)) || void 0 === h ? void 0 : h.leave : null === (v = i.get(u.kind)) || void 0 === v ? void 0 : v.enter;
						if ((_ = null == n ? void 0 : n.call(t, u, l, p, f, d)) === D) break;
						if (!1 === _) {
							if (!e) {
								f.pop();
								continue
							}
						} else if (void 0 !== _ && (c.push([l, _]), !e)) {
							if (!x(_)) {
								f.pop();
								continue
							}
							u = _
						}
					}
					var y;
					if (void 0 === _ && E && c.push([l, u]), e) f.pop();
					else r = {
						inArray: o,
						index: a,
						keys: s,
						edits: c,
						prev: r
					}, s = (o = Array.isArray(u)) ? u : null !== (y = n[u.kind]) && void 0 !== y ? y : [], a = -1, c = [], p && d.push(p), p = u
				} while (void 0 !== r);
				return 0 !== c.length ? c[c.length - 1][1] : e
			}

			function C(e, t) {
				const n = e[t];
				return "object" == typeof n ? n : "function" == typeof n ? {
					enter: n,
					leave: void 0
				} : {
					enter: e.enter,
					leave: e.leave
				}
			}

			function L(e) {
				return 9 === e || 32 === e
			}

			function R(e) {
				return e >= 48 && e <= 57
			}

			function F(e) {
				return e >= 97 && e <= 122 || e >= 65 && e <= 90
			}

			function P(e) {
				return F(e) || 95 === e
			}

			function M(e) {
				return F(e) || R(e) || 95 === e
			}

			function j(e) {
				var t;
				let n = Number.MAX_SAFE_INTEGER,
					i = null,
					r = -1;
				for (let s = 0; s < e.length; ++s) {
					var o;
					const t = e[s],
						a = B(t);
					a !== t.length && (i = null !== (o = i) && void 0 !== o ? o : s, r = s, 0 !== s && a < n && (n = a))
				}
				return e.map((e, t) => 0 === t ? e : e.slice(n)).slice(null !== (t = i) && void 0 !== t ? t : 0, r + 1)
			}

			function B(e) {
				let t = 0;
				for (; t < e.length && L(e.charCodeAt(t));) ++t;
				return t
			}
			const U = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

			function V(e) {
				return q[e.charCodeAt(0)]
			}
			const q = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];

			function K(e) {
				return S(e, G)
			}
			const G = {
				Name: {
					leave: e => e.value
				},
				Variable: {
					leave: e => "$" + e.name
				},
				Document: {
					leave: e => Y(e.definitions, "\n\n")
				},
				OperationDefinition: {
					leave(e) {
						const t = $("(", Y(e.variableDefinitions, ", "), ")"),
							n = Y([e.operation, Y([e.name, t]), Y(e.directives, " ")], " ");
						return ("query" === n ? "" : n + " ") + e.selectionSet
					}
				},
				VariableDefinition: {
					leave: ({
						variable: e,
						type: t,
						defaultValue: n,
						directives: i
					}) => e + ": " + t + $(" = ", n) + $(" ", Y(i, " "))
				},
				SelectionSet: {
					leave: ({
						selections: e
					}) => z(e)
				},
				Field: {
					leave({
						alias: e,
						name: t,
						arguments: n,
						directives: i,
						selectionSet: r
					}) {
						const o = $("", e, ": ") + t;
						let s = o + $("(", Y(n, ", "), ")");
						return s.length > 80 && (s = o + $("(\n", J(Y(n, "\n")), "\n)")), Y([s, Y(i, " "), r], " ")
					}
				},
				Argument: {
					leave: ({
						name: e,
						value: t
					}) => e + ": " + t
				},
				FragmentSpread: {
					leave: ({
						name: e,
						directives: t
					}) => "..." + e + $(" ", Y(t, " "))
				},
				InlineFragment: {
					leave: ({
						typeCondition: e,
						directives: t,
						selectionSet: n
					}) => Y(["...", $("on ", e), Y(t, " "), n], " ")
				},
				FragmentDefinition: {
					leave: ({
						name: e,
						typeCondition: t,
						variableDefinitions: n,
						directives: i,
						selectionSet: r
					}) => `fragment ${e}${$("(",Y(n,", "),")")} on ${t} ${$("",Y(i," ")," ")}` + r
				},
				IntValue: {
					leave: ({
						value: e
					}) => e
				},
				FloatValue: {
					leave: ({
						value: e
					}) => e
				},
				StringValue: {
					leave: ({
						value: e,
						block: t
					}) => t ? function(e, t) {
						const n = e.replace(/"""/g, '\\"""'),
							i = n.split(/\r\n|[\n\r]/g),
							r = 1 === i.length,
							o = i.length > 1 && i.slice(1).every(e => 0 === e.length || L(e.charCodeAt(0))),
							s = n.endsWith('\\"""'),
							a = e.endsWith('"') && !s,
							c = e.endsWith("\\"),
							u = a || c,
							l = !(null != t && t.minimize) && (!r || e.length > 70 || u || o || s);
						let p = "";
						const f = r && L(e.charCodeAt(0));
						return (l && !f || o) && (p += "\n"), p += n, (l || u) && (p += "\n"), '"""' + p + '"""'
					}(e) : function(e) {
						return `"${e.replace(U,V)}"`
					}(e)
				},
				BooleanValue: {
					leave: ({
						value: e
					}) => e ? "true" : "false"
				},
				NullValue: {
					leave: () => "null"
				},
				EnumValue: {
					leave: ({
						value: e
					}) => e
				},
				ListValue: {
					leave: ({
						values: e
					}) => "[" + Y(e, ", ") + "]"
				},
				ObjectValue: {
					leave: ({
						fields: e
					}) => "{" + Y(e, ", ") + "}"
				},
				ObjectField: {
					leave: ({
						name: e,
						value: t
					}) => e + ": " + t
				},
				Directive: {
					leave: ({
						name: e,
						arguments: t
					}) => "@" + e + $("(", Y(t, ", "), ")")
				},
				NamedType: {
					leave: ({
						name: e
					}) => e
				},
				ListType: {
					leave: ({
						type: e
					}) => "[" + e + "]"
				},
				NonNullType: {
					leave: ({
						type: e
					}) => e + "!"
				},
				SchemaDefinition: {
					leave: ({
						description: e,
						directives: t,
						operationTypes: n
					}) => $("", e, "\n") + Y(["schema", Y(t, " "), z(n)], " ")
				},
				OperationTypeDefinition: {
					leave: ({
						operation: e,
						type: t
					}) => e + ": " + t
				},
				ScalarTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n
					}) => $("", e, "\n") + Y(["scalar", t, Y(n, " ")], " ")
				},
				ObjectTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						interfaces: n,
						directives: i,
						fields: r
					}) => $("", e, "\n") + Y(["type", t, $("implements ", Y(n, " & ")), Y(i, " "), z(r)], " ")
				},
				FieldDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						type: i,
						directives: r
					}) => $("", e, "\n") + t + (Q(n) ? $("(\n", J(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + ": " + i + $(" ", Y(r, " "))
				},
				InputValueDefinition: {
					leave: ({
						description: e,
						name: t,
						type: n,
						defaultValue: i,
						directives: r
					}) => $("", e, "\n") + Y([t + ": " + n, $("= ", i), Y(r, " ")], " ")
				},
				InterfaceTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						interfaces: n,
						directives: i,
						fields: r
					}) => $("", e, "\n") + Y(["interface", t, $("implements ", Y(n, " & ")), Y(i, " "), z(r)], " ")
				},
				UnionTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						types: i
					}) => $("", e, "\n") + Y(["union", t, Y(n, " "), $("= ", Y(i, " | "))], " ")
				},
				EnumTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						values: i
					}) => $("", e, "\n") + Y(["enum", t, Y(n, " "), z(i)], " ")
				},
				EnumValueDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n
					}) => $("", e, "\n") + Y([t, Y(n, " ")], " ")
				},
				InputObjectTypeDefinition: {
					leave: ({
						description: e,
						name: t,
						directives: n,
						fields: i
					}) => $("", e, "\n") + Y(["input", t, Y(n, " "), z(i)], " ")
				},
				DirectiveDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						repeatable: i,
						locations: r
					}) => $("", e, "\n") + "directive @" + t + (Q(n) ? $("(\n", J(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + Y(r, " | ")
				},
				SchemaExtension: {
					leave: ({
						directives: e,
						operationTypes: t
					}) => Y(["extend schema", Y(e, " "), z(t)], " ")
				},
				ScalarTypeExtension: {
					leave: ({
						name: e,
						directives: t
					}) => Y(["extend scalar", e, Y(t, " ")], " ")
				},
				ObjectTypeExtension: {
					leave: ({
						name: e,
						interfaces: t,
						directives: n,
						fields: i
					}) => Y(["extend type", e, $("implements ", Y(t, " & ")), Y(n, " "), z(i)], " ")
				},
				InterfaceTypeExtension: {
					leave: ({
						name: e,
						interfaces: t,
						directives: n,
						fields: i
					}) => Y(["extend interface", e, $("implements ", Y(t, " & ")), Y(n, " "), z(i)], " ")
				},
				UnionTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						types: n
					}) => Y(["extend union", e, Y(t, " "), $("= ", Y(n, " | "))], " ")
				},
				EnumTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						values: n
					}) => Y(["extend enum", e, Y(t, " "), z(n)], " ")
				},
				InputObjectTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						fields: n
					}) => Y(["extend input", e, Y(t, " "), z(n)], " ")
				}
			};

			function Y(e, t = "") {
				var n;
				return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
			}

			function z(e) {
				return $("{\n", J(Y(e, "\n")), "\n}")
			}

			function $(e, t, n = "") {
				return null != t && "" !== t ? e + t + n : ""
			}

			function J(e) {
				return $("  ", e.replace(/\n/g, "\n  "))
			}

			function Q(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
			}

			function X(e, t) {
				if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
			}
			const W = /\r\n|[\n\r]/g;

			function H(e, t) {
				let n = 0,
					i = 1;
				for (const r of e.body.matchAll(W)) {
					if ("number" == typeof r.index || X(!1), r.index >= t) break;
					n = r.index + r[0].length, i += 1
				}
				return {
					line: i,
					column: t + 1 - n
				}
			}

			function Z(e, t) {
				const n = e.locationOffset.column - 1,
					i = "".padStart(n) + e.body,
					r = t.line - 1,
					o = e.locationOffset.line - 1,
					s = t.line + o,
					a = 1 === t.line ? n : 0,
					c = t.column + a,
					u = `${e.name}:${s}:${c}\n`,
					l = i.split(/\r\n|[\n\r]/g),
					p = l[r];
				if (p.length > 120) {
					const e = Math.floor(c / 80),
						t = c % 80,
						n = [];
					for (let i = 0; i < p.length; i += 80) n.push(p.slice(i, i + 80));
					return u + ee([
						[`${s} |`, n[0]], ...n.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
						["|", n[e + 1]]
					])
				}
				return u + ee([
					[`${s-1} |`, l[r - 1]],
					[`${s} |`, p],
					["|", "^".padStart(c)],
					[`${s+1} |`, l[r + 1]]
				])
			}

			function ee(e) {
				const t = e.filter(([e, t]) => void 0 !== t),
					n = Math.max(...t.map(([e]) => e.length));
				return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n")
			}
			class GraphQLError extends Error {
				constructor(e, ...t) {
					var n, i, r;
					const {
						nodes: o,
						source: s,
						positions: a,
						path: c,
						originalError: u,
						extensions: l
					} = function(e) {
						const t = e[0];
						return null == t || "kind" in t || "length" in t ? {
							nodes: t,
							source: e[1],
							positions: e[2],
							path: e[3],
							originalError: e[4],
							extensions: e[5]
						} : t
					}(t);
					super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != u ? u : void 0, this.nodes = te(Array.isArray(o) ? o : o ? [o] : void 0);
					const p = te(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
					this.source = null != s ? s : null == p ? void 0 : null === (i = p[0]) || void 0 === i ? void 0 : i.source, this.positions = null != a ? a : null == p ? void 0 : p.map(e => e.start), this.locations = a && s ? a.map(e => H(s, e)) : null == p ? void 0 : p.map(e => H(e.source, e.start));
					const f = "object" == typeof(d = null == u ? void 0 : u.extensions) && null !== d ? null == u ? void 0 : u.extensions : void 0;
					var d;
					this.extensions = null !== (r = null != l ? l : f) && void 0 !== r ? r : Object.create(null), Object.defineProperties(this, {
						message: {
							writable: !0,
							enumerable: !0
						},
						name: {
							enumerable: !1
						},
						nodes: {
							enumerable: !1
						},
						source: {
							enumerable: !1
						},
						positions: {
							enumerable: !1
						},
						originalError: {
							enumerable: !1
						}
					}), null != u && u.stack ? Object.defineProperty(this, "stack", {
						value: u.stack,
						writable: !0,
						configurable: !0
					}) : Error.captureStackTrace ? Error.captureStackTrace(this, GraphQLError) : Object.defineProperty(this, "stack", {
						value: Error().stack,
						writable: !0,
						configurable: !0
					})
				}
				get[Symbol.toStringTag]() {
					return "GraphQLError"
				}
				toString() {
					let e = this.message;
					if (this.nodes)
						for (const n of this.nodes) n.loc && (e += "\n\n" + Z((t = n.loc).source, H(t.source, t.start)));
					else if (this.source && this.locations)
						for (const n of this.locations) e += "\n\n" + Z(this.source, n);
					var t;
					return e
				}
				toJSON() {
					const e = {
						message: this.message
					};
					return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
				}
			}

			function te(e) {
				return void 0 === e || 0 === e.length ? void 0 : e
			}

			function ne(e, t, n) {
				return new GraphQLError(`Syntax Error: ${n}`, void 0, e, [t])
			}
			let ie;
			var re;
			let oe;
			var se;
			(re = ie || (ie = {})).QUERY = "QUERY", re.MUTATION = "MUTATION", re.SUBSCRIPTION = "SUBSCRIPTION", re.FIELD = "FIELD", re.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", re.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", re.INLINE_FRAGMENT = "INLINE_FRAGMENT", re.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", re.SCHEMA = "SCHEMA", re.SCALAR = "SCALAR", re.OBJECT = "OBJECT", re.FIELD_DEFINITION = "FIELD_DEFINITION", re.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", re.INTERFACE = "INTERFACE", re.UNION = "UNION", re.ENUM = "ENUM", re.ENUM_VALUE = "ENUM_VALUE", re.INPUT_OBJECT = "INPUT_OBJECT", re.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", (se = oe || (oe = {})).SOF = "<SOF>", se.EOF = "<EOF>", se.BANG = "!", se.DOLLAR = "$", se.AMP = "&", se.PAREN_L = "(", se.PAREN_R = ")", se.SPREAD = "...", se.COLON = ":", se.EQUALS = "=", se.AT = "@", se.BRACKET_L = "[", se.BRACKET_R = "]", se.BRACE_L = "{", se.PIPE = "|", se.BRACE_R = "}", se.NAME = "Name", se.INT = "Int", se.FLOAT = "Float", se.STRING = "String", se.BLOCK_STRING = "BlockString", se.COMMENT = "Comment";
			class ae {
				constructor(e) {
					const t = new T(oe.SOF, 0, 0, 0, 0);
					this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
				}
				get[Symbol.toStringTag]() {
					return "Lexer"
				}
				advance() {
					return this.lastToken = this.token, this.token = this.lookahead()
				}
				lookahead() {
					let e = this.token;
					if (e.kind !== oe.EOF)
						do {
							if (e.next) e = e.next;
							else {
								const t = he(this, e.end);
								e.next = t, t.prev = e, e = t
							}
						} while (e.kind === oe.COMMENT);
					return e
				}
			}

			function ce(e) {
				return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
			}

			function ue(e, t) {
				return le(e.charCodeAt(t)) && pe(e.charCodeAt(t + 1))
			}

			function le(e) {
				return e >= 55296 && e <= 56319
			}

			function pe(e) {
				return e >= 56320 && e <= 57343
			}

			function fe(e, t) {
				const n = e.source.body.codePointAt(t);
				if (void 0 === n) return oe.EOF;
				if (n >= 32 && n <= 126) {
					const e = String.fromCodePoint(n);
					return '"' === e ? "'\"'" : `"${e}"`
				}
				return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
			}

			function de(e, t, n, i, r) {
				const o = e.line,
					s = 1 + n - e.lineStart;
				return new T(t, n, i, o, s, r)
			}

			function he(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t;
				for (; r < i;) {
					const t = n.charCodeAt(r);
					switch (t) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++r;
							continue;
						case 10:
							++r, ++e.line, e.lineStart = r;
							continue;
						case 13:
							10 === n.charCodeAt(r + 1) ? r += 2 : ++r, ++e.line, e.lineStart = r;
							continue;
						case 35:
							return ve(e, r);
						case 33:
							return de(e, oe.BANG, r, r + 1);
						case 36:
							return de(e, oe.DOLLAR, r, r + 1);
						case 38:
							return de(e, oe.AMP, r, r + 1);
						case 40:
							return de(e, oe.PAREN_L, r, r + 1);
						case 41:
							return de(e, oe.PAREN_R, r, r + 1);
						case 46:
							if (46 === n.charCodeAt(r + 1) && 46 === n.charCodeAt(r + 2)) return de(e, oe.SPREAD, r, r + 3);
							break;
						case 58:
							return de(e, oe.COLON, r, r + 1);
						case 61:
							return de(e, oe.EQUALS, r, r + 1);
						case 64:
							return de(e, oe.AT, r, r + 1);
						case 91:
							return de(e, oe.BRACKET_L, r, r + 1);
						case 93:
							return de(e, oe.BRACKET_R, r, r + 1);
						case 123:
							return de(e, oe.BRACE_L, r, r + 1);
						case 124:
							return de(e, oe.PIPE, r, r + 1);
						case 125:
							return de(e, oe.BRACE_R, r, r + 1);
						case 34:
							return 34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2) ? Oe(e, r) : Ee(e, r)
					}
					if (R(t) || 45 === t) return me(e, r, t);
					if (P(t)) return xe(e, r);
					throw ne(e.source, r, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : ce(t) || ue(n, r) ? `Unexpected character: ${fe(e,r)}.` : `Invalid character: ${fe(e,r)}.`)
				}
				return de(e, oe.EOF, i, i)
			}

			function ve(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t + 1;
				for (; r < i;) {
					const e = n.charCodeAt(r);
					if (10 === e || 13 === e) break;
					if (ce(e)) ++r;
					else {
						if (!ue(n, r)) break;
						r += 2
					}
				}
				return de(e, oe.COMMENT, t, r, n.slice(t + 1, r))
			}

			function me(e, t, n) {
				const i = e.source.body;
				let r = t,
					o = n,
					s = !1;
				if (45 === o && (o = i.charCodeAt(++r)), 48 === o) {
					if (R(o = i.charCodeAt(++r))) throw ne(e.source, r, `Invalid number, unexpected digit after 0: ${fe(e,r)}.`)
				} else r = ye(e, r, o), o = i.charCodeAt(r);
				if (46 === o && (s = !0, o = i.charCodeAt(++r), r = ye(e, r, o), o = i.charCodeAt(r)), 69 !== o && 101 !== o || (s = !0, 43 !== (o = i.charCodeAt(++r)) && 45 !== o || (o = i.charCodeAt(++r)), r = ye(e, r, o), o = i.charCodeAt(r)), 46 === o || P(o)) throw ne(e.source, r, `Invalid number, expected digit but got: ${fe(e,r)}.`);
				return de(e, s ? oe.FLOAT : oe.INT, t, r, i.slice(t, r))
			}

			function ye(e, t, n) {
				if (!R(n)) throw ne(e.source, t, `Invalid number, expected digit but got: ${fe(e,t)}.`);
				const i = e.source.body;
				let r = t + 1;
				for (; R(i.charCodeAt(r));) ++r;
				return r
			}

			function Ee(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t + 1,
					o = r,
					s = "";
				for (; r < i;) {
					const i = n.charCodeAt(r);
					if (34 === i) return s += n.slice(o, r), de(e, oe.STRING, t, r + 1, s);
					if (92 !== i) {
						if (10 === i || 13 === i) break;
						if (ce(i)) ++r;
						else {
							if (!ue(n, r)) throw ne(e.source, r, `Invalid character within String: ${fe(e,r)}.`);
							r += 2
						}
					} else {
						s += n.slice(o, r);
						const t = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? ge(e, r) : _e(e, r) : be(e, r);
						s += t.value, o = r += t.size
					}
				}
				throw ne(e.source, r, "Unterminated string.")
			}

			function ge(e, t) {
				const n = e.source.body;
				let i = 0,
					r = 3;
				for (; r < 12;) {
					const e = n.charCodeAt(t + r++);
					if (125 === e) {
						if (r < 5 || !ce(i)) break;
						return {
							value: String.fromCodePoint(i),
							size: r
						}
					}
					if ((i = i << 4 | Te(e)) < 0) break
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)
			}

			function _e(e, t) {
				const n = e.source.body,
					i = Ne(n, t + 2);
				if (ce(i)) return {
					value: String.fromCodePoint(i),
					size: 6
				};
				if (le(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
					const e = Ne(n, t + 8);
					if (pe(e)) return {
						value: String.fromCodePoint(i, e),
						size: 12
					}
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
			}

			function Ne(e, t) {
				return Te(e.charCodeAt(t)) << 12 | Te(e.charCodeAt(t + 1)) << 8 | Te(e.charCodeAt(t + 2)) << 4 | Te(e.charCodeAt(t + 3))
			}

			function Te(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function be(e, t) {
				const n = e.source.body;
				switch (n.charCodeAt(t + 1)) {
					case 34:
						return {
							value: '"', size: 2
						};
					case 92:
						return {
							value: "\\", size: 2
						};
					case 47:
						return {
							value: "/", size: 2
						};
					case 98:
						return {
							value: "\b", size: 2
						};
					case 102:
						return {
							value: "\f", size: 2
						};
					case 110:
						return {
							value: "\n", size: 2
						};
					case 114:
						return {
							value: "\r", size: 2
						};
					case 116:
						return {
							value: "\t", size: 2
						}
				}
				throw ne(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
			}

			function Oe(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = e.lineStart,
					o = t + 3,
					s = o,
					a = "";
				const c = [];
				for (; o < i;) {
					const i = n.charCodeAt(o);
					if (34 === i && 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)) {
						a += n.slice(s, o), c.push(a);
						const i = de(e, oe.BLOCK_STRING, t, o + 3, j(c).join("\n"));
						return e.line += c.length - 1, e.lineStart = r, i
					}
					if (92 !== i || 34 !== n.charCodeAt(o + 1) || 34 !== n.charCodeAt(o + 2) || 34 !== n.charCodeAt(o + 3))
						if (10 !== i && 13 !== i)
							if (ce(i)) ++o;
							else {
								if (!ue(n, o)) throw ne(e.source, o, `Invalid character within String: ${fe(e,o)}.`);
								o += 2
							}
					else a += n.slice(s, o), c.push(a), 13 === i && 10 === n.charCodeAt(o + 1) ? o += 2 : ++o, a = "", s = o, r = o;
					else a += n.slice(s, o), s = o + 1, o += 4
				}
				throw ne(e.source, o, "Unterminated string.")
			}

			function xe(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t + 1;
				for (; r < i;) {
					if (!M(n.charCodeAt(r))) break;
					++r
				}
				return de(e, oe.NAME, t, r, n.slice(t, r))
			}
			const Ie = function(e, t) {
				return e instanceof t
			};
			class ke {
				constructor(e, t = "GraphQL request", n = {
					line: 1,
					column: 1
				}) {
					"string" == typeof e || m(!1, `Body must be a string. Received: ${g(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || m(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || m(!1, "column in locationOffset is 1-indexed and must be positive.")
				}
				get[Symbol.toStringTag]() {
					return "Source"
				}
			}
			class Ae {
				constructor(e, t) {
					const n = function(e) {
						return Ie(e, ke)
					}(e) ? e : new ke(e);
					this._lexer = new ae(n), this._options = t
				}
				parseName() {
					const e = this.expectToken(oe.NAME);
					return this.node(e, {
						kind: A.NAME,
						value: e.value
					})
				}
				parseDocument() {
					return this.node(this._lexer.token, {
						kind: A.DOCUMENT,
						definitions: this.many(oe.SOF, this.parseDefinition, oe.EOF)
					})
				}
				parseDefinition() {
					if (this.peek(oe.BRACE_L)) return this.parseOperationDefinition();
					const e = this.peekDescription(),
						t = e ? this._lexer.lookahead() : this._lexer.token;
					if (t.kind === oe.NAME) {
						switch (t.value) {
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
						if (e) throw ne(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
						switch (t.value) {
							case "query":
							case "mutation":
							case "subscription":
								return this.parseOperationDefinition();
							case "fragment":
								return this.parseFragmentDefinition();
							case "extend":
								return this.parseTypeSystemExtension()
						}
					}
					throw this.unexpected(t)
				}
				parseOperationDefinition() {
					const e = this._lexer.token;
					if (this.peek(oe.BRACE_L)) return this.node(e, {
						kind: A.OPERATION_DEFINITION,
						operation: I.QUERY,
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet()
					});
					const t = this.parseOperationType();
					let n;
					return this.peek(oe.NAME) && (n = this.parseName()), this.node(e, {
						kind: A.OPERATION_DEFINITION,
						operation: t,
						name: n,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseOperationType() {
					const e = this.expectToken(oe.NAME);
					switch (e.value) {
						case "query":
							return I.QUERY;
						case "mutation":
							return I.MUTATION;
						case "subscription":
							return I.SUBSCRIPTION
					}
					throw this.unexpected(e)
				}
				parseVariableDefinitions() {
					return this.optionalMany(oe.PAREN_L, this.parseVariableDefinition, oe.PAREN_R)
				}
				parseVariableDefinition() {
					return this.node(this._lexer.token, {
						kind: A.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(oe.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(oe.EQUALS) ? this.parseConstValueLiteral() : void 0,
						directives: this.parseConstDirectives()
					})
				}
				parseVariable() {
					const e = this._lexer.token;
					return this.expectToken(oe.DOLLAR), this.node(e, {
						kind: A.VARIABLE,
						name: this.parseName()
					})
				}
				parseSelectionSet() {
					return this.node(this._lexer.token, {
						kind: A.SELECTION_SET,
						selections: this.many(oe.BRACE_L, this.parseSelection, oe.BRACE_R)
					})
				}
				parseSelection() {
					return this.peek(oe.SPREAD) ? this.parseFragment() : this.parseField()
				}
				parseField() {
					const e = this._lexer.token,
						t = this.parseName();
					let n, i;
					return this.expectOptionalToken(oe.COLON) ? (n = t, i = this.parseName()) : i = t, this.node(e, {
						kind: A.FIELD,
						alias: n,
						name: i,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(oe.BRACE_L) ? this.parseSelectionSet() : void 0
					})
				}
				parseArguments(e) {
					const t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(oe.PAREN_L, t, oe.PAREN_R)
				}
				parseArgument(e = !1) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(oe.COLON), this.node(t, {
						kind: A.ARGUMENT,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseConstArgument() {
					return this.parseArgument(!0)
				}
				parseFragment() {
					const e = this._lexer.token;
					this.expectToken(oe.SPREAD);
					const t = this.expectOptionalKeyword("on");
					return !t && this.peek(oe.NAME) ? this.node(e, {
						kind: A.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1)
					}) : this.node(e, {
						kind: A.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseFragmentDefinition() {
					var e;
					const t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacyFragmentVariables) ? this.node(t, {
						kind: A.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					}) : this.node(t, {
						kind: A.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseFragmentName() {
					if ("on" === this._lexer.token.value) throw this.unexpected();
					return this.parseName()
				}
				parseValueLiteral(e) {
					const t = this._lexer.token;
					switch (t.kind) {
						case oe.BRACKET_L:
							return this.parseList(e);
						case oe.BRACE_L:
							return this.parseObject(e);
						case oe.INT:
							return this._lexer.advance(), this.node(t, {
								kind: A.INT,
								value: t.value
							});
						case oe.FLOAT:
							return this._lexer.advance(), this.node(t, {
								kind: A.FLOAT,
								value: t.value
							});
						case oe.STRING:
						case oe.BLOCK_STRING:
							return this.parseStringLiteral();
						case oe.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return this.node(t, {
										kind: A.BOOLEAN,
										value: !0
									});
								case "false":
									return this.node(t, {
										kind: A.BOOLEAN,
										value: !1
									});
								case "null":
									return this.node(t, {
										kind: A.NULL
									});
								default:
									return this.node(t, {
										kind: A.ENUM,
										value: t.value
									})
							}
							case oe.DOLLAR:
								if (e) {
									if (this.expectToken(oe.DOLLAR), this._lexer.token.kind === oe.NAME) {
										const e = this._lexer.token.value;
										throw ne(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
									}
									throw this.unexpected(t)
								}
								return this.parseVariable();
							default:
								throw this.unexpected()
					}
				}
				parseConstValueLiteral() {
					return this.parseValueLiteral(!0)
				}
				parseStringLiteral() {
					const e = this._lexer.token;
					return this._lexer.advance(), this.node(e, {
						kind: A.STRING,
						value: e.value,
						block: e.kind === oe.BLOCK_STRING
					})
				}
				parseList(e) {
					return this.node(this._lexer.token, {
						kind: A.LIST,
						values: this.any(oe.BRACKET_L, () => this.parseValueLiteral(e), oe.BRACKET_R)
					})
				}
				parseObject(e) {
					return this.node(this._lexer.token, {
						kind: A.OBJECT,
						fields: this.any(oe.BRACE_L, () => this.parseObjectField(e), oe.BRACE_R)
					})
				}
				parseObjectField(e) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(oe.COLON), this.node(t, {
						kind: A.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseDirectives(e) {
					const t = [];
					for (; this.peek(oe.AT);) t.push(this.parseDirective(e));
					return t
				}
				parseConstDirectives() {
					return this.parseDirectives(!0)
				}
				parseDirective(e) {
					const t = this._lexer.token;
					return this.expectToken(oe.AT), this.node(t, {
						kind: A.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e)
					})
				}
				parseTypeReference() {
					const e = this._lexer.token;
					let t;
					if (this.expectOptionalToken(oe.BRACKET_L)) {
						const n = this.parseTypeReference();
						this.expectToken(oe.BRACKET_R), t = this.node(e, {
							kind: A.LIST_TYPE,
							type: n
						})
					} else t = this.parseNamedType();
					return this.expectOptionalToken(oe.BANG) ? this.node(e, {
						kind: A.NON_NULL_TYPE,
						type: t
					}) : t
				}
				parseNamedType() {
					return this.node(this._lexer.token, {
						kind: A.NAMED_TYPE,
						name: this.parseName()
					})
				}
				peekDescription() {
					return this.peek(oe.STRING) || this.peek(oe.BLOCK_STRING)
				}
				parseDescription() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}
				parseSchemaDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					const n = this.parseConstDirectives(),
						i = this.many(oe.BRACE_L, this.parseOperationTypeDefinition, oe.BRACE_R);
					return this.node(e, {
						kind: A.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: i
					})
				}
				parseOperationTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(oe.COLON);
					const n = this.parseNamedType();
					return this.node(e, {
						kind: A.OPERATION_TYPE_DEFINITION,
						operation: t,
						type: n
					})
				}
				parseScalarTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("scalar");
					const n = this.parseName(),
						i = this.parseConstDirectives();
					return this.node(e, {
						kind: A.SCALAR_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i
					})
				}
				parseObjectTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("type");
					const n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseConstDirectives(),
						o = this.parseFieldsDefinition();
					return this.node(e, {
						kind: A.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: o
					})
				}
				parseImplementsInterfaces() {
					return this.expectOptionalKeyword("implements") ? this.delimitedMany(oe.AMP, this.parseNamedType) : []
				}
				parseFieldsDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseFieldDefinition, oe.BRACE_R)
				}
				parseFieldDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseArgumentDefs();
					this.expectToken(oe.COLON);
					const r = this.parseTypeReference(),
						o = this.parseConstDirectives();
					return this.node(e, {
						kind: A.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						type: r,
						directives: o
					})
				}
				parseArgumentDefs() {
					return this.optionalMany(oe.PAREN_L, this.parseInputValueDef, oe.PAREN_R)
				}
				parseInputValueDef() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(oe.COLON);
					const i = this.parseTypeReference();
					let r;
					this.expectOptionalToken(oe.EQUALS) && (r = this.parseConstValueLiteral());
					const o = this.parseConstDirectives();
					return this.node(e, {
						kind: A.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: i,
						defaultValue: r,
						directives: o
					})
				}
				parseInterfaceTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					const n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseConstDirectives(),
						o = this.parseFieldsDefinition();
					return this.node(e, {
						kind: A.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: o
					})
				}
				parseUnionTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("union");
					const n = this.parseName(),
						i = this.parseConstDirectives(),
						r = this.parseUnionMemberTypes();
					return this.node(e, {
						kind: A.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						types: r
					})
				}
				parseUnionMemberTypes() {
					return this.expectOptionalToken(oe.EQUALS) ? this.delimitedMany(oe.PIPE, this.parseNamedType) : []
				}
				parseEnumTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					const n = this.parseName(),
						i = this.parseConstDirectives(),
						r = this.parseEnumValuesDefinition();
					return this.node(e, {
						kind: A.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						values: r
					})
				}
				parseEnumValuesDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseEnumValueDefinition, oe.BRACE_R)
				}
				parseEnumValueDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseEnumValueName(),
						i = this.parseConstDirectives();
					return this.node(e, {
						kind: A.ENUM_VALUE_DEFINITION,
						description: t,
						name: n,
						directives: i
					})
				}
				parseEnumValueName() {
					if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw ne(this._lexer.source, this._lexer.token.start, `${we(this._lexer.token)} is reserved and cannot be used for an enum value.`);
					return this.parseName()
				}
				parseInputObjectTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("input");
					const n = this.parseName(),
						i = this.parseConstDirectives(),
						r = this.parseInputFieldsDefinition();
					return this.node(e, {
						kind: A.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						fields: r
					})
				}
				parseInputFieldsDefinition() {
					return this.optionalMany(oe.BRACE_L, this.parseInputValueDef, oe.BRACE_R)
				}
				parseTypeSystemExtension() {
					const e = this._lexer.lookahead();
					if (e.kind === oe.NAME) switch (e.value) {
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
				}
				parseSchemaExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("schema");
					const t = this.parseConstDirectives(),
						n = this.optionalMany(oe.BRACE_L, this.parseOperationTypeDefinition, oe.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return this.node(e, {
						kind: A.SCHEMA_EXTENSION,
						directives: t,
						operationTypes: n
					})
				}
				parseScalarTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("scalar");
					const t = this.parseName(),
						n = this.parseConstDirectives();
					if (0 === n.length) throw this.unexpected();
					return this.node(e, {
						kind: A.SCALAR_TYPE_EXTENSION,
						name: t,
						directives: n
					})
				}
				parseObjectTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("type");
					const t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						i = this.parseConstDirectives(),
						r = this.parseFieldsDefinition();
					if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
					return this.node(e, {
						kind: A.OBJECT_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: i,
						fields: r
					})
				}
				parseInterfaceTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("interface");
					const t = this.parseName(),
						n = this.parseImplementsInterfaces(),
						i = this.parseConstDirectives(),
						r = this.parseFieldsDefinition();
					if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
					return this.node(e, {
						kind: A.INTERFACE_TYPE_EXTENSION,
						name: t,
						interfaces: n,
						directives: i,
						fields: r
					})
				}
				parseUnionTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("union");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						i = this.parseUnionMemberTypes();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return this.node(e, {
						kind: A.UNION_TYPE_EXTENSION,
						name: t,
						directives: n,
						types: i
					})
				}
				parseEnumTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("enum");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						i = this.parseEnumValuesDefinition();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return this.node(e, {
						kind: A.ENUM_TYPE_EXTENSION,
						name: t,
						directives: n,
						values: i
					})
				}
				parseInputObjectTypeExtension() {
					const e = this._lexer.token;
					this.expectKeyword("extend"), this.expectKeyword("input");
					const t = this.parseName(),
						n = this.parseConstDirectives(),
						i = this.parseInputFieldsDefinition();
					if (0 === n.length && 0 === i.length) throw this.unexpected();
					return this.node(e, {
						kind: A.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: i
					})
				}
				parseDirectiveDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(oe.AT);
					const n = this.parseName(),
						i = this.parseArgumentDefs(),
						r = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					const o = this.parseDirectiveLocations();
					return this.node(e, {
						kind: A.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						repeatable: r,
						locations: o
					})
				}
				parseDirectiveLocations() {
					return this.delimitedMany(oe.PIPE, this.parseDirectiveLocation)
				}
				parseDirectiveLocation() {
					const e = this._lexer.token,
						t = this.parseName();
					if (Object.prototype.hasOwnProperty.call(ie, t.value)) return t;
					throw this.unexpected(e)
				}
				node(e, t) {
					var n;
					return !0 !== (null === (n = this._options) || void 0 === n ? void 0 : n.noLocation) && (t.loc = new N(e, this._lexer.lastToken, this._lexer.source)), t
				}
				peek(e) {
					return this._lexer.token.kind === e
				}
				expectToken(e) {
					const t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw ne(this._lexer.source, t.start, `Expected ${De(e)}, found ${we(t)}.`)
				}
				expectOptionalToken(e) {
					return this._lexer.token.kind === e && (this._lexer.advance(), !0)
				}
				expectKeyword(e) {
					const t = this._lexer.token;
					if (t.kind !== oe.NAME || t.value !== e) throw ne(this._lexer.source, t.start, `Expected "${e}", found ${we(t)}.`);
					this._lexer.advance()
				}
				expectOptionalKeyword(e) {
					const t = this._lexer.token;
					return t.kind === oe.NAME && t.value === e && (this._lexer.advance(), !0)
				}
				unexpected(e) {
					const t = null != e ? e : this._lexer.token;
					return ne(this._lexer.source, t.start, `Unexpected ${we(t)}.`)
				}
				any(e, t, n) {
					this.expectToken(e);
					const i = [];
					for (; !this.expectOptionalToken(n);) i.push(t.call(this));
					return i
				}
				optionalMany(e, t, n) {
					if (this.expectOptionalToken(e)) {
						const e = [];
						do {
							e.push(t.call(this))
						} while (!this.expectOptionalToken(n));
						return e
					}
					return []
				}
				many(e, t, n) {
					this.expectToken(e);
					const i = [];
					do {
						i.push(t.call(this))
					} while (!this.expectOptionalToken(n));
					return i
				}
				delimitedMany(e, t) {
					this.expectOptionalToken(e);
					const n = [];
					do {
						n.push(t.call(this))
					} while (this.expectOptionalToken(e));
					return n
				}
			}

			function we(e) {
				const t = e.value;
				return De(e.kind) + (null != t ? ` "${t}"` : "")
			}

			function De(e) {
				return function(e) {
					return e === oe.BANG || e === oe.DOLLAR || e === oe.AMP || e === oe.PAREN_L || e === oe.PAREN_R || e === oe.SPREAD || e === oe.COLON || e === oe.EQUALS || e === oe.AT || e === oe.BRACKET_L || e === oe.BRACKET_R || e === oe.BRACE_L || e === oe.PIPE || e === oe.BRACE_R
				}(e) ? `"${e}"` : e
			}

			function Se(e, t) {
				return t.tag = e, t
			}

			function Ce() {}

			function Le(e) {
				return function(t) {
					var n = e.length;
					let i = !1,
						r = !1,
						o = !1,
						s = 0;
					t(Se(0, [function(a) {
						if (a) i = !0;
						else if (r) o = !0;
						else {
							for (r = o = !0; o && !i;) s < n ? (a = e[s], s = s + 1 | 0, o = !1, t(Se(1, [a]))) : (i = !0, t(0));
							r = !1
						}
					}]))
				}
			}

			function Re() {}

			function Fe(e) {
				e(0)
			}

			function Pe(e) {
				return e(0)
			}

			function Me(e) {
				return function(t) {
					return function(n) {
						let i = Ce,
							r = !1,
							o = [],
							s = !1;
						t((function(t) {
							"number" == typeof t ? s || (s = !0, 0 === o.length && n(0)) : t.tag ? s || (r = !1, function(e) {
								function t(e) {
									"number" == typeof e ? 0 !== o.length && (e = 0 === (o = o.filter(a)).length, s && e ? n(0) : !r && e && (r = !0, i(0))) : e.tag ? 0 !== o.length && (n(Se(1, [e[0]])), c(0)) : (c = e = e[0], o = o.concat(e), e(0))
								}

								function a(e) {
									return e !== c
								}
								let c = Ce;
								1 === e.length ? e(t) : e.bind(null, t)
							}(e(t[0])), r || (r = !0, i(0))) : i = t[0]
						})), n(Se(0, [function(e) {
							e ? (s || (s = !0, i(e)), o.forEach((function(t) {
								return t(e)
							})), o = []) : (r || s ? r = !1 : (r = !0, i(0)), o.forEach(Pe))
						}]))
					}
				}
			}

			function je(e) {
				return e
			}

			function Be(e) {
				return function(t) {
					return function(n) {
						let i = !1;
						return t((function(t) {
							if ("number" == typeof t) i || (i = !0, n(t));
							else if (t.tag) i || (e(t[0]), n(t));
							else {
								var r = t[0];
								n(Se(0, [function(e) {
									if (!i) return e && (i = !0), r(e)
								}]))
							}
						}))
					}
				}
			}

			function Ue(e) {
				e(0)
			}

			function Ve(e) {
				return function(t) {
					return function(n) {
						let i = [],
							r = Ce;
						return t((function(t) {
							"number" == typeof t ? Le(i)(n) : t.tag ? (i.length >= e && 0 < e && i.shift(), i.push(t[0]), r(0)) : (t = t[0], 0 >= e ? (t(1), function(e) {
								let t = !1;
								e(Se(0, [function(n) {
									n ? t = !0 : t || e(0)
								}]))
							}(n)) : (r = t, t(0)))
						}))
					}
				}
			}

			function qe(e) {
				return function(t) {
					let n = Ce,
						i = !1;
					return t((function(t) {
						"number" == typeof t ? i = !0 : t.tag ? i || (e(t[0]), n(0)) : (n = t = t[0], t(0))
					})), {
						unsubscribe: function() {
							if (!i) return i = !0, n(1)
						}
					}
				}
			}

			function Ke() {}

			function Ge(e) {
				return function(t) {
					return function(n) {
						let i = Ce;
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? e(t[0]) ? n(t) : i(0) : (i = t[0], n(t))
						}))
					}
				}
			}

			function Ye(e) {
				return function(t) {
					let n = !1;
					t(Se(0, [function(i) {
						i ? n = !0 : n || (n = !0, t(Se(1, [e])), t(0))
					}]))
				}
			}

			function ze(e) {
				return function(t) {
					let n = Re,
						i = !1;
					n = e({
						next: function(e) {
							i || t(Se(1, [e]))
						},
						complete: function() {
							i || (i = !0, t(0))
						}
					}), t(Se(0, [function(e) {
						if (e && !i) return i = !0, n()
					}]))
				}
			}

			function $e(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							t = "number" == typeof t ? 0 : t.tag ? Se(1, [e(t[0])]) : Se(0, [t[0]]), n(t)
						}))
					}
				}
			}

			function Je(e) {
				return Me(je)(Le(e))
			}

			function Qe(e) {
				return function(t) {
					return function(n) {
						let i = !1;
						return t((function(t) {
							if ("number" == typeof t) {
								if (i) return;
								return i = !0, n(t), e()
							}
							if (t.tag) i || n(t);
							else {
								var r = t[0];
								n(Se(0, [function(t) {
									if (!i) return t ? (i = !0, r(t), e()) : r(t)
								}]))
							}
						}))
					}
				}
			}

			function Xe(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? n(t) : (n(t), e())
						}))
					}
				}
			}

			function We() {
				for (var e = arguments, t = arguments[0], n = 1, i = arguments.length; n < i; n++) t = e[n](t);
				return t
			}

			function He(e) {
				function t(e) {
					"number" == typeof e ? (n.forEach(Ue), n = []) : e.tag ? (r = !1, n.forEach((function(t) {
						t(e)
					}))) : i = e[0]
				}
				let n = [],
					i = Ce,
					r = !1;
				return function(o) {
					function s(e) {
						return e !== o
					}
					1 === (n = n.concat(o)).length && e(t), o(Se(0, [function(e) {
						if (e) {
							if (0 === (n = n.filter(s)).length) return i(1)
						} else r || (r = !0, i(e))
					}]))
				}
			}

			function Ze(e) {
				return function(t) {
					return function(n) {
						let i = !1,
							r = 0,
							o = Ce;
						t((function(t) {
							"number" == typeof t ? i || (i = !0, n(0)) : t.tag ? r < e && !i && (r = r + 1 | 0, n(t), !i && r >= e && (i = !0, n(0), o(1))) : (t = t[0], 0 >= e ? (i = !0, n(0), t(1)) : o = t)
						})), n(Se(0, [function(t) {
							if (!i) {
								if (t) return i = !0, o(1);
								if (r < e) return o(0)
							}
						}]))
					}
				}
			}

			function et(e) {
				return function(t) {
					return function(n) {
						function i(e) {
							"number" != typeof e && (e.tag ? (r = !0, o(1), n(0)) : (s = e = e[0], e(0)))
						}
						let r = !1,
							o = Ce,
							s = Ce;
						t((function(t) {
							"number" == typeof t ? r || (r = !0, s(1), n(0)) : t.tag ? r || n(t) : (o = t[0], e(i))
						})), n(Se(0, [function(e) {
							if (!r) return e ? (r = !0, o(1), s(1)) : o(0)
						}]))
					}
				}
			}

			function tt(e) {
				return new Promise((function(t) {
					Ve(1)(e)((function(e) {
						"number" != typeof e && (e.tag ? t(e[0]) : e[0](0))
					}))
				}))
			}

			function nt(e) {
				return "string" == typeof e ? new GraphQLError(e) : "object" == typeof e && e.message ? new GraphQLError(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e
			}
			"function" != typeof Symbol || (Symbol.observable || (Symbol.observable = Symbol("observable")));
			var it = function(e) {
				function t(t) {
					var n, i, r, o = t.networkError,
						s = t.response,
						a = (t.graphQLErrors || []).map(nt),
						c = (i = a, r = "", void 0 !== (n = o) ? r = "[Network] " + n.message : (void 0 !== i && i.forEach((function(e) {
							r += "[GraphQL] " + e.message + "\n"
						})), r.trim()));
					e.call(this, c), this.name = "CombinedError", this.message = c, this.graphQLErrors = a, this.networkError = o, this.response = s
				}
				return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.toString = function() {
					return this.message
				}, t
			}(Error);

			function rt(e, t) {
				e |= 0;
				for (var n = 0, i = 0 | t.length; n < i; n++) e = (e << 5) + e + t.charCodeAt(n);
				return e
			}

			function ot(e) {
				return rt(5381, e) >>> 0
			}
			var st = new Set,
				at = new WeakMap;

			function ct(e) {
				return st.clear(),
					function e(t) {
						if (null === t || st.has(t)) return "null";
						if ("object" != typeof t) return JSON.stringify(t) || "";
						if (t.toJSON) return e(t.toJSON());
						if (Array.isArray(t)) {
							for (var n = "[", i = 0, r = t.length; i < r; i++) {
								i > 0 && (n += ",");
								var o = e(t[i]);
								n += o.length > 0 ? o : "null"
							}
							return n + "]"
						}
						var s = Object.keys(t).sort();
						if (!s.length && t.constructor && t.constructor !== Object) {
							var a = at.get(t) || Math.random().toString(36).slice(2);
							return at.set(t, a), '{"__key":"' + a + '"}'
						}
						st.add(t);
						for (var c = "{", u = 0, l = s.length; u < l; u++) {
							var p = s[u],
								f = e(t[p]);
							f && (c.length > 1 && (c += ","), c += e(p) + ":" + f)
						}
						return st.delete(t), c + "}"
					}(e)
			}

			function ut(e) {
				var t = ("string" != typeof e ? e.loc && e.loc.source.body || K(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
				if ("string" != typeof e) {
					var n = "definitions" in e && dt(e);
					n && (t = "# " + n + "\n" + t), e.loc || (e.loc = {
						start: 0,
						end: t.length,
						source: {
							body: t,
							name: "gql",
							locationOffset: {
								line: 1,
								column: 1
							}
						}
					})
				}
				return t
			}
			var lt = new Map;

			function pt(e) {
				var t, n;
				return "string" == typeof e ? (t = ot(ut(e)), n = lt.get(t) || new Ae(e, {
					noLocation: !0
				}).parseDocument()) : (t = e.__key || ot(ut(e)), n = lt.get(t) || e), n.loc || ut(n), n.__key = t, lt.set(t, n), n
			}

			function ft(e, t) {
				t || (t = {});
				var n = pt(e);
				return {
					key: rt(n.__key, ct(t)) >>> 0,
					query: n,
					variables: t
				}
			}

			function dt(e) {
				for (var t = 0, n = e.definitions.length; t < n; t++) {
					var i = e.definitions[t];
					if (i.kind === A.OPERATION_DEFINITION && i.name) return i.name.value
				}
			}

			function ht() {
				return (ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}

			function vt(e, t, n) {
				if (!("data" in t) && !("errors" in t) || "path" in t) throw new Error("No Content");
				return {
					operation: e,
					data: t.data,
					error: Array.isArray(t.errors) ? new it({
						graphQLErrors: t.errors,
						response: n
					}) : void 0,
					extensions: "object" == typeof t.extensions && t.extensions || void 0,
					hasNext: !!t.hasNext
				}
			}

			function mt(e, t, n) {
				var i = ht({}, e);
				if (i.hasNext = !!t.hasNext, !("path" in t)) return "data" in t && (i.data = t.data), i;
				Array.isArray(t.errors) && (i.error = new it({
					graphQLErrors: i.error ? i.error.graphQLErrors.concat(t.errors) : t.errors,
					response: n
				}));
				for (var r, o = i.data = ht({}, i.data), s = 0; s < t.path.length;) o = o[r = t.path[s++]] = Array.isArray(o[r]) ? [].concat(o[r]) : ht({}, o[r]);
				return ht(o, t.data), i
			}

			function yt(e) {
				return "query" === e.kind && !!e.context.preferGetMethod
			}

			function Et(e) {
				return {
					query: K(e.query),
					operationName: dt(e.query),
					variables: e.variables || void 0,
					extensions: void 0
				}
			}

			function gt(e, t) {
				var n = yt(e),
					i = e.context.url;
				if (!n || !t) return i;
				var r = [];
				return t.operationName && r.push("operationName=" + encodeURIComponent(t.operationName)), t.query && r.push("query=" + encodeURIComponent(t.query.replace(/#[^\n\r]+/g, " ").trim())), t.variables && r.push("variables=" + encodeURIComponent(ct(t.variables))), t.extensions && r.push("extensions=" + encodeURIComponent(ct(t.extensions))), i + "?" + r.join("&")
			}

			function _t(e, t) {
				var n = yt(e),
					i = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
				return ht({}, i, {
					body: !n && t ? JSON.stringify(t) : void 0,
					method: n ? "GET" : "POST",
					headers: n ? i.headers : ht({}, {
						"content-type": "application/json"
					}, i.headers)
				})
			}
			var Nt = "undefined" != typeof Symbol ? Symbol.asyncIterator : null,
				Tt = "undefined" != typeof TextDecoder ? new TextDecoder : null,
				bt = /content-type:[^\r\n]*application\/json/i,
				Ot = /boundary="?([^=";]+)"?/i;

			function xt(e, t, n) {
				var i = "manual" === n.redirect ? 400 : 300,
					r = e.context.fetch;
				return ze((function(o) {
					var s = o.next,
						a = o.complete,
						c = "undefined" != typeof AbortController ? new AbortController : null;
					c && (n.signal = c.signal);
					var u, l = !1,
						p = !1;
					return Promise.resolve().then((function() {
							if (!l) return (r || fetch)(t, n)
						})).then((function(t) {
							if (t) return p = (u = t).status < 200 || u.status >= i,
								function(e, t, n) {
									var i = n.headers && n.headers.get("Content-Type") || "";
									if (!/multipart\/mixed/i.test(i)) return n.json().then((function(i) {
										e(vt(t, i, n))
									}));
									var r, o = "---",
										s = i.match(Ot);
									s && (o = "--" + s[1]);
									var a = function() {};
									if (Nt && n[Nt]) {
										var c = n[Nt]();
										r = c.next.bind(c)
									} else {
										if (!("body" in n && n.body)) throw new TypeError("Streaming requests unsupported");
										var u = n.body.getReader();
										a = u.cancel.bind(u), r = u.read.bind(u)
									}
									var l = "",
										p = !0,
										f = null,
										d = null;
									return r().then((function i(s) {
										if (!s.done) {
											var a = "Buffer" === (g = s.value).constructor.name ? g.toString() : Tt.decode(g),
												c = a.indexOf(o);
											for (c > -1 ? c += l.length : c = l.indexOf(o), l += a; c > -1;) {
												var u = l.slice(0, c),
													h = l.slice(c + o.length);
												if (p) p = !1;
												else {
													var v = u.indexOf("\r\n\r\n") + 4,
														m = u.slice(0, v),
														y = u.slice(v, u.lastIndexOf("\r\n")),
														E = void 0;
													if (bt.test(m)) try {
														E = JSON.parse(y), f = d = d ? mt(d, E, n) : vt(t, E, n)
													} catch (g) {}
													if ("--" === h.slice(0, 2) || E && !E.hasNext) {
														if (!d) return e(vt(t, {}, n));
														break
													}
												}
												c = (l = h).indexOf(o)
											}
										}
										var g;
										if (f && (e(f), f = null), !s.done && (!d || d.hasNext)) return r().then(i)
									})).finally(a)
								}(s, e, u)
						})).then(a).catch((function(t) {
							if ("AbortError" !== t.name) {
								var n = function(e, t, n) {
									return {
										operation: e,
										data: void 0,
										error: new it({
											networkError: t,
											response: n
										}),
										extensions: void 0
									}
								}(e, p ? new Error(u.statusText) : t, u);
								s(n), a()
							}
						})),
						function() {
							l = !0, c && c.abort()
						}
				}))
			}

			function It(e) {
				return Object.keys(function e(t, n) {
					if (Array.isArray(t))
						for (var i = 0; i < t.length; i++) e(t[i], n);
					else if ("object" == typeof t && null !== t)
						for (var r in t) "__typename" === r && "string" == typeof t[r] ? n[t[r]] = 0 : e(t[r], n);
					return n
				}(e, {}))
			}
			var kt = function(e) {
					if (e.selectionSet && !e.selectionSet.selections.some((function(e) {
							return e.kind === A.FIELD && "__typename" === e.name.value && !e.alias
						}))) return ht({}, e, {
						selectionSet: ht({}, e.selectionSet, {
							selections: e.selectionSet.selections.concat([{
								kind: A.FIELD,
								name: {
									kind: A.NAME,
									value: "__typename"
								}
							}])
						})
					})
				},
				At = new Map;

			function wt(e) {
				return e && "object" == typeof e ? Object.keys(e).reduce((function(t, n) {
					var i = e[n];
					return "__typename" === n ? Object.defineProperty(t, "__typename", {
						enumerable: !1,
						value: i
					}) : Array.isArray(i) ? t[n] = i.map(wt) : t[n] = i && "object" == typeof i && "__typename" in i ? wt(i) : i, t
				}), Array.isArray(e) ? [] : {}) : e
			}

			function Dt(e) {
				return e.toPromise = function() {
					return tt(Ze(1)(Ge((function(e) {
						return !e.stale && !e.hasNext
					}))(e)))
				}, e
			}

			function St(e, t, n) {
				return n || (n = t.context), {
					key: t.key,
					query: t.query,
					variables: t.variables,
					kind: e,
					context: n
				}
			}

			function Ct(e, t) {
				return St(e.kind, e, ht({}, e.context, {
					meta: ht({}, e.context.meta, t)
				}))
			}

			function Lt() {}

			function Rt(e) {
				var t = e.kind;
				return "mutation" !== t && "query" !== t
			}

			function Ft(e) {
				var t = e.forward,
					n = e.client;
				e.dispatchDebug;
				var i = new Map,
					r = Object.create(null);

				function o(e) {
					var t = St(e.kind, e);
					return t.query = function(e) {
						var t = pt(e),
							n = At.get(t.__key);
						return n || (n = S(t, {
							Field: kt,
							InlineFragment: kt
						}), Object.defineProperty(n, "__key", {
							value: t.__key,
							enumerable: !1
						}), At.set(t.__key, n)), n
					}(e.query), t
				}

				function s(e) {
					var t = e.context.requestPolicy;
					return "query" === e.kind && "network-only" !== t && ("cache-only" === t || i.has(e.key))
				}
				return function(e) {
					var a = He(e),
						c = $e((function(e) {
							var t = i.get(e.key),
								r = ht({}, t, {
									operation: Ct(e, {
										cacheOutcome: t ? "hit" : "miss"
									})
								});
							return "cache-and-network" === e.context.requestPolicy && (r.stale = !0, Pt(n, e)), r
						}))(Ge((function(e) {
							return !Rt(e) && s(e)
						}))(a)),
						u = Be((function(e) {
							var t = e.operation;
							if (t) {
								var o = It(e.data).concat(t.context.additionalTypenames || []);
								if ("mutation" === e.operation.kind) {
									for (var s = new Set, a = 0; a < o.length; a++) {
										var c = o[a],
											u = r[c] || (r[c] = new Set);
										u.forEach((function(e) {
											s.add(e)
										})), u.clear()
									}
									s.forEach((function(e) {
										i.has(e) && (t = i.get(e).operation, i.delete(e), Pt(n, t))
									}))
								} else if ("query" === t.kind && e.data) {
									i.set(t.key, e);
									for (var l = 0; l < o.length; l++) {
										var p = o[l];
										(r[p] || (r[p] = new Set)).add(t.key)
									}
								}
							}
						}))(t(Ge((function(e) {
							return "query" !== e.kind || "cache-only" !== e.context.requestPolicy
						}))($e((function(e) {
							return Ct(e, {
								cacheOutcome: "miss"
							})
						}))(Je([$e(o)(Ge((function(e) {
							return !Rt(e) && !s(e)
						}))(a)), Ge((function(e) {
							return Rt(e)
						}))(a)])))));
					return Je([c, u])
				}
			}

			function Pt(e, t) {
				return e.reexecuteOperation(St(t.kind, t, ht({}, t.context, {
					requestPolicy: "network-only"
				})))
			}

			function Mt(e) {
				var t = e.forward;
				e.dispatchDebug;
				var n = new Set;

				function i(e) {
					var t = e.key,
						i = e.kind;
					if ("teardown" === i) return n.delete(t), !0;
					if ("query" !== i && "subscription" !== i) return !0;
					var r = n.has(t);
					return n.add(t), !r
				}

				function r(e) {
					e.hasNext || n.delete(e.operation.key)
				}
				return function(e) {
					var n = Ge(i)(e);
					return Be(r)(t(n))
				}
			}

			function jt(e) {
				var t = e.forward;
				return e.dispatchDebug,
					function(e) {
						var n = He(e);
						return Je([Me((function(e) {
							var t = e.key,
								i = Ge((function(e) {
									return "teardown" === e.kind && e.key === t
								}))(n),
								r = Et(e),
								o = gt(e, r),
								s = _t(e, r);
							return Be((function(e) {
								e.data || e.error
							}))(et(i)(xt(e, o, s)))
						}))(Ge((function(e) {
							return "query" === e.kind || "mutation" === e.kind
						}))(n)), t(Ge((function(e) {
							return "query" !== e.kind && "mutation" !== e.kind
						}))(n))])
					}
			}

			function Bt(e) {
				return e.dispatchDebug,
					function(e) {
						return Ge((function() {
							return !1
						}))(Be((function(e) {
							e.kind
						}))(e))
					}
			}
			Bt({
				dispatchDebug: Lt
			});
			var Ut = [Mt, Ft, jt],
				Vt = function e(t) {
					var n = new Map,
						i = new Map,
						r = [],
						o = function() {
							let e = [],
								t = !1;
							return {
								source: function(t) {
									function n(e) {
										return e !== t
									}
									e = e.concat(t), t(Se(0, [function(t) {
										t && (e = e.filter(n))
									}]))
								},
								next: function(n) {
									t || e.forEach((function(e) {
										e(Se(1, [n]))
									}))
								},
								complete: function() {
									t || (t = !0, e.forEach(Fe))
								}
							}
						}(),
						s = o.source,
						a = o.next,
						c = !1;

					function u(e) {
						for (c = !0, e && a(e); e = r.shift();) a(e);
						c = !1
					}

					function l(e) {
						var t = Ge((function(t) {
							return t.operation.kind === e.kind && t.operation.key === e.key
						}))(d);
						return p.maskTypename && (t = $e((function(e) {
							return ht({}, e, {
								data: wt(e.data)
							})
						}))(t)), "mutation" === e.kind ? Ze(1)(Xe((function() {
							return u(e)
						}))(t)) : He(Qe((function() {
							n.delete(e.key), i.delete(e.key);
							for (var t = r.length - 1; t >= 0; t--) r[t].key === e.key && r.splice(t, 1);
							u(St("teardown", e, e.context))
						}))(Be((function(t) {
							n.set(e.key, t)
						}))(function(e) {
							return function(t) {
								return function(n) {
									function i(e) {
										a && ("number" == typeof e ? (a = !1, u ? n(e) : o || (o = !0, r(0))) : e.tag ? (n(e), c ? c = !1 : s(0)) : (s = e = e[0], c = !1, e(0)))
									}
									let r = Ce,
										o = !1,
										s = Ce,
										a = !1,
										c = !1,
										u = !1;
									t((function(t) {
										"number" == typeof t ? u || (u = !0, a || n(0)) : t.tag ? u || (a && (s(1), s = Ce), o ? o = !1 : (o = !0, r(0)), t = e(t[0]), a = !0, t(i)) : r = t[0]
									})), n(Se(0, [function(e) {
										if (e) {
											if (u || (u = !0, r(1)), a) return a = !1, s(1)
										} else u || o || (o = !0, r(0)), a && !c && (c = !0, s(0))
									}]))
								}
							}
						}((function(t) {
							return "query" !== e.kind || t.stale ? Ye(t) : Je([Ye(t), $e((function() {
								return ht({}, t, {
									stale: !0
								})
							}))(Ze(1)(Ge((function(t) {
								return "query" === t.kind && t.key === e.key && "cache-only" !== t.context.requestPolicy
							}))(s)))])
						}))(et(Ge((function(t) {
							return "teardown" === t.kind && t.key === e.key
						}))(s))(t)))))
					}
					var p = ht(this instanceof e ? this : Object.create(e.prototype), {
							url: t.url,
							fetchOptions: t.fetchOptions,
							fetch: t.fetch,
							suspense: !!t.suspense,
							requestPolicy: t.requestPolicy || "cache-first",
							preferGetMethod: !!t.preferGetMethod,
							maskTypename: !!t.maskTypename,
							operations$: s,
							reexecuteOperation: function(e) {
								("mutation" === e.kind || i.has(e.key)) && (r.push(e), c || Promise.resolve().then(u))
							},
							createOperationContext: function(e) {
								return e || (e = {}), ht({}, {
									url: p.url,
									fetchOptions: p.fetchOptions,
									fetch: p.fetch,
									preferGetMethod: p.preferGetMethod
								}, e, {
									suspense: e.suspense || !1 !== e.suspense && p.suspense,
									requestPolicy: e.requestPolicy || p.requestPolicy
								})
							},
							createRequestOperation: function(e, t, n) {
								return function(e) {
									for (var t = 0, n = e.definitions.length; t < n; t++) {
										var i = e.definitions[t];
										if (i.kind === A.OPERATION_DEFINITION) return i.operation
									}
								}(t.query), St(e, t, p.createOperationContext(n))
							},
							executeRequestOperation: function(e) {
								return "mutation" === e.kind ? l(e) : ze((function(t) {
									var r = i.get(e.key);
									r || i.set(e.key, r = l(e));
									var o = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
									return qe(t.next)(Qe(t.complete)(Xe((function() {
										var i = n.get(e.key);
										if ("subscription" === e.kind) return u(e);
										o && u(e), null != i && i === n.get(e.key) ? t.next(o ? ht({}, i, {
											stale: !0
										}) : i) : o || u(e)
									}))(r))).unsubscribe
								}))
							},
							executeQuery: function(e, t) {
								var n = p.createRequestOperation("query", e, t);
								return p.executeRequestOperation(n)
							},
							executeSubscription: function(e, t) {
								var n = p.createRequestOperation("subscription", e, t);
								return p.executeRequestOperation(n)
							},
							executeMutation: function(e, t) {
								var n = p.createRequestOperation("mutation", e, t);
								return p.executeRequestOperation(n)
							},
							query: function(e, t, n) {
								return n && "boolean" == typeof n.suspense || (n = ht({}, n, {
									suspense: !1
								})), Dt(p.executeQuery(ft(e, t), n))
							},
							readQuery: function(e, t, n) {
								var i = null;
								return qe((function(e) {
									i = e
								}))(p.query(e, t, n)).unsubscribe(), i
							},
							subscription: function(e, t, n) {
								return p.executeSubscription(ft(e, t), n)
							},
							mutation: function(e, t, n) {
								return Dt(p.executeMutation(ft(e, t), n))
							}
						}),
						f = Lt,
						d = He(function(e) {
							return function(t) {
								var n = t.client;
								return t.dispatchDebug, e.reduceRight((function(e, t) {
									return t({
										client: n,
										forward: e,
										dispatchDebug: function(e) {}
									})
								}), t.forward)
							}
						}(void 0 !== t.exchanges ? t.exchanges : Ut)({
							client: p,
							dispatchDebug: f,
							forward: Bt({
								dispatchDebug: f
							})
						})(s));
					return function(e) {
						qe(Ke)(e)
					}(d), p
				},
				qt = Vt({
					url: "/graphql"
				}),
				Kt = Object(i.createContext)(qt),
				Gt = Kt.Provider;

			function Yt() {
				return Object(i.useContext)(Kt)
			}

			function zt() {
				return (zt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			Kt.Consumer, Kt.displayName = "UrqlContext";
			var $t = {
				fetching: !1,
				stale: !1,
				error: void 0,
				data: void 0,
				extensions: void 0,
				operation: void 0
			};

			function Jt(e, t) {
				var n = zt({}, e, t, {
					fetching: !!t.fetching,
					stale: !!t.stale
				});
				return function(e, t) {
					if ("object" != typeof e || "object" != typeof t) return e !== t;
					for (var n in e)
						if (!(n in t)) return !0;
					for (var i in t)
						if (e[i] !== t[i]) return !0;
					return !1
				}(e, n) ? n : e
			}

			function Qt(e) {
				var t = Object(i.useRef)(!0),
					n = Yt(),
					r = Object(i.useState)($t),
					o = r[0],
					s = r[1],
					a = Object(i.useCallback)((function(i, r) {
						return s(zt({}, $t, {
							fetching: !0
						})), tt(n.executeMutation(ft(e, i), r || {})).then((function(e) {
							return t.current && s({
								fetching: !1,
								stale: !!e.stale,
								data: e.data,
								error: e.error,
								extensions: e.extensions,
								operation: e.operation
							}), e
						}))
					}), [n, e, s]);
				return Object(i.useEffect)((function() {
					return function() {
						t.current = !1
					}
				}), []), [o, a]
			}
			var Xt = !1;

			function Wt(e) {
				var t, n, r = Yt(),
					o = function(e) {
						if (!e._react) {
							var t = new Set,
								n = new Map;
							e.operations$ && qe((function(e) {
								"teardown" === e.kind && t.has(e.key) && (t.delete(e.key), n.delete(e.key))
							}))(e.operations$), e._react = {
								get: function(e) {
									return n.get(e)
								},
								set: function(e, i) {
									t.delete(e), n.set(e, i)
								},
								dispose: function(e) {
									t.add(e)
								}
							}
						}
						return e._react
					}(r),
					s = (t = r, n = e.context, t.suspense && (!n || !1 !== n.suspense)),
					a = function(e, t) {
						var n = Object(i.useRef)(void 0);
						return Object(i.useMemo)((function() {
							var i = ft(e, t);
							return void 0 !== n.current && n.current.key === i.key ? n.current : (n.current = i, i)
						}), [e, t])
					}(e.query, e.variables),
					c = Object(i.useMemo)((function() {
						if (e.pause) return null;
						var t = r.executeQuery(a, zt({}, {
							requestPolicy: e.requestPolicy
						}, e.context));
						return s ? Be((function(e) {
							o.set(a.key, e)
						}))(t) : t
					}), [o, r, a, s, e.pause, e.requestPolicy, e.context]),
					u = Object(i.useCallback)((function(e, t) {
						if (!e) return {
							fetching: !1
						};
						var n = o.get(a.key);
						if (n) {
							if (t && null != n && "then" in n) throw n
						} else {
							var i, r = qe((function(e) {
								n = e, i && i(n)
							}))(function(e) {
								return function(t) {
									return function(n) {
										let i = Ce,
											r = !1;
										return t((function(t) {
											"number" == typeof t ? r || (r = !0, n(0)) : t.tag ? r || (e(t[0]) ? n(t) : (r = !0, n(0), i(1))) : (i = t[0], n(t))
										}))
									}
								}
							}((function() {
								return t && !i || !n
							}))(e));
							if (null == n && t) {
								var s = new Promise((function(e) {
									i = e
								}));
								throw o.set(a.key, s), s
							}
							r.unsubscribe()
						}
						return n || {
							fetching: !0
						}
					}), [o, a]),
					l = [r, a, e.requestPolicy, e.context, e.pause],
					p = Object(i.useState)((function() {
						Xt = !0;
						try {
							return [c, Jt($t, u(c, s)), l]
						} finally {
							Xt = !1
						}
					})),
					f = p[0],
					d = p[1],
					h = f[1];
				return c !== f[0] && function(e, t) {
					for (var n = 0, i = t.length; n < i; n++)
						if (e[n] !== t[n]) return !0;
					return !1
				}(f[2], l) && d([c, h = Jt(f[1], u(c, s)), l]), Object(i.useEffect)((function() {
					var e = f[0],
						t = f[2][1],
						n = !1;

					function i(e) {
						n = !0, Xt || d((function(t) {
							var n = Jt(t[1], e);
							return t[1] !== n ? [t[0], n, t[2]] : t
						}))
					}
					if (e) {
						var r = qe(i)(Qe((function() {
							i({
								fetching: !1
							})
						}))(e));
						return n || i({
								fetching: !0
							}),
							function() {
								o.dispose(t.key), r.unsubscribe()
							}
					}
					i({
						fetching: !1
					})
				}), [o, f[0], f[2][1]]), [h, Object(i.useCallback)((function(t) {
					var n = zt({}, {
						requestPolicy: e.requestPolicy
					}, e.context, t);
					d((function(e) {
						return [s ? Be((function(e) {
							o.set(a.key, e)
						}))(r.executeQuery(a, n)) : r.executeQuery(a, n), e[1], l]
					}))
				}), [r, o, a, s, u, e.requestPolicy, e.context])]
			}
			var Ht = {
				claimfreenft: "49a8b3b2cde3",
				confirmeconpayment: "c292b130ce51",
				createeconpayment: "786cafb9a545",
				createstorefrontorder: "ff0103b3d612",
				getclaimednftdetails: "9b57bca81a8c",
				getfreenftclaimdrops: "d39e664921e0",
				generatewalletverificationmessage: "cd3aac87446c",
				getnftdetails: "185c9a2d55b4",
				getnftsbywalletaddress: "7e0bba436a39",
				subredditcategoriesquery: "3f71115a1d95",
				updateprofileimagefromnft: "97097eb25784"
			};
			const Zt = ({
				forward: e,
				dispatchDebug: t
			}) => t => {
				const n = He(t);
				return Je([We(n, Ge(e => "query" === e.kind || "mutation" === e.kind), Me(e => (function(e, t, n) {
					const i = We(n, Ge(e => "teardown" === e.kind && e.key === t.key)),
						r = Et(t),
						o = r.operationName ? r.operationName.toLowerCase() : "",
						s = function(e, t, n) {
							const i = e[t];
							if (i) {
								return n ? {
									id: i,
									variables: n
								} : {
									id: i
								}
							}
							return null
						}(e, o, r.variables);
					if (!s) throw new Error(`Error: Query ${r} does not exist in the defined query options`);
					const a = gt(t),
						c = v(h({}, _t(t)), {
							method: "POST",
							body: JSON.stringify(s)
						});
					return We(xt(t, a, c), Me(Ye), et(i))
				})(Ht, e, n))), We(n, Ge(e => "query" !== e.kind && "mutation" !== e.kind), e)])
			};
			const en = "urqlClient";

			function tn() {
				return function(e) {
					e._instances = e._instances || {};
					let t = e._instances[en];
					if (!t) {
						const n = [Mt, Ft];
						n.push(Zt), n.push(jt), t = new Vt({
							url: e.gql.host,
							fetchOptions: e.gql.fetchOptions,
							exchanges: n
						}), e._instances[en] = t
					}
					return t
				}(Object(o.b)())
			}
			const nn = ({
				children: e
			}) => {
				const t = tn();
				return r.a.createElement(Gt, {
					value: t
				}, e)
			};
			var rn = function() {
					return (rn = Object.assign || function(e) {
						for (var t, n = 1, i = arguments.length; n < i; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}).apply(this, arguments)
				},
				on = new Map,
				sn = new Map,
				an = !0,
				cn = !1;

			function un(e) {
				return e.replace(/[\s,]+/g, " ").trim()
			}

			function ln(e) {
				var t = new Set,
					n = [];
				return e.definitions.forEach((function(e) {
					if ("FragmentDefinition" === e.kind) {
						var i = e.name.value,
							r = un((s = e.loc).source.body.substring(s.start, s.end)),
							o = sn.get(i);
						o && !o.has(r) ? an && console.warn("Warning: fragment with name " + i + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || sn.set(i, o = new Set), o.add(r), t.has(r) || (t.add(r), n.push(e))
					} else n.push(e);
					var s
				})), rn(rn({}, e), {
					definitions: n
				})
			}

			function pn(e) {
				var t = un(e);
				if (!on.has(t)) {
					var n = Object(s.a)(e, {
						experimentalFragmentVariables: cn,
						allowLegacyFragmentVariables: cn
					});
					if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
					on.set(t, function(e) {
						var t = new Set(e.definitions);
						t.forEach((function(e) {
							e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
								var i = e[n];
								i && "object" == typeof i && t.add(i)
							}))
						}));
						var n = e.loc;
						return n && (delete n.startToken, delete n.endToken), e
					}(ln(n)))
				}
				return on.get(t)
			}

			function fn(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				"string" == typeof e && (e = [e]);
				var i = e[0];
				return t.forEach((function(t, n) {
					t && "Document" === t.kind ? i += t.loc.source.body : i += t, i += e[n + 1]
				})), pn(i)
			}
			var dn, hn = {
				gql: fn,
				resetCaches: function() {
					on.clear(), sn.clear()
				},
				disableFragmentWarnings: function() {
					an = !1
				},
				enableExperimentalFragmentVariables: function() {
					cn = !0
				},
				disableExperimentalFragmentVariables: function() {
					cn = !1
				}
			};
			(dn = fn || (fn = {})).gql = hn.gql, dn.resetCaches = hn.resetCaches, dn.disableFragmentWarnings = hn.disableFragmentWarnings, dn.enableExperimentalFragmentVariables = hn.enableExperimentalFragmentVariables, dn.disableExperimentalFragmentVariables = hn.disableExperimentalFragmentVariables, fn.default = fn
		},
		"./node_modules/@reddit/crypto/react/ui/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "d", (function() {
				return ri
			})), n.d(t, "e", (function() {
				return pi
			})), n.d(t, "f", (function() {
				return Ci
			})), n.d(t, "g", (function() {
				return di
			})), n.d(t, "h", (function() {
				return hi
			})), n.d(t, "i", (function() {
				return yi
			})), n.d(t, "j", (function() {
				return gi
			})), n.d(t, "k", (function() {
				return Di
			})), n.d(t, "l", (function() {
				return Pi
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				s = n("./node_modules/@reddit/crypto/react/ui/index.es.js"),
				a = n("./node_modules/react-dom/index.js"),
				c = n.n(a),
				u = Object.defineProperty,
				l = Object.getOwnPropertySymbols,
				p = Object.prototype.hasOwnProperty,
				f = Object.prototype.propertyIsEnumerable,
				d = (e, t, n) => t in e ? u(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				h = (e, t) => {
					for (var n in t || (t = {})) p.call(t, n) && d(e, n, t[n]);
					if (l)
						for (var n of l(t)) f.call(t, n) && d(e, n, t[n]);
					return e
				},
				v = (e, t) => {
					var n = {};
					for (var i in e) p.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
					if (null != e && l)
						for (var i of l(e)) t.indexOf(i) < 0 && f.call(e, i) && (n[i] = e[i]);
					return n
				};
			const m = ({
					video: e,
					webp: t,
					img: n,
					className: i
				}) => r.a.createElement("picture", {
					className: i
				}, r.a.createElement("source", {
					srcSet: e,
					type: "video/mp4"
				}), r.a.createElement("source", {
					srcSet: t,
					type: "image/webp"
				}), r.a.createElement("img", {
					src: n
				})),
				y = {
					ProtectYourWallet: "https://www.redditstatic.com/crypto-assets/v2/protect-your-wallet-98e685dd66.webp",
					TransferToVault: "https://www.redditstatic.com/crypto-assets/v2/transfer-to-vault-f7c1844644.webp",
					WalletCreationComplete: "https://www.redditstatic.com/crypto-assets/v2/wallet-creation-complete-5f8358dae0.webp",
					WalletCreationInProgress: "https://www.redditstatic.com/crypto-assets/v2/wallet-creation-in-progress-19d4d0584a.webp",
					WalletCreationStart: "https://www.redditstatic.com/crypto-assets/v2/wallet-creation-start-06f9f1c819.webp"
				};
			var E = {
				exports: {}
			};
			! function(e) {
				! function() {
					var t = {}.hasOwnProperty;

					function n() {
						for (var e = [], i = 0; i < arguments.length; i++) {
							var r = arguments[i];
							if (r) {
								var o = typeof r;
								if ("string" === o || "number" === o) e.push(r);
								else if (Array.isArray(r)) {
									if (r.length) {
										var s = n.apply(null, r);
										s && e.push(s)
									}
								} else if ("object" === o)
									if (r.toString === Object.prototype.toString)
										for (var a in r) t.call(r, a) && r[a] && e.push(a);
									else e.push(r.toString())
							}
						}
						return e.join(" ")
					}
					e.exports ? (n.default = n, e.exports = n) : window.classNames = n
				}()
			}(E);
			var g = E.exports;
			var _ = {
				button: "_button_q04oj_42",
				loadingButton: "_loadingButton_q04oj_52",
				greyTheme: "_greyTheme_q04oj_57",
				whiteTheme: "_whiteTheme_q04oj_60",
				outlinedTheme: "_outlinedTheme_q04oj_64",
				whiteInvertedTheme: "_whiteInvertedTheme_q04oj_67",
				orangeTheme: "_orangeTheme_q04oj_82",
				largeOrangeTheme: "_largeOrangeTheme_q04oj_83",
				blueTheme: "_blueTheme_q04oj_97",
				blueInvertedTheme: "_blueInvertedTheme_q04oj_98",
				disabled: "_disabled_q04oj_112"
			};
			const N = ({
				className: e,
				theme: t = "white",
				disabled: n,
				onClick: i,
				children: o,
				loading: s
			}) => r.a.createElement("button", {
				disabled: n,
				onClick: n ? void 0 : i,
				className: g(_.button, e, T(t), {
					[_.loadingButton]: s,
					[_.disabled]: n
				})
			}, s ? r.a.createElement(gi, {
				className: _.loadingImage
			}) : r.a.createElement(r.a.Fragment, null, o));

			function T(e) {
				switch (e) {
					case "grey":
						return _.greyTheme;
					case "white":
						return _.whiteTheme;
					case "white_inverted":
						return _.whiteInvertedTheme;
					case "outlined":
						return _.outlinedTheme;
					case "orange":
						return _.orangeTheme;
					case "largeOrange":
						return _.largeOrangeTheme;
					case "blue":
						return _.blueTheme;
					case "blue_inverted":
						return _.blueInvertedTheme
				}
			}

			function b(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			var O = "(prefers-reduced-motion: reduce)",
				x = 1,
				I = 3,
				k = 4,
				A = 5,
				w = 6,
				D = 7,
				S = {
					CREATED: x,
					MOUNTED: 2,
					IDLE: I,
					MOVING: k,
					SCROLLING: A,
					DRAGGING: w,
					DESTROYED: D
				};

			function C(e) {
				e.length = 0
			}

			function L(e, t, n) {
				return Array.prototype.slice.call(e, t, n)
			}

			function R(e) {
				return e.bind.apply(e, [null].concat(L(arguments, 1)))
			}
			var F = setTimeout,
				P = function() {};

			function M(e) {
				return requestAnimationFrame(e)
			}

			function j(e, t) {
				return typeof t === e
			}

			function B(e) {
				return !G(e) && j("object", e)
			}
			var U = Array.isArray,
				V = R(j, "function"),
				q = R(j, "string"),
				K = R(j, "undefined");

			function G(e) {
				return null === e
			}

			function Y(e) {
				return e instanceof HTMLElement
			}

			function z(e) {
				return U(e) ? e : [e]
			}

			function $(e, t) {
				z(e).forEach(t)
			}

			function J(e, t) {
				return e.indexOf(t) > -1
			}

			function Q(e, t) {
				return e.push.apply(e, z(t)), e
			}

			function X(e, t, n) {
				e && $(t, (function(t) {
					t && e.classList[n ? "add" : "remove"](t)
				}))
			}

			function W(e, t) {
				X(e, q(t) ? t.split(" ") : t, !0)
			}

			function H(e, t) {
				$(t, e.appendChild.bind(e))
			}

			function Z(e, t) {
				$(e, (function(e) {
					var n = (t || e).parentNode;
					n && n.insertBefore(e, t)
				}))
			}

			function ee(e, t) {
				return Y(e) && (e.msMatchesSelector || e.matches).call(e, t)
			}

			function te(e, t) {
				var n = e ? L(e.children) : [];
				return t ? n.filter((function(e) {
					return ee(e, t)
				})) : n
			}

			function ne(e, t) {
				return t ? te(e, t)[0] : e.firstElementChild
			}
			var ie = Object.keys;

			function re(e, t, n) {
				if (e) {
					var i = ie(e);
					i = n ? i.reverse() : i;
					for (var r = 0; r < i.length; r++) {
						var o = i[r];
						if ("__proto__" !== o && !1 === t(e[o], o)) break
					}
				}
				return e
			}

			function oe(e) {
				return L(arguments, 1).forEach((function(t) {
					re(t, (function(n, i) {
						e[i] = t[i]
					}))
				})), e
			}

			function se(e) {
				return L(arguments, 1).forEach((function(t) {
					re(t, (function(t, n) {
						U(t) ? e[n] = t.slice() : B(t) ? e[n] = se({}, B(e[n]) ? e[n] : {}, t) : e[n] = t
					}))
				})), e
			}

			function ae(e, t) {
				z(t || ie(e)).forEach((function(t) {
					delete e[t]
				}))
			}

			function ce(e, t) {
				$(e, (function(e) {
					$(t, (function(t) {
						e && e.removeAttribute(t)
					}))
				}))
			}

			function ue(e, t, n) {
				B(t) ? re(t, (function(t, n) {
					ue(e, n, t)
				})) : $(e, (function(e) {
					G(n) || "" === n ? ce(e, t) : e.setAttribute(t, String(n))
				}))
			}

			function le(e, t, n) {
				var i = document.createElement(e);
				return t && (q(t) ? W(i, t) : ue(i, t)), n && H(n, i), i
			}

			function pe(e, t, n) {
				if (K(n)) return getComputedStyle(e)[t];
				G(n) || (e.style[t] = "" + n)
			}

			function fe(e, t) {
				pe(e, "display", t)
			}

			function de(e) {
				e.setActive && e.setActive() || e.focus({
					preventScroll: !0
				})
			}

			function he(e, t) {
				return e.getAttribute(t)
			}

			function ve(e, t) {
				return e && e.classList.contains(t)
			}

			function me(e) {
				return e.getBoundingClientRect()
			}

			function ye(e) {
				$(e, (function(e) {
					e && e.parentNode && e.parentNode.removeChild(e)
				}))
			}

			function Ee(e) {
				return ne((new DOMParser).parseFromString(e, "text/html").body)
			}

			function ge(e, t) {
				e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation())
			}

			function _e(e, t) {
				return e && e.querySelector(t)
			}

			function Ne(e, t) {
				return t ? L(e.querySelectorAll(t)) : []
			}

			function Te(e, t) {
				X(e, t, !1)
			}

			function be(e) {
				return e.timeStamp
			}

			function Oe(e) {
				return q(e) ? e : e ? e + "px" : ""
			}
			var xe = "splide",
				Ie = "data-" + xe;

			function ke(e, t) {
				if (!e) throw new Error("[" + xe + "] " + (t || ""))
			}
			var Ae = Math.min,
				we = Math.max,
				De = Math.floor,
				Se = Math.ceil,
				Ce = Math.abs;

			function Le(e, t, n) {
				return Ce(e - t) < n
			}

			function Re(e, t, n, i) {
				var r = Ae(t, n),
					o = we(t, n);
				return i ? r < e && e < o : r <= e && e <= o
			}

			function Fe(e, t, n) {
				var i = Ae(t, n),
					r = we(t, n);
				return Ae(we(i, e), r)
			}

			function Pe(e) {
				return +(e > 0) - +(e < 0)
			}

			function Me(e, t) {
				return $(t, (function(t) {
					e = e.replace("%s", "" + t)
				})), e
			}

			function je(e) {
				return e < 10 ? "0" + e : "" + e
			}
			var Be = {};

			function Ue() {
				var e = [];

				function t(e, t, n) {
					$(e, (function(e) {
						e && $(t, (function(t) {
							t.split(" ").forEach((function(t) {
								var i = t.split(".");
								n(e, i[0], i[1])
							}))
						}))
					}))
				}
				return {
					bind: function(n, i, r, o) {
						t(n, i, (function(t, n, i) {
							var s = "addEventListener" in t,
								a = s ? t.removeEventListener.bind(t, n, r, o) : t.removeListener.bind(t, r);
							s ? t.addEventListener(n, r, o) : t.addListener(r), e.push([t, n, i, r, a])
						}))
					},
					unbind: function(n, i, r) {
						t(n, i, (function(t, n, i) {
							e = e.filter((function(e) {
								return !!(e[0] !== t || e[1] !== n || e[2] !== i || r && e[3] !== r) || (e[4](), !1)
							}))
						}))
					},
					dispatch: function(e, t, n) {
						var i;
						return "function" == typeof CustomEvent ? i = new CustomEvent(t, {
							bubbles: !0,
							detail: n
						}) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, n), e.dispatchEvent(i), i
					},
					destroy: function() {
						e.forEach((function(e) {
							e[4]()
						})), C(e)
					}
				}
			}
			var Ve = "mounted",
				qe = "move",
				Ke = "moved",
				Ge = "shifted",
				Ye = "click",
				ze = "active",
				$e = "inactive",
				Je = "visible",
				Qe = "hidden",
				Xe = "slide:keydown",
				We = "refresh",
				He = "updated",
				Ze = "resize",
				et = "resized",
				tt = "drag",
				nt = "dragging",
				it = "dragged",
				rt = "scroll",
				ot = "scrolled",
				st = "destroy",
				at = "arrows:mounted",
				ct = "arrows:updated",
				ut = "pagination:mounted",
				lt = "pagination:updated",
				pt = "navigation:mounted",
				ft = "autoplay:play",
				dt = "autoplay:playing",
				ht = "autoplay:pause",
				vt = "lazyload:loaded";

			function mt(e) {
				var t = e ? e.event.bus : document.createDocumentFragment(),
					n = Ue();
				return e && e.event.on(st, n.destroy), oe(n, {
					bus: t,
					on: function(e, i) {
						n.bind(t, z(e).join(" "), (function(e) {
							i.apply(i, U(e.detail) ? e.detail : [])
						}))
					},
					off: R(n.unbind, t),
					emit: function(e) {
						n.dispatch(t, e, L(arguments, 1))
					}
				})
			}

			function yt(e, t, n, i) {
				var r, o, s = Date.now,
					a = 0,
					c = !0,
					u = 0;

				function l() {
					if (!c) {
						if (a = e ? Ae((s() - r) / e, 1) : 1, n && n(a), a >= 1 && (t(), r = s(), i && ++u >= i)) return p();
						M(l)
					}
				}

				function p() {
					c = !0
				}

				function f() {
					o && cancelAnimationFrame(o), a = 0, o = 0, c = !0
				}
				return {
					start: function(t) {
						!t && f(), r = s() - (t ? a * e : 0), c = !1, M(l)
					},
					rewind: function() {
						r = s(), a = 0, n && n(a)
					},
					pause: p,
					cancel: f,
					set: function(t) {
						e = t
					},
					isPaused: function() {
						return c
					}
				}
			}
			var Et = "ArrowLeft",
				gt = "ArrowRight",
				_t = "rtl",
				Nt = "ttb",
				Tt = {
					width: ["height"],
					left: ["top", "right"],
					right: ["bottom", "left"],
					x: ["y"],
					X: ["Y"],
					Y: ["X"],
					ArrowLeft: ["ArrowUp", gt],
					ArrowRight: ["ArrowDown", Et]
				};
			var bt = "role",
				Ot = "tabindex",
				xt = "aria-controls",
				It = "aria-current",
				kt = "aria-selected",
				At = "aria-label",
				wt = "aria-labelledby",
				Dt = "aria-hidden",
				St = "aria-orientation",
				Ct = "aria-roledescription",
				Lt = "aria-live",
				Rt = "aria-relevant",
				Ft = [bt, Ot, "disabled", xt, It, At, wt, Dt, St, Ct],
				Pt = xe,
				Mt = xe + "__track",
				jt = xe + "__list",
				Bt = xe + "__slide",
				Ut = Bt + "--clone",
				Vt = Bt + "__container",
				qt = xe + "__arrows",
				Kt = xe + "__arrow",
				Gt = Kt + "--prev",
				Yt = Kt + "--next",
				zt = xe + "__pagination",
				$t = zt + "__page",
				Jt = xe + "__progress" + "__bar",
				Qt = xe + "__toggle",
				Xt = xe + "__sr",
				Wt = "is-active",
				Ht = "is-prev",
				Zt = "is-next",
				en = "is-visible",
				tn = "is-loading",
				nn = "is-focus-in",
				rn = [Wt, en, Ht, Zt, tn, nn],
				on = {
					slide: Bt,
					clone: Ut,
					arrows: qt,
					arrow: Kt,
					prev: Gt,
					next: Yt,
					pagination: zt,
					page: $t,
					spinner: xe + "__spinner"
				};
			var sn = 5,
				an = 200,
				cn = "touchstart mousedown",
				un = "touchmove mousemove",
				ln = "touchend touchcancel mouseup";
			var pn = "slide",
				fn = "loop",
				dn = "fade";

			function hn(e, t, n, i) {
				var r, o = mt(e),
					s = o.on,
					a = o.emit,
					c = o.bind,
					u = e.Components,
					l = e.root,
					p = e.options,
					f = p.isNavigation,
					d = p.updateOnMove,
					h = p.i18n,
					v = p.pagination,
					m = p.slideFocus,
					y = u.Direction.resolve,
					E = he(i, "style"),
					g = he(i, At),
					_ = n > -1,
					N = ne(i, "." + Vt),
					T = Ne(i, p.focusableNodes || "");

				function b() {
					var r = e.splides.map((function(e) {
						var n = e.splide.Components.Slides.getAt(t);
						return n ? n.slide.id : ""
					})).join(" ");
					ue(i, At, Me(h.slideX, (_ ? n : t) + 1)), ue(i, xt, r), ue(i, bt, m ? "button" : ""), m && ce(i, Ct)
				}

				function O() {
					r || x()
				}

				function x() {
					if (!r) {
						var n = e.index;
						(o = I()) !== ve(i, Wt) && (X(i, Wt, o), ue(i, It, f && o || ""), a(o ? ze : $e, w)),
							function() {
								var t = function() {
										if (e.is(dn)) return I();
										var t = me(u.Elements.track),
											n = me(i),
											r = y("left"),
											o = y("right");
										return De(t[r]) <= Se(n[r]) && De(n[o]) <= Se(t[o])
									}(),
									n = !t && (!I() || _);
								e.state.is([k, A]) || ue(i, Dt, n || "");
								ue(T, Ot, n ? -1 : ""), m && ue(i, Ot, n ? -1 : 0);
								t !== ve(i, en) && (X(i, en, t), a(t ? Je : Qe, w));
								if (!t && document.activeElement === i) {
									var r = u.Slides.getAt(e.index);
									r && de(r.slide)
								}
							}(), X(i, Ht, t === n - 1), X(i, Zt, t === n + 1)
					}
					var o
				}

				function I() {
					var i = e.index;
					return i === t || p.cloneStatus && i === n
				}
				var w = {
					index: t,
					slideIndex: n,
					slide: i,
					container: N,
					isClone: _,
					mount: function() {
						_ || (i.id = l.id + "-slide" + je(t + 1), ue(i, bt, v ? "tabpanel" : "group"), ue(i, Ct, h.slide), ue(i, At, g || Me(h.slideLabel, [t + 1, e.length]))), c(i, "click", R(a, Ye, w)), c(i, "keydown", R(a, Xe, w)), s([Ke, Ge, ot], x), s(pt, b), d && s(qe, O)
					},
					destroy: function() {
						r = !0, o.destroy(), Te(i, rn), ce(i, Ft), ue(i, "style", E), ue(i, At, g || "")
					},
					update: x,
					style: function(e, t, n) {
						pe(n && N || i, e, t)
					},
					isWithin: function(n, i) {
						var r = Ce(n - t);
						return _ || !p.rewind && !e.is(fn) || (r = Ae(r, e.length - r)), r <= i
					}
				};
				return w
			}
			var vn = 2;
			var mn = "http://www.w3.org/2000/svg",
				yn = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
				En = 40;
			var gn = Ie + "-interval";
			var _n = 10,
				Nn = 600,
				Tn = .6,
				bn = 1.5,
				On = 800;
			var xn = {
				passive: !1,
				capture: !0
			};
			var In = {
				Spacebar: " ",
				Right: gt,
				Left: Et,
				Up: "ArrowUp",
				Down: "ArrowDown"
			};

			function kn(e) {
				return e = q(e) ? e : e.key, In[e] || e
			}
			var An = "keydown";
			var wn = Ie + "-lazy",
				Dn = wn + "-srcset",
				Sn = "[" + wn + "], [" + Dn + "]";
			var Cn = [" ", "Enter"];
			var Ln = Object.freeze({
					__proto__: null,
					Media: function(e, t, n) {
						var i = e.state,
							r = n.breakpoints || {},
							o = n.reducedMotion || {},
							s = Ue(),
							a = [];

						function c(e) {
							e && s.destroy()
						}

						function u(e, t) {
							var n = matchMedia(t);
							s.bind(n, "change", l), a.push([e, n])
						}

						function l() {
							var t = i.is(D),
								r = n.direction,
								o = a.reduce((function(e, t) {
									return se(e, t[1].matches ? t[0] : {})
								}), {});
							ae(n), p(o), n.destroy ? e.destroy("completely" === n.destroy) : t ? (c(!0), e.mount()) : r !== n.direction && e.refresh()
						}

						function p(t, r) {
							se(n, t), r && se(Object.getPrototypeOf(n), t), i.is(x) || e.emit(He, n)
						}
						return {
							setup: function() {
								var e = "min" === n.mediaQuery;
								ie(r).sort((function(t, n) {
									return e ? +t - +n : +n - +t
								})).forEach((function(t) {
									u(r[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)")
								})), u(o, O), l()
							},
							destroy: c,
							reduce: function(e) {
								matchMedia(O).matches && (e ? se(n, o) : ae(n, ie(o)))
							},
							set: p
						}
					},
					Direction: function(e, t, n) {
						return {
							resolve: function(e, t, i) {
								var r = (i = i || n.direction) !== _t || t ? i === Nt ? 0 : -1 : 1;
								return Tt[e] && Tt[e][r] || e.replace(/width|left|right/i, (function(e, t) {
									var n = Tt[e.toLowerCase()][r] || e;
									return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n
								}))
							},
							orient: function(e) {
								return e * (n.direction === _t ? 1 : -1)
							}
						}
					},
					Elements: function(e, t, n) {
						var i, r, o, s = mt(e),
							a = s.on,
							c = s.bind,
							u = e.root,
							l = n.i18n,
							p = {},
							f = [],
							d = [],
							h = [];

						function v() {
							i = E("." + Mt), r = ne(i, "." + jt), ke(i && r, "A track/list element is missing."), Q(f, te(r, "." + Bt + ":not(." + Ut + ")")), re({
									arrows: qt,
									pagination: zt,
									prev: Gt,
									next: Yt,
									bar: Jt,
									toggle: Qt
								}, (function(e, t) {
									p[t] = E("." + e)
								})), oe(p, {
									root: u,
									track: i,
									list: r,
									slides: f
								}),
								function() {
									var e = u.id || (o = xe, "" + o + je(Be[o] = (Be[o] || 0) + 1)),
										t = n.role;
									var o;
									u.id = e, i.id = i.id || e + "-track", r.id = r.id || e + "-list", !he(u, bt) && "SECTION" !== u.tagName && t && ue(u, bt, t);
									ue(u, Ct, l.carousel), ue(r, bt, "presentation")
								}(), y()
						}

						function m(e) {
							var t = Ft.concat("style");
							C(f), Te(u, d), Te(i, h), ce([i, r], t), ce(u, e ? t : ["style", Ct])
						}

						function y() {
							Te(u, d), Te(i, h), d = g(Pt), h = g(Mt), W(u, d), W(i, h), ue(u, At, n.label), ue(u, wt, n.labelledby)
						}

						function E(e) {
							var t = _e(u, e);
							return t && function(e, t) {
								if (V(e.closest)) return e.closest(t);
								for (var n = e; n && 1 === n.nodeType && !ee(n, t);) n = n.parentElement;
								return n
							}(t, "." + Pt) === u ? t : void 0
						}

						function g(e) {
							return [e + "--" + n.type, e + "--" + n.direction, n.drag && e + "--draggable", n.isNavigation && e + "--nav", e === Pt && Wt]
						}
						return oe(p, {
							setup: v,
							mount: function() {
								a(We, m), a(We, v), a(He, y), c(document, cn + " keydown", (function(e) {
									o = "keydown" === e.type
								}), {
									capture: !0
								}), c(u, "focusin", (function() {
									X(u, nn, !!o)
								}))
							},
							destroy: m
						})
					},
					Slides: function(e, t, n) {
						var i = mt(e),
							r = i.on,
							o = i.emit,
							s = i.bind,
							a = t.Elements,
							c = a.slides,
							u = a.list,
							l = [];

						function p() {
							c.forEach((function(e, t) {
								d(e, t, -1)
							}))
						}

						function f() {
							v((function(e) {
								e.destroy()
							})), C(l)
						}

						function d(t, n, i) {
							var r = hn(e, n, i, t);
							r.mount(), l.push(r)
						}

						function h(e) {
							return e ? m((function(e) {
								return !e.isClone
							})) : l
						}

						function v(e, t) {
							h(t).forEach(e)
						}

						function m(e) {
							return l.filter(V(e) ? e : function(t) {
								return q(e) ? ee(t.slide, e) : J(z(e), t.index)
							})
						}
						return {
							mount: function() {
								p(), r(We, f), r(We, p), r([Ve, We], (function() {
									l.sort((function(e, t) {
										return e.index - t.index
									}))
								}))
							},
							destroy: f,
							update: function() {
								v((function(e) {
									e.update()
								}))
							},
							register: d,
							get: h,
							getIn: function(e) {
								var i = t.Controller,
									r = i.toIndex(e),
									o = i.hasFocus() ? 1 : n.perPage;
								return m((function(e) {
									return Re(e.index, r, r + o - 1)
								}))
							},
							getAt: function(e) {
								return m(e)[0]
							},
							add: function(e, t) {
								$(e, (function(e) {
									if (q(e) && (e = Ee(e)), Y(e)) {
										var i = c[t];
										i ? Z(e, i) : H(u, e), W(e, n.classes.slide), r = e, a = R(o, Ze), l = Ne(r, "img"), (p = l.length) ? l.forEach((function(e) {
											s(e, "load error", (function() {
												--p || a()
											}))
										})) : a()
									}
									var r, a, l, p
								})), o(We)
							},
							remove: function(e) {
								ye(m(e).map((function(e) {
									return e.slide
								}))), o(We)
							},
							forEach: v,
							filter: m,
							style: function(e, t, n) {
								v((function(i) {
									i.style(e, t, n)
								}))
							},
							getLength: function(e) {
								return e ? c.length : l.length
							},
							isEnough: function() {
								return l.length > n.perPage
							}
						}
					},
					Layout: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = t.Slides,
							l = t.Direction.resolve,
							p = t.Elements,
							f = p.root,
							d = p.track,
							h = p.list,
							v = u.getAt,
							m = u.style;

						function y() {
							r = null, i = n.direction === Nt, pe(f, "maxWidth", Oe(n.width)), pe(d, l("paddingLeft"), g(!1)), pe(d, l("paddingRight"), g(!0)), E()
						}

						function E() {
							var e = me(f);
							r && r.width === e.width && r.height === e.height || (pe(d, "height", function() {
								var e = "";
								i && (ke(e = _(), "height or heightRatio is missing."), e = "calc(" + e + " - " + g(!1) + " - " + g(!0) + ")");
								return e
							}()), m(l("marginRight"), Oe(n.gap)), m("width", n.autoWidth ? null : Oe(n.fixedWidth) || (i ? "" : N())), m("height", Oe(n.fixedHeight) || (i ? n.autoHeight ? null : N() : _()), !0), r = e, c(et))
						}

						function g(e) {
							var t = n.padding,
								i = l(e ? "right" : "left");
							return t && Oe(t[i] || (B(t) ? 0 : t)) || "0px"
						}

						function _() {
							return Oe(n.height || me(h).width * n.heightRatio)
						}

						function N() {
							var e = Oe(n.gap);
							return "calc((100%" + (e && " + " + e) + ")/" + (n.perPage || 1) + (e && " - " + e) + ")"
						}

						function T(e, t) {
							var n = v(e);
							if (n) {
								var i = me(n.slide)[l("right")],
									r = me(h)[l("left")];
								return Ce(i - r) + (t ? 0 : b())
							}
							return 0
						}

						function b() {
							var e = v(0);
							return e && parseFloat(pe(e.slide, l("marginRight"))) || 0
						}
						return {
							mount: function() {
								var e, t, n;
								y(), a(window, "resize load", (e = R(c, Ze), function() {
									n || (n = yt(t || 0, (function() {
										e(), n = null
									}), null, 1)).start()
								})), s([He, We], y), s(Ze, E)
							},
							listSize: function() {
								return me(h)[l("width")]
							},
							slideSize: function(e, t) {
								var n = v(e || 0);
								return n ? me(n.slide)[l("width")] + (t ? 0 : b()) : 0
							},
							sliderSize: function() {
								return T(e.length - 1, !0) - T(-1, !0)
							},
							totalSize: T,
							getPadding: function(e) {
								return parseFloat(pe(d, l("padding" + (e ? "Right" : "Left")))) || 0
							}
						}
					},
					Clones: function(e, t, n) {
						var i, r = mt(e),
							o = r.on,
							s = r.emit,
							a = t.Elements,
							c = t.Slides,
							u = t.Direction.resolve,
							l = [];

						function p() {
							(i = h()) && (! function(t) {
								var i = c.get().slice(),
									r = i.length;
								if (r) {
									for (; i.length < t;) Q(i, i);
									Q(i.slice(-t), i.slice(0, t)).forEach((function(o, s) {
										var u = s < t,
											p = function(t, i) {
												var r = t.cloneNode(!0);
												return W(r, n.classes.clone), r.id = e.root.id + "-clone" + je(i + 1), r
											}(o.slide, s);
										u ? Z(p, i[0].slide) : H(a.list, p), Q(l, p), c.register(p, s - t + (u ? 0 : r), o.index)
									}))
								}
							}(i), s(Ze))
						}

						function f() {
							ye(l), C(l)
						}

						function d() {
							i < h() && s(We)
						}

						function h() {
							var i = n.clones;
							if (e.is(fn)) {
								if (!i) {
									var r = n[u("fixedWidth")] && t.Layout.slideSize(0);
									i = r && Se(me(a.track)[u("width")] / r) || n[u("autoWidth")] && e.length || n.perPage * vn
								}
							} else i = 0;
							return i
						}
						return {
							mount: function() {
								p(), o(We, f), o(We, p), o([He, Ze], d)
							},
							destroy: f
						}
					},
					Move: function(e, t, n) {
						var i, r = mt(e),
							o = r.on,
							s = r.emit,
							a = e.state.set,
							c = t.Layout,
							u = c.slideSize,
							l = c.getPadding,
							p = c.totalSize,
							f = c.listSize,
							d = c.sliderSize,
							h = t.Direction,
							v = h.resolve,
							m = h.orient,
							y = t.Elements,
							E = y.list,
							g = y.track;

						function _() {
							t.Controller.isBusy() || (t.Scroll.cancel(), N(e.index), t.Slides.update())
						}

						function N(e) {
							T(x(e, !0))
						}

						function T(t, n) {
							if (!e.is(dn)) {
								var i = n ? t : function(t) {
									if (e.is(fn)) {
										var n = m(t - A()),
											i = D(!1, t) && n < 0,
											r = D(!0, t) && n > 0;
										(i || r) && (t = b(t, r))
									}
									return t
								}(t);
								pe(E, "transform", "translate" + v("X") + "(" + i + "px)"), t !== i && s(Ge)
							}
						}

						function b(e, t) {
							var n = e - w(t),
								i = d();
							return e -= m(i * (Se(Ce(n) / i) || 1)) * (t ? 1 : -1)
						}

						function O() {
							T(A()), i.cancel()
						}

						function x(t, i) {
							var r = m(p(t - 1) - function(e) {
								var t = n.focus;
								return "center" === t ? (f() - u(e, !0)) / 2 : +t * u(e) || 0
							}(t));
							return i ? function(t) {
								n.trimSpace && e.is(pn) && (t = Fe(t, 0, m(d() - f())));
								return t
							}(r) : r
						}

						function A() {
							var e = v("left");
							return me(E)[e] - me(g)[e] + m(l(!1))
						}

						function w(e) {
							return x(e ? t.Controller.getEnd() : 0, !!n.trimSpace)
						}

						function D(e, t) {
							t = K(t) ? A() : t;
							var n = !0 !== e && m(t) < m(w(!1)),
								i = !1 !== e && m(t) > m(w(!0));
							return n || i
						}
						return {
							mount: function() {
								i = t.Transition, o([Ve, et, He, We], _)
							},
							move: function(e, t, n, r) {
								var o, c, u = A();
								e !== t && (o = e > t, c = m(b(A(), o)), o ? c >= 0 : c <= E["scroll" + v("Width")] - me(g)[v("width")]) && (O(), T(b(u, e > t), !0)), a(k), s(qe, t, n, e), i.start(t, (function() {
									a(I), s(Ke, t, n, e), r && r()
								}))
							},
							jump: N,
							translate: T,
							shift: b,
							cancel: O,
							toIndex: function(e) {
								for (var n = t.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
									var s = n[o].index,
										a = Ce(x(s, !0) - e);
									if (!(a <= r)) break;
									r = a, i = s
								}
								return i
							},
							toPosition: x,
							getPosition: A,
							getLimit: w,
							exceededLimit: D,
							reposition: _
						}
					},
					Controller: function(e, t, n) {
						var i, r, o, s = mt(e).on,
							a = t.Move,
							c = a.getPosition,
							u = a.getLimit,
							l = a.toPosition,
							p = t.Slides,
							f = p.isEnough,
							d = p.getLength,
							h = e.is(fn),
							v = e.is(pn),
							m = R(N, !1),
							y = R(N, !0),
							E = n.start || 0,
							g = E;

						function _() {
							i = d(!0), r = n.perMove, o = n.perPage;
							var e = Fe(E, 0, i - 1);
							e !== E && (E = e, a.reposition())
						}

						function N(e, t) {
							var n = r || (D() ? 1 : o),
								i = T(E + n * (e ? -1 : 1), E, !(r || D()));
							return -1 === i && v && !Le(c(), u(!e), 1) ? e ? 0 : O() : t ? i : b(i)
						}

						function T(t, r, s) {
							if (f()) {
								var a = O(),
									u = function(t) {
										if (v && "move" === n.trimSpace && t !== E)
											for (var i = c(); i === l(t, !0) && Re(t, 0, e.length - 1, !n.rewind);) t < E ? --t : ++t;
										return t
									}(t);
								u !== t && (r = t, t = u, s = !1), t < 0 || t > a ? t = Re(0, t, r, !0) || Re(a, r, t, !0) ? x(I(t)) : h ? s ? t < 0 ? -(i % o || o) : i : t : n.rewind ? t < 0 ? a : 0 : -1 : s && t !== r && (t = x(I(r) + (t < r ? -1 : 1)))
							} else t = -1;
							return t
						}

						function b(e) {
							return h ? (e + i) % i || 0 : e
						}

						function O() {
							return we(i - (D() || h && r ? 1 : o), 0)
						}

						function x(e) {
							return Fe(D() ? e : o * e, 0, O())
						}

						function I(e) {
							return D() ? e : De((e >= O() ? i - 1 : e) / o)
						}

						function w(e) {
							e !== E && (g = E, E = e)
						}

						function D() {
							return !K(n.focus) || n.isNavigation
						}

						function S() {
							return e.state.is([k, A]) && !!n.waitForTransition
						}
						return {
							mount: function() {
								_(), s([He, We], _)
							},
							go: function(e, t, n) {
								if (!S()) {
									var i = function(e) {
											var t = E;
											if (q(e)) {
												var n = e.match(/([+\-<>])(\d+)?/) || [],
													i = n[1],
													r = n[2];
												"+" === i || "-" === i ? t = T(E + +("" + i + (+r || 1)), E) : ">" === i ? t = r ? x(+r) : m(!0) : "<" === i && (t = y(!0))
											} else t = h ? e : Fe(e, 0, O());
											return t
										}(e),
										r = b(i);
									r > -1 && (t || r !== E) && (w(r), a.move(i, r, g, n))
								}
							},
							scroll: function(e, n, i, r) {
								t.Scroll.scroll(e, n, i, (function() {
									w(b(a.toIndex(a.getPosition()))), r && r()
								}))
							},
							getNext: m,
							getPrev: y,
							getAdjacent: N,
							getEnd: O,
							setIndex: w,
							getIndex: function(e) {
								return e ? g : E
							},
							toIndex: x,
							toPage: I,
							toDest: function(e) {
								var t = a.toIndex(e);
								return v ? Fe(t, 0, O()) : t
							},
							hasFocus: D,
							isBusy: S
						}
					},
					Arrows: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = n.classes,
							l = n.i18n,
							p = t.Elements,
							f = t.Controller,
							d = p.arrows,
							h = p.track,
							v = d,
							m = p.prev,
							y = p.next,
							E = {};

						function g() {
							! function() {
								var e = n.arrows;
								!e || m && y || (v = d || le("div", u.arrows), m = b(!0), y = b(!1), i = !0, H(v, [m, y]), !d && Z(v, h));
								m && y && (oe(E, {
									prev: m,
									next: y
								}), fe(v, e ? "" : "none"), W(v, r = qt + "--" + n.direction), e && (s([Ke, We, ot], O), a(y, "click", R(T, ">")), a(m, "click", R(T, "<")), O(), ue([m, y], xt, h.id), c(at, m, y)))
							}(), s(He, _)
						}

						function _() {
							N(), g()
						}

						function N() {
							o.destroy(), Te(v, r), i ? (ye(d ? [m, y] : v), m = y = null) : ce([m, y], Ft)
						}

						function T(e) {
							f.go(e, !0)
						}

						function b(e) {
							return Ee('<button class="' + u.arrow + " " + (e ? u.prev : u.next) + '" type="button"><svg xmlns="' + mn + '" viewBox="0 0 ' + En + " " + En + '" width="' + En + '" height="' + En + '" focusable="false"><path d="' + (n.arrowPath || yn) + '" />')
						}

						function O() {
							var t = e.index,
								n = f.getPrev(),
								i = f.getNext(),
								r = n > -1 && t < n ? l.last : l.prev,
								o = i > -1 && t > i ? l.first : l.next;
							m.disabled = n < 0, y.disabled = i < 0, ue(m, At, r), ue(y, At, o), c(ct, m, y, n, i)
						}
						return {
							arrows: E,
							mount: g,
							destroy: N
						}
					},
					Autoplay: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.bind,
							c = o.emit,
							u = yt(n.interval, e.go.bind(e, ">"), (function(e) {
								var t = p.bar;
								t && pe(t, "width", 100 * e + "%"), c(dt, e)
							})),
							l = u.isPaused,
							p = t.Elements,
							f = t.Elements,
							d = f.root,
							h = f.toggle,
							v = n.autoplay,
							m = "pause" === v;

						function y() {
							l() && t.Slides.isEnough() && (u.start(!n.resetProgress), r = i = m = !1, _(), c(ft))
						}

						function E(e) {
							void 0 === e && (e = !0), m = !!e, _(), l() || (u.pause(), c(ht))
						}

						function g() {
							m || (i || r ? E(!1) : y())
						}

						function _() {
							h && (X(h, Wt, !m), ue(h, At, n.i18n[m ? "play" : "pause"]))
						}

						function N(e) {
							var i = t.Slides.getAt(e);
							u.set(i && +he(i.slide, gn) || n.interval)
						}
						return {
							mount: function() {
								v && (! function() {
									n.pauseOnHover && a(d, "mouseenter mouseleave", (function(e) {
										i = "mouseenter" === e.type, g()
									}));
									n.pauseOnFocus && a(d, "focusin focusout", (function(e) {
										r = "focusin" === e.type, g()
									}));
									h && a(h, "click", (function() {
										m ? y() : E(!0)
									}));
									s([qe, rt, We], u.rewind), s(qe, N)
								}(), h && ue(h, xt, p.track.id), m || y(), _())
							},
							destroy: u.cancel,
							play: y,
							pause: E,
							isPaused: l
						}
					},
					Cover: function(e, t, n) {
						var i = mt(e).on;

						function r(e) {
							t.Slides.forEach((function(t) {
								var n = ne(t.container || t.slide, "img");
								n && n.src && o(e, n, t)
							}))
						}

						function o(e, t, n) {
							n.style("background", e ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), fe(t, e ? "none" : "")
						}
						return {
							mount: function() {
								n.cover && (i(vt, R(o, !0)), i([Ve, He, We], R(r, !0)))
							},
							destroy: R(r, !1)
						}
					},
					Scroll: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.emit,
							c = e.state.set,
							u = t.Move,
							l = u.getPosition,
							p = u.getLimit,
							f = u.exceededLimit,
							d = u.translate,
							h = 1;

						function v(e, n, o, s, p) {
							var f = l();
							if (E(), o) {
								var d = t.Layout.sliderSize(),
									v = Pe(e) * d * De(Ce(e) / d) || 0;
								e = u.toPosition(t.Controller.toDest(e % d)) + v
							}
							var g = Le(f, e, 1);
							h = 1, n = g ? 0 : n || we(Ce(e - f) / bn, On), r = s, i = yt(n, m, R(y, f, e, p), 1), c(A), a(rt), i.start()
						}

						function m() {
							c(I), r && r(), a(ot)
						}

						function y(t, i, r, o) {
							var s, a, c = l(),
								u = (t + (i - t) * (s = o, (a = n.easingFunc) ? a(s) : 1 - Math.pow(1 - s, 4)) - c) * h;
							d(c + u), e.is(pn) && !r && f() && (h *= Tn, Ce(u) < _n && v(p(f(!0)), Nn, !1, void 0, !0))
						}

						function E() {
							i && i.cancel()
						}

						function g() {
							i && !i.isPaused() && (E(), m())
						}
						return {
							mount: function() {
								s(qe, E), s([He, We], g)
							},
							destroy: E,
							scroll: v,
							cancel: g
						}
					},
					Drag: function(e, t, n) {
						var i, r, o, s, a, c, u, l, p = mt(e),
							f = p.on,
							d = p.emit,
							h = p.bind,
							v = p.unbind,
							m = e.state,
							y = t.Move,
							E = t.Scroll,
							g = t.Controller,
							_ = t.Elements.track,
							N = t.Media.reduce,
							T = t.Direction,
							b = T.resolve,
							O = T.orient,
							x = y.getPosition,
							D = y.exceededLimit,
							S = !1;

						function C() {
							var e = n.drag;
							Y(!e), s = "free" === e
						}

						function L(e) {
							if (c = !1, !u) {
								var t = G(e);
								i = e.target, r = n.noDrag, ee(i, "." + $t + ", ." + Kt) || r && ee(i, r) || !t && e.button || (g.isBusy() ? ge(e, !0) : (l = t ? _ : window, a = m.is([k, A]), o = null, h(l, un, R, xn), h(l, ln, F, xn), y.cancel(), E.cancel(), j(e)))
							}
							var i, r
						}

						function R(t) {
							if (m.is(w) || (m.set(w), d(tt)), t.cancelable)
								if (a) {
									y.translate(i + U(t) / (S && e.is(pn) ? sn : 1));
									var r = V(t) > an,
										o = S !== (S = D());
									(r || o) && j(t), c = !0, d(nt), ge(t)
								} else(function(e) {
									return Ce(U(e)) > Ce(U(e, !0))
								})(t) && (a = function(e) {
									var t = n.dragMinThreshold,
										i = B(t),
										r = i && t.mouse || 0,
										o = (i ? t.touch : +t) || 10;
									return Ce(U(e)) > (G(e) ? o : r)
								}(t), ge(t))
						}

						function F(i) {
							m.is(w) && (m.set(I), d(it)), a && (! function(i) {
								var r = function(t) {
										if (e.is(fn) || !S) {
											var n = V(t);
											if (n && n < an) return U(t) / n
										}
										return 0
									}(i),
									o = function(e) {
										return x() + Pe(e) * Ae(Ce(e) * (n.flickPower || 600), s ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
									}(r),
									a = n.rewind && n.rewindByDrag;
								N(!1), s ? g.scroll(o, 0, n.snap) : e.is(dn) ? g.go(O(Pe(r)) < 0 ? a ? "<" : "-" : a ? ">" : "+") : e.is(pn) && S && a ? g.go(D(!0) ? ">" : "<") : g.go(g.toDest(o), !0);
								N(!0)
							}(i), ge(i)), v(l, un, R), v(l, ln, F), a = !1
						}

						function M(e) {
							!u && c && ge(e, !0)
						}

						function j(e) {
							o = r, r = e, i = x()
						}

						function U(e, t) {
							return K(e, t) - K(q(e), t)
						}

						function V(e) {
							return be(e) - be(q(e))
						}

						function q(e) {
							return r === e && o || r
						}

						function K(e, t) {
							return (G(e) ? e.changedTouches[0] : e)["page" + b(t ? "Y" : "X")]
						}

						function G(e) {
							return "undefined" != typeof TouchEvent && e instanceof TouchEvent
						}

						function Y(e) {
							u = e
						}
						return {
							mount: function() {
								h(_, un, P, xn), h(_, ln, P, xn), h(_, cn, L, xn), h(_, "click", M, {
									capture: !0
								}), h(_, "dragstart", ge), f([Ve, He], C)
							},
							disable: Y,
							isDragging: function() {
								return a
							}
						}
					},
					Keyboard: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.bind,
							c = o.unbind,
							u = e.root,
							l = t.Direction.resolve;

						function p() {
							var e = n.keyboard;
							e && (i = "global" === e ? window : u, a(i, An, h))
						}

						function f() {
							c(i, An)
						}

						function d() {
							var e = r;
							r = !0, F((function() {
								r = e
							}))
						}

						function h(t) {
							if (!r) {
								var n = kn(t);
								n === l(Et) ? e.go("<") : n === l(gt) && e.go(">")
							}
						}
						return {
							mount: function() {
								p(), s(He, f), s(He, p), s(qe, d)
							},
							destroy: f,
							disable: function(e) {
								r = e
							}
						}
					},
					LazyLoad: function(e, t, n) {
						var i = mt(e),
							r = i.on,
							o = i.off,
							s = i.bind,
							a = i.emit,
							c = "sequential" === n.lazyLoad,
							u = [Ve, We, Ke, ot],
							l = [];

						function p() {
							C(l), t.Slides.forEach((function(e) {
								Ne(e.slide, Sn).forEach((function(t) {
									var i = he(t, wn),
										r = he(t, Dn);
									if (i !== t.src || r !== t.srcset) {
										var o = n.classes.spinner,
											s = t.parentElement,
											a = ne(s, "." + o) || le("span", o, s);
										l.push([t, e, a]), t.src || fe(t, "none")
									}
								}))
							})), c && v()
						}

						function f() {
							(l = l.filter((function(t) {
								var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
								return !t[1].isWithin(e.index, i) || d(t)
							}))).length || o(u)
						}

						function d(e) {
							var t = e[0];
							W(e[1].slide, tn), s(t, "load error", R(h, e)), ue(t, "src", he(t, wn)), ue(t, "srcset", he(t, Dn)), ce(t, wn), ce(t, Dn)
						}

						function h(e, t) {
							var n = e[0],
								i = e[1];
							Te(i.slide, tn), "error" !== t.type && (ye(e[2]), fe(n, ""), a(vt, n, i), a(Ze)), c && v()
						}

						function v() {
							l.length && d(l.shift())
						}
						return {
							mount: function() {
								n.lazyLoad && (p(), r(We, p), c || r(u, f))
							},
							destroy: R(C, l)
						}
					},
					Pagination: function(e, t, n) {
						var i, r, o = mt(e),
							s = o.on,
							a = o.emit,
							c = o.bind,
							u = t.Slides,
							l = t.Elements,
							p = t.Controller,
							f = p.hasFocus,
							d = p.getIndex,
							h = p.go,
							v = t.Direction.resolve,
							m = [];

						function y() {
							i && (ye(l.pagination ? L(i.children) : i), Te(i, r), C(m), i = null), o.destroy()
						}

						function E(e) {
							h(">" + e, !0)
						}

						function g(e, t) {
							var n = m.length,
								i = kn(t),
								r = _(),
								o = -1;
							i === v(gt, !1, r) ? o = ++e % n : i === v(Et, !1, r) ? o = (--e + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
							var s = m[o];
							s && (de(s.button), h(">" + o), ge(t, !0))
						}

						function _() {
							return n.paginationDirection || n.direction
						}

						function N(e) {
							return m[p.toPage(e)]
						}

						function T() {
							var e = N(d(!0)),
								t = N(d());
							if (e) {
								var n = e.button;
								Te(n, Wt), ce(n, kt), ue(n, Ot, -1)
							}
							if (t) {
								var r = t.button;
								W(r, Wt), ue(r, kt, !0), ue(r, Ot, "")
							}
							a(lt, {
								list: i,
								items: m
							}, e, t)
						}
						return {
							items: m,
							mount: function t() {
								y(), s([He, We], t), n.pagination && u.isEnough() && (s([qe, rt, ot], T), function() {
									var t = e.length,
										o = n.classes,
										s = n.i18n,
										a = n.perPage,
										p = f() ? t : Se(t / a);
									W(i = l.pagination || le("ul", o.pagination, l.track.parentElement), r = zt + "--" + _()), ue(i, bt, "tablist"), ue(i, At, s.select), ue(i, St, _() === Nt ? "vertical" : "");
									for (var d = 0; d < p; d++) {
										var h = le("li", null, i),
											v = le("button", {
												class: o.page,
												type: "button"
											}, h),
											y = u.getIn(d).map((function(e) {
												return e.slide.id
											})),
											N = !f() && a > 1 ? s.pageX : s.slideX;
										c(v, "click", R(E, d)), n.paginationKeyboard && c(v, "keydown", R(g, d)), ue(h, bt, "presentation"), ue(v, bt, "tab"), ue(v, xt, y.join(" ")), ue(v, At, Me(N, d + 1)), ue(v, Ot, -1), m.push({
											li: h,
											button: v,
											page: d
										})
									}
								}(), T(), a(ut, {
									list: i,
									items: m
								}, N(e.index)))
							},
							destroy: y,
							getAt: N,
							update: T
						}
					},
					Sync: function(e, t, n) {
						var i = n.isNavigation,
							r = n.slideFocus,
							o = [];

						function s() {
							var t, n;
							e.splides.forEach((function(t) {
								t.isParent || (c(e, t.splide), c(t.splide, e))
							})), i && (t = mt(e), (n = t.on)(Ye, l), n(Xe, p), n([Ve, He], u), o.push(t), t.emit(pt, e.splides))
						}

						function a() {
							o.forEach((function(e) {
								e.destroy()
							})), C(o)
						}

						function c(e, t) {
							var n = mt(e);
							n.on(qe, (function(e, n, i) {
								t.go(t.is(fn) ? i : e)
							})), o.push(n)
						}

						function u() {
							ue(t.Elements.list, St, n.direction === Nt ? "vertical" : "")
						}

						function l(t) {
							e.go(t.index)
						}

						function p(e, t) {
							J(Cn, kn(t)) && (l(e), ge(t))
						}
						return {
							setup: function() {
								e.options = {
									slideFocus: K(r) ? i : r
								}
							},
							mount: s,
							destroy: a,
							remount: function() {
								a(), s()
							}
						}
					},
					Wheel: function(e, t, n) {
						var i = mt(e).bind,
							r = 0;

						function o(i) {
							if (i.cancelable) {
								var o = i.deltaY,
									s = o < 0,
									a = be(i),
									c = n.wheelMinThreshold || 0,
									u = n.wheelSleep || 0;
								Ce(o) > c && a - r > u && (e.go(s ? "<" : ">"), r = a),
									function(i) {
										return !n.releaseWheel || e.state.is(k) || -1 !== t.Controller.getAdjacent(i)
									}(s) && ge(i)
							}
						}
						return {
							mount: function() {
								n.wheel && i(t.Elements.track, "wheel", o, xn)
							}
						}
					},
					Live: function(e, t, n) {
						var i = mt(e).on,
							r = t.Elements.track,
							o = n.live && !n.isNavigation,
							s = le("span", Xt);

						function a(e) {
							o && ue(r, Lt, e ? "off" : "polite")
						}
						return {
							mount: function() {
								o && (a(!t.Autoplay.isPaused()), ue(r, Rt, "additions"), s.textContent = "…", i(ft, R(a, !0)), i(ht, R(a, !1)), i([Ke, ot], R(H, r, s)))
							},
							disable: a,
							destroy: function() {
								ce(r, [Lt, Rt]), ye(s)
							}
						}
					}
				}),
				Rn = {
					type: "slide",
					role: "region",
					speed: 400,
					perPage: 1,
					cloneStatus: !0,
					arrows: !0,
					pagination: !0,
					paginationKeyboard: !0,
					interval: 5e3,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					resetProgress: !0,
					easing: "cubic-bezier(0.25, 1, 0.5, 1)",
					drag: !0,
					direction: "ltr",
					trimSpace: !0,
					focusableNodes: "a, button, textarea, input, select, iframe",
					live: !0,
					classes: on,
					i18n: {
						prev: "Previous slide",
						next: "Next slide",
						first: "Go to first slide",
						last: "Go to last slide",
						slideX: "Go to slide %s",
						pageX: "Go to page %s",
						play: "Start autoplay",
						pause: "Pause autoplay",
						carousel: "carousel",
						slide: "slide",
						select: "Select a slide to show",
						slideLabel: "%s of %s"
					},
					reducedMotion: {
						speed: 0,
						rewindSpeed: 0,
						autoplay: "pause"
					}
				};

			function Fn(e, t, n) {
				var i = mt(e).on;
				return {
					mount: function() {
						i([Ve, We], (function() {
							F((function() {
								t.Slides.style("transition", "opacity " + n.speed + "ms " + n.easing)
							}))
						}))
					},
					start: function(e, n) {
						var i = t.Elements.track;
						pe(i, "height", Oe(me(i).height)), F((function() {
							n(), pe(i, "height", "")
						}))
					},
					cancel: P
				}
			}

			function Pn(e, t, n) {
				var i, r = mt(e).bind,
					o = t.Move,
					s = t.Controller,
					a = t.Scroll,
					c = t.Elements.list,
					u = R(pe, c, "transition");

				function l() {
					u(""), a.cancel()
				}
				return {
					mount: function() {
						r(c, "transitionend", (function(e) {
							e.target === c && i && (l(), i())
						}))
					},
					start: function(t, r) {
						var c = o.toPosition(t, !0),
							l = o.getPosition(),
							p = function(t) {
								var i = n.rewindSpeed;
								if (e.is(pn) && i) {
									var r = s.getIndex(!0),
										o = s.getEnd();
									if (0 === r && t >= o || r >= o && 0 === t) return i
								}
								return n.speed
							}(t);
						Ce(c - l) >= 1 && p >= 1 ? n.useScroll ? a.scroll(c, p, !1, r) : (u("transform " + p + "ms " + n.easing), o.translate(c, !0), i = r) : (o.jump(t), r())
					},
					cancel: l
				}
			}
			var Mn = function() {
				function e(t, n) {
					var i;
					this.event = mt(), this.Components = {}, this.state = (i = x, {
						set: function(e) {
							i = e
						},
						is: function(e) {
							return J(z(e), i)
						}
					}), this.splides = [], this._o = {}, this._E = {};
					var r = q(t) ? _e(document, t) : t;
					ke(r, r + " is invalid."), this.root = r, n = se({
						label: he(r, At) || "",
						labelledby: he(r, wt) || ""
					}, Rn, e.defaults, n || {});
					try {
						se(n, JSON.parse(he(r, Ie)))
					} catch (o) {
						ke(!1, "Invalid JSON")
					}
					this._o = Object.create(se({}, n))
				}
				var t, n, i, r = e.prototype;
				return r.mount = function(e, t) {
					var n = this,
						i = this.state,
						r = this.Components;
					return ke(i.is([x, D]), "Already mounted!"), i.set(x), this._C = r, this._T = t || this._T || (this.is(dn) ? Fn : Pn), this._E = e || this._E, re(oe({}, Ln, this._E, {
						Transition: this._T
					}), (function(e, t) {
						var i = e(n, r, n._o);
						r[t] = i, i.setup && i.setup()
					})), re(r, (function(e) {
						e.mount && e.mount()
					})), this.emit(Ve), W(this.root, "is-initialized"), i.set(I), this.emit("ready"), this
				}, r.sync = function(e) {
					return this.splides.push({
						splide: e
					}), e.splides.push({
						splide: this,
						isParent: !0
					}), this.state.is(I) && (this._C.Sync.remount(), e.Components.Sync.remount()), this
				}, r.go = function(e) {
					return this._C.Controller.go(e), this
				}, r.on = function(e, t) {
					return this.event.on(e, t), this
				}, r.off = function(e) {
					return this.event.off(e), this
				}, r.emit = function(e) {
					var t;
					return (t = this.event).emit.apply(t, [e].concat(L(arguments, 1))), this
				}, r.add = function(e, t) {
					return this._C.Slides.add(e, t), this
				}, r.remove = function(e) {
					return this._C.Slides.remove(e), this
				}, r.is = function(e) {
					return this._o.type === e
				}, r.refresh = function() {
					return this.emit(We), this
				}, r.destroy = function(e) {
					void 0 === e && (e = !0);
					var t = this.event,
						n = this.state;
					return n.is(x) ? mt(this).on("ready", this.destroy.bind(this, e)) : (re(this._C, (function(t) {
						t.destroy && t.destroy(e)
					}), !0), t.emit(st), t.destroy(), e && C(this.splides), n.set(D)), this
				}, t = e, (n = [{
					key: "options",
					get: function() {
						return this._o
					},
					set: function(e) {
						this._C.Media.set(e, !0)
					}
				}, {
					key: "length",
					get: function() {
						return this._C.Slides.getLength(!0)
					}
				}, {
					key: "index",
					get: function() {
						return this._C.Controller.getIndex()
					}
				}]) && b(t.prototype, n), i && b(t, i), Object.defineProperty(t, "prototype", {
					writable: !1
				}), e
			}();
			Mn.defaults = {}, Mn.STATES = S;
			var jn = [
				[Ve, "onMounted"],
				["ready", "onReady"],
				[qe, "onMove"],
				[Ke, "onMoved"],
				[Ye, "onClick"],
				[ze, "onActive"],
				[$e, "onInactive"],
				[Je, "onVisible"],
				[Qe, "onHidden"],
				[We, "onRefresh"],
				[He, "onUpdated"],
				[Ze, "onResize"],
				[et, "onResized"],
				[tt, "onDrag"],
				[nt, "onDragging"],
				[it, "onDragged"],
				[rt, "onScroll"],
				[ot, "onScrolled"],
				[st, "onDestroy"],
				[at, "onArrowsMounted"],
				[ct, "onArrowsUpdated"],
				[ut, "onPaginationMounted"],
				[lt, "onPaginationUpdated"],
				[pt, "onNavigationMounted"],
				[ft, "onAutoplayPlay"],
				[dt, "onAutoplayPlaying"],
				[ht, "onAutoplayPause"],
				[vt, "onLazyLoadLoaded"]
			];

			function Bn(...e) {
				return e.filter(Boolean).join(" ")
			}

			function Un(e) {
				return null !== e && "object" == typeof e
			}

			function Vn(e, t) {
				const n = e;
				return function(e, t) {
					if (e) {
						const n = Object.keys(e);
						for (let i = 0; i < n.length; i++) {
							const r = n[i];
							if ("__proto__" !== r && !1 === t(e[r], r)) break
						}
					}
				}(t, (e, t) => {
					Array.isArray(e) ? n[t] = e.slice() : Un(e) ? n[t] = Vn(Un(n[t]) ? n[t] : {}, e) : n[t] = e
				}), n
			}
			var qn = e => {
					var t = e,
						{
							children: n,
							className: i
						} = t,
						o = v(t, ["children", "className"]);
					return r.a.createElement("div", h({
						className: Bn("splide__track", i)
					}, o), r.a.createElement("ul", {
						className: "splide__list"
					}, n))
				},
				Kn = class extends r.a.Component {
					constructor() {
						super(...arguments), this.splideRef = r.a.createRef(), this.slides = []
					}
					componentDidMount() {
						const {
							options: e,
							extensions: t,
							transition: n
						} = this.props, {
							current: i
						} = this.splideRef;
						i && (this.splide = new Mn(i, e), this.bind(this.splide), this.splide.mount(t, n), this.options = Vn({}, e || {}), this.slides = this.getSlides())
					}
					componentWillUnmount() {
						this.splide && (this.splide.destroy(), this.splide = void 0), this.options = void 0, this.slides.length = 0
					}
					componentDidUpdate() {
						if (!this.splide) return;
						const {
							options: e
						} = this.props;
						e && ! function e(t, n) {
							if (Array.isArray(t) && Array.isArray(n)) return t.length === n.length && !t.some((t, i) => !e(t, n[i]));
							if (Un(t) && Un(n)) {
								const i = Object.keys(t),
									r = Object.keys(n);
								return i.length === r.length && !i.some(i => !Object.prototype.hasOwnProperty.call(n, i) || !e(t[i], n[i]))
							}
							return t === n
						}(this.options, e) && (this.splide.options = e, this.options = Vn({}, e));
						const t = this.getSlides();
						var n, i;
						n = this.slides, i = t, (n.length !== i.length || n.some((e, t) => e !== i[t])) && (this.splide.refresh(), this.slides = t)
					}
					sync(e) {
						var t;
						null == (t = this.splide) || t.sync(e)
					}
					go(e) {
						var t;
						null == (t = this.splide) || t.go(e)
					}
					getSlides() {
						var e;
						if (this.splide) {
							const t = null == (e = this.splide.Components.Elements) ? void 0 : e.list.children;
							return t && Array.prototype.slice.call(t) || []
						}
						return []
					}
					bind(e) {
						jn.forEach(([t, n]) => {
							const i = this.props[n];
							"function" == typeof i && e.on(t, (...t) => {
								i(e, ...t)
							})
						})
					}
					omit(e, t) {
						return t.forEach(t => {
							Object.prototype.hasOwnProperty.call(e, t) && delete e[t]
						}), e
					}
					render() {
						const e = this.props,
							{
								className: t,
								tag: n = "div",
								hasTrack: i = !0,
								children: o
							} = e,
							s = v(e, ["className", "tag", "hasTrack", "children"]);
						return r.a.createElement(n, h({
							className: Bn("splide", t),
							ref: this.splideRef
						}, this.omit(s, ["options", ...jn.map(e => e[1])])), i ? r.a.createElement(qn, null, o) : o)
					}
				},
				Gn = e => {
					var t = e,
						{
							children: n,
							className: i
						} = t,
						o = v(t, ["children", "className"]);
					return r.a.createElement("li", h({
						className: Bn("splide__slide", i)
					}, o), n)
				};
			var Yn = "_carousel_enqhw_7",
				zn = "_slide_enqhw_15",
				$n = "_slideImage_enqhw_25",
				Jn = "_isVisible_enqhw_31",
				Qn = "_isActiveSlide_enqhw_34",
				Xn = "_arrow_enqhw_39",
				Wn = "_disabledArrow_enqhw_60",
				Hn = "_chevron_enqhw_63",
				Zn = "_prev_enqhw_66",
				ei = "_next_enqhw_73",
				ti = "_dots_enqhw_79",
				ni = "_dot_enqhw_79",
				ii = "_isActiveDot_enqhw_97";
			const ri = ({
				factions: e,
				onChange: t
			}) => {
				const n = Object(i.useRef)(null),
					a = Object(o.c)(),
					[c, u] = Object(i.useState)(0);
				return Object(i.useEffect)(() => {
					const e = document.querySelectorAll(`.${ii}`);
					e.length && e.forEach(e => e.classList.remove(`.${ii}`));
					const t = document.querySelectorAll(".splide__pagination__page.is-active");
					t.length && t[0].classList.add(`.${ii}`)
				}, [c]), r.a.createElement(Kn, {
					ref: n,
					hasTrack: !1,
					"aria-label": a.inline("Factions carousel", "Image carousel: list of factions for users to select from"),
					options: {
						type: "slide",
						perMove: 1,
						drag: !1,
						width: "calc(100% - 90px)",
						fixedWidth: "202px",
						focus: "center",
						trimSpace: !1,
						speed: 600,
						classes: {
							pagination: `splide__pagination ${ti}`,
							page: `splide__pagination__page ${ni}`
						}
					},
					onMove: (e, n) => {
						u(n), t && t(n)
					},
					className: g(Yn)
				}, r.a.createElement(qn, null, e.map(({
					name: e,
					images: t
				}, n) => r.a.createElement(Gn, {
					key: n,
					className: g(zn, {
						[Qn]: n === c,
						[Jn]: 1 === Math.abs(c - n)
					})
				}, r.a.createElement("img", {
					src: t[0].url,
					alt: e,
					className: $n
				})))), r.a.createElement("div", {
					className: "splide__arrows"
				}, r.a.createElement("button", {
					className: g("splide__arrow splide__arrow--prev", Xn, Zn, {
						[Wn]: 0 === c
					}),
					disabled: 0 === c
				}, r.a.createElement("img", {
					src: s.g.Chevron,
					className: Hn
				})), r.a.createElement("button", {
					className: g("splide__arrow splide__arrow--next", Xn, ei, {
						[Wn]: c === e.length - 1
					}),
					disabled: c === e.length - 1
				}, r.a.createElement("img", {
					src: s.g.Chevron,
					className: Hn
				}))))
			};
			var oi = "https://www.redditstatic.com/crypto-assets/v2/close-contained-4d7c7d218a.svg",
				si = "https://www.redditstatic.com/crypto-assets/v2/close-dark-f5902178f9.svg",
				ai = "https://www.redditstatic.com/crypto-assets/v2/close-1a7014e63e.svg";
			var ci = "_closeButton_bz0xz_1",
				ui = "_contained_bz0xz_13",
				li = "_closeIcon_bz0xz_22";
			const pi = ({
				contained: e,
				theme: t,
				className: n,
				onClick: i
			}) => r.a.createElement("button", {
				className: g(ci, n, {
					[ui]: e
				}),
				onClick: i
			}, r.a.createElement("img", {
				className: li,
				src: fi(t, e)
			}));

			function fi(e, t) {
				if (t) return oi;
				switch (e) {
					case "dark":
						return si;
					default:
						return ai
				}
			}
			const di = {
				Achievement: "https://www.redditstatic.com/crypto-assets/v2/achievement-3febd9cb09.svg",
				AvatarGear: "https://www.redditstatic.com/crypto-assets/v2/avatar-gear-71f4031cf4.svg",
				BlockchainFilled: "https://www.redditstatic.com/crypto-assets/v2/blockchain-filled-5c6fc10547.svg",
				CardExample: "https://www.redditstatic.com/crypto-assets/v2/card-example-abbcb94211.svg",
				CheckmarkGreen: "https://www.redditstatic.com/crypto-assets/v2/checkmark-green-7355fd2559.svg",
				CheckmarkGrey: "https://www.redditstatic.com/crypto-assets/v2/checkmark-grey-1978f4add3.svg",
				Chevron: "https://www.redditstatic.com/crypto-assets/v2/chevron-ca25b73dda.svg",
				CloseContained: oi,
				CloseDark: si,
				Close: ai,
				Collectible: "https://www.redditstatic.com/crypto-assets/v2/collectible-0b6bff0d23.svg",
				DoubleEyeFilled: "https://www.redditstatic.com/crypto-assets/v2/double-eye-filled-a845a76f95.svg",
				Duplicate: "https://www.redditstatic.com/crypto-assets/v2/duplicate-66af363d56.svg",
				Ellipse: "https://www.redditstatic.com/crypto-assets/v2/ellipse-2e713b908d.svg",
				InfoFilled: "https://www.redditstatic.com/crypto-assets/v2/info-filled-24d30a597b.svg",
				Nft: "https://www.redditstatic.com/crypto-assets/v2/nft-31cc27e3a3.svg",
				Reddit: "https://www.redditstatic.com/crypto-assets/v2/reddit-d9fb338c35.svg",
				Spotlight: "https://www.redditstatic.com/crypto-assets/v2/spotlight-64a6d1926b.svg",
				StandOut: "https://www.redditstatic.com/crypto-assets/v2/stand-out-01fba311d3.svg",
				TransferToVault: "https://www.redditstatic.com/crypto-assets/v2/transfer-to-vault-8a3773b030.svg",
				Transferable: "https://www.redditstatic.com/crypto-assets/v2/transferable-041e6b0265.svg",
				Vault: "https://www.redditstatic.com/crypto-assets/v2/vault-cfd0500d93.svg"
			};
			const hi = ({
				href: e,
				className: t,
				children: n
			}) => r.a.createElement("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				className: t
			}, n);
			var vi = "_loadingContainer_1iitb_1",
				mi = "_loadingContent_1iitb_11";
			const yi = ({
				hasError: e,
				className: t
			}) => r.a.createElement("div", {
				className: g(vi, t)
			}, r.a.createElement("div", {
				className: mi
			}, r.a.createElement(s.j, null), e && r.a.createElement(s.f, null)));
			var Ei = "_container_10e6p_1";
			const gi = ({
				className: e
			}) => r.a.createElement("svg", {
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className: g(e, Ei)
			}, r.a.createElement("g", {
				clipPath: "url(#clip0_1524_96476)"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M0.550365 15.5928C0.63966 15.8773 0.950781 16.0216 1.23103 15.9196C1.51128 15.8176 1.6544 15.508 1.56637 15.223C0.941235 13.1994 0.917002 11.0334 1.50293 8.99004C2.13857 6.7733 3.45967 4.81469 5.27689 3.39493C7.0941 1.97516 9.31413 1.16714 11.6188 1.08666C13.5072 1.02071 15.3731 1.44602 17.0372 2.31123C16.9414 2.55943 16.8889 2.82914 16.8889 3.11111C16.8889 4.33841 17.8838 5.33333 19.1111 5.33333C20.3384 5.33333 21.3333 4.33841 21.3333 3.11111C21.3333 1.88381 20.3384 0.888889 19.1111 0.888889C18.5597 0.888889 18.0551 1.08975 17.6667 1.4223C15.8051 0.424965 13.7061 -0.0668907 11.5811 0.00731693C9.04851 0.0957566 6.60891 0.983698 4.61197 2.54388C2.61503 4.10406 1.16328 6.25637 0.464769 8.69235C-0.184035 10.955 -0.152034 13.3545 0.550365 15.5928ZM23.4496 8.40721C23.3603 8.12266 23.0492 7.97844 22.769 8.08045C22.4887 8.18245 22.3456 8.49202 22.4336 8.77697C23.0588 10.8006 23.083 12.9666 22.4971 15.01C21.8614 17.2267 20.5403 19.1853 18.7231 20.6051C16.9059 22.0248 14.6859 22.8329 12.3812 22.9133C10.4928 22.9793 8.62694 22.554 6.9628 21.6888C7.05859 21.4406 7.11111 21.1709 7.11111 20.8889C7.11111 19.6616 6.11619 18.6667 4.88889 18.6667C3.66159 18.6667 2.66667 19.6616 2.66667 20.8889C2.66667 22.1162 3.66159 23.1111 4.88889 23.1111C5.44033 23.1111 5.94487 22.9102 6.33331 22.5777C8.19492 23.575 10.2939 24.0669 12.4189 23.9927C14.9515 23.9042 17.3911 23.0163 19.388 21.4561C21.385 19.8959 22.8367 17.7436 23.5352 15.3076C24.184 13.045 24.152 10.6455 23.4496 8.40721ZM12 16.8889C14.7001 16.8889 16.8889 14.7001 16.8889 12C16.8889 9.29994 14.7001 7.11111 12 7.11111C9.29994 7.11111 7.11111 9.29994 7.11111 12C7.11111 14.7001 9.29994 16.8889 12 16.8889Z",
				fill: "currentColor"
			})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
				id: "clip0_1524_96476"
			}, r.a.createElement("rect", {
				width: "24",
				height: "24",
				fill: "white"
			}))));
			var _i = {};
			Object.defineProperty(_i, "__esModule", {
				value: !0
			});
			var Ni, Ti = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				},
				bi = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, n, i) {
						return n && e(t.prototype, n), i && e(t, i), t
					}
				}(),
				Oi = r.a,
				xi = (Ni = Oi) && Ni.__esModule ? Ni : {
					default: Ni
				},
				Ii = c.a;
			var ki = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var n = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					n.state = {
						style: {}
					};
					return n.width = null, n.height = null, n.left = null, n.top = null, n.transitionTimeout = null, n.updateCall = null, n.element = null, n.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, n.props.options), n.reverse = n.settings.reverse ? -1 : 1, n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter), n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove), n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave), n
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
				}(t, e), bi(t, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, Ii.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: Ti({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), e(t)
					}
				}, {
					key: "reset",
					value: function() {
						var e = this;
						window.requestAnimationFrame((function() {
							e.setState(Object.assign({}, e.state, {
								style: Ti({}, e.state.style, {
									transform: "perspective(" + e.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return t.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.update.bind(this, t)), e(t)
					}
				}, {
					key: "setTransition",
					value: function() {
						var e = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: Ti({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							e.setState(Object.assign({}, e.state, {
								style: Ti({}, e.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), e(t)
					}
				}, {
					key: "getValues",
					value: function(e) {
						var t = (e.nativeEvent.clientX - this.left) / this.width,
							n = (e.nativeEvent.clientY - this.top) / this.height,
							i = Math.min(Math.max(t, 0), 1),
							r = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - i * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (r * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * i,
							percentageY: 100 * r
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var e = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top
					}
				}, {
					key: "update",
					value: function(e) {
						var t = this.getValues(e);
						this.setState(Object.assign({}, this.state, {
							style: Ti({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var e = Object.assign({}, this.props.style, this.state.style);
						return xi.default.createElement("div", {
							style: e,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), t
			}(Oi.Component);
			_i.default = ki;
			const Ai = ({
				children: e,
				desc: t
			}) => {
				const n = Object(o.c)();
				return r.a.createElement(r.a.Fragment, null, n.singular(e, t))
			};
			var wi = {
				container: "_container_9znh3_42",
				toast: "_toast_9znh3_54",
				bar: "_bar_9znh3_68",
				errorKind: "_errorKind_9znh3_71",
				successKind: "_successKind_9znh3_74",
				image: "_image_9znh3_77",
				content: "_content_9znh3_81",
				close: "_close_9znh3_88",
				entering: "_entering_9znh3_103",
				fadeIn: "_fadeIn_9znh3_1",
				leaving: "_leaving_9znh3_106",
				fadeOut: "_fadeOut_9znh3_1"
			};
			const Di = ({
					className: e,
					kind: t,
					children: n,
					onClose: o,
					duration: s = 0
				}) => {
					const c = Object(i.useMemo)(Ri, []);
					return "undefined" == typeof document || void 0 === document.createElement ? r.a.createElement(r.a.Fragment, null) : Object(a.createPortal)(r.a.createElement(Si, {
						className: e,
						kind: t,
						onClose: o,
						duration: s
					}, n), c)
				},
				Si = ({
					className: e,
					kind: t,
					children: n,
					onClose: o,
					duration: s = 0
				}) => {
					const [a, c] = Object(i.useState)(!1), u = Object(i.useRef)(null), l = Object(i.useCallback)(e => {
						e && (e.stopPropagation(), e.preventDefault()), c(!0), o && o()
					}, [o]);
					return Object(i.useEffect)(() => {
						c(!1);
						const e = u.current;
						e && (e.classList.add(wi.entering), e.addEventListener("animationend", () => {
							e.classList.remove(wi.entering)
						}))
					}, [n]), Object(i.useEffect)(() => {
						const e = s ? setTimeout(l, s) : null;
						return () => {
							e && clearTimeout(e)
						}
					}, [s, l]), a ? r.a.createElement(r.a.Fragment, null) : r.a.createElement("div", {
						ref: u,
						className: g(wi.toast, e, "error" === t ? wi.errorKind : wi.successKind)
					}, r.a.createElement("div", {
						className: wi.bar
					}), r.a.createElement("div", {
						className: wi.image
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/error-image-c10a891d4e.svg"
					})), r.a.createElement("div", {
						className: wi.content
					}, n), r.a.createElement("div", {
						className: wi.close,
						onClick: l
					}, r.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/close-41452e2e4d.png"
					})))
				},
				Ci = () => r.a.createElement(Di, {
					kind: "error",
					duration: 5e3
				}, r.a.createElement(Ai, {
					desc: ""
				}, "Something went wrong, please try again")),
				Li = "reddit-crypto-toast-wrapper";

			function Ri() {
				let e = document.getElementById(Li);
				return e || ((e = document.createElement("div")).id = Li, e.className = wi.container, document.body.appendChild(e)), e
			}
			var Fi = {
				container: "_container_1cw7m_42"
			};
			const Pi = ({
				value: e,
				direction: t,
				className: n
			}) => {
				const i = "up" === t;
				return r.a.createElement("div", {
					className: g(Fi.container, n, i ? Fi.upVote : Fi.downVote)
				}, r.a.createElement("img", {
					src: i ? "https://www.redditstatic.com/crypto-assets/v2/upvote-e1dfcbf404.svg" : "https://www.redditstatic.com/crypto-assets/v2/downvote-37897edc0e.svg"
				}), e ? function(e) {
					let t;
					"number" == typeof e ? (e >= 1e3 && (e /= 1e3, e = `${e=Math.round(100*e)/100}k`), t = e.toString()) : t = e;
					return t
				}(e) : void 0)
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
				return q
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
					f = i.split(/\r\n|[\n\r]/g),
					d = f[r];
				if (d.length > 120) {
					for (var h = Math.floor(l / 80), v = l % 80, m = [], y = 0; y < d.length; y += 80) m.push(d.slice(y, y + 80));
					return p + c([
						["".concat(s), m[0]]
					].concat(m.slice(1, h + 1).map((function(e) {
						return ["", e]
					})), [
						[" ", u(v - 1) + "^"],
						["", m[h + 1]]
					]))
				}
				return p + c([
					["".concat(s - 1), f[r - 1]],
					["".concat(s), d],
					["", u(l - 1) + "^"],
					["".concat(s + 1), f[r + 1]]
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

			function f(e, t) {
				return !t || "object" !== l(t) && "function" != typeof t ? d(e) : t
			}

			function d(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function h(e) {
				var t = "function" == typeof Map ? new Map : void 0;
				return (h = function(e) {
					if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
					var n;
					if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
					if (void 0 !== t) {
						if (t.has(e)) return t.get(e);
						t.set(e, i)
					}

					function i() {
						return v(e, arguments, E(this).constructor)
					}
					return i.prototype = Object.create(e.prototype, {
						constructor: {
							value: i,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), y(i, e)
				})(e)
			}

			function v(e, t, n) {
				return (v = m() ? Reflect.construct : function(e, t, n) {
					var i = [null];
					i.push.apply(i, t);
					var r = new(Function.bind.apply(e, i));
					return n && y(r, n.prototype), r
				}).apply(null, arguments)
			}

			function m() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function y(e, t) {
				return (y = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function E(e) {
				return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var g = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && y(e, t)
				}(v, e);
				var t, n, c, u, l, h = (t = v, n = m(), function() {
					var e, i = E(t);
					if (n) {
						var r = E(this).constructor;
						e = Reflect.construct(i, arguments, r)
					} else e = i.apply(this, arguments);
					return f(this, e)
				});

				function v(e, t, n, r, s, a, c) {
					var u, l, p, m, y;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, v), y = h.call(this, e);
					var E, g = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
						_ = n;
					!_ && g && (_ = null === (E = g[0].loc) || void 0 === E ? void 0 : E.source);
					var N, T = r;
					!T && g && (T = g.reduce((function(e, t) {
						return t.loc && e.push(t.loc.start), e
					}), [])), T && 0 === T.length && (T = void 0), r && n ? N = r.map((function(e) {
						return o(n, e)
					})) : g && (N = g.reduce((function(e, t) {
						return t.loc && e.push(o(t.loc.source, t.loc.start)), e
					}), []));
					var b, O = c;
					if (null == O && null != a) {
						var x = a.extensions;
						"object" == i(b = x) && null !== b && (O = x)
					}
					return Object.defineProperties(d(y), {
						name: {
							value: "GraphQLError"
						},
						message: {
							value: e,
							enumerable: !0,
							writable: !0
						},
						locations: {
							value: null !== (u = N) && void 0 !== u ? u : void 0,
							enumerable: null != N
						},
						path: {
							value: null != s ? s : void 0,
							enumerable: null != s
						},
						nodes: {
							value: null != g ? g : void 0
						},
						source: {
							value: null !== (l = _) && void 0 !== l ? l : void 0
						},
						positions: {
							value: null !== (p = T) && void 0 !== p ? p : void 0
						},
						originalError: {
							value: a
						},
						extensions: {
							value: null !== (m = O) && void 0 !== m ? m : void 0,
							enumerable: null != O
						}
					}), null != a && a.stack ? (Object.defineProperty(d(y), "stack", {
						value: a.stack,
						writable: !0,
						configurable: !0
					}), f(y)) : (Error.captureStackTrace ? Error.captureStackTrace(d(y), v) : Object.defineProperty(d(y), "stack", {
						value: Error().stack,
						writable: !0,
						configurable: !0
					}), y)
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
			}(h(Error));

			function _(e, t, n) {
				return new g("Syntax Error: ".concat(n), void 0, e, [t])
			}
			var N = Object.freeze({
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
				T = n("./node_modules/graphql/language/ast.mjs"),
				b = Object.freeze({
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
				O = n("./node_modules/graphql/jsutils/inspect.mjs");

			function x(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			var I = function(e, t) {
				return e instanceof t
			};

			function k(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			var A = function() {
				function e(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
							line: 1,
							column: 1
						};
					"string" == typeof e || x(0, "Body must be a string. Received: ".concat(Object(O.a)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || x(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || x(0, "column in locationOffset is 1-indexed and must be positive.")
				}
				var t, n, i;
				return t = e, (n = [{
					key: r,
					get: function() {
						return "Source"
					}
				}]) && k(t.prototype, n), i && k(t, i), e
			}();
			var w = Object.freeze({
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
				D = n("./node_modules/graphql/language/blockString.mjs"),
				S = function() {
					function e(e) {
						var t = new T.b(b.SOF, 0, 0, 0, 0, null);
						this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
					}
					var t = e.prototype;
					return t.advance = function() {
						return this.lastToken = this.token, this.token = this.lookahead()
					}, t.lookahead = function() {
						var e = this.token;
						if (e.kind !== b.EOF)
							do {
								var t;
								e = null !== (t = e.next) && void 0 !== t ? t : e.next = L(this, e)
							} while (e.kind === b.COMMENT);
						return e
					}, e
				}();

			function C(e) {
				return isNaN(e) ? b.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
			}

			function L(e, t) {
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
							return new T.b(b.BANG, o, o + 1, a, c, t);
						case 35:
							return F(n, o, a, c, t);
						case 36:
							return new T.b(b.DOLLAR, o, o + 1, a, c, t);
						case 38:
							return new T.b(b.AMP, o, o + 1, a, c, t);
						case 40:
							return new T.b(b.PAREN_L, o, o + 1, a, c, t);
						case 41:
							return new T.b(b.PAREN_R, o, o + 1, a, c, t);
						case 46:
							if (46 === i.charCodeAt(o + 1) && 46 === i.charCodeAt(o + 2)) return new T.b(b.SPREAD, o, o + 3, a, c, t);
							break;
						case 58:
							return new T.b(b.COLON, o, o + 1, a, c, t);
						case 61:
							return new T.b(b.EQUALS, o, o + 1, a, c, t);
						case 64:
							return new T.b(b.AT, o, o + 1, a, c, t);
						case 91:
							return new T.b(b.BRACKET_L, o, o + 1, a, c, t);
						case 93:
							return new T.b(b.BRACKET_R, o, o + 1, a, c, t);
						case 123:
							return new T.b(b.BRACE_L, o, o + 1, a, c, t);
						case 124:
							return new T.b(b.PIPE, o, o + 1, a, c, t);
						case 125:
							return new T.b(b.BRACE_R, o, o + 1, a, c, t);
						case 34:
							return 34 === i.charCodeAt(o + 1) && 34 === i.charCodeAt(o + 2) ? B(n, o, a, c, t, e) : j(n, o, a, c, t);
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
					throw _(n, o, R(s))
				}
				var u = e.line,
					l = 1 + o - e.lineStart;
				return new T.b(b.EOF, r, r, u, l, t)
			}

			function R(e) {
				return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(C(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(C(e), ".")
			}

			function F(e, t, n, i, r) {
				var o, s = e.body,
					a = t;
				do {
					o = s.charCodeAt(++a)
				} while (!isNaN(o) && (o > 31 || 9 === o));
				return new T.b(b.COMMENT, t, a, n, i, r, s.slice(t + 1, a))
			}

			function P(e, t, n, i, r, o) {
				var s = e.body,
					a = n,
					c = t,
					u = !1;
				if (45 === a && (a = s.charCodeAt(++c)), 48 === a) {
					if ((a = s.charCodeAt(++c)) >= 48 && a <= 57) throw _(e, c, "Invalid number, unexpected digit after 0: ".concat(C(a), "."))
				} else c = M(e, c, a), a = s.charCodeAt(c);
				if (46 === a && (u = !0, a = s.charCodeAt(++c), c = M(e, c, a), a = s.charCodeAt(c)), 69 !== a && 101 !== a || (u = !0, 43 !== (a = s.charCodeAt(++c)) && 45 !== a || (a = s.charCodeAt(++c)), c = M(e, c, a), a = s.charCodeAt(c)), 46 === a || function(e) {
						return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
					}(a)) throw _(e, c, "Invalid number, expected digit but got: ".concat(C(a), "."));
				return new T.b(u ? b.FLOAT : b.INT, t, c, i, r, o, s.slice(t, c))
			}

			function M(e, t, n) {
				var i = e.body,
					r = t,
					o = n;
				if (o >= 48 && o <= 57) {
					do {
						o = i.charCodeAt(++r)
					} while (o >= 48 && o <= 57);
					return r
				}
				throw _(e, r, "Invalid number, expected digit but got: ".concat(C(o), "."))
			}

			function j(e, t, n, i, r) {
				for (var o, s, a, c, u = e.body, l = t + 1, p = l, f = 0, d = ""; l < u.length && !isNaN(f = u.charCodeAt(l)) && 10 !== f && 13 !== f;) {
					if (34 === f) return d += u.slice(p, l), new T.b(b.STRING, t, l + 1, n, i, r, d);
					if (f < 32 && 9 !== f) throw _(e, l, "Invalid character within String: ".concat(C(f), "."));
					if (++l, 92 === f) {
						switch (d += u.slice(p, l - 1), f = u.charCodeAt(l)) {
							case 34:
								d += '"';
								break;
							case 47:
								d += "/";
								break;
							case 92:
								d += "\\";
								break;
							case 98:
								d += "\b";
								break;
							case 102:
								d += "\f";
								break;
							case 110:
								d += "\n";
								break;
							case 114:
								d += "\r";
								break;
							case 116:
								d += "\t";
								break;
							case 117:
								var h = (o = u.charCodeAt(l + 1), s = u.charCodeAt(l + 2), a = u.charCodeAt(l + 3), c = u.charCodeAt(l + 4), U(o) << 12 | U(s) << 8 | U(a) << 4 | U(c));
								if (h < 0) {
									var v = u.slice(l + 1, l + 5);
									throw _(e, l, "Invalid character escape sequence: \\u".concat(v, "."))
								}
								d += String.fromCharCode(h), l += 4;
								break;
							default:
								throw _(e, l, "Invalid character escape sequence: \\".concat(String.fromCharCode(f), "."))
						}
						p = ++l
					}
				}
				throw _(e, l, "Unterminated string.")
			}

			function B(e, t, n, i, r, o) {
				for (var s = e.body, a = t + 3, c = a, u = 0, l = ""; a < s.length && !isNaN(u = s.charCodeAt(a));) {
					if (34 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2)) return l += s.slice(c, a), new T.b(b.BLOCK_STRING, t, a + 3, n, i, r, Object(D.a)(l));
					if (u < 32 && 9 !== u && 10 !== u && 13 !== u) throw _(e, a, "Invalid character within String: ".concat(C(u), "."));
					10 === u ? (++a, ++o.line, o.lineStart = a) : 13 === u ? (10 === s.charCodeAt(a + 1) ? a += 2 : ++a, ++o.line, o.lineStart = a) : 92 === u && 34 === s.charCodeAt(a + 1) && 34 === s.charCodeAt(a + 2) && 34 === s.charCodeAt(a + 3) ? (l += s.slice(c, a) + '"""', c = a += 4) : ++a
				}
				throw _(e, a, "Unterminated string.")
			}

			function U(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function V(e, t, n, i, r) {
				for (var o = e.body, s = o.length, a = t + 1, c = 0; a !== s && !isNaN(c = o.charCodeAt(a)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++a;
				return new T.b(b.NAME, t, a, n, i, r, o.slice(t, a))
			}

			function q(e, t) {
				return new K(e, t).parseDocument()
			}
			var K = function() {
				function e(e, t) {
					var n = function(e) {
						return I(e, A)
					}(e) ? e : new A(e);
					this._lexer = new S(n), this._options = t
				}
				var t = e.prototype;
				return t.parseName = function() {
					var e = this.expectToken(b.NAME);
					return {
						kind: N.NAME,
						value: e.value,
						loc: this.loc(e)
					}
				}, t.parseDocument = function() {
					var e = this._lexer.token;
					return {
						kind: N.DOCUMENT,
						definitions: this.many(b.SOF, this.parseDefinition, b.EOF),
						loc: this.loc(e)
					}
				}, t.parseDefinition = function() {
					if (this.peek(b.NAME)) switch (this._lexer.token.value) {
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
						if (this.peek(b.BRACE_L)) return this.parseOperationDefinition();
						if (this.peekDescription()) return this.parseTypeSystemDefinition()
					}
					throw this.unexpected()
				}, t.parseOperationDefinition = function() {
					var e = this._lexer.token;
					if (this.peek(b.BRACE_L)) return {
						kind: N.OPERATION_DEFINITION,
						operation: "query",
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					};
					var t, n = this.parseOperationType();
					return this.peek(b.NAME) && (t = this.parseName()), {
						kind: N.OPERATION_DEFINITION,
						operation: n,
						name: t,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseOperationType = function() {
					var e = this.expectToken(b.NAME);
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
					return this.optionalMany(b.PAREN_L, this.parseVariableDefinition, b.PAREN_R)
				}, t.parseVariableDefinition = function() {
					var e = this._lexer.token;
					return {
						kind: N.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(b.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(b.EQUALS) ? this.parseValueLiteral(!0) : void 0,
						directives: this.parseDirectives(!0),
						loc: this.loc(e)
					}
				}, t.parseVariable = function() {
					var e = this._lexer.token;
					return this.expectToken(b.DOLLAR), {
						kind: N.VARIABLE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseSelectionSet = function() {
					var e = this._lexer.token;
					return {
						kind: N.SELECTION_SET,
						selections: this.many(b.BRACE_L, this.parseSelection, b.BRACE_R),
						loc: this.loc(e)
					}
				}, t.parseSelection = function() {
					return this.peek(b.SPREAD) ? this.parseFragment() : this.parseField()
				}, t.parseField = function() {
					var e, t, n = this._lexer.token,
						i = this.parseName();
					return this.expectOptionalToken(b.COLON) ? (e = i, t = this.parseName()) : t = i, {
						kind: N.FIELD,
						alias: e,
						name: t,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(b.BRACE_L) ? this.parseSelectionSet() : void 0,
						loc: this.loc(n)
					}
				}, t.parseArguments = function(e) {
					var t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(b.PAREN_L, t, b.PAREN_R)
				}, t.parseArgument = function() {
					var e = this._lexer.token,
						t = this.parseName();
					return this.expectToken(b.COLON), {
						kind: N.ARGUMENT,
						name: t,
						value: this.parseValueLiteral(!1),
						loc: this.loc(e)
					}
				}, t.parseConstArgument = function() {
					var e = this._lexer.token;
					return {
						kind: N.ARGUMENT,
						name: this.parseName(),
						value: (this.expectToken(b.COLON), this.parseValueLiteral(!0)),
						loc: this.loc(e)
					}
				}, t.parseFragment = function() {
					var e = this._lexer.token;
					this.expectToken(b.SPREAD);
					var t = this.expectOptionalKeyword("on");
					return !t && this.peek(b.NAME) ? {
						kind: N.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1),
						loc: this.loc(e)
					} : {
						kind: N.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseFragmentDefinition = function() {
					var e, t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
						kind: N.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					} : {
						kind: N.FRAGMENT_DEFINITION,
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
						case b.BRACKET_L:
							return this.parseList(e);
						case b.BRACE_L:
							return this.parseObject(e);
						case b.INT:
							return this._lexer.advance(), {
								kind: N.INT,
								value: t.value,
								loc: this.loc(t)
							};
						case b.FLOAT:
							return this._lexer.advance(), {
								kind: N.FLOAT,
								value: t.value,
								loc: this.loc(t)
							};
						case b.STRING:
						case b.BLOCK_STRING:
							return this.parseStringLiteral();
						case b.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return {
										kind: N.BOOLEAN, value: !0, loc: this.loc(t)
									};
								case "false":
									return {
										kind: N.BOOLEAN, value: !1, loc: this.loc(t)
									};
								case "null":
									return {
										kind: N.NULL, loc: this.loc(t)
									};
								default:
									return {
										kind: N.ENUM, value: t.value, loc: this.loc(t)
									}
							}
							case b.DOLLAR:
								if (!e) return this.parseVariable()
					}
					throw this.unexpected()
				}, t.parseStringLiteral = function() {
					var e = this._lexer.token;
					return this._lexer.advance(), {
						kind: N.STRING,
						value: e.value,
						block: e.kind === b.BLOCK_STRING,
						loc: this.loc(e)
					}
				}, t.parseList = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: N.LIST,
						values: this.any(b.BRACKET_L, (function() {
							return t.parseValueLiteral(e)
						}), b.BRACKET_R),
						loc: this.loc(n)
					}
				}, t.parseObject = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: N.OBJECT,
						fields: this.any(b.BRACE_L, (function() {
							return t.parseObjectField(e)
						}), b.BRACE_R),
						loc: this.loc(n)
					}
				}, t.parseObjectField = function(e) {
					var t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(b.COLON), {
						kind: N.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e),
						loc: this.loc(t)
					}
				}, t.parseDirectives = function(e) {
					for (var t = []; this.peek(b.AT);) t.push(this.parseDirective(e));
					return t
				}, t.parseDirective = function(e) {
					var t = this._lexer.token;
					return this.expectToken(b.AT), {
						kind: N.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e),
						loc: this.loc(t)
					}
				}, t.parseTypeReference = function() {
					var e, t = this._lexer.token;
					return this.expectOptionalToken(b.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(b.BRACKET_R), e = {
						kind: N.LIST_TYPE,
						type: e,
						loc: this.loc(t)
					}) : e = this.parseNamedType(), this.expectOptionalToken(b.BANG) ? {
						kind: N.NON_NULL_TYPE,
						type: e,
						loc: this.loc(t)
					} : e
				}, t.parseNamedType = function() {
					var e = this._lexer.token;
					return {
						kind: N.NAMED_TYPE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseTypeSystemDefinition = function() {
					var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
					if (e.kind === b.NAME) switch (e.value) {
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
					return this.peek(b.STRING) || this.peek(b.BLOCK_STRING)
				}, t.parseDescription = function() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}, t.parseSchemaDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					var n = this.parseDirectives(!0),
						i = this.many(b.BRACE_L, this.parseOperationTypeDefinition, b.BRACE_R);
					return {
						kind: N.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: i,
						loc: this.loc(e)
					}
				}, t.parseOperationTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(b.COLON);
					var n = this.parseNamedType();
					return {
						kind: N.OPERATION_TYPE_DEFINITION,
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
						kind: N.SCALAR_TYPE_DEFINITION,
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
						kind: N.OBJECT_TYPE_DEFINITION,
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
						this.expectOptionalToken(b.AMP);
						do {
							t.push(this.parseNamedType())
						} while (this.expectOptionalToken(b.AMP) || this.peek(b.NAME));
						return t
					}
					return this.delimitedMany(b.AMP, this.parseNamedType)
				}, t.parseFieldsDefinition = function() {
					var e;
					return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(b.BRACE_L) && this._lexer.lookahead().kind === b.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(b.BRACE_L, this.parseFieldDefinition, b.BRACE_R)
				}, t.parseFieldDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseArgumentDefs();
					this.expectToken(b.COLON);
					var r = this.parseTypeReference(),
						o = this.parseDirectives(!0);
					return {
						kind: N.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						type: r,
						directives: o,
						loc: this.loc(e)
					}
				}, t.parseArgumentDefs = function() {
					return this.optionalMany(b.PAREN_L, this.parseInputValueDef, b.PAREN_R)
				}, t.parseInputValueDef = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(b.COLON);
					var i, r = this.parseTypeReference();
					this.expectOptionalToken(b.EQUALS) && (i = this.parseValueLiteral(!0));
					var o = this.parseDirectives(!0);
					return {
						kind: N.INPUT_VALUE_DEFINITION,
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
						kind: N.INTERFACE_TYPE_DEFINITION,
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
						kind: N.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						types: r,
						loc: this.loc(e)
					}
				}, t.parseUnionMemberTypes = function() {
					return this.expectOptionalToken(b.EQUALS) ? this.delimitedMany(b.PIPE, this.parseNamedType) : []
				}, t.parseEnumTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					var n = this.parseName(),
						i = this.parseDirectives(!0),
						r = this.parseEnumValuesDefinition();
					return {
						kind: N.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						values: r,
						loc: this.loc(e)
					}
				}, t.parseEnumValuesDefinition = function() {
					return this.optionalMany(b.BRACE_L, this.parseEnumValueDefinition, b.BRACE_R)
				}, t.parseEnumValueDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseDirectives(!0);
					return {
						kind: N.ENUM_VALUE_DEFINITION,
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
						kind: N.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseInputFieldsDefinition = function() {
					return this.optionalMany(b.BRACE_L, this.parseInputValueDef, b.BRACE_R)
				}, t.parseTypeSystemExtension = function() {
					var e = this._lexer.lookahead();
					if (e.kind === b.NAME) switch (e.value) {
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
						n = this.optionalMany(b.BRACE_L, this.parseOperationTypeDefinition, b.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return {
						kind: N.SCHEMA_EXTENSION,
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
						kind: N.SCALAR_TYPE_EXTENSION,
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
						kind: N.OBJECT_TYPE_EXTENSION,
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
						kind: N.INTERFACE_TYPE_EXTENSION,
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
						kind: N.UNION_TYPE_EXTENSION,
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
						kind: N.ENUM_TYPE_EXTENSION,
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
						kind: N.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseDirectiveDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(b.AT);
					var n = this.parseName(),
						i = this.parseArgumentDefs(),
						r = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					var o = this.parseDirectiveLocations();
					return {
						kind: N.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						repeatable: r,
						locations: o,
						loc: this.loc(e)
					}
				}, t.parseDirectiveLocations = function() {
					return this.delimitedMany(b.PIPE, this.parseDirectiveLocation)
				}, t.parseDirectiveLocation = function() {
					var e = this._lexer.token,
						t = this.parseName();
					if (void 0 !== w[t.value]) return t;
					throw this.unexpected(e)
				}, t.loc = function(e) {
					var t;
					if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new T.a(e, this._lexer.lastToken, this._lexer.source)
				}, t.peek = function(e) {
					return this._lexer.token.kind === e
				}, t.expectToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw _(this._lexer.source, t.start, "Expected ".concat(Y(e), ", found ").concat(G(t), "."))
				}, t.expectOptionalToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t
				}, t.expectKeyword = function(e) {
					var t = this._lexer.token;
					if (t.kind !== b.NAME || t.value !== e) throw _(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(G(t), "."));
					this._lexer.advance()
				}, t.expectOptionalKeyword = function(e) {
					var t = this._lexer.token;
					return t.kind === b.NAME && t.value === e && (this._lexer.advance(), !0)
				}, t.unexpected = function(e) {
					var t = null != e ? e : this._lexer.token;
					return _(this._lexer.source, t.start, "Unexpected ".concat(G(t), "."))
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

			function G(e) {
				var t = e.value;
				return Y(e.kind) + (null != t ? ' "'.concat(t, '"') : "")
			}

			function Y(e) {
				return function(e) {
					return e === b.BANG || e === b.DOLLAR || e === b.AMP || e === b.PAREN_L || e === b.PAREN_R || e === b.SPREAD || e === b.COLON || e === b.EQUALS || e === b.AT || e === b.BRACKET_L || e === b.BRACKET_R || e === b.BRACE_L || e === b.PIPE || e === b.BRACE_R
				}(e) ? '"'.concat(e, '"') : e
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.1f82869fcae513b86fc2.js.map