// https://www.redditstatic.com/desktop2x/AwardTooltip.aad0c72e9f2b404d896f.js
// Retrieved at 3/8/2021, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardTooltip"], {
		"./src/reddit/components/AwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				headerBar: "_1upk7O0Nror_rUzpKtAT82",
				headerBarPremium: "_3iVwVnDtNqAO4iQPvemgLZ",
				awardReport: "_3NL-lAvdtp1f08B73D3P-U",
				isReported: "_2Pk3ujKwQr9ilRsjN0MDqJ",
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
		"./src/reddit/components/AwardTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/actions/gold/reportAward.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Gold/Award.ts"),
				w = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/chooseVariant/index.ts");
			var C = s("./src/reddit/selectors/gold/awardIcon.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/ContentTooltip/index.tsx"),
				O = s("./src/reddit/components/SubredditIcon/index.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				v = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				j = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = s("./src/reddit/icons/svgs/Report/index.tsx"),
				I = s("./src/reddit/icons/fonts/Coin/index.tsx");
			const T = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return i.a.createElement(i.a.Fragment, null, e.map((e, t) => 0 === t ? e : i.a.createElement(i.a.Fragment, {
						key: e
					}, i.a.createElement(I.a, null), e)))
				}
				return null
			};
			var k = s("./src/reddit/components/AwardTooltip/index.m.less"),
				L = s.n(k);
			const y = Object(d.c)({
					canFlagAwards: e => Object(b.c)(e, {
						experimentEligibilitySelector: b.a,
						experimentName: w.rb
					}) === w.Db.Enabled,
					currentUser: g.i,
					moderatorPermissions: (e, {
						postOrComment: t
					}) => {
						const s = Object(f.J)(e, {
							thingId: t.id
						});
						return s ? Object(x.i)(e, {
							subredditId: s.id
						}) : null
					},
					subreddit: (e, {
						postOrComment: t
					}) => Object(f.J)(e, {
						thingId: t.id
					}),
					awardIcon: (e, {
						award: t,
						postOrComment: s
					}) => Object(C.a)(e, {
						award: t,
						minSize: 64,
						postOrCommentId: s.id
					})
				}),
				A = Object(a.b)(y, (e, {
					award: t,
					tooltipId: s
				}) => ({
					close: () => e(Object(u.h)({
						tooltipId: s
					})),
					onClickPremium: () => e(Object(n.b)("/premium")),
					reportAward: () => e(Object(p.a)(t))
				}));
			class R extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						isReported: !1
					}
				}
				renderReporterButton() {
					const {
						isReported: e
					} = this.state, {
						award: t,
						canFlagAwards: s,
						close: r,
						onOpenReportFlow: a,
						reportAward: n
					} = this.props;
					return t.awardType !== h.f.Global || s ? i.a.createElement("button", {
						className: Object(c.a)(L.a.awardReport, {
							[L.a.isReported]: e
						}),
						onClick: () => {
							s ? (a(), r()) : e || (n(), this.setState({
								isReported: !0
							}))
						}
					}, e ? o.fbt._("Reported", null, {
						hk: "4C0VOl"
					}) : null, e ? i.a.createElement(E.a, {
						className: L.a.awardReportIcon
					}) : i.a.createElement(N.a, {
						className: L.a.awardReportIcon
					})) : null
				}
				renderHideButton() {
					const {
						close: e,
						onHideAward: t
					} = this.props;
					return i.a.createElement("button", {
						className: L.a.awardHide,
						onClick: () => {
							t(), e()
						}
					}, i.a.createElement(v.a, {
						className: L.a.awardHideIcon
					}), o.fbt._("Hide", null, {
						hk: "4kciEW"
					}))
				}
				renderCta() {
					const {
						award: e,
						currentUser: t,
						onClickPremium: s
					} = this.props, r = e.awardSubType === h.d.Premium, a = !!t && t.isGold;
					return r ? a ? null : i.a.createElement(P.h, {
						className: L.a.premiumCta,
						onClick: s
					}, o.fbt._("Get Premium", null, {
						hk: "Yapo5"
					})) : i.a.createElement("a", {
						className: L.a.howToLink,
						href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.fbt._("How do I award?", null, {
						hk: "RgVTd"
					}))
				}
				render() {
					const {
						award: e,
						awardIcon: t,
						currentUser: s,
						moderatorPermissions: r,
						postOrComment: a,
						subreddit: n,
						tooltipId: d
					} = this.props, p = e.awardSubType === h.d.Premium, u = s && a.authorId === s.id || Object(l.a)(r);
					return i.a.createElement(_.a, {
						caretColor: {
							top: p ? m.b.orangered : m.b.alienblue
						},
						tooltipSizeEstimate: {
							height: 290,
							width: 254
						},
						tooltipId: d,
						defaultTooltipPosition: "top"
					}, i.a.createElement("div", {
						className: Object(c.a)(L.a.headerBar, {
							[L.a.headerBarPremium]: p
						})
					}, u && this.renderHideButton(), this.renderReporterButton()), i.a.createElement("div", {
						className: L.a.awardDetails
					}, i.a.createElement("div", {
						className: L.a.awardIconContainer
					}, i.a.createElement("div", {
						className: L.a.awardIcon,
						style: {
							backgroundImage: `url("${t}")`
						}
					})), i.a.createElement("div", {
						className: L.a.awardName
					}, o.fbt._("{award-name} Award", [o.fbt._param("award-name", e.name)], {
						hk: "2QpjYF"
					})), i.a.createElement("p", {
						className: L.a.awardDescription
					}, i.a.createElement(T, {
						award: e
					})), e.awardType === h.f.Community && n && i.a.createElement("div", {
						className: L.a.subreddit
					}, i.a.createElement(O.b, {
						className: L.a.subredditIcon,
						subredditOrProfile: n
					}), `r/${n.name}`), e.awardType === h.f.Moderator && i.a.createElement("div", {
						className: L.a.subreddit
					}, i.a.createElement(j.a, {
						className: Object(c.a)(L.a.subredditIcon, L.a.modShield)
					}), o.fbt._("Exclusive mod-given Award", null, {
						hk: "1VGGho"
					})), this.renderCta()))
				}
			}
			t.default = A(R)
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/components/ContentTooltip/index.m.less"),
				w = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = {
					height: 200,
					width: 200
				},
				x = e => {
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
				f = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: r,
						caretColor: a,
						onClick: n,
						...d
					} = e;
					return i.a.createElement("div", b({
						onClick: n,
						className: Object(c.a)(s, w.a.StyledTooltipContainer, {
							[w.a.caretOnTop]: "top" === r,
							[w.a.caretOnLeft]: "left" === r,
							[w.a.caretOnRight]: "right" === r,
							[w.a.caretOnBottom]: "bottom" === r
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": a && a[r] ? a[r] : Object(p.a)(e).body
						}
					}, d), t)
				}),
				g = Object(n.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				_ = Object(d.a)(f, [o.a.Click, o.a.Keydown]),
				O = Object(a.b)(g);
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = C
						} = this.props;
						m.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const o = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									r = o.left > t.width;
									break;
								case "right":
									r = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = o.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
						tooltipPosition: s,
						caretPosition: o
					} = this.getPositions(e);
					return i.a.createElement(_, b({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = O(P)
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				n = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = s.n(c);
			const m = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(n.b)();
				return r.a.createElement("i", {
					className: Object(i.a)(e.className, Object(d.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = m
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardTooltip.aad0c72e9f2b404d896f.js.map