// https://www.redditstatic.com/desktop2x/ModProgressModule.7191a5d84d5fd9864353.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModProgressModule"], {
		"./src/reddit/components/ModProgressModule/index.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				themedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				completed: "_2B0VV6SdB2XjjxadViz15Q",
				tooltipIsActive: "_28uNH-IBuxe83YxCxYlnOb",
				ModuleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				moduleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				ModSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				modSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				headerButtonsContainer: "_2_EnVDjbXLqtMoZxrXfqFD",
				ChevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				chevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				ProgressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				progressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				ProgressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressCount: "_3zufL-ajBszVrFsqSo1RVV",
				progressText: "_2qiL_cOXT9k5zDizfDNl9",
				darkFont: "_3pebDR2YBVgOVPtes2otJ",
				Description: "_1--LMLAxYX0l9LaibrBWVc",
				description: "_1--LMLAxYX0l9LaibrBWVc",
				CloseButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				closeButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				CardContainer: "_2YShnlNvvx9BkckLObKkwD",
				cardContainer: "_2YShnlNvvx9BkckLObKkwD",
				Card: "_-lU3INdzFYlY4zni0Pss",
				card: "_-lU3INdzFYlY4zni0Pss",
				unclickable: "_2LyLq46VyzgH6SYt5kWKmL",
				ContentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				contentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				IconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				iconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				CheckIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				checkIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				Icon: "QNbSE3fPPc1M8MakLm1Bi",
				icon: "QNbSE3fPPc1M8MakLm1Bi",
				CardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				cardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				Title: "_2GyfJdanPW5aCT405tuR0i",
				title: "_2GyfJdanPW5aCT405tuR0i",
				overflowButton: "GFzLxcAwA3BPE4dxI-d4W",
				imageUploader: "_2EJWiSLsB96D6FOsAajSH-"
			}
		},
		"./src/reddit/components/ModProgressModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				m = s("./src/reddit/actions/subreddit/questions.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				h = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				C = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ImageInput/index.tsx"),
				v = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				N = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				I = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				M = s("./src/reddit/models/ApiRequestState/index.ts"),
				T = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				f = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/components/ModProgressModule/index.m.less"),
				P = s.n(D);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = (e, t, s) => {
				let {
					id: o,
					title: r,
					iconIdentifier: i
				} = e;
				const a = C.b[i];
				return n.a.createElement("div", {
					className: Object(d.a)(P.a.Card, {
						[P.a.unclickable]: t
					}),
					key: o,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, n.a.createElement("span", {
					className: P.a.ContentContainer
				}, n.a.createElement("span", {
					className: Object(d.a)(P.a.IconContainer, {
						[P.a.completed]: t
					})
				}, t ? n.a.createElement(E.a, {
					name: "checkmark",
					className: P.a.CheckIcon
				}) : n.a.createElement(E.a, {
					name: a,
					className: P.a.Icon
				})), n.a.createElement("span", {
					className: P.a.CardTitle
				}, r)))
			}, w = Object(a.c)({
				isTooltipOpen: e => Object(S.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: f.c
			});
			class y extends n.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(M.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => n.a.createElement(O.a, {
						className: P.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(N.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(N.b)(e, t))
				}
				render() {
					var e, t, s, o, r;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: c,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: p
					} = this.props, C = l && l[m];
					if (!C) return n.a.createElement(b.a, {
						className: P.a.ThemedWidget,
						contentOnly: !0,
						headerButton: n.a.createElement("div", {
							className: P.a.headerButtonsContainer
						}, n.a.createElement(I.a, {
							className: P.a.ChevronIcon
						})),
						title: n.a.createElement("div", {
							className: P.a.ModuleTitle
						}, n.a.createElement(k.a, {
							className: P.a.ModSettingsIcon
						}), j._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: P.a.titleClassName,
						onClick: c
					});
					const _ = (null === (e = null == C ? void 0 : C.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == C ? void 0 : C.progress) || void 0 === t ? void 0 : t.total),
						g = 0 === (null === (s = C.progress) || void 0 === s ? void 0 : s.done);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(b.a, {
						className: Object(d.a)(P.a.ThemedWidget, {
							[P.a.completed]: _,
							[P.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: n.a.createElement("div", {
							className: P.a.headerButtonsContainer
						}, n.a.createElement(I.a, {
							className: P.a.ChevronIcon
						})),
						id: u.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: n.a.createElement("div", {
							className: P.a.ModuleTitle
						}, n.a.createElement(k.a, {
							className: P.a.ModSettingsIcon
						}), j._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: P.a.titleClassName
					}, n.a.createElement("div", {
						className: P.a.ProgressContainer
					}, n.a.createElement("div", null, n.a.createElement("div", {
						className: P.a.Title
					}, _ ? j._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : j._("Set up r/{subredditName}", [j._param("subredditName", p)], {
						hk: "3SHelG"
					})), n.a.createElement("div", {
						className: P.a.ProgressDescription
					}, n.a.createElement("span", {
						className: P.a.progressCount
					}, j._("{cardsComplete} of {totalCards}", [j._param("cardsComplete", null === (o = C.progress) || void 0 === o ? void 0 : o.done), j._param("totalCards", null === (r = C.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", n.a.createElement("span", {
						className: Object(d.a)(P.a.progressText, {
							[P.a.darkFont]: g
						})
					}, j._("tasks completed", null, {
						hk: "DxeNq"
					}))), g && n.a.createElement("div", {
						className: P.a.Description
					}, j._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !_ && n.a.createElement("div", {
						className: P.a.CardContainer
					}, C.cards.map(e => {
						const t = e.status === T.a.COMPLETED;
						return W(e, t, () => this.onClickCard(C, e.id))
					})), _ && n.a.createElement(x.t, {
						className: P.a.CloseButton,
						onClick: a,
						priority: x.c.Tertiary
					}, j._("Close", null, {
						hk: "3UZAZk"
					})), n.a.createElement(h.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const L = Object(r.b)(w, (e, t) => ({
				onCompleteModule: () => e(Object(v.c)(t.subredditId, T.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(g.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, o) => {
					e(Object(l.a)(t.subredditId, s, o)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = L(Object(_.c)(y))
		},
		"./src/reddit/components/ModWelcomeTooltip/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ModWelcomeTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/ModWelcomeTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModWelcomeTooltip/index.tsx"
				}
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModProgressModule.7191a5d84d5fd9864353.js.map