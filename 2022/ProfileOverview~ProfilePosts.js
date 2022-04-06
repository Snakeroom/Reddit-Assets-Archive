// https://www.redditstatic.com/desktop2x/ProfileOverview~ProfilePosts.62caefb1ebcb1fa96e09.js
// Retrieved at 4/6/2022, 6:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview~ProfilePosts", "reddit-components-ContentGate"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(i);
			t.a = s.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: s
					} = e;
				return o.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!s
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const a = Object(o.e)(e),
					s = encodeURIComponent(`${t}${a}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${s}`
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return v
			}));
			var r, o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/performanceTimings/index.tsx"),
				s = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var l, d = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(l || (l = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(o.a)(s.g),
				f = Object(o.a)(s.e),
				_ = Object(o.a)(s.h),
				g = Object(o.a)(s.c),
				w = Object(o.a)(s.f),
				S = Object(o.a)(s.j),
				k = Object(o.a)(s.i),
				y = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const a = t(),
						s = Object(m.e)(a),
						l = Object(m.d)(a),
						p = Object(b.O)(a);
					if (s || !l) return;
					e(_());
					let w = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (x(t)) {
								if (E(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), w = !0
								} else if (O(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: o,
											category: a
										} = n.focusRecommendations[0],
										s = [r, o],
										i = Object(u.d)(s),
										c = Object(d.b)(s),
										l = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [o.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: l,
											category: a,
											lastLoadedEnv: "client"
										};
									e(h(m)), w = !0
								}
							} else w = !1
						}
					} catch (S) {
						w = !1
					}
					w || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !E(e) && r === l.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, v = () => async (e, t, n) => {
					var r, o;
					const s = t(),
						i = Object(m.g)(s);
					if (Object(m.f)(s) || null === i || "client" === i) {
						const n = null === (o = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							i = Object(b.P)(s);
						return Object(a.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(w({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				_ = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				w = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				S = n("./src/reddit/components/TextWithLinks/index.tsx"),
				k = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/chat/controls/Svg/index.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = e => a.a.createElement(E.a, O({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				C = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/user.ts");
			var T = n("./src/reddit/selectors/meta.ts"),
				P = n("./src/reddit/components/ContentGate/index.m.less"),
				D = n.n(P);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = d.a.wrapped(v, "PrivateKey", D.a), A = d.a.div("ButtonsContainer", D.a), B = d.a.div("Container", D.a), W = d.a.div("ContainerExp", D.a), F = d.a.div("Description", D.a), U = d.a.div("PrivateSubredditDetails", D.a), q = d.a.div("PrivateSubredditDescription", D.a), H = d.a.h3("PrivateSubredditName", D.a), G = d.a.a("Link", D.a), M = d.a.wrapped(x.n, "LinkRouterButton", D.a), z = d.a.wrapped(x.m, "LinkButton", D.a), V = d.a.wrapped(x.q, "SecondaryLinkRouterButton", D.a), Y = d.a.wrapped(x.p, "SecondaryLinkButton", D.a), K = d.a.wrapped(M, "GoHomeLinkButton", D.a), Z = d.a.wrapped(h.a, "CreateCommunityButton", D.a), J = d.a.img("Image", D.a), Q = d.a.img("ImagePlaceholder", D.a), X = d.a.wrapped(M, "LeftLinkRouterButton", D.a), $ = d.a.wrapped(z, "LeftLinkButton", D.a), ee = d.a.wrapped(Y, "SecondaryLeftLinkButton", D.a), te = d.a.wrapped(V, "SecondaryLeftLinkRouterButton", D.a), ne = d.a.h3("Title", D.a), re = d.a.div("PageBody", D.a), oe = d.a.div("InterstitialMessageWrapper", D.a), ae = Object(l.c)({
				isLoggedIn: L.O,
				origin: T.j,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.P)(e)) return !1;
					const t = Object(N.d)(e);
					if (!t) return !1;
					const n = Object(L.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const o = 30 * j.B;
					return r > Date.now() - o
				})(e),
				isSeo: T.g
			}), se = Object(y.u)(), ie = Object(s.b)(ae, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: o,
					continueToGatedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: d,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: x,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: v,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: L,
					subredditDescription: T,
					subredditName: P,
					user: B
				} = e, W = async () => {
					if (i ? await L() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(k.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case C.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(ne, null, I._("r/{community name} is a Reddit Premium community", [I._param("community name", P)], {
							hk: "2lyDwB"
						})), a.a.createElement(F, null, I._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(A, null, B ? a.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, I._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement($, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), B ? a.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Y, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case C.a.Nsfw:
					case C.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(ne, null, n === C.a.Nsfw ? I._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : I._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(F, null, I._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(A, null, a.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Y, {
							onClick: W,
							redditStyle: !0
						}, I._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case C.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(R, null), a.a.createElement(ne, null, "r/", P, " ", I._("is a private community", null, {
							hk: "7zZmq"
						})), T && T.length && a.a.createElement(U, null, a.a.createElement(H, null, "r/", P), a.a.createElement(q, null, a.a.createElement("div", null, T))), a.a.createElement(F, null, I._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", I._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), I._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(A, null, B ? a.a.createElement(a.a.Fragment, null, !c && a.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: D.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), a.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, I._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && a.a.createElement(w.a, {
							subredditName: P
						}));
					case C.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(F, null, I._("This community is {=quarantined}", [I._param("=quarantined", a.a.createElement(G, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, I._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(oe, null, O ? a.a.createElement(g.a, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? a.a.createElement(_.a, {
							html: E
						}) : x || I._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), I._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(A, null, a.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(z, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, I._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(A, null, a.a.createElement(X, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Y, {
								onClick: t,
								redditStyle: !0
							}, I._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(B, o, y)));
					case C.a.GatedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), a.a.createElement(F, null, a.a.createElement(oe, null, N ? a.a.createElement(g.a, {
							content: N,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? a.a.createElement(_.a, {
							html: j
						}) : v), I._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), a.a.createElement(A, null, a.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("No Thank You", null, {
							hk: "4B26AR"
						})), a.a.createElement(Y, {
							onClick: s,
							redditStyle: !0
						}, I._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case C.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(ne, null, I._("r/{community name} has been banned from Reddit", [I._param("community name", P)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(F, null, e ? a.a.createElement(S.a, {
							linkClassName: D.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : I._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(A, null, a.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(A, null, a.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case C.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Q, null), a.a.createElement(ne, null, I._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(F, null, I._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(A, null, B && a.a.createElement(Z, {
							eventSource: "content_gate"
						}), a.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.ProfileDoesNotExist:
					case C.a.ProfileDeleted:
					case C.a.ProfileSuspended:
					case C.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case C.a.ProfileBlockedForLegalReason:
									return I._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case C.a.ProfileDeleted:
									return I._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case C.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, I._("This account has been {=suspended} .", [I._param("=suspended", a.a.createElement(G, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, I._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case C.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(ne, null, I._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(F, null, I._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(A, null, a.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, I._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(A, null, a.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case C.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(J, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(A, null, a.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = se(ie(Object(i.i)(e => {
				const t = Object(o.useContext)(c.a) ? W : B;
				return a.a.createElement(t, null, a.a.createElement("div", {
					"data-testid": "content-gate"
				}, a.a.createElement(re, null, ce(e))), a.a.createElement(f.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(r.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const w = "create-community-button",
				S = g.a.wrapped(d.c, "StyledTooltip", _.a),
				k = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ob)(e),
					userIsSuspended: h.W
				});
			t.a = Object(s.b)(k, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(l.f)({
						tooltipId: w
					})),
					onHideTooltip: () => e(Object(l.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: o,
					onHideTooltip: s,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: d,
					onClick: u
				} = e;
				return a.a.createElement(p.t, {
					className: t,
					disabled: d || l,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: o,
					onMouseLeave: s,
					priority: p.c.Secondary,
					id: w,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), l ? a.a.createElement(S, {
					caretOnTop: !0,
					tooltipId: w,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? a.a.createElement(S, {
					caretOnTop: !0,
					tooltipId: w,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatorStats/EducationUnit.m.less": function(e, t, n) {
			e.exports = {
				container: "_2EuQaYC2G3KohzPtXm5hCL",
				innerContainer: "_2LsQAqUfogc1w9Ytlefh1M"
			}
		},
		"./src/reddit/components/CreatorStats/EducationUnit.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/CreatorStats/EducationUnit.m.less"),
				i = n.n(s),
				c = n("./src/reddit/components/CreatorStats/Icon.tsx");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(i.a.container, t)
				}, o.a.createElement("div", {
					className: i.a.innerContainer
				}, l._("NEW! Now you can get data and insights on your posts", null, {
					hk: "343rNh"
				}), o.a.createElement(c.a, null)))
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/config.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = s.a.div("FooterContainer", c.a), u = s.a.div("UserAgreement", c.a), m = s.a.a("UserAgreementLink", c.a), p = s.a.a("PrivacyLink", c.a);
			t.a = () => o.a.createElement(d, null, o.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", o.a.createElement(m, {
				href: `${a.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "2srkM2"
			}))), l._param("=Privacy Policy", o.a.createElement(p, {
				href: `${a.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				x = n.n(y);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				C = Object(c.a)(_.a),
				j = {
					[b.d.Card]: function(e) {
						return a.a.createElement(w.a, E({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return a.a.createElement(w.a, E({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return a.a.createElement(w.a, E({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				L = Object(h.u)(),
				T = Object(i.c)({
					dropdownIsOpen: Object(k.b)(v),
					postLayout: h.R,
					redditStyle: h.D
				}),
				P = Object(s.b)(T, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: v
					}))
				}));
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: o
						} = this.props;
						t ? t(e) : (n(e, o), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.Z)(t),
							subreddit: Object(S.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: o
						} = this.props, s = n || b.e[o], i = e === s, c = j[e], d = N[e];
						return a.a.createElement(g.b, E({}, t, {
							className: Object(l.a)(x.a.LayoutItem, {
								[x.a.selected]: i,
								[x.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: x.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: x.a.LayoutItemTextClassName
						}), a.a.createElement(c, {
							className: x.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return a.a.createElement(C, E({}, e, {
							className: x.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: x.a.DropdownRow,
							rowIconClassName: x.a.DropdownRowIcon,
							rowSelectedClassName: x.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, o = t || b.e[r];
					return a.a.createElement("div", {
						className: Object(l.a)(x.a.Container, e),
						id: O
					}, a.a.createElement("div", {
						className: x.a.DropdownContainer,
						onClick: n
					}, this.renderItem(o, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), a.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(P(Object(p.c)(Object(d.a)(D))))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/constants/history.ts"),
				k = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				C = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				D = n("./src/reddit/components/ListingSort/index.m.less"),
				I = n.n(D),
				R = n("./src/lib/lessComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				W = Object(w.a)(R.a.wrapped(x.a, "Dropdown", I.a)),
				F = R.a.wrapped(P.a, "ListingSortIcon", I.a),
				U = (R.a.wrapped(C.b, "DropdownTriangle", I.a), R.a.div("Title", I.a)),
				q = R.a.wrapped(e => o.a.createElement(E.b, A({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", I.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return o.a.createElement("div", A({}, n, {
						className: Object(s.a)(I.a.SortWrapper, n.className, {
							[I.a.isDisabled]: t
						})
					}))
				},
				G = R.a.div("DropdownRowDisabled", I.a),
				M = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				z = Object(f.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: j.a,
					user: T.k,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || B)(e),
					isPopularPage: d.F
				}),
				V = Object(a.b)(z, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(_.h)({
							tooltipId: n || B
						}))
					}
				});
			var Y = R.a.wrapped(M(V(Object(l.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(U, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(H, {
					disabled: e.disabled
				}, e.children || o.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(k.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, o.a.createElement(F, {
					sort: e.sort
				}))), o.a.createElement(y.a.Consumer, null, t => o.a.createElement(W, A({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(G, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, o) => {
					const a = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (n || r) || t && r) && a.unshift(b.W.BEST), t && o && a.splice(3, 0, b.W.AWARDED), a
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(O.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						a = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return o.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(k.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
							},
							search: a
						},
						isSelected: e.sort === t,
						key: t
					}, o.a.createElement(F, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", I.a),
				K = n("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[b.ec.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.ec.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.ec.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.ec.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.ec.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.ec.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.ec.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.ec.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.ec.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.ec.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.ec.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.ec.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.ec.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.ec.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.ec.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.ec.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.ec.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.ec.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.ec.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.ec.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.ec.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.ec.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.ec.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.ec.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.ec.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.ec.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.ec.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.ec.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.ec.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.ec.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.ec.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.ec.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.ec.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.ec.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.ec.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.ec.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.ec.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.ec.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.ec.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.ec.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.ec.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.ec.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.ec.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.ec.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.ec.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.ec.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.ec.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.ec.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.ec.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.ec.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.ec.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.ec.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(x.a, "_Dropdown", X.a),
				te = Object(w.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && oe(e) === b.A.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.ec.AllStates
				},
				oe = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				ae = e => {
					const t = oe(e),
						n = re(e);
					return ne(e) ? `${t}_${n}` : t
				},
				se = Object(d.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(L.b)("StateSort--StateSortPicker")
				}),
				ce = Object(a.b)(ie, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.A.UnitedStates + "_" + n))
					}
				}));
			var le = R.a.wrapped(se(ce(e => {
				const t = `${e.baseUrl}?${K.j}=${b.A.UnitedStates}`;
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(q, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, n => o.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.ec).map(n => {
					const r = b.ec[n];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.ec.AllStates ? t : `${t}_${e}`)(r), ae(r))
					}, o.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Z(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const de = {
				[b.A.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.A.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.A.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.A.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.A.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.A.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.A.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.A.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.A.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.A.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.A.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.A.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.A.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.A.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.A.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.A.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.A.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.A.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.A.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.A.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.A.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.A.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.A.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.A.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.A.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.A.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.A.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.A.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.A.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.A.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.A.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.A.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.A.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.A.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.A.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.A.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(d.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(L.b)(be)
				});
			var _e = he(Object(a.b)(fe, e => ({
					onCloseDropdown: t => e(Object(_.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(_.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[S.b.FeedLoadReason]: S.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = oe(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${K.j}=`;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(s.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, o.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(q, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), o.a.createElement(y.a.Consumer, null, n => o.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(n => {
						const a = b.A[n];
						return o.a.createElement("div", {
							key: a,
							onClick: () => e.onClickLink(`${r}${ae(a)}`, a)
						}, o.a.createElement(E.b, {
							className: Object(s.a)(e.rowClassName, t === a ? e.rowSelectedClassName : void 0),
							displayText: de[a](),
							isSelected: t === a
						}))
					})))), t === b.A.UnitedStates && o.a.createElement(le, {
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
				ge = n("./node_modules/path-browserify/index.js"),
				we = n.n(ge),
				Se = n("./src/reddit/components/TimeSort/index.m.less"),
				ke = n.n(Se);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(w.a)(x.a),
				Ee = R.a.div("ListingSortContainer", ke.a),
				Oe = Object(d.u)(),
				ve = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Ce = Oe(Object(a.b)(ve, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(l.c)(e => o.a.createElement(Ee, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(k.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(y.a.Consumer, null, t => o.a.createElement(xe, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.hc.HOUR, b.hc.DAY, b.hc.WEEK, b.hc.MONTH, b.hc.YEAR, b.hc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = we.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[K.E]: t
						}),
						a = r.split("?")[0],
						i = `${r.replace(a+"?","")}`;
					return o.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(k.b)(t),
						href: {
							pathname: a,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				Te = n("./src/reddit/selectors/meta.ts"),
				Pe = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = n.n(Pe);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				Ae = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				Be = new Set([b.W.CONTROVERSIAL]),
				We = "ListingSort--Overflow",
				Fe = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, T.k, d.F, N.a, Te.i, (e, t, n, r, o, a, s) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e,
						locale: s
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (r || n) || o && n) && i.unshift(b.W.BEST), o && a && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: o,
						sortOptions: i,
						locale: s
					}
				});
			class qe extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, a = r ? Object(p.a)(n, {
							sort: e
						}) : Object(O.a)(n, `${e}/`), i = a.split("?")[0], c = r ? a.replace(i + "?", "") : void 0;
						return o.a.createElement(Ne.t, {
							className: Object(s.a)(De.a.SortLink, e === t && De.a.selected),
							kind: Ne.b.InternalLink,
							priority: Ne.c.Plain,
							Icon: n => o.a.createElement(F, Ie({}, n, {
								className: Object(s.a)(De.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(k.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[S.b.FeedLoadReason]: S.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: a
						} = this.props, s = r && !!n && e === b.W.HOT && a === b.W.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, this.renderSortButton(e), s && o.a.createElement(_e, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: De.a.DropdownButton,
							className: De.a.CountrySort,
							disabled: t,
							dropdownClassName: De.a.Dropdown,
							rowClassName: De.a.DropdownRow,
							rowSelectedClassName: De.a.DropdownRowSelected,
							wrapperClassName: De.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: De.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.W.TOP, b.W.NEW]);
					return Be.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Ae.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: a,
						timeSort: i
					} = this.props, c = !t && Re.has(r), l = Ae.has(r), d = a.filter(e => !this.isOverflowSort(e)), u = a.filter(e => this.isOverflowSort(e) && e !== r);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Y, Ie({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(s.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(s.a)(De.a.SortButtons, e)
					}, d.map(this.renderSort)), l && this.renderSort(r), c && o.a.createElement(Ce, {
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: i || b.ic,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && o.a.createElement(Y, Ie({}, this.props, {
						className: Object(s.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: We,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), o.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: We
					}, o.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Fe(Object(a.b)(Ue)(Object(l.c)(qe))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Me = n.n(Ge);
			const ze = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ve = Object(a.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const o = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.J)(n, o))
							}
						}
					}
				});
			class Ye extends o.a.Component {
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
						disabled: r = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: c,
						subredditId: l,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return o.a.createElement("div", {
						className: Object(s.a)(Me.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: d
					}), !a && o.a.createElement(m.a, {
						className: Me.a.LayoutSwitch,
						subredditId: l
					}))
				}
			}
			t.a = ze(Ve(Object(l.c)(Ye)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			const d = {
				[s.W.BEST]: "best",
				[s.W.HOT]: "hot",
				[s.W.NEW]: "new",
				[s.W.CONTROVERSIAL]: "controversial",
				[s.W.TOP]: "top",
				[s.W.RISING]: "rising",
				[s.W.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: r
				} = e;
				return d[r] ? o.a.createElement(i.a, {
					name: d[r],
					isFilled: n,
					className: Object(a.a)(t, l.a.iconStyles)
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
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(s.e)(i.e),
						n = Object(s.e)(i.a);
					return t || n ? a.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Footer/index.tsx"),
				d = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = n.n(d),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var w = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const S = `${i.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				k = `${i.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				y = {
					d2x_nsfw_signup_blocking_de_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				x = e => {
					const t = Object(a.d)(),
						n = Object(b.b)();
					return o.a.createElement("div", {
						className: Object(c.a)(u.a.mainCta)
					}, o.a.createElement("img", {
						src: S
					}), o.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), o.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: u.a.buttonContainer
					}, o.a.createElement(f.j, {
						className: Object(c.a)(u.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(_.o)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(f.j, {
						className: u.a.cancel,
						onClick: () => {
							n((() => e => ({
								...Object(_.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), t(Object(s.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				E = e => o.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, o.a.createElement("div", {
					className: u.a.qrCodeInner
				}, o.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), o.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), o.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), o.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: k
				}))),
				O = e => {
					const t = Object(b.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(_.o)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(a.e)(w.b) === h.hc.Enabled ? y.d2x_nsfw_signup_blocking_de_v1 : y.d2x_nsfw_signup_blocking_non_us_v1;
					return o.a.createElement("div", {
						className: u.a.container
					}, o.a.createElement(x, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: u.a.footerWrapper
					}, o.a.createElement(l.a, null)), o.a.createElement(E, {
						qrCodeAsset: r
					}))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				l = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				_ = n("./src/reddit/featureFlags/index.ts"),
				g = n("./src/reddit/selectors/experiments/survey.ts"),
				w = n("./src/reddit/selectors/listings.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/tracking.ts");

			function x() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const E = x(),
				O = {
					apiError: w.c,
					apiPending: w.d,
					measureScrollFPS: _.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: w.g,
					postsById: S.S,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o
						} = t;
						return Object(S.D)(e, n, r, o)
					}),
					subredditsById: k.Z,
					viewportDataLoaded: y.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.e
				},
				v = Object(o.c)(O),
				C = e => ({
					onBottomViewed: (t, n) => e(d.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(s.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(l.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(l.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, o) => {
						e(l.O(t, r, o))
					},
					trackOnPostExitedViewport: (t, n, r, o, a) => {
						e(l.P(t, r, o, a))
					},
					showModalOnScroll: () => e(l.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				j = e => Object(b.b)({
					...e
				}),
				N = (e, t, n, r) => {
					const {
						listingKey: o,
						hostPostData: a,
						listingBelowVariant: s
					} = r;
					return Object(h.h)(e, t, "post", o, a, s, void 0)
				},
				L = Object(r.b)(v, C, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: j,
					postClickEventFactory: N
				}));
			t.a = e => Object(m.c)(E(L(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const a = {
					[o.W.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[o.W.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[o.W.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[o.W.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[o.W.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[o.W.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[o.W.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				s = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[o.hc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.hc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.hc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[o.hc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[o.hc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[o.hc.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = o.a.createContext({})
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
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return o.a.createElement("svg", c({
					className: Object(a.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(i);
			const l = e => {
					let {
						message: t
					} = e;
					return a.a.createElement("div", {
						className: c.a.container
					}, a.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), a.a.createElement(s.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return a.a.createElement("div", {
						className: c.a.container
					}, a.a.createElement("h3", {
						className: c.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), a.a.createElement(s.n, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(s.g, s.d, i.e, (e, t, n) => !e && !t && !n);

			function l(e, t) {
				return n => Object(a.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					expEventOverride: t
				})
			}
			const d = l(o.Nb, !0),
				u = l(o.Nb, !1),
				m = l(o.Ob, !0),
				p = (l(o.Ob, !1), Object(r.a)(d, m, (e, t) => e === o.hc.Enabled || t === o.ic.Enabled))
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "d", (function() {
				return k
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				s = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(s.S)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				l = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(s.W)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(s.S)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, o) => {
					const s = o.find(e => e <= t) || -1,
						i = o.find(e => e > t) || 1 / 0;
					return t !== i && t !== s && (!(s + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							o = n[t],
							s = o && Object(a.G)(e, {
								postId: r
							}) || null,
							i = o && Object(a.G)(e, {
								postId: o
							}) || null;
						return s && s.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				h = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const o = n.slice().sort();
					let s = -1;
					const i = Object(a.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let n = s + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, o);) n += 1;
							n < i.length && (c.push(n), s = n)
						}
					}), c
				}),
				_ = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				w = e => e.focusedVerticals.category,
				S = e => e.focusedVerticals.lastLoadedEnv,
				k = e => {
					const t = Object(i.O)(e),
						n = o.d.geoSubredditRecommendationDULoggedIn(e),
						r = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"9bf5e276ac63"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview~ProfilePosts.62caefb1ebcb1fa96e09.js.map