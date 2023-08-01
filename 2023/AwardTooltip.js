// https://www.redditstatic.com/desktop2x/AwardTooltip.cc8ee4910c73aaed070f.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				n = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/react-router-redux/es/index.js"),
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
				C = o("./src/reddit/components/ContentTooltip/index.tsx"),
				f = o("./src/reddit/components/SubredditIcon/index.tsx"),
				g = o("./src/reddit/controls/Button/index.tsx"),
				_ = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				O = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = o("./src/reddit/icons/svgs/Report/index.tsx"),
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
			var N = o("./src/reddit/components/AwardTooltip/index.m.less"),
				j = o.n(N);
			const I = Object(d.c)({
					currentUser: x.m,
					moderatorPermissions: (e, t) => {
						let {
							postOrComment: o
						} = t;
						const s = Object(b.O)(e, {
							thingId: o.id
						});
						return s ? Object(w.n)(e, {
							subredditId: s.id
						}) : null
					},
					subreddit: (e, t) => {
						let {
							postOrComment: o
						} = t;
						return Object(b.O)(e, {
							thingId: o.id
						})
					},
					awardIcon: (e, t) => {
						let {
							award: o,
							postOrComment: s
						} = t;
						return Object(h.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: s.id
						})
					}
				}),
				T = Object(a.b)(I, (e, t) => {
					let {
						tooltipId: o
					} = t;
					return {
						close: () => e(Object(p.h)({
							tooltipId: o
						})),
						onClickPremium: () => e(Object(i.b)("/premium"))
					}
				});
			class L extends n.a.Component {
				renderReporterButton() {
					const {
						close: e,
						onOpenReportFlow: t
					} = this.props;
					return n.a.createElement("button", {
						className: Object(c.a)(j.a.awardReport),
						onClick: () => {
							t(), e()
						}
					}, n.a.createElement(P.a, {
						className: j.a.awardReportIcon
					}))
				}
				renderHideButton() {
					const {
						close: e,
						onHideAward: t
					} = this.props;
					return n.a.createElement("button", {
						className: j.a.awardHide,
						onClick: () => {
							t(), e()
						}
					}, n.a.createElement(_.a, {
						className: j.a.awardHideIcon
					}), s.fbt._("Hide", null, {
						hk: "4kciEW"
					}))
				}
				renderCta() {
					const {
						award: e,
						currentUser: t,
						onClickPremium: o
					} = this.props, r = e.awardSubType === u.d.Premium, a = !!t && t.isGold;
					return r ? a ? null : n.a.createElement(g.k, {
						className: j.a.premiumCta,
						onClick: o
					}, s.fbt._("Get Premium", null, {
						hk: "Yapo5"
					})) : n.a.createElement("a", {
						className: j.a.howToLink,
						href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("How do I award?", null, {
						hk: "RgVTd"
					}))
				}
				render() {
					const {
						award: e,
						awardIcon: t,
						currentUser: o,
						moderatorPermissions: r,
						postOrComment: a,
						subreddit: i,
						tooltipId: d
					} = this.props, p = e.awardSubType === u.d.Premium, h = o && a.authorId === o.id || Object(l.a)(r);
					return n.a.createElement(C.a, {
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
						className: Object(c.a)(j.a.headerBar, {
							[j.a.headerBarPremium]: p
						})
					}, h && this.renderHideButton(), this.renderReporterButton()), n.a.createElement("div", {
						className: j.a.awardDetails
					}, n.a.createElement("div", {
						className: j.a.awardIconContainer
					}, n.a.createElement("div", {
						className: j.a.awardIcon,
						style: {
							backgroundImage: `url("${t}")`
						}
					})), n.a.createElement("div", {
						className: j.a.awardName
					}, s.fbt._("{award-name} Award", [s.fbt._param("award-name", e.name)], {
						hk: "2QpjYF"
					})), n.a.createElement("p", {
						className: j.a.awardDescription
					}, n.a.createElement(v, {
						award: e
					})), e.awardType === u.e.Community && i && n.a.createElement("div", {
						className: j.a.subreddit
					}, n.a.createElement(f.b, {
						className: j.a.subredditIcon,
						subredditOrProfile: i
					}), `r/${i.name}`), e.awardType === u.e.Moderator && n.a.createElement("div", {
						className: j.a.subreddit
					}, n.a.createElement(O.a, {
						className: Object(c.a)(j.a.subredditIcon, j.a.modShield)
					}), s.fbt._("Exclusive mod-given Award", null, {
						hk: "1VGGho"
					})), this.renderCta()))
				}
			}
			t.default = T(L)
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
			var s = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = o("./node_modules/react/index.js"),
				n = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
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
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				C = e => {
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
				f = Object(c.a)(e => {
					const {
						children: t,
						className: o,
						style: s,
						caretPosition: r,
						caretColor: a,
						onClick: i,
						hideCaret: c
					} = e;
					return n.a.createElement("div", {
						onClick: i,
						className: Object(d.a)(o, w.a.StyledTooltipContainer, {
							[w.a.caretOnTop]: "top" === r,
							[w.a.caretOnLeft]: "left" === r,
							[w.a.caretOnRight]: "right" === r,
							[w.a.caretOnBottom]: "bottom" === r,
							[w.a.hideCaret]: c
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": a && a[r] ? a[r] : Object(p.a)(e).body
						}
					}, t)
				}),
				g = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(u.b)(o)(e)
					}
				}),
				_ = Object(m.a)(f, [s.a.Click, s.a.Keydown]),
				O = Object(a.b)(g);
			class P extends n.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						l.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const s = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									r = s.left > t.width;
									break;
								case "right":
									r = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = s.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
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
						caretPosition: s
					} = this.getPositions(e);
					return n.a.createElement(_, b({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = O(P)
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
			var s = o("./node_modules/react/index.js"),
				r = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/constants/colors.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = o.n(d);
			const l = o("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(n.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				r = o.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				r = o.n(s),
				n = o("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? n.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				r = o.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardTooltip.cc8ee4910c73aaed070f.js.map