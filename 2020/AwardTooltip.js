// https://www.redditstatic.com/desktop2x/AwardTooltip.91caee7bb1b0c2484c2f.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardTooltip"], {
		"./src/reddit/components/AwardTooltip/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/AwardTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				n = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/react-router-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				p = o("./src/reddit/constants/colors.ts"),
				m = o("./src/reddit/actions/gold/reportAward.ts"),
				u = o("./src/reddit/actions/tooltip.ts"),
				h = o("./src/reddit/models/Gold/Award.ts"),
				w = o("./src/reddit/constants/experiments.ts"),
				b = o("./src/reddit/helpers/chooseVariant/index.ts");
			var C = o("./src/reddit/selectors/moderatorPermissions.ts"),
				x = o("./src/reddit/selectors/subreddit.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				g = o("./src/reddit/components/ContentTooltip/index.tsx"),
				O = o("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = o("./src/reddit/controls/Button/index.tsx"),
				P = o("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				E = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				j = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				v = o("./src/reddit/icons/svgs/Report/index.tsx"),
				N = (o("./node_modules/core-js/modules/es6.regexp.split.js"), o("./src/reddit/icons/fonts/Coin/index.tsx"));
			const y = e => {
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
			var T = o("./src/reddit/components/AwardTooltip/index.m.less"),
				I = o.n(T);
			const L = Object(d.c)({
					canFlagAwards: e => Object(b.c)(e, {
						experimentEligibilitySelector: b.a,
						experimentName: w.ab
					}) === w.ib.Enabled,
					currentUser: f.i,
					moderatorPermissions: (e, t) => {
						let {
							postOrComment: o
						} = t;
						const r = Object(x.J)(e, {
							thingId: o.id
						});
						return r ? Object(C.j)(e, {
							subredditId: r.id
						}) : null
					},
					subreddit: (e, t) => {
						let {
							postOrComment: o
						} = t;
						return Object(x.J)(e, {
							thingId: o.id
						})
					}
				}),
				k = Object(a.b)(L, (e, t) => {
					let {
						award: o,
						tooltipId: r
					} = t;
					return {
						close: () => e(Object(u.h)({
							tooltipId: r
						})),
						onClickPremium: () => e(Object(i.b)("/premium")),
						reportAward: () => e(Object(m.a)(o.id))
					}
				});
			class A extends n.a.Component {
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
						canFlagAwards: o,
						close: s,
						onOpenReportFlow: a,
						reportAward: i
					} = this.props;
					return t.awardType !== h.f.Global || o ? n.a.createElement("button", {
						className: Object(c.a)(I.a.awardReport, {
							[I.a.isReported]: e
						}),
						onClick: () => {
							o ? (a(), s()) : e || (i(), this.setState({
								isReported: !0
							}))
						}
					}, e ? r.fbt._("Reported", null, {
						hk: "4C0VOl"
					}) : null, e ? n.a.createElement(P.a, {
						className: I.a.awardReportIcon
					}) : n.a.createElement(v.a, {
						className: I.a.awardReportIcon
					})) : null
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
					}, n.a.createElement(E.a, {
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
					} = this.props, s = e.awardSubType === h.d.Premium, a = !!t && t.isGold;
					return s ? a ? null : n.a.createElement(_.e, {
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
						currentUser: t,
						moderatorPermissions: o,
						postOrComment: s,
						subreddit: a,
						tooltipId: i
					} = this.props, d = e.awardSubType === h.d.Premium, m = t && s.authorId === t.id || Object(l.a)(o);
					return n.a.createElement(g.a, {
						caretColor: {
							top: d ? p.a.orangered : p.a.alienblue
						},
						tooltipSizeEstimate: {
							height: 290,
							width: 254
						},
						tooltipId: i,
						defaultTooltipPosition: "top"
					}, n.a.createElement("div", {
						className: Object(c.a)(I.a.headerBar, {
							[I.a.headerBarPremium]: d
						})
					}, m && this.renderHideButton(), this.renderReporterButton()), n.a.createElement("div", {
						className: I.a.awardDetails
					}, n.a.createElement("div", {
						className: I.a.awardIconContainer
					}, n.a.createElement("div", {
						className: I.a.awardIcon,
						style: {
							backgroundImage: 'url("'.concat(e.icon.url, '")')
						}
					})), n.a.createElement("div", {
						className: I.a.awardName
					}, r.fbt._("{award-name} Award", [r.fbt._param("award-name", e.name)], {
						hk: "2QpjYF"
					})), n.a.createElement("p", {
						className: I.a.awardDescription
					}, n.a.createElement(y, {
						award: e
					})), e.awardType === h.f.Community && a && n.a.createElement("div", {
						className: I.a.subreddit
					}, n.a.createElement(O.b, {
						className: I.a.subredditIcon,
						subredditOrProfile: a
					}), "r/".concat(a.name)), e.awardType === h.f.Moderator && n.a.createElement("div", {
						className: I.a.subreddit
					}, n.a.createElement(j.a, {
						className: Object(c.a)(I.a.subredditIcon, I.a.modShield)
					}), r.fbt._("Exclusive mod-given Award", null, {
						hk: "1VGGho"
					})), this.renderCta()))
				}
			}
			t.default = k(A)
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var r = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = o("./node_modules/react/index.js"),
				n = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/asTooltip.tsx"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = o("./src/lib/fastdom/index.ts"),
				m = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
			var C = function(e, t) {
				var o = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]])
				}
				return o
			};
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
				g = Object(l.a)(e => {
					const {
						children: t,
						className: o,
						style: r,
						caretPosition: s,
						caretColor: a
					} = e, i = C(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return n.a.createElement("div", b({
						className: Object(c.a)(o, w.a.StyledTooltipContainer, {
							[w.a.caretOnTop]: "top" === s,
							[w.a.caretOnLeft]: "left" === s,
							[w.a.caretOnRight]: "right" === s,
							[w.a.caretOnBottom]: "bottom" === s
						}),
						style: Object.assign(Object.assign({}, r), {
							"--contentTooltip-caretColor": a && a[s] ? a[s] : Object(m.a)(e).body
						})
					}, i), t)
				}),
				O = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(u.b)(o)(e)
					}
				}),
				_ = Object(d.a)(g, [r.a.Click, r.a.Keydown]),
				P = Object(a.b)(O);
			class E extends n.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						p.a.read(() => {
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
					return n.a.createElement(_, b({}, this.props, {
						caretPosition: r,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = P(E)
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
				n = o("./src/reddit/constants/colors.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = o.n(i);
			const c = o("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(a.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || n.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
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
//# sourceMappingURL=AwardTooltip.91caee7bb1b0c2484c2f.js.map