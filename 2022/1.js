// https://www.redditstatic.com/desktop2x/1.f3f72a1c3a88110e454a.js
// Retrieved at 5/10/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/@reddit/crypto/core/wallets/index.es.js": function(e, t, n) {
			"use strict";
			var i, r, s = n("./node_modules/ethers/lib.esm/index.js");
			(r = i || (i = {}))[r.Metamask = 1] = "Metamask", r[r.CoinbaseWallet = 2] = "CoinbaseWallet";
			class o {
				constructor(e, t) {
					this.type = e, this.provider = t, this._cachedAddress = t.selectedAddress || ""
				}
				get address() {
					return this._cachedAddress
				}
				async requestAddress() {
					return async function(e) {
						const t = await e.request({
							method: "eth_requestAccounts"
						});
						return Array.isArray(t) ? t.filter(e => e && e.length > 0).map(e => e.toLowerCase()) : []
					}(this.provider).then(e => (this._cachedAddress = e[0], this._cachedAddress))
				}
			}
			s.ethers.providers.Web3Provider
		},
		"./node_modules/@reddit/crypto/react/gql/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Zt
			})), n.d(t, "b", (function() {
				return Qt
			})), n.d(t, "c", (function() {
				return Wt
			}));
			var i = n("./node_modules/react/index.js"),
				r = n.n(i),
				s = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				o = n("./node_modules/graphql/language/parser.mjs"),
				a = Object.defineProperty,
				c = Object.defineProperties,
				u = Object.getOwnPropertyDescriptors,
				l = Object.getOwnPropertySymbols,
				p = Object.prototype.hasOwnProperty,
				h = Object.prototype.propertyIsEnumerable,
				f = (e, t, n) => t in e ? a(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				d = (e, t) => {
					for (var n in t || (t = {})) p.call(t, n) && f(e, n, t[n]);
					if (l)
						for (var n of l(t)) h.call(t, n) && f(e, n, t[n]);
					return e
				},
				v = (e, t) => c(e, u(t));

			function E(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			const y = 10,
				m = 2;

			function T(e) {
				return N(e, [])
			}

			function N(e, t) {
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
								if (t !== e) return "string" == typeof t ? t : N(t, n)
							} else if (Array.isArray(e)) return function(e, t) {
								if (0 === e.length) return "[]";
								if (t.length > m) return "[Array]";
								const n = Math.min(y, e.length),
									i = e.length - n,
									r = [];
								for (let s = 0; s < n; ++s) r.push(N(e[s], t));
								1 === i ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`);
								return "[" + r.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								const n = Object.entries(e);
								if (0 === n.length) return "{}";
								if (t.length > m) return "[" + function(e) {
									const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
									if ("Object" === t && "function" == typeof e.constructor) {
										const t = e.constructor.name;
										if ("string" == typeof t && "" !== t) return t
									}
									return t
								}(e) + "]";
								return "{ " + n.map(([e, n]) => e + ": " + N(n, t)).join(", ") + " }"
							}(e, n)
						}(e, t);
					default:
						return String(e)
				}
			}
			class I {
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
			class O {
				constructor(e, t, n, i, r, s) {
					this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = s, this.prev = null, this.next = null
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
			const _ = {
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
				x = new Set(Object.keys(_));

			function k(e) {
				const t = null == e ? void 0 : e.kind;
				return "string" == typeof t && x.has(t)
			}
			let A;
			var b;
			let g;
			var D;
			(b = A || (A = {})).QUERY = "query", b.MUTATION = "mutation", b.SUBSCRIPTION = "subscription", (D = g || (g = {})).NAME = "Name", D.DOCUMENT = "Document", D.OPERATION_DEFINITION = "OperationDefinition", D.VARIABLE_DEFINITION = "VariableDefinition", D.SELECTION_SET = "SelectionSet", D.FIELD = "Field", D.ARGUMENT = "Argument", D.FRAGMENT_SPREAD = "FragmentSpread", D.INLINE_FRAGMENT = "InlineFragment", D.FRAGMENT_DEFINITION = "FragmentDefinition", D.VARIABLE = "Variable", D.INT = "IntValue", D.FLOAT = "FloatValue", D.STRING = "StringValue", D.BOOLEAN = "BooleanValue", D.NULL = "NullValue", D.ENUM = "EnumValue", D.LIST = "ListValue", D.OBJECT = "ObjectValue", D.OBJECT_FIELD = "ObjectField", D.DIRECTIVE = "Directive", D.NAMED_TYPE = "NamedType", D.LIST_TYPE = "ListType", D.NON_NULL_TYPE = "NonNullType", D.SCHEMA_DEFINITION = "SchemaDefinition", D.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", D.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", D.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", D.FIELD_DEFINITION = "FieldDefinition", D.INPUT_VALUE_DEFINITION = "InputValueDefinition", D.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", D.UNION_TYPE_DEFINITION = "UnionTypeDefinition", D.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", D.ENUM_VALUE_DEFINITION = "EnumValueDefinition", D.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", D.DIRECTIVE_DEFINITION = "DirectiveDefinition", D.SCHEMA_EXTENSION = "SchemaExtension", D.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", D.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", D.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", D.UNION_TYPE_EXTENSION = "UnionTypeExtension", D.ENUM_TYPE_EXTENSION = "EnumTypeExtension", D.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
			const S = Object.freeze({});

			function C(e, t, n = _) {
				const i = new Map;
				for (const E of Object.values(g)) i.set(E, R(t, E));
				let r = void 0,
					s = Array.isArray(e),
					o = [e],
					a = -1,
					c = [],
					u = e,
					l = void 0,
					p = void 0;
				const h = [],
					f = [];
				do {
					const e = ++a === o.length,
						m = e && 0 !== c.length;
					if (e) {
						if (l = 0 === f.length ? void 0 : h[h.length - 1], u = p, p = f.pop(), m)
							if (s) {
								u = u.slice();
								let e = 0;
								for (const [t, n] of c) {
									const i = t - e;
									null === n ? (u.splice(i, 1), e++) : u[i] = n
								}
							} else {
								u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
								for (const [e, t] of c) u[e] = t
							} a = r.index, o = r.keys, c = r.edits, s = r.inArray, r = r.prev
					} else if (p) {
						if (null == (u = p[l = s ? a : o[a]])) continue;
						h.push(l)
					}
					let N;
					if (!Array.isArray(u)) {
						var d, v;
						k(u) || E(!1, `Invalid AST Node: ${T(u)}.`);
						const n = e ? null === (d = i.get(u.kind)) || void 0 === d ? void 0 : d.leave : null === (v = i.get(u.kind)) || void 0 === v ? void 0 : v.enter;
						if ((N = null == n ? void 0 : n.call(t, u, l, p, h, f)) === S) break;
						if (!1 === N) {
							if (!e) {
								h.pop();
								continue
							}
						} else if (void 0 !== N && (c.push([l, N]), !e)) {
							if (!k(N)) {
								h.pop();
								continue
							}
							u = N
						}
					}
					var y;
					if (void 0 === N && m && c.push([l, u]), e) h.pop();
					else r = {
						inArray: s,
						index: a,
						keys: o,
						edits: c,
						prev: r
					}, o = (s = Array.isArray(u)) ? u : null !== (y = n[u.kind]) && void 0 !== y ? y : [], a = -1, c = [], p && f.push(p), p = u
				} while (void 0 !== r);
				return 0 !== c.length ? c[c.length - 1][1] : e
			}

			function R(e, t) {
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

			function w(e) {
				return e >= 48 && e <= 57
			}

			function F(e) {
				return e >= 97 && e <= 122 || e >= 65 && e <= 90
			}

			function P(e) {
				return F(e) || 95 === e
			}

			function M(e) {
				return F(e) || w(e) || 95 === e
			}

			function j(e) {
				var t;
				let n = Number.MAX_SAFE_INTEGER,
					i = null,
					r = -1;
				for (let o = 0; o < e.length; ++o) {
					var s;
					const t = e[o],
						a = U(t);
					a !== t.length && (i = null !== (s = i) && void 0 !== s ? s : o, r = o, 0 !== o && a < n && (n = a))
				}
				return e.map((e, t) => 0 === t ? e : e.slice(n)).slice(null !== (t = i) && void 0 !== t ? t : 0, r + 1)
			}

			function U(e) {
				let t = 0;
				for (; t < e.length && L(e.charCodeAt(t));) ++t;
				return t
			}
			const B = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

			function V(e) {
				return q[e.charCodeAt(0)]
			}
			const q = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"];

			function K(e) {
				return C(e, G)
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
					}) => J(e)
				},
				Field: {
					leave({
						alias: e,
						name: t,
						arguments: n,
						directives: i,
						selectionSet: r
					}) {
						const s = $("", e, ": ") + t;
						let o = s + $("(", Y(n, ", "), ")");
						return o.length > 80 && (o = s + $("(\n", Q(Y(n, "\n")), "\n)")), Y([o, Y(i, " "), r], " ")
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
							s = i.length > 1 && i.slice(1).every(e => 0 === e.length || L(e.charCodeAt(0))),
							o = n.endsWith('\\"""'),
							a = e.endsWith('"') && !o,
							c = e.endsWith("\\"),
							u = a || c,
							l = !(null != t && t.minimize) && (!r || e.length > 70 || u || s || o);
						let p = "";
						const h = r && L(e.charCodeAt(0));
						return (l && !h || s) && (p += "\n"), p += n, (l || u) && (p += "\n"), '"""' + p + '"""'
					}(e) : function(e) {
						return `"${e.replace(B,V)}"`
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
					}) => $("", e, "\n") + Y(["schema", Y(t, " "), J(n)], " ")
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
					}) => $("", e, "\n") + Y(["type", t, $("implements ", Y(n, " & ")), Y(i, " "), J(r)], " ")
				},
				FieldDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						type: i,
						directives: r
					}) => $("", e, "\n") + t + (X(n) ? $("(\n", Q(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + ": " + i + $(" ", Y(r, " "))
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
					}) => $("", e, "\n") + Y(["interface", t, $("implements ", Y(n, " & ")), Y(i, " "), J(r)], " ")
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
					}) => $("", e, "\n") + Y(["enum", t, Y(n, " "), J(i)], " ")
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
					}) => $("", e, "\n") + Y(["input", t, Y(n, " "), J(i)], " ")
				},
				DirectiveDefinition: {
					leave: ({
						description: e,
						name: t,
						arguments: n,
						repeatable: i,
						locations: r
					}) => $("", e, "\n") + "directive @" + t + (X(n) ? $("(\n", Q(Y(n, "\n")), "\n)") : $("(", Y(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + Y(r, " | ")
				},
				SchemaExtension: {
					leave: ({
						directives: e,
						operationTypes: t
					}) => Y(["extend schema", Y(e, " "), J(t)], " ")
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
					}) => Y(["extend type", e, $("implements ", Y(t, " & ")), Y(n, " "), J(i)], " ")
				},
				InterfaceTypeExtension: {
					leave: ({
						name: e,
						interfaces: t,
						directives: n,
						fields: i
					}) => Y(["extend interface", e, $("implements ", Y(t, " & ")), Y(n, " "), J(i)], " ")
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
					}) => Y(["extend enum", e, Y(t, " "), J(n)], " ")
				},
				InputObjectTypeExtension: {
					leave: ({
						name: e,
						directives: t,
						fields: n
					}) => Y(["extend input", e, Y(t, " "), J(n)], " ")
				}
			};

			function Y(e, t = "") {
				var n;
				return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
			}

			function J(e) {
				return $("{\n", Q(Y(e, "\n")), "\n}")
			}

			function $(e, t, n = "") {
				return null != t && "" !== t ? e + t + n : ""
			}

			function Q(e) {
				return $("  ", e.replace(/\n/g, "\n  "))
			}

			function X(e) {
				var t;
				return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
			}

			function z(e, t) {
				if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
			}
			const H = /\r\n|[\n\r]/g;

			function W(e, t) {
				let n = 0,
					i = 1;
				for (const r of e.body.matchAll(H)) {
					if ("number" == typeof r.index || z(!1), r.index >= t) break;
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
					s = e.locationOffset.line - 1,
					o = t.line + s,
					a = 1 === t.line ? n : 0,
					c = t.column + a,
					u = `${e.name}:${o}:${c}\n`,
					l = i.split(/\r\n|[\n\r]/g),
					p = l[r];
				if (p.length > 120) {
					const e = Math.floor(c / 80),
						t = c % 80,
						n = [];
					for (let i = 0; i < p.length; i += 80) n.push(p.slice(i, i + 80));
					return u + ee([
						[`${o} |`, n[0]], ...n.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(t)],
						["|", n[e + 1]]
					])
				}
				return u + ee([
					[`${o-1} |`, l[r - 1]],
					[`${o} |`, p],
					["|", "^".padStart(c)],
					[`${o+1} |`, l[r + 1]]
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
						nodes: s,
						source: o,
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
					super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != u ? u : void 0, this.nodes = te(Array.isArray(s) ? s : s ? [s] : void 0);
					const p = te(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
					this.source = null != o ? o : null == p ? void 0 : null === (i = p[0]) || void 0 === i ? void 0 : i.source, this.positions = null != a ? a : null == p ? void 0 : p.map(e => e.start), this.locations = a && o ? a.map(e => W(o, e)) : null == p ? void 0 : p.map(e => W(e.source, e.start));
					const h = "object" == typeof(f = null == u ? void 0 : u.extensions) && null !== f ? null == u ? void 0 : u.extensions : void 0;
					var f;
					this.extensions = null !== (r = null != l ? l : h) && void 0 !== r ? r : Object.create(null), Object.defineProperties(this, {
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
						for (const n of this.nodes) n.loc && (e += "\n\n" + Z((t = n.loc).source, W(t.source, t.start)));
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
			let se;
			var oe;
			(re = ie || (ie = {})).QUERY = "QUERY", re.MUTATION = "MUTATION", re.SUBSCRIPTION = "SUBSCRIPTION", re.FIELD = "FIELD", re.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", re.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", re.INLINE_FRAGMENT = "INLINE_FRAGMENT", re.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", re.SCHEMA = "SCHEMA", re.SCALAR = "SCALAR", re.OBJECT = "OBJECT", re.FIELD_DEFINITION = "FIELD_DEFINITION", re.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", re.INTERFACE = "INTERFACE", re.UNION = "UNION", re.ENUM = "ENUM", re.ENUM_VALUE = "ENUM_VALUE", re.INPUT_OBJECT = "INPUT_OBJECT", re.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", (oe = se || (se = {})).SOF = "<SOF>", oe.EOF = "<EOF>", oe.BANG = "!", oe.DOLLAR = "$", oe.AMP = "&", oe.PAREN_L = "(", oe.PAREN_R = ")", oe.SPREAD = "...", oe.COLON = ":", oe.EQUALS = "=", oe.AT = "@", oe.BRACKET_L = "[", oe.BRACKET_R = "]", oe.BRACE_L = "{", oe.PIPE = "|", oe.BRACE_R = "}", oe.NAME = "Name", oe.INT = "Int", oe.FLOAT = "Float", oe.STRING = "String", oe.BLOCK_STRING = "BlockString", oe.COMMENT = "Comment";
			class ae {
				constructor(e) {
					const t = new O(se.SOF, 0, 0, 0, 0);
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
					if (e.kind !== se.EOF)
						do {
							if (e.next) e = e.next;
							else {
								const t = de(this, e.end);
								e.next = t, t.prev = e, e = t
							}
						} while (e.kind === se.COMMENT);
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

			function he(e, t) {
				const n = e.source.body.codePointAt(t);
				if (void 0 === n) return se.EOF;
				if (n >= 32 && n <= 126) {
					const e = String.fromCodePoint(n);
					return '"' === e ? "'\"'" : `"${e}"`
				}
				return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
			}

			function fe(e, t, n, i, r) {
				const s = e.line,
					o = 1 + n - e.lineStart;
				return new O(t, n, i, s, o, r)
			}

			function de(e, t) {
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
							return fe(e, se.BANG, r, r + 1);
						case 36:
							return fe(e, se.DOLLAR, r, r + 1);
						case 38:
							return fe(e, se.AMP, r, r + 1);
						case 40:
							return fe(e, se.PAREN_L, r, r + 1);
						case 41:
							return fe(e, se.PAREN_R, r, r + 1);
						case 46:
							if (46 === n.charCodeAt(r + 1) && 46 === n.charCodeAt(r + 2)) return fe(e, se.SPREAD, r, r + 3);
							break;
						case 58:
							return fe(e, se.COLON, r, r + 1);
						case 61:
							return fe(e, se.EQUALS, r, r + 1);
						case 64:
							return fe(e, se.AT, r, r + 1);
						case 91:
							return fe(e, se.BRACKET_L, r, r + 1);
						case 93:
							return fe(e, se.BRACKET_R, r, r + 1);
						case 123:
							return fe(e, se.BRACE_L, r, r + 1);
						case 124:
							return fe(e, se.PIPE, r, r + 1);
						case 125:
							return fe(e, se.BRACE_R, r, r + 1);
						case 34:
							return 34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2) ? xe(e, r) : me(e, r)
					}
					if (w(t) || 45 === t) return Ee(e, r, t);
					if (P(t)) return ke(e, r);
					throw ne(e.source, r, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : ce(t) || ue(n, r) ? `Unexpected character: ${he(e,r)}.` : `Invalid character: ${he(e,r)}.`)
				}
				return fe(e, se.EOF, i, i)
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
				return fe(e, se.COMMENT, t, r, n.slice(t + 1, r))
			}

			function Ee(e, t, n) {
				const i = e.source.body;
				let r = t,
					s = n,
					o = !1;
				if (45 === s && (s = i.charCodeAt(++r)), 48 === s) {
					if (w(s = i.charCodeAt(++r))) throw ne(e.source, r, `Invalid number, unexpected digit after 0: ${he(e,r)}.`)
				} else r = ye(e, r, s), s = i.charCodeAt(r);
				if (46 === s && (o = !0, s = i.charCodeAt(++r), r = ye(e, r, s), s = i.charCodeAt(r)), 69 !== s && 101 !== s || (o = !0, 43 !== (s = i.charCodeAt(++r)) && 45 !== s || (s = i.charCodeAt(++r)), r = ye(e, r, s), s = i.charCodeAt(r)), 46 === s || P(s)) throw ne(e.source, r, `Invalid number, expected digit but got: ${he(e,r)}.`);
				return fe(e, o ? se.FLOAT : se.INT, t, r, i.slice(t, r))
			}

			function ye(e, t, n) {
				if (!w(n)) throw ne(e.source, t, `Invalid number, expected digit but got: ${he(e,t)}.`);
				const i = e.source.body;
				let r = t + 1;
				for (; w(i.charCodeAt(r));) ++r;
				return r
			}

			function me(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t + 1,
					s = r,
					o = "";
				for (; r < i;) {
					const i = n.charCodeAt(r);
					if (34 === i) return o += n.slice(s, r), fe(e, se.STRING, t, r + 1, o);
					if (92 !== i) {
						if (10 === i || 13 === i) break;
						if (ce(i)) ++r;
						else {
							if (!ue(n, r)) throw ne(e.source, r, `Invalid character within String: ${he(e,r)}.`);
							r += 2
						}
					} else {
						o += n.slice(s, r);
						const t = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? Te(e, r) : Ne(e, r) : _e(e, r);
						o += t.value, s = r += t.size
					}
				}
				throw ne(e.source, r, "Unterminated string.")
			}

			function Te(e, t) {
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
					if ((i = i << 4 | Oe(e)) < 0) break
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)
			}

			function Ne(e, t) {
				const n = e.source.body,
					i = Ie(n, t + 2);
				if (ce(i)) return {
					value: String.fromCodePoint(i),
					size: 6
				};
				if (le(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
					const e = Ie(n, t + 8);
					if (pe(e)) return {
						value: String.fromCodePoint(i, e),
						size: 12
					}
				}
				throw ne(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
			}

			function Ie(e, t) {
				return Oe(e.charCodeAt(t)) << 12 | Oe(e.charCodeAt(t + 1)) << 8 | Oe(e.charCodeAt(t + 2)) << 4 | Oe(e.charCodeAt(t + 3))
			}

			function Oe(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function _e(e, t) {
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

			function xe(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = e.lineStart,
					s = t + 3,
					o = s,
					a = "";
				const c = [];
				for (; s < i;) {
					const i = n.charCodeAt(s);
					if (34 === i && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)) {
						a += n.slice(o, s), c.push(a);
						const i = fe(e, se.BLOCK_STRING, t, s + 3, j(c).join("\n"));
						return e.line += c.length - 1, e.lineStart = r, i
					}
					if (92 !== i || 34 !== n.charCodeAt(s + 1) || 34 !== n.charCodeAt(s + 2) || 34 !== n.charCodeAt(s + 3))
						if (10 !== i && 13 !== i)
							if (ce(i)) ++s;
							else {
								if (!ue(n, s)) throw ne(e.source, s, `Invalid character within String: ${he(e,s)}.`);
								s += 2
							}
					else a += n.slice(o, s), c.push(a), 13 === i && 10 === n.charCodeAt(s + 1) ? s += 2 : ++s, a = "", o = s, r = s;
					else a += n.slice(o, s), o = s + 1, s += 4
				}
				throw ne(e.source, s, "Unterminated string.")
			}

			function ke(e, t) {
				const n = e.source.body,
					i = n.length;
				let r = t + 1;
				for (; r < i;) {
					if (!M(n.charCodeAt(r))) break;
					++r
				}
				return fe(e, se.NAME, t, r, n.slice(t, r))
			}
			const Ae = function(e, t) {
				return e instanceof t
			};
			class be {
				constructor(e, t = "GraphQL request", n = {
					line: 1,
					column: 1
				}) {
					"string" == typeof e || E(!1, `Body must be a string. Received: ${T(e)}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || E(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || E(!1, "column in locationOffset is 1-indexed and must be positive.")
				}
				get[Symbol.toStringTag]() {
					return "Source"
				}
			}
			class ge {
				constructor(e, t) {
					const n = function(e) {
						return Ae(e, be)
					}(e) ? e : new be(e);
					this._lexer = new ae(n), this._options = t
				}
				parseName() {
					const e = this.expectToken(se.NAME);
					return this.node(e, {
						kind: g.NAME,
						value: e.value
					})
				}
				parseDocument() {
					return this.node(this._lexer.token, {
						kind: g.DOCUMENT,
						definitions: this.many(se.SOF, this.parseDefinition, se.EOF)
					})
				}
				parseDefinition() {
					if (this.peek(se.BRACE_L)) return this.parseOperationDefinition();
					const e = this.peekDescription(),
						t = e ? this._lexer.lookahead() : this._lexer.token;
					if (t.kind === se.NAME) {
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
					if (this.peek(se.BRACE_L)) return this.node(e, {
						kind: g.OPERATION_DEFINITION,
						operation: A.QUERY,
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet()
					});
					const t = this.parseOperationType();
					let n;
					return this.peek(se.NAME) && (n = this.parseName()), this.node(e, {
						kind: g.OPERATION_DEFINITION,
						operation: t,
						name: n,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseOperationType() {
					const e = this.expectToken(se.NAME);
					switch (e.value) {
						case "query":
							return A.QUERY;
						case "mutation":
							return A.MUTATION;
						case "subscription":
							return A.SUBSCRIPTION
					}
					throw this.unexpected(e)
				}
				parseVariableDefinitions() {
					return this.optionalMany(se.PAREN_L, this.parseVariableDefinition, se.PAREN_R)
				}
				parseVariableDefinition() {
					return this.node(this._lexer.token, {
						kind: g.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(se.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(se.EQUALS) ? this.parseConstValueLiteral() : void 0,
						directives: this.parseConstDirectives()
					})
				}
				parseVariable() {
					const e = this._lexer.token;
					return this.expectToken(se.DOLLAR), this.node(e, {
						kind: g.VARIABLE,
						name: this.parseName()
					})
				}
				parseSelectionSet() {
					return this.node(this._lexer.token, {
						kind: g.SELECTION_SET,
						selections: this.many(se.BRACE_L, this.parseSelection, se.BRACE_R)
					})
				}
				parseSelection() {
					return this.peek(se.SPREAD) ? this.parseFragment() : this.parseField()
				}
				parseField() {
					const e = this._lexer.token,
						t = this.parseName();
					let n, i;
					return this.expectOptionalToken(se.COLON) ? (n = t, i = this.parseName()) : i = t, this.node(e, {
						kind: g.FIELD,
						alias: n,
						name: i,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(se.BRACE_L) ? this.parseSelectionSet() : void 0
					})
				}
				parseArguments(e) {
					const t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(se.PAREN_L, t, se.PAREN_R)
				}
				parseArgument(e = !1) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(se.COLON), this.node(t, {
						kind: g.ARGUMENT,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseConstArgument() {
					return this.parseArgument(!0)
				}
				parseFragment() {
					const e = this._lexer.token;
					this.expectToken(se.SPREAD);
					const t = this.expectOptionalKeyword("on");
					return !t && this.peek(se.NAME) ? this.node(e, {
						kind: g.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1)
					}) : this.node(e, {
						kind: g.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					})
				}
				parseFragmentDefinition() {
					var e;
					const t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacyFragmentVariables) ? this.node(t, {
						kind: g.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet()
					}) : this.node(t, {
						kind: g.FRAGMENT_DEFINITION,
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
						case se.BRACKET_L:
							return this.parseList(e);
						case se.BRACE_L:
							return this.parseObject(e);
						case se.INT:
							return this._lexer.advance(), this.node(t, {
								kind: g.INT,
								value: t.value
							});
						case se.FLOAT:
							return this._lexer.advance(), this.node(t, {
								kind: g.FLOAT,
								value: t.value
							});
						case se.STRING:
						case se.BLOCK_STRING:
							return this.parseStringLiteral();
						case se.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return this.node(t, {
										kind: g.BOOLEAN,
										value: !0
									});
								case "false":
									return this.node(t, {
										kind: g.BOOLEAN,
										value: !1
									});
								case "null":
									return this.node(t, {
										kind: g.NULL
									});
								default:
									return this.node(t, {
										kind: g.ENUM,
										value: t.value
									})
							}
							case se.DOLLAR:
								if (e) {
									if (this.expectToken(se.DOLLAR), this._lexer.token.kind === se.NAME) {
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
						kind: g.STRING,
						value: e.value,
						block: e.kind === se.BLOCK_STRING
					})
				}
				parseList(e) {
					return this.node(this._lexer.token, {
						kind: g.LIST,
						values: this.any(se.BRACKET_L, () => this.parseValueLiteral(e), se.BRACKET_R)
					})
				}
				parseObject(e) {
					return this.node(this._lexer.token, {
						kind: g.OBJECT,
						fields: this.any(se.BRACE_L, () => this.parseObjectField(e), se.BRACE_R)
					})
				}
				parseObjectField(e) {
					const t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(se.COLON), this.node(t, {
						kind: g.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e)
					})
				}
				parseDirectives(e) {
					const t = [];
					for (; this.peek(se.AT);) t.push(this.parseDirective(e));
					return t
				}
				parseConstDirectives() {
					return this.parseDirectives(!0)
				}
				parseDirective(e) {
					const t = this._lexer.token;
					return this.expectToken(se.AT), this.node(t, {
						kind: g.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e)
					})
				}
				parseTypeReference() {
					const e = this._lexer.token;
					let t;
					if (this.expectOptionalToken(se.BRACKET_L)) {
						const n = this.parseTypeReference();
						this.expectToken(se.BRACKET_R), t = this.node(e, {
							kind: g.LIST_TYPE,
							type: n
						})
					} else t = this.parseNamedType();
					return this.expectOptionalToken(se.BANG) ? this.node(e, {
						kind: g.NON_NULL_TYPE,
						type: t
					}) : t
				}
				parseNamedType() {
					return this.node(this._lexer.token, {
						kind: g.NAMED_TYPE,
						name: this.parseName()
					})
				}
				peekDescription() {
					return this.peek(se.STRING) || this.peek(se.BLOCK_STRING)
				}
				parseDescription() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}
				parseSchemaDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					const n = this.parseConstDirectives(),
						i = this.many(se.BRACE_L, this.parseOperationTypeDefinition, se.BRACE_R);
					return this.node(e, {
						kind: g.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: i
					})
				}
				parseOperationTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(se.COLON);
					const n = this.parseNamedType();
					return this.node(e, {
						kind: g.OPERATION_TYPE_DEFINITION,
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
						kind: g.SCALAR_TYPE_DEFINITION,
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
						s = this.parseFieldsDefinition();
					return this.node(e, {
						kind: g.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: s
					})
				}
				parseImplementsInterfaces() {
					return this.expectOptionalKeyword("implements") ? this.delimitedMany(se.AMP, this.parseNamedType) : []
				}
				parseFieldsDefinition() {
					return this.optionalMany(se.BRACE_L, this.parseFieldDefinition, se.BRACE_R)
				}
				parseFieldDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseArgumentDefs();
					this.expectToken(se.COLON);
					const r = this.parseTypeReference(),
						s = this.parseConstDirectives();
					return this.node(e, {
						kind: g.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						type: r,
						directives: s
					})
				}
				parseArgumentDefs() {
					return this.optionalMany(se.PAREN_L, this.parseInputValueDef, se.PAREN_R)
				}
				parseInputValueDef() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(se.COLON);
					const i = this.parseTypeReference();
					let r;
					this.expectOptionalToken(se.EQUALS) && (r = this.parseConstValueLiteral());
					const s = this.parseConstDirectives();
					return this.node(e, {
						kind: g.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: i,
						defaultValue: r,
						directives: s
					})
				}
				parseInterfaceTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					const n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseConstDirectives(),
						s = this.parseFieldsDefinition();
					return this.node(e, {
						kind: g.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: s
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
						kind: g.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						types: r
					})
				}
				parseUnionMemberTypes() {
					return this.expectOptionalToken(se.EQUALS) ? this.delimitedMany(se.PIPE, this.parseNamedType) : []
				}
				parseEnumTypeDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					const n = this.parseName(),
						i = this.parseConstDirectives(),
						r = this.parseEnumValuesDefinition();
					return this.node(e, {
						kind: g.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						values: r
					})
				}
				parseEnumValuesDefinition() {
					return this.optionalMany(se.BRACE_L, this.parseEnumValueDefinition, se.BRACE_R)
				}
				parseEnumValueDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseEnumValueName(),
						i = this.parseConstDirectives();
					return this.node(e, {
						kind: g.ENUM_VALUE_DEFINITION,
						description: t,
						name: n,
						directives: i
					})
				}
				parseEnumValueName() {
					if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw ne(this._lexer.source, this._lexer.token.start, `${De(this._lexer.token)} is reserved and cannot be used for an enum value.`);
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
						kind: g.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						fields: r
					})
				}
				parseInputFieldsDefinition() {
					return this.optionalMany(se.BRACE_L, this.parseInputValueDef, se.BRACE_R)
				}
				parseTypeSystemExtension() {
					const e = this._lexer.lookahead();
					if (e.kind === se.NAME) switch (e.value) {
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
						n = this.optionalMany(se.BRACE_L, this.parseOperationTypeDefinition, se.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return this.node(e, {
						kind: g.SCHEMA_EXTENSION,
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
						kind: g.SCALAR_TYPE_EXTENSION,
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
						kind: g.OBJECT_TYPE_EXTENSION,
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
						kind: g.INTERFACE_TYPE_EXTENSION,
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
						kind: g.UNION_TYPE_EXTENSION,
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
						kind: g.ENUM_TYPE_EXTENSION,
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
						kind: g.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: i
					})
				}
				parseDirectiveDefinition() {
					const e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(se.AT);
					const n = this.parseName(),
						i = this.parseArgumentDefs(),
						r = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					const s = this.parseDirectiveLocations();
					return this.node(e, {
						kind: g.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						repeatable: r,
						locations: s
					})
				}
				parseDirectiveLocations() {
					return this.delimitedMany(se.PIPE, this.parseDirectiveLocation)
				}
				parseDirectiveLocation() {
					const e = this._lexer.token,
						t = this.parseName();
					if (Object.prototype.hasOwnProperty.call(ie, t.value)) return t;
					throw this.unexpected(e)
				}
				node(e, t) {
					var n;
					return !0 !== (null === (n = this._options) || void 0 === n ? void 0 : n.noLocation) && (t.loc = new I(e, this._lexer.lastToken, this._lexer.source)), t
				}
				peek(e) {
					return this._lexer.token.kind === e
				}
				expectToken(e) {
					const t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw ne(this._lexer.source, t.start, `Expected ${Se(e)}, found ${De(t)}.`)
				}
				expectOptionalToken(e) {
					return this._lexer.token.kind === e && (this._lexer.advance(), !0)
				}
				expectKeyword(e) {
					const t = this._lexer.token;
					if (t.kind !== se.NAME || t.value !== e) throw ne(this._lexer.source, t.start, `Expected "${e}", found ${De(t)}.`);
					this._lexer.advance()
				}
				expectOptionalKeyword(e) {
					const t = this._lexer.token;
					return t.kind === se.NAME && t.value === e && (this._lexer.advance(), !0)
				}
				unexpected(e) {
					const t = null != e ? e : this._lexer.token;
					return ne(this._lexer.source, t.start, `Unexpected ${De(t)}.`)
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

			function De(e) {
				const t = e.value;
				return Se(e.kind) + (null != t ? ` "${t}"` : "")
			}

			function Se(e) {
				return function(e) {
					return e === se.BANG || e === se.DOLLAR || e === se.AMP || e === se.PAREN_L || e === se.PAREN_R || e === se.SPREAD || e === se.COLON || e === se.EQUALS || e === se.AT || e === se.BRACKET_L || e === se.BRACKET_R || e === se.BRACE_L || e === se.PIPE || e === se.BRACE_R
				}(e) ? `"${e}"` : e
			}

			function Ce(e, t) {
				return t.tag = e, t
			}

			function Re() {}

			function Le(e) {
				return function(t) {
					var n = e.length;
					let i = !1,
						r = !1,
						s = !1,
						o = 0;
					t(Ce(0, [function(a) {
						if (a) i = !0;
						else if (r) s = !0;
						else {
							for (r = s = !0; s && !i;) o < n ? (a = e[o], o = o + 1 | 0, s = !1, t(Ce(1, [a]))) : (i = !0, t(0));
							r = !1
						}
					}]))
				}
			}

			function we() {}

			function Fe(e) {
				e(0)
			}

			function Pe(e) {
				return e(0)
			}

			function Me(e) {
				return function(t) {
					return function(n) {
						let i = Re,
							r = !1,
							s = [],
							o = !1;
						t((function(t) {
							"number" == typeof t ? o || (o = !0, 0 === s.length && n(0)) : t.tag ? o || (r = !1, function(e) {
								function t(e) {
									"number" == typeof e ? 0 !== s.length && (e = 0 === (s = s.filter(a)).length, o && e ? n(0) : !r && e && (r = !0, i(0))) : e.tag ? 0 !== s.length && (n(Ce(1, [e[0]])), c(0)) : (c = e = e[0], s = s.concat(e), e(0))
								}

								function a(e) {
									return e !== c
								}
								let c = Re;
								1 === e.length ? e(t) : e.bind(null, t)
							}(e(t[0])), r || (r = !0, i(0))) : i = t[0]
						})), n(Ce(0, [function(e) {
							e ? (o || (o = !0, i(e)), s.forEach((function(t) {
								return t(e)
							})), s = []) : (r || o ? r = !1 : (r = !0, i(0)), s.forEach(Pe))
						}]))
					}
				}
			}

			function je(e) {
				return e
			}

			function Ue(e) {
				return function(t) {
					return function(n) {
						let i = !1;
						return t((function(t) {
							if ("number" == typeof t) i || (i = !0, n(t));
							else if (t.tag) i || (e(t[0]), n(t));
							else {
								var r = t[0];
								n(Ce(0, [function(e) {
									if (!i) return e && (i = !0), r(e)
								}]))
							}
						}))
					}
				}
			}

			function Be(e) {
				e(0)
			}

			function Ve(e) {
				return function(t) {
					return function(n) {
						let i = [],
							r = Re;
						return t((function(t) {
							"number" == typeof t ? Le(i)(n) : t.tag ? (i.length >= e && 0 < e && i.shift(), i.push(t[0]), r(0)) : (t = t[0], 0 >= e ? (t(1), function(e) {
								let t = !1;
								e(Ce(0, [function(n) {
									n ? t = !0 : t || e(0)
								}]))
							}(n)) : (r = t, t(0)))
						}))
					}
				}
			}

			function qe(e) {
				return function(t) {
					let n = Re,
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
						let i = Re;
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? e(t[0]) ? n(t) : i(0) : (i = t[0], n(t))
						}))
					}
				}
			}

			function Ye(e) {
				return function(t) {
					let n = !1;
					t(Ce(0, [function(i) {
						i ? n = !0 : n || (n = !0, t(Ce(1, [e])), t(0))
					}]))
				}
			}

			function Je(e) {
				return function(t) {
					let n = we,
						i = !1;
					n = e({
						next: function(e) {
							i || t(Ce(1, [e]))
						},
						complete: function() {
							i || (i = !0, t(0))
						}
					}), t(Ce(0, [function(e) {
						if (e && !i) return i = !0, n()
					}]))
				}
			}

			function $e(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							t = "number" == typeof t ? 0 : t.tag ? Ce(1, [e(t[0])]) : Ce(0, [t[0]]), n(t)
						}))
					}
				}
			}

			function Qe(e) {
				return Me(je)(Le(e))
			}

			function Xe(e) {
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
								n(Ce(0, [function(t) {
									if (!i) return t ? (i = !0, r(t), e()) : r(t)
								}]))
							}
						}))
					}
				}
			}

			function ze(e) {
				return function(t) {
					return function(n) {
						return t((function(t) {
							"number" == typeof t ? n(t) : t.tag ? n(t) : (n(t), e())
						}))
					}
				}
			}

			function He() {
				for (var e = arguments, t = arguments[0], n = 1, i = arguments.length; n < i; n++) t = e[n](t);
				return t
			}

			function We(e) {
				function t(e) {
					"number" == typeof e ? (n.forEach(Be), n = []) : e.tag ? (r = !1, n.forEach((function(t) {
						t(e)
					}))) : i = e[0]
				}
				let n = [],
					i = Re,
					r = !1;
				return function(s) {
					function o(e) {
						return e !== s
					}
					1 === (n = n.concat(s)).length && e(t), s(Ce(0, [function(e) {
						if (e) {
							if (0 === (n = n.filter(o)).length) return i(1)
						} else r || (r = !0, i(e))
					}]))
				}
			}

			function Ze(e) {
				return function(t) {
					return function(n) {
						let i = !1,
							r = 0,
							s = Re;
						t((function(t) {
							"number" == typeof t ? i || (i = !0, n(0)) : t.tag ? r < e && !i && (r = r + 1 | 0, n(t), !i && r >= e && (i = !0, n(0), s(1))) : (t = t[0], 0 >= e ? (i = !0, n(0), t(1)) : s = t)
						})), n(Ce(0, [function(t) {
							if (!i) {
								if (t) return i = !0, s(1);
								if (r < e) return s(0)
							}
						}]))
					}
				}
			}

			function et(e) {
				return function(t) {
					return function(n) {
						function i(e) {
							"number" != typeof e && (e.tag ? (r = !0, s(1), n(0)) : (o = e = e[0], e(0)))
						}
						let r = !1,
							s = Re,
							o = Re;
						t((function(t) {
							"number" == typeof t ? r || (r = !0, o(1), n(0)) : t.tag ? r || n(t) : (s = t[0], e(i))
						})), n(Ce(0, [function(e) {
							if (!r) return e ? (r = !0, s(1), o(1)) : s(0)
						}]))
					}
				}
			}

			function tt(e) {
				return "string" == typeof e ? new GraphQLError(e) : "object" == typeof e && e.message ? new GraphQLError(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e
			}
			"function" != typeof Symbol || (Symbol.observable || (Symbol.observable = Symbol("observable")));
			var nt = function(e) {
				function t(t) {
					var n, i, r, s = t.networkError,
						o = t.response,
						a = (t.graphQLErrors || []).map(tt),
						c = (i = a, r = "", void 0 !== (n = s) ? r = "[Network] " + n.message : (void 0 !== i && i.forEach((function(e) {
							r += "[GraphQL] " + e.message + "\n"
						})), r.trim()));
					e.call(this, c), this.name = "CombinedError", this.message = c, this.graphQLErrors = a, this.networkError = s, this.response = o
				}
				return e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)).constructor = t, t.prototype.toString = function() {
					return this.message
				}, t
			}(Error);

			function it(e, t) {
				e |= 0;
				for (var n = 0, i = 0 | t.length; n < i; n++) e = (e << 5) + e + t.charCodeAt(n);
				return e
			}

			function rt(e) {
				return it(5381, e) >>> 0
			}
			var st = new Set,
				ot = new WeakMap;

			function at(e) {
				return st.clear(),
					function e(t) {
						if (null === t || st.has(t)) return "null";
						if ("object" != typeof t) return JSON.stringify(t) || "";
						if (t.toJSON) return e(t.toJSON());
						if (Array.isArray(t)) {
							for (var n = "[", i = 0, r = t.length; i < r; i++) {
								i > 0 && (n += ",");
								var s = e(t[i]);
								n += s.length > 0 ? s : "null"
							}
							return n + "]"
						}
						var o = Object.keys(t).sort();
						if (!o.length && t.constructor && t.constructor !== Object) {
							var a = ot.get(t) || Math.random().toString(36).slice(2);
							return ot.set(t, a), '{"__key":"' + a + '"}'
						}
						st.add(t);
						for (var c = "{", u = 0, l = o.length; u < l; u++) {
							var p = o[u],
								h = e(t[p]);
							h && (c.length > 1 && (c += ","), c += e(p) + ":" + h)
						}
						return st.delete(t), c + "}"
					}(e)
			}

			function ct(e) {
				var t = ("string" != typeof e ? e.loc && e.loc.source.body || K(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
				if ("string" != typeof e) {
					var n = "definitions" in e && ht(e);
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
			var ut = new Map;

			function lt(e) {
				var t, n;
				return "string" == typeof e ? (t = rt(ct(e)), n = ut.get(t) || new ge(e, {
					noLocation: !0
				}).parseDocument()) : (t = e.__key || rt(ct(e)), n = ut.get(t) || e), n.loc || ct(n), n.__key = t, ut.set(t, n), n
			}

			function pt(e, t) {
				t || (t = {});
				var n = lt(e);
				return {
					key: it(n.__key, at(t)) >>> 0,
					query: n,
					variables: t
				}
			}

			function ht(e) {
				for (var t = 0, n = e.definitions.length; t < n; t++) {
					var i = e.definitions[t];
					if (i.kind === g.OPERATION_DEFINITION && i.name) return i.name.value
				}
			}

			function ft() {
				return (ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}

			function dt(e, t, n) {
				if (!("data" in t) && !("errors" in t) || "path" in t) throw new Error("No Content");
				return {
					operation: e,
					data: t.data,
					error: Array.isArray(t.errors) ? new nt({
						graphQLErrors: t.errors,
						response: n
					}) : void 0,
					extensions: "object" == typeof t.extensions && t.extensions || void 0,
					hasNext: !!t.hasNext
				}
			}

			function vt(e, t, n) {
				var i = ft({}, e);
				if (i.hasNext = !!t.hasNext, !("path" in t)) return "data" in t && (i.data = t.data), i;
				Array.isArray(t.errors) && (i.error = new nt({
					graphQLErrors: i.error ? i.error.graphQLErrors.concat(t.errors) : t.errors,
					response: n
				}));
				for (var r, s = i.data = ft({}, i.data), o = 0; o < t.path.length;) s = s[r = t.path[o++]] = Array.isArray(s[r]) ? [].concat(s[r]) : ft({}, s[r]);
				return ft(s, t.data), i
			}

			function Et(e) {
				return "query" === e.kind && !!e.context.preferGetMethod
			}

			function yt(e) {
				return {
					query: K(e.query),
					operationName: ht(e.query),
					variables: e.variables || void 0,
					extensions: void 0
				}
			}

			function mt(e, t) {
				var n = Et(e),
					i = e.context.url;
				if (!n || !t) return i;
				var r = [];
				return t.operationName && r.push("operationName=" + encodeURIComponent(t.operationName)), t.query && r.push("query=" + encodeURIComponent(t.query.replace(/#[^\n\r]+/g, " ").trim())), t.variables && r.push("variables=" + encodeURIComponent(at(t.variables))), t.extensions && r.push("extensions=" + encodeURIComponent(at(t.extensions))), i + "?" + r.join("&")
			}

			function Tt(e, t) {
				var n = Et(e),
					i = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
				return ft({}, i, {
					body: !n && t ? JSON.stringify(t) : void 0,
					method: n ? "GET" : "POST",
					headers: n ? i.headers : ft({}, {
						"content-type": "application/json"
					}, i.headers)
				})
			}
			var Nt = "undefined" != typeof Symbol ? Symbol.asyncIterator : null,
				It = "undefined" != typeof TextDecoder ? new TextDecoder : null,
				Ot = /content-type:[^\r\n]*application\/json/i,
				_t = /boundary="?([^=";]+)"?/i;

			function xt(e, t, n) {
				var i = "manual" === n.redirect ? 400 : 300,
					r = e.context.fetch;
				return Je((function(s) {
					var o = s.next,
						a = s.complete,
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
										e(dt(t, i, n))
									}));
									var r, s = "---",
										o = i.match(_t);
									o && (s = "--" + o[1]);
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
										h = null,
										f = null;
									return r().then((function i(o) {
										if (!o.done) {
											var a = "Buffer" === (T = o.value).constructor.name ? T.toString() : It.decode(T),
												c = a.indexOf(s);
											for (c > -1 ? c += l.length : c = l.indexOf(s), l += a; c > -1;) {
												var u = l.slice(0, c),
													d = l.slice(c + s.length);
												if (p) p = !1;
												else {
													var v = u.indexOf("\r\n\r\n") + 4,
														E = u.slice(0, v),
														y = u.slice(v, u.lastIndexOf("\r\n")),
														m = void 0;
													if (Ot.test(E)) try {
														m = JSON.parse(y), h = f = f ? vt(f, m, n) : dt(t, m, n)
													} catch (T) {}
													if ("--" === d.slice(0, 2) || m && !m.hasNext) {
														if (!f) return e(dt(t, {}, n));
														break
													}
												}
												c = (l = d).indexOf(s)
											}
										}
										var T;
										if (h && (e(h), h = null), !o.done && (!f || f.hasNext)) return r().then(i)
									})).finally(a)
								}(o, e, u)
						})).then(a).catch((function(t) {
							if ("AbortError" !== t.name) {
								var n = function(e, t, n) {
									return {
										operation: e,
										data: void 0,
										error: new nt({
											networkError: t,
											response: n
										}),
										extensions: void 0
									}
								}(e, p ? new Error(u.statusText) : t, u);
								o(n), a()
							}
						})),
						function() {
							l = !0, c && c.abort()
						}
				}))
			}

			function kt(e) {
				return Object.keys(function e(t, n) {
					if (Array.isArray(t))
						for (var i = 0; i < t.length; i++) e(t[i], n);
					else if ("object" == typeof t && null !== t)
						for (var r in t) "__typename" === r && "string" == typeof t[r] ? n[t[r]] = 0 : e(t[r], n);
					return n
				}(e, {}))
			}
			var At = function(e) {
					if (e.selectionSet && !e.selectionSet.selections.some((function(e) {
							return e.kind === g.FIELD && "__typename" === e.name.value && !e.alias
						}))) return ft({}, e, {
						selectionSet: ft({}, e.selectionSet, {
							selections: e.selectionSet.selections.concat([{
								kind: g.FIELD,
								name: {
									kind: g.NAME,
									value: "__typename"
								}
							}])
						})
					})
				},
				bt = new Map;

			function gt(e) {
				return e && "object" == typeof e ? Object.keys(e).reduce((function(t, n) {
					var i = e[n];
					return "__typename" === n ? Object.defineProperty(t, "__typename", {
						enumerable: !1,
						value: i
					}) : Array.isArray(i) ? t[n] = i.map(gt) : t[n] = i && "object" == typeof i && "__typename" in i ? gt(i) : i, t
				}), Array.isArray(e) ? [] : {}) : e
			}

			function Dt(e) {
				return e.toPromise = function() {
					return t = Ze(1)(Ge((function(e) {
						return !e.stale && !e.hasNext
					}))(e)), new Promise((function(e) {
						Ve(1)(t)((function(t) {
							"number" != typeof t && (t.tag ? e(t[0]) : t[0](0))
						}))
					}));
					var t
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
				return St(e.kind, e, ft({}, e.context, {
					meta: ft({}, e.context.meta, t)
				}))
			}

			function Rt() {}

			function Lt(e) {
				var t = e.kind;
				return "mutation" !== t && "query" !== t
			}

			function wt(e) {
				var t = e.forward,
					n = e.client;
				e.dispatchDebug;
				var i = new Map,
					r = Object.create(null);

				function s(e) {
					var t = St(e.kind, e);
					return t.query = function(e) {
						var t = lt(e),
							n = bt.get(t.__key);
						return n || (n = C(t, {
							Field: At,
							InlineFragment: At
						}), Object.defineProperty(n, "__key", {
							value: t.__key,
							enumerable: !1
						}), bt.set(t.__key, n)), n
					}(e.query), t
				}

				function o(e) {
					var t = e.context.requestPolicy;
					return "query" === e.kind && "network-only" !== t && ("cache-only" === t || i.has(e.key))
				}
				return function(e) {
					var a = We(e),
						c = $e((function(e) {
							var t = i.get(e.key),
								r = ft({}, t, {
									operation: Ct(e, {
										cacheOutcome: t ? "hit" : "miss"
									})
								});
							return "cache-and-network" === e.context.requestPolicy && (r.stale = !0, Ft(n, e)), r
						}))(Ge((function(e) {
							return !Lt(e) && o(e)
						}))(a)),
						u = Ue((function(e) {
							var t = e.operation;
							if (t) {
								var s = kt(e.data).concat(t.context.additionalTypenames || []);
								if ("mutation" === e.operation.kind) {
									for (var o = new Set, a = 0; a < s.length; a++) {
										var c = s[a],
											u = r[c] || (r[c] = new Set);
										u.forEach((function(e) {
											o.add(e)
										})), u.clear()
									}
									o.forEach((function(e) {
										i.has(e) && (t = i.get(e).operation, i.delete(e), Ft(n, t))
									}))
								} else if ("query" === t.kind && e.data) {
									i.set(t.key, e);
									for (var l = 0; l < s.length; l++) {
										var p = s[l];
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
						}))(Qe([$e(s)(Ge((function(e) {
							return !Lt(e) && !o(e)
						}))(a)), Ge((function(e) {
							return Lt(e)
						}))(a)])))));
					return Qe([c, u])
				}
			}

			function Ft(e, t) {
				return e.reexecuteOperation(St(t.kind, t, ft({}, t.context, {
					requestPolicy: "network-only"
				})))
			}

			function Pt(e) {
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
					return Ue(r)(t(n))
				}
			}

			function Mt(e) {
				var t = e.forward;
				return e.dispatchDebug,
					function(e) {
						var n = We(e);
						return Qe([Me((function(e) {
							var t = e.key,
								i = Ge((function(e) {
									return "teardown" === e.kind && e.key === t
								}))(n),
								r = yt(e),
								s = mt(e, r),
								o = Tt(e, r);
							return Ue((function(e) {
								e.data || e.error
							}))(et(i)(xt(e, s, o)))
						}))(Ge((function(e) {
							return "query" === e.kind || "mutation" === e.kind
						}))(n)), t(Ge((function(e) {
							return "query" !== e.kind && "mutation" !== e.kind
						}))(n))])
					}
			}

			function jt(e) {
				return e.dispatchDebug,
					function(e) {
						return Ge((function() {
							return !1
						}))(Ue((function(e) {
							e.kind
						}))(e))
					}
			}
			jt({
				dispatchDebug: Rt
			});
			var Ut = [Pt, wt, Mt],
				Bt = function e(t) {
					var n = new Map,
						i = new Map,
						r = [],
						s = function() {
							let e = [],
								t = !1;
							return {
								source: function(t) {
									function n(e) {
										return e !== t
									}
									e = e.concat(t), t(Ce(0, [function(t) {
										t && (e = e.filter(n))
									}]))
								},
								next: function(n) {
									t || e.forEach((function(e) {
										e(Ce(1, [n]))
									}))
								},
								complete: function() {
									t || (t = !0, e.forEach(Fe))
								}
							}
						}(),
						o = s.source,
						a = s.next,
						c = !1;

					function u(e) {
						for (c = !0, e && a(e); e = r.shift();) a(e);
						c = !1
					}

					function l(e) {
						var t = Ge((function(t) {
							return t.operation.kind === e.kind && t.operation.key === e.key
						}))(f);
						return p.maskTypename && (t = $e((function(e) {
							return ft({}, e, {
								data: gt(e.data)
							})
						}))(t)), "mutation" === e.kind ? Ze(1)(ze((function() {
							return u(e)
						}))(t)) : We(Xe((function() {
							n.delete(e.key), i.delete(e.key);
							for (var t = r.length - 1; t >= 0; t--) r[t].key === e.key && r.splice(t, 1);
							u(St("teardown", e, e.context))
						}))(Ue((function(t) {
							n.set(e.key, t)
						}))(function(e) {
							return function(t) {
								return function(n) {
									function i(e) {
										a && ("number" == typeof e ? (a = !1, u ? n(e) : s || (s = !0, r(0))) : e.tag ? (n(e), c ? c = !1 : o(0)) : (o = e = e[0], c = !1, e(0)))
									}
									let r = Re,
										s = !1,
										o = Re,
										a = !1,
										c = !1,
										u = !1;
									t((function(t) {
										"number" == typeof t ? u || (u = !0, a || n(0)) : t.tag ? u || (a && (o(1), o = Re), s ? s = !1 : (s = !0, r(0)), t = e(t[0]), a = !0, t(i)) : r = t[0]
									})), n(Ce(0, [function(e) {
										if (e) {
											if (u || (u = !0, r(1)), a) return a = !1, o(1)
										} else u || s || (s = !0, r(0)), a && !c && (c = !0, o(0))
									}]))
								}
							}
						}((function(t) {
							return "query" !== e.kind || t.stale ? Ye(t) : Qe([Ye(t), $e((function() {
								return ft({}, t, {
									stale: !0
								})
							}))(Ze(1)(Ge((function(t) {
								return "query" === t.kind && t.key === e.key && "cache-only" !== t.context.requestPolicy
							}))(o)))])
						}))(et(Ge((function(t) {
							return "teardown" === t.kind && t.key === e.key
						}))(o))(t)))))
					}
					var p = ft(this instanceof e ? this : Object.create(e.prototype), {
							url: t.url,
							fetchOptions: t.fetchOptions,
							fetch: t.fetch,
							suspense: !!t.suspense,
							requestPolicy: t.requestPolicy || "cache-first",
							preferGetMethod: !!t.preferGetMethod,
							maskTypename: !!t.maskTypename,
							operations$: o,
							reexecuteOperation: function(e) {
								("mutation" === e.kind || i.has(e.key)) && (r.push(e), c || Promise.resolve().then(u))
							},
							createOperationContext: function(e) {
								return e || (e = {}), ft({}, {
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
										if (i.kind === g.OPERATION_DEFINITION) return i.operation
									}
								}(t.query), St(e, t, p.createOperationContext(n))
							},
							executeRequestOperation: function(e) {
								return "mutation" === e.kind ? l(e) : Je((function(t) {
									var r = i.get(e.key);
									r || i.set(e.key, r = l(e));
									var s = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
									return qe(t.next)(Xe(t.complete)(ze((function() {
										var i = n.get(e.key);
										if ("subscription" === e.kind) return u(e);
										s && u(e), null != i && i === n.get(e.key) ? t.next(s ? ft({}, i, {
											stale: !0
										}) : i) : s || u(e)
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
								return n && "boolean" == typeof n.suspense || (n = ft({}, n, {
									suspense: !1
								})), Dt(p.executeQuery(pt(e, t), n))
							},
							readQuery: function(e, t, n) {
								var i = null;
								return qe((function(e) {
									i = e
								}))(p.query(e, t, n)).unsubscribe(), i
							},
							subscription: function(e, t, n) {
								return p.executeSubscription(pt(e, t), n)
							},
							mutation: function(e, t, n) {
								return Dt(p.executeMutation(pt(e, t), n))
							}
						}),
						h = Rt,
						f = We(function(e) {
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
							dispatchDebug: h,
							forward: jt({
								dispatchDebug: h
							})
						})(o));
					return function(e) {
						qe(Ke)(e)
					}(f), p
				},
				Vt = Bt({
					url: "/graphql"
				}),
				qt = Object(i.createContext)(Vt),
				Kt = qt.Provider;

			function Gt() {
				return (Gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			qt.Consumer, qt.displayName = "UrqlContext";
			var Yt = {
				fetching: !1,
				stale: !1,
				error: void 0,
				data: void 0,
				extensions: void 0,
				operation: void 0
			};

			function Jt(e, t) {
				var n = Gt({}, e, t, {
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
			var $t = !1;

			function Qt(e) {
				var t, n, r = Object(i.useContext)(qt),
					s = function(e) {
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
					o = (t = r, n = e.context, t.suspense && (!n || !1 !== n.suspense)),
					a = function(e, t) {
						var n = Object(i.useRef)(void 0);
						return Object(i.useMemo)((function() {
							var i = pt(e, t);
							return void 0 !== n.current && n.current.key === i.key ? n.current : (n.current = i, i)
						}), [e, t])
					}(e.query, e.variables),
					c = Object(i.useMemo)((function() {
						if (e.pause) return null;
						var t = r.executeQuery(a, Gt({}, {
							requestPolicy: e.requestPolicy
						}, e.context));
						return o ? Ue((function(e) {
							s.set(a.key, e)
						}))(t) : t
					}), [s, r, a, o, e.pause, e.requestPolicy, e.context]),
					u = Object(i.useCallback)((function(e, t) {
						if (!e) return {
							fetching: !1
						};
						var n = s.get(a.key);
						if (n) {
							if (t && null != n && "then" in n) throw n
						} else {
							var i, r = qe((function(e) {
								n = e, i && i(n)
							}))(function(e) {
								return function(t) {
									return function(n) {
										let i = Re,
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
								var o = new Promise((function(e) {
									i = e
								}));
								throw s.set(a.key, o), o
							}
							r.unsubscribe()
						}
						return n || {
							fetching: !0
						}
					}), [s, a]),
					l = [r, a, e.requestPolicy, e.context, e.pause],
					p = Object(i.useState)((function() {
						$t = !0;
						try {
							return [c, Jt(Yt, u(c, o)), l]
						} finally {
							$t = !1
						}
					})),
					h = p[0],
					f = p[1],
					d = h[1];
				return c !== h[0] && function(e, t) {
					for (var n = 0, i = t.length; n < i; n++)
						if (e[n] !== t[n]) return !0;
					return !1
				}(h[2], l) && f([c, d = Jt(h[1], u(c, o)), l]), Object(i.useEffect)((function() {
					var e = h[0],
						t = h[2][1],
						n = !1;

					function i(e) {
						n = !0, $t || f((function(t) {
							var n = Jt(t[1], e);
							return t[1] !== n ? [t[0], n, t[2]] : t
						}))
					}
					if (e) {
						var r = qe(i)(Xe((function() {
							i({
								fetching: !1
							})
						}))(e));
						return n || i({
								fetching: !0
							}),
							function() {
								s.dispose(t.key), r.unsubscribe()
							}
					}
					i({
						fetching: !1
					})
				}), [s, h[0], h[2][1]]), [d, Object(i.useCallback)((function(t) {
					var n = Gt({}, {
						requestPolicy: e.requestPolicy
					}, e.context, t);
					f((function(e) {
						return [o ? Ue((function(e) {
							s.set(a.key, e)
						}))(r.executeQuery(a, n)) : r.executeQuery(a, n), e[1], l]
					}))
				}), [r, s, a, o, u, e.requestPolicy, e.context])]
			}
			var Xt = {
				claimfreenft: "132b72abd4d5",
				confirmeconpayment: "bc22a5f916db",
				createeconpayment: "d7a84c646f57",
				createstorefrontorder: "aa5a82dc84bb",
				getclaimednftdetails: "549dc0fe0c26",
				generatewalletverificationmessage: "cd3aac87446c",
				getnftdetails: "b79525bb760f",
				getnftsbywalletaddress: "7e0bba436a39",
				subredditcategoriesquery: "3f71115a1d95",
				updateprofileimagefromnft: "97097eb25784"
			};
			const zt = ({
				forward: e,
				dispatchDebug: t
			}) => t => {
				const n = We(t);
				return Qe([He(n, Ge(e => "query" === e.kind || "mutation" === e.kind), Me(e => (function(e, t, n) {
					const i = He(n, Ge(e => "teardown" === e.kind && e.key === t.key)),
						r = yt(t),
						s = r.operationName ? r.operationName.toLowerCase() : "",
						o = function(e, t, n) {
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
						}(e, s, r.variables);
					if (!o) throw new Error(`Error: Query ${r} does not exist in the defined query options`);
					const a = mt(t),
						c = v(d({}, Tt(t)), {
							method: "POST",
							body: JSON.stringify(o)
						});
					return He(xt(t, a, c), Me(Ye), et(i))
				})(Xt, e, n))), He(n, Ge(e => "query" !== e.kind && "mutation" !== e.kind), e)])
			};
			const Ht = "urqlClient";

			function Wt() {
				return function(e) {
					e._instances = e._instances || {};
					let t = e._instances[Ht];
					if (!t) {
						const n = [Pt, wt];
						n.push(zt), n.push(Mt), t = new Bt({
							url: e.gql.host,
							fetchOptions: e.gql.fetchOptions,
							exchanges: n
						}), e._instances[Ht] = t
					}
					return t
				}(Object(s.b)())
			}
			const Zt = ({
				children: e
			}) => {
				const t = Wt();
				return r.a.createElement(Kt, {
					value: t
				}, e)
			};
			var en = function() {
					return (en = Object.assign || function(e) {
						for (var t, n = 1, i = arguments.length; n < i; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}).apply(this, arguments)
				},
				tn = new Map,
				nn = new Map,
				rn = !0,
				sn = !1;

			function on(e) {
				return e.replace(/[\s,]+/g, " ").trim()
			}

			function an(e) {
				var t = new Set,
					n = [];
				return e.definitions.forEach((function(e) {
					if ("FragmentDefinition" === e.kind) {
						var i = e.name.value,
							r = on((o = e.loc).source.body.substring(o.start, o.end)),
							s = nn.get(i);
						s && !s.has(r) ? rn && console.warn("Warning: fragment with name " + i + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : s || nn.set(i, s = new Set), s.add(r), t.has(r) || (t.add(r), n.push(e))
					} else n.push(e);
					var o
				})), en(en({}, e), {
					definitions: n
				})
			}

			function cn(e) {
				var t = on(e);
				if (!tn.has(t)) {
					var n = Object(o.a)(e, {
						experimentalFragmentVariables: sn,
						allowLegacyFragmentVariables: sn
					});
					if (!n || "Document" !== n.kind) throw new Error("Not a valid GraphQL document.");
					tn.set(t, function(e) {
						var t = new Set(e.definitions);
						t.forEach((function(e) {
							e.loc && delete e.loc, Object.keys(e).forEach((function(n) {
								var i = e[n];
								i && "object" == typeof i && t.add(i)
							}))
						}));
						var n = e.loc;
						return n && (delete n.startToken, delete n.endToken), e
					}(an(n)))
				}
				return tn.get(t)
			}

			function un(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				"string" == typeof e && (e = [e]);
				var i = e[0];
				return t.forEach((function(t, n) {
					t && "Document" === t.kind ? i += t.loc.source.body : i += t, i += e[n + 1]
				})), cn(i)
			}
			var ln, pn = {
				gql: un,
				resetCaches: function() {
					tn.clear(), nn.clear()
				},
				disableFragmentWarnings: function() {
					rn = !1
				},
				enableExperimentalFragmentVariables: function() {
					sn = !0
				},
				disableExperimentalFragmentVariables: function() {
					sn = !1
				}
			};
			(ln = un || (un = {})).gql = pn.gql, ln.resetCaches = pn.resetCaches, ln.disableFragmentWarnings = pn.disableFragmentWarnings, ln.enableExperimentalFragmentVariables = pn.enableExperimentalFragmentVariables, ln.disableExperimentalFragmentVariables = pn.disableExperimentalFragmentVariables, un.default = un
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
			var s = 10,
				o = 2;

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
								if (t.length > o) return "[Array]";
								for (var n = Math.min(s, e.length), i = e.length - n, r = [], a = 0; a < n; ++a) r.push(c(e[a], t));
								1 === i ? r.push("... 1 more item") : i > 1 && r.push("... ".concat(i, " more items"));
								return "[" + r.join(", ") + "]"
							}(e, n);
							return function(e, t) {
								var n = Object.keys(e);
								if (0 === n.length) return "{}";
								if (t.length > o) return "[" + function(e) {
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
				return s
			})), n.d(t, "b", (function() {
				return o
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
			var s = function() {
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
			r(s);
			var o = function() {
				function e(e, t, n, i, r, s, o) {
					this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = o, this.prev = s, this.next = null
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
			r(o)
		},
		"./node_modules/graphql/language/blockString.mjs": function(e, t, n) {
			"use strict";

			function i(e) {
				var t = e.split(/\r\n|[\n\r]/g),
					n = function(e) {
						for (var t, n = !0, i = !0, r = 0, s = null, o = 0; o < e.length; ++o) switch (e.charCodeAt(o)) {
							case 13:
								10 === e.charCodeAt(o + 1) && ++o;
							case 10:
								n = !1, i = !0, r = 0;
								break;
							case 9:
							case 32:
								++r;
								break;
							default:
								i && !n && (null === s || r < s) && (s = r), i = !1
						}
						return null !== (t = s) && void 0 !== t ? t : 0
					}(e);
				if (0 !== n)
					for (var i = 1; i < t.length; i++) t[i] = t[i].slice(n);
				for (var s = 0; s < t.length && r(t[s]);) ++s;
				for (var o = t.length; o > s && r(t[o - 1]);) --o;
				return t.slice(s, o).join("\n")
			}

			function r(e) {
				for (var t = 0; t < e.length; ++t)
					if (" " !== e[t] && "\t" !== e[t]) return !1;
				return !0
			}

			function s(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = -1 === e.indexOf("\n"),
					r = " " === e[0] || "\t" === e[0],
					s = '"' === e[e.length - 1],
					o = "\\" === e[e.length - 1],
					a = !i || s || o || n,
					c = "";
				return !a || i && r || (c += "\n" + t), c += t ? e.replace(/\n/g, "\n" + t) : e, a && (c += "\n"), '"""' + c.replace(/"""/g, '\\"""') + '"""'
			}
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
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

			function s(e, t) {
				for (var n, i = /\r\n|[\n\r]/g, r = 1, s = t + 1;
					(n = i.exec(e.body)) && n.index < t;) r += 1, s = t + 1 - (n.index + n[0].length);
				return {
					line: r,
					column: s
				}
			}

			function o(e) {
				return a(e.source, s(e.source, e.start))
			}

			function a(e, t) {
				var n = e.locationOffset.column - 1,
					i = u(n) + e.body,
					r = t.line - 1,
					s = e.locationOffset.line - 1,
					o = t.line + s,
					a = 1 === t.line ? n : 0,
					l = t.column + a,
					p = "".concat(e.name, ":").concat(o, ":").concat(l, "\n"),
					h = i.split(/\r\n|[\n\r]/g),
					f = h[r];
				if (f.length > 120) {
					for (var d = Math.floor(l / 80), v = l % 80, E = [], y = 0; y < f.length; y += 80) E.push(f.slice(y, y + 80));
					return p + c([
						["".concat(o), E[0]]
					].concat(E.slice(1, d + 1).map((function(e) {
						return ["", e]
					})), [
						[" ", u(v - 1) + "^"],
						["", E[d + 1]]
					]))
				}
				return p + c([
					["".concat(o - 1), h[r - 1]],
					["".concat(o), f],
					["", u(l - 1) + "^"],
					["".concat(o + 1), h[r + 1]]
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
						return v(e, arguments, m(this).constructor)
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
				return (v = E() ? Reflect.construct : function(e, t, n) {
					var i = [null];
					i.push.apply(i, t);
					var r = new(Function.bind.apply(e, i));
					return n && y(r, n.prototype), r
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

			function y(e, t) {
				return (y = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function m(e) {
				return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var T = function(e) {
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
				var t, n, c, u, l, d = (t = v, n = E(), function() {
					var e, i = m(t);
					if (n) {
						var r = m(this).constructor;
						e = Reflect.construct(i, arguments, r)
					} else e = i.apply(this, arguments);
					return h(this, e)
				});

				function v(e, t, n, r, o, a, c) {
					var u, l, p, E, y;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, v), y = d.call(this, e);
					var m, T = Array.isArray(t) ? 0 !== t.length ? t : void 0 : t ? [t] : void 0,
						N = n;
					!N && T && (N = null === (m = T[0].loc) || void 0 === m ? void 0 : m.source);
					var I, O = r;
					!O && T && (O = T.reduce((function(e, t) {
						return t.loc && e.push(t.loc.start), e
					}), [])), O && 0 === O.length && (O = void 0), r && n ? I = r.map((function(e) {
						return s(n, e)
					})) : T && (I = T.reduce((function(e, t) {
						return t.loc && e.push(s(t.loc.source, t.loc.start)), e
					}), []));
					var _, x = c;
					if (null == x && null != a) {
						var k = a.extensions;
						"object" == i(_ = k) && null !== _ && (x = k)
					}
					return Object.defineProperties(f(y), {
						name: {
							value: "GraphQLError"
						},
						message: {
							value: e,
							enumerable: !0,
							writable: !0
						},
						locations: {
							value: null !== (u = I) && void 0 !== u ? u : void 0,
							enumerable: null != I
						},
						path: {
							value: null != o ? o : void 0,
							enumerable: null != o
						},
						nodes: {
							value: null != T ? T : void 0
						},
						source: {
							value: null !== (l = N) && void 0 !== l ? l : void 0
						},
						positions: {
							value: null !== (p = O) && void 0 !== p ? p : void 0
						},
						originalError: {
							value: a
						},
						extensions: {
							value: null !== (E = x) && void 0 !== E ? E : void 0,
							enumerable: null != x
						}
					}), null != a && a.stack ? (Object.defineProperty(f(y), "stack", {
						value: a.stack,
						writable: !0,
						configurable: !0
					}), h(y)) : (Error.captureStackTrace ? Error.captureStackTrace(f(y), v) : Object.defineProperty(f(y), "stack", {
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
									r.loc && (t += "\n\n" + o(r.loc))
								} else if (e.source && e.locations)
									for (var s = 0, c = e.locations; s < c.length; s++) {
										var u = c[s];
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
				return new T("Syntax Error: ".concat(n), void 0, e, [t])
			}
			var I = Object.freeze({
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
				O = n("./node_modules/graphql/language/ast.mjs"),
				_ = Object.freeze({
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
				x = n("./node_modules/graphql/jsutils/inspect.mjs");

			function k(e, t) {
				if (!Boolean(e)) throw new Error(t)
			}
			var A = function(e, t) {
				return e instanceof t
			};

			function b(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			var g = function() {
				function e(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request",
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
							line: 1,
							column: 1
						};
					"string" == typeof e || k(0, "Body must be a string. Received: ".concat(Object(x.a)(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || k(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || k(0, "column in locationOffset is 1-indexed and must be positive.")
				}
				var t, n, i;
				return t = e, (n = [{
					key: r,
					get: function() {
						return "Source"
					}
				}]) && b(t.prototype, n), i && b(t, i), e
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
				S = n("./node_modules/graphql/language/blockString.mjs"),
				C = function() {
					function e(e) {
						var t = new O.b(_.SOF, 0, 0, 0, 0, null);
						this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
					}
					var t = e.prototype;
					return t.advance = function() {
						return this.lastToken = this.token, this.token = this.lookahead()
					}, t.lookahead = function() {
						var e = this.token;
						if (e.kind !== _.EOF)
							do {
								var t;
								e = null !== (t = e.next) && void 0 !== t ? t : e.next = L(this, e)
							} while (e.kind === _.COMMENT);
						return e
					}, e
				}();

			function R(e) {
				return isNaN(e) ? _.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"')
			}

			function L(e, t) {
				for (var n = e.source, i = n.body, r = i.length, s = t.end; s < r;) {
					var o = i.charCodeAt(s),
						a = e.line,
						c = 1 + s - e.lineStart;
					switch (o) {
						case 65279:
						case 9:
						case 32:
						case 44:
							++s;
							continue;
						case 10:
							++s, ++e.line, e.lineStart = s;
							continue;
						case 13:
							10 === i.charCodeAt(s + 1) ? s += 2 : ++s, ++e.line, e.lineStart = s;
							continue;
						case 33:
							return new O.b(_.BANG, s, s + 1, a, c, t);
						case 35:
							return F(n, s, a, c, t);
						case 36:
							return new O.b(_.DOLLAR, s, s + 1, a, c, t);
						case 38:
							return new O.b(_.AMP, s, s + 1, a, c, t);
						case 40:
							return new O.b(_.PAREN_L, s, s + 1, a, c, t);
						case 41:
							return new O.b(_.PAREN_R, s, s + 1, a, c, t);
						case 46:
							if (46 === i.charCodeAt(s + 1) && 46 === i.charCodeAt(s + 2)) return new O.b(_.SPREAD, s, s + 3, a, c, t);
							break;
						case 58:
							return new O.b(_.COLON, s, s + 1, a, c, t);
						case 61:
							return new O.b(_.EQUALS, s, s + 1, a, c, t);
						case 64:
							return new O.b(_.AT, s, s + 1, a, c, t);
						case 91:
							return new O.b(_.BRACKET_L, s, s + 1, a, c, t);
						case 93:
							return new O.b(_.BRACKET_R, s, s + 1, a, c, t);
						case 123:
							return new O.b(_.BRACE_L, s, s + 1, a, c, t);
						case 124:
							return new O.b(_.PIPE, s, s + 1, a, c, t);
						case 125:
							return new O.b(_.BRACE_R, s, s + 1, a, c, t);
						case 34:
							return 34 === i.charCodeAt(s + 1) && 34 === i.charCodeAt(s + 2) ? U(n, s, a, c, t, e) : j(n, s, a, c, t);
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
							return P(n, s, o, a, c, t);
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
							return V(n, s, a, c, t)
					}
					throw N(n, s, w(o))
				}
				var u = e.line,
					l = 1 + s - e.lineStart;
				return new O.b(_.EOF, r, r, u, l, t)
			}

			function w(e) {
				return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(R(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(R(e), ".")
			}

			function F(e, t, n, i, r) {
				var s, o = e.body,
					a = t;
				do {
					s = o.charCodeAt(++a)
				} while (!isNaN(s) && (s > 31 || 9 === s));
				return new O.b(_.COMMENT, t, a, n, i, r, o.slice(t + 1, a))
			}

			function P(e, t, n, i, r, s) {
				var o = e.body,
					a = n,
					c = t,
					u = !1;
				if (45 === a && (a = o.charCodeAt(++c)), 48 === a) {
					if ((a = o.charCodeAt(++c)) >= 48 && a <= 57) throw N(e, c, "Invalid number, unexpected digit after 0: ".concat(R(a), "."))
				} else c = M(e, c, a), a = o.charCodeAt(c);
				if (46 === a && (u = !0, a = o.charCodeAt(++c), c = M(e, c, a), a = o.charCodeAt(c)), 69 !== a && 101 !== a || (u = !0, 43 !== (a = o.charCodeAt(++c)) && 45 !== a || (a = o.charCodeAt(++c)), c = M(e, c, a), a = o.charCodeAt(c)), 46 === a || function(e) {
						return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122
					}(a)) throw N(e, c, "Invalid number, expected digit but got: ".concat(R(a), "."));
				return new O.b(u ? _.FLOAT : _.INT, t, c, i, r, s, o.slice(t, c))
			}

			function M(e, t, n) {
				var i = e.body,
					r = t,
					s = n;
				if (s >= 48 && s <= 57) {
					do {
						s = i.charCodeAt(++r)
					} while (s >= 48 && s <= 57);
					return r
				}
				throw N(e, r, "Invalid number, expected digit but got: ".concat(R(s), "."))
			}

			function j(e, t, n, i, r) {
				for (var s, o, a, c, u = e.body, l = t + 1, p = l, h = 0, f = ""; l < u.length && !isNaN(h = u.charCodeAt(l)) && 10 !== h && 13 !== h;) {
					if (34 === h) return f += u.slice(p, l), new O.b(_.STRING, t, l + 1, n, i, r, f);
					if (h < 32 && 9 !== h) throw N(e, l, "Invalid character within String: ".concat(R(h), "."));
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
								var d = (s = u.charCodeAt(l + 1), o = u.charCodeAt(l + 2), a = u.charCodeAt(l + 3), c = u.charCodeAt(l + 4), B(s) << 12 | B(o) << 8 | B(a) << 4 | B(c));
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

			function U(e, t, n, i, r, s) {
				for (var o = e.body, a = t + 3, c = a, u = 0, l = ""; a < o.length && !isNaN(u = o.charCodeAt(a));) {
					if (34 === u && 34 === o.charCodeAt(a + 1) && 34 === o.charCodeAt(a + 2)) return l += o.slice(c, a), new O.b(_.BLOCK_STRING, t, a + 3, n, i, r, Object(S.a)(l));
					if (u < 32 && 9 !== u && 10 !== u && 13 !== u) throw N(e, a, "Invalid character within String: ".concat(R(u), "."));
					10 === u ? (++a, ++s.line, s.lineStart = a) : 13 === u ? (10 === o.charCodeAt(a + 1) ? a += 2 : ++a, ++s.line, s.lineStart = a) : 92 === u && 34 === o.charCodeAt(a + 1) && 34 === o.charCodeAt(a + 2) && 34 === o.charCodeAt(a + 3) ? (l += o.slice(c, a) + '"""', c = a += 4) : ++a
				}
				throw N(e, a, "Unterminated string.")
			}

			function B(e) {
				return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
			}

			function V(e, t, n, i, r) {
				for (var s = e.body, o = s.length, a = t + 1, c = 0; a !== o && !isNaN(c = s.charCodeAt(a)) && (95 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122);) ++a;
				return new O.b(_.NAME, t, a, n, i, r, s.slice(t, a))
			}

			function q(e, t) {
				return new K(e, t).parseDocument()
			}
			var K = function() {
				function e(e, t) {
					var n = function(e) {
						return A(e, g)
					}(e) ? e : new g(e);
					this._lexer = new C(n), this._options = t
				}
				var t = e.prototype;
				return t.parseName = function() {
					var e = this.expectToken(_.NAME);
					return {
						kind: I.NAME,
						value: e.value,
						loc: this.loc(e)
					}
				}, t.parseDocument = function() {
					var e = this._lexer.token;
					return {
						kind: I.DOCUMENT,
						definitions: this.many(_.SOF, this.parseDefinition, _.EOF),
						loc: this.loc(e)
					}
				}, t.parseDefinition = function() {
					if (this.peek(_.NAME)) switch (this._lexer.token.value) {
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
						if (this.peek(_.BRACE_L)) return this.parseOperationDefinition();
						if (this.peekDescription()) return this.parseTypeSystemDefinition()
					}
					throw this.unexpected()
				}, t.parseOperationDefinition = function() {
					var e = this._lexer.token;
					if (this.peek(_.BRACE_L)) return {
						kind: I.OPERATION_DEFINITION,
						operation: "query",
						name: void 0,
						variableDefinitions: [],
						directives: [],
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					};
					var t, n = this.parseOperationType();
					return this.peek(_.NAME) && (t = this.parseName()), {
						kind: I.OPERATION_DEFINITION,
						operation: n,
						name: t,
						variableDefinitions: this.parseVariableDefinitions(),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseOperationType = function() {
					var e = this.expectToken(_.NAME);
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
					return this.optionalMany(_.PAREN_L, this.parseVariableDefinition, _.PAREN_R)
				}, t.parseVariableDefinition = function() {
					var e = this._lexer.token;
					return {
						kind: I.VARIABLE_DEFINITION,
						variable: this.parseVariable(),
						type: (this.expectToken(_.COLON), this.parseTypeReference()),
						defaultValue: this.expectOptionalToken(_.EQUALS) ? this.parseValueLiteral(!0) : void 0,
						directives: this.parseDirectives(!0),
						loc: this.loc(e)
					}
				}, t.parseVariable = function() {
					var e = this._lexer.token;
					return this.expectToken(_.DOLLAR), {
						kind: I.VARIABLE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseSelectionSet = function() {
					var e = this._lexer.token;
					return {
						kind: I.SELECTION_SET,
						selections: this.many(_.BRACE_L, this.parseSelection, _.BRACE_R),
						loc: this.loc(e)
					}
				}, t.parseSelection = function() {
					return this.peek(_.SPREAD) ? this.parseFragment() : this.parseField()
				}, t.parseField = function() {
					var e, t, n = this._lexer.token,
						i = this.parseName();
					return this.expectOptionalToken(_.COLON) ? (e = i, t = this.parseName()) : t = i, {
						kind: I.FIELD,
						alias: e,
						name: t,
						arguments: this.parseArguments(!1),
						directives: this.parseDirectives(!1),
						selectionSet: this.peek(_.BRACE_L) ? this.parseSelectionSet() : void 0,
						loc: this.loc(n)
					}
				}, t.parseArguments = function(e) {
					var t = e ? this.parseConstArgument : this.parseArgument;
					return this.optionalMany(_.PAREN_L, t, _.PAREN_R)
				}, t.parseArgument = function() {
					var e = this._lexer.token,
						t = this.parseName();
					return this.expectToken(_.COLON), {
						kind: I.ARGUMENT,
						name: t,
						value: this.parseValueLiteral(!1),
						loc: this.loc(e)
					}
				}, t.parseConstArgument = function() {
					var e = this._lexer.token;
					return {
						kind: I.ARGUMENT,
						name: this.parseName(),
						value: (this.expectToken(_.COLON), this.parseValueLiteral(!0)),
						loc: this.loc(e)
					}
				}, t.parseFragment = function() {
					var e = this._lexer.token;
					this.expectToken(_.SPREAD);
					var t = this.expectOptionalKeyword("on");
					return !t && this.peek(_.NAME) ? {
						kind: I.FRAGMENT_SPREAD,
						name: this.parseFragmentName(),
						directives: this.parseDirectives(!1),
						loc: this.loc(e)
					} : {
						kind: I.INLINE_FRAGMENT,
						typeCondition: t ? this.parseNamedType() : void 0,
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(e)
					}
				}, t.parseFragmentDefinition = function() {
					var e, t = this._lexer.token;
					return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? {
						kind: I.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
						loc: this.loc(t)
					} : {
						kind: I.FRAGMENT_DEFINITION,
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
						case _.BRACKET_L:
							return this.parseList(e);
						case _.BRACE_L:
							return this.parseObject(e);
						case _.INT:
							return this._lexer.advance(), {
								kind: I.INT,
								value: t.value,
								loc: this.loc(t)
							};
						case _.FLOAT:
							return this._lexer.advance(), {
								kind: I.FLOAT,
								value: t.value,
								loc: this.loc(t)
							};
						case _.STRING:
						case _.BLOCK_STRING:
							return this.parseStringLiteral();
						case _.NAME:
							switch (this._lexer.advance(), t.value) {
								case "true":
									return {
										kind: I.BOOLEAN, value: !0, loc: this.loc(t)
									};
								case "false":
									return {
										kind: I.BOOLEAN, value: !1, loc: this.loc(t)
									};
								case "null":
									return {
										kind: I.NULL, loc: this.loc(t)
									};
								default:
									return {
										kind: I.ENUM, value: t.value, loc: this.loc(t)
									}
							}
							case _.DOLLAR:
								if (!e) return this.parseVariable()
					}
					throw this.unexpected()
				}, t.parseStringLiteral = function() {
					var e = this._lexer.token;
					return this._lexer.advance(), {
						kind: I.STRING,
						value: e.value,
						block: e.kind === _.BLOCK_STRING,
						loc: this.loc(e)
					}
				}, t.parseList = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: I.LIST,
						values: this.any(_.BRACKET_L, (function() {
							return t.parseValueLiteral(e)
						}), _.BRACKET_R),
						loc: this.loc(n)
					}
				}, t.parseObject = function(e) {
					var t = this,
						n = this._lexer.token;
					return {
						kind: I.OBJECT,
						fields: this.any(_.BRACE_L, (function() {
							return t.parseObjectField(e)
						}), _.BRACE_R),
						loc: this.loc(n)
					}
				}, t.parseObjectField = function(e) {
					var t = this._lexer.token,
						n = this.parseName();
					return this.expectToken(_.COLON), {
						kind: I.OBJECT_FIELD,
						name: n,
						value: this.parseValueLiteral(e),
						loc: this.loc(t)
					}
				}, t.parseDirectives = function(e) {
					for (var t = []; this.peek(_.AT);) t.push(this.parseDirective(e));
					return t
				}, t.parseDirective = function(e) {
					var t = this._lexer.token;
					return this.expectToken(_.AT), {
						kind: I.DIRECTIVE,
						name: this.parseName(),
						arguments: this.parseArguments(e),
						loc: this.loc(t)
					}
				}, t.parseTypeReference = function() {
					var e, t = this._lexer.token;
					return this.expectOptionalToken(_.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(_.BRACKET_R), e = {
						kind: I.LIST_TYPE,
						type: e,
						loc: this.loc(t)
					}) : e = this.parseNamedType(), this.expectOptionalToken(_.BANG) ? {
						kind: I.NON_NULL_TYPE,
						type: e,
						loc: this.loc(t)
					} : e
				}, t.parseNamedType = function() {
					var e = this._lexer.token;
					return {
						kind: I.NAMED_TYPE,
						name: this.parseName(),
						loc: this.loc(e)
					}
				}, t.parseTypeSystemDefinition = function() {
					var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
					if (e.kind === _.NAME) switch (e.value) {
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
					return this.peek(_.STRING) || this.peek(_.BLOCK_STRING)
				}, t.parseDescription = function() {
					if (this.peekDescription()) return this.parseStringLiteral()
				}, t.parseSchemaDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("schema");
					var n = this.parseDirectives(!0),
						i = this.many(_.BRACE_L, this.parseOperationTypeDefinition, _.BRACE_R);
					return {
						kind: I.SCHEMA_DEFINITION,
						description: t,
						directives: n,
						operationTypes: i,
						loc: this.loc(e)
					}
				}, t.parseOperationTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseOperationType();
					this.expectToken(_.COLON);
					var n = this.parseNamedType();
					return {
						kind: I.OPERATION_TYPE_DEFINITION,
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
						kind: I.SCALAR_TYPE_DEFINITION,
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
						s = this.parseFieldsDefinition();
					return {
						kind: I.OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: s,
						loc: this.loc(e)
					}
				}, t.parseImplementsInterfaces = function() {
					var e;
					if (!this.expectOptionalKeyword("implements")) return [];
					if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
						var t = [];
						this.expectOptionalToken(_.AMP);
						do {
							t.push(this.parseNamedType())
						} while (this.expectOptionalToken(_.AMP) || this.peek(_.NAME));
						return t
					}
					return this.delimitedMany(_.AMP, this.parseNamedType)
				}, t.parseFieldsDefinition = function() {
					var e;
					return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(_.BRACE_L) && this._lexer.lookahead().kind === _.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(_.BRACE_L, this.parseFieldDefinition, _.BRACE_R)
				}, t.parseFieldDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseArgumentDefs();
					this.expectToken(_.COLON);
					var r = this.parseTypeReference(),
						s = this.parseDirectives(!0);
					return {
						kind: I.FIELD_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						type: r,
						directives: s,
						loc: this.loc(e)
					}
				}, t.parseArgumentDefs = function() {
					return this.optionalMany(_.PAREN_L, this.parseInputValueDef, _.PAREN_R)
				}, t.parseInputValueDef = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName();
					this.expectToken(_.COLON);
					var i, r = this.parseTypeReference();
					this.expectOptionalToken(_.EQUALS) && (i = this.parseValueLiteral(!0));
					var s = this.parseDirectives(!0);
					return {
						kind: I.INPUT_VALUE_DEFINITION,
						description: t,
						name: n,
						type: r,
						defaultValue: i,
						directives: s,
						loc: this.loc(e)
					}
				}, t.parseInterfaceTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("interface");
					var n = this.parseName(),
						i = this.parseImplementsInterfaces(),
						r = this.parseDirectives(!0),
						s = this.parseFieldsDefinition();
					return {
						kind: I.INTERFACE_TYPE_DEFINITION,
						description: t,
						name: n,
						interfaces: i,
						directives: r,
						fields: s,
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
						kind: I.UNION_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						types: r,
						loc: this.loc(e)
					}
				}, t.parseUnionMemberTypes = function() {
					return this.expectOptionalToken(_.EQUALS) ? this.delimitedMany(_.PIPE, this.parseNamedType) : []
				}, t.parseEnumTypeDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("enum");
					var n = this.parseName(),
						i = this.parseDirectives(!0),
						r = this.parseEnumValuesDefinition();
					return {
						kind: I.ENUM_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						values: r,
						loc: this.loc(e)
					}
				}, t.parseEnumValuesDefinition = function() {
					return this.optionalMany(_.BRACE_L, this.parseEnumValueDefinition, _.BRACE_R)
				}, t.parseEnumValueDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription(),
						n = this.parseName(),
						i = this.parseDirectives(!0);
					return {
						kind: I.ENUM_VALUE_DEFINITION,
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
						kind: I.INPUT_OBJECT_TYPE_DEFINITION,
						description: t,
						name: n,
						directives: i,
						fields: r,
						loc: this.loc(e)
					}
				}, t.parseInputFieldsDefinition = function() {
					return this.optionalMany(_.BRACE_L, this.parseInputValueDef, _.BRACE_R)
				}, t.parseTypeSystemExtension = function() {
					var e = this._lexer.lookahead();
					if (e.kind === _.NAME) switch (e.value) {
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
						n = this.optionalMany(_.BRACE_L, this.parseOperationTypeDefinition, _.BRACE_R);
					if (0 === t.length && 0 === n.length) throw this.unexpected();
					return {
						kind: I.SCHEMA_EXTENSION,
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
						kind: I.SCALAR_TYPE_EXTENSION,
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
						kind: I.OBJECT_TYPE_EXTENSION,
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
						kind: I.INTERFACE_TYPE_EXTENSION,
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
						kind: I.UNION_TYPE_EXTENSION,
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
						kind: I.ENUM_TYPE_EXTENSION,
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
						kind: I.INPUT_OBJECT_TYPE_EXTENSION,
						name: t,
						directives: n,
						fields: i,
						loc: this.loc(e)
					}
				}, t.parseDirectiveDefinition = function() {
					var e = this._lexer.token,
						t = this.parseDescription();
					this.expectKeyword("directive"), this.expectToken(_.AT);
					var n = this.parseName(),
						i = this.parseArgumentDefs(),
						r = this.expectOptionalKeyword("repeatable");
					this.expectKeyword("on");
					var s = this.parseDirectiveLocations();
					return {
						kind: I.DIRECTIVE_DEFINITION,
						description: t,
						name: n,
						arguments: i,
						repeatable: r,
						locations: s,
						loc: this.loc(e)
					}
				}, t.parseDirectiveLocations = function() {
					return this.delimitedMany(_.PIPE, this.parseDirectiveLocation)
				}, t.parseDirectiveLocation = function() {
					var e = this._lexer.token,
						t = this.parseName();
					if (void 0 !== D[t.value]) return t;
					throw this.unexpected(e)
				}, t.loc = function(e) {
					var t;
					if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation)) return new O.a(e, this._lexer.lastToken, this._lexer.source)
				}, t.peek = function(e) {
					return this._lexer.token.kind === e
				}, t.expectToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t;
					throw N(this._lexer.source, t.start, "Expected ".concat(Y(e), ", found ").concat(G(t), "."))
				}, t.expectOptionalToken = function(e) {
					var t = this._lexer.token;
					if (t.kind === e) return this._lexer.advance(), t
				}, t.expectKeyword = function(e) {
					var t = this._lexer.token;
					if (t.kind !== _.NAME || t.value !== e) throw N(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(G(t), "."));
					this._lexer.advance()
				}, t.expectOptionalKeyword = function(e) {
					var t = this._lexer.token;
					return t.kind === _.NAME && t.value === e && (this._lexer.advance(), !0)
				}, t.unexpected = function(e) {
					var t = null != e ? e : this._lexer.token;
					return N(this._lexer.source, t.start, "Unexpected ".concat(G(t), "."))
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
					return e === _.BANG || e === _.DOLLAR || e === _.AMP || e === _.PAREN_L || e === _.PAREN_R || e === _.SPREAD || e === _.COLON || e === _.EQUALS || e === _.AT || e === _.BRACKET_L || e === _.BRACKET_R || e === _.BRACE_L || e === _.PIPE || e === _.BRACE_R
				}(e) ? '"'.concat(e, '"') : e
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.f3f72a1c3a88110e454a.js.map