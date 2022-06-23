// https://www.redditstatic.com/desktop2x/AwardTooltip.da39de3902619d4e78c3.js
// Retrieved at 6/23/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardTooltip"], {
		"./src/reddit/components/AwardTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				headerBar: "_1upk7O0Nror_rUzpKtAT82",
				headerBarPremium: "_3iVwVnDtNqAO4iQPvemgLZ",
				awardReport: "_3NL-lAvdtp1f08B73D3P-U",
				awardReportIcon: "_1l-7KCSHWOZOMW8AwEn6sF",
				awardHide: "_1patTLuP2Q2dYP-nfZqRMK",
				awardHideIcon: "_3d9osmgMyOwl58hB2eaqZl",
				awardDetails: "_3EitQZYmhmkb40LVIqZjbf",
				awardIconContainer: "_3d4PewaRsE8Kt1dA9yVlK6",
				awardIcon: "_3Hlfqt1qFE_Tu7QOlUiazx",
				awardName: "_35wr2WzwkRAIoUu5CXPuNQ",
				awardDescription: "_2-4PwlBy4HgE_34Dneye8m",
				subreddit: "_1X9qQp-APi9LYm-TWfMGNK",
				subredditIcon: "_1d6eT4Yh-x1pgKfz_TFiB",
				modShield: "_3GaARjoK2CWYLfWjrPUTkN",
				howToLink: "_1liKJZCBt1h8KFR0F0Gqsi",
				premiumCta: "_2waCkZfG0i3CbaZeqk9dw3"
			}
		},
		"./src/reddit/components/AwardTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/react-router-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = o("./src/reddit/constants/colors.ts"),
				p = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/models/Gold/Award.ts"),
				h = o("./src/reddit/selectors/gold/awardIcon.ts"),
				w = o("./src/reddit/selectors/moderatorPermissions.ts"),
				b = o("./src/reddit/selectors/subreddit.ts"),
				x = o("./src/reddit/selectors/user.ts"),
				f = o("./src/reddit/components/ContentTooltip/index.tsx"),
				C = o("./src/reddit/components/SubredditIcon/index.tsx"),
				g = o("./src/reddit/controls/Button/index.tsx"),
				O = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				P = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				_ = o("./src/reddit/icons/svgs/Report/index.tsx"),
				E = o("./src/reddit/icons/fonts/Coin/index.tsx");
			const v = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: e
					}, n.a.createElement(E.a, null), e)))
				}
				return null
			};
			var j = o("./src/reddit/components/AwardTooltip/index.m.less"),
				I = o.n(j);
			const N = Object(d.c)({
					currentUser: x.k,
					moderatorPermissions: (e, t) => {
						let {
							postOrComment: o
						} = t;
						const r = Object(b.K)(e, {
							thingId: o.id
						});
						return r ? Object(w.o)(e, {
							subredditId: r.id
						}) : null
					},
					subreddit: (e, t) => {
						let {
							postOrComment: o
						} = t;
						return Object(b.K)(e, {
							thingId: o.id
						})
					},
					awardIcon: (e, t) => {
						let {
							award: o,
							postOrComment: r
						} = t;
						return Object(h.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: r.id
						})
					}
				}),
				y = Object(i.b)(N, (e, t) => {
					let {
						tooltipId: o
					} = t;
					return {
						close: () => e(Object(p.h)({
							tooltipId: o
						})),
						onClickPremium: () => e(Object(a.b)("/premium"))
					}
				});
			class T extends n.a.Component {
				renderReporterButton() {
					const {
						close: e,
						onOpenReportFlow: t
					} = this.props;
					return n.a.createElement("button", {
						className: Object(c.a)(I.a.awardReport),
						onClick: () => {
							t(), e()
						}
					}, n.a.createElement(_.a, {
						className: I.a.awardReportIcon
					}))
				}
				renderHideButton() {
					const {
						close: e,
						onHideAward: t
					} = this.props;
					return n.a.createElement("button", {
						className: I.a.awardHide,
						onClick: () => {
							t(), e()
						}
					}, n.a.createElement(O.a, {
						className: I.a.awardHideIcon
					}), r.fbt._("Hide", null, {
						hk: "4kciEW"
					}))
				}
				renderCta() {
					const {
						award: e,
						currentUser: t,
						onClickPremium: o
					} = this.props, s = e.awardSubType === u.d.Premium, i = !!t && t.isGold;
					return s ? i ? null : n.a.createElement(g.k, {
						className: I.a.premiumCta,
						onClick: o
					}, r.fbt._("Get Premium", null, {
						hk: "Yapo5"
					})) : n.a.createElement("a", {
						className: I.a.howToLink,
						href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("How do I award?", null, {
						hk: "RgVTd"
					}))
				}
				render() {
					const {
						award: e,
						awardIcon: t,
						currentUser: o,
						moderatorPermissions: s,
						postOrComment: i,
						subreddit: a,
						tooltipId: d
					} = this.props, p = e.awardSubType === u.d.Premium, h = o && i.authorId === o.id || Object(l.a)(s);
					return n.a.createElement(f.a, {
						caretColor: {
							top: p ? m.a.orangered : m.a.alienblue
						},
						tooltipSizeEstimate: {
							height: 290,
							width: 254
						},
						tooltipId: d,
						defaultTooltipPosition: "top"
					}, n.a.createElement("div", {
						className: Object(c.a)(I.a.headerBar, {
							[I.a.headerBarPremium]: p
						})
					}, h && this.renderHideButton(), this.renderReporterButton()), n.a.createElement("div", {
						className: I.a.awardDetails
					}, n.a.createElement("div", {
						className: I.a.awardIconContainer
					}, n.a.createElement("div", {
						className: I.a.awardIcon,
						style: {
							backgroundImage: `url("${t}")`
						}
					})), n.a.createElement("div", {
						className: I.a.awardName
					}, r.fbt._("{award-name} Award", [r.fbt._param("award-name", e.name)], {
						hk: "2QpjYF"
					})), n.a.createElement("p", {
						className: I.a.awardDescription
					}, n.a.createElement(v, {
						award: e
					})), e.awardType === u.f.Community && a && n.a.createElement("div", {
						className: I.a.subreddit
					}, n.a.createElement(C.b, {
						className: I.a.subredditIcon,
						subredditOrProfile: a
					}), `r/${a.name}`), e.awardType === u.f.Moderator && n.a.createElement("div", {
						className: I.a.subreddit
					}, n.a.createElement(P.a, {
						className: Object(c.a)(I.a.subredditIcon, I.a.modShield)
					}), r.fbt._("Exclusive mod-given Award", null, {
						hk: "1VGGho"
					})), this.renderCta()))
				}
			}
			t.default = y(T)
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = o("./src/lib/fastdom/index.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = o("./src/reddit/selectors/tooltip.ts"),
				h = o("./src/reddit/components/ContentTooltip/index.m.less"),
				w = o.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				f = e => {
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
				C = Object(c.a)(e => {
					const {
						children: t,
						className: o,
						style: r,
						caretPosition: s,
						caretColor: i,
						onClick: a,
						hideCaret: c
					} = e;
					return n.a.createElement("div", {
						onClick: a,
						className: Object(d.a)(o, w.a.StyledTooltipContainer, {
							[w.a.caretOnTop]: "top" === s,
							[w.a.caretOnLeft]: "left" === s,
							[w.a.caretOnRight]: "right" === s,
							[w.a.caretOnBottom]: "bottom" === s,
							[w.a.hideCaret]: c
						}),
						style: {
							...r,
							"--contentTooltip-caretColor": i && i[s] ? i[s] : Object(p.a)(e).body
						}
					}, t)
				}),
				g = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(u.b)(o)(e)
					}
				}),
				O = Object(m.a)(C, [r.a.Click, r.a.Keydown]),
				P = Object(i.b)(g);
			class _ extends n.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						l.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const r = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - r.bottom > t.height;
									break;
								case "left":
									s = r.left > t.width;
									break;
								case "right":
									s = r.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = r.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : f(this.props.defaultTooltipPosition)
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
						tooltipPosition: o,
						caretPosition: r
					} = this.getPositions(e);
					return n.a.createElement(O, b({}, this.props, {
						caretPosition: r,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = P(_)
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/reddit/constants/elementIds.ts"),
				a = o("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const o = Object(n.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(o, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, o) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/constants/colors.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = o.n(d);
			const l = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(n.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? n.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardTooltip.da39de3902619d4e78c3.js.map