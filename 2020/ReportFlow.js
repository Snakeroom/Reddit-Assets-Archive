// https://www.redditstatic.com/desktop2x/ReportFlow.d008127016507be58bc3.js
// Retrieved at 10/23/2020, 1:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"727f69586fcc"}')
		},
		"./src/graphql/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return y
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(s.a)(e, Object.assign(Object.assign({}, r), {
				variables: t
			}), {
				traceRequestName: "get_blocked_redditors_info"
			});
			var a = n("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				p = "BLOCKED_REDDITORS_LIST__FAILED",
				d = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(l),
				h = Object(o.a)(c),
				f = Object(o.a)(p),
				b = Object(o.a)(d),
				C = Object(o.a)(u),
				y = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const r = t(),
						s = Object(a.a)(r);
					if (Object(a.b)(r) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let l = !1,
						c = "";
					do {
						e(C());
						const t = {
								after: c,
								pageSize: 100
							},
							n = await i(o(), t);
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
								if (e(b(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									l = e, c = t || ""
								}
							} else l = !1
						} else {
							l = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(f({
								message: t
							}))
						}
					} while (l)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return R
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/blockedRedditors.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const p = "USER_BLOCK__PENDING",
				d = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				m = Object(r.a)(p),
				h = Object(r.a)(d),
				f = Object(r.a)(u),
				b = e => async (t, n, r) => {
					let {
						apiContext: c
					} = r;
					if (n().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const p = await Object(a.a)(c(), e),
						d = "error-block-".concat(e);
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(s.f)(p.body.id)), t(i.f(d)), t(i.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: p.error ? p.error.type : "Unknown error",
							username: e
						};
						t(f(n)), t(i.e({
							id: d,
							kind: l.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: b(e)
						}))
					}
				}, C = "USER_UNBLOCK__PENDING", y = "USER_UNBLOCK__SUCCESS", x = "USER_UNBLOCK__FAILED", g = Object(r.a)(C), S = Object(r.a)(y), T = Object(r.a)(x), R = e => async (t, n, r) => {
					let {
						apiContext: p
					} = r;
					const d = n(),
						u = Object(c.i)(d),
						m = u ? u.id : void 0,
						h = d.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(g({
						name: e
					})), (await Object(a.c)(p(), m, e)).ok ? (t(S({
						name: e
					})), h && h.id && t(Object(s.h)(h.id)), t(i.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.e({
						kind: l.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(T({
						name: e
					}))))
				}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CrisisFlow-CrisisFlowPage").then(n.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/FormBuilderHeader/index.m.less": function(e, t, n) {
			e.exports = {
				FormBuilderHeaderWrapper: "_28S_rLPhk2Xu-7qII6KDEW",
				formBuilderHeaderWrapper: "_28S_rLPhk2Xu-7qII6KDEW",
				Close: "_3nqoYOxFp38iz8_G9ejX7W",
				close: "_3nqoYOxFp38iz8_G9ejX7W",
				backButton: "cAykncT_a1-nc8sJ8Ep6v"
			}
		},
		"./src/reddit/components/FormBuilder/components/Button/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonWrapper: "_1lDGFVGU9k2mi-4kjU95Rp",
				buttonWrapper: "_1lDGFVGU9k2mi-4kjU95Rp"
			}
		},
		"./src/reddit/components/FormBuilder/components/ButtonBar/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonBarWrapper: "cR6KACDFv5FmLxCEFk1_l",
				buttonBarWrapper: "cR6KACDFv5FmLxCEFk1_l",
				ButtonBarButton: "_2MG6PZ8OkbCCf9ucmmr7Ff",
				buttonBarButton: "_2MG6PZ8OkbCCf9ucmmr7Ff",
				isSelected: "_37g3MvFSLn22Sf2pL3lZuQ",
				withIcon: "_3kEv5z1lDKGV8PQ5ijp4Uh"
			}
		},
		"./src/reddit/components/FormBuilder/components/FooterContent/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContentWrapper: "_1Wjy7XxPhNhcsFZWDSlvGI",
				footerContentWrapper: "_1Wjy7XxPhNhcsFZWDSlvGI"
			}
		},
		"./src/reddit/components/FormBuilder/components/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				InfoTooltipWrapper: "_2V02Z5ICmbXCfkchLATThk",
				infoTooltipWrapper: "_2V02Z5ICmbXCfkchLATThk",
				InfoIcon: "_18UWN3O19pnW04YhqNDhsz",
				infoIcon: "_18UWN3O19pnW04YhqNDhsz",
				InfoContent: "_2Ww4tSvsoobRQbIpeHiAqH",
				infoContent: "_2Ww4tSvsoobRQbIpeHiAqH"
			}
		},
		"./src/reddit/components/FormBuilder/components/ScreenFooter/index.m.less": function(e, t, n) {
			e.exports = {
				ScreenFooterWrapper: "_2_z81mDBy-DsDJ6t2Y8xZR",
				screenFooterWrapper: "_2_z81mDBy-DsDJ6t2Y8xZR",
				isVertical: "NV5ooUvONSW9b9TtdV_ph"
			}
		},
		"./src/reddit/components/FormBuilder/components/ScreenIcon/index.m.less": function(e, t, n) {
			e.exports = {
				ScreenIconWrapper: "_1WZfs7BsFqY0wthiftalKX",
				screenIconWrapper: "_1WZfs7BsFqY0wthiftalKX"
			}
		},
		"./src/reddit/components/FormBuilder/components/ScreenTitle/index.m.less": function(e, t, n) {
			e.exports = {
				ScreenTitleWrapper: "vRwFYlADZwjqhVcNn3Qoa",
				screenTitleWrapper: "vRwFYlADZwjqhVcNn3Qoa"
			}
		},
		"./src/reddit/components/FormBuilder/components/SelectOne/index.m.less": function(e, t, n) {
			e.exports = {
				RadioList: "_1dZH95utg0LKnnt77YsdPb",
				radioList: "_1dZH95utg0LKnnt77YsdPb",
				RadioListButton: "_1RAbpNyyMiEUAuUDW2WsSE",
				radioListButton: "_1RAbpNyyMiEUAuUDW2WsSE"
			}
		},
		"./src/reddit/components/FormBuilder/components/TextBlock/index.m.less": function(e, t, n) {
			e.exports = {
				TextBlockWrapper: "_35aJXiummryUl8WLfTScEL",
				textBlockWrapper: "_35aJXiummryUl8WLfTScEL"
			}
		},
		"./src/reddit/components/FormBuilder/components/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				ToggleSwitchWrapper: "FNFOaaS6hFoPfYKAoCSD-",
				toggleSwitchWrapper: "FNFOaaS6hFoPfYKAoCSD-",
				ToggleSwitchContent: "_2gnivJsUt_csjg6PHQ5G-j",
				toggleSwitchContent: "_2gnivJsUt_csjg6PHQ5G-j",
				ControlWrapper: "_2uKTa9b-EVoSmQxhsimCo-",
				controlWrapper: "_2uKTa9b-EVoSmQxhsimCo-",
				RadioSlide: "mUFzI2Wu6OU7jZUomkGPY",
				radioSlide: "mUFzI2Wu6OU7jZUomkGPY",
				isChecked: "_1McI-uE3-5iwyThrafZvIP"
			}
		},
		"./src/reddit/components/FormBuilder/helpers/index.m.less": function(e, t, n) {
			e.exports = {
				"textEmphasis-color": "_3wlf5po8rNsJA5mjxQI47x",
				textEmphasisColor: "_3wlf5po8rNsJA5mjxQI47x"
			}
		},
		"./src/reddit/components/FormBuilder/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_19f8TsE7WW4DjGY6oPWe53",
				wrapper: "_19f8TsE7WW4DjGY6oPWe53",
				Component: "_3fAdxYG4UJUahOS3LEDO2D",
				component: "_3fAdxYG4UJUahOS3LEDO2D",
				FormBuilderWrapper: "GNRSVNj3KgMogeW1Sa9J4",
				formBuilderWrapper: "GNRSVNj3KgMogeW1Sa9J4"
			}
		},
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, n) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, n) {
			e.exports = {
				BlockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				blockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				BlockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				blockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				Link: "_1EO2dLuyej1lxpjgLomRmY",
				link: "_1EO2dLuyej1lxpjgLomRmY",
				OptionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				optionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				OptionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				optionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				OptionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				optionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				blockUserHolder: "_2t9wBmIMEVB6Ij8vJu809S",
				footer: "_3Xxf80A8a452XmYsr9D3B_"
			}
		},
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				closeButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				ContentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				contentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				Header: "_2uqWToPxuHNDDcTURzsr3J",
				header: "_2uqWToPxuHNDDcTURzsr3J",
				Description: "_3ODQLS5KJ5iVo8z8A69hMp",
				description: "_3ODQLS5KJ5iVo8z8A69hMp",
				RadioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				radioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				DropdownRow: "tPieP_oh420XxFexXwjr_",
				dropdownRow: "tPieP_oh420XxFexXwjr_",
				PickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				pickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				SelectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				selectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				isChosen: "_3ocDAhKFsnxKiq_NXuqPnV",
				Dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				DropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				dropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				Row: "_3mv2EXG5fgkAJbGwPMO_sj",
				row: "_3mv2EXG5fgkAJbGwPMO_sj"
			}
		},
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				DropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				dropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/formatPythonString/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/CrisisFlow/async.tsx"),
				u = n("./src/reddit/actions/reportFlow.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/higherOrderComponents/asTooltip.tsx")),
				b = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				S = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				T = n.n(S);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
				}
				return n
			};
			const O = p.a.div("ContentPolicyHolder", T.a),
				E = p.a.div("Header", T.a),
				_ = p.a.div("Description", T.a),
				w = p.a.wrapped(C.l, "CloseButton", T.a),
				I = p.a.div("RadioOptionsSectionHeader", T.a),
				k = p.a.wrapped(x.b, "DropdownRow", T.a),
				A = p.a.div("PickerWrapper", T.a),
				P = p.a.div("SelectARuleLabel", T.a),
				F = e => {
					var {
						className: t,
						isChosen: n
					} = e, o = v(e, ["className", "isChosen"]);
					return s.a.createElement(P, R({
						className: Object(b.a)(t, {
							[T.a.isChosen]: n
						})
					}, o))
				},
				N = Object(f.a)(y.a),
				L = p.a.wrapped(N, "Dropdown", T.a),
				B = p.a.wrapped(g.b, "DropdownTriangle", T.a),
				j = p.a.wrapped(x.b, "Row", T.a);
			var M = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				D = n.n(M);
			const U = p.a.div("LinkHolder", D.a),
				$ = p.a.a("Link", D.a),
				W = p.a.wrapped(h.a, "footer", D.a);
			var H = e => s.a.createElement("div", null, s.a.createElement(E, null, e.complaintPageTitle), s.a.createElement(_, null, e.complaintPrompt || o.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(U, null, s.a.createElement($, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(W, null, s.a.createElement(O, null, s.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(w, {
					onClick: e.onClose
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				q = n("./src/reddit/actions/userBlocks.ts"),
				V = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				K = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				Y = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				G = n.n(Y);
			const J = p.a.wrapped(h.a, "blockUserHolder", G.a),
				z = p.a.wrapped(K.a, "BlockUserIcon", G.a),
				X = p.a.div("BlockUserHeader", G.a),
				Z = p.a.div("OptionHolder", G.a),
				Q = p.a.div("OptionHeader", G.a),
				ee = p.a.div("OptionDescription", G.a),
				te = p.a.a("Link", G.a),
				ne = p.a.wrapped(h.a, "footer", G.a),
				oe = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				re = Object(a.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class se extends s.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== V.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === V.a.pending ? o.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? o.fbt._("{username} is blocked", [o.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : o.fbt._("Block {username}", [o.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(Z, null, s.a.createElement(Q, null, o.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement(ee, null, o.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [o.fbt._param("=visit the Help Center", s.a.createElement(te, {
						target: "_blank",
						href: oe
					}, o.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return s.a.createElement(J, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(z, null), s.a.createElement("div", null, s.a.createElement(X, null, t), s.a.createElement(ee, null, o.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [o.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(E, null, o.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(_, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(ne, null, s.a.createElement(O, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(w, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var ie = Object(i.b)(re, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(q.h)(t))
						}
					}
				})(se),
				ae = n("./src/reddit/components/AccordionSection/index.tsx"),
				le = n("./src/reddit/actions/tooltip.ts"),
				ce = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				pe = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				de = n("./src/reddit/endpoints/post/index.tsx"),
				ue = n("./src/reddit/selectors/tooltip.ts");
			const me = "ReportFlow--RedditRules",
				he = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(me)
				});
			class fe extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? de.a.CrisisTextLine : e.fileComplaint ? de.a.FileComplaint : de.a.SiteRule)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.onCustomTextChange = e => {
						this.props.onCustomTextChange(e)
					}
				}
				renderDropdownMenu(e) {
					const {
						props: t
					} = this, {
						onOpenDropdown: n,
						reason: r,
						rulesSequence: i
					} = t, a = r.nextStepReasons, l = i.length > e ? i[e] : -1, c = a && l >= 0 ? a[l] : null;
					return s.a.createElement(A, {
						onClick: n
					}, s.a.createElement(j, {
						displayText: c ? c.reasonTextToShow : "",
						id: me
					}), s.a.createElement(B, null), s.a.createElement(F, {
						isChosen: !!c
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(L, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: me
					}, a ? a.map((n, o) => s.a.createElement(k, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: l === o,
						onClick: n.nextStepReasons && n.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(o, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(o, e), this.onRedditRuleChange(n)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, n) {
					const {
						props: o
					} = this, {
						rulesSequence: r
					} = o, i = e.nextStepReasons, a = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return i && i.length ? s.a.createElement("div", {
						style: {
							padding: "10px ".concat(10 * t, "px"),
							display: a === n ? "block" : "none"
						}
					}, s.a.createElement(I, null, e.nextStepHeader), i.map((e, n) => {
						const o = l === n;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(pe.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: o,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
							}
						}), o && e.canWriteNotes && s.a.createElement(ce.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, n))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: n
					} = e;
					if (n) {
						const {
							rulesSequence: n
						} = e, o = t.nextStepReasons, r = n.length > 1 ? n[1] : -1, i = o && r >= 0 ? o[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var be = Object(i.b)(he, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: me
					}))
				}))(fe),
				Ce = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ye = n("./src/reddit/selectors/subreddit.ts"),
				xe = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				ge = n.n(xe);
			const Se = "ReportFlow--SubredditRules",
				Te = "Custom response",
				Re = p.a.wrapped(L, "Dropdown", ge.a),
				ve = p.a.wrapped(k, "DropdownRow", ge.a),
				Oe = p.a.wrapped(Ce.i, "FreeFormTextArea", ge.a),
				Ee = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(Se),
					freeFormReports: ye.F
				});
			class _e extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, de.a.Other)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.state = {
						dropdownRule: null
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return s.a.createElement("div", null, s.a.createElement(A, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(j, {
						displayText: n,
						id: Se
					}), s.a.createElement(B, null), s.a.createElement(F, {
						isChosen: !!n
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(Re, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: Se
					}, e.subredditRules.map((t, n) => s.a.createElement(ve, {
						key: "".concat(t, "-").concat(n),
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, de.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(ve, {
						displayText: o.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === Te,
						onClick: () => {
							this.onChangeDropdownRule(Te), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === Te ? s.a.createElement(Oe, {
						placeholder: o.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var we = Object(i.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: Se
					}))
				}))(_e),
				Ie = n("./src/reddit/models/RulesSequence/index.ts"),
				ke = n("./src/reddit/models/Subreddit/index.ts"),
				Ae = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				Pe = n.n(Ae);
			const Fe = p.a.wrapped(C.i, "SubmitButton", Pe.a);
			class Ne extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Ie.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: n
					} = this;
					n.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: n
					} = this, r = n.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ae.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === ke.e.User ? o.fbt._("It breaks u/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : o.fbt._("It breaks r/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(we, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: o
					} = this, r = o.rulesSequence.getSequence();
					return s.a.createElement(ae.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(be, {
						onChosenRuleChange: n.onChosenRuleChange,
						onCustomTextChange: n.onCustomTextChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: r,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						reasons: t
					} = e;
					if (!t || !t.length) return null;
					const n = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return s.a.createElement("div", null, s.a.createElement(E, null, o.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(h.a, {
						className: Pe.a.Footer
					}, s.a.createElement(O, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(w, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Fe, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : o.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var Le = Ne,
				Be = n("./src/reddit/icons/svgs/Close/index.tsx"),
				je = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Me = n.n(je);
			const De = p.a.wrapped(h.a, "Title", Me.a),
				Ue = p.a.div("CloseWrapper", Me.a),
				$e = p.a.wrapped(Be.a, "Close", Me.a);
			var We, He, qe = e => s.a.createElement(De, null, s.a.createElement("div", null, e.title), s.a.createElement(Ue, {
					onClick: e.onClosePressed
				}, s.a.createElement($e, null))),
				Ve = n("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(We || (We = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(He || (He = {}));
			var Ke = n("./src/reddit/selectors/comments.ts"),
				Ye = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Ge = n("./src/reddit/selectors/posts.ts"),
				Je = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				ze = n.n(Je);
			const Xe = p.a.div("CloseWrapper", ze.a),
				Ze = p.a.wrapped(Be.a, "Close", ze.a),
				Qe = Object(a.c)({
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(Ke.n)(e, {
							commentId: n
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: n
						} = t;
						const o = n && e.posts.models[n];
						return !!o && Object(Ve.i)(o)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(Ge.N)(e, {
							postId: n
						}) : null
					},
					reportedPending: e => e.reportFlow.api.pending,
					reportedSuccess: e => e.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(Ge.ab)(e, {
							postId: n
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.reportFlow.userIsMod,
					crisisFlowEnabled: Ye.a
				});
			class et extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === de.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === de.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === de.a.FileComplaint || this.state.chosenRuleKind === de.a.CrisisTextLine) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						}
					}, this.onChosenRuleChange = (e, t) => {
						this.setState({
							chosenRule: e,
							chosenRuleKind: t
						})
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e
						})
					}, this.state = {
						showFileAComplaintPage: !1,
						showCTLPage: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				getFirstPage() {
					const {
						state: e,
						props: t
					} = this, n = t.commentId ? We.Comment : We.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, a = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (a && i[a])
						for (const o of i[a].rules) o.kind !== n && o.kind !== We.All || l.push(0 !== o.violationReason.length ? o.violationReason : o.shortName);
					const c = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return s.a.createElement(Le, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: l,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: c,
						rulesCategory: t.rulesCategory,
						subredditOrProfile: t.subredditOrProfile,
						submitButtonText: r ? o.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return s.a.createElement(H, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(c.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const n = t.comment ? t.comment.author : "";
						return s.a.createElement(ie, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const n = t.post ? t.post.author : "";
						return s.a.createElement(ie, {
							authorName: n,
							chosenRule: e.chosenRule,
							isLiveStreaming: t.isLiveStreaming,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					return this.getFirstPage()
				}
				getContent() {
					const {
						state: e,
						props: t
					} = this;
					if (t.crisisFlowEnabled && e.chosenRuleKind === de.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Xe, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Ze, null)), s.a.createElement(d.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? We.Comment : We.Post) === We.Post ? o.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? o.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : o.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(qe, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: ze.a.Wrapper
					}, this.getContent())
				}
			}
			const tt = Object(i.b)(Qe, (e, t) => {
				let {
					timestamp: n
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(u.i)())
					},
					onReportPostOrComment: (t, o, r) => {
						e(Object(u.h)({
							id: t,
							reportFlowPayload: o,
							timestamp: n
						}, r))
					}
				}
			})(et);
			t.default = Object(l.a)(tt)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/lodash/get.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js");
			const c = {
				$type: "spec",
				$version: "1",
				spec: "component",
				version: "1",
				state: {
					categoryOrRule: {
						nextAction: "",
						value: "",
						label: "",
						description: "",
						icon: null
					},
					siteRule: {
						nextAction: "",
						value: "",
						label: ""
					},
					subredditRule: {
						value: "",
						label: ""
					},
					ruleType: "",
					blockAuthor: !1,
					formSubmitted: !1,
					screenId: "landingPage",
					screenSequence: []
				},
				component: {
					$type: "component",
					componentType: "OneOf",
					props: {
						children: [{
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "landingPage"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "TextBlock",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Help us understand the problem. What's happening with this post?"
											}]
										}
									}, {
										$type: "component",
										componentType: "ButtonBar",
										props: {
											options: [{
												nextAction: "screen",
												value: "HARASSMENT",
												label: "Harassment",
												description: "Harassing, bullying, threatening, intimidating, or abusing someone with the intent to create a hostile environment or discourage them from participating on Reddit.",
												icon: null
											}, {
												nextAction: "screen",
												value: "VIOLENCE",
												label: "Violence",
												description: "Encouraging, glorifying, inciting, or calling for violence or physical harm against people, a place, or animals.",
												icon: null
											}, {
												nextAction: "screen",
												value: "HATE_CONTENT",
												label: "Hate Content",
												description: "Vilifying, humiliating, harassing, promoting identity based attacks against, promoting hatred against, or threatening violence against marginalized or vulnerable groups.",
												icon: null
											}, {
												nextAction: "screen",
												value: "MINOR_SEXUALIZATION",
												label: "Minor sexualiztion",
												description: "Soliciting, sharing, or encouraging the sharing of sexual or suggestive content, including fantasy content, involving minors or people who appear to be minors.",
												icon: null
											}, {
												nextAction: "screen",
												value: "PII",
												label: "Personal or confidential information",
												description: "Sharing or threatening to share private, personal, or confidential information about someone.",
												icon: null
											}, {
												nextAction: "screen",
												value: "INVOLUNTARY_PORN",
												label: "Involuntary pornography",
												description: "Sharing, threatening to share, or soliciting intimate or sexually-explicit media of someone without their consent.",
												icon: null
											}, {
												nextAction: "formSubmit",
												value: "PROHIBITED_SALES",
												label: "Prohibited transaction",
												description: "Soliciting or facilitating transactions or gifts of illegal or prohibited goods and services. (Reddit is not intended to be used as a marketplace.)",
												icon: null
											}, {
												nextAction: "screen",
												value: "REPORT_BUTTON_ABUSE",
												label: "Abusing the report button",
												description: "Using Reddit’s reporting tools to spam, harass, bully, intimidate, abuse, or create a hostile environment.",
												icon: null
											}, {
												nextAction: "screen",
												value: "IMPERSONATION",
												label: "Impersonation",
												description: "Impersonating an individual or entity in a misleading or deceptive way. (Includes deepfakes or manipulated content shared to mislead, or falsely attributing to an individual or entity.) ",
												icon: null
											}, {
												nextAction: "screen",
												value: "COPYRIGHT",
												label: "Copyright violation",
												description: "Content posted to Reddit that infringes a copyright you own or control. (Note: Only the copyright owner or an authorized representative can submit a report.)",
												icon: null
											}, {
												nextAction: "screen",
												value: "TRADEMARK",
												label: "Trademark violation",
												description: "Content posted to Reddit that infringes a trademark you own or control. (Note: Only the trademark owner or an authorized representative can submit a report.) ",
												icon: null
											}, {
												nextAction: "openTemplatedUrl",
												value: "netzdg",
												label: "NetzDG report",
												description: "Behavior or content that's in violation of the specific sections of the German Criminal Code identified in the Network Enforcement Act (NetzDG).",
												icon: null
											}, {
												nextAction: "screen",
												value: "SELF_HARM",
												label: "Self-harm or suicide",
												description: "Behavior or comments that make you think someone may be considering suicide or seriously hurting themselves.",
												icon: null
											}, {
												nextAction: "screen",
												value: "SPAM",
												label: "Spam",
												description: "Repeated, unwanted, or unsolicited manual or automated actions that negatively affect redditors, communities, and the Reddit platform.",
												icon: null
											}, {
												nextAction: "screen",
												value: "MISINFORMATION",
												label: "Misinformation",
												description: "Deliberately or covertly spreading false information in order to influence public opinion or obscure the truth.",
												icon: null
											}, {
												nextAction: "screen",
												value: "BAN_EVASION",
												label: "Ban evasion",
												description: "",
												icon: null
											}, {
												nextAction: "screen",
												value: "VOTE_MANIPULATION",
												label: "Vote manipulation",
												description: "",
												icon: null
											}, {
												nextAction: "screen",
												value: "subreddit",
												label: "Violates r/askhistorians's rules",
												description: "Violating this community's rules",
												icon: ""
											}],
											value: {
												$type: "ref",
												ref: "categoryOrRule"
											}
										}
									}, {
										$type: "component",
										componentType: "InfoTooltip",
										props: {
											icon: "info",
											textContent: [{
												type: "PlainText",
												text: "Not sure if something is breaking the rules? Review"
											}, {
												type: "Link",
												text: "Reddit's Content Policy",
												linkTo: "https://www.reddit.com/policy",
												newTab: "true"
											}, {
												type: "PlainText",
												text: "and"
											}, {
												type: "Link",
												text: "r/askhistorians rules",
												linkTo: "https://www.reddit.com/r/$askhistorians/about/rules",
												newTab: "false"
											}]
										}
									}, {
										$type: "component",
										componentType: "ScreenFooter",
										props: {
											children: [{
												$type: "component",
												componentType: "FooterContent",
												props: {
													visible: {
														$type: "computed",
														function: "neq",
														args: [{
															$type: "ref",
															ref: "categoryOrRule.value"
														}, ""]
													},
													title: {
														$type: "ref",
														value: "categoryOrRule.label"
													},
													text: {
														$type: "ref",
														value: "categoryOrRule.description"
													}
												}
											}, {
												$type: "component",
												componentType: "Button",
												props: {
													text: {
														$type: "computed",
														function: "conditionalSelect",
														conditions: [{
															$type: "computed",
															function: "eq",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.nextAction"
															}, "formSubmit"]
														}, !0],
														values: ["Submit Report", "Next"]
													},
													disabled: {
														$type: "computed",
														function: "eq",
														args: [{
															$type: "ref",
															ref: "categoryOrRule.value"
														}, ""]
													},
													action: {
														$type: "computed",
														function: "conditionalSelect",
														conditions: [{
															$type: "computed",
															function: "eq",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.nextAction"
															}, "screen"]
														}, {
															$type: "computed",
															function: "eq",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.nextAction"
															}, "formSubmit"]
														}, {
															$type: "computed",
															function: "eq",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.nextAction"
															}, "openTemplatedUrl"]
														}, {
															$type: "computed",
															function: "eq",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.nextAction"
															}, "flow"]
														}],
														values: [{
															$type: "actionType",
															actionType: "setState",
															args: {
																key: "screenId",
																value: {
																	$type: "ref",
																	ref: "categoryOrRule.value"
																}
															}
														}, {
															$type: "actionType",
															actionType: "formSubmit",
															args: {
																ruleType: "site",
																ruleId: {
																	$type: "ref",
																	ref: "categoryOrRule.value"
																}
															}
														}, {
															$type: "actionType",
															actionType: "openTemplatedUrl",
															args: {
																urlTemplate: "https://www.reddit.com/api/report_redirect?reason_code=%(reason)s&thing=t3_2u",
																placeholders: ["reason"],
																reason: {
																	$type: "ref",
																	ref: "siteRule.value"
																}
															}
														}, {
															$type: "actionType",
															actionType: "flow",
															args: [{
																$type: "ref",
																ref: "categoryOrRule.value"
															}]
														}]
													}
												}
											}]
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "subreddit"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Which"
											}, {
												type: "PlainText",
												text: "community rule",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "does this violate?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "it's bad",
												label: "it's bad"
											}],
											value: {
												$type: "ref",
												ref: "subredditRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "subreddit",
													ruleId: {
														$type: "ref",
														ref: "subredditRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "HARASSMENT"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Who is the"
											}, {
												type: "PlainText",
												text: "harassment",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "targeted at?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "HARASSMENT_AT_ME",
												label: "You"
											}, {
												value: "HARASSMENT_AT_SOMEONE_ELSE",
												label: "Someone else"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "VIOLENCE"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Who is the"
											}, {
												type: "PlainText",
												text: "threat",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "towards?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "VIOLENCE_AT_ME",
												label: "You"
											}, {
												value: "VIOLENCE_AT_SOMEONE_ELSE",
												label: "Someone else"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "PII"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Whose"
											}, {
												type: "PlainText",
												text: "personal information",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "is being shared?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "PII_ABOUT_ME",
												label: "Yours"
											}, {
												value: "PII_ABOUT_SOMEONE_ELSE",
												label: "Someone else"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "INVOLUNTARY_PORN"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Who appears in the"
											}, {
												type: "PlainText",
												text: "involuntary pornography",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "INVOLUNTARY_PORN_SELF",
												label: "You"
											}, {
												value: "INVOLUNTARY_PORN_OTHER",
												label: "Someone else"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "IMPERSONATION"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Who is being"
											}, {
												type: "PlainText",
												text: "impersonated",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "IMPERSONATION_SELF",
												label: "You or an individual or entity you represent"
											}, {
												value: "IMPERSONATION_OTHER",
												label: "Someone else"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "COPYRIGHT"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Whose"
											}, {
												type: "PlainText",
												text: "copyright",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "does this infringe upon?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "COPYRIGHT",
												label: "Yours or an individual or entity I represent"
											}, {
												value: "COPYRIGHT",
												label: "Someone else's"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "openTemplatedUrl",
												args: {
													urlTemplate: "https://www.reddit.com/api/report_redirect?reason_code=%(reason)s&thing=t3_2u",
													placeholders: ["reason"],
													reason: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "trademark"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Whose"
											}, {
												type: "PlainText",
												text: "trademark",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "does this infringe upon?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "TRADEMARK_SELF",
												label: "Yours or an individual or entity you represent"
											}, {
												value: "TRADEMARK_OTHER",
												label: "Someone else's"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "openTemplatedUrl",
												args: {
													urlTemplate: "https://www.reddit.com/api/report_redirect?reason_code=%(reason)s&thing=t3_2u",
													placeholders: ["reason"],
													reason: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "SPAM"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "What type of"
											}, {
												type: "PlainText",
												text: "spam",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "is this?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "SPAM_LINK_FARMING",
												label: "Link farming"
											}, {
												value: "SPAM_UNSOLICITED_PMS",
												label: "Unsolicited messaging"
											}, {
												value: "SPAM_COMMENT_FLOODING",
												label: "Excessive posts or comments in a community"
											}, {
												value: "SPAM_MALWARE",
												label: "Posting harmful links (malware)"
											}, {
												value: "SPAM_BOTS",
												label: "Harmful bots"
											}, {
												value: "SPAM_OTHER",
												label: "Other"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "computed",
								function: "eq",
								args: [{
									$type: "ref",
									ref: "screenId"
								}, "MISINFORMATION"]
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "What type of"
											}, {
												type: "PlainText",
												text: "misinformation",
												emphasis: "color"
											}, {
												type: "PlainText",
												text: "is this?"
											}]
										}
									}, {
										$type: "component",
										componentType: "SelectOne",
										props: {
											options: [{
												value: "misinformation_health",
												label: "Health misinformation"
											}, {
												value: "misinformation_politics",
												label: "Political misinformation"
											}, {
												value: "misinformation_fabrication",
												label: "Misleading or manipulated media or documents"
											}, {
												value: "misinformation_conspiracy",
												label: "A conspiracy theory"
											}, {
												value: "misinformation_other",
												label: "Other"
											}],
											value: {
												$type: "ref",
												ref: "siteRule"
											},
											onChange: {
												$type: "actionType",
												actionType: "formSubmit",
												args: {
													ruleType: "site",
													ruleId: {
														$type: "ref",
														ref: "siteRule.value"
													}
												}
											}
										}
									}]
								}
							}
						}, {
							condition: {
								$type: "ref",
								ref: "formSubmitted"
							},
							component: {
								$type: "component",
								componentType: "Screen",
								props: {
									children: [{
										$type: "component",
										componentType: "ScreenIcon",
										props: {
											path: "success"
										}
									}, {
										$type: "component",
										componentType: "ScreenTitle",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Thanks for your report"
											}]
										}
									}, {
										$type: "component",
										componentType: "TextBlock",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Thanks again for your report and for looking out for yourself and your fellow redditors. Your reporting helps make Reddit a better, safer, and more welcoming place for everyone; and it means a lot to us."
											}]
										}
									}, {
										$type: "component",
										componentType: "TextBlock",
										props: {
											textContent: [{
												type: "PlainText",
												text: "Currently, your report is awaiting review. Once someone looks it over, a community moderator or a member of our support team will send you a direct message with an update."
											}]
										}
									}, {
										$type: "component",
										componentType: "ScreenFooter",
										props: {
											isVertical: !0,
											children: [{
												$type: "component",
												componentType: "ToggleSwitch",
												props: {
													icon: "UserBlocked",
													title: "Block {user}",
													text: "You won’t be able to message, chat, or access each other’s posts, comments, or profile.",
													control: {
														$type: "component",
														componentType: "RadioSlide",
														props: {
															value: {
																$type: "ref",
																ref: "blockAuthor"
															}
														}
													}
												}
											}, {
												$type: "component",
												componentType: "Button",
												props: {
													text: "Done",
													action: {
														$type: "actionType",
														actionType: "formClose",
														args: {
															blockAuthor: {
																$type: "ref",
																ref: "blockAuthor"
															}
														}
													}
												}
											}]
										}
									}]
								}
							}
						}]
					}
				}
			};
			var p = n("./src/reddit/actions/reportFlow.ts"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/formik/dist/formik.esm.js")),
				m = n("./node_modules/lodash/isEmpty.js"),
				h = n.n(m);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => i.a.createElement("svg", f({
					viewBox: "0 0 11.4 11.4",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg",
					transform: "rotate(180)"
				}, e), i.a.createElement("g", null, i.a.createElement("path", {
					fill: "inherit",
					d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
				}))),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				y = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/FormBuilder/FormBuilderHeader/index.m.less"),
				g = n.n(x);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = y.a.div("FormBuilderHeaderWrapper", g.a), R = y.a.wrapped(C.a, "Close", g.a), v = y.a.wrapped(b, "ArrowLeft", g.a);

			function O(e) {
				const {
					values: t,
					setFieldValue: n,
					onCloseClick: o,
					headerTitle: r
				} = e;
				return i.a.createElement(T, null, t.screenSequence.length > 1 && !t.formSubmitted && i.a.createElement(v, {
					className: g.a.backButton,
					onClick: () => {
						const e = t.screenSequence.slice(0, t.screenSequence.length - 1);
						e.pop(), n("screenSequence", e), n("screenId", e[e.length - 1])
					}
				}), r, i.a.createElement(R, {
					onClick: () => o()
				}))
			}
			var E = n("./node_modules/lodash/isString.js"),
				_ = n.n(E),
				w = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				I = n("./src/reddit/components/FormBuilder/helpers/index.m.less"),
				k = n.n(I);
			const A = (e, t) => {
					const {
						args: n,
						$type: o,
						ref: s
					} = e;
					if ("computed" === o && n) {
						const o = n.map(e => "ref" === e.$type ? r()(t, e.ref) : e);
						switch (e.function) {
							case "neq":
								return String(o[0]) !== String(o[1]);
							case "eq":
							default:
								return String(o[0]) === String(o[1])
						}
					} else if ("ref" === o && s) return r()(t, s);
					return !1
				},
				P = e => i.a.createElement(i.a.Fragment, null, e.map(e => {
					switch (e.type) {
						case "Link":
							return i.a.createElement(s.Fragment, {
								key: e.text
							}, i.a.createElement(w.a, {
								to: e.linkTo,
								target: e.newTab ? "_blank" : "_self"
							}, e.text), " ");
						case "PlainText":
						default:
							return i.a.createElement(s.Fragment, {
								key: e.text
							}, i.a.createElement("span", {
								className: e.emphasis && k.a["textEmphasis-".concat(e.emphasis)]
							}, e.text), " ")
					}
				})),
				F = (e, t) => {
					if ("computed" === e.$type && "conditionalSelect" === e.function) {
						const n = e.conditions;
						for (const [o, r] of n.entries())
							if (!0 === r || A(r, t.values)) return e.values[o]
					}
					return e
				},
				N = (e, t) => {
					if ("computed" === e.$type && "conditionalSelect" === e.function) {
						const n = e.conditions;
						for (const [o, r] of n.entries())
							if (!0 === r || A(r, t.values)) return e.values[o]
					}
					return e
				},
				L = (e, t) => {
					var n, o;
					switch (e.actionType) {
						case "formClose":
							return {
								formClose: !0
							};
						case "formSubmit":
							return {
								formSubmit: !0, data: e.args
							};
						case "openTemplatedUrl":
							const {
								urlTemplate: s, placeholders: i
							} = e.args;
							let a = s;
							for (const n of i) {
								const o = r()(t.values, e.args[n].ref);
								a = a.replaceAll("%(".concat(n, ")s"), o)
							}
							return window.open(a), {
								formClose: !0
							};
						case "reportRedirectUrl":
							const l = (r()(t.values, null === (o = null === (n = e.args) || void 0 === n ? void 0 : n.ruleId) || void 0 === o ? void 0 : o.ref) || "").toUpperCase(),
								c = void 0;
							return window.open("https://www.reddit.com/api/report_redirect?thing=".concat(c, "&reason_code=").concat(l)), {
								formClose: !0
							};
						case "setState":
						default:
							const {
								key: p, value: d
							} = e.args;
							if ("computed" === d.$type) {
								const e = r()(t.values, d.args.value.ref),
									n = d.args.options.filter(t => t.case === e)[0].value;
								return t.setFieldValue(p, n)
							}
							return "ref" === d.$type ? t.setFieldValue(p, r()(t.values, d.ref)) : _()(d) ? t.setFieldValue(p, d) : void 0
					}
				};
			var B = n("./src/reddit/components/FormBuilder/components/Button/index.m.less"),
				j = n.n(B);
			const M = y.a.button("ButtonWrapper", j.a);

			function D(e) {
				const {
					text: t,
					action: n,
					disabled: o,
					formikProps: r,
					condition: s,
					onCloseModal: a,
					onSubmitDataUpdate: l
				} = e, c = !s || A(s, r.values), p = !0 === o || !!o && A(o, r.values), d = n ? N(n, r) : null, u = F(t, r);
				return c ? i.a.createElement(M, {
					type: "button",
					onClick: () => {
						if (!n) return;
						const e = L(d, r);
						(null == e ? void 0 : e.formClose) ? a(): (null == e ? void 0 : e.formSubmit) && l && l(e.data, r.submitForm)
					},
					disabled: p
				}, u) : null
			}
			var U = n("./src/reddit/components/FormBuilder/components/ButtonBar/index.m.less"),
				$ = n.n(U);
			const W = y.a.div("ButtonBarWrapper", $.a),
				H = y.a.div("ButtonBarButton", $.a);

			function q(e) {
				const {
					options: t,
					value: n,
					formikProps: o
				} = e, r = "ref" === n.$type ? n.ref : n, s = o.values[r];
				return i.a.createElement(W, null, t.map(e => {
					const t = e.icon ? {
						backgroundImage: "url(".concat(e.icon, ")")
					} : {
						backgroundImage: "none"
					};
					return i.a.createElement(H, {
						key: e.value,
						className: e.value === s.value ? $.a.isSelected : ""
					}, i.a.createElement(u.a, {
						type: "checkbox",
						id: e.value,
						value: e.value,
						name: r,
						key: e.value,
						onChange: () => o.setFieldValue(r, e)
					}), i.a.createElement("label", {
						htmlFor: e.value,
						style: t,
						className: e.icon ? $.a.withIcon : ""
					}, e.label))
				}))
			}
			var V = n("./src/reddit/components/FormBuilder/components/FooterContent/index.m.less"),
				K = n.n(V);
			const Y = y.a.div("FooterContentWrapper", K.a);

			function G(e) {
				const {
					title: t,
					text: n,
					visible: o,
					formikProps: s
				} = e;
				return !o || A(o, s) ? i.a.createElement(Y, null, t && i.a.createElement("h4", null, "ref" === t.$type ? r()(s.values, t.value) : t.value), n && i.a.createElement("p", null, "ref" === n.$type ? r()(s.values, n.value) : n.value)) : null
			}
			var J = n("./src/reddit/icons/svgs/Info/index.tsx"),
				z = n("./src/reddit/components/FormBuilder/components/InfoTooltip/index.m.less"),
				X = n.n(z);
			const Z = y.a.div("InfoTooltipWrapper", X.a),
				Q = y.a.wrapped(J.a, "InfoIcon", X.a),
				ee = y.a.div("InfoContent", X.a);

			function te(e) {
				const {
					textContent: t
				} = e;
				return i.a.createElement(Z, null, i.a.createElement(Q, null), i.a.createElement(ee, null, i.a.createElement("p", null, P(t))))
			}

			function ne(e) {
				const {
					components: t,
					formikProps: n,
					renderComponent: o
				} = e, r = t.filter(e => {
					if (A(e.condition, n.values)) return e
				});
				return r.length ? i.a.createElement(i.a.Fragment, null, o(r[0].component, n)) : null
			}

			function oe(e) {
				const {
					children: t,
					formikProps: n,
					renderComponent: o
				} = e, r = [...n.values.screenSequence], a = n.values.screenId;
				return r[r.length - 1] !== a && n.setFieldValue("screenSequence", [...r, a]), i.a.createElement("fieldset", null, t.map((e, t) => i.a.createElement(s.Fragment, {
					key: t
				}, o(e, n))))
			}
			var re = n("./src/reddit/components/FormBuilder/components/ScreenFooter/index.m.less"),
				se = n.n(re);
			const ie = y.a.footer("ScreenFooterWrapper", se.a);

			function ae(e) {
				const {
					children: t,
					formikProps: n,
					renderComponent: o,
					isVertical: r
				} = e;
				return i.a.createElement(ie, {
					className: r ? se.a.isVertical : ""
				}, t.map((e, t) => i.a.createElement(s.Fragment, {
					key: t
				}, o(e, n))))
			}
			var le = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				ce = n("./src/reddit/components/FormBuilder/components/ScreenIcon/index.m.less"),
				pe = n.n(ce);
			const de = y.a.div("ScreenIconWrapper", pe.a);

			function ue(e) {
				let t;
				switch (e.icon) {
					case "CircleCheck":
					default:
						t = i.a.createElement(le.a, null)
				}
				return i.a.createElement(de, null, t)
			}
			var me = n("./src/reddit/components/FormBuilder/components/ScreenTitle/index.m.less"),
				he = n.n(me);
			const fe = y.a.div("ScreenTitleWrapper", he.a);

			function be(e) {
				return i.a.createElement(fe, null, P(e.textContent))
			}
			var Ce = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ye = n("./src/reddit/components/FormBuilder/components/SelectOne/index.m.less"),
				xe = n.n(ye);
			const ge = y.a.div("RadioList", xe.a),
				Se = y.a.div("RadioListButton", xe.a);

			function Te(e) {
				const {
					options: t,
					value: n,
					formikProps: o,
					action: s,
					onCloseModal: a,
					onSubmitDataUpdate: l
				} = e, c = "ref" === n.$type ? n.ref : n, p = r()(o.values, c);
				return i.a.createElement(ge, null, t.map(e => i.a.createElement(Se, {
					key: e.value
				}, i.a.createElement(u.a, {
					type: "radio",
					id: e.value,
					value: e.value,
					name: "ref" === n.$type ? n.ref : n,
					onChange: () => (e => {
						if (o.setFieldValue(c, e), !s) return;
						const t = Object.assign(Object.assign({}, o), {
								values: Object.assign(Object.assign({}, o.values), {
									[c]: e
								})
							}),
							n = L(s, t);
						(null == n ? void 0 : n.formClose) && a ? a() : (null == n ? void 0 : n.formSubmit) && l && l(n.data, o.submitForm)
					})(e),
					checked: e.value === p.value
				}), i.a.createElement("label", {
					htmlFor: e.value
				}, e.label, i.a.createElement(Ce.a, null)))))
			}
			var Re = n("./src/reddit/components/FormBuilder/components/TextBlock/index.m.less"),
				ve = n.n(Re);
			const Oe = y.a.p("TextBlockWrapper", ve.a);

			function Ee(e) {
				return i.a.createElement(Oe, null, P(e.textContent))
			}
			var _e = n("./src/reddit/icons/svgs/UserBlocked/index.tsx"),
				we = n("./src/reddit/components/FormBuilder/components/ToggleSwitch/index.m.less"),
				Ie = n.n(we);
			const ke = y.a.div("ToggleSwitchWrapper", Ie.a),
				Ae = y.a.div("ToggleSwitchContent", Ie.a),
				Pe = y.a.div("ControlWrapper", Ie.a);

			function Fe(e) {
				const {
					icon: t,
					title: n,
					text: o,
					control: s,
					formikProps: a
				} = e;
				let l;
				switch (t) {
					case "UserBlocked":
					default:
						l = i.a.createElement(_e.a, null)
				}
				return i.a.createElement(ke, null, l, i.a.createElement(Ae, null, i.a.createElement("h4", null, n), i.a.createElement("p", null, o)), i.a.createElement(Pe, {
					className: Ie.a[s.componentType]
				}, i.a.createElement(u.a, {
					type: "RadioSlide" === s.componentType ? "radio" : "checkbox",
					name: s.props.value.ref,
					id: s.props.value.ref,
					onChange: () => {
						const e = r()(a.values, s.props.value.ref);
						return a.setFieldValue(s.props.value.ref, !e)
					},
					className: !0 === r()(a.values, s.props.value.ref) ? Ie.a.isChecked : ""
				}), i.a.createElement("label", {
					htmlFor: s.props.value.ref
				})))
			}
			var Ne = n("./src/reddit/components/FormBuilder/index.m.less"),
				Le = n.n(Ne);
			const {
				fbt: Be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = y.a.div("Wrapper", Le.a), Me = y.a.div("FormBuilderWrapper", Le.a);
			class De extends i.a.Component {
				constructor(e) {
					super(e), this.renderComponent = (e, t) => {
						const {
							componentType: n
						} = e;
						switch (n) {
							case "OneOf":
								return i.a.createElement(ne, {
									components: e.props.children,
									formikProps: t,
									renderComponent: this.renderComponent
								});
							case "Screen":
								return i.a.createElement(oe, {
									formikProps: t,
									renderComponent: this.renderComponent
								}, e.props.children);
							case "TextBlock":
								return i.a.createElement(Ee, {
									textContent: e.props.textContent
								});
							case "ButtonBar":
								return i.a.createElement(q, {
									options: e.props.options,
									value: e.props.value,
									formikProps: t
								});
							case "InfoTooltip":
								return i.a.createElement(te, {
									textContent: e.props.textContent
								});
							case "ScreenFooter":
								return i.a.createElement(ae, {
									formikProps: t,
									renderComponent: this.renderComponent,
									isVertical: e.props.isVertical
								}, e.props.children);
							case "FooterContent":
								return i.a.createElement(G, {
									title: e.props.title,
									text: e.props.text,
									formikProps: t,
									visible: e.props.visible
								});
							case "ScreenTitle":
								return i.a.createElement(be, {
									textContent: e.props.textContent
								});
							case "SelectOne":
								return i.a.createElement(Te, {
									options: e.props.options,
									value: e.props.value,
									formikProps: t,
									action: e.props.onChange,
									onCloseModal: this.props.onCloseClick,
									onSubmitDataUpdate: this.onSubmitDataUpdate
								});
							case "ScreenIcon":
								return i.a.createElement(ue, {
									icon: e.props.icon
								});
							case "Button":
								return i.a.createElement(D, {
									text: e.props.text,
									action: e.props.action,
									disabled: e.props.disabled,
									formikProps: t,
									condition: e.props.condition,
									onCloseModal: this.props.onCloseClick,
									onSubmitDataUpdate: this.onSubmitDataUpdate
								});
							case "ToggleSwitch":
								return i.a.createElement(Fe, {
									icon: e.props.icon,
									title: e.props.title,
									text: e.props.text,
									control: e.props.control,
									formikProps: t
								});
							default:
								return null
						}
					}, this.onFormSubmit = (e, t) => {
						const {
							props: {
								onSubmit: n
							},
							state: {
								submitData: o
							}
						} = this;
						if (!o) return;
						n(o, e);
						const r = Object.assign(Object.assign({}, this.state.initialState), {
							screenId: "",
							formSubmitted: !0
						});
						t.setValues(Object.assign({}, r))
					}, this.onSubmitDataUpdate = (e, t) => {
						this.setState({
							submitData: e
						}, t)
					}, this.state = {
						initialState: e.formState,
						submitData: null
					}
				}
				renderFormBuilder(e) {
					return h()(e.values) && e.setValues(Object.assign({}, this.props.formState)), this.renderComponent(this.props.formComponent, e)
				}
				render() {
					const {
						formState: e,
						formComponent: t,
						onCloseClick: n,
						headerTitle: o
					} = this.props;
					return i.a.createElement(je, null, i.a.createElement(Me, null, i.a.createElement(u.c, {
						initialValues: Object.assign({}, e),
						onSubmit: (e, t) => this.onFormSubmit(e, t)
					}, r => i.a.createElement(u.b, null, i.a.createElement(O, {
						onCloseClick: n,
						values: r.values,
						setFieldValue: r.setFieldValue,
						headerTitle: o
					}), t && e && this.renderFormBuilder(r)))))
				}
			}
			var Ue = De,
				$e = n("./src/graphql/operations/ReportComment.json"),
				We = n("./src/lib/makeGqlRequest/index.ts");
			const He = (e, t) => Object(We.a)(e, Object.assign(Object.assign({}, $e), {
				variables: t
			}));
			var qe = n("./src/graphql/operations/ReportPost.json");
			const Ve = (e, t) => Object(We.a)(e, Object.assign(Object.assign({}, qe), {
				variables: t
			}));
			var Ke = n("./src/graphql/operations/ReportForm.json");
			var Ye = n("./src/reddit/contexts/ApiContext.tsx"),
				Ge = n("./src/reddit/models/Post/index.ts"),
				Je = n("./src/reddit/selectors/comments.ts"),
				ze = n("./src/reddit/selectors/posts.ts");
			const Xe = Object(l.c)({
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(ze.N)(e, {
							postId: n
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(Je.n)(e, {
							commentId: n
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: n
						} = t;
						const o = n && e.posts.models[n];
						return !!o && Object(Ge.i)(o)
					}
				}),
				Ze = Object(a.b)(Xe, (e, t) => {
					let {
						timestamp: n
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(p.i)())
						}
					}
				}),
				Qe = async (e, t) => {
					const n = await ((e, t) => Object(We.a)(e, Object.assign(Object.assign({}, Ke), {
						variables: t
					})))(e, t);
					if (n && n.ok) {
						const e = n.body.data.reportForm.form;
						return e ? JSON.parse(e) : null
					}
				};
			class et extends i.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: n,
								postId: o,
								commentId: s
							}
						} = this, i = s ? "comment" : o ? "post" : null;
						if (!i || !e) return;
						const {
							ruleId: a,
							ruleType: l
						} = e, c = "comment" === i ? s : o, p = {
							fromHelpDesk: !1,
							["".concat(i, "Id")]: c
						};
						switch (l) {
							case "site":
								p.siteRule = r()(t, a.ref);
								break;
							case "subreddit":
								p.subredditRule = r()(t, a.ref);
								break;
							case "custom":
							default:
								p.customRule = r()(t, a.ref)
						}
						switch (i) {
							case "post":
								await Ve(n(), {
									input: p
								});
								break;
							case "comment":
								await He(n(), {
									input: p
								});
								break;
							default:
								return
						}
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						gqlContext: e,
						postId: t,
						commentId: n
					} = this.props, o = n || t;
					Qe(e(), {
						itemId: o
					}).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return i.a.createElement(Ue, {
						formComponent: c.component,
						formState: c.state,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Report an issue"
					})
				}
			}
			const tt = Object(Ye.b)(Ze(et));
			t.default = Object(d.a)(tt)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				a = Object(o.createContext)(i);

			function l(e) {
				return t => r.a.createElement(a.Consumer, null, n => {
					let {
						apiContext: o,
						gqlContext: i
					} = n;
					return r.a.createElement(e, s({
						apiContext: o,
						gqlContext: i
					}, t))
				})
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: r.db.POST
			}), c = async (e, t, n) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: "".concat(e.apiUrl, "/api/unfriend"),
				method: r.db.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/add_whitelisted?include_model"),
				method: r.db.POST
			}), d = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/remove_whitelisted"),
				method: r.db.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				endpoint: "".concat(o.a.oauthUrl, "/user/").concat(t, "/about"),
				method: r.db.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
				}
				return n
			};
			const p = e => {
				var {
					className: t,
					isSubreddit: n
				} = e, o = c(e, ["className", "isSubreddit"]);
				return r.a.createElement("svg", l({
					className: Object(s.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = p
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
		},
		"./src/reddit/icons/svgs/UserBlocked/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.7499 9.69016C11.4722 9.57441 12.1615 9.29278 12.762 8.86323C13.5677 8.28683 14.173 7.47292 14.4933 6.53543C14.8135 5.59793 14.8326 4.58377 14.5479 3.63489C14.2632 2.686 13.6889 1.84988 12.9055 1.24355C12.122 0.637224 11.1686 0.29103 10.1786 0.253425C9.18863 0.21582 8.21168 0.488686 7.38448 1.03383C6.55728 1.57898 5.92123 2.36912 5.56535 3.29368C5.44599 3.60378 5.36015 3.92379 5.30813 4.24838L1.52985 0.470091C1.38767 0.337611 1.19963 0.265487 1.00532 0.268916C0.811023 0.272344 0.625638 0.351056 0.488225 0.488469C0.350812 0.625882 0.2721 0.811267 0.268672 1.00557C0.265243 1.19987 0.337367 1.38792 0.469847 1.53009L11.4511 12.5113C11.4571 12.5177 11.4632 12.5241 11.4694 12.5303C11.4757 12.5366 11.482 12.5427 11.4885 12.5487L18.4698 19.5301C18.5391 19.6002 18.6216 19.6558 18.7127 19.6936C18.8037 19.7313 18.9013 19.7506 18.9998 19.7501C19.0984 19.7506 19.196 19.7313 19.287 19.6936C19.3781 19.6558 19.4606 19.6002 19.5298 19.5301C19.6703 19.3895 19.7492 19.1988 19.7492 19.0001C19.7492 18.8013 19.6703 18.6107 19.5298 18.4701L18.7418 17.6821C18.6606 16.0084 17.96 14.4201 16.7698 13.23C15.5797 12.0398 13.9913 11.3392 12.3177 11.2579L10.7499 9.69016ZM14.3886 13.3288L16.6709 15.6112C16.4233 15.128 16.1002 14.6817 15.7091 14.2906C15.3181 13.8996 14.8718 13.5764 14.3886 13.3288ZM6.84298 5.78322C6.77923 5.52712 6.7479 5.26399 6.74977 5C6.74977 4.35721 6.94038 3.72886 7.29749 3.1944C7.65461 2.65994 8.16219 2.24338 8.75605 1.99739C9.34991 1.75141 10.0034 1.68705 10.6338 1.81245C11.2643 1.93785 11.8433 2.24738 12.2979 2.7019C12.7524 3.15642 13.0619 3.73552 13.1873 4.36596C13.3127 4.9964 13.2484 5.64986 13.0024 6.24372C12.7564 6.83758 12.3398 7.34516 11.8054 7.70228C11.2709 8.05939 10.6426 8.25 9.99977 8.25C9.73578 8.25243 9.47261 8.22112 9.21663 8.15687L6.84298 5.78322ZM1.47229 19.5275C1.61238 19.6676 1.80165 19.7474 1.99976 19.75C2.19786 19.7474 2.38713 19.6676 2.52722 19.5275C2.66732 19.3874 2.74717 19.1981 2.74976 19V18C2.7524 16.6084 3.30637 15.2746 4.29036 14.2906C5.27436 13.3066 6.60818 12.7526 7.99976 12.75C8.19867 12.75 8.38943 12.671 8.53009 12.5303C8.67074 12.3897 8.74976 12.1989 8.74976 12C8.74976 11.8011 8.67074 11.6103 8.53009 11.4697C8.38943 11.329 8.19867 11.25 7.99976 11.25C6.21036 11.2526 4.495 11.9647 3.22971 13.23C1.96441 14.4952 1.2524 16.2106 1.24976 18V19C1.25235 19.1981 1.3322 19.3874 1.47229 19.5275Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = e => e.blockedRedditors.api.pending,
				r = e => e.blockedRedditors.list,
				s = (e, t) => {
					const n = (e => {
						const t = r(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.d008127016507be58bc3.js.map