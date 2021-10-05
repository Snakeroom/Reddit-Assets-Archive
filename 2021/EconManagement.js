// https://www.redditstatic.com/desktop2x/EconManagement.2d8d7f0a8bf76e228b90.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconManagement"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return c
			}));
			var n = t("./src/lib/currency/cleanNumber/index.ts");

			function c(e, a) {
				const t = Object(n.a)(e),
					c = parseInt(t) / 100;
				return Math.floor(c) !== c || a ? c.toFixed(2) : String(c)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, a, t) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			t.d(a, "a", (function() {
				return n
			}))
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, a, t) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				c = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/icons/svgs/Search/index.tsx"),
				l = t("./src/reddit/controls/SearchBar/index.m.less"),
				i = t.n(l);
			a.a = e => c.a.createElement("div", {
				className: Object(s.a)(i.a.searchContainer, e.className)
			}, c.a.createElement("input", {
				className: Object(s.a)(i.a.search, {
					[i.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), c.a.createElement("div", {
				className: Object(s.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, c.a.createElement(r.a, null)))
		},
		"./src/reddit/pages/EconManagement/JsonEMEntityView.async.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/@loadable/component/dist/loadable.esm.js");
			a.a = Object(n.a)({
				resolved: {},
				chunkName: () => "JsonEMEntityView",
				isReady(e) {
					const a = this.resolve(e);
					return !1 !== this.resolved[a] && !!t.m[a]
				},
				importAsync: () => t.e("JsonEMEntityView").then(t.bind(null, "./src/reddit/pages/EconManagement/JsonEMEntityView.tsx")),
				requireAsync(e) {
					const a = this.resolve(e);
					return this.resolved[a] = !1, this.importAsync(e).then(e => (this.resolved[a] = !0, e))
				},
				requireSync(e) {
					const a = this.resolve(e);
					return t(a)
				},
				resolve() {
					return "./src/reddit/pages/EconManagement/JsonEMEntityView.tsx"
				}
			}, {
				ssr: !1
			})
		},
		"./src/reddit/pages/EconManagement/customViews/EmUserView.m.less": function(e, a, t) {
			e.exports = {
				customUserViewContainer: "_10ZSKm2z9ZVhCv9XWCTCo1"
			}
		},
		"./src/reddit/pages/EconManagement/index.m.less": function(e, a, t) {
			e.exports = {
				container: "XfQjrr0cSxQLuafxwIGR0",
				searchBar: "_28_JbegjLHliqynQFlAx9k",
				title: "YktkjMIOZlpiMZ9a2Jw7f",
				tab: "_2RRB_AJcgQBZqKBJWktYSP",
				tabActive: "xa77sM02-9d8RCDKd3NH5",
				activeSection: "_3E9JrmSH9QdCkgvTcyBHPe",
				entityView: "_1mykTnLc9fdzm_vycyqnjf",
				relatedData: "_155wUSn-WBawfH5ceW0Ams",
				relatedDataHeader: "_2xJnXiZqHs13N3-XcRr0tQ",
				defaultViewRowWrapper: "_2OiPREj8Z4eu6i4LfMRrak",
				actionContainer: "XjpoomFiVbxNpoRPLm124",
				buttonContainer: "_1dFIPFAA4FW-ddPLDlx2P6",
				actionButton: "_3ImJJ8zFmmJuebT1zOu1cz",
				topLevelEntity: "_3Ix2AB0_jCR6QScB8yTY91",
				defaultViewRow: "SRPnA9tSbxzJrkAxRatop",
				nestedEntityRow: "_1KezDfHce4LPbONpFzd4PJ",
				defaultViewKey: "_2ycbqSArSfqsMLhNbIAeTP",
				sourceDataHeader: "lk5Mo_xFaiKBEBz2tVX01",
				defaultViewValue: "_24tei-lzgVDlr4mOP6QX2k",
				actionParamsContainer: "gbQbBSuVXToYuUTHEp78p",
				actionParamsHeading: "_3pBcr5LEg_PEUenQIbZE7S",
				actionParamRow: "_8BDcs_HpsJ1YaMB2cDA_u",
				actionParamInput: "_2YysR1LnB3wtJDPtjfS_wP"
			}
		},
		"./src/reddit/pages/EconManagement/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/react/index.js"),
				s = t.n(c),
				r = t("./node_modules/react-redux/es/index.js"),
				l = t("./src/reddit/models/EconManagement/index.ts"),
				i = t("./src/reddit/actions/economics/econManagement/index.ts"),
				o = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./node_modules/lodash/isArray.js")),
				m = t.n(o);
			var d = t("./src/lib/currency/centsToDollars/index.ts");
			const u = (e, a) => {
				return `${"USD"===a?Object(d.a)(String(e),!0):e} ${a}`
			};
			var E = t("./src/higherOrderComponents/asModal/index.tsx"),
				y = t("./src/lib/envConfigParsing/index.ts"),
				v = t("./src/reddit/controls/Button/index.tsx"),
				b = t("./src/reddit/selectors/econManagement.ts"),
				p = t("./src/reddit/pages/EconManagement/index.m.less"),
				g = t.n(p);
			const h = ({
					entity: e
				}) => {
					const a = Object(r.d)(),
						t = Object(r.e)(a => Object(b.c)(a, e.typename)),
						[n, l] = Object(c.useState)(null);
					if (!t.length || !e.entityId) return null;
					const o = `${e.typename}:${e.entityId}`;
					return s.a.createElement("div", {
						className: g.a.actionContainer
					}, e.typename, " actions:", " ", s.a.createElement("div", {
						className: g.a.buttonContainer
					}, t.map(t => s.a.createElement(v.s, {
						key: t.name,
						className: g.a.actionButton,
						onClick: () => (t => {
							e.entityId && (t.params || a(Object(i.a)(o, t.name)), l({
								params: t.params,
								name: t.name
							}))
						})(t)
					}, t.name))), n && s.a.createElement(f, {
						entityId: o,
						actionName: n.name,
						params: n.params,
						onClose: () => l(null),
						onOverlayClick: () => l(null),
						withOverlay: !0,
						className: g.a.actionsModalBody,
						overlayClassName: g.a.actionsModalOverlay
					}))
				},
				N = {
					string: "",
					number: "",
					boolean: !1
				},
				f = Object(E.a)(({
					params: e,
					actionName: a,
					entityId: t,
					onClose: n
				}) => {
					const l = Object(r.d)(),
						[o, m] = Object(c.useState)(Object.fromEntries(e.map(({
							name: e,
							type: a
						}) => [e, N[a]]))),
						[d, u] = Object(c.useState)(!1);
					return s.a.createElement("div", {
						className: g.a.actionParamsContainer
					}, s.a.createElement("h3", {
						className: g.a.actionParamsHeading
					}, a), e.map(e => s.a.createElement("div", {
						key: e.name,
						className: g.a.actionParamRow
					}, s.a.createElement("label", {
						htmlFor: e.name
					}, e.name), "string" === e.type && s.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "text",
						value: o[e.name] || "",
						onChange: a => ((e, a) => {
							m({
								...o,
								[e.name]: a
							})
						})(e, a.target.value)
					}), "number" === e.type && s.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "string",
						value: o[e.name] || "",
						onChange: a => ((e, a) => {
							const t = Object(y.c)(a) || void 0;
							m({
								...o,
								[e.name]: t
							})
						})(e, a.target.value)
					}), "boolean" === e.type && s.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "checkbox",
						value: o[e.name] || !1,
						checked: o[e.name] || !1,
						onChange: a => ((e, a) => {
							m({
								...o,
								[e.name]: a
							})
						})(e, a.target.checked)
					}))), s.a.createElement(v.s, {
						className: g.a.actionButton,
						onClick: async () => {
							u(!0), await l(Object(i.a)(t, a, o)), u(!1), n()
						},
						disabled: d
					}, "Execute"))
				});
			var j = t("./src/reddit/pages/EconManagement/JsonEMEntityView.async.tsx"),
				x = t("./src/reddit/pages/EconManagement/customViews/EmUserView.m.less"),
				w = t.n(x);
			const O = {
				Duration: ({
					entity: e
				}) => s.a.createElement("span", null, e.value.amount.value, " ", e.value.unit.value),
				MoneyAmount: ({
					entity: e
				}) => s.a.createElement("span", null, u(e.value.value.value, e.value.currency.value)),
				SelectedPrice: ({
					entity: e
				}) => s.a.createElement("span", null, u(e.value.price.value, e.value.currency.value), ". Product Count: ", e.value.products_count.value),
				User: ({
					entity: e
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", null, s.a.createElement(h, {
					entity: e
				})), s.a.createElement("div", {
					className: w.a.customUserViewContainer
				}, s.a.createElement("div", {
					className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
				}, s.a.createElement("h3", {
					className: g.a.defaultViewKey
				}, "User Data:"), s.a.createElement("div", {
					className: g.a.defaultViewValue
				}, s.a.createElement(_, {
					entity: e.userData,
					isNested: !0
				}))), s.a.createElement("div", {
					className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
				}, s.a.createElement("h3", {
					className: g.a.defaultViewKey
				}, "Subscriptions:"), s.a.createElement("div", {
					className: g.a.defaultViewValue
				}, s.a.createElement(_, {
					entity: e.subscriptions,
					isNested: !0
				}))), s.a.createElement("div", {
					className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
				}, s.a.createElement("h3", {
					className: g.a.defaultViewKey
				}, "Thing State:"), s.a.createElement("div", {
					className: g.a.defaultViewValue
				}, s.a.createElement(_, {
					entity: e.thingState,
					isNested: !0
				})))), s.a.createElement("h3", {
					className: w.a.sourceDataHeader
				}, "Source Data:"), s.a.createElement(j.a, {
					entityData: e
				}))
			};
			const _ = ({
					entity: e,
					isNested: a
				}) => {
					const t = function(e) {
						return O[e] || null
					}(e.typename);
					return t ? t({
						entity: e
					}) : Object(l.c)(e) ? s.a.createElement("div", {
						className: Object(n.a)(g.a.defaultViewRowWrapper, {
							[g.a.topLevelEntity]: !a
						})
					}, s.a.createElement(h, {
						entity: e
					}), Object.entries(e).map(([e, a]) => {
						if (void 0 === a || "string" == typeof a) return null;
						const t = "object" == typeof a.value;
						return s.a.createElement("div", {
							className: Object(n.a)(g.a.defaultViewRow, {
								[g.a.nestedEntityRow]: t
							}),
							key: e
						}, s.a.createElement("h3", {
							className: g.a.defaultViewKey,
							title: e
						}, e, ":"), s.a.createElement("div", {
							className: g.a.defaultViewValue
						}, s.a.createElement(_, {
							entity: a,
							isNested: !0
						})))
					}), !a && s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: g.a.sourceDataHeader
					}, "Source Data:"), s.a.createElement(j.a, {
						entityData: e
					}))) : "object" != typeof e.value ? s.a.createElement("span", null, String(e.value)) : m()(e.value) ? Object(l.b)(e.value) ? s.a.createElement("div", null, e.value.join(",")) : s.a.createElement(s.a.Fragment, null, e.value.map((e, a) => s.a.createElement(_, {
						key: a,
						entity: e,
						isNested: !0
					}))) : Object(l.c)(e.value) ? s.a.createElement(_, {
						entity: e.value,
						isNested: !0
					}) : s.a.createElement("div", null, "UNABLE TO RENDER ", e.typename)
				},
				S = ({
					activeTab: e
				}) => {
					const a = Object(r.d)(),
						t = Object(r.e)(a => Object(b.d)(a, e)),
						n = void 0 === t,
						l = null === t;
					return Object(c.useEffect)(() => {
						n && a(Object(i.b)(e))
					}, [n, a, e]), s.a.createElement("section", {
						className: g.a.activeSection
					}, n && s.a.createElement("h3", null, "Loading ", e, "s ..."), l && s.a.createElement("h3", null, "No associated ", e, "s found :("), s.a.createElement("div", {
						className: g.a.topLevelEntity
					}, t && s.a.createElement(_, {
						entity: t
					})))
				};
			var V = t("./src/reddit/controls/SearchBar/index.tsx");
			const C = () => {
				const [e, a] = Object(c.useState)(""), t = Object(r.d)(), n = () => {
					t(Object(i.d)(e))
				};
				return s.a.createElement(V.a, {
					className: g.a.searchBar,
					onSearch: n,
					onKeyPress: e => {
						13 === e.charCode && n()
					},
					onTextChange: e => {
						a(e.currentTarget.value)
					},
					value: e
				})
			};
			a.default = () => {
				const e = Object(r.e)(b.b),
					a = Object(r.e)(b.a),
					t = ((e, a) => a === l.a.Loading ? "Loading..." : e ? `${e.type}: ${e.id}` : "Enter id or username in the field above")(e, a),
					i = Object(r.e)(b.e),
					[o, m] = Object(c.useState)(null);
				return Object(c.useEffect)(() => {
					e || m(null)
				}, [e]), s.a.createElement("div", {
					className: g.a.container
				}, s.a.createElement(C, null), s.a.createElement("h2", {
					className: g.a.title
				}, t), e && s.a.createElement("div", {
					className: g.a.rootEntityWrapper
				}, s.a.createElement(_, {
					entity: e.details
				})), !!i.length && s.a.createElement("div", {
					className: g.a.relatedData
				}, s.a.createElement("h3", {
					className: g.a.relatedDataHeader
				}, "Related Data:"), i.map(e => s.a.createElement("div", {
					key: e,
					className: Object(n.a)(g.a.tab, {
						[g.a.tabActive]: e === o
					}),
					onClick: () => {
						m(e)
					}
				}, e, "s")), o && s.a.createElement(S, {
					activeTab: o
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement.2d8d7f0a8bf76e228b90.js.map