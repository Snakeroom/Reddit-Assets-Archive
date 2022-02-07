// https://www.redditstatic.com/desktop2x/AwardTooltip.e7a8ae446f5965b9ba06.js
// Retrieved at 2/7/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardTooltip"], {
		"./src/reddit/components/AwardTooltip/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/AwardTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = r("./src/reddit/constants/colors.ts"),
				u = r("./src/reddit/actions/gold/reportAward.ts"),
				p = r("./src/reddit/actions/tooltip.ts"),
				w = r("./src/reddit/models/Gold/Award.ts"),
				h = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/helpers/chooseVariant/index.ts");
			var f = r("./src/reddit/selectors/gold/awardIcon.ts"),
				C = r("./src/reddit/selectors/moderatorPermissions.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/ContentTooltip/index.tsx"),
				P = r("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				E = r("./src/reddit/icons/svgs/Hide/index.tsx"),
				I = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = r("./src/reddit/icons/svgs/Report/index.tsx"),
				N = r("./src/reddit/icons/fonts/Coin/index.tsx");
			const A = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: e
					}, n.a.createElement(N.a, null), e)))
				}
				return null
			};
			var L = r("./src/reddit/components/AwardTooltip/index.m.less"),
				T = r.n(L);
			const k = Object(d.c)({
					canFlagAwards: e => Object(b.c)(e, {
						experimentEligibilitySelector: b.a,
						experimentName: h.Ac
					}) === h.fd.Enabled,
					currentUser: g.k,
					moderatorPermissions: (e, {
						postOrComment: t
					}) => {
						const r = Object(x.H)(e, {
							thingId: t.id
						});
						return r ? Object(C.m)(e, {
							subredditId: r.id
						}) : null
					},
					subreddit: (e, {
						postOrComment: t
					}) => Object(x.H)(e, {
						thingId: t.id
					}),
					awardIcon: (e, {
						award: t,
						postOrComment: r
					}) => Object(f.a)(e, {
						award: t,
						minSize: 64,
						postOrCommentId: r.id
					})
				}),
				y = Object(a.b)(k, (e, {
					award: t,
					tooltipId: r
				}) => ({
					close: () => e(Object(p.h)({
						tooltipId: r
					})),
					onClickPremium: () => e(Object(i.b)("/premium")),
					reportAward: () => e(Object(u.a)(t))
				}));
			class R extends n.a.Component {
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
						canFlagAwards: r,
						close: o,
						onOpenReportFlow: a,
						reportAward: i
					} = this.props;
					return t.awardType !== w.f.Global || r ? n.a.createElement("button", {
						className: Object(c.a)(T.a.awardReport, {
							[T.a.isReported]: e
						}),
						onClick: () => {
							r ? (a(), o()) : e || (i(), this.setState({
								isReported: !0
							}))
						}
					}, e ? s.fbt._("Reported", null, {
						hk: "4C0VOl"
					}) : null, e ? n.a.createElement(v.a, {
						className: T.a.awardReportIcon
					}) : n.a.createElement(j.a, {
						className: T.a.awardReportIcon
					})) : null
				}
				renderHideButton() {
					const {
						close: e,
						onHideAward: t
					} = this.props;
					return n.a.createElement("button", {
						className: T.a.awardHide,
						onClick: () => {
							t(), e()
						}
					}, n.a.createElement(E.a, {
						className: T.a.awardHideIcon
					}), s.fbt._("Hide", null, {
						hk: "4kciEW"
					}))
				}
				renderCta() {
					const {
						award: e,
						currentUser: t,
						onClickPremium: r
					} = this.props, o = e.awardSubType === w.d.Premium, a = !!t && t.isGold;
					return o ? a ? null : n.a.createElement(_.k, {
						className: T.a.premiumCta,
						onClick: r
					}, s.fbt._("Get Premium", null, {
						hk: "Yapo5"
					})) : n.a.createElement("a", {
						className: T.a.howToLink,
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
						currentUser: r,
						moderatorPermissions: o,
						postOrComment: a,
						subreddit: i,
						tooltipId: d
					} = this.props, u = e.awardSubType === w.d.Premium, p = r && a.authorId === r.id || Object(l.a)(o);
					return n.a.createElement(O.a, {
						caretColor: {
							top: u ? m.a.orangered : m.a.alienblue
						},
						tooltipSizeEstimate: {
							height: 290,
							width: 254
						},
						tooltipId: d,
						defaultTooltipPosition: "top"
					}, n.a.createElement("div", {
						className: Object(c.a)(T.a.headerBar, {
							[T.a.headerBarPremium]: u
						})
					}, p && this.renderHideButton(), this.renderReporterButton()), n.a.createElement("div", {
						className: T.a.awardDetails
					}, n.a.createElement("div", {
						className: T.a.awardIconContainer
					}, n.a.createElement("div", {
						className: T.a.awardIcon,
						style: {
							backgroundImage: `url("${t}")`
						}
					})), n.a.createElement("div", {
						className: T.a.awardName
					}, s.fbt._("{award-name} Award", [s.fbt._param("award-name", e.name)], {
						hk: "2QpjYF"
					})), n.a.createElement("p", {
						className: T.a.awardDescription
					}, n.a.createElement(A, {
						award: e
					})), e.awardType === w.f.Community && i && n.a.createElement("div", {
						className: T.a.subreddit
					}, n.a.createElement(P.b, {
						className: T.a.subredditIcon,
						subredditOrProfile: i
					}), `r/${i.name}`), e.awardType === w.f.Moderator && n.a.createElement("div", {
						className: T.a.subreddit
					}, n.a.createElement(I.a, {
						className: Object(c.a)(T.a.subredditIcon, T.a.modShield)
					}), s.fbt._("Exclusive mod-given Award", null, {
						hk: "1VGGho"
					})), this.renderCta()))
				}
			}
			t.default = y(R)
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/fastdom/index.ts"),
				u = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = r("./src/reddit/selectors/tooltip.ts"),
				w = r("./src/reddit/components/ContentTooltip/index.m.less"),
				h = r.n(w);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = {
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
				x = Object(l.a)(e => {
					const {
						children: t,
						className: r,
						style: s,
						caretPosition: o,
						caretColor: a,
						onClick: i,
						...d
					} = e;
					return n.a.createElement("div", b({
						onClick: i,
						className: Object(c.a)(r, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
						}),
						style: {
							...s,
							"--contentTooltip-caretColor": a && a[o] ? a[o] : Object(u.a)(e).body
						}
					}, d), t)
				}),
				g = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				O = Object(d.a)(x, [s.a.Click, s.a.Keydown]),
				P = Object(a.b)(g);
			class _ extends n.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						m.a.read(() => {
							const r = document.getElementById(e);
							if (!r) return;
							const s = r.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									o = s.left > t.width;
									break;
								case "right":
									o = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = s.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
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
						tooltipPosition: r,
						caretPosition: s
					} = this.getPositions(e);
					return n.a.createElement(O, b({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: r
					}))
				}
			}
			t.a = P(_)
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, r) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/colors.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				d = r("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = r.n(d);
			const l = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(n.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? n.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return b
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				m = (e, t, r) => {
					const s = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => {
					let o = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						o = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return m(o, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) : m(e, r, t),
				p = Object(s.a)((e, {
					awards: t,
					minSize: r,
					postOrCommentId: s
				}) => {
					const o = Object(c.c)(e),
						a = l.find(e => e >= r),
						d = s ? Object(i.G)(e, {
							postId: s
						}) || Object(n.b)(e, {
							commentId: s
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: a,
						prefersReducedMotion: o,
						postOrComment: d
					})), e), {})
				}),
				w = (e, {
					award: t,
					minSize: r,
					postOrCommentId: s
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: s
				})[t.id] : void 0,
				h = (e, {
					minSize: t,
					userName: r
				}) => {
					const s = Object(d.sb)(e, {
						userName: r
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return w(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(a.b)(e),
						r = Object(a.a)(e);
					return w(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			}));
			const s = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			var s = r("./src/lib/constants/index.ts");
			const o = e => !n(e) && !!e.user.prefs.subscriptionsPinned,
				n = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Nb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AwardTooltip.e7a8ae446f5965b9ba06.js.map