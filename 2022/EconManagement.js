// https://www.redditstatic.com/desktop2x/EconManagement.97e857200531c6a49622.js
// Retrieved at 12/5/2022, 5:00:05 PM by Reddit Dataminer v1.0.0
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
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/icons/svgs/Search/index.tsx"),
				l = t("./src/reddit/controls/SearchBar/index.m.less"),
				i = t.n(l);
			a.a = e => c.a.createElement("label", {
				className: Object(r.a)(i.a.searchContainer, e.className)
			}, c.a.createElement("input", {
				className: Object(r.a)(i.a.search, {
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
				className: Object(r.a)(i.a.searchIconContainer, {
					[i.a.mClickable]: !!e.onSearch,
					[i.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, c.a.createElement(s.a, null)))
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
				r = t.n(c),
				s = t("./node_modules/react-redux/es/index.js"),
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
				b = t("./src/reddit/controls/Button/index.tsx"),
				v = t("./src/reddit/selectors/econManagement.ts"),
				p = t("./src/reddit/pages/EconManagement/index.m.less"),
				g = t.n(p);
			const h = e => {
					let {
						entity: a
					} = e;
					const t = Object(s.d)(),
						n = Object(s.e)(e => Object(v.e)(e, a.typename)),
						[l, o] = Object(c.useState)(null);
					if (!n.length || !a.entityId) return null;
					const m = `${a.typename}:${a.entityId}`;
					return r.a.createElement("div", {
						className: g.a.actionContainer
					}, a.typename, " actions:", " ", r.a.createElement("div", {
						className: g.a.buttonContainer
					}, n.map(e => r.a.createElement(b.t, {
						key: e.name,
						className: g.a.actionButton,
						onClick: () => (e => {
							a.entityId && (e.params || t(Object(i.a)(m, e.name)), o({
								params: e.params,
								name: e.name
							}))
						})(e)
					}, e.name))), l && r.a.createElement(f, {
						entityId: m,
						actionName: l.name,
						params: l.params,
						onClose: () => o(null),
						onOverlayClick: () => o(null),
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
				f = Object(E.a)(e => {
					let {
						params: a,
						actionName: t,
						entityId: n,
						onClose: l
					} = e;
					const o = Object(s.d)(),
						[m, d] = Object(c.useState)(Object.fromEntries(a.map(e => {
							let {
								name: a,
								type: t
							} = e;
							return [a, N[t]]
						}))),
						[u, E] = Object(c.useState)(!1);
					return r.a.createElement("div", {
						className: g.a.actionParamsContainer
					}, r.a.createElement("h3", {
						className: g.a.actionParamsHeading
					}, t), a.map(e => r.a.createElement("div", {
						key: e.name,
						className: g.a.actionParamRow
					}, r.a.createElement("label", {
						htmlFor: e.name
					}, e.name), "string" === e.type && r.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "text",
						value: m[e.name] || "",
						onChange: a => ((e, a) => {
							d({
								...m,
								[e.name]: a
							})
						})(e, a.target.value)
					}), "number" === e.type && r.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "string",
						value: m[e.name] || "",
						onChange: a => ((e, a) => {
							const t = Object(y.c)(a) || void 0;
							d({
								...m,
								[e.name]: t
							})
						})(e, a.target.value)
					}), "boolean" === e.type && r.a.createElement("input", {
						className: g.a.actionParamInput,
						id: e.name,
						type: "checkbox",
						value: m[e.name] || !1,
						checked: m[e.name] || !1,
						onChange: a => ((e, a) => {
							d({
								...m,
								[e.name]: a
							})
						})(e, a.target.checked)
					}))), r.a.createElement(b.t, {
						className: g.a.actionButton,
						onClick: async () => {
							E(!0), await o(Object(i.a)(n, t, m)), E(!1), l()
						},
						disabled: u
					}, "Execute"))
				});
			var j = t("./src/reddit/pages/EconManagement/JsonEMEntityView.async.tsx"),
				x = t("./src/reddit/pages/EconManagement/customViews/EmUserView.m.less"),
				w = t.n(x);
			const O = {
				Duration: e => {
					let {
						entity: a
					} = e;
					return r.a.createElement("span", null, a.value.amount.value, " ", a.value.unit.value)
				},
				MoneyAmount: e => {
					let {
						entity: a
					} = e;
					return r.a.createElement("span", null, u(a.value.value.value, a.value.currency.value))
				},
				SelectedPrice: e => {
					let {
						entity: a
					} = e;
					return r.a.createElement("span", null, u(a.value.price.value, a.value.currency.value), ". Product Count: ", a.value.products_count.value)
				},
				User: e => {
					let {
						entity: a
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", null, r.a.createElement(h, {
						entity: a
					})), r.a.createElement("div", {
						className: w.a.customUserViewContainer
					}, r.a.createElement("div", {
						className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: g.a.defaultViewKey
					}, "User Data:"), r.a.createElement("div", {
						className: g.a.defaultViewValue
					}, r.a.createElement(_, {
						entity: a.userData,
						isNested: !0
					}))), r.a.createElement("div", {
						className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: g.a.defaultViewKey
					}, "Subscriptions:"), r.a.createElement("div", {
						className: g.a.defaultViewValue
					}, r.a.createElement(_, {
						entity: a.subscriptions,
						isNested: !0
					}))), r.a.createElement("div", {
						className: Object(n.a)(g.a.defaultViewRow, g.a.nestedEntityRow)
					}, r.a.createElement("h3", {
						className: g.a.defaultViewKey
					}, "Thing State:"), r.a.createElement("div", {
						className: g.a.defaultViewValue
					}, r.a.createElement(_, {
						entity: a.thingState,
						isNested: !0
					})))), r.a.createElement("h3", {
						className: w.a.sourceDataHeader
					}, "Source Data:"), r.a.createElement(j.a, {
						entityData: a
					}))
				}
			};
			const _ = e => {
					let {
						entity: a,
						isNested: t
					} = e;
					const c = function(e) {
						return O[e] || null
					}(a.typename);
					return c ? c({
						entity: a
					}) : Object(l.c)(a) ? r.a.createElement("div", {
						className: Object(n.a)(g.a.defaultViewRowWrapper, {
							[g.a.topLevelEntity]: !t
						})
					}, r.a.createElement(h, {
						entity: a
					}), Object.entries(a).map(e => {
						let [a, t] = e;
						if (void 0 === t || "string" == typeof t) return null;
						const c = "object" == typeof t.value;
						return r.a.createElement("div", {
							className: Object(n.a)(g.a.defaultViewRow, {
								[g.a.nestedEntityRow]: c
							}),
							key: a
						}, r.a.createElement("h3", {
							className: g.a.defaultViewKey,
							title: a
						}, a, ":"), r.a.createElement("div", {
							className: g.a.defaultViewValue
						}, r.a.createElement(_, {
							entity: t,
							isNested: !0
						})))
					}), !t && r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: g.a.sourceDataHeader
					}, "Source Data:"), r.a.createElement(j.a, {
						entityData: a
					}))) : "object" != typeof a.value ? r.a.createElement("span", null, String(a.value)) : m()(a.value) ? Object(l.b)(a.value) ? r.a.createElement("div", null, a.value.join(",")) : r.a.createElement(r.a.Fragment, null, a.value.map((e, a) => r.a.createElement(_, {
						key: a,
						entity: e,
						isNested: !0
					}))) : Object(l.c)(a.value) ? r.a.createElement(_, {
						entity: a.value,
						isNested: !0
					}) : r.a.createElement("div", null, "UNABLE TO RENDER ", a.typename)
				},
				S = e => {
					let {
						activeTab: a
					} = e;
					const t = Object(s.d)(),
						n = Object(s.e)(e => Object(v.f)(e, a)),
						l = void 0 === n,
						o = null === n;
					return Object(c.useEffect)(() => {
						l && t(Object(i.b)(a))
					}, [l, t, a]), r.a.createElement("section", {
						className: g.a.activeSection
					}, l && r.a.createElement("h3", null, "Loading ", a, "s ..."), o && r.a.createElement("h3", null, "No associated ", a, "s found :("), r.a.createElement("div", {
						className: g.a.topLevelEntity
					}, n && r.a.createElement(_, {
						entity: n
					})))
				};
			var V = t("./src/reddit/controls/SearchBar/index.tsx");
			const C = () => {
				const [e, a] = Object(c.useState)(""), t = Object(s.d)(), n = () => {
					t(Object(i.f)(e))
				};
				return r.a.createElement(V.a, {
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
				const e = Object(s.e)(v.b),
					a = Object(s.e)(v.a),
					t = ((e, a) => a === l.a.Loading ? "Loading..." : e ? `${e.type}: ${e.id}` : "Enter id or username in the field above")(e, a),
					i = Object(s.e)(v.g),
					[o, m] = Object(c.useState)(null);
				return Object(c.useEffect)(() => {
					e || m(null)
				}, [e]), r.a.createElement("div", {
					className: g.a.container
				}, r.a.createElement(C, null), r.a.createElement("h2", {
					className: g.a.title
				}, t), e && r.a.createElement("div", {
					className: g.a.rootEntityWrapper
				}, r.a.createElement(_, {
					entity: e.details
				})), !!i.length && r.a.createElement("div", {
					className: g.a.relatedData
				}, r.a.createElement("h3", {
					className: g.a.relatedDataHeader
				}, "Related Data:"), i.map(e => r.a.createElement("div", {
					key: e,
					className: Object(n.a)(g.a.tab, {
						[g.a.tabActive]: e === o
					}),
					onClick: () => {
						m(e)
					}
				}, e, "s")), o && r.a.createElement(S, {
					activeTab: o
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconManagement.97e857200531c6a49622.js.map