// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.b4864fa136dee0d8920f.js
// Retrieved at 6/28/2021, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(s)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
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
				return j
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "i", (function() {
				return _
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				i = r("./node_modules/tlds/index.js"),
				a = r.n(i),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
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
					fuzzyIP: !0
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
				j = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				_ = e => {
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
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return O
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "l", (function() {
				return W
			}));
			var n = r("./node_modules/uuid/index.js"),
				s = r.n(n),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/predictions/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/endpoints/economics/predictions.ts"),
				c = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = r("./src/reddit/models/Prediction/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				g = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				f = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const x = Object(o.a)(f.d),
				v = Object(o.a)(f.h),
				w = Object(o.a)(f.k),
				j = Object(o.a)(f.g),
				O = (e, t, r, n) => async (s, i, {
					gqlContext: a
				}) => {
					const o = Object(b.K)(i()),
						c = await Object(d.h)(a(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: o,
							tournamentId: n
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = l, m = {
						subredditId: e,
						...u
					};
					return s(x(m)), m
				}, _ = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(m.R)(s, {
							postId: e,
							disallowProfile: !0
						});
					if (!i) throw new Error("Post does not belong to a subreddit");
					const a = await Object(d.f)(n(), i.name, Object(u.g)(s));
					if (a.error || !a.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: o
					} = a.body.data;
					if (!o || !o.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return o.predictionCoinPackages
				}, k = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (s, i, {
					gqlContext: a
				}) => {
					const o = await Object(d.l)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					});
					if (o.error || !o.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = o.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return s(v({
						pollId: r,
						prediction: c.poll,
						price: n
					})), c.poll
				}, y = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(d.j)(s(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return r(j({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, E = Object(o.a)(f.b), I = Object(o.a)(f.c), C = Object(o.a)(f.f), N = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(p.F)(s, e);
					if (Object(g.i)(s, {
							subredditId: i
						})) return Object(g.e)(s, {
						subredditId: i
					});
					t(E({
						subredditId: i
					}));
					const a = await Object(d.i)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: o
					} = a.body.data;
					if (!o.predictionTournaments) return [];
					const l = o.predictionTournaments.map(e => {
							var t, r;
							const n = null !== (r = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(c.e)(e),
									r = t.pollData;
								return {
									...t,
									pollData: r
								}
							})) && void 0 !== r ? r : [];
							return {
								...e,
								predictionPosts: n
							}
						}),
						u = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(I({
						subredditId: i,
						tournaments: l
					})), t(C({
						posts: u,
						meta: s.meta
					})), l
				}, S = Object(o.a)(f.a), P = Object(o.a)(f.i), T = Object(o.a)(f.j), L = ({
					subredditId: e
				}) => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(h.b)(s),
						a = Object(u.a)(s);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(d.c)(n(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? l.a.Coins : l.a.Tokens
						}),
						{
							createPredictionTournament: c
						} = o.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: m
					} = c;
					return t(I({
						subredditId: e,
						tournaments: [m]
					})), m
				}, F = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					var a;
					const o = Object(h.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(d.b)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${s.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						{
							addPredictionDrafts: l
						} = c.body.data;
					if (null === (a = l.errors) || void 0 === a ? void 0 : a.length) throw new Error(l.errors[0].message);
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to create prediction");
					return l.tournament
				}, M = Object(o.a)(f.l), R = (e, t, r) => async (n, s, {
					gqlContext: i
				}) => {
					const a = await Object(d.k)(i(), {
							tournamentId: e,
							name: r
						}),
						{
							updatePredictionTournament: o
						} = a.body.data;
					if (!o.tournament) throw new Error("Failed to update prediction name");
					return n(M({
						subredditId: t,
						tournament: o.tournament
					})), o.tournament
				}, D = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(d.d)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return r(M({
						subredditId: t,
						tournament: a.tournament
					})), a.tournament
				}, B = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(d.e)(n(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = s.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, A = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(d.g)(n(), {
						tournamentId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = s.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, W = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: r,
					pollId: n,
					postId: s,
					subredditId: i
				}) => async a => {
					const o = await a(k({
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					}));
					return a(w({
						postId: s,
						predictionId: n,
						selectedOptionId: t,
						subredditId: i
					})), o
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
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
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
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
					} = this.state, i = r ? a.a.createElement(m, {
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
						"data-before-content": n.fbt._("advertisement", null, {
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
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/lib/classNames/index.ts"),
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
				j = d.a.span("HeaderText", h.a),
				O = d.a.wrapped(i.a, "HeaderUrl", h.a),
				_ = d.a.span("Container", h.a),
				k = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
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
					const u = !!i && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						k = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						y = `${4+k}px`;
					return s.a.createElement(_, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(O, {
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
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(f, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: y,
							width: y
						}
					}) : s.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: y,
							width: y
						}
					})), s.a.createElement(j, {
						style: {
							paddingTop: 32 === k ? "4px" : "14px"
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
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(s.forwardRef)((function({
					className: e,
					progress: t
				}, r) {
					const n = 100 * t;
					return i.a.createElement("div", {
						className: Object(a.a)(c.a.barRow, e),
						ref: r
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${n}%`
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
					const [r, a] = Object(s.useState)(!1), o = r ? t : 0;
					return i.a.createElement(n.a, {
						onChange: e => {
							r || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
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
				return b
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/helpers/trackers/powerups.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				p = r.n(m);
			const b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(a.a)(p.a.userIconContainer, e.iconClassName)
			}, i.a.createElement(d.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: p.a.userIcon,
				isNSFW: e.isNsfw
			})), i.a.createElement("h4", {
				className: Object(a.a)(p.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(u.a)(),
					{
						className: s,
						supporter: d
					} = e,
					{
						score: m,
						supporterInfo: h
					} = d,
					g = (null == h ? void 0 : h.displayName) || n.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [n.fbt._plural(m)], {
						hk: "8kyEI"
					}).toString(),
					f = !!(null === (t = null == h ? void 0 : h.profile) || void 0 === t ? void 0 : t.isNsfw),
					x = Object(o.b)(h),
					v = Object(o.a)(m),
					w = i.a.createElement(b, {
						userName: g,
						isNsfw: f,
						iconUrl: x
					});
				return i.a.createElement("div", {
					className: Object(a.a)(s, p.a.container)
				}, h ? i.a.createElement(c.a, {
					className: p.a.user,
					to: `/user/${g}/`,
					onClick: () => {
						h && r(Object(l.r)(h.id, h.displayName))
					}
				}, w) : i.a.createElement("div", {
					className: p.a.user
				}, w), i.a.createElement("div", {
					className: p.a.counter
				}, i.a.createElement(v, {
					className: p.a.powerupIcon
				}), m))
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
				i = r.n(s),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
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
						onShowFullSupportersList: r
					} = this.props, s = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
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
					}))))))), s && i.a.createElement(o.q, {
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
			t.a = i.a.memo(w)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/config.ts"),
				s = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				i = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const o = 2,
				d = 5;

			function c(e) {
				return e >= d ? a.a : e >= o ? i.a : s.a
			}

			function l(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				l = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				v = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				w = r.n(v);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: n,
					count: s,
					tiersInfo: a
				} = r, o = (a[n] || a[n - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: w.a.titleRow
				}, i.a.createElement("span", null, j._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(x.b, {
					progress: d
				}))
			};
			var _ = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				k = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				y = r.n(k);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(a.d)(),
					x = Object(b.a)(),
					v = Object(a.e)(f.j),
					w = Object(a.e)(e => Object(h.i)(e, {
						subredditId: t
					})),
					j = Object(a.e)(e => Object(g.U)(e, {
						subredditId: t
					})),
					k = Object(a.e)(e => Object(h.l)(e, {
						subredditId: t
					})),
					I = Object(a.e)(h.u),
					C = Object(a.e)(e => !!Object(h.j)(e, {
						subredditId: t
					})),
					N = Object(a.e)(e => Object(h.s)(e, {
						subredditId: t
					})),
					S = C || N;
				Object(s.useEffect)(() => {
					w && r(Object(o.a)(t))
				}, [w, t, r]);
				if (!w || 1 === w.tiersInfo.length || !j) return null;
				const P = !!(null == I ? void 0 : I.freeCount),
					T = C ? E._("Powerups are unlocked in", null, {
						hk: "fquP8"
					}) : E._("Powerup to unlock perks for", null, {
						hk: "3kTNGL"
					});
				return i.a.createElement(l.a, null, i.a.createElement(u.a, {
					className: e,
					title: E._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: y.a.container
				}, i.a.createElement("div", {
					className: y.a.titleGroup
				}, i.a.createElement("div", {
					className: y.a.powerupsIcon
				}, i.a.createElement("img", {
					className: y.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerup.png`
				})), i.a.createElement("h2", {
					className: y.a.title
				}, T, " ", j.displayText), i.a.createElement(m.q, {
					priority: m.b.Primary,
					className: y.a.button,
					onClick: () => {
						x(Object(p.l)()), r(Object(d.f)("powerups_sidebar"))
					},
					isFullWidth: !0
				}, P && !S ? E._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : E._("Become a Hero", null, {
					hk: "3IZNw3"
				}))), i.a.createElement("div", {
					className: y.a.group
				}, i.a.createElement("h3", {
					className: y.a.subTitle
				}, E._("Community heroes", null, {
					hk: "1hGdba"
				})), i.a.createElement(O, {
					className: y.a.progress,
					powerups: w
				}), !!(null == k ? void 0 : k.length) && i.a.createElement(_.a, {
					supporters: k,
					className: y.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						x(Object(p.n)()), r(Object(d.g)(t))
					}
				}), !(null == k ? void 0 : k.length) && i.a.createElement("div", {
					className: y.a.becomeFirstHero
				}, i.a.createElement(c.a, {
					displayName: E._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == v ? void 0 : v.displayName,
					isNsfw: !!(null == v ? void 0 : v.isNSFW),
					iconUrl: null == v ? void 0 : v.accountIcon,
					textClassName: y.a.becomeFirstHeroLabel
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
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
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
			const j = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				O = Object(c.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, s, n)]
					}
				}),
				_ = Object(d.b)(O),
				k = w.a.wrapped(b.a, "ThemedWidget", v.a),
				y = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.F)(e.media) && e.media.content)),
				E = [{
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
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, r))
					}
					render() {
						const e = i()(0, E.length - 1),
							{
								img: t,
								href: r
							} = E[e],
							{
								className: n,
								placement: s,
								redditStyle: a
							} = this.props;
						return o.a.createElement(k, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function C({
				className: e,
				post: t,
				placementIndex: r,
				refreshKey: n,
				listingName: s,
				placement: i,
				redditStyle: a,
				awaitingBrandSafetyCheck: d,
				forceHouseAd: c,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				return d || !y(t) && !c ? null : o.a.createElement(u, null, c ? o.a.createElement(I, {
					className: e,
					redditStyle: a,
					placement: i
				}) : o.a.createElement(j, {
					post: t,
					refreshKey: n,
					listingName: s,
					placement: i,
					placementIndex: r
				}))
			}
			t.a = _(C)
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
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/reddit/actions/subreddit.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = r("./src/reddit/components/SubredditNav/index.m.less"),
				g = r.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, r) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: r
				}),
				v = ({
					children: e,
					isActive: t,
					isTopBannerVariant: r,
					...n
				}) => s.a.createElement("div", f({
					className: x(g.a.subNavTitle, t, r)
				}, n), s.a.createElement("span", null, e), s.a.createElement(b.b, {
					className: g.a.navDropdownIcon
				})),
				w = ({
					className: e,
					isActive: t,
					to: r,
					isTopBannerVariant: n,
					...i
				}) => {
					const a = x(g.a.navLink, t, n);
					return r ? s.a.createElement(m.a, f({
						className: a,
						to: r
					}, i)) : s.a.createElement("a", f({
						className: a
					}, i))
				},
				j = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement(m.a, f({
					className: Object(p.a)(x(g.a.navLink, t), e)
				}, r)),
				O = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement("a", f({
					className: x(g.a.subNavLink, t)
				}, r)),
				_ = ({
					className: e,
					...t
				}) => s.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavContainer, e)
				}, t)),
				k = ({
					className: e,
					isOpen: t,
					...r
				}) => s.a.createElement("div", f({
					className: Object(p.a)(g.a.subNavList, e, {
						[g.a.mIsOpen]: t
					})
				}, r)),
				{
					fbt: y
				} = r("./node_modules/fbt/lib/FbtPublic.js");
			const E = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var I = Object(d.t)()(Object(i.b)(E, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: r
					} = e;
					return r ? s.a.createElement(j, {
						className: g.a.metaNavLink,
						to: r.url,
						isActive: e.isActive,
						onClick: r => {
							Object(d.E)(t) && r.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, y._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				C = r("./src/lib/linkMatchers/index.ts");
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
					return s.a.createElement(_, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var S = N;
			const P = e => {
				const t = e.url && Object(C.h)(C.f, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? s.a.createElement(w, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(S, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(O, {
					key: `${e.text}-${P(e)}`,
					role: "listitem",
					href: P(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				L = r("./src/reddit/actions/economics/predictions/index.ts"),
				F = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				M = r("./src/reddit/helpers/trackers/predictions.ts"),
				R = r("./src/reddit/hooks/usePageLayer.ts"),
				D = r("./src/reddit/hooks/useTracking.ts"),
				B = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				A = r("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function H({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					r = Object(R.a)(),
					a = Object(D.a)(),
					o = Object(F.L)(r),
					[d, c] = Object(n.useState)(!1),
					l = Object(i.e)(t => Object(A.U)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(A.O)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(B.c)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(B.b)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					o && a(Object(M.x)())
				}, [o, a]), Object(n.useEffect)(() => {
					(async () => {
						u && !d && (t(Object(L.g)(l.name)), c(!0))
					})()
				}, [u, d, t, l.name]), u && m ? s.a.createElement(j, {
					className: g.a.predictionsFilter,
					isActive: o,
					onClick: () => a(Object(M.h)()),
					to: `${l.url}predictions/`
				}, W._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: g.a.liveIcon
				}, W._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var G = r("./src/lib/constants/index.ts");
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const V = Object(d.t)(),
				U = [G.Jb.SUBREDDIT, G.Jb.COMMENTS, G.Jb.COLLECTION_COMMENTS],
				q = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && U.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var J = V(Object(i.b)(q, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: n,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = n && !r && !i;
					return s.a.createElement(w, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, z._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Z = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = r("./src/higherOrderComponents/makeAsync.tsx");
			var K = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				Y = r("./src/reddit/constants/postLayout.ts"),
				$ = r("./src/reddit/constants/screenWidths.ts"),
				X = r("./src/reddit/models/Theme/index.ts"),
				ee = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const te = Object(Z.a)(({
				className: e,
				children: t,
				isTopBannerVariant: r,
				...n
			}) => {
				const i = Object(ee.a)(n);
				return s.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(X.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var re = e => s.a.createElement(te, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === Y.g.Large ? `${e.maxWidth||$.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement(K, null))),
				ne = r("./src/reddit/constants/wiki.ts"),
				se = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ae = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === G.Jb.SUBREDDIT_WIKI, a = `wiki/${ne.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(w, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(se.g)())
				}, ie._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const oe = Object(c.a)("spPolls", I),
				de = Object(d.t)(),
				ce = Object(a.c)({
					layout: d.O,
					widget: l.f
				}),
				le = Object(i.b)(ce);
			t.a = de(le(Object(o.c)(e => s.a.createElement(re, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(J, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(oe, {
				subredditId: e.subredditId
			}), s.a.createElement(H, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(ae, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(T, {
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
				j = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				_ = r.n(O);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 129,
				E = Object(h.t)({
					filterName: e => Object(h.T)(e)[b.g],
					url: e => Object(h.Y)(e)
				}),
				I = Object(o.c)({
					subredditId: (e, t) => Object(j.F)(e, t.subredditName)
				}),
				C = Object(a.b)(I),
				N = l.a.div("WidgetContent", _.a),
				S = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: r,
					...n
				}) => i.a.createElement("li", {
					className: Object(d.a)(_.a.StyledFlair, e === w.d.Cloud && _.a.cloudDisplay, {
						[_.a.flairFilter]: t,
						[_.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: r
				}, i.a.createElement(u.b, k({}, n, {
					className: _.a.Flair,
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
						e && e > y && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(g.o, {
						className: _.a.flairFilterButton,
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
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(S, {
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
					} = this.state, r = t ? y : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: _.a.flairFilterContainer,
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
					return i.a.createElement("ul", null, i.a.createElement(S, {
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
					} = this.state, n = t.order, s = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > n.length || r && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = E(C(Object(m.c)(P)))
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
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/index.tsx"),
				u = r("./src/reddit/helpers/dom/index.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = r("./src/reddit/models/Widgets/index.ts"),
				h = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = r.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				v = d.a.div("RuleTitle", g.a),
				w = d.a.div("RuleDescription", g.a),
				j = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				O = {};
			class _ extends i.a.Component {
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
						onClick: r,
						shouldShowFullDisplay: n
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!s;
					return i.a.createElement(f, {
						className: Object(o.a)({
							[g.a.pointerCursor]: a
						}),
						onClick: n(e) || !s ? void 0 : r
					}, i.a.createElement(p.a, null, i.a.createElement(x, null, `${e.humanIndex}.`), i.a.createElement(v, null, `${e.rule.shortName}`), i.a.createElement("div", null, !n(e) && s && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(w, null, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: O
					}) : e.rule.descriptionHtml ? i.a.createElement(j, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const k = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return i.a.createElement(_, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(k, {
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
				return Re
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
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
				j = r.n(w);
			const O = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: n,
							fillColor: s,
							textColor: i
						} = e;
						return t && (n = i = r, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${i||n}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === g.f.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = r, n = "transparent"), s = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...n,
						...s
					}
				},
				_ = e => e.kind === g.f.Image ? j.a.imageButton : j.a.textButton,
				k = e => {
					const t = Object(g.n)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				y = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(h.a)(e).button;
					return s.a.createElement(c.q, {
						className: _(t),
						style: O(t, r, n),
						isFullWidth: !0,
						size: c.c.S,
						priority: c.b.Secondary
					}, t.kind === g.f.Text && s.a.createElement("span", {
						className: t.hoverState ? j.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && s.a.createElement("span", {
						className: j.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				E = e => s.a.createElement(l.b, {
					href: k(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, s.a.createElement(y, e)),
				I = m.a.wrapped(o.a, "RawHTMLDisplay", j.a);
			var C = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.W
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(E, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = r("./node_modules/fbt/lib/FbtPublic.js"),
				S = r("./src/lib/humanizeDate/index.ts"),
				P = r("./src/reddit/controls/TextButton/index.tsx"),
				T = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = r.n(T);
			const F = 100,
				M = {
					isExpanded: !1
				},
				R = m.a.wrapped(o.a, "RawHTMLDisplay", L.a),
				D = m.a.div("EventContainer", L.a),
				B = m.a.div("EventTitle", L.a),
				A = m.a.div("EventDate", L.a),
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
				}, e.widget.data.map((t, r) => s.a.createElement(D, {
					key: `${r}-${t.title}`
				}, s.a.createElement(B, null, t.titleHtml ? s.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(A, null, Object(S.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(z, {
					text: t.description
				})))),
				U = r("./src/reddit/components/TrackingHelper/index.tsx"),
				q = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
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
				K = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
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
				X = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = r.n(X);
			var te = m.a.div("ImageFrame", ee.a),
				re = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = r.n(re);
			var se = m.a.img("StyledImage", ne.a);
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
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl
					}, n) : n
				}
			}
			var ae = ie,
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
				Oe = e => s.a.createElement(ve, null, `u/${e}`),
				_e = m.a.wrapped(ue.a, "InternalLink", ge.a),
				ke = m.a.div("LinkContainer", ge.a),
				ye = Object(a.c)({
					userIsBanned: be.eb,
					userIsLoggedIn: x.K
				});
			var Ee = Object(i.b)(ye)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: N.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.q, {
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
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(xe, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, Oe(e.name)))(e), s.a.createElement(we, {
						flair: je(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(ke, null, s.a.createElement(_e, {
						to: `/r/${t}/about/moderators/`
					}, N.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !i ? s.a.createElement("div", {
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
				Ie = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ce = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ne = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = r.n(Ne);
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
				Fe = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => s.a.createElement(Fe.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
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
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "g", (function() {
				return E
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				a = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				o = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				d = r("./src/redditGQL/operations/GetPredictionCoinPackages.json"),
				c = r("./src/redditGQL/operations/GetPredictionToken.json"),
				l = r("./src/redditGQL/operations/GetTournaments.json"),
				u = r("./src/redditGQL/operations/ResolvePrediction.json"),
				m = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				p = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				b = r("./src/redditGQL/operations/VotePrediction.json");
			const h = (e, t, r) => Object(n.a)(e, {
					...d,
					variables: {
						subredditName: t,
						includeFreePackage: r
					}
				}),
				g = (e, {
					postId: t,
					optionId: r,
					coinPackageId: s,
					price: i
				}) => Object(n.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: s,
							price: i
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: r
				}) => Object(n.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: r
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const v = (e, {
					subredditId: t,
					period: r,
					top: s,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(n.a)(e, {
					...m,
					variables: {
						subredditId: t,
						period: r,
						top: s,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				j = (e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}),
				O = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(n.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				E = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				})
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
			r.d(t, "p", (function() {
				return i
			})), r.d(t, "q", (function() {
				return a
			})), r.d(t, "r", (function() {
				return o
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "t", (function() {
				return c
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "s", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "k", (function() {
				return f
			})), r.d(t, "x", (function() {
				return x
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "w", (function() {
				return w
			})), r.d(t, "u", (function() {
				return j
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "f", (function() {
				return C
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = "poll",
				i = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "select",
					noun: "poll_option"
				}),
				a = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "select",
					noun: "prediction_option"
				}),
				o = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "view",
					noun: "predict_info_modal"
				}),
				d = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "close",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => i => ({
					...Object(n.defaults)(i),
					source: s,
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(i, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: s,
					action: "confirm",
					noun: "predict",
					poll: Object(n.poll)(r, e, !1, void 0, void 0, t)
				}),
				m = ({
					pollId: e,
					selectedNumberCoins: t,
					selectedNumberTokens: r
				}) => i => ({
					...Object(n.defaults)(i),
					source: s,
					action: "close",
					noun: "prediction_modal",
					poll: Object(n.poll)(i, e, !1, t, r)
				}),
				p = e => ({
					...Object(n.defaults)(e),
					source: s,
					action: "click",
					noun: "add_coins"
				}),
				b = e => t => ({
					...Object(n.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				h = ({
					targetUserId: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				g = ({
					numberPredictionTokens: e,
					pollId: t
				}) => r => ({
					...Object(n.defaults)(r),
					source: s,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(n.poll)(r, t, !1, void 0, void 0, e)
				}),
				f = ({
					pageType: e
				}) => t => ({
					...Object(n.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				x = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				v = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				w = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				j = () => e => ({
					...Object(n.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				O = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(n.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				y = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				E = () => e => ({
					...Object(n.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				I = () => e => ({
					...Object(n.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				C = e => t => ({
					...Object(n.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "play_tournament",
					poll: Object(n.predictionTournamentPoll)(t, e),
					post: Object(n.post)(t, e),
					predictions: Object(n.predictions)(t, e),
					subreddit: Object(n.subreddit)(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return a
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
				return j
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "o", (function() {
				return y
			}));
			var n = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
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
				O = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				_ = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				k = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				y = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: _[e]
					})
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.Z
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				o = r.n(a);

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
				className: Object(i.a)(o.a.dropdown, {
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
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.O)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.Q
				}) === n.ib.Treatment
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const a = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							s = n.options.map(e => ({
								text: e.text
							})),
							a = {};
						return r.document ? a.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (a.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: a,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"84c24426ab00"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"b8bc80c247a6"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"160c1d2839c1"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"3785e4a718f5"}')
		},
		"./src/redditGQL/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"d2575383d168"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"aeb2b0e42e97"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.b4864fa136dee0d8920f.js.map