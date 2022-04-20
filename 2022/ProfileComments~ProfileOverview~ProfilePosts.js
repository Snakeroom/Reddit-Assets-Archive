// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.2d20e8c3fb8fe3a73009.js
// Retrieved at 4/20/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePosts", "reddit-components-ContentGate"], {
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
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				l = n.n(i);
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
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: r,
						[l.a.hover]: !!s
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", l.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(a.e)(e),
					s = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${s}`
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				w = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				k = n("./src/reddit/components/TextWithLinks/index.tsx"),
				S = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/chat/controls/Svg/index.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => o.a.createElement(x.a, v({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				O = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/user.ts");
			var D = n("./src/reddit/selectors/meta.ts"),
				T = n("./src/reddit/components/ContentGate/index.m.less"),
				P = n.n(T);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = d.a.wrapped(C, "PrivateKey", P.a), A = d.a.div("ButtonsContainer", P.a), R = d.a.div("Container", P.a), U = d.a.div("ContainerExp", P.a), F = d.a.div("Description", P.a), H = d.a.div("PrivateSubredditDetails", P.a), q = d.a.div("PrivateSubredditDescription", P.a), W = d.a.h3("PrivateSubredditName", P.a), M = d.a.a("Link", P.a), X = d.a.wrapped(E.n, "LinkRouterButton", P.a), G = d.a.wrapped(E.m, "LinkButton", P.a), z = d.a.wrapped(E.q, "SecondaryLinkRouterButton", P.a), Y = d.a.wrapped(E.p, "SecondaryLinkButton", P.a), K = d.a.wrapped(X, "GoHomeLinkButton", P.a), Z = d.a.wrapped(h.a, "CreateCommunityButton", P.a), V = d.a.img("Image", P.a), J = d.a.img("ImagePlaceholder", P.a), Q = d.a.wrapped(X, "LeftLinkRouterButton", P.a), $ = d.a.wrapped(G, "LeftLinkButton", P.a), ee = d.a.wrapped(Y, "SecondaryLeftLinkButton", P.a), te = d.a.wrapped(z, "SecondaryLeftLinkRouterButton", P.a), ne = d.a.h3("Title", P.a), re = d.a.div("PageBody", P.a), ae = d.a.div("InterstitialMessageWrapper", P.a), oe = Object(c.c)({
				isLoggedIn: L.Q,
				origin: D.j,
				user: L.l,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.R)(e)) return !1;
					const t = Object(N.d)(e);
					if (!t) return !1;
					const n = Object(L.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * j.C;
					return r > Date.now() - a
				})(e),
				isSeo: D.g
			}), se = Object(y.u)(), ie = Object(s.b)(oe, (e, t) => {
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
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					continueToGatedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: d,
					location: p,
					origin: h,
					pageLayer: _,
					quarantineRequiresEmail: y,
					quarantineMessage: E,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: v,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: L,
					subredditDescription: D,
					subredditName: T,
					user: R
				} = e, U = async () => {
					if (i ? await L() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(S.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, I._("r/{community name} is a Reddit Premium community", [I._param("community name", T)], {
							hk: "2lyDwB"
						})), o.a.createElement(F, null, I._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(A, null, R ? o.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, I._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), R ? o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Y, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === O.a.Nsfw ? I._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : I._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(F, null, I._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(A, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, I._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Y, {
							onClick: U,
							redditStyle: !0
						}, I._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(B, null), o.a.createElement(ne, null, "r/", T, " ", I._("is a private community", null, {
							hk: "7zZmq"
						})), D && D.length && o.a.createElement(H, null, o.a.createElement(W, null, "r/", T), o.a.createElement(q, null, o.a.createElement("div", null, D))), o.a.createElement(F, null, I._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", I._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), I._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(A, null, R ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: P.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, I._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && o.a.createElement(w.a, {
							subredditName: T
						}));
					case O.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(F, null, I._("This community is {=quarantined}", [I._param("=quarantined", o.a.createElement(M, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, I._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ae, null, v ? o.a.createElement(g.a, {
							content: v,
							rtJsonElementProps: {
								pageLayer: _
							}
						}) : x ? o.a.createElement(f.a, {
							html: x
						}) : E || I._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), I._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(A, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(G, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, I._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(A, null, o.a.createElement(Q, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Y, {
								onClick: t,
								redditStyle: !0
							}, I._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(R, a, y)));
					case O.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(F, null, o.a.createElement(ae, null, N ? o.a.createElement(g.a, {
							content: N,
							rtJsonElementProps: {
								pageLayer: _
							}
						}) : j ? o.a.createElement(f.a, {
							html: j
						}) : C), I._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(A, null, o.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, I._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Y, {
							onClick: s,
							redditStyle: !0
						}, I._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case O.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, I._("r/{community name} has been banned from Reddit", [I._param("community name", T)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(F, null, e ? o.a.createElement(k.a, {
							linkClassName: P.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : I._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(A, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(A, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, null), o.a.createElement(ne, null, I._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(F, null, I._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(A, null, R && o.a.createElement(Z, {
							eventSource: "content_gate"
						}), o.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.ProfileDoesNotExist:
					case O.a.ProfileDeleted:
					case O.a.ProfileSuspended:
					case O.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case O.a.ProfileBlockedForLegalReason:
									return I._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case O.a.ProfileDeleted:
									return I._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case O.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, I._("This account has been {=suspended} .", [I._param("=suspended", o.a.createElement(M, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, I._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, I._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(F, null, I._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(A, null, o.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(A, null, o.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(V, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(A, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = se(ie(Object(i.i)(e => {
				const t = Object(a.useContext)(l.a) ? U : R;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(re, null, le(e))), o.a.createElement(_.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
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
			t.a = a
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(_),
				g = n("./src/lib/lessComponent.tsx");
			const w = "create-community-button",
				k = g.a.wrapped(d.c, "StyledTooltip", f.a),
				S = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.qb)(e),
					userIsSuspended: h.Y
				});
			t.a = Object(s.b)(S, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: w
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: a,
					onHideTooltip: s,
					openCommunityCreation: i,
					sendEvent: l,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: d || c,
					onClick: e => {
						u && u(e), i(l)
					},
					onMouseEnter: a,
					onMouseLeave: s,
					priority: p.c.Secondary,
					id: w,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(k, {
					caretOnTop: !0,
					tooltipId: w,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(k, {
					caretOnTop: !0,
					tooltipId: w,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				a = n.n(r),
				o = n("./src/config.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				l = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = s.a.div("FooterContainer", l.a), u = s.a.div("UserAgreement", l.a), m = s.a.a("UserAgreementLink", l.a), p = s.a.a("PrivacyLink", l.a);
			t.a = () => a.a.createElement(d, null, a.a.createElement(u, null, c._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [c._param("=User Agreement", a.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, c._("User Agreement", null, {
				hk: "2srkM2"
			}))), c._param("=Privacy Policy", a.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, c._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), c._param("year", (new Date).getFullYear())], {
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = n.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				O = Object(l.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return o.a.createElement(w.a, x({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(w.a, x({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(w.a, x({}, e, {
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
				D = Object(i.c)({
					dropdownIsOpen: Object(S.b)(C),
					postLayout: h.R,
					redditStyle: h.D
				}),
				T = Object(s.b)(D, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: C
					}))
				}));
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: r,
							subredditId: a
						} = this.props;
						t ? t(e) : (n(e, a), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(k.Y)(t),
							subreddit: Object(k.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: a
						} = this.props, s = n || b.e[a], i = e === s, l = j[e], d = N[e];
						return o.a.createElement(g.b, x({}, t, {
							className: Object(c.a)(E.a.LayoutItem, {
								[E.a.selected]: i,
								[E.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: E.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(O, x({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: C
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: r
					} = this.props, a = t || b.e[r];
					return o.a.createElement("div", {
						className: Object(c.a)(E.a.Container, e),
						id: v
					}, o.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: n
					}, this.renderItem(a, {
						id: C,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(_.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(T(Object(p.c)(Object(d.a)(P))))
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
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				_ = n("./node_modules/reselect/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				k = n("./src/reddit/constants/history.ts"),
				S = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				E = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				P = n("./src/reddit/components/ListingSort/index.m.less"),
				I = n.n(P),
				B = n("./src/lib/lessComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const R = "ListingSort--SortPicker",
				U = Object(w.a)(B.a.wrapped(E.a, "Dropdown", I.a)),
				F = B.a.wrapped(T.a, "ListingSortIcon", I.a),
				H = (B.a.wrapped(O.b, "DropdownTriangle", I.a), B.a.div("Title", I.a)),
				q = B.a.wrapped(e => a.a.createElement(x.b, A({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", I.a),
				W = e => {
					let {
						disabled: t,
						...n
					} = e;
					return a.a.createElement("div", A({}, n, {
						className: Object(s.a)(I.a.SortWrapper, n.className, {
							[I.a.isDisabled]: t
						})
					}))
				},
				M = B.a.div("DropdownRowDisabled", I.a),
				X = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				G = Object(_.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: j.a,
					user: D.l,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || R)(e),
					isPopularPage: d.F
				}),
				z = Object(o.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: n || R
						}))
					}
				});
			var Y = B.a.wrapped(X(z(Object(c.c)(e => a.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && a.a.createElement(H, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), a.a.createElement(W, {
					disabled: e.disabled
				}, e.children || a.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(S.a)(e.sort),
					id: e.dropdownId || R,
					showDropdownTriangle: !0
				}, a.a.createElement(F, {
					sort: e.sort
				}))), a.a.createElement(y.a.Consumer, null, t => a.a.createElement(U, A({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || R
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? a.a.createElement(M, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, a) => {
					const o = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (e && (n || r) || t && r) && o.unshift(b.X.BEST), t && a && o.splice(3, 0, b.X.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(v.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return a.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(S.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(C.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[k.b.FeedLoadReason]: k.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, a.a.createElement(F, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", I.a),
				K = n("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = V[e];
					return t && t() || ""
				},
				V = {
					[b.gc.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.gc.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.gc.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.gc.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.gc.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.gc.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.gc.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.gc.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.gc.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.gc.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.gc.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.gc.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.gc.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.gc.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.gc.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.gc.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.gc.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.gc.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.gc.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.gc.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.gc.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.gc.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.gc.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.gc.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.gc.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.gc.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.gc.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.gc.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.gc.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.gc.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.gc.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.gc.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.gc.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.gc.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.gc.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.gc.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.gc.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.gc.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.gc.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.gc.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.gc.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.gc.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.gc.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.gc.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.gc.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.gc.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.gc.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.gc.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.gc.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.gc.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.gc.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.gc.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(J);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = B.a.wrapped(E.a, "_Dropdown", Q.a),
				te = Object(w.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && ae(e) === b.A.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.gc.AllStates
				},
				ae = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = ae(e),
						n = re(e);
					return ne(e) ? `${t}_${n}` : t
				},
				se = Object(d.u)(),
				ie = Object(_.c)({
					dropdownIsOpen: Object(L.b)("StateSort--StateSortPicker")
				}),
				le = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(l.w)(b.A.UnitedStates + "_" + n))
					}
				}));
			var ce = B.a.wrapped(se(le(e => {
				const t = `${e.baseUrl}?${K.j}=${b.A.UnitedStates}`;
				return a.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, a.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, a.a.createElement(q, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), a.a.createElement(y.a.Consumer, null, n => a.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.gc).map(n => {
					const r = b.gc[n];
					return a.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.gc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, a.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Z(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Q.a);
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
				_e = Object(_.c)({
					dropdownIsOpen: Object(L.b)(be)
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
							[k.b.FeedLoadReason]: k.a.GeoModeChange
						})), e(Object(l.w)(n))
					}
				}))(e => {
					const t = ae(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${K.j}=`;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(s.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, a.a.createElement(W, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, a.a.createElement(q, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), a.a.createElement(y.a.Consumer, null, n => a.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(n => {
						const o = b.A[n];
						return a.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, a.a.createElement(x.b, {
							className: Object(s.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === b.A.UnitedStates && a.a.createElement(ce, {
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
				ke = n("./src/reddit/components/TimeSort/index.m.less"),
				Se = n.n(ke);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(w.a)(E.a),
				xe = B.a.div("ListingSortContainer", Se.a),
				ve = Object(d.u)(),
				Ce = Object(_.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Oe = ve(Object(o.b)(Ce, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => a.a.createElement(xe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, a.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: !1
				}, a.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(S.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), a.a.createElement(y.a.Consumer, null, t => a.a.createElement(Ee, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.jc.HOUR, b.jc.DAY, b.jc.WEEK, b.jc.MONTH, b.jc.YEAR, b.jc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = we.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[K.E]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return a.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(S.b)(t),
						href: {
							pathname: o,
							state: {
								[k.b.FeedLoadReason]: k.a.SortChange
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
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Pe = n.n(Te);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([b.X.CONTROVERSIAL, b.X.TOP]),
				Ae = new Set([b.X.CONTROVERSIAL, b.X.RISING]),
				Re = new Set([b.X.CONTROVERSIAL]),
				Ue = "ListingSort--Overflow",
				Fe = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				He = Object(_.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, D.l, d.F, N.a, De.i, (e, t, n, r, a, o, s) => {
					if (e) return {
						isPopularPage: a,
						sortOptions: e,
						locale: s
					};
					const i = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (t && (r || n) || a && n) && i.unshift(b.X.BEST), a && o && i.splice(3, 0, b.X.AWARDED), {
						isPopularPage: a,
						sortOptions: i,
						locale: s
					}
				});
			class qe extends a.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(p.a)(n, {
							sort: e
						}) : Object(v.a)(n, `${e}/`), i = o.split("?")[0], l = r ? o.replace(i + "?", "") : void 0;
						return a.a.createElement(Ne.t, {
							className: Object(s.a)(Pe.a.SortLink, e === t && Pe.a.selected),
							kind: Ne.b.InternalLink,
							priority: Ne.c.Plain,
							Icon: n => a.a.createElement(F, Ie({}, n, {
								className: Object(s.a)(Pe.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(S.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[k.b.FeedLoadReason]: k.a.SortChange
								},
								search: l
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, s = r && !!n && e === b.X.HOT && o === b.X.HOT;
						return a.a.createElement(a.a.Fragment, {
							key: e
						}, this.renderSortButton(e), s && a.a.createElement(fe, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Pe.a.DropdownButton,
							className: Pe.a.CountrySort,
							disabled: t,
							dropdownClassName: Pe.a.Dropdown,
							rowClassName: Pe.a.DropdownRow,
							rowSelectedClassName: Pe.a.DropdownRowSelected,
							wrapperClassName: Pe.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Pe.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === b.X.AWARDED && (t === b.X.HOT || t === b.X.TOP) : e === b.X.BEST && t === b.X.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.X.TOP, b.X.NEW]);
					return Re.has(t) && n.has(e)
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
						sortOptions: o,
						timeSort: i
					} = this.props, l = !t && Be.has(r), c = Ae.has(r), d = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Y, Ie({}, this.props, {
						buttonClassName: Pe.a.DropdownButton,
						className: Object(s.a)(Pe.a.SortDropdown, e),
						rowClassName: Pe.a.DropdownRow,
						rowIconClassName: Pe.a.DropdownRowIcon,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						showTitle: !1
					})), a.a.createElement("div", {
						className: Object(s.a)(Pe.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(r), l && a.a.createElement(Oe, {
						buttonClassName: Pe.a.DropdownButton,
						className: Pe.a.TimeSort,
						dropdownClassName: Pe.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Pe.a.DropdownRow,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						timeSort: i || b.kc,
						wrapperClassName: Pe.a.DropdownSortWrapper
					}), u.length > 0 && a.a.createElement(Y, Ie({}, this.props, {
						className: Object(s.a)(Pe.a.SortOverflow, e),
						dropdownClassName: Pe.a.Dropdown,
						dropdownId: Ue,
						rowClassName: Pe.a.DropdownRow,
						rowIconClassName: Pe.a.DropdownRowIcon,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), a.a.createElement("button", {
						className: Pe.a.SortOverflowButton,
						id: Ue
					}, a.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var We = Fe(Object(o.b)(He)(Object(c.c)(qe))),
				Me = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Xe = n.n(Me);
			const Ge = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				ze = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const a = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(l.J)(n, a))
							}
						}
					}
				});
			class Ye extends a.a.Component {
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
						isProfilePage: o,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return a.a.createElement("div", {
						className: Object(s.a)(Xe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, a.a.createElement(We, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && a.a.createElement(m.a, {
						className: Xe.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(ze(Object(c.c)(Ye)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
			const d = {
				[s.X.BEST]: "best",
				[s.X.HOT]: "hot",
				[s.X.NEW]: "new",
				[s.X.CONTROVERSIAL]: "controversial",
				[s.X.TOP]: "top",
				[s.X.RISING]: "rising",
				[s.X.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: r
				} = e;
				return d[r] ? a.a.createElement(i.a, {
					name: d[r],
					isFilled: n,
					className: Object(o.a)(t, c.a.iconStyles)
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
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const l = Object(r.a)({
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
				c = e => {
					const t = Object(s.e)(i.e),
						n = Object(s.e)(i.a);
					return t || n ? o.a.createElement(l, e) : null
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
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Footer/index.tsx"),
				d = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				u = n.n(d),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var w = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const k = `${i.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				S = `${i.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				y = {
					d2x_nsfw_signup_blocking_de_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				E = e => {
					const t = Object(o.d)(),
						n = Object(b.b)();
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.mainCta)
					}, a.a.createElement("img", {
						src: k
					}), a.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), a.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: u.a.buttonContainer
					}, a.a.createElement(_.j, {
						className: Object(l.a)(u.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(f.n)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(_.j, {
						className: u.a.cancel,
						onClick: () => {
							n((() => e => ({
								...Object(f.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), t(Object(s.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				x = e => a.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, a.a.createElement("div", {
					className: u.a.qrCodeInner
				}, a.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), a.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), a.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), a.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: S
				}))),
				v = e => {
					const t = Object(b.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(f.n)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(o.e)(w.b) === h.qc.Enabled ? y.d2x_nsfw_signup_blocking_de_v1 : y.d2x_nsfw_signup_blocking_non_us_v1;
					return a.a.createElement("div", {
						className: u.a.container
					}, a.a.createElement(E, {
						contentTitle: n
					}), a.a.createElement("div", {
						className: u.a.footerWrapper
					}, a.a.createElement(c.a, null)), a.a.createElement(x, {
						qrCodeAsset: r
					}))
				}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");
			const o = {
					[a.X.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[a.X.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[a.X.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[a.X.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[a.X.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[a.X.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[a.X.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				s = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[a.jc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[a.jc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[a.jc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[a.jc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[a.jc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[a.jc.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = a.a.createContext({})
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
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(s);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return a.a.createElement("svg", l({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), a.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
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
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(i);
			const c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.n, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				d = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: l.a.container
					}, o.a.createElement("h3", {
						className: l.a.title
					}, t || r.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.n, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, r.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1tjWF-96KbJjdBGufYe6Lu",
				accent: "_1IHNP4dWxy7U5QgxQxi5If",
				title: "KY1h4po8s5PdqDHk-wjpB",
				subtitle: "_2hJJe3AbHRX6HhK43NwbWS",
				avatarContainer: "CE8h3MaaAIApJVVopVtob",
				avatar: "_3irN5APGI7MZ0SaDRl6MqN",
				avatarBlockIcon: "_9vWkG7-BD-CXaW0ZmaAYA",
				avatarIconContainer: "_26b11ZsQwO7zJjCuPAI89x",
				btnContainer: "_3uDT2KC9eHKU_3y6ZKXSZ-",
				btn: "_1yQHj4iPQKoswy8UZ3MADy"
			}
		},
		"./src/reddit/pages/ProfileBlockInterstitial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-router/esm/react-router.js"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			var l = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx");
			var d = e => a.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, a.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), a.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), a.a.createElement("defs", null, a.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, a.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: n,
					avatar: o,
					history: m,
					location: h
				} = e;
				const _ = Object(l.a)();
				return Object(r.useEffect)(() => {
					_((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.View,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...s.n(t)
					}))(n))
				}, [_, n]), a.a.createElement("div", {
					className: p.a.container
				}, a.a.createElement(d, {
					className: p.a.accent
				}), a.a.createElement("div", {
					className: p.a.avatarContainer
				}, a.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: b._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), a.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, a.a.createElement(c.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), a.a.createElement("h3", {
					className: p.a.title
				}, b._("u/{name} is blocked", [b._param("name", t)], {
					hk: "18rExM"
				})), a.a.createElement("p", {
					className: p.a.subtitle
				}, b._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), a.a.createElement("div", {
					className: p.a.btnContainer
				}, a.a.createElement(u.t, {
					className: p.a.btn,
					to: `${h.pathname}?consent=true`,
					kind: u.b.InternalLink,
					priority: u.c.Primary,
					size: u.d.L,
					onClick: () => _((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.Accept,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...s.n(t)
					}))(n)),
					isFullWidth: !0,
					isSquare: !0
				}, b._("Continue", null, {
					hk: "3eqDZf"
				})), a.a.createElement(u.t, {
					className: p.a.btn,
					to: "#",
					kind: u.b.InternalLink,
					priority: u.c.Secondary,
					size: u.d.L,
					onClick: () => {
						_((e => t => ({
							source: i.f.BlockedProfileInterstitial,
							action: i.d.Deny,
							noun: i.e.BlockedProfileInterstitial,
							blockedUser: {
								id: e
							},
							...s.n(t)
						}))(n)), m.goBack()
					},
					isFullWidth: !0,
					isSquare: !0
				}, b._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const l = Object(r.a)(s.g, s.d, i.e, (e, t, n) => !e && !t && !n);

			function c(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: l,
					expEventOverride: t
				})
			}
			const d = c(a.Ub, !0),
				u = c(a.Ub, !1),
				m = c(a.Vb, !0),
				p = (c(a.Vb, !1), Object(r.a)(d, m, (e, t) => e === a.qc.Enabled || t === a.rc.Enabled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.2d20e8c3fb8fe3a73009.js.map