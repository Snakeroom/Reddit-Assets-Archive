// https://www.redditstatic.com/desktop2x/ReportFlow.a4214480d1ac0c5b7ce2.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
		"./src/lib/formatPythonString/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			const n = /%\((\w+)\)s/g;

			function r(e, t) {
				return e.replace(n, (function(e, o) {
					return o in t ? t[o] : e
				}))
			}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "postOrCommentReported", (function() {
				return L
			})), o.d(t, "reportFlowTargetSet", (function() {
				return M
			})), o.d(t, "reportFlowOpenedFromModalPage", (function() {
				return U
			})), o.d(t, "reportFlowOpenCategory", (function() {
				return H
			})), o.d(t, "reportFlowOpened", (function() {
				return B
			})), o.d(t, "reportFlowClosed", (function() {
				return q
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/login.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/reportRules.ts"),
				l = o("./src/reddit/actions/subreddit.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/actions/users.ts"),
				u = o("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = o("./src/reddit/endpoints/post/report.ts"),
				m = o("./src/reddit/helpers/isComment.ts"),
				h = o("./src/reddit/helpers/isPost.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/posts.ts"),
				b = o("./src/reddit/selectors/user.ts"),
				R = o("./src/lib/initializeClient/installReducer.ts"),
				C = o("./node_modules/redux/es/redux.js"),
				_ = o("./src/reddit/actions/reportFlow/constants.ts");
			const g = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.e:
					case _.d: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !1
						}
					}
					case _.c: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !0
						}
					}
					case _.f: {
						const o = t.payload;
						return o ? {
							...e,
							[o]: !1
						} : e
					}
					default:
						return e
				}
			};
			const w = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.e: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !0
						}
					}
					case _.d:
					case _.c: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !1
						}
					}
					case _.f: {
						const o = t.payload;
						return o ? {
							...e,
							[o]: !1
						} : e
					}
					default:
						return e
				}
			};
			const E = {};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.d: {
							const {
								id: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case _.e:
						case _.c: {
							const {
								id: o
							} = t.payload;
							return {
								...e,
								[o]: !1
							}
						}
						case _.f: {
							const o = t.payload;
							return o ? {
								...e,
								[o]: !1
							} : e
						}
						default:
							return e
					}
				},
				T = Object(C.c)({
					error: O,
					pending: S,
					success: v
				}),
				y = o("./src/reddit/actions/platform.ts");
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.a:
						return t.payload;
					case i.c:
						return !t.payload && e;
					case y.b:
						return !1;
					case _.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var I = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.f:
						return t.payload;
					case i.c:
						return t.payload ? null : e;
					case y.b:
						return null;
					default:
						return e
				}
			};
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.g:
						return t.payload;
					case _.f:
						return !1;
					default:
						return e
				}
			};
			var A = Object(C.c)({
				api: T,
				openedFromModalPage: F,
				postOrCommentId: I,
				userIsMod: k,
				rulesCategory: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.b:
							return t.payload
					}
					return e
				}
			});
			Object(R.a)({
				features: {
					reportFlow: A
				}
			});
			const P = Object(r.a)(_.e),
				N = Object(r.a)(_.d),
				j = Object(r.a)(_.c),
				L = (e, t) => async (o, r, s) => {
					let {
						apiContext: i
					} = s;
					const a = e.id,
						l = r(),
						c = l.features.reportFlow.api.pending[a],
						u = l.features.reportFlow.userIsMod;
					if (c) return;
					o(P({
						id: a
					}));
					const m = await Object(p.b)(i(), e),
						h = `error-report-${a}`;
					if (m.ok) o(N({
						id: a
					})), o(d.g(h)), !t.isAbuseOfReportButton && u && o(q());
					else {
						o(j({
							id: a
						}));
						const r = m.error && m.error.fields && m.error.fields.length ? m.error.fields[0].msg : "";
						o(d.f({
							id: h,
							kind: x.b.Error,
							text: r || n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: L(e, t)
						}))
					}
				}, M = Object(r.a)(_.f), U = Object(r.a)(_.a), H = Object(r.a)(_.b), B = (e, t, o) => async (n, r, d) => {
					let {
						apiContext: u
					} = d;
					const p = r(),
						x = Object(m.a)(e);
					if (!Object(h.a)(e) && !x) return;
					const R = x ? p.features.comments.models[e] : p.posts.models[e];
					if (!R) return;
					if (!Object(b.S)(r())) return n(Object(s.openRegisterModal)()), void n(Object(i.k)({
						actionSource: i.a.Report,
						redirectUrl: R.permalink,
						thingId: e
					}));
					n(Object(c.z)(R.author));
					const C = Object(f.U)(p, {
						postId: x ? p.features.comments.models[e].postId : p.posts.models[e].id
					});
					p.reportRules.sitewideRules && p.reportRules.sitewideRules.length || n(Object(a.b)()), C && n(Object(l.o)(C.name, C.type)), n(M(e)), n(U(!!t)), o && n(H(o)), C && n(G(C.name))
				}, D = Object(r.a)(_.g), G = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const s = await Object(u.a)(r());
					t(D(s.ok && !!s.body[e]))
				}, q = () => async (e, t, o) => {
					let {
						apiContext: n
					} = o;
					e(M(null))
				}
		},
		"./src/reddit/components/AccordionSection/index.m.less": function(e, t, o) {
			e.exports = {
				Section: "_2kFAvKy090RHUHuGKj-lZX",
				section: "_2kFAvKy090RHUHuGKj-lZX",
				ChevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				chevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				ChevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				chevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				ArticleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				articleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				mIsOpen: "_3wyxK8ak74f9lcJU0PCHYw",
				SectionHead: "_1MNP1i__B27h93k4ieBn36",
				sectionHead: "_1MNP1i__B27h93k4ieBn36",
				Article: "_1lO5zXuTJ63s0dtXcaPVbr",
				article: "_1lO5zXuTJ63s0dtXcaPVbr"
			}
		},
		"./src/reddit/components/AccordionSection/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/actions/tooltip.ts"),
				a = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				d = o("./src/reddit/components/AccordionSection/index.m.less"),
				c = o.n(d),
				u = o("./src/lib/classNames/index.ts"),
				p = o("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.div("Section", c.a),
				x = p.a.wrapped(l.a, "ChevronUp", c.a),
				f = p.a.wrapped(a.a, "ChevronDown", c.a),
				b = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: o,
						...n
					} = e;
					return r.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: o
						})
					}, n))
				}, "ArticleWrap", c.a),
				R = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: o,
						...n
					} = e;
					return r.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: o
						})
					}, n))
				}, "SectionHead", c.a),
				C = p.a.div("Article", c.a);
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(h, null, this.props.open ? r.a.createElement(x, null) : r.a.createElement(f, null), r.a.createElement(R, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(b, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(C, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(i.i)())
			}))(_)
		},
		"./src/reddit/components/ContentPolicy/index.m.less": function(e, t, o) {
			e.exports = {
				Content: "_3-EmzITVSpJTN0ZK7n_YaM",
				content: "_3-EmzITVSpJTN0ZK7n_YaM",
				Link: "_3O6FEW7DxfrphV_mOjif19",
				link: "_3O6FEW7DxfrphV_mOjif19"
			}
		},
		"./src/reddit/components/ContentPolicy/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return p
			}));
			var n = o("./src/config.ts"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/ContentPolicy/index.m.less"),
				l = o.n(a);
			const {
				fbt: d
			} = o("./node_modules/fbt/lib/FbtPublic.js"), c = i.a.div("Content", l.a), u = i.a.a("Link", l.a);
			class p extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(c, null, e.subredditOrProfile ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${n.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", s.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", s.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${n.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
			}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-CrisisFlow-CrisisFlowPage").then(o.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = o("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.b = Object(n.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("CrisisFlow").then(o.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, o) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, o) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, o) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, o) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, o) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/lib/formatPythonString/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				u = o("./src/reddit/components/CrisisFlow/async.tsx"),
				p = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/ContentPolicy/index.tsx"),
				h = o("./src/reddit/layout/row/Inline/index.tsx"),
				x = o("./src/higherOrderComponents/asTooltip.tsx"),
				f = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				R = o("./src/reddit/controls/Dropdown/index.tsx"),
				C = o("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = o("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				O = o.n(g);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = c.a.div("ContentPolicyHolder", O.a),
				E = c.a.div("Header", O.a),
				v = c.a.div("Description", O.a),
				T = c.a.wrapped(b.o, "CloseButton", O.a),
				y = c.a.div("RadioOptionsSectionHeader", O.a),
				F = c.a.wrapped(C.b, "DropdownRow", O.a),
				I = c.a.div("PickerWrapper", O.a),
				k = c.a.div("SelectARuleLabel", O.a),
				A = e => {
					let {
						className: t,
						isChosen: o,
						...n
					} = e;
					return s.a.createElement(k, w({
						className: Object(f.a)(t, {
							[O.a.isChosen]: o
						})
					}, n))
				},
				P = Object(x.a)(R.a),
				N = c.a.wrapped(P, "Dropdown", O.a),
				j = c.a.wrapped(_.b, "DropdownTriangle", O.a),
				L = c.a.wrapped(C.b, "Row", O.a);
			var M = o("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				U = o.n(M);
			const H = c.a.div("LinkHolder", U.a),
				B = c.a.a("Link", U.a),
				D = c.a.wrapped(h.a, "footer", U.a);
			var G = e => s.a.createElement("div", null, s.a.createElement(E, null, e.complaintPageTitle), s.a.createElement(v, null, e.complaintPrompt || n.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(H, null, s.a.createElement(B, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(D, null, s.a.createElement(S, null, s.a.createElement(m.a, {
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(T, {
					onClick: e.onClose
				}, n.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				q = o("./src/reddit/actions/userBlocks.ts"),
				K = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				Q = o("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				W = o("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				J = o.n(W);
			const Y = c.a.wrapped(h.a, "blockUserHolder", J.a),
				z = c.a.wrapped(Q.a, "BlockUserIcon", J.a),
				X = c.a.div("BlockUserHeader", J.a),
				V = c.a.div("OptionHolder", J.a),
				Z = c.a.div("OptionHeader", J.a),
				$ = c.a.div("OptionDescription", J.a),
				ee = c.a.a("Link", J.a),
				te = c.a.wrapped(h.a, "footer", J.a),
				oe = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				ne = Object(a.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class re extends s.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== K.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: o
						} = this.props;
						return o.new === K.a.pending ? n.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? n.fbt._("{username} is blocked", [n.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : n.fbt._("Block {username}", [n.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(V, null, s.a.createElement(Z, null, n.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement($, null, n.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [n.fbt._param("=visit the Help Center", s.a.createElement(ee, {
						target: "_blank",
						href: oe
					}, n.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return s.a.createElement(Y, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(z, null), s.a.createElement("div", null, s.a.createElement(X, null, t), s.a.createElement($, null, n.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [n.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(E, null, n.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(v, null, n.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(S, null, s.a.createElement(m.a, {
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(T, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(i.b)(ne, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(q.h)(t))
						}
					}
				})(re),
				ie = o("./src/reddit/components/AccordionSection/index.tsx"),
				ae = o("./src/reddit/actions/tooltip.ts"),
				le = o("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				de = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				ce = o("./src/reddit/endpoints/post/report.ts"),
				ue = o("./src/reddit/selectors/tooltip.ts");
			const pe = "ReportFlow--RedditRules",
				me = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(pe)
				});
			class he extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? ce.a.CrisisTextLine : e.fileComplaint ? ce.a.FileComplaint : ce.a.SiteRule)
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
						onOpenDropdown: o,
						reason: r,
						rulesSequence: i
					} = t, a = r.nextStepReasons, l = i.length > e ? i[e] : -1, d = a && l >= 0 ? a[l] : null;
					return s.a.createElement(I, {
						onClick: o
					}, s.a.createElement(L, {
						displayText: d ? d.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(j, null), s.a.createElement(A, {
						isChosen: !!d
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(N, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, a ? a.map((o, n) => s.a.createElement(F, {
						key: o.reasonTextToShow,
						displayText: o.reasonTextToShow,
						isSelected: l === n,
						onClick: o.nextStepReasons && o.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(n, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(n, e), this.onRedditRuleChange(o)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, o) {
					const {
						props: n
					} = this, {
						rulesSequence: r
					} = n, i = e.nextStepReasons, a = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return i && i.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: a === o ? "block" : "none"
						}
					}, s.a.createElement(y, null, e.nextStepHeader), i.map((e, o) => {
						const n = l === o;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(de.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: n,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onRedditRuleChange(e)
							}
						}), n && e.canWriteNotes && s.a.createElement(le.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, o))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: o
					} = e;
					if (o) {
						const {
							rulesSequence: o
						} = e, n = t.nextStepReasons, r = o.length > 1 ? o[1] : -1, i = n && r >= 0 ? n[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var xe = Object(i.b)(me, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: pe
					}))
				}))(he),
				fe = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				be = o("./src/reddit/selectors/subreddit.ts"),
				Re = o("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				Ce = o.n(Re);
			const _e = "ReportFlow--SubredditRules",
				ge = "Custom response",
				Oe = c.a.wrapped(N, "Dropdown", Ce.a),
				we = c.a.wrapped(F, "DropdownRow", Ce.a),
				Se = c.a.wrapped(fe.i, "FreeFormTextArea", Ce.a),
				Ee = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(_e),
					freeFormReports: be.H
				});
			class ve extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, ce.a.Other)
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
					} = this, o = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return s.a.createElement("div", null, s.a.createElement(I, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(L, {
						displayText: o,
						id: _e
					}), s.a.createElement(j, null), s.a.createElement(A, {
						isChosen: !!o
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(Oe, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: _e
					}, e.subredditRules.map((t, o) => s.a.createElement(we, {
						key: `${t}-${o}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ce.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(we, {
						displayText: n.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === ge,
						onClick: () => {
							this.onChangeDropdownRule(ge), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === ge ? s.a.createElement(Se, {
						placeholder: n.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Te = Object(i.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: _e
					}))
				}))(ve),
				ye = o("./src/reddit/models/RulesSequence/index.ts"),
				Fe = o("./src/reddit/models/Subreddit/index.ts"),
				Ie = o("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				ke = o.n(Ie);
			const Ae = c.a.wrapped(b.l, "SubmitButton", ke.a);
			class Pe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new ye.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: o
					} = this;
					o.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: o
					} = this, r = o.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ie.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Fe.g.User ? n.fbt._("It breaks u/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : n.fbt._("It breaks r/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(Te, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: o,
						state: n
					} = this, r = n.rulesSequence.getSequence();
					return s.a.createElement(ie.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(xe, {
						onChosenRuleChange: o.onChosenRuleChange,
						onCustomTextChange: o.onCustomTextChange,
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
					const o = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return s.a.createElement("div", null, s.a.createElement(E, null, n.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), o.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(h.a, {
						className: ke.a.Footer
					}, s.a.createElement(S, null, s.a.createElement(m.a, {
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(T, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Ae, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : n.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))
				}
			}
			var Ne = Pe,
				je = o("./src/reddit/icons/svgs/Close/index.tsx"),
				Le = o("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Me = o.n(Le);
			const Ue = c.a.wrapped(h.a, "Title", Me.a),
				He = c.a.div("CloseWrapper", Me.a),
				Be = c.a.wrapped(je.a, "Close", Me.a);
			var De = e => s.a.createElement(Ue, null, s.a.createElement("div", null, e.title), s.a.createElement(He, {
					onClick: e.onClosePressed
				}, s.a.createElement(Be, null))),
				Ge = o("./src/reddit/models/ReportFlow/index.ts"),
				qe = o("./src/reddit/selectors/commentSelector.ts"),
				Ke = o("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Qe = o("./src/reddit/selectors/posts.ts"),
				We = o("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Je = o.n(We);
			const Ye = c.a.div("CloseWrapper", Je.a),
				ze = c.a.wrapped(je.a, "Close", Je.a),
				Xe = Object(a.c)({
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(qe.c)(e, {
							commentId: o
						}) : null
					},
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(Qe.F)(e, {
							postId: o
						}) : null
					},
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(Qe.U)(e, {
							postId: o
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: Ke.a
				});
			class Ve extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === ce.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === ce.a.FileComplaint || this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
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
					} = this, o = t.commentId ? Ge.a.Comment : Ge.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, a = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (a && i[a])
						for (const n of i[a].rules) n.kind !== o && n.kind !== Ge.a.All || l.push(0 !== n.violationReason.length ? n.violationReason : n.shortName);
					const d = t.sitewideRules;
					return s.a.createElement(Ne, {
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: l,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: d,
						rulesCategory: t.rulesCategory,
						subredditOrProfile: t.subredditOrProfile,
						submitButtonText: r ? n.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return s.a.createElement(G, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(d.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const o = t.comment ? t.comment.author : "";
						return s.a.createElement(se, {
							authorName: o,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const o = t.post ? t.post.author : "";
						return s.a.createElement(se, {
							authorName: o,
							chosenRule: e.chosenRule,
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
					if (t.crisisFlowEnabled && e.chosenRuleKind === ce.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Ye, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(ze, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const o = (t.commentId ? Ge.a.Comment : Ge.a.Post) === Ge.a.Post ? n.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : n.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(De, {
						onClosePressed: t.onCloseReportFlow,
						title: o
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: Je.a.Wrapper
					}, this.getContent())
				}
			}
			const Ze = Object(i.b)(Xe, (e, t) => {
				let {
					timestamp: o
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(p.b)())
					},
					onReportPostOrComment: (t, n, r) => {
						e(Object(p.a)({
							id: t,
							reportFlowPayload: n,
							timestamp: o
						}, r))
					}
				}
			})(Ve);
			t.default = Object(l.a)(Ze)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "ValidThingReportTypes", (function() {
				return G
			}));
			var n = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/get.js"),
				i = o.n(s),
				a = o("./node_modules/react/index.js"),
				l = o.n(a),
				d = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				u = o("./src/reddit/actions/reportFlow/index.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				h = o("./src/reddit/components/TrackingHelper/index.tsx"),
				x = o("./src/reddit/selectors/telemetry.ts"),
				f = o("./src/telemetry/models/Event.ts");
			const b = e => t => ({
					source: f.e.UserReport,
					action: f.c.Click,
					noun: f.d.BlockUser,
					targetUser: {
						id: e
					},
					...x.q(t)
				}),
				R = e => t => ({
					source: "report_modal",
					action: f.c.Click,
					noun: "comment",
					comment: x.j({
						state: t,
						commentId: e
					}),
					media: {
						mimetype: x.l(t, e)
					},
					...x.q(t)
				});
			var C = o("./src/reddit/components/FormBuilder/async.tsx"),
				_ = o("./src/reddit/actions/userBlocks.ts"),
				g = o("./src/lib/makeGqlRequest/index.ts"),
				O = o("./src/redditGQL/operations/ReportComment.json");
			const w = (e, t) => Object(g.a)(e, {
				...O,
				variables: t
			});
			var S = o("./src/reddit/endpoints/messages/index.ts"),
				E = o("./src/reddit/endpoints/post/report.ts"),
				v = o("./src/redditGQL/operations/ReportForm.json");
			var T = o("./src/reddit/endpoints/talk/index.ts"),
				y = o("./src/reddit/contexts/ApiContext.tsx"),
				F = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				k = o("./src/reddit/selectors/commentSelector.ts"),
				A = o("./src/reddit/selectors/experiments/reportAd.ts"),
				P = o("./src/reddit/selectors/meta.ts"),
				N = o("./src/reddit/selectors/posts.ts"),
				j = o("./src/reddit/selectors/user.ts"),
				L = o("./src/lib/lessComponent.tsx"),
				M = o("./src/reddit/components/ReportFlow/index.m.less"),
				U = o.n(M);
			const H = L.a.div("ReportLoaderWrapper", U.a),
				B = L.a.img("LoadingIcon", U.a),
				D = "2.1";
			var G;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(G || (G = {}));
			const q = Object(c.c)({
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(N.F)(e, {
							postId: o
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(k.c)(e, {
							commentId: o
						}) : null
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: n,
							postId: r
						} = t, s = n ? Object(k.c)(e, {
							commentId: n
						}) : null, i = r ? Object(N.F)(e, {
							postId: r
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: j.fb,
					locale: P.k,
					isReportAnAdEnabled: A.a
				}),
				K = Object(d.b)(q, (e, t) => {
					let {
						timestamp: o
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(u.b)())
						},
						onBlockUser: t => {
							e(Object(_.h)(t))
						},
						showFailToast: () => e(Object(p.f)({
							kind: F.b.Error,
							text: r.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				Q = async (e, t, o, n, r) => {
					var s;
					const i = await ((e, t) => {
						let {
							itemId: o,
							formVersion: n,
							hostAppName: r,
							locale: s
						} = t;
						return Object(g.a)(e, {
							...v,
							variables: {
								itemId: o,
								hostAppName: r,
								formVersion: n,
								locale: s
							}
						})
					})(e, {
						itemId: t,
						formVersion: o,
						hostAppName: n,
						locale: r
					});
					if (i && i.ok) {
						const e = null === (s = i.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class W extends l.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o,
							isReportAnAdEnabled: n,
							post: r
						} = this.props;
						let s, i, a, l;
						if (this.props.author && (a = this.props.author), t) s = t, i = G.Comment, this.props.comment && !a && (a = this.props.comment.author, l = this.props.comment.authorId);
						else if (e) s = e, r && r.isSponsored && n && (s = `ad_${r.impressionId}_${r.postId}`), i = G.Post, this.props.post && !a && (a = this.props.post.author, l = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							s = o, i = G.Message
						}
						return {
							itemId: s,
							itemType: i,
							itemAuthor: a,
							itemAuthorId: l
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = (e, t) => {
						const {
							blockUserPending: o,
							sendEvent: n
						} = this.props;
						o.new !== I.a.pending && (this.props.onBlockUser(e), n(b(t)))
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						var o;
						const {
							props: {
								gqlContext: n,
								showFailToast: r,
								hostAppName: s
							}
						} = this, {
							itemId: a,
							itemType: l
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: d,
							ruleType: c,
							customRule: u,
							freeText: p
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: s
						};
						switch (p && (m.freeText = i()(t, p.ref)), c) {
							case "site":
								m.siteRule = i()(t, d.ref).value || i()(t, d.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, d.ref);
								"other" === e && u ? m.customRule = i()(t, u.ref) : m.subredditRule = e
						}
						let h;
						switch (l) {
							case G.Post:
								if (null === (o = this.props.post) || void 0 === o ? void 0 : o.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										o = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: a,
											...m
										};
									h = () => Object(T.c)(n(), {
										input: o
									});
									break
								}
								const e = {
									postId: a,
									...m
								};
								h = () => Object(E.d)(n(), {
									input: e
								});
								break;
							case G.Comment:
								const t = {
									commentId: a,
									...m
								};
								h = () => (this.props.sendEvent(R(a)), w(n(), {
									input: t
								}));
								break;
							case G.Message:
								const r = {
									messageId: a,
									...m
								};
								h = () => Object(S.a)(n(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await h()).ok || r()
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						itemId: e
					} = this.getItemMetadata(), {
						locale: t,
						gqlContext: o,
						hostAppName: n
					} = this.props;
					Q(o(), e, D, n, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e;
					const {
						props: {
							isNightmodeOn: t,
							postId: o,
							commentId: s,
							messageId: i,
							isReportAnAdEnabled: a
						},
						state: {
							formComponent: d,
							formState: c,
							ctlFlowOpened: u,
							hasLoaded: p
						}
					} = this, h = a && (null === (e = this.props.post) || void 0 === e ? void 0 : e.isSponsored) ? r.fbt._("Report Ad", null, {
						hk: "4ncCdo"
					}) : r.fbt._("Submit a Report", null, {
						hk: "1v59vx"
					}), {
						itemAuthor: x,
						itemAuthorId: f
					} = this.getItemMetadata(), b = s || o || i;
					return u && x ? l.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: x,
						fromUserProfile: !b,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: b
					}) : d && c && p ? l.a.createElement(C.a, {
						formComponent: d,
						formState: c,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: h,
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(x, f),
						onResize: this.props.onResize
					}) : l.a.createElement(H, null, l.a.createElement(B, {
						src: t ? `${n.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${n.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: r.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(y.b)(K(Object(h.c)(W)))
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./src/higherOrderComponents/asModal/index.tsx"),
				r = o("./src/reddit/components/ReportFlow/_ReportFlowNew.tsx");
			t.default = Object(n.a)(r.default)
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, o) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.m.less": function(e, t, o) {
			e.exports = {
				customTextInput: "FGOwr4yXeN3ya-TdhfhA6",
				textAreaCounter: "_2nMs12tSLppI6tzUQbdtpO",
				Component: "DC3SDIBg6rz0oprqLxSAP",
				component: "DC3SDIBg6rz0oprqLxSAP"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				a = o("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = o("./src/reddit/models/Rule/index.ts"),
				d = o("./src/reddit/components/ReportPage/index.m.less"),
				c = o.n(d),
				u = o("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = o.n(u);
			const m = s.a.header("InputDescription", c.a);
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							...x(e.target.value)
						}), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: c.a.fieldset
					}, e.description && r.a.createElement(m, null, e.description), r.a.createElement("div", {
						className: c.a.field
					}, r.a.createElement(i.c, {
						backgroundColorState: i.a.WhiteFields,
						className: p.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), r.a.createElement("div", {
						className: p.a.textAreaCounter
					}, `${t.displayLength}/${l.a}`))))
				}
			}
			const x = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const o = l.a,
					n = e.length,
					r = Object(a.b)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, n - s + 15 * r.length),
					maxLength: Math.min(l.d, o + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(h, "Component", p.a)
		},
		"./src/reddit/components/ReportPage/index.m.less": function(e, t, o) {
			e.exports = {
				Description: "vC8DORRb-SrRf4xoExKnG",
				description: "vC8DORRb-SrRf4xoExKnG",
				errorMessage: "_2L8tQUjHvCyEJVnOnvqSP9",
				field: "_2niT9w1GKTvhvG5L0mD4y7",
				fieldset: "_1SmuWknXj7wdU6MauCQUaU",
				Footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				Header: "jKS5xzUqtMgPR-nLIjfVJ",
				header: "jKS5xzUqtMgPR-nLIjfVJ",
				InputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				inputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				input: "_2CBq5X22pIRSa4bQwQ4u5C",
				FileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				fileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				Link: "ZTGvhuML-5HlQ9y8zLjlk",
				link: "ZTGvhuML-5HlQ9y8zLjlk",
				linkHolder: "qWNlfKYCsjoOcXc8gp8qU",
				RedirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j",
				redirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, o) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = o("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = o.n(l);
			const c = i.a.wrapped(a.e, "FormElementTitle", d.a),
				u = i.a.wrapped(a.b, "FormElementDescription", d.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(c, {
				className: Object(s.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, o) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return x
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "b", (function() {
				return R
			})), o.d(t, "c", (function() {
				return C
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/controls/Input/index.tsx"),
				l = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = o("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = o.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.div("icon", c.a),
				m = i.a.textarea("textarea", c.a),
				h = i.a.span("Invalid", c.a);
			var x, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(x || (x = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const b = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === x.Valid,
							[c.a.mInvalid]: e.state === x.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(s.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(s.a)({
						[c.a.mValid]: e.state === x.Valid,
						[c.a.mInvalid]: e.state === x.Invalid
					})
				}, e.state === x.Valid && r.a.createElement(l.a, null), e.state === x.Invalid && r.a.createElement(h, null, "!")))),
				R = e => {
					const {
						backgroundColorState: t,
						className: o,
						inputRef: n,
						isRequired: i,
						label: l,
						onKeyDown: d,
						state: p,
						...m
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: l,
						state: p
					}, r.a.createElement(a.a, u({}, m, {
						className: Object(s.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: o,
						inputRef: n,
						isRequired: i,
						label: a,
						onKeyDown: l,
						state: d,
						...p
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: a,
						state: d,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, o) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				a = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = o("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = o.n(c);
			const p = s.a.wrapped(l.a, "RadioOption", u.a),
				m = s.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(a.f, null) : r.a.createElement(a.e, null), r.a.createElement(i.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, o) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, o) {
			"use strict";
			o.d(t, "k", (function() {
				return i
			})), o.d(t, "p", (function() {
				return a
			})), o.d(t, "n", (function() {
				return l
			})), o.d(t, "o", (function() {
				return d
			})), o.d(t, "m", (function() {
				return c
			})), o.d(t, "l", (function() {
				return u
			})), o.d(t, "f", (function() {
				return p
			})), o.d(t, "h", (function() {
				return m
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "g", (function() {
				return x
			})), o.d(t, "i", (function() {
				return f
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "b", (function() {
				return R
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "d", (function() {
				return _
			})), o.d(t, "j", (function() {
				return g
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = o.n(r);
			const i = n.a.section("FormPage", s.a),
				a = n.a.h1("HomePageTitle", s.a),
				l = n.a.button("HomePageBreadcrumb", s.a),
				d = n.a.div("HomePageGroup", s.a),
				c = n.a.h1("FormPageTitle", s.a),
				u = n.a.div("FormPageSection", s.a),
				p = n.a.div("FormGroup", s.a),
				m = n.a.h2("FormGroupTitle", s.a),
				h = n.a.div("FormElement", s.a),
				x = n.a.div("FormGroupDescription", s.a),
				f = n.a.div("FormItem", s.a),
				b = n.a.h3("FormElementTitle", s.a),
				R = n.a.div("FormElementDescription", s.a),
				C = n.a.div("FormElementError", s.a),
				_ = n.a.div("FormElementSubGroup", s.a),
				g = n.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, o) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "e", (function() {
				return h
			})), o.d(t, "a", (function() {
				return x
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "i", (function() {
				return b
			})), o.d(t, "h", (function() {
				return R
			})), o.d(t, "g", (function() {
				return C
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/Input/ModalInput.tsx"),
				s = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				a = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = o.n(d);
			const u = n.a.wrapped(r.a, "ModalInput", c.a),
				p = n.a.input("Input", c.a),
				m = n.a.wrapped(l.a, "RadioOn", c.a),
				h = n.a.wrapped(a.a, "RadioOff", c.a),
				x = n.a.wrapped(s.a, "Checkbox", c.a),
				f = n.a.wrapped(i.a, "CheckboxSelected", c.a),
				b = n.a.textarea("Textarea", c.a),
				R = n.a.label("StyledLabel", c.a),
				C = n.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/Input/index.m.less"),
				s = o.n(r);
			t.a = n.a.input("input", s.a)
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "a", (function() {
				return p
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return x
			}));
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				s = o("./src/lib/makeGqlRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				a = o("./src/reddit/constants/headers.ts"),
				l = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = o("./src/reddit/helpers/reportPage/index.ts"),
				c = o("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(s.a)(e, {
				...c,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					method: n.nb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: h(t)
				}),
				h = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: o
						} = e;
					switch (o.customText && (t.custom_text = o.customText), o.kind) {
						case p.Other:
							return {
								...t, reason: "other", other_reason: o.rule
							};
						case p.Rule:
							return {
								...t, reason: o.rule, rule_reason: o.rule
							};
						case p.SiteRule:
						case p.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: o.rule
							}
					}
				},
				x = (e, t, o) => Object(r.a)(Object(i.a)(e, [a.a]), {
					method: n.nb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: f(t, o)
				}),
				f = (e, t) => {
					const o = {
						...Object(d.b)(e),
						api_type: "json"
					};
					return t && (o.from_help_desk = !0), o
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return c
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "a", (function() {
				return p
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = (o("./node_modules/uuid/dist/esm-browser/v4.js"), o("./src/lib/makeGqlRequest/index.ts")),
				s = o("./src/lib/makeRequest/index.ts"),
				i = (o("./src/reddit/models/Subreddit/index.ts"), o("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), o("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), o("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), o("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				a = o("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				l = (o("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), o("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), o("./src/redditGQL/operations/ReportTalk.json")),
				d = (o("./src/redditGQL/operations/StartLiveAudioRoom.json"), o("./src/redditGQL/types.ts"));
			const c = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}),
				u = async (e, t) => {
					const o = await Object(r.a)(e, {
						...i,
						variables: t
					});
					return !!Object(s.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(d.P.Talk)
				}, p = async (e, t) => {
					var o, n;
					const i = await Object(r.a)(e, {
						...a,
						variables: t
					});
					return !!Object(s.c)(i) && (null !== (n = null === (o = i.body.data.profileByName) || void 0 === o ? void 0 : o.allowedPostTypes) && void 0 !== n ? n : []).includes(d.P.Talk)
				};
			d.j.ServiceError, n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), d.j.UserNotAuthorized, n.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			}), d.j.RoomLimitExceeded, n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
				hk: "3zPx9X"
			}), d.j.ConcurrentRoomLimitExceeded, n.fbt._("Too many talks are happening right now. Try again later.", null, {
				hk: "2LYXJx"
			}), d.j.SubredditRoomLimitExceeded, n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
				hk: "2mGf21"
			}), d.R.ServiceError, n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), d.R.UserNotAuthorized, n.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			})
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return p
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "a", (function() {
				return f
			}));
			var n = o("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				s = "(?:https?://)",
				i = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				a = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${s}${r}/message/messages/(\\w+)(?:/.*)?`,
				d = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				c = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${s}${r}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${a}|${i}|${l}|${d}|${c}|${u})`,
				m = `(?:(?:${s}?${r}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				h = `(?:(?:${s}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				x = e => {
					const t = new RegExp(i),
						o = new RegExp(a),
						n = new RegExp(l),
						r = new RegExp(u),
						s = new RegExp(d),
						p = new RegExp(c);
					let x, f, b;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (x = "t1_" + e[1])
						} else if (o.test(i) || r.test(i)) {
							const e = o.exec(i) || r.exec(i);
							e && e.length > 1 && (x = "t3_" + e[1])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (x = "t4_" + e[1])
						} else if (p.test(i)) {
							const e = p.exec(i);
							e && e.length > 2 && (f = e[1], b = e[2])
						} else if (s.test(i)) {
							const e = s.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const R = new RegExp(m),
						C = new RegExp(h),
						_ = [];
					let g;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (C.test(t)) {
							const e = C.exec(t);
							e && e.length > 1 && (g = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (R.test(t)) {
								const e = R.exec(t);
								e && e.length > 1 && _.push(e[1])
							}
						}
					const {
						reason: O
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: O.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: b,
						sr_name: g,
						thing_id: x,
						usernames: _.length ? _.join(",") : void 0
					}
				},
				f = (e, t) => {
					const o = new n.a;
					return b(o, e, t, 0), o
				},
				b = (e, t, o, n) => {
					for (let r = 0; r < t.length; r++) {
						const s = t[r];
						e.update(r, n);
						const i = e.getSequence().length;
						if (s.reasonAsParam === o) return;
						if (s.nextStepReasons && s.nextStepReasons.length && (b(e, s.nextStepReasons, o, n + 1), e.getSequence().length > i)) return;
						e.cut(n - 1)
					}
				}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, o) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...o
				} = e;
				return r.a.createElement("svg", l({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(s.a)(a.a.checkbox, t)
				}, o), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: o,
					...n
				} = e;
				return r.a.createElement("svg", l({
					className: Object(s.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				a = o.n(i);
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
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, o) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = o.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: n,
					widthLeft: s,
					gutter: a,
					...c
				} = e;
				return r.a.createElement("div", d({
					className: Object(i.a)(l.a.expandRightContainer, t)
				}, c), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: s,
						height: n,
						marginRight: a
					}
				}, Array.isArray(o) && o[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var n, r, s;
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(n || (n = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(r || (r = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(s || (s = {}));
			const i = new Set(Object.values(s))
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			class n {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const o = this.sequence.slice(0, t);
					o.push(e), this.sequence = o
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				s = o("./src/reddit/selectors/user.ts");
			const i = e => n.a.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.S,
					experimentName: n.d
				}),
				a = e => n.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.S,
					experimentName: n.f
				})
		},
		"./src/reddit/selectors/experiments/reportAd.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(s.c)(e, {
					experimentName: r.Mc,
					experimentEligibilitySelector: s.a
				}), e => e),
				a = Object(n.a)(i, e => e === r.Rd)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.a4214480d1ac0c5b7ce2.js.map