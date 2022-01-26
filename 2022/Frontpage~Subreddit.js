// https://www.redditstatic.com/desktop2x/Frontpage~Subreddit.e629ca503d8dd6c026c3.js
// Retrieved at 1/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~Subreddit"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? a(e, t, n) : void 0 === t) ? 1 : i(t), (o(e) ? s : r)(e, t)
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = n("./node_modules/lodash/debounce.js"),
				a = n.n(o),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.Vb.Bottom_cell),
						t = Object(u.a)(c.Vb.Bottom_cell_dismissible),
						n = Object(u.a)(c.Vb.Bottom_cell_dismissible_immediate_trigger),
						s = Object(u.a)(c.Vb.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.Vb.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.Vb.Bottom_sheet);
					return e || s || r ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function n(t) {
					const n = function(e = b) {
						const {
							showPromo: t
						} = Object(d.a)(), n = m(), o = Object(p.a)(n), l = Object(u.a)(c.Vb.Bottom_cell_dismissible_immediate_trigger);
						return s.useMemo(() => a()(() => {
							if (!o && n) {
								const e = document.getElementById(i.d),
									s = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									a = o / 3,
									c = 2 * o;
								s >= (l ? a : c) && t(n)
							}
						}, e, {
							maxWait: h
						}), [l, o, n, t, e])
					}();
					return s.createElement(e, _({
						showSignupUpsell: n
					}, t))
				}
				return n.displayName = `withShowSignupUpsell(${t})`, n
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(a),
				c = n("./src/reddit/helpers/trackers/contentTag.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				survey: e,
				subredditId: t
			}) {
				const [n, a] = Object(s.useState)(!1), p = Object(d.a)();
				return Object(s.useEffect)(() => p(Object(c.h)()), [p]), r.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						a(!0), p(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: i.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: i.a.bannerCopy
				}, r.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), n && r.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => a(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(3), n.e(4)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				a = Object(r.a)(o);
			t.a = a
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(a);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				_ = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const g = f.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				w = f.a.wrapped(m.n, "SubmitLink", h.a),
				v = e => {
					switch (e) {
						case d.W.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.W.TOP:
						case d.W.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				S = ({
					listingName: e,
					sort: t
				}) => {
					const n = v(t);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.W.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.W.TOP:
							case d.W.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(l.a)(e) && !!n && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, v(t)), i.a.createElement(w, {
						to: `/r/${e}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				O = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(w, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(y.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(_.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(g, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(S, e) : i.a.createElement(O, null))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				N = Object(c.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return o.a.createElement(g.a, k({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(g.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(g.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				E = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				P = Object(h.u)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(v.b)(C),
					postLayout: h.R,
					redditStyle: h.D
				}),
				D = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: C
					}))
				}));
			class A extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(w.Y)(t),
							subreddit: Object(w.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || b.e[r], i = e === a, c = j[e], l = E[e];
						return o.a.createElement(y.b, k({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: i,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(N, k({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: C
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: C,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(_.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = P(D(Object(p.c)(Object(l.a)(A))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				_ = n("./node_modules/reselect/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/higherOrderComponents/asTooltip.tsx"),
				w = n("./src/reddit/constants/history.ts"),
				v = n("./src/reddit/constants/listingSorts.ts"),
				S = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				N = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				E = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				A = n("./src/reddit/components/ListingSort/index.m.less"),
				T = n.n(A),
				L = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const U = "ListingSort--SortPicker",
				B = Object(g.a)(L.a.wrapped(O.a, "Dropdown", T.a)),
				W = L.a.wrapped(D.a, "ListingSortIcon", T.a),
				H = (L.a.wrapped(N.b, "DropdownTriangle", T.a), L.a.div("Title", T.a)),
				M = L.a.wrapped(e => r.a.createElement(k.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				V = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", R({}, t, {
					className: Object(a.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				F = L.a.div("DropdownRowDisabled", T.a),
				G = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				K = Object(_.c)({
					isAwardListingExperimentEnabled: E.a,
					isBestSortPopularEnabled: j.a,
					user: I.k,
					dropdownIsOpen: (e, t) => Object(P.b)(t.dropdownId || U)(e),
					isPopularPage: l.F
				}),
				z = Object(o.b)(K, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || U
					}))
				}));
			var Y = L.a.wrapped(G(z(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(H, null, y.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(V, {
					disabled: e.disabled
				}, e.children || r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(v.a)(e.sort),
					id: e.dropdownId || U,
					showDropdownTriangle: !0
				}, r.a.createElement(W, {
					sort: e.sort
				}))), r.a.createElement(S.a.Consumer, null, t => r.a.createElement(B, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || U
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(F, null, y.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.W.BEST), t && r && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						s = n.split("?")[0],
						o = e.isProfilePage ? n.replace(s + "?", "") : void 0;
					return r.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(v.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(C.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[w.b.FeedLoadReason]: w.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(W, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", T.a),
				q = n("./src/reddit/constants/parameters.ts");
			const Q = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[b.dc.AllStates]: () => y.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.dc.Alaska]: () => y.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.dc.Alabama]: () => y.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.dc.Arkansas]: () => y.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.dc.Arizona]: () => y.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.dc.California]: () => y.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.dc.Colorado]: () => y.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.dc.Connecticut]: () => y.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.dc.DistrictOfColumbia]: () => y.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.dc.Delaware]: () => y.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.dc.Florida]: () => y.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.dc.Georgia]: () => y.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.dc.Hawaii]: () => y.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.dc.Iowa]: () => y.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.dc.Idaho]: () => y.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.dc.Illinois]: () => y.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.dc.Indiana]: () => y.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.dc.Kansas]: () => y.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.dc.Kentucky]: () => y.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.dc.Louisiana]: () => y.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.dc.Massachusetts]: () => y.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.dc.Maryland]: () => y.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.dc.Maine]: () => y.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.dc.Michigan]: () => y.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.dc.Minnesota]: () => y.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.dc.Missouri]: () => y.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.dc.Mississippi]: () => y.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.dc.Montana]: () => y.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.dc.NorthCarolina]: () => y.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.dc.NorthDakota]: () => y.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.dc.Nebraska]: () => y.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.dc.NewHampshire]: () => y.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.dc.NewJersey]: () => y.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.dc.NewMexico]: () => y.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.dc.Nevada]: () => y.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.dc.NewYork]: () => y.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.dc.Ohio]: () => y.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.dc.Oklahoma]: () => y.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.dc.Oregon]: () => y.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.dc.Pennsylvania]: () => y.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.dc.RhodeIsland]: () => y.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.dc.SouthCarolina]: () => y.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.dc.SouthDakota]: () => y.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.dc.Tennessee]: () => y.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.dc.Texas]: () => y.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.dc.Utah]: () => y.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.dc.Virginia]: () => y.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.dc.Vermont]: () => y.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.dc.Washington]: () => y.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.dc.Wisconsin]: () => y.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.dc.WestVirginia]: () => y.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.dc.Wyoming]: () => y.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Z);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = L.a.wrapped(O.a, "_Dropdown", X.a),
				te = Object(g.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === b.A.UnitedStates
				},
				se = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.dc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = se(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(l.u)(),
				ie = Object(_.c)({
					dropdownIsOpen: Object(P.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.A.UnitedStates + "_" + n))
					}
				}));
			var de = L.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${q.i}=${b.A.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(V, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Q(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(S.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.dc).map(n => {
					const s = b.dc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.dc.AllStates ? t : `${t}_${e}`)(s), oe(s))
					}, r.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: Q(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", X.a);
			const le = {
				[b.A.Everywhere]: () => y.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.A.UnitedStates]: () => y.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.A.Argentina]: () => y.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.A.Australia]: () => y.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.A.Bulgaria]: () => y.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.A.Canada]: () => y.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.A.Chile]: () => y.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.A.Colombia]: () => y.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.A.Croatia]: () => y.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.A.CzechRepublic]: () => y.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.A.Finland]: () => y.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.A.France]: () => y.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.A.Germany]: () => y.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.A.Greece]: () => y.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.A.Hungary]: () => y.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.A.Iceland]: () => y.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.A.India]: () => y.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.A.Ireland]: () => y.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.A.Italy]: () => y.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.A.Japan]: () => y.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.A.Malaysia]: () => y.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.A.Mexico]: () => y.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.A.NewZealand]: () => y.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.A.Philippines]: () => y.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.A.Poland]: () => y.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.A.Portugal]: () => y.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.A.PuertoRico]: () => y.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.A.Romania]: () => y.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.A.Serbia]: () => y.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.A.Singapore]: () => y.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.A.Spain]: () => y.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.A.Sweden]: () => y.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.A.Taiwan]: () => y.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.A.Thailand]: () => y.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.A.Turkey]: () => y.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.A.UnitedKingdom]: () => y.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				_e = Object(_.c)({
					dropdownIsOpen: Object(P.b)(be)
				});
			var fe = he(Object(o.b)(_e, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[w.b.FeedLoadReason]: w.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = se(e.sort),
						s = `${e.baseUrl}?${q.i}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(V, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(S.a.Consumer, null, n => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(n => {
						const o = b.A[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${oe(o)}`, o)
						}, r.a.createElement(k.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.A.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ye = n("./node_modules/path-browserify/index.js"),
				ge = n.n(ye),
				we = n("./src/reddit/components/TimeSort/index.m.less"),
				ve = n.n(we);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(g.a)(O.a),
				ke = L.a.div("ListingSortContainer", ve.a),
				xe = Object(l.u)(),
				Ce = Object(_.c)({
					dropdownIsOpen: Object(P.b)("TimeSort--SortPicker")
				});
			var Ne = xe(Object(o.b)(Ce, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(V, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(v.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(S.a.Consumer, null, t => r.a.createElement(Oe, Se({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.gc.HOUR, b.gc.DAY, b.gc.WEEK, b.gc.MONTH, b.gc.YEAR, b.gc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = ge.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						s = Object(p.a)(n, {
							[q.B]: t
						}),
						o = s.split("?")[0],
						i = `${s.replace(o+"?","")}`;
					return r.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(v.b)(t),
						href: {
							pathname: o,
							state: {
								[w.b.FeedLoadReason]: w.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(C.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Ee = n("./src/reddit/controls/Button/index.tsx"),
				Pe = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/selectors/meta.ts"),
				De = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Ae = n.n(De);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				Re = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				Ue = new Set([b.W.CONTROVERSIAL]),
				Be = "ListingSort--Overflow",
				We = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				He = Object(_.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, I.k, l.F, E.a, Ie.i, (e, t, n, s, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.W.BEST), r && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class Me extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: s
						} = this.props, o = s ? Object(p.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], c = s ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(Ee.t, {
							className: Object(a.a)(Ae.a.SortLink, e === t && Ae.a.selected),
							kind: Ee.b.InternalLink,
							priority: Ee.c.Plain,
							Icon: n => r.a.createElement(W, Te({}, n, {
								className: Object(a.a)(Ae.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(v.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[w.b.FeedLoadReason]: w.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, a = s && !!n && e === b.W.HOT && o === b.W.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(fe, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Ae.a.DropdownButton,
							className: Ae.a.CountrySort,
							disabled: t,
							dropdownClassName: Ae.a.Dropdown,
							rowClassName: Ae.a.DropdownRow,
							rowSelectedClassName: Ae.a.DropdownRowSelected,
							wrapperClassName: Ae.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Ae.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.W.TOP, b.W.NEW]);
					return Ue.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Le.has(s), d = Re.has(s), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Y, Te({}, this.props, {
						buttonClassName: Ae.a.DropdownButton,
						className: Object(a.a)(Ae.a.SortDropdown, e),
						rowClassName: Ae.a.DropdownRow,
						rowIconClassName: Ae.a.DropdownRowIcon,
						rowSelectedClassName: Ae.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Ae.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(s), c && r.a.createElement(Ne, {
						buttonClassName: Ae.a.DropdownButton,
						className: Ae.a.TimeSort,
						dropdownClassName: Ae.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Ae.a.DropdownRow,
						rowSelectedClassName: Ae.a.DropdownRowSelected,
						timeSort: i || b.hc,
						wrapperClassName: Ae.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(Y, Te({}, this.props, {
						className: Object(a.a)(Ae.a.SortOverflow, e),
						dropdownClassName: Ae.a.Dropdown,
						dropdownId: Be,
						rowClassName: Ae.a.DropdownRow,
						rowIconClassName: Ae.a.DropdownRowIcon,
						rowSelectedClassName: Ae.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Ae.a.SortOverflowButton,
						id: Be
					}, r.a.createElement(Pe.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ve = We(Object(o.b)(He)(Object(d.c)(Me))),
				Fe = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ge = n.n(Fe);
			const Ke = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				ze = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, s) => {
						if (t) {
							const r = Object(i.c)({
								sort: n,
								timeSort: s
							});
							e(Object(c.J)(t, r))
						}
					}
				}));
			class Ye extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Ge.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ve, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(m.a, {
						className: Ge.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ke(ze(Object(d.c)(Ye)))
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			const l = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return l[n] ? r.a.createElement(i.a, {
					name: l[n],
					isFilled: t,
					className: Object(o.a)(e, d.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_2I3Bfot0_z2fpeo6zu0l2J",
				powerupsLogo: "TQxDD5iDKrkEL8_gkvPUG",
				bolt: "lLsxHGuplL1k0pxt72AKH",
				bannerText: "_3yaV1tcyLQQaYxZ9yj1uPA",
				heading: "_2lL5MmI9e4lUGXlgHCdMMq",
				description: "_2Q6-RCjBdZlxyT48OReije",
				chevron: "_1GgOcxnjXNupiwBONGaA3T"
			}
		},
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return y
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/constants/localStorage.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				l = n("./src/reddit/helpers/trackers/powerups.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/routes/powerups/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/PowerupsCncModule/index.m.less"),
				_ = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				return Object(d.j)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(u.a)(),
					n = Object(a.e)(t => Object(b.R)(t, {
						subredditId: e
					})),
					h = !!n;
				return Object(r.useEffect)(() => {
					h && (Object(d.S)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e), y(e) || t(Object(l.c)()))
				}, [t, h, e]), h ? o.a.createElement("a", {
					className: _.a.feedBanner,
					onClick: () => {
						t(Object(l.b)())
					},
					href: `${s.a.redditUrl}${p.a}`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: _.a.powerupsLogo
				}, o.a.createElement("img", {
					className: _.a.bolt,
					src: `${s.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: f._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: _.a.bannerText
				}, o.a.createElement("p", {
					className: _.a.heading
				}, f._("Give {subreddit name} members a way to give back", [f._param("subreddit name", n.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: _.a.description
				}, f._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(m.a, {
					name: "caret_right",
					className: _.a.chevron
				})) : null
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/LRUCache/index.ts"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(i.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
			}, r.a.createElement(l.a, {
				className: h.a.backgroundWrapper
			}, r.a.createElement("div", {
				className: h.a.titleAndDescriptionContainer
			}, r.a.createElement("h3", {
				className: h.a.title
			}, _._("Top livestream", null, {
				hk: "4od1tZ"
			}))), r.a.createElement("div", {
				className: h.a.body
			}, r.a.createElement("div", {
				className: h.a.previewContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(h.a.thumbnail, h.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? r.a.createElement(c.b, {
				className: Object(i.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? r.a.createElement(d.a, {
				className: Object(i.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : r.a.createElement(f, {
				className: e
			});
			const g = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => r.a.createElement(y, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var w = e => r.a.createElement(g, e),
				v = n("./src/reddit/helpers/trackers/rpan.ts");
			const S = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				O = new o.a(20),
				k = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = O.get(t);
					if (n) return n;
					const s = x(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: S(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(v.H)()),
								render: ({
									className: t
								}) => r.a.createElement(w, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: s
						};
					return O.set(t, o), o
				},
				x = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(a.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(a.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.u)();
			t.a = m(Object(o.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const s = Object(i.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					r = Object(d.B)(e) || Object(c.a)(e),
					o = Object(i.e)(e);
				return {
					canShowAd: s && !r,
					awaitingBrandSafetyCheck: !Object(i.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: o
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: s,
				...o
			}) => !t && e && s ? r.a.createElement(l.a, u({
				forceHouseAd: n
			}, o)) : null))
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(a.c)({
					postCount: l.N,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.W.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.W.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.W.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.W.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.W.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.W.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.W.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.gc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.gc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.gc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.gc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.gc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.gc.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "d", (function() {
				return f
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				_ = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "H", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "D", (function() {
				return p
			})), n.d(t, "A", (function() {
				return b
			})), n.d(t, "E", (function() {
				return h
			})), n.d(t, "C", (function() {
				return _
			})), n.d(t, "B", (function() {
				return f
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "x", (function() {
				return w
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "y", (function() {
				return N
			})), n.d(t, "G", (function() {
				return j
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "w", (function() {
				return R
			})), n.d(t, "F", (function() {
				return U
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "l", (function() {
				return W
			})), n.d(t, "m", (function() {
				return H
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return V
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const n = a.z(e, t.post.id),
							s = a.G(e, t.post.id),
							r = a.hb(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === o.a.LIVE ? n.type = "stream_live" : s === o.a.VOD ? n.type = "stream_vod" : s === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: a.hb(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: a ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(n, e),
					actionInfo: a.c(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...i(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				_ = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				f = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				y = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t),
					actionInfo: a.c(r, {
						referralId: s
					})
				}),
				g = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				v = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				S = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				k = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				x = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				C = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...i(s, t)
				}),
				N = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				j = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.P(t),
					screen: a.Y(t),
					...i(t, e)
				}),
				E = e => t => {
					const n = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.P(t),
						screen: a.Y(t),
						...n
					}
				},
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				D = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.hb(t)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...i(n, e)
				}),
				T = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...i(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...i(n, e)
				}),
				W = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				M = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				}),
				V = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/promo.ts"),
				r = n("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === s.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(s.e)(r.a) === e,
					n = Object(s.e)(r.c) === e,
					o = Object(s.e)(r.e) === e;
				return t || n || o
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(s.useContext)(r.a)
			}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/components/PowerupsCncModule/index.tsx"),
				l = n("./src/reddit/components/PowerupsCncModule/async.ts"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts");
			const h = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e(3), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function _({
				postLayout: e,
				subredditId: t,
				subredditSubscribers: n
			}) {
				var s;
				const r = Object(a.e)(e => e.subreddits.survey[t]),
					_ = Object(a.e)(e => e.subreddits.progressModule[t]),
					f = Object(a.e)(e => Object(b.b)(e, {
						subredditId: t
					})),
					y = Object(a.e)(p.a),
					g = y !== u.Xd.NewModule;
				return (null === (s = null == _ ? void 0 : _.cards) || void 0 === s ? void 0 : s.length) > 0 && g ? o.a.createElement(h, {
					closeModuleOnMount: !!e && e !== m.g.Large,
					subredditId: t,
					progressModule: _
				}) : e !== m.g.Large ? null : (null == r ? void 0 : r.isEligible) && !(null == r ? void 0 : r.response) && (!y || y && n > 100) ? o.a.createElement(c.a, {
					subredditId: t,
					survey: r
				}) : f && !Object(d.isPowerupsCncModuleHiddenBySpamLimit)(t) ? o.a.createElement(l.a, {
					subredditId: t
				}) : o.a.createElement(i.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(i.yb)(e);
					if (!n) return !1;
					let s;
					if (-1 === [o.R, "r/popular"].indexOf(t)) {
						const r = t.replace(/^r\//, ""),
							o = Object(a.C)(e, r),
							i = n.subreddit[o];
						if (!i) return !1;
						s = i
					} else s = n;
					if (!s.rpanDuDismissalTime) return !1;
					return new Date(s.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.B
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, s, o, a) => a !== r.W.AWARDED && (!!e && (!o.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit))))),
				u = Object(s.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return S
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "g", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				_ = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				g = Object(s.a)(y, e => e.ended),
				w = Object(s.a)(y, e => e.removed),
				v = Object(s.a)(p, g, w, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = U(s, a.a.ENDED) ? a.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = U(s, a.a.ENDED) ? a.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				S = (e, t) => {
					return v(e)[Object(o.g)(t)]
				},
				O = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), v, b, i.h, (e, t, n, s, r) => {
					const i = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				k = Object(s.a)((e, {
					count: t
				}) => t, v, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => O(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				x = Object(s.a)(v, k, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				C = Object(s.a)(f, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => k(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				N = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t, v, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => k(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), h, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === a.a.IS_LIVE);
					if (o) return o.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				j = Object(r.a)(Object(s.a)(N, v, (e, t) => e ? t[e] : void 0)),
				E = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.g)(t) : void 0, N, b, i.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: s
				}) => k(e, {
					listingName: t || s,
					streamIdFromPath: n
				}), (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				P = Object(s.a)(_, f, C, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				I = Object(s.a)(_, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				D = Object(r.a)(Object(s.a)(E, v, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(s.a)(P, v, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(s.a)(I, v, (e, t) => e ? t[e] : void 0)),
				L = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(E, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(s.a)((e, {
					streamIdFromPath: t
				}) => t ? S(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function U(e, t) {
				const n = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const B = Object(s.a)(E, h, (e, t) => e && t.timestamps[e] || 0);
			var W;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(W || (W = {}));
			const H = Object(s.a)(E, v, m.b, (e, t, n) => {
					if (n) return W.INTRO;
					const s = e && t[e];
					if (!s) return W.UNAVAILABLE;
					const r = s.stream.state;
					return r === a.a.IS_LIVE || r === a.a.DISCONNECTED ? W.LIVE : r === a.a.ENDED && s.stream.vod_accessible ? W.VOD : W.UNAVAILABLE
				}),
				M = Object(s.a)(D, H, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === W.LIVE || t === W.VOD ? e.stream.hls_url : r : void 0),
				V = Object(s.a)(D, H, B, (e, t, n) => e ? t === W.LIVE ? e.broadcast_time : t === W.VOD && n < e.broadcast_time ? n : 0 : 0),
				F = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(a, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					});
					return !(!t || Object(s.nf)(t))
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: s.xc
					}) === s.bd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(a.g, a.d, i.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.Vb.Bottom_cell_dismissible]: e,
						[r.Vb.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.Vb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.nb, !0),
				u = d(r.ob, !0),
				m = d(r.pb, !0),
				p = d(r.nb, !1),
				b = d(r.ob, !1),
				h = d(r.pb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~Subreddit.e629ca503d8dd6c026c3.js.map