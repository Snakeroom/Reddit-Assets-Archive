// https://www.redditstatic.com/desktop2x/AwardTooltip.6d43bb1a1f2e3f5606ae.js
// Retrieved at 1/18/2020, 2:00:22 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AwardTooltip"], {
		"./src/reddit/components/AwardTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				headerBar: "_1upk7O0Nror_rUzpKtAT82",
				awardReport: "_3NL-lAvdtp1f08B73D3P-U",
				isReported: "_2Pk3ujKwQr9ilRsjN0MDqJ",
				awardReportIcon: "_1l-7KCSHWOZOMW8AwEn6sF",
				awardDetails: "_3EitQZYmhmkb40LVIqZjbf",
				awardIconContainer: "_3d4PewaRsE8Kt1dA9yVlK6",
				awardIcon: "_3Hlfqt1qFE_Tu7QOlUiazx",
				awardName: "_35wr2WzwkRAIoUu5CXPuNQ",
				awardDescription: "_2-4PwlBy4HgE_34Dneye8m",
				subreddit: "_1X9qQp-APi9LYm-TWfMGNK",
				subredditIcon: "_1d6eT4Yh-x1pgKfz_TFiB",
				modShield: "_3GaARjoK2CWYLfWjrPUTkN",
				howToLink: "_1liKJZCBt1h8KFR0F0Gqsi"
			}
		},
		"./src/reddit/components/AwardTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/helpers/isPost.ts"),
				d = o("./src/reddit/i18n/components.tsx"),
				l = o("./src/reddit/constants/colors.ts"),
				m = o("./src/lib/makeActionCreator/index.ts"),
				p = o("./src/reddit/i18n/utils.ts"),
				u = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				w = o("./src/reddit/endpoints/gold/communityAwards.ts"),
				b = o("./src/reddit/actions/gold/constants.ts");
			const g = Object(m.a)(b.I);
			var f = o("./src/reddit/models/Gold/Award.ts"),
				x = o("./src/reddit/selectors/subreddit.ts"),
				C = o("./src/reddit/selectors/user.ts"),
				E = o("./src/reddit/components/ContentTooltip/index.tsx"),
				O = o("./src/reddit/components/SubredditIcon/index.tsx"),
				P = o("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				_ = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				v = o("./src/reddit/icons/svgs/Report/index.tsx"),
				y = (o("./node_modules/core-js/modules/es6.regexp.split.js"), o("./src/reddit/icons/fonts/Coin/index.tsx"));
			const j = e => {
				const {
					award: t,
					postOrComment: o
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return r.a.createElement(r.a.Fragment, null, e.map((e, t) => 0 === t ? e : r.a.createElement(r.a.Fragment, {
						key: e
					}, r.a.createElement(y.a, null), e)))
				}
				if (t.awardType === f.c.Community) return "post" === o ? r.a.createElement(d.c, null, "Shows the ", r.a.createElement(d.b, {
					name: "award-name"
				}, t.name), " Award on the post.") : r.a.createElement(d.c, null, "Shows the ", r.a.createElement(d.b, {
					name: "award-name"
				}, t.name), " Award on the comment.");
				if (t.awardType === f.c.Moderator) {
					const e = t.daysOfPremium ? Math.floor(t.daysOfPremium / 30) : 0;
					return 1 === e ? r.a.createElement(d.c, null, "Shows the ", r.a.createElement(d.b, {
						name: "award-name"
					}, t.name), " Award and gives the recipient 1 month of Premium.") : r.a.createElement(d.c, null, "Shows the ", r.a.createElement(d.b, {
						name: "award-name"
					}, t.name), " Award and gives the recipient ", r.a.createElement(d.b, {
						name: "months-of-premium"
					}, e), " months of Premium.")
				}
				return "gid_1" === t.id ? "post" === o ? r.a.createElement(d.c, null, "Shows the Silver Award on the post... and that's it.") : r.a.createElement(d.c, null, "Shows the Silver Award on the comment... and that's it.") : "gid_2" === t.id ? "post" === o ? r.a.createElement(d.c, null, "Shows the Gold Award on the post and gives the recipient a week of Reddit Premium (including 100 Coins).") : r.a.createElement(d.c, null, "Shows the Gold Award on the comment and gives the recipient a week of Reddit Premium (including 100 Coins).") : "gid_3" === t.id ? "post" === o ? r.a.createElement(d.c, null, "Shows the Platinum Award on the post and grants the recipient one month of Reddit Premium.") : r.a.createElement(d.c, null, "Shows the Platinum Award on the comment and grants the recipient one month of Reddit Premium.") : null
			};
			var T = o("./src/reddit/components/AwardTooltip/index.m.less"),
				A = o.n(T);
			const N = Object(a.c)({
					language: C.S,
					subreddit: (e, t) => {
						let {
							postOrComment: o
						} = t;
						return Object(x.K)(e, {
							thingId: o.id
						})
					}
				}),
				S = Object(s.b)(N, (e, t) => ({
					reportAward: () => e((e => async (t, o, n) => {
						let {
							apiContext: r
						} = n;
						t(g());
						const s = Object(p.c)("Something went wrong. The report could not be created at this time.");
						try {
							(await Object(w.e)(r(), e)).error && t(Object(u.e)({
								kind: h.b.Error,
								duration: u.a,
								text: s
							}))
						} catch (a) {
							t(Object(u.e)({
								kind: h.b.Error,
								duration: u.a,
								text: s
							}))
						}
					})(t.award.id))
				}));
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						isReported: !1
					}
				}
				renderReporterButton() {
					const {
						reportAward: e
					} = this.props, {
						isReported: t
					} = this.state;
					return r.a.createElement("button", {
						className: Object(i.a)(A.a.awardReport, {
							[A.a.isReported]: t
						}),
						onClick: () => {
							t || (this.setState({
								isReported: !0
							}), e())
						}
					}, t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(d.c, null, "Reported"), r.a.createElement(P.a, {
						className: A.a.awardReportIcon
					})) : r.a.createElement(v.a, {
						className: A.a.awardReportIcon
					}))
				}
				render() {
					const {
						award: e,
						postOrComment: t,
						subreddit: o,
						tooltipId: n
					} = this.props;
					return r.a.createElement(E.a, {
						caretColor: {
							top: l.a.alienblue
						},
						tooltipSizeEstimate: {
							height: 290,
							width: 254
						},
						tooltipId: n,
						defaultTooltipPosition: "top"
					}, r.a.createElement("div", {
						className: A.a.headerBar
					}, e.awardType !== f.c.Global && this.renderReporterButton()), r.a.createElement("div", {
						className: A.a.awardDetails
					}, r.a.createElement("div", {
						className: A.a.awardIconContainer
					}, r.a.createElement("div", {
						className: A.a.awardIcon,
						style: {
							backgroundImage: 'url("'.concat(e.icon.url, '")')
						}
					})), r.a.createElement("div", {
						className: A.a.awardName
					}, r.a.createElement(d.c, null, r.a.createElement(d.b, {
						name: "award-name"
					}, e.name), " Award")), r.a.createElement("p", {
						className: A.a.awardDescription
					}, r.a.createElement(j, {
						award: e,
						postOrComment: Object(c.a)(t.id) ? "post" : "comment"
					})), e.awardType === f.c.Community && o && r.a.createElement("div", {
						className: A.a.subreddit
					}, r.a.createElement(O.b, {
						className: A.a.subredditIcon,
						subredditOrProfile: o
					}), "r/".concat(o.name)), e.awardType === f.c.Moderator && r.a.createElement("div", {
						className: A.a.subreddit
					}, r.a.createElement(_.a, {
						className: Object(i.a)(A.a.subredditIcon, A.a.modShield)
					}), r.a.createElement(d.c, null, "Exclusive mod-given Award")), r.a.createElement("a", {
						className: A.a.howToLink,
						href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
						target: "_blank"
					}, r.a.createElement(d.c, null, "How do I award?"))))
				}
			}
			t.default = S(L)
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
			var n = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/higherOrderComponents/asTooltip.tsx"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = o("./src/lib/fastdom/index.ts"),
				p = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = o("./src/reddit/selectors/tooltip.ts"),
				h = o("./src/reddit/components/ContentTooltip/index.m.less"),
				w = o.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
				}
				return o
			};
			const f = {
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
				C = Object(l.a)(e => {
					const {
						children: t,
						className: o,
						style: n,
						caretPosition: r,
						caretColor: a
					} = e, i = g(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return s.a.createElement("div", b({
						className: Object(d.a)(o, w.a.StyledTooltipContainer, {
							[w.a.caretOnTop]: "top" === r,
							[w.a.caretOnLeft]: "left" === r,
							[w.a.caretOnRight]: "right" === r,
							[w.a.caretOnBottom]: "bottom" === r
						}),
						style: Object.assign({}, n, {
							"--contentTooltip-caretColor": a && a[r] ? a[r] : Object(p.a)(e).body
						})
					}, i), t)
				}),
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(u.b)(o)(e)
					}
				}),
				O = Object(c.a)(C, [n.a.Click, n.a.Keydown]),
				P = Object(a.b)(E);
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						m.a.read(() => {
							const o = document.getElementById(e);
							if (!o) return;
							const n = o.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									r = n.left > t.width;
									break;
								case "right":
									r = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = n.top > t.height
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
						tooltipPosition: o,
						caretPosition: n
					} = this.getPositions(e);
					return s.a.createElement(O, b({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: o
					}))
				}
			}
			t.a = P(_)
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, o) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/reddit/constants/colors.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = o.n(i);
			const d = o("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || s.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
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
//# sourceMappingURL=AwardTooltip.6d43bb1a1f2e3f5606ae.js.map