// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.da6794f4f6e3ce13d0ed.js
// Retrieved at 4/13/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
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
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				_ = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				S = n("./src/reddit/components/TextWithLinks/index.tsx"),
				g = n("./src/reddit/constants/parameters.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/chat/controls/Svg/index.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
				N = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/user.ts");
			var D = n("./src/reddit/selectors/meta.ts"),
				T = n("./src/reddit/components/ContentGate/index.m.less"),
				P = n.n(T);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = d.a.wrapped(C, "PrivateKey", P.a), B = d.a.div("ButtonsContainer", P.a), R = d.a.div("Container", P.a), U = d.a.div("ContainerExp", P.a), F = d.a.div("Description", P.a), H = d.a.div("PrivateSubredditDetails", P.a), q = d.a.div("PrivateSubredditDescription", P.a), W = d.a.h3("PrivateSubredditName", P.a), M = d.a.a("Link", P.a), X = d.a.wrapped(E.n, "LinkRouterButton", P.a), G = d.a.wrapped(E.m, "LinkButton", P.a), z = d.a.wrapped(E.q, "SecondaryLinkRouterButton", P.a), Y = d.a.wrapped(E.p, "SecondaryLinkButton", P.a), K = d.a.wrapped(X, "GoHomeLinkButton", P.a), Z = d.a.wrapped(h.a, "CreateCommunityButton", P.a), J = d.a.img("Image", P.a), V = d.a.img("ImagePlaceholder", P.a), Q = d.a.wrapped(X, "LeftLinkRouterButton", P.a), $ = d.a.wrapped(G, "LeftLinkButton", P.a), ee = d.a.wrapped(Y, "SecondaryLeftLinkButton", P.a), te = d.a.wrapped(z, "SecondaryLeftLinkRouterButton", P.a), ne = d.a.h3("Title", P.a), ae = d.a.div("PageBody", P.a), re = d.a.div("InterstitialMessageWrapper", P.a), oe = Object(c.c)({
				isLoggedIn: L.P,
				origin: D.j,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.Q)(e)) return !1;
					const t = Object(j.d)(e);
					if (!t) return !1;
					const n = Object(L.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: a
					} = n;
					if (!a) return !1;
					const r = 30 * N.C;
					return a > Date.now() - r
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
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: l,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: d,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: E,
					quarantineMessageHtml: x,
					quarantineMessageRTJson: v,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: N,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: L,
					subredditDescription: D,
					subredditName: T,
					user: R
				} = e, U = async () => {
					if (i ? await L() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(g.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ne, null, I._("r/{community name} is a Reddit Premium community", [I._param("community name", T)], {
							hk: "2lyDwB"
						})), o.a.createElement(F, null, I._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(B, null, R ? o.a.createElement(ee, {
							href: `${a.a.redditUrl}/premium`,
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
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ne, null, n === O.a.Nsfw ? I._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : I._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(F, null, I._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(B, null, o.a.createElement(Q, {
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
						return o.a.createElement("div", null, o.a.createElement(A, null), o.a.createElement(ne, null, "r/", T, " ", I._("is a private community", null, {
							hk: "7zZmq"
						})), D && D.length && o.a.createElement(H, null, o.a.createElement(W, null, "r/", T), o.a.createElement(q, null, o.a.createElement("div", null, D))), o.a.createElement(F, null, I._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", I._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), I._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(B, null, R ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: P.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ee, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${T}`,
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
						}))), T && o.a.createElement(k.a, {
							subredditName: T
						}));
					case O.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(F, null, I._("This community is {=quarantined}", [I._param("=quarantined", o.a.createElement(M, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, I._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(re, null, v ? o.a.createElement(w.a, {
							content: v,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : x ? o.a.createElement(_.a, {
							html: x
						}) : E || I._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), I._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(B, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(B, null, o.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(G, {
								href: `${a.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, I._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(B, null, o.a.createElement(Q, {
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
						})(R, r, y)));
					case O.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, null, I._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(F, null, o.a.createElement(re, null, j ? o.a.createElement(w.a, {
							content: j,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : N ? o.a.createElement(_.a, {
							html: N
						}) : C), I._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(B, null, o.a.createElement(Q, {
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
						return o.a.createElement("div", null, o.a.createElement(J, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ne, null, I._("r/{community name} has been banned from Reddit", [I._param("community name", T)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(F, null, e ? o.a.createElement(S.a, {
							linkClassName: P.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : I._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(B, null, o.a.createElement(X, {
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
						})), o.a.createElement(B, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(V, null), o.a.createElement(ne, null, I._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(F, null, I._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(B, null, R && o.a.createElement(Z, {
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
						})(e)), o.a.createElement(B, null, o.a.createElement(K, {
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
						})), o.a.createElement(B, null, o.a.createElement(K, {
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
						})), o.a.createElement(B, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, I._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = se(ie(Object(i.i)(e => {
				const t = Object(r.useContext)(l.a) ? U : R;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(ae, null, le(e))), o.a.createElement(f.a, null))
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
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				_ = n.n(f),
				w = n("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				S = w.a.wrapped(d.c, "StyledTooltip", _.a),
				g = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(s.b)(g, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
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
				}), c ? o.a.createElement(S, {
					caretOnTop: !0,
					tooltipId: k,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(S, {
					caretOnTop: !0,
					tooltipId: k,
					text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/config.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				l = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = s.a.div("FooterContainer", l.a), u = s.a.div("UserAgreement", l.a), m = s.a.a("UserAgreementLink", l.a), p = s.a.a("PrivacyLink", l.a);
			t.a = () => r.a.createElement(d, null, r.a.createElement(u, null, c._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [c._param("=User Agreement", r.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, c._("User Agreement", null, {
				hk: "2srkM2"
			}))), c._param("=Privacy Policy", r.a.createElement(p, {
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
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				y = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = n.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "view--layout--FUE",
				C = "LayoutSwitch--picker",
				O = Object(l.a)(_.a),
				N = {
					[b.d.Card]: function(e) {
						return o.a.createElement(k.a, x({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(k.a, x({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(k.a, x({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[b.d.Card]: () => a.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => a.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => a.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => a.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				L = Object(h.u)(),
				D = Object(i.c)({
					dropdownIsOpen: Object(g.b)(C),
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
							sendEvent: a,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), a(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.Y)(t),
							subreddit: Object(S.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: a,
							postLayout: r
						} = this.props, s = n || b.e[r], i = e === s, l = N[e], d = j[e];
						return o.a.createElement(w.b, x({}, t, {
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
							onClick: i ? void 0 : a,
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
						postLayout: a
					} = this.props, r = t || b.e[a];
					return o.a.createElement("div", {
						className: Object(c.a)(E.a.Container, e),
						id: v
					}, o.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: C,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
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
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				k = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/constants/history.ts"),
				g = n("./src/reddit/constants/listingSorts.ts"),
				y = n("./src/reddit/contexts/Tooltip.ts"),
				E = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				O = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				N = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				P = n("./src/reddit/components/ListingSort/index.m.less"),
				I = n.n(P),
				A = n("./src/lib/lessComponent.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const R = "ListingSort--SortPicker",
				U = Object(k.a)(A.a.wrapped(E.a, "Dropdown", I.a)),
				F = A.a.wrapped(T.a, "ListingSortIcon", I.a),
				H = (A.a.wrapped(O.b, "DropdownTriangle", I.a), A.a.div("Title", I.a)),
				q = A.a.wrapped(e => r.a.createElement(x.b, B({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", I.a),
				W = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", B({}, n, {
						className: Object(s.a)(I.a.SortWrapper, n.className, {
							[I.a.isDisabled]: t
						})
					}))
				},
				M = A.a.div("DropdownRowDisabled", I.a),
				X = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				G = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: N.a,
					user: D.k,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || R)(e),
					isPopularPage: d.F
				}),
				z = Object(o.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: a
					} = t;
					return {
						onOpenDropdown: () => e(Object(_.h)({
							tooltipId: n || R
						}))
					}
				});
			var Y = A.a.wrapped(X(z(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(H, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(W, {
					disabled: e.disabled
				}, e.children || r.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(g.a)(e.sort),
					id: e.dropdownId || R,
					showDropdownTriangle: !0
				}, r.a.createElement(F, {
					sort: e.sort
				}))), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(U, B({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || R
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(M, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, a, r) => {
					const o = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (e && (n || a) || t && a) && o.unshift(b.X.BEST), t && r && o.splice(3, 0, b.X.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(v.a)(e.baseUrl, `${t}/`),
						a = n.split("?")[0],
						o = e.isProfilePage ? n.replace(a + "?", "") : void 0;
					return r.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(g.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(C.b)(t))
						},
						href: {
							pathname: a,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(F, {
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
					[b.fc.AllStates]: () => w.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.fc.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.fc.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.fc.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.fc.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.fc.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.fc.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.fc.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.fc.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.fc.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.fc.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.fc.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.fc.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.fc.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.fc.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.fc.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.fc.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.fc.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.fc.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.fc.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.fc.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.fc.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.fc.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.fc.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.fc.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.fc.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.fc.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.fc.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.fc.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.fc.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.fc.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.fc.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.fc.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.fc.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.fc.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.fc.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.fc.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.fc.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.fc.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.fc.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.fc.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.fc.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.fc.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.fc.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.fc.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.fc.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.fc.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.fc.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.fc.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.fc.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.fc.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.fc.Wyoming]: () => w.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var V = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(V);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = A.a.wrapped(E.a, "_Dropdown", Q.a),
				te = Object(k.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === b.A.UnitedStates
				},
				ae = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.fc.AllStates
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
						e(Object(h.b)(t)), e(Object(l.w)(b.A.UnitedStates + "_" + n))
					}
				}));
			var ce = A.a.wrapped(se(le(e => {
				const t = `${e.baseUrl}?${K.j}=${b.A.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(q, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(y.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.fc).map(n => {
					const a = b.fc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.fc.AllStates ? t : `${t}_${e}`)(a), oe(a))
					}, r.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.sort === a ? e.rowSelectedClassName : void 0),
						displayText: Z(a),
						isSelected: e.sort === a
					}))
				}))))
			})), "Component", Q.a);
			const de = {
				[b.A.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.A.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.A.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.A.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.A.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.A.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.A.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.A.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.A.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.A.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.A.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.A.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.A.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.A.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.A.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.A.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.A.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.A.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.A.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.A.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.A.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.A.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.A.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.A.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.A.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.A.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.A.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.A.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.A.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.A.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.A.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.A.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.A.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.A.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.A.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.A.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
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
			const be = "CountrySort--CountrySortPicker",
				he = Object(d.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(L.b)(be)
				});
			var _e = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(_.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(_.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[S.b.FeedLoadReason]: S.a.GeoModeChange
						})), e(Object(l.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = ae(e.sort),
						a = `${e.baseUrl}?${K.j}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(s.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(W, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(q, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(y.a.Consumer, null, n => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(n => {
						const o = b.A[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${a}${oe(o)}`, o)
						}, r.a.createElement(x.b, {
							className: Object(s.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === b.A.UnitedStates && r.a.createElement(ce, {
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
				Se = n("./src/reddit/components/TimeSort/index.m.less"),
				ge = n.n(Se);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(k.a)(E.a),
				xe = A.a.div("ListingSortContainer", ge.a),
				ve = Object(d.u)(),
				Ce = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Oe = ve(Object(o.b)(Ce, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(xe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(W, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(q, {
					className: e.buttonClassName,
					displayText: Object(g.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(y.a.Consumer, null, t => r.a.createElement(Ee, ye({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ic.HOUR, b.ic.DAY, b.ic.WEEK, b.ic.MONTH, b.ic.YEAR, b.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = ke.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						a = Object(p.a)(n, {
							[K.E]: t
						}),
						o = a.split("?")[0],
						i = `${a.replace(o+"?","")}`;
					return r.a.createElement(x.b, {
						className: Object(s.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(g.b)(t),
						href: {
							pathname: o,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(C.d)(t))
						}
					})
				}))))))),
				Ne = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				De = n("./src/reddit/selectors/meta.ts"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Pe = n.n(Te);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([b.X.CONTROVERSIAL, b.X.TOP]),
				Be = new Set([b.X.CONTROVERSIAL, b.X.RISING]),
				Re = new Set([b.X.CONTROVERSIAL]),
				Ue = "ListingSort--Overflow",
				Fe = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				He = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, N.a, D.k, d.F, j.a, De.i, (e, t, n, a, r, o, s) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: s
					};
					const i = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (t && (a || n) || r && n) && i.unshift(b.X.BEST), r && o && i.splice(3, 0, b.X.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: s
					}
				});
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: a
						} = this.props, o = a ? Object(p.a)(n, {
							sort: e
						}) : Object(v.a)(n, `${e}/`), i = o.split("?")[0], l = a ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(je.t, {
							className: Object(s.a)(Pe.a.SortLink, e === t && Pe.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => r.a.createElement(F, Ie({}, n, {
								className: Object(s.a)(Pe.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(g.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[S.b.FeedLoadReason]: S.a.SortChange
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
						} = this.props, s = a && !!n && e === b.X.HOT && o === b.X.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), s && r.a.createElement(_e, {
							baseUrl: Ne.c[Ne.b.Popular],
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
						locale: a
					} = this.props;
					return !a.startsWith("en") && (n ? e === b.X.AWARDED && (t === b.X.HOT || t === b.X.TOP) : e === b.X.BEST && t === b.X.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.X.TOP, b.X.NEW]);
					return Re.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Be.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: a,
						sortOptions: o,
						timeSort: i
					} = this.props, l = !t && Ae.has(a), c = Be.has(a), d = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== a);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Y, Ie({}, this.props, {
						buttonClassName: Pe.a.DropdownButton,
						className: Object(s.a)(Pe.a.SortDropdown, e),
						rowClassName: Pe.a.DropdownRow,
						rowIconClassName: Pe.a.DropdownRowIcon,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(s.a)(Pe.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(a), l && r.a.createElement(Oe, {
						buttonClassName: Pe.a.DropdownButton,
						className: Pe.a.TimeSort,
						dropdownClassName: Pe.a.Dropdown,
						listingSort: a,
						onChange: n,
						rowClassName: Pe.a.DropdownRow,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						timeSort: i || b.jc,
						wrapperClassName: Pe.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(Y, Ie({}, this.props, {
						className: Object(s.a)(Pe.a.SortOverflow, e),
						dropdownClassName: Pe.a.Dropdown,
						dropdownId: Ue,
						rowClassName: Pe.a.DropdownRow,
						rowIconClassName: Pe.a.DropdownRowIcon,
						rowSelectedClassName: Pe.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Pe.a.SortOverflowButton,
						id: Ue
					}, r.a.createElement(Le.a, {
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
						disabled: a = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: l,
						subredditId: c,
						timeSort: d,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(s.a)(Xe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(We, {
						baseUrl: e,
						disabled: a,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && r.a.createElement(m.a, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
				f = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/selectors/telemetry.ts");
			const w = "nsfw_dialog";
			var k = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const S = `${i.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				g = `${i.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				y = {
					d2x_nsfw_signup_blocking_de_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${i.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				E = e => {
					const t = Object(o.d)(),
						n = Object(b.b)();
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.mainCta)
					}, r.a.createElement("img", {
						src: S
					}), r.a.createElement("div", {
						className: u.a.cta
					}, (() => m.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), r.a.createElement("div", {
						className: u.a.contentTitle
					}, e.contentTitle), r.a.createElement("div", {
						className: u.a.warning
					}, (() => m.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), r.a.createElement("div", {
						className: u.a.buttonContainer
					}, r.a.createElement(f.j, {
						className: Object(l.a)(u.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(_.n)(e),
								source: "xpromo",
								action: "click",
								noun: w
							}))()), t(Object(p.i)())
						}
					}, (() => m.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), r.a.createElement(f.j, {
						className: u.a.cancel,
						onClick: () => {
							n((() => e => ({
								...Object(_.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: w
							}))()), t(Object(s.b)("/"))
						}
					}, (() => m.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				x = e => r.a.createElement("div", {
					className: u.a.qrCodeOuter
				}, r.a.createElement("div", {
					className: u.a.qrCodeInner
				}, r.a.createElement("img", {
					className: u.a.qrCode,
					src: e.qrCodeAsset
				}), r.a.createElement("div", {
					className: u.a.copyLine1
				}, (() => m.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), r.a.createElement("div", {
					className: u.a.copyLine2
				}, (() => m.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), r.a.createElement("img", {
					className: u.a.sneakySnoo,
					src: g
				}))),
				v = e => {
					const t = Object(b.b)();
					r.a.useEffect(() => {
						t((() => e => ({
							...Object(_.n)(e),
							source: "xpromo",
							action: "view",
							noun: w
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, a = Object(o.e)(k.b) === h.lc.Enabled ? y.d2x_nsfw_signup_blocking_de_v1 : y.d2x_nsfw_signup_blocking_non_us_v1;
					return r.a.createElement("div", {
						className: u.a.container
					}, r.a.createElement(E, {
						contentTitle: n
					}), r.a.createElement("div", {
						className: u.a.footerWrapper
					}, r.a.createElement(c.a, null)), r.a.createElement(x, {
						qrCodeAsset: a
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
					[r.X.BEST]: () => a.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.X.HOT]: () => a.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.X.NEW]: () => a.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.X.CONTROVERSIAL]: () => a.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.X.RISING]: () => a.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.X.TOP]: () => a.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.X.AWARDED]: () => a.fbt._("Awarded", null, {
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
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(s);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: n,
					...a
				} = e;
				return r.a.createElement("svg", l({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a), r.a.createElement("path", {
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
				s = n("./src/reddit/icons/fonts/index.tsx");
			var i = e => r.a.createElement("svg", {
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
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/pages/ProfileBlockInterstitial/index.m.less"),
				d = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(o.i)(e => {
				let {
					username: t,
					avatar: n,
					history: a,
					location: o
				} = e;
				return r.a.createElement("div", {
					className: d.a.container
				}, r.a.createElement(i, {
					className: d.a.accent
				}), r.a.createElement("div", {
					className: d.a.avatarContainer
				}, r.a.createElement("img", {
					className: d.a.avatar,
					src: null != n ? n : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
					alt: u._("Blocked user avatar", null, {
						hk: "V2K4Y"
					})
				}), r.a.createElement("div", {
					className: d.a.avatarIconContainer
				}, r.a.createElement(s.a, {
					name: "kick_fill",
					className: d.a.avatarBlockIcon,
					isFilled: !0
				}))), r.a.createElement("h3", {
					className: d.a.title
				}, u._("u/{name} is blocked", [u._param("name", t)], {
					hk: "18rExM"
				})), r.a.createElement("p", {
					className: d.a.subtitle
				}, u._("Are you sure you want to continue to their profile?", null, {
					hk: "1UmYAf"
				})), r.a.createElement("div", {
					className: d.a.btnContainer
				}, r.a.createElement(l.t, {
					className: d.a.btn,
					to: `${o.pathname}?consent=true`,
					kind: l.b.InternalLink,
					priority: l.c.Primary,
					size: l.d.L,
					isFullWidth: !0,
					isSquare: !0
				}, u._("Continue", null, {
					hk: "3eqDZf"
				})), r.a.createElement(l.t, {
					className: d.a.btn,
					to: "#",
					kind: l.b.InternalLink,
					priority: l.c.Secondary,
					size: l.d.L,
					onClick: () => a.goBack(),
					isFullWidth: !0,
					isSquare: !0
				}, u._("Go Back", null, {
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
			var a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const l = Object(a.a)(s.g, s.d, i.e, (e, t, n) => !e && !t && !n);

			function c(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: l,
					expEventOverride: t
				})
			}
			const d = c(r.Qb, !0),
				u = c(r.Qb, !1),
				m = c(r.Rb, !0),
				p = (c(r.Rb, !1), Object(a.a)(d, m, (e, t) => e === r.lc.Enabled || t === r.mc.Enabled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.da6794f4f6e3ce13d0ed.js.map