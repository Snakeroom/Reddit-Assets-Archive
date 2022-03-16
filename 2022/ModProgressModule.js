// https://www.redditstatic.com/desktop2x/ModProgressModule.d2a37c9301d275ed76e4.js
// Retrieved at 3/15/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
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
				_ = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				C = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = s("./src/reddit/constants/modals.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/ImageInput/index.tsx"),
				v = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				E = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				N = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				I = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				M = s("./src/reddit/models/ApiRequestState/index.ts"),
				f = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				k = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/components/ModProgressModule/index.m.less"),
				P = s.n(D);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = ({
				id: e,
				title: t,
				iconIdentifier: s
			}, o, r) => {
				const i = C.b[s];
				return n.a.createElement("div", {
					className: Object(d.a)(P.a.Card, {
						[P.a.unclickable]: o
					}),
					key: e,
					onClick: e => {
						e.stopPropagation(), !o && r()
					}
				}, n.a.createElement("span", {
					className: P.a.ContentContainer
				}, n.a.createElement("span", {
					className: Object(d.a)(P.a.IconContainer, {
						[P.a.completed]: o
					})
				}, o ? n.a.createElement(T.a, {
					name: "checkmark",
					className: P.a.CheckIcon
				}) : n.a.createElement(T.a, {
					name: i,
					className: P.a.Icon
				})), n.a.createElement("span", {
					className: P.a.CardTitle
				}, t)))
			}, B = Object(a.c)({
				isTooltipOpen: e => Object(y.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: k.c
			});
			class S extends n.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(M.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => n.a.createElement(x.a, {
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
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(E.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(E.b)(e, t))
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
						}, n.a.createElement(N.a, {
							className: P.a.ModSettingsIcon
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: P.a.titleClassName,
						onClick: c
					});
					const h = (null === (e = null == C ? void 0 : C.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == C ? void 0 : C.progress) || void 0 === t ? void 0 : t.total),
						O = 0 === (null === (s = C.progress) || void 0 === s ? void 0 : s.done);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(b.a, {
						className: Object(d.a)(P.a.ThemedWidget, {
							[P.a.completed]: h,
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
						}, n.a.createElement(N.a, {
							className: P.a.ModSettingsIcon
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: P.a.titleClassName
					}, n.a.createElement("div", {
						className: P.a.ProgressContainer
					}, n.a.createElement("div", null, n.a.createElement("div", {
						className: P.a.Title
					}, h ? L._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : L._("Set up r/{subredditName}", [L._param("subredditName", p)], {
						hk: "3SHelG"
					})), n.a.createElement("div", {
						className: P.a.ProgressDescription
					}, n.a.createElement("span", {
						className: P.a.progressCount
					}, L._("{cardsComplete} of {totalCards}", [L._param("cardsComplete", null === (o = C.progress) || void 0 === o ? void 0 : o.done), L._param("totalCards", null === (r = C.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", n.a.createElement("span", {
						className: Object(d.a)(P.a.progressText, {
							[P.a.darkFont]: O
						})
					}, L._("tasks completed", null, {
						hk: "DxeNq"
					}))), O && n.a.createElement("div", {
						className: P.a.Description
					}, L._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !h && n.a.createElement("div", {
						className: P.a.CardContainer
					}, C.cards.map(e => {
						const t = e.status === f.a.COMPLETED;
						return j(e, t, () => this.onClickCard(C, e.id))
					})), h && n.a.createElement(g.t, {
						className: P.a.CloseButton,
						onClick: a,
						priority: g.c.Tertiary
					}, L._("Close", null, {
						hk: "3UZAZk"
					})), n.a.createElement(_.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const w = Object(r.b)(B, (e, t) => ({
				onCompleteModule: () => e(Object(v.c)(t.subredditId, f.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(O.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, o) => {
					e(Object(l.a)(t.subredditId, s, o)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = w(Object(h.c)(S))
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
		"./src/reddit/components/ModWelcomeTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				Overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				overlay: "_2PnG5snRqhlCLmlBFW9Dud",
				isOverlayOpen: "_1LKHMvN5rVxTXGRnTa9hrB",
				DropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				dropdownPadding: "_3GVs_x5BtyiLy35GpmGSyo",
				Tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				tooltip: "_2EusAZo7A7uyI8gxC0nJdp",
				TooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				tooltipContent: "_1BsafzE6q8PmCVU5uqiTWj",
				Title: "_1BFO2H2-rybL94nyL7n-e_",
				title: "_1BFO2H2-rybL94nyL7n-e_",
				Description: "_2DnHuFoYoKwYaBvTkLrs0v",
				description: "_2DnHuFoYoKwYaBvTkLrs0v",
				modLink: "_16moQ9CB6asKjB-qTj8Tvf",
				Button: "_2x6OQ6vZfN3PNhM6Eh6FLq",
				button: "_2x6OQ6vZfN3PNhM6Eh6FLq"
			}
		},
		"./src/reddit/components/ModWelcomeTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "MOD_WELCOME_TOOLTIP_ID", (function() {
				return g
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				b = s.n(h);
			const O = Object(l.a)(p.a),
				g = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(d.a)(e => {
				const t = Object(i.e)(C.d),
					s = g,
					d = Object(i.d)(),
					l = e => {
						e.stopPropagation(), d(Object(c.h)({
							tooltipId: s
						}))
					};
				return Object(n.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(u.a)(), 500) : setTimeout(() => Object(u.b)(), 500)
				}, [d, e.isOpen]), t ? r.a.createElement(O, {
					className: b.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: s,
					componentWrapper: t => r.a.createElement("div", {
						className: Object(a.a)(b.a.Overlay, {
							[b.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(b.a.DropdownPadding, {
							[b.a.isOverlayOpen]: e.isOpen
						}),
						onClick: l
					}), t)
				}, r.a.createElement("div", {
					className: b.a.TooltipContent
				}, r.a.createElement("div", {
					className: b.a.Title
				}, o.fbt._("Welcome to your community, r/{subredditName}!", [o.fbt._param("subredditName", t)], {
					hk: "e3rbC"
				})), r.a.createElement("div", {
					className: b.a.Description
				}, o.fbt._("We’ll walk you through how to get started here, and you can get more tips and advice through Reddit’s", null, {
					hk: "lffxe"
				}), " ", r.a.createElement("a", {
					className: b.a.modLink,
					style: {
						color: Object(_.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, o.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), r.a.createElement(m.t, {
					className: b.a.Button,
					onClick: l
				}, o.fbt._("Let's go", null, {
					hk: "4hWwxv"
				})))) : null
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
		},
		"./src/reddit/models/NewCommunityProgress/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			const o = "new_community_setup",
				n = "ncp_v3_module",
				r = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var i, a, d;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(i || (i = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(a || (a = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(d || (d = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModProgressModule.d2a37c9301d275ed76e4.js.map