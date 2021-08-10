// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.043b35f371d6d6f1f472.js
// Retrieved at 8/10/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				i = n("./node_modules/tlds/index.js"),
				a = n.n(i),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
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
				f = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				j = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return k
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "o", (function() {
				return M
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "j", (function() {
				return W
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "d", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/index.js"),
				i = n.n(s),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeRequest/index.ts"),
				m = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = n("./src/reddit/models/Prediction/index.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				v = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				w = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(a.a)({
				features: {
					predictions: o.a
				}
			});
			const j = Object(l.a)(w.e),
				_ = Object(l.a)(w.i),
				O = Object(l.a)(w.l),
				y = Object(l.a)(w.h),
				E = Object(l.a)(w.b),
				k = (e, t, n, r) => async (s, i, {
					gqlContext: a
				}) => {
					const o = Object(f.J)(i()),
						d = await Object(m.i)(a(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: o,
							tournamentId: r
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: c
					} = d.body.data;
					if (!c || !c.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = c, u = {
						subredditId: e,
						...l
					};
					return s(j(u)), u
				}, I = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: r
				}) => async (s, i, {
					gqlContext: a
				}) => {
					const o = await Object(m.m)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					});
					return s(_({
						pollId: n,
						prediction: o,
						price: r
					})), o
				}, C = ({
					optionId: e,
					postId: t
				}) => async (n, r, {
					gqlContext: s
				}) => {
					const i = await Object(m.k)(s(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, N = Object(l.a)(w.c), S = Object(l.a)(w.d), P = Object(l.a)(w.g), T = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(g.E)(s, e),
						a = Object(v.j)(s, {
							subredditId: i
						}),
						o = Object(h.k)(s);
					if (a) return Object(v.f)(s, {
						subredditId: i
					});
					t(N({
						subredditId: i
					}));
					const d = await Object(m.j)(r(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: o
					});
					if (!Object(u.c)(d) || d.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: c
					} = d.body.data.subredditInfoByName;
					if (!c) return [];
					const l = c.map(e => {
							var t, n;
							const r = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(p.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: r
							}
						}),
						b = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(S({
						subredditId: i,
						tournaments: l
					})), t(P({
						posts: b,
						meta: s.meta
					})), l
				}, L = Object(l.a)(w.a), F = Object(l.a)(w.j), M = Object(l.a)(w.k), R = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						i = Object(x.b)(s),
						a = Object(h.a)(s);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(m.e)(r(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? b.a.Coins : b.a.Tokens
						}),
						{
							createPredictionTournament: d
						} = o.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = d;
					return t(S({
						subredditId: e,
						tournaments: [c]
					})), c
				}, A = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var a;
					const o = Object(x.b)(r());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(m.b)(s(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						{
							addPredictionDrafts: c
						} = d.body.data;
					if (null === (a = c.errors) || void 0 === a ? void 0 : a.length) throw new Error(c.errors[0].message);
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, B = Object(l.a)(w.m), D = (e, t, n) => async (t, r, {
					gqlContext: s
				}) => {
					const i = await Object(m.l)(s(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return t(B(a.tournament)), a.tournament
				}, W = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = await Object(m.f)(r(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = s.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(B(i.tournament)), i.tournament
				}, H = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = await Object(m.g)(r(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = s.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, G = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = await Object(m.h)(r(), {
						tournamentId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = s.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, z = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: r,
					tournamentId: s,
					tournamentPostId: i
				}) => async a => {
					const o = await a(I({
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					}));
					return a(O({
						predictionId: r,
						selectedOptionId: t,
						tournamentId: s,
						tournamentPostId: i
					})), o
				}, V = e => async (t, n, {
					gqlContext: s
				}) => {
					try {
						const n = await Object(m.c)(s(), {
							postId: e
						});
						t(E({
							postId: e,
							prediction: n
						}));
						const i = Object(d.e)(r.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), c.b.SuccessMod);
						t(Object(d.f)(i))
					} catch {
						const e = Object(d.e)(r.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), c.b.Error);
						t(Object(d.f)(e))
					}
				};

			function U(e, t) {
				return async (n, r, {
					gqlContext: s
				}) => {
					const i = await Object(m.d)(s(), {
						postId: e,
						...t
					});
					return n(E({
						postId: e,
						prediction: i
					})), i
				}
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("EconomicsSubredditPremiumSidebarCards").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
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
						sentOncePerRender: n
					} = this.state, i = n ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
				}
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				w = d.a.div("HeaderContainer", h.a),
				j = d.a.span("HeaderText", h.a),
				_ = d.a.wrapped(i.a, "HeaderUrl", h.a),
				O = d.a.span("Container", h.a),
				y = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (r) {
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
					const u = !!i && !!o && "left" === r,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						y = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						E = `${4+y}px`;
					return s.a.createElement(O, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(_, {
						className: e.className,
						to: e.url
					}, s.a.createElement(w, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? s.a.createElement(f, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					}) : s.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					})), s.a.createElement(j, {
						style: {
							paddingTop: 32 === y ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = y
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const n = Object(i.e)(d.s),
					r = Object(i.e)(o.h);
				return s.a.createElement(a.q, {
					priority: a.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => n ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : r ? c._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = n.n(d);
			const l = Object(s.forwardRef)((function({
					className: e,
					progress: t
				}, n) {
					const r = 100 * t;
					return i.a.createElement("div", {
						className: Object(a.a)(c.a.barRow, e),
						ref: n
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${r}%`
						}
					}, i.a.createElement(o.a, {
						className: Object(a.a)(c.a.icon, {
							[c.a.empty]: 0 === t,
							[c.a.full]: t >= 1
						})
					})))
				})),
				u = ({
					className: e,
					progress: t
				}) => {
					const [n, a] = Object(s.useState)(!1), o = n ? t : 0;
					return i.a.createElement(r.a, {
						onChange: e => {
							n || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
						className: e,
						progress: o
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/trackers/powerups.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/selectors/experiments/econ/index.ts"),
				p = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				b = n.n(p);
			const h = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(a.a)(b.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(d.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: b.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(a.a)(b.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const n = Object(i.e)(m.h),
					r = Object(u.a)(),
					{
						className: d,
						supporter: p
					} = e,
					{
						score: g,
						supporterInfo: f
					} = p,
					x = Object(o.b)({
						displayName: null == f ? void 0 : f.displayName,
						isAltruismMessagingEnabled: n,
						score: g
					}),
					v = !!(null === (t = null == f ? void 0 : f.profile) || void 0 === t ? void 0 : t.isNsfw),
					w = Object(o.c)(f),
					j = Object(o.a)(g),
					_ = s.a.createElement(h, {
						userName: x,
						isNsfw: v,
						iconUrl: w
					});
				return s.a.createElement("div", {
					className: Object(a.a)(d, b.a.container)
				}, f ? s.a.createElement(c.a, {
					className: b.a.user,
					to: `/user/${x}/`,
					onClick: () => {
						f && r(Object(l.t)(f.id, f.displayName))
					}
				}, _) : s.a.createElement("div", {
					className: b.a.user
				}, _), s.a.createElement("div", {
					className: b.a.counter
				}, s.a.createElement(j, {
					className: b.a.powerupIcon
				}), g))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-motion/lib/react-motion.js"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

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
				const n = t || m;
				return e.slice(0, n).map(g)
			}
			const x = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: f(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: n,
						isAltruismMessagingEnabled: s
					} = this.props, d = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(r.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => i.a.createElement(i.a.Fragment, null, e.map(e => i.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, i.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, i.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), d && i.a.createElement(o.q, {
						priority: o.b.Secondary,
						className: c.a.expandButton,
						onClick: n,
						isFullWidth: !0
					}, s ? u._("See All Supporters", null, {
						hk: "1QZ823"
					}) : u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: f(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(w)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = n("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 5;

			function l(e) {
				return e >= c ? o.a : e >= d ? a.a : i.a
			}

			function u(e) {
				var t;
				const n = !e,
					s = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return n ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t,
				isAltruismMessagingEnabled: n
			}) => e || (n ? s.fbt._({
				"*": "Anonymous Supporters",
				_1: "Anonymous Supporter"
			}, [s.fbt._plural(t)], {
				hk: "42rXDr"
			}).toString() : s.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [s.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString())
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				l = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = n("./src/reddit/helpers/trackers/powerups.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/gold/powerups/index.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				w = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				j = n.n(w);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				const {
					className: t,
					powerups: n
				} = e, {
					tier: r,
					count: s,
					tiersInfo: a
				} = n, o = (a[r] || a[r - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: j.a.titleRow
				}, i.a.createElement("span", null, _._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(v.b, {
					progress: d
				}))
			};
			var y = n("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				E = n("./src/reddit/components/PowerupsSidebar/index.m.less"),
				k = n.n(E);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const n = Object(a.d)(),
					v = Object(b.a)(),
					w = Object(a.e)(x.j),
					j = Object(a.e)(e => Object(g.i)(e, {
						subredditId: t
					})),
					_ = Object(a.e)(e => Object(f.T)(e, {
						subredditId: t
					})),
					E = Object(a.e)(e => Object(g.l)(e, {
						subredditId: t
					})),
					C = Object(a.e)(e => !!Object(g.j)(e, {
						subredditId: t
					})),
					N = Object(a.e)(h.h);
				Object(s.useEffect)(() => {
					j && n(Object(o.a)(t))
				}, [j, t, n]);
				if (!j || 1 === j.tiersInfo.length || !_) return null;
				return i.a.createElement(u.a, null, i.a.createElement(m.a, {
					className: e,
					title: I._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: k.a.container
				}, i.a.createElement("div", {
					className: k.a.titleGroup
				}, i.a.createElement("div", {
					className: k.a.powerupsIcon
				}, i.a.createElement("img", {
					className: k.a.powerupsIconImage,
					src: `${r.a.assetPath}/img/powerups/powerup.png`
				})), i.a.createElement("h2", {
					className: k.a.title
				}, (() => C ? I._("Powerups are unlocked in {communityName}", [I._param("communityName", _.displayText)], {
					hk: "3xCZkG"
				}) : N ? I._("Powerup to support {communityName}", [I._param("communityName", _.displayText)], {
					hk: "2FQREU"
				}) : I._("Powerup to unlock perks for {communityName}", [I._param("communityName", _.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(c.a, {
					className: k.a.button,
					onClick: () => {
						v(Object(p.m)()), n(Object(d.f)("powerups_sidebar"))
					}
				})), i.a.createElement("div", {
					className: k.a.group
				}, i.a.createElement("h3", {
					className: k.a.subTitle
				}, N ? I._("Community Supporters", null, {
					hk: "4fsBdg"
				}) : I._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(O, {
					className: k.a.progress,
					powerups: j
				}), !!(null == E ? void 0 : E.length) && i.a.createElement(y.a, {
					supporters: E,
					className: k.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						v(Object(p.o)()), n(Object(d.g)(t))
					},
					isAltruismMessagingEnabled: N
				}), !(null == E ? void 0 : E.length) && i.a.createElement("div", {
					className: k.a.becomeFirstHero
				}, i.a.createElement(l.a, {
					displayName: N ? I._("Become the first supporter!", null, {
						hk: "4kCZ9y"
					}).toString() : I._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == w ? void 0 : w.displayName,
					isNsfw: !!(null == w ? void 0 : w.isNSFW),
					iconUrl: null == w ? void 0 : w.accountIcon,
					textClassName: k.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/random.js"),
				i = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/helpers/adCount/index.ts"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = n.n(x),
				w = n("./src/lib/lessComponent.tsx");
			const j = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				_ = Object(c.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(n, s, r)]
					}
				}),
				O = Object(d.b)(_),
				y = w.a.wrapped(b.a, "ThemedWidget", v.a),
				E = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				k = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				I = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, n))
					}
					render() {
						const e = i()(0, k.length - 1),
							{
								img: t,
								href: n
							} = k[e],
							{
								className: r,
								placement: s,
								redditStyle: a
							} = this.props;
						return o.a.createElement(y, {
							className: r,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function C({
				className: e,
				post: t,
				placementIndex: n,
				refreshKey: r,
				listingName: s,
				placement: i,
				redditStyle: a,
				awaitingBrandSafetyCheck: d,
				forceHouseAd: c,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				return d || !E(t) && !c ? null : o.a.createElement(u, null, c ? o.a.createElement(I, {
					className: e,
					redditStyle: a,
					placement: i
				}) : o.a.createElement(j, {
					post: t,
					refreshKey: r,
					listingName: s,
					placement: i,
					placementIndex: n
				}))
			}
			t.a = O(C)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/lib/linkMatchers/index.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = n("./src/telemetry/models/Outbound.ts"),
				f = n("./src/reddit/components/SubredditNav/index.m.less"),
				x = n.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = (e, t, n) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: n
				}),
				j = ({
					children: e,
					isActive: t,
					isTopBannerVariant: n,
					...r
				}) => s.a.createElement("div", v({
					className: w(x.a.subNavTitle, t, n)
				}, r), s.a.createElement("span", null, e), s.a.createElement(h.b, {
					className: x.a.navDropdownIcon
				})),
				_ = ({
					className: e,
					href: t,
					isActive: n,
					to: r,
					isTopBannerVariant: i,
					...a
				}) => {
					const o = w(x.a.navLink, n, i);
					return r ? s.a.createElement(m.a, v({
						className: o,
						to: r
					}, a)) : t ? s.a.createElement(b.b, v({
						className: o,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: t
					}, a)) : s.a.createElement("a", v({
						className: o
					}, a))
				},
				O = ({
					className: e,
					isActive: t,
					...n
				}) => s.a.createElement(m.a, v({
					className: Object(p.a)(w(x.a.navLink, t), e)
				}, n)),
				y = ({
					className: e,
					href: t,
					isActive: n,
					...r
				}) => t ? s.a.createElement(b.b, v({
					className: w(x.a.subNavLink, n),
					isSponsored: !1,
					sourceElement: g.SourceElement.NavigationMenu,
					href: t
				}, r)) : s.a.createElement("a", v({
					className: w(x.a.subNavLink, n)
				}, r)),
				E = ({
					className: e,
					...t
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavContainer, e)
				}, t)),
				k = ({
					className: e,
					isOpen: t,
					...n
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavList, e, {
						[x.a.mIsOpen]: t
					})
				}, n));
			class I extends s.a.Component {
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
					return s.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(j, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var C = I;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var S = e => e.menuItem.url ? s.a.createElement(_, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(C, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(y, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				P = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/actions/subreddit.ts"),
				L = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = Object(a.c)({
				isActive: (e, {
					subredditId: t
				}) => Boolean(e.subreddits.appliedFilters.meta[t]),
				subreddit: (e, {
					subredditId: t
				}) => Object(P.T)(e, {
					subredditId: t
				})
			});
			var R = Object(i.b)(M, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(({
					subreddit: e,
					isActive: t,
					onActivate: n
				}) => {
					const r = Object(L.a)();
					return e ? s.a.createElement(O, {
						className: x.a.metaNavLink,
						to: e.url,
						isActive: t,
						onClick: e => {
							Object(d.E)(r) && !Object(d.L)(r) && e.preventDefault(), n()
						}
					}, F._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				A = n("./src/reddit/actions/economics/predictions/index.ts"),
				B = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				D = n("./src/reddit/helpers/trackers/predictions.ts"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					n = Object(L.a)(),
					a = Object(W.a)(),
					o = Object(B.L)(n),
					[d, c] = Object(r.useState)(!1),
					l = Object(i.e)(t => Object(P.T)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(P.N)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(H.d)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(H.c)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => {
					o && a(Object(D.x)())
				}, [o, a]), Object(r.useEffect)(() => {
					(async () => {
						u && !d && (t(Object(A.i)(l.name)), c(!0))
					})()
				}, [u, d, t, l.name]), u && m ? s.a.createElement(O, {
					className: x.a.predictionsFilter,
					isActive: o,
					onClick: () => {
						t(Object(T.p)({
							subredditId: e,
							forceState: !1
						})), a(Object(D.h)())
					},
					to: `${l.url}predictions/`
				}, G._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: x.a.liveIcon
				}, G._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var V = n("./src/lib/constants/index.ts");
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const q = Object(d.t)(),
				J = [V.Jb.SUBREDDIT, V.Jb.COMMENTS, V.Jb.COLLECTION_COMMENTS],
				Z = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var Q = q(Object(i.b)(Z, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: r,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = r && !n && !i;
					return s.a.createElement(_, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), o())
						}
					}, U._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				K = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Y = n("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				X = n("./src/reddit/constants/postLayout.ts"),
				ee = n("./src/reddit/constants/screenWidths.ts"),
				te = n("./src/reddit/models/Theme/index.ts"),
				ne = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const re = Object(K.a)(({
				className: e,
				children: t,
				isTopBannerVariant: n,
				...r
			}) => {
				const i = Object(ne.a)(r);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(te.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var se = e => s.a.createElement(re, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === X.g.Large ? `${e.maxWidth||ee.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ie = n("./src/reddit/constants/wiki.ts"),
				ae = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: r
				} = e, i = !!r && !!r.meta && r.meta.name === V.Jb.SUBREDDIT_WIKI, a = `wiki/${ie.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(_, {
					isActive: i,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, oe._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ce = Object(c.a)("spPolls", R),
				le = Object(d.t)(),
				ue = Object(a.c)({
					layout: d.O,
					widget: l.f
				}),
				me = Object(i.b)(ue);
			t.a = le(me(Object(o.c)(e => s.a.createElement(se, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(Q, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(ce, {
				subredditId: e.subredditId
			}), s.a.createElement(z, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(de, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => s.a.createElement(S, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/trackers/postFlair.ts"),
				w = n("./src/reddit/models/Widgets/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = n.n(_);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				k = Object(h.t)({
					filterName: e => Object(h.T)(e)[b.g],
					url: e => Object(h.Z)(e)
				}),
				I = Object(o.c)({
					subredditId: (e, t) => Object(j.E)(e, t.subredditName)
				}),
				C = Object(a.b)(I),
				N = l.a.div("WidgetContent", O.a),
				S = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: n,
					...r
				}) => i.a.createElement("li", {
					className: Object(d.a)(O.a.StyledFlair, e === w.d.Cloud && O.a.cloudDisplay, {
						[O.a.flairFilter]: t,
						[O.a["m-selected"]]: r.isSelected
					}),
					onMouseDown: n
				}, i.a.createElement(u.b, y({}, r, {
					className: O.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
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
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(g.o, {
						className: O.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(S, {
						key: e.templateId,
						display: n.display,
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
					} = this.state, n = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: O.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(S, {
						key: e.templateId,
						display: n.display,
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
						hasOverflow: n
					} = this.state, r = t.order, s = this.getFlairsFromIds(r), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > r.length || n && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = k(C(Object(m.c)(P)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = n.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				v = d.a.div("RuleTitle", g.a),
				w = d.a.div("RuleDescription", g.a),
				j = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				_ = {};
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: r
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !r(e) && !!s;
					return i.a.createElement(f, {
						className: Object(o.a)({
							[g.a.pointerCursor]: a
						}),
						onClick: r(e) || !s ? void 0 : n
					}, i.a.createElement(p.a, null, i.a.createElement(x, null, `${e.humanIndex}.`), i.a.createElement(v, null, `${e.rule.shortName}`), i.a.createElement("div", null, !r(e) && s && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(w, null, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: _
					}) : e.rule.descriptionHtml ? i.a.createElement(j, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const y = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: r.fbt._("{subredditName} Rules", [r.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return i.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(y, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Re
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				w = n("./src/reddit/components/Widgets/Button/index.m.less"),
				j = n.n(w);
			const _ = (e, t, n) => {
					let r = {},
						s = {};
					r = e.kind === g.f.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: r,
							fillColor: s,
							textColor: i
						} = e;
						return t && (r = i = n, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${r}`,
							"--widget-button-color": `${i||r}`
						}
					})(e, t, n);
					const i = e.hoverState || e;
					if (i.kind === g.f.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: r,
							textColor: a
						} = i;
						t && (e = a = n, r = "transparent"), s = {
							"--widget-button-hover-background-color": `${r||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...r,
						...s
					}
				},
				O = e => e.kind === g.f.Image ? j.a.imageButton : j.a.textButton,
				y = e => {
					const t = Object(g.n)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				E = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, r = Object(h.a)(e).button;
					return s.a.createElement(c.q, {
						className: O(t),
						style: _(t, n, r),
						isFullWidth: !0,
						size: c.c.S,
						priority: c.b.Secondary
					}, t.kind === g.f.Text && s.a.createElement("span", {
						className: t.hoverState ? j.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && s.a.createElement("span", {
						className: j.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				k = e => s.a.createElement(l.b, {
					href: y(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, s.a.createElement(E, e)),
				I = m.a.wrapped(o.a, "RawHTMLDisplay", j.a);
			var C = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.V
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(k, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/reddit/components/HumanDate/index.tsx"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = n.n(T);
			const F = 100,
				M = {
					isExpanded: !1
				},
				R = m.a.wrapped(o.a, "RawHTMLDisplay", L.a),
				A = m.a.div("EventContainer", L.a),
				B = m.a.div("EventTitle", L.a),
				D = m.a.div("EventDate", L.a),
				W = m.a.div("EventLocation", L.a),
				H = m.a.div("EventDescription", L.a),
				G = m.a.wrapped(P.a, "ToggleDescription", L.a);
			class z extends s.a.Component {
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
					return e.text.length > F ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, F), s.a.createElement(G, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? N.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : N.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(H, null, e.text)
				}
			}
			var V = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => s.a.createElement(A, {
					key: `${n}-${t.title}`
				}, s.a.createElement(B, null, t.titleHtml ? s.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(D, null, s.a.createElement(S.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? `${n}:0${r}` : `${n}:${r}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(z, {
					text: t.description
				})))),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(U.c)(e => s.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Z = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Q = Object(i.b)(Z),
				K = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
			class Y extends s.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = K(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var $ = Q(Y),
				X = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = n.n(X);
			var te = m.a.div("ImageFrame", ee.a),
				ne = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = n.n(ne);
			var se = m.a.img("StyledImage", re.a);
			class ie extends s.a.Component {
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
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						r = s.a.createElement(te, null, s.a.createElement(se, {
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? s.a.createElement(l.b, {
						href: n.linkUrl
					}, r) : r
				}
			}
			var ae = ie,
				oe = n("./src/config.ts"),
				de = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = n("./src/lib/opener/index.ts"),
				le = n("./src/reddit/components/Flair/index.tsx"),
				ue = n("./src/reddit/controls/InternalLink/index.tsx"),
				me = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = n("./src/reddit/models/Flair/index.ts"),
				be = n("./src/reddit/selectors/subreddit.ts"),
				he = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = n.n(he);
			const fe = m.a.a("ExternalLink", ge.a),
				xe = m.a.div("ModeratorListItem", ge.a),
				ve = m.a.div("Username", ge.a),
				we = m.a.wrapped(le.b, "FlairComponent", ge.a),
				je = e => e.authorFlairType === pe.f.Richtext ? {
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
				_e = e => s.a.createElement(ve, null, `u/${e}`),
				Oe = m.a.wrapped(ue.a, "InternalLink", ge.a),
				ye = m.a.div("LinkContainer", ge.a),
				Ee = Object(a.c)({
					userIsBanned: be.db,
					userIsLoggedIn: x.J
				});
			var ke = Object(i.b)(Ee)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: r,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(d.a, {
						styles: n.styles,
						title: N.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || r) && s.a.createElement(c.q, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: ge.a.MessageModsButton,
						rel: ce.b,
						target: ce.c.BLANK,
						to: `${oe.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(me.a, {
						className: ge.a.MessageModsButtonIcon
					}), N.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !r ? s.a.createElement(s.a.Fragment, null, n.mods.map(e => s.a.createElement(xe, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, _e(e.name)))(e), s.a.createElement(we, {
						flair: je(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(ye, null, s.a.createElement(Oe, {
						to: `/r/${t}/about/moderators/`
					}, N.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : r || !i ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, N.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(fe, {
						href: `${oe.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: ce.b,
						target: ce.c.BLANK
					}, N.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, N.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(fe, {
						href: `${oe.a.redditUrl}/r/redditrequest`,
						rel: ce.b,
						target: ce.c.BLANK
					}, N.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", N.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ie = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ce = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ne = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = n.n(Ne);
			const Pe = m.a.div("WidgetContent", Se.a),
				Te = m.a.wrapped(o.a, "RawHTMLDisplay", Se.a);
			var Le = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Pe, null, s.a.createElement(Te, {
					html: e.widget.textHtml || ""
				}))),
				Fe = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => s.a.createElement(Fe.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return ke;
						case "textarea":
							return Le;
						case "button":
							return C;
						case "subreddit-rules":
							return Ce.b;
						case "community-list":
							return J;
						case "calendar":
							return V;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Ie.a;
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
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return N
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				a = n("./src/redditGQL/operations/CancelPrediction.json"),
				o = n("./src/redditGQL/operations/ChangePrediction.json"),
				d = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				c = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				u = n("./src/redditGQL/operations/GetPredictionToken.json"),
				m = n("./src/redditGQL/operations/GetTournaments.json"),
				p = n("./src/redditGQL/operations/ResolvePrediction.json"),
				b = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				h = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				g = n("./src/redditGQL/operations/VotePrediction.json");
			const f = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: i,
				price: a
			}) => {
				var o;
				const d = await Object(r.a)(e, {
					...g,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: i,
							price: a
						}
					}
				});
				if (!Object(s.c)(d) || d.error || !(null === (o = d.body.data.votePrediction) || void 0 === o ? void 0 : o.ok)) throw new Error("Failed to make prediction");
				return d.body.data.votePrediction.poll
			}, x = (e, {
				postId: t,
				optionId: n
			}) => Object(r.a)(e, {
				...p,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var v;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const w = (e, {
					subredditId: t,
					period: n,
					top: s,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(r.a)(e, {
					...b,
					variables: {
						subredditId: t,
						period: n,
						top: s,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				j = (e, t) => Object(r.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(r.a)(e, {
					...m,
					variables: t
				}),
				O = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(r.a)(e, {
					...h,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(r.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}),
				I = (e, t) => Object(r.a)(e, {
					...u,
					variables: t
				}),
				C = async (e, t) => {
					const n = await Object(r.a)(e, {
						...o,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, N = async (e, {
					postId: t
				}) => {
					var n, i;
					const o = await Object(r.a)(e, {
						...a,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(s.c)(o) || !(null === (n = o.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = o.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return o.body.data.cancelPrediction.poll
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./src/lib/isFakeSubreddit/index.ts"), n("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var r;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "p", (function() {
				return a
			})), n.d(t, "q", (function() {
				return o
			})), n.d(t, "r", (function() {
				return d
			})), n.d(t, "l", (function() {
				return c
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "f", (function() {
				return N
			}));
			var r = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				d = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => r => ({
					...Object(s.defaults)(r),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(r, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(s.defaults)(n),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(n, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					currency: t,
					amount: n
				}) => a => {
					const o = t === r.a.Coins ? n : void 0,
						d = t === r.a.Tokens ? n : void 0;
					return {
						...Object(s.defaults)(a),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(s.poll)(a, e, !1, o, d)
					}
				},
				b = e => ({
					...Object(s.defaults)(e),
					source: i,
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
				}) => n => ({
					...Object(s.defaults)(n),
					source: i,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(s.poll)(n, t, !1, void 0, void 0, e)
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
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					},
					subreddit: Object(s.subreddit)(e)
				}),
				w = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				j = () => e => ({
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
				O = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				y = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				E = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				k = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				I = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				C = () => e => ({
					...Object(s.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				N = e => t => ({
					...Object(s.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(s.predictionTournamentPoll)(t, e),
					post: Object(s.post)(t, e),
					predictions: Object(s.predictions)(t, e),
					subreddit: Object(s.subreddit)(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "o", (function() {
				return E
			}));
			var r = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.defaults(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...i(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...i(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...i(t)
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
				j = d("unban_wiki_contributor"),
				_ = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[r.a.Inherit]: "subreddit_wiki_perms",
					[r.a.Contributors]: "only_wiki_contributors",
					[r.a.Mods]: "only_mods"
				},
				y = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				E = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: O[e]
					})
				})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				o = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", d({
				className: Object(i.a)(o.a.dropdown, {
					[o.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(r || (r = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.O)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: r.P
				}) === r.mb.Treatment
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(r.a)({
				features: {
					predictions: s.a
				}
			});
			const a = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							r = t.formData.polls,
							s = r.options.map(e => ({
								text: e.text
							})),
							a = {};
						return n.document ? a.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (a.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: r.endDate.toISOString(),
							body: a,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"3048ce040c04"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"cb619ee4a1d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ef19872c5854"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"003c1e2f9277"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"6851ffb490a5"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.043b35f371d6d6f1f472.js.map