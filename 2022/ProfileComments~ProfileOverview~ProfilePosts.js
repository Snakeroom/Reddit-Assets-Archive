// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.ea90c08fbacb454f8927.js
// Retrieved at 5/18/2022, 11:10:06 AM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
						active: a,
						hover: s
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[l.a.disable]: n,
						[l.a.active]: a,
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
			var a = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(r.e)(e),
					s = encodeURIComponent(`${t}${o}`);
				return `${a.a.accountManagerOrigin}${n||"/login"}?dest=${s}`
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
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				_ = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				g = n("./src/reddit/components/TextWithLinks/index.tsx"),
				C = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/chat/controls/Svg/index.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var v = e => o.a.createElement(E.a, x({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				O = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/user.ts");
			var P = n("./src/reddit/selectors/meta.ts"),
				T = n("./src/reddit/components/ContentGate/index.m.less"),
				D = n.n(T);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = d.a.wrapped(v, "PrivateKey", D.a), R = d.a.div("ButtonsContainer", D.a), W = d.a.div("Container", D.a), A = d.a.div("ContainerExp", D.a), z = d.a.div("Description", D.a), F = d.a.div("PrivateSubredditDetails", D.a), H = d.a.div("PrivateSubredditDescription", D.a), U = d.a.h3("PrivateSubredditName", D.a), q = d.a.a("Link", D.a), M = d.a.wrapped(y.n, "LinkRouterButton", D.a), G = d.a.wrapped(y.m, "LinkButton", D.a), Y = d.a.wrapped(y.q, "SecondaryLinkRouterButton", D.a), Z = d.a.wrapped(y.p, "SecondaryLinkButton", D.a), K = d.a.wrapped(M, "GoHomeLinkButton", D.a), V = d.a.wrapped(b.a, "CreateCommunityButton", D.a), J = d.a.img("Image", D.a), Q = d.a.img("ImagePlaceholder", D.a), X = d.a.wrapped(M, "LeftLinkRouterButton", D.a), $ = d.a.wrapped(G, "LeftLinkButton", D.a), ee = d.a.wrapped(Z, "SecondaryLeftLinkButton", D.a), te = d.a.wrapped(Y, "SecondaryLeftLinkRouterButton", D.a), ne = d.a.h3("Title", D.a), ae = d.a.div("PageBody", D.a), re = d.a.div("InterstitialMessageWrapper", D.a), oe = Object(c.c)({
				isLoggedIn: L.O,
				origin: P.j,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.P)(e)) return !1;
					const t = Object(j.d)(e);
					if (!t) return !1;
					const n = Object(L.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: a
					} = n;
					if (!a) return !1;
					const r = 30 * N.B;
					return a > Date.now() - r
				})(e),
				isSeo: P.g
			}), se = Object(S.u)(), ie = Object(s.b)(oe, (e, t) => {
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
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: d,
					location: p,
					origin: b,
					pageLayer: f,
					quarantineRequiresEmail: S,
					quarantineMessage: y,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: x,
					interstitialWarningMessage: v,
					interstitialWarningMessageHtml: N,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: L,
					subredditDescription: P,
					subredditName: T,
					user: W
				} = e, A = async () => {
					if (i ? await L() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(C.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, I._("r/{community name} is a Reddit Premium community", [I._param("community name", T)], {
							hk: "2lyDwB"
						})), o.a.createElement(z, null, I._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(R, null, W ? o.a.createElement(ee, {
							href: `${a.a.redditUrl}/premium`,
							redditStyle: !0
						}, I._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement($, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), W ? o.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Z, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, I._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === O.a.Nsfw ? I._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : I._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(z, null, I._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(R, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Z, {
							onClick: A,
							redditStyle: !0
						}, I._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(B, null), o.a.createElement(ne, null, "r/", T, " ", I._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && o.a.createElement(F, null, o.a.createElement(U, null, "r/", T), o.a.createElement(H, null, o.a.createElement("div", null, P))), o.a.createElement(z, null, I._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", I._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), I._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(R, null, W ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: D.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ee, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, I._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ee, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && o.a.createElement(k.a, {
							subredditName: T
						}));
					case O.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(z, null, I._("This community is {=quarantined}", [I._param("=quarantined", o.a.createElement(q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, I._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(re, null, x ? o.a.createElement(w.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? o.a.createElement(_.a, {
							html: E
						}) : y || I._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), I._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(R, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(R, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(G, {
								href: `${a.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, I._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(R, null, o.a.createElement(X, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Z, {
								onClick: t,
								redditStyle: !0
							}, I._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(W, r, S)));
					case O.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(z, null, o.a.createElement(re, null, j ? o.a.createElement(w.a, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : N ? o.a.createElement(_.a, {
							html: N
						}) : v), I._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(R, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(Z, {
							onClick: s,
							redditStyle: !0
						}, I._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case O.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, I._("r/{community name} has been banned from Reddit", [I._param("community name", T)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(z, null, e ? o.a.createElement(g.a, {
							linkClassName: D.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : I._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(R, null, o.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(R, null, o.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, null), o.a.createElement(ne, null, I._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(z, null, I._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(R, null, W && o.a.createElement(V, {
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
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
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
									return o.a.createElement(o.a.Fragment, null, I._("This account has been {=suspended} .", [I._param("=suspended", o.a.createElement(q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, I._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ne, null, I._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(z, null, I._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(R, null, o.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(R, null, o.a.createElement(K, {
							to: "/",
							redditStyle: !0
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ne, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(R, null, o.a.createElement(M, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = se(ie(Object(i.i)(e => {
				const t = Object(r.useContext)(l.a) ? A : W;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(ae, null, le(e))), o.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(f),
				w = n("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				g = w.a.wrapped(d.c, "StyledTooltip", _.a),
				C = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.ob)(e),
					userIsSuspended: b.W
				});
			t.a = Object(s.b)(C, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: k
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
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
					onMouseEnter: r,
					onMouseLeave: s,
					priority: p.c.Secondary,
					id: k,
					isFullWidth: !0
				}, a.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: k,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: k,
					text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/PostList/Placeholder.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = n.n(d);
			var m = e => {
				let {
					children: t,
					className: n
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.Wrapper, n)
				}, o.a.createElement(l.a, {
					className: u.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: c.g.Classic
				}), o.a.createElement("div", {
					className: u.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: n,
					timeSort: r = s.ic.ALL
				} = e;
				return o.a.createElement(m, {
					className: t
				}, r === s.ic.ALL ? a.fbt._("hmm... {profileName} hasn't commented on anything", [a.fbt._param("profileName", `u/${n}`)], {
					hk: "1MHn3t"
				}) : a.fbt._("hmm... {profileName} hasn't commented recently", [a.fbt._param("profileName", `u/${n}`)], {
					hk: "qN3uL"
				}))
			};
			var h = e => {
				let {
					className: t,
					profileName: n,
					timeSort: r = s.ic.ALL
				} = e;
				return o.a.createElement(m, {
					className: t
				}, r === s.ic.ALL ? a.fbt._("hmm... {profileName} hasn't posted anything", [a.fbt._param("profileName", `u/${n}`)], {
					hk: "28vBEd"
				}) : a.fbt._("hmm... {profileName} hasn't posted recently", [a.fbt._param("profileName", `u/${n}`)], {
					hk: "38GhqN"
				}))
			};
			var b = e => {
					let {
						className: t,
						text: n
					} = e;
					return o.a.createElement(m, {
						className: t
					}, n)
				},
				f = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				_ = n("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				w = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => o.a.createElement("div", {
				className: w.a.container
			}, o.a.createElement(f.a, {
				className: w.a.hideIcon
			}), o.a.createElement("h3", {
				className: w.a.title
			}, k._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: w.a.subtitle
			}, k._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/config.ts"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("UserAgreement", c.a), m = i.a.a("UserAgreementLink", c.a), p = i.a.a("PrivacyLink", c.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(s.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === h.Grey,
					[c.a.mIsWhite]: e.textColor === h.White
				})
			}, r.a.createElement(u, null, d._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [d._param("=User Agreement", r.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, d._("User Agreement", null, {
				hk: "YviZP"
			}))), d._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, d._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), d._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				y = n.n(S);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				O = Object(l.a)(_.a),
				N = {
					[h.d.Card]: function(e) {
						return o.a.createElement(k.a, E({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(k.a, E({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(k.a, E({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[h.d.Card]: () => a.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => a.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => a.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[h.d.Search]: () => a.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				L = Object(b.u)(),
				P = Object(i.c)({
					dropdownIsOpen: Object(C.b)(v),
					postLayout: b.R,
					redditStyle: b.D
				}),
				T = Object(s.b)(P, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: v
					}))
				}));
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: a,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), a(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(g.Y)(t),
							subreddit: Object(g.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: a,
							postLayout: r
						} = this.props, s = n || h.e[r], i = e === s, l = N[e], d = j[e];
						return o.a.createElement(w.b, E({}, t, {
							className: Object(c.a)(y.a.LayoutItem, {
								[y.a.selected]: i,
								[y.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: d(),
							iconWrapperClassName: y.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: y.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: y.a.LayoutIcon,
							onClick: i ? void 0 : a,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(O, E({}, e, {
							className: y.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: y.a.DropdownRow,
							rowIconClassName: y.a.DropdownRowIcon,
							rowSelectedClassName: y.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: a
					} = this.props, r = t || h.e[a];
					return o.a.createElement("div", {
						className: Object(c.a)(y.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: y.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(T(Object(p.c)(Object(d.a)(D))))
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				l = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				h = n("./src/lib/constants/index.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/constants/history.ts"),
				C = n("./src/reddit/constants/listingSorts.ts"),
				S = n("./src/reddit/contexts/Tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				N = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				D = n("./src/reddit/components/ListingSort/index.m.less"),
				I = n.n(D),
				B = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const W = "ListingSort--SortPicker",
				A = Object(k.a)(B.a.wrapped(y.a, "Dropdown", I.a)),
				z = B.a.wrapped(T.a, "ListingSortIcon", I.a),
				F = (B.a.wrapped(O.b, "DropdownTriangle", I.a), B.a.div("Title", I.a)),
				H = B.a.wrapped(e => r.a.createElement(E.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", I.a),
				U = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", R({}, n, {
						className: Object(s.a)(I.a.SortWrapper, n.className, {
							[I.a.isDisabled]: t
						})
					}))
				},
				q = B.a.div("DropdownRowDisabled", I.a),
				M = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				G = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: N.a,
					user: P.k,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || W)(e),
					isPopularPage: d.F
				}),
				Y = Object(o.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: a
					} = t;
					return {
						onOpenDropdown: () => e(Object(_.h)({
							tooltipId: n || W
						}))
					}
				});
			var Z = B.a.wrapped(M(Y(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(F, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(U, {
					disabled: e.disabled
				}, e.children || r.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(C.a)(e.sort),
					id: e.dropdownId || W,
					showDropdownTriangle: !0
				}, r.a.createElement(z, {
					sort: e.sort
				}))), r.a.createElement(S.a.Consumer, null, t => r.a.createElement(A, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || W
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(q, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, a, r) => {
					const o = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (e && (n || a) || t && a) && o.unshift(h.W.BEST), t && r && o.splice(3, 0, h.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						a = n.split("?")[0],
						o = e.isProfilePage ? n.replace(a + "?", "") : void 0;
					return r.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(C.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: a,
							state: {
								[g.b.FeedLoadReason]: g.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(z, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", I.a),
				K = n("./src/reddit/constants/parameters.ts");
			const V = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[h.fc.AllStates]: () => w.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.fc.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.fc.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.fc.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.fc.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.fc.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.fc.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.fc.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.fc.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.fc.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.fc.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.fc.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.fc.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.fc.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.fc.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.fc.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.fc.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.fc.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.fc.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.fc.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.fc.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.fc.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.fc.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.fc.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.fc.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.fc.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.fc.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.fc.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.fc.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.fc.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.fc.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.fc.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.fc.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.fc.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.fc.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.fc.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.fc.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.fc.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.fc.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.fc.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.fc.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.fc.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.fc.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.fc.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.fc.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.fc.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.fc.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.fc.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.fc.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.fc.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.fc.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.fc.Wyoming]: () => w.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = B.a.wrapped(y.a, "_Dropdown", X.a),
				te = Object(k.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === h.z.UnitedStates
				},
				ae = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return h.fc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = ae(e);
					return ne(e) ? `${t}_${n}` : t
				},
				se = Object(d.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(L.b)("StateSort--StateSortPicker")
				}),
				le = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t)), e(Object(l.w)(h.z.UnitedStates + "_" + n))
					}
				}));
			var ce = B.a.wrapped(se(le(e => {
				const t = `${e.baseUrl}?${K.j}=${h.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : V(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(S.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.fc).map(n => {
					const a = h.fc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.fc.AllStates ? t : `${t}_${e}`)(a), oe(a))
					}, r.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.sort === a ? e.rowSelectedClassName : void 0),
						displayText: V(a),
						isSelected: e.sort === a
					}))
				}))))
			})), "Component", X.a);
			const de = {
				[h.z.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.z.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.z.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.z.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.z.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.z.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.z.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.z.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.z.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.z.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.z.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.z.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.z.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.z.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.z.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.z.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.z.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.z.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.z.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.z.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.z.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.z.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.z.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.z.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.z.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.z.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.z.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.z.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.z.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.z.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.z.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.z.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.z.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.z.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.z.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.z.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const he = "CountrySort--CountrySortPicker",
				be = Object(d.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(L.b)(he)
				});
			var _e = be(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(_.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(_.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(b.b)(t, {
							[g.b.FeedLoadReason]: g.a.GeoModeChange
						})), e(Object(l.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = ae(e.sort),
						a = `${e.baseUrl}?${K.j}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(s.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, r.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.z.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), r.a.createElement(S.a.Consumer, null, n => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: he
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(h.z).map(n => {
						const o = h.z[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${a}${oe(o)}`, o)
						}, r.a.createElement(E.b, {
							className: Object(s.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === h.z.UnitedStates && r.a.createElement(ce, {
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
				we = n("./node_modules/path-browserify/index.js"),
				ke = n.n(we),
				ge = n("./src/reddit/components/TimeSort/index.m.less"),
				Ce = n.n(ge);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(k.a)(y.a),
				Ee = B.a.div("ListingSortContainer", Ce.a),
				xe = Object(d.u)(),
				ve = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Oe = xe(Object(o.b)(ve, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(Ee, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(C.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(S.a.Consumer, null, t => r.a.createElement(ye, Se({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.ic.HOUR, h.ic.DAY, h.ic.WEEK, h.ic.MONTH, h.ic.YEAR, h.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = ke.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						a = Object(p.a)(n, {
							[K.E]: t
						}),
						o = a.split("?")[0],
						i = `${a.replace(o+"?","")}`;
					return r.a.createElement(E.b, {
						className: Object(s.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(C.b)(t),
						href: {
							pathname: o,
							state: {
								[g.b.FeedLoadReason]: g.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.d)(t))
						}
					})
				}))))))),
				Ne = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				Pe = n("./src/reddit/selectors/meta.ts"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = n.n(Te);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				Re = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				We = new Set([h.W.CONTROVERSIAL]),
				Ae = "ListingSort--Overflow",
				ze = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Fe = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, N.a, P.k, d.F, j.a, Pe.i, (e, t, n, a, r, o, s) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: s
					};
					const i = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (t && (a || n) || r && n) && i.unshift(h.W.BEST), r && o && i.splice(3, 0, h.W.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: s
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: a
						} = this.props, o = a ? Object(p.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], l = a ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(je.t, {
							className: Object(s.a)(De.a.SortLink, e === t && De.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => r.a.createElement(z, Ie({}, n, {
								className: Object(s.a)(De.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(C.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[g.b.FeedLoadReason]: g.a.SortChange
								},
								search: l
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: a,
							sort: o
						} = this.props, s = a && !!n && e === h.W.HOT && o === h.W.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), s && r.a.createElement(_e, {
							baseUrl: Ne.c[Ne.b.Popular],
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
						locale: a
					} = this.props;
					return !a.startsWith("en") && (n ? e === h.W.AWARDED && (t === h.W.HOT || t === h.W.TOP) : e === h.W.BEST && t === h.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([h.W.TOP, h.W.NEW]);
					return We.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: a,
						sortOptions: o,
						timeSort: i
					} = this.props, l = !t && Be.has(a), c = Re.has(a), d = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== a);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, Ie({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(s.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(s.a)(De.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(a), l && r.a.createElement(Oe, {
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: a,
						onChange: n,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: i || h.jc,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(Z, Ie({}, this.props, {
						className: Object(s.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: Ae,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: Ae
					}, r.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ue = ze(Object(o.b)(Fe)(Object(c.c)(He))),
				qe = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Me = n.n(qe);
			const Ge = Object(d.u)({
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Ye = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, a) => {
							if (n) {
								const r = Object(i.c)({
									sort: t,
									timeSort: a
								});
								e(Object(l.J)(n, r))
							}
						}
					}
				});
			class Ze extends r.a.Component {
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
						disabled: a = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(s.a)(Me.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ue, {
						baseUrl: e,
						disabled: a,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && r.a.createElement(m.a, {
						className: Me.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(Ye(Object(c.c)(Ze)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
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
					sort: a
				} = e;
				return d[a] ? r.a.createElement(i.a, {
					name: d[a],
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
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const l = Object(a.a)({
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
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
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
				return P
			}));
			var a = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/helpers.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/sample/index.ts"),
				g = n("./src/telemetry/helpers/sendCounter.ts");
			var C;
			! function(e) {
				e.FullPage = "FullPage", e.Modal = "Modal"
			}(C || (C = {}));
			var S = n("./src/reddit/selectors/telemetry.ts");
			const y = "nsfw_dialog";
			var E = e => s.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, s.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), s.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), s.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				x = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				v = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				O = n.n(v);
			const N = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				j = e => {
					const t = Object(i.d)(),
						n = Object(b.b)(),
						a = Object(i.e)(x.f),
						u = Object(o.useCallback)(() => {
							a === x.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, a]),
						h = (e => e ? s.a.createElement("div", {
							className: O.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), s.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : s.a.createElement("div", {
							className: O.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(a === x.a.Blurred);
					return Object(o.useEffect)(() => {
						(e => {
							Object(k.a)(10) && Object(g.b)(w.m.Redesign, {
								type: g.a.NsfwBlocking,
								data: {
									variant: e
								}
							})
						})(a)
					}, [a]), s.a.createElement("div", {
						className: Object(d.a)(O.a.mainCta)
					}, s.a.createElement(E, null), h, s.a.createElement("div", {
						className: O.a.contentTitle
					}, e.contentTitle), s.a.createElement("div", {
						className: O.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), s.a.createElement("div", {
						className: O.a.buttonContainer
					}, s.a.createElement(_.j, {
						className: Object(d.a)(O.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(S.n)(e),
								source: "xpromo",
								action: "click",
								noun: y
							}))()), u(), t(Object(m.i)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), s.a.createElement(_.j, {
						className: O.a.cancel,
						onClick: () => {
							Object(c.b)(), n((() => e => ({
								...Object(S.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: y
							}))()), t(Object(l.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				L = Object(u.a)(e => {
					const t = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return s.a.createElement("div", {
						className: O.a.qrCodeOuter
					}, s.a.createElement("div", {
						className: O.a.qrCodeInner
					}, s.a.createElement("img", {
						className: O.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), s.a.createElement("div", {
						className: O.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), s.a.createElement("div", {
						className: O.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), s.a.createElement("img", {
						className: O.a.sneakySnoo,
						src: t
					})))
				}),
				P = e => {
					const t = Object(b.b)();
					s.a.useEffect(() => {
						t((() => e => ({
							...Object(S.n)(e),
							source: "xpromo",
							action: "view",
							noun: y
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, a = Object(i.e)(x.g), r = Object(i.e)(x.h), o = Object(i.e)(x.f), l = o === x.a.Blurred ? h.a.White : o === x.a.NoPreview ? h.a.Grey : void 0;
					return s.a.createElement("div", {
						className: O.a.container
					}, s.a.createElement(j, {
						contentTitle: n
					}), s.a.createElement("div", {
						className: Object(d.a)(O.a.footerWrapper, {
							[O.a.mIsModal]: o === x.a.Blurred
						})
					}, s.a.createElement(h.b, {
						textColor: l
					})), s.a.createElement(L, {
						qrCodeAsset: (() => a === f.wc.Enabled || r === f.lb.BlurredPreview || r === f.lb.NoPreview ? N.d2x_nsfw_signup_blocking_de_v1 : N.d2x_nsfw_signup_blocking_non_us_v1)()
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.W.BEST]: () => a.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.W.HOT]: () => a.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.W.NEW]: () => a.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.W.CONTROVERSIAL]: () => a.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.W.RISING]: () => a.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.W.TOP]: () => a.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.W.AWARDED]: () => a.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				s = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.ic.HOUR]: () => a.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.ic.DAY]: () => a.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.ic.WEEK]: () => a.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.ic.MONTH]: () => a.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.ic.YEAR]: () => a.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.ic.ALL]: () => a.fbt._("All Time", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = r.a.createContext({})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
					}, t || a.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(s.n, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, a.fbt._("Go Home", null, {
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
					}, t || a.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(s.n, {
						className: l.a.primaryRouterLink,
						to: "/"
					}, a.fbt._("Go Home", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-router/esm/react-router.js"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/Event.ts");
			var l = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx");
			var d = e => r.a.createElement("svg", {
					className: e.className,
					width: "1821",
					height: "283",
					viewBox: "0 0 1821 283",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					clipPath: "url(#clip0_2660_632712)"
				}, r.a.createElement("path", {
					d: "M3025.95 118.337C3266.52 166.378 3558.75 170.416 3737.36 10.3669C3915.98 -149.683 3977.84 -352.145 3977.84 -352.145L-1003.56 -3153.19L-2982.2 -644.204C-2793.39 -416.675 -2314.26 -0.0620003 -1908.19 -153.832C-1400.6 -346.044 -1285.84 -181.163 -1113.53 -60.7893C-941.226 59.5848 -682.031 74.0078 -382.757 -66.3239C-83.4834 -206.656 520.033 475.612 1135.3 216.276C1557.45 38.3353 1689.92 -190.512 1953.87 -188.296C2217.81 -186.081 2725.23 58.2852 3025.95 118.337Z",
					fill: "#FF9999"
				}), r.a.createElement("path", {
					opacity: "0.7",
					d: "M3242.16 164.238C3492.92 218.39 3737.98 115.535 3829.16 57.338C3920.35 -0.858859 4078.81 -186.192 4078.81 -186.192L-1031.4 -3253.8L-3007.16 -743.085C-2804.71 -507.363 -2295.74 -72.8347 -1879.48 -220.494C-1359.17 -405.068 -1235.32 -234.732 -1053.16 -108.442C-871 17.8472 -601.951 38.186 -295.98 -98.1257C9.99124 -234.437 655.794 473.214 1285.7 222.665C1717.9 50.7538 1848.36 -179.298 2121.97 -171.282C2395.57 -163.266 2928.73 96.5485 3242.16 164.238Z",
					fill: "#FB133A"
				})), r.a.createElement("defs", null, r.a.createElement("clipPath", {
					id: "clip0_2660_632712"
				}, r.a.createElement("rect", {
					width: "1821",
					height: "283",
					fill: "white"
				})))),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				p = n.n(m);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					uid: n,
					avatar: o,
					history: m,
					location: b
				} = e;
				const f = Object(l.a)();
				return Object(a.useEffect)(() => {
					f((e => t => ({
						source: i.f.BlockedProfileInterstitial,
						action: i.d.View,
						noun: i.e.BlockedProfileInterstitial,
						blockedUser: {
							id: e
						},
						...s.n(t)
					}))(n))
				}, [f, n]), r.a.createElement("div", {
					className: p.a.container
				}, r.a.createElement(d, {
					className: p.a.accent
				}), r.a.createElement("div", {
					className: p.a.avatarContainer
				}, r.a.createElement("img", {
					className: p.a.avatar,
					src: null != o ? o : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: h._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), r.a.createElement("div", {
					className: p.a.avatarIconContainer
				}, r.a.createElement(c.a, {
					name: "kick_fill",
					className: p.a.avatarBlockIcon,
					isFilled: !0
				}))), r.a.createElement("h3", {
					className: p.a.title
				}, h._("u/{name} is blocked", [h._param("name", t)], {
					hk: "18rExM"
				})), r.a.createElement("p", {
					className: p.a.subtitle
				}, h._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), r.a.createElement("div", {
					className: p.a.btnContainer
				}, r.a.createElement(u.t, {
					className: p.a.btn,
					to: `${b.pathname}?consent=true`,
					kind: u.b.InternalLink,
					priority: u.c.Primary,
					size: u.d.L,
					onClick: () => f((e => t => ({
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
				}, h._("Continue", null, {
					hk: "3eqDZf"
				})), r.a.createElement(u.t, {
					className: p.a.btn,
					to: "#",
					kind: u.b.InternalLink,
					priority: u.c.Secondary,
					size: u.d.L,
					onClick: () => {
						f((e => t => ({
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
				}, h._("Go Back", null, {
					hk: "2uq6mz"
				}))))
			})
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.ea90c08fbacb454f8927.js.map