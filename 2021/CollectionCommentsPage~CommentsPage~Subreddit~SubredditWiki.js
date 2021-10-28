// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.9e0f3019ae63c7a10e50.js
// Retrieved at 10/28/2021, 2:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return E
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				a = r("./node_modules/tlds/index.js"),
				i = r.n(a),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				E = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const a = Object(s.e)(e),
					i = encodeURIComponent(`${t}${a}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${i}`
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return w
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return _
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return E
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return k
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return O
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return j
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return N
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return S
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return I
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return C
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return F
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return P
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, n) => {
				const s = await Object(i.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: n
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/actions/economics/powerups/constants.ts"),
				x = r("./src/lib/initializeClient/installReducer.ts"),
				v = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(x.a)({
				features: {
					powerups: v.a
				}
			});
			const w = Object(s.a)(f.d),
				_ = Object(s.a)(f.i),
				y = Object(s.a)(f.f),
				E = Object(s.a)(f.g),
				k = Object(s.a)(f.e),
				O = Object(s.a)(f.h),
				j = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, r) => {
								const n = await Object(i.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(s(), e, d),
							{
								subredditInfoById: n,
								redditorsInfoByIds: a
							} = t;
						await r(w(n)), a && await r(_(a))
					} catch (c) {
						a.c.captureException(c)
					}
				}, N = (e, t) => async (r, n) => {
					if (!e) return;
					const s = n(),
						a = Object(g.k)(s);
					if (!a || !Object(b.h)(s, {
							subredditId: e
						})) return;
					const i = !!Object(h.f)(s, {
						subredditId: e,
						userId: a.id
					});
					!t && i || await r(j(e, [a.id]))
				}, S = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.l)(e, {
						fullData: !0
					}));
					const n = r();
					return Object(b.h)(n, {
						subredditId: e
					})
				}, I = e => async (t, r) => {
					var n;
					const s = r(),
						a = e.map(({
							id: e
						}) => e),
						i = Object(p.c)(s, {
							commentIds: a
						}),
						o = null === (n = i.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(S(o)))) return;
					const d = new Set(i.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(j(o, Array.from(d)))
				}, C = (e, t) => async (r, n) => {
					if (!t) return;
					if (!(await r(S(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(j(e, Array.from(s)))
				}, F = (e, t) => async (r, n) => {
					const s = n(),
						a = Object(g.k)(s);
					if (!a) return;
					const i = a.id,
						o = Object(h.i)(s, {
							subredditId: e,
							userId: i
						});
					r(T({
						subredditId: e,
						userId: i,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, P = (e, t) => async (r, n) => {
					const s = n(),
						a = Object(g.k)(s);
					if (!a) return;
					const i = a.id,
						o = Object(h.h)(s, {
							subredditId: e,
							userId: i
						});
					r(T({
						subredditId: e,
						userId: i,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, T = e => async (t, r, {
					gqlContext: s
				}) => {
					const i = r(),
						o = Object(g.k)(i);
					if (!o) return;
					const d = o.id;
					t(y(e));
					const {
						subredditId: l,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, f = [p, b].filter(Boolean), x = Object(h.e)(i, {
						subredditId: l,
						userId: d
					});
					try {
						await c(s(), l, f, x), t(E(e))
					} catch (v) {
						t(k(e)), a.c.captureException(v), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const o = s(),
						d = Object(g.k)(o);
					if (!d) return;
					const l = d.id,
						p = {
							subredditId: e,
							userId: l
						},
						b = [Object(h.h)(o, p), Object(h.i)(o, p)].filter(Boolean);
					r(O({
						...p,
						isHidden: t
					}));
					try {
						await c(i(), e, b, t)
					} catch (f) {
						r(O({
							...p,
							isHidden: !t
						})), a.c.captureException(f), r(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const a = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, a = r ? i.a.createElement(m, {
						src: o.a.assetPath + t
					}) : i.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a))
				}
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-CommunityCard").then(r.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-Leaderboard").then(r.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, r) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/components/HeaderImage/index.m.less"),
				h = r.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				w = d.a.div("HeaderContainer", h.a),
				_ = d.a.span("HeaderText", h.a),
				y = d.a.wrapped(a.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				k = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const u = !!a && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						k = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						O = `${4+k}px`;
					return s.a.createElement(E, {
						style: {
							background: b,
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(y, {
						className: e.className,
						to: e.url
					}, s.a.createElement(w, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(f, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					}) : s.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: O,
							width: O
						}
					})), s.a.createElement(_, {
						style: {
							paddingTop: 32 === k ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(i.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!a,
							[h.a.hoverPositionedImage]: !!a && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = k
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("IdCard").then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(a.e)(o.v);
				return s.a.createElement(i.s, {
					priority: i.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? d._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : d._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return m
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(d.e)(c.X),
					r = e === n.MODAL,
					i = e === n.INFEED_UNIT;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: i
					})
				}, o.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), o.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), o.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), o.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), o.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(s.forwardRef)((function({
					className: e,
					progress: t
				}, r) {
					const n = 100 * t;
					return a.a.createElement("div", {
						className: Object(i.a)(c.a.barRow, e),
						ref: r
					}, a.a.createElement("div", {
						className: c.a.track
					}), a.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${n}%`
						}
					}, a.a.createElement(o.a, {
						className: Object(i.a)(c.a.icon, {
							[c.a.empty]: 0 === t,
							[c.a.full]: t >= 1
						})
					})))
				})),
				u = ({
					className: e,
					progress: t
				}) => {
					const [r, i] = Object(s.useState)(!1), o = r ? t : 0;
					return a.a.createElement(n.a, {
						onChange: e => {
							r || e.intersectionRatio < .75 || i(!0)
						},
						threshold: .75
					}, a.a.createElement(l, {
						className: e,
						progress: o
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				o = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = r.n(u);
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(a.a)(m.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(o.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(a.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(l.a)(),
					{
						className: n,
						supporter: o
					} = e,
					{
						score: u,
						supporterInfo: b
					} = o,
					h = Object(i.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					g = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					f = Object(i.c)(b),
					x = Object(i.a)(u),
					v = s.a.createElement(p, {
						userName: h,
						isNsfw: g,
						iconUrl: f
					});
				return s.a.createElement("div", {
					className: Object(a.a)(n, m.a.container)
				}, b ? s.a.createElement(d.a, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && r(Object(c.K)(b.id, b.displayName))
					}
				}, v) : s.a.createElement("div", {
					className: m.a.user
				}, v), s.a.createElement("div", {
					className: m.a.counter
				}, s.a.createElement(x, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const g = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function f(e, t) {
				const r = t || m;
				return e.slice(0, r).map(g)
			}
			const x = () => ({
					width: p,
					height: Object(i.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class w extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: f(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r
					} = this.props, s = this.state.items.length < t.length;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, a.a.createElement(i.TransitionMotion, {
						willLeave: x,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(i.spring)(p),
								height: Object(i.spring)(b),
								motionProgress: Object(i.spring)(1)
							}
						}))
					}, e => a.a.createElement(a.a.Fragment, null, e.map(e => a.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, a.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, a.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), s && a.a.createElement(o.s, {
						priority: o.b.Secondary,
						className: c.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: f(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = a.a.memo(w)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				i = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? o.a : e >= d ? i.a : a.a
			}

			function u(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t
			}) => e || s.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [s.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString()
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				u = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/helpers/trackers/powerups.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				w = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				_ = r.n(w);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: n,
					count: s,
					tiersInfo: i
				} = r, o = (i[n] || i[n - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return a.a.createElement("div", {
					className: t
				}, a.a.createElement("div", {
					className: _.a.titleRow
				}, a.a.createElement("span", null, y._("Powerups", null, {
					hk: "DrcXp"
				})), a.a.createElement("span", null, s < o ? `${s}/${o}` : s)), a.a.createElement(v.b, {
					progress: d
				}))
			};
			var k = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				O = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				j = r.n(O);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(i.d)(),
					v = Object(h.a)(),
					w = Object(i.e)(x.k),
					_ = Object(i.e)(e => Object(g.k)(e, {
						subredditId: t
					})),
					y = Object(i.e)(e => Object(f.Q)(e, {
						subredditId: t
					})),
					O = Object(i.e)(e => Object(g.n)(e, {
						subredditId: t
					})),
					S = Object(i.e)(e => !!Object(g.l)(e, {
						subredditId: t
					}));
				Object(s.useEffect)(() => {
					_ && r(Object(o.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(t))
				}, [_, t, r]);
				if (!_ || 1 === _.tiersInfo.length || !y) return null;
				return a.a.createElement(m.a, null, a.a.createElement(p.a, {
					className: e,
					title: N._("Powerups", null, {
						hk: "DrcXp"
					})
				}, a.a.createElement("div", {
					className: j.a.container
				}, a.a.createElement("div", {
					className: j.a.titleGroup
				}, a.a.createElement("div", {
					className: j.a.powerupsIcon
				}, a.a.createElement("img", {
					className: j.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers.png`
				})), a.a.createElement("h2", {
					className: j.a.title
				}, (() => S ? N._("Powerups are unlocked in {communityName}", [N._param("communityName", y.displayText)], {
					hk: "3xCZkG"
				}) : N._("Powerup to unlock perks for {communityName}", [N._param("communityName", y.displayText)], {
					hk: "2OPLXh"
				}))()), a.a.createElement(c.a, {
					className: j.a.button,
					onClick: () => {
						v(Object(b.z)()), r(Object(d.f)("powerups_sidebar"))
					}
				}), a.a.createElement(l.a, {
					space: l.b.SIDEBAR
				})), a.a.createElement("div", {
					className: j.a.group
				}, a.a.createElement("h3", {
					className: j.a.subTitle
				}, N._("Community Heroes", null, {
					hk: "2ssat0"
				})), a.a.createElement(E, {
					className: j.a.progress,
					powerups: _
				}), !!(null == O ? void 0 : O.length) && a.a.createElement(k.a, {
					supporters: O,
					className: j.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						v(Object(b.B)()), r(Object(d.h)(t))
					}
				}), !(null == O ? void 0 : O.length) && a.a.createElement("div", {
					className: j.a.becomeFirstHero
				}, a.a.createElement(u.a, {
					displayName: N._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == w ? void 0 : w.displayName,
					isNsfw: !!(null == w ? void 0 : w.isNSFW),
					iconUrl: null == w ? void 0 : w.accountIcon,
					textClassName: j.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/lodash/random.js"),
				a = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/helpers/adCount/index.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				f = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = r.n(x),
				w = r("./src/lib/lessComponent.tsx");
			const _ = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				y = Object(c.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, s, n)]
					}
				}),
				E = Object(d.b)(y),
				k = w.a.wrapped(b.a, "ThemedWidget", v.a),
				O = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				j = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				N = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, r))
					}
					render() {
						const e = a()(0, j.length - 1),
							{
								img: t,
								href: r
							} = j[e],
							{
								className: n,
								placement: s,
								redditStyle: i
							} = this.props;
						return o.a.createElement(k, {
							className: n,
							contentOnly: !0,
							redditStyle: i
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function S({
				className: e,
				post: t,
				placementIndex: r,
				refreshKey: n,
				listingName: s,
				placement: a,
				redditStyle: i,
				awaitingBrandSafetyCheck: d,
				forceHouseAd: c,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				if (!d && (O(t) || c)) {
					let d = null;
					return c ? d = o.a.createElement(N, {
						className: e,
						redditStyle: i,
						placement: a
					}) : t && (d = o.a.createElement(_, {
						post: t,
						postId: t.id,
						refreshKey: n,
						listingName: s,
						placement: a,
						placementIndex: r
					})), o.a.createElement(u, null, d)
				}
				return null
			}
			t.a = E(S)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, r) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/lib/linkMatchers/index.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = r("./src/telemetry/models/Outbound.ts"),
				f = r("./src/reddit/components/SubredditNav/index.m.less"),
				x = r.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = (e, t, r) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: r
				}),
				_ = ({
					children: e,
					isActive: t,
					isTopBannerVariant: r,
					...n
				}) => s.a.createElement("div", v({
					className: w(x.a.subNavTitle, t, r)
				}, n), s.a.createElement("span", null, e), s.a.createElement(h.b, {
					className: x.a.navDropdownIcon
				})),
				y = ({
					className: e,
					href: t,
					isActive: r,
					to: n,
					isTopBannerVariant: a,
					...i
				}) => {
					const o = w(x.a.navLink, r, a);
					return n ? s.a.createElement(m.a, v({
						className: o,
						to: n
					}, i)) : t ? s.a.createElement(b.b, v({
						className: o,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: t
					}, i)) : s.a.createElement("a", v({
						className: o
					}, i))
				},
				E = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement(m.a, v({
					className: Object(p.a)(w(x.a.navLink, t), e)
				}, r)),
				k = ({
					className: e,
					href: t,
					isActive: r,
					...n
				}) => t ? s.a.createElement(b.b, v({
					className: w(x.a.subNavLink, r),
					isSponsored: !1,
					sourceElement: g.SourceElement.NavigationMenu,
					href: t
				}, n)) : s.a.createElement("a", v({
					className: w(x.a.subNavLink, r)
				}, n)),
				O = ({
					className: e,
					...t
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavContainer, e)
				}, t)),
				j = ({
					className: e,
					isOpen: t,
					...r
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavList, e, {
						[x.a.mIsOpen]: t
					})
				}, r));
			class N extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(_, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = N;
			const I = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var C = e => e.menuItem.url ? s.a.createElement(y, {
					href: I(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(k, {
					key: `${e.text}-${I(e)}`,
					role: "listitem",
					href: I(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				F = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/actions/subreddit.ts"),
				T = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), M = Object(i.c)({
				isActive: (e, {
					subredditId: t
				}) => Boolean(e.subreddits.appliedFilters.meta[t]),
				subreddit: (e, {
					subredditId: t
				}) => Object(F.Q)(e, {
					subredditId: t
				})
			});
			var B = Object(a.b)(M, (e, t) => ({
					onActivate: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(({
					subreddit: e,
					isActive: t,
					onActivate: r
				}) => {
					const n = Object(T.a)();
					return e ? s.a.createElement(E, {
						className: x.a.metaNavLink,
						to: e.url,
						isActive: t,
						onClick: e => {
							Object(d.G)(n) && !Object(d.N)(n) && e.preventDefault(), r()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				A = r("./src/reddit/actions/economics/predictions/index.ts"),
				R = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				D = r("./src/reddit/helpers/trackers/predictions.ts"),
				H = r("./src/reddit/hooks/useTracking.ts"),
				W = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: U
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function V({
				subredditId: e
			}) {
				const t = Object(a.d)(),
					r = Object(T.a)(),
					i = Object(H.a)(),
					o = Object(R.N)(r),
					[d, c] = Object(n.useState)(!1),
					l = Object(a.e)(t => Object(F.Q)(t, {
						subredditId: e
					})),
					u = Object(a.e)(t => Object(F.K)(t, {
						subredditId: e
					})),
					m = Object(a.e)(t => Object(W.d)(t, {
						subredditId: e
					})),
					p = Object(a.e)(t => Object(W.c)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					!u || d || m || o || (t(Object(A.m)(l.name)), c(!0))
				}, [u, d, m, o, t, l.name]), u && m ? s.a.createElement(E, {
					className: x.a.predictionsFilter,
					isActive: o,
					onClick: () => {
						t(Object(P.p)({
							subredditId: e,
							forceState: !1
						})), i(Object(D.i)())
					},
					to: `${l.url}predictions/`
				}, U._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: x.a.liveIcon
				}, U._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var z = r("./src/lib/constants/index.ts");
			const {
				fbt: G
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const q = Object(d.u)(),
				Z = [z.Lb.SUBREDDIT, z.Lb.COMMENTS, z.Lb.COLLECTION_COMMENTS],
				J = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Z.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.N)(t.pageLayer)
				});
			var K = q(Object(a.b)(J, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: n,
						isPredictionsPage: a,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: o
					} = e, d = n && !r && !a;
					return s.a.createElement(y, {
						to: t,
						isActive: d,
						isTopBannerVariant: i,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, G._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Y = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				$ = r("./src/higherOrderComponents/makeAsync.tsx");
			var X = Object($.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				Q = r("./src/reddit/constants/postLayout.ts"),
				ee = r("./src/reddit/constants/screenWidths.ts"),
				te = r("./src/reddit/models/Theme/index.ts"),
				re = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const ne = Object(Y.a)(({
				className: e,
				children: t,
				isTopBannerVariant: r,
				...n
			}) => {
				const a = Object(re.a)(n);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, e),
					style: {
						position: a.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(te.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var se = e => s.a.createElement(ne, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === Q.g.Large ? `${e.maxWidth||ee.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement(X, null))),
				ae = r("./src/reddit/constants/wiki.ts"),
				ie = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, a = !!n && !!n.meta && n.meta.name === z.Lb.SUBREDDIT_WIKI, i = `wiki/${ae.i}`, o = t.endsWith("/") ? t + i : `${t}/${i}`;
				return s.a.createElement(y, {
					isActive: a,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(ie.g)())
				}, oe._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ce = Object(c.a)("spPolls", B),
				le = Object(d.u)(),
				ue = Object(i.c)({
					layout: d.Q,
					widget: l.f
				}),
				me = Object(a.b)(ue);
			t.a = le(me(Object(o.c)(e => s.a.createElement(se, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(K, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(ce, {
				subredditId: e.subredditId
			}), s.a.createElement(V, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(de, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(C, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: r,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, r) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, r) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, r) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/fastdom/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				v = r("./src/reddit/helpers/trackers/postFlair.ts"),
				w = r("./src/reddit/models/Widgets/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = r.n(y);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				j = Object(h.u)({
					filterName: e => Object(h.V)(e)[b.g],
					url: e => Object(h.db)(e)
				}),
				N = Object(o.c)({
					subredditId: (e, t) => Object(_.B)(e, t.subredditName)
				}),
				S = Object(i.b)(N),
				I = l.a.div("WidgetContent", E.a),
				C = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: r,
					...n
				}) => a.a.createElement("li", {
					className: Object(d.a)(E.a.StyledFlair, e === w.g.Cloud && E.a.cloudDisplay, {
						[E.a.flairFilter]: t,
						[E.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: r
				}, a.a.createElement(u.b, k({}, n, {
					className: E.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class F extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > O && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.q, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(C, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: r
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(C, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: r
					} = this.state, n = t.order, s = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(s) || void 0, o = t.order.length > n.length || r && !i;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = j(S(Object(m.c)(F)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/RichTextJson/index.tsx"),
				c = r("./src/reddit/helpers/dom/index.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				m = r("./src/reddit/models/Widgets/index.ts"),
				p = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				b = r.n(p);
			const h = i.a.div("RuleShortName", b.a),
				g = i.a.div("RuleIndex", b.a),
				f = i.a.div("RuleTitle", b.a),
				x = i.a.div("RuleDescription", b.a),
				v = i.a.wrapped(o.a, "RawHTMLDisplay", b.a),
				w = {};
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(c.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === m.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: n
					} = this, i = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !n(e) && !!i;
					return s.a.createElement(h, {
						className: Object(a.a)({
							[b.a.pointerCursor]: o,
							[b.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !i ? void 0 : r
					}, s.a.createElement(u.a, null, s.a.createElement(g, {
						className: Object(a.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), s.a.createElement(f, null, `${e.rule.shortName}`), s.a.createElement("div", null, !n(e) && i && s.a.createElement(l.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && s.a.createElement(x, {
						className: Object(a.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? s.a.createElement(d.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? s.a.createElement(v, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx");
			const d = e => e.rules.length > 0 ? a.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return a.a.createElement(o.a, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => a.a.createElement(d, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Be
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/OutboundLink/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/linkMatchers/index.ts"),
				b = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = r("./src/reddit/models/Widgets/index.ts"),
				f = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/telemetry/models/Outbound.ts"),
				w = r("./src/reddit/components/Widgets/Button/index.m.less"),
				_ = r.n(w);
			const y = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: n,
							fillColor: s,
							textColor: a
						} = e;
						return t && (n = a = r, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${a||n}`
						}
					})(e, t, r);
					const a = e.hoverState || e;
					if (a.kind === g.k.Image) s = {
						"--widget-button-hover-background-image": `url('${a.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: i
						} = a;
						t && (e = i = r, n = "transparent"), s = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${i||e}`
						}
					}
					return {
						...n,
						...s
					}
				},
				E = e => e.kind === g.k.Image ? _.a.imageButton : _.a.textButton,
				k = e => {
					const t = Object(g.s)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				O = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(h.a)(e).button;
					return s.a.createElement(c.s, {
						className: E(t),
						style: y(t, r, n),
						isFullWidth: !0,
						size: c.c.S,
						priority: c.b.Secondary
					}, t.kind === g.k.Text && s.a.createElement("span", {
						className: t.hoverState ? _.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && s.a.createElement("span", {
						className: _.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => s.a.createElement(l.b, {
					href: k(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, s.a.createElement(O, e)),
				N = m.a.wrapped(o.a, "RawHTMLDisplay", _.a);
			var S = Object(a.b)(() => Object(i.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.X
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(N, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(j, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				C = r("./src/reddit/components/HumanDate/index.tsx"),
				F = r("./src/reddit/controls/TextButton/index.tsx"),
				P = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = r.n(P);
			const L = 100,
				M = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", T.a),
				A = m.a.div("EventContainer", T.a),
				R = m.a.div("EventTitle", T.a),
				D = m.a.div("EventDate", T.a),
				H = m.a.div("EventLocation", T.a),
				W = m.a.div("EventDescription", T.a),
				U = m.a.wrapped(F.a, "ToggleDescription", T.a);
			class V extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? s.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), s.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(W, null, e.text)
				}
			}
			var z = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => s.a.createElement(A, {
					key: `${r}-${t.title}`
				}, s.a.createElement(R, null, t.titleHtml ? s.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(D, null, s.a.createElement(C.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(H, null, t.locationHtml ? s.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(V, {
					text: t.description
				})))),
				G = r("./src/reddit/components/TrackingHelper/index.tsx"),
				q = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Z = Object(G.c)(e => s.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				K = Object(a.b)(J),
				Y = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class $ extends s.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, s.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = K($),
				Q = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = r.n(Q);
			var te = m.a.div("ImageFrame", ee.a),
				re = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = r.n(re);
			var se = m.a.img("StyledImage", ne.a);
			class ae extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: r
					} = this;
					e.subredditName === t.subredditName && e.widget.data[r.imageIndex] && e.widget.data[r.imageIndex] === t.widget.data[r.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const r = e.widget.data[t.imageIndex],
						n = s.a.createElement(te, null, s.a.createElement(se, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl
					}, n) : n
				}
			}
			var ie = ae,
				oe = r("./src/config.ts"),
				de = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = r("./src/lib/opener/index.ts"),
				le = r("./src/reddit/components/Flair/index.tsx"),
				ue = r("./src/reddit/controls/InternalLink/index.tsx"),
				me = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = r("./src/reddit/models/Flair/index.ts"),
				be = r("./src/reddit/selectors/subreddit.ts"),
				he = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = r.n(he);
			const fe = m.a.a("ExternalLink", ge.a),
				xe = m.a.div("ModeratorListItem", ge.a),
				ve = m.a.div("Username", ge.a),
				we = m.a.wrapped(le.b, "FlairComponent", ge.a),
				_e = e => e.authorFlairType === pe.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				ye = e => s.a.createElement(ve, null, `u/${e}`),
				Ee = m.a.wrapped(ue.a, "InternalLink", ge.a),
				ke = m.a.div("LinkContainer", ge.a),
				Oe = Object(i.c)({
					userIsBanned: be.ab,
					userIsLoggedIn: x.K
				});
			var je = Object(a.b)(Oe)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n,
						userIsLoggedIn: a
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.s, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: ge.a.MessageModsButton,
						rel: ce.c,
						target: ce.d.BLANK,
						to: `${oe.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(me.a, {
						className: ge.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(xe, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, ye(e.name)))(e), s.a.createElement(we, {
						flair: _e(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(ke, null, s.a.createElement(Ee, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !a ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(fe, {
						href: `${oe.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: ce.c,
						target: ce.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(fe, {
						href: `${oe.a.redditUrl}/r/redditrequest`,
						rel: ce.c,
						target: ce.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ne = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Se = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ce = r.n(Ie);
			const Fe = m.a.div("WidgetContent", Ce.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Ce.a);
			var Te = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Fe, null, s.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Le = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => s.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Te;
						case "button":
							return S;
						case "subreddit-rules":
							return Se.b;
						case "community-list":
							return Z;
						case "calendar":
							return z;
						case "image":
							return ie;
						case "custom":
							return X;
						case "post-flair":
							return Ne.a;
						default:
							return Me
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return i
			})), r.d(t, "r", (function() {
				return o
			})), r.d(t, "s", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "v", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "x", (function() {
				return f
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "t", (function() {
				return I
			})), r.d(t, "e", (function() {
				return C
			}));
			var n = r("./src/reddit/models/Prediction/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = "poll",
				i = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "select",
					noun: "prediction_option"
				}),
				d = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => n => ({
					...Object(s.defaults)(n),
					source: a,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(n, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => r => ({
					...Object(s.defaults)(r),
					source: a,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(r, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					currency: t,
					amount: r
				}) => i => {
					const o = t === n.a.Coins ? r : void 0,
						d = t === n.a.Tokens ? r : void 0;
					return {
						...Object(s.defaults)(i),
						source: a,
						action: "close",
						noun: "prediction_modal",
						poll: Object(s.poll)(i, e, !1, o, d)
					}
				},
				b = e => ({
					...Object(s.defaults)(e),
					source: a,
					action: "click",
					noun: "add_coins"
				}),
				h = e => t => ({
					...Object(s.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				g = ({
					targetUserId: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				f = ({
					numberPredictionTokens: e,
					pollId: t
				}) => r => ({
					...Object(s.defaults)(r),
					source: a,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(s.poll)(r, t, !1, void 0, void 0, e)
				}),
				x = ({
					pageType: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				v = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				w = () => e => ({
					...Object(s.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				_ = () => e => ({
					...Object(s.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				y = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				E = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = e => t => ({
					...Object(s.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(s.subreddit)(t)
				}),
				O = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				j = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				N = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				S = () => e => ({
					...Object(s.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				I = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.subreddit)(e)
				}),
				C = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.subreddit)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "o", (function() {
				return O
			}));
			var n = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...s.defaults(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				i = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...a(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...a(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...a(t)
				}),
				c = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				l = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				w = d("ban_wiki_contributor"),
				_ = d("unban_wiki_contributor"),
				y = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				k = e => t => ({
					...a(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				O = e => t => ({
					...a(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				o = r.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", d({
				className: Object(a.a)(o.a.dropdown, {
					[o.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/constants/postLayout.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(a.Q)(e, {})] === s.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.cb
				}) === n.Fb.Treatment
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.9e0f3019ae63c7a10e50.js.map