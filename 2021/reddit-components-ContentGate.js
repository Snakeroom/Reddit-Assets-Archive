// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.ad69da3df0b8b6dd6d97.js
// Retrieved at 6/15/2021, 3:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				a = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(a(e, t), 1)
			}
		},
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
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
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
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				_ = n.n(b);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.div("FooterContainer", _.a), y = c.a.div("UserAgreement", _.a), v = c.a.a("UserAgreementLink", _.a), g = c.a.a("PrivacyLink", _.a);
			var f = () => o.a.createElement(E, null, o.a.createElement(y, null, k._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [k._param("=User Agreement", o.a.createElement(v, {
					href: `${r.a.redditUrl}/help/useragreement`
				}, k._("User Agreement", null, {
					hk: "2srkM2"
				}))), k._param("=Privacy Policy", o.a.createElement(g, {
					href: `${r.a.redditUrl}/help/privacypolicy`
				}, k._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), k._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				S = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = n("./node_modules/lodash/flatMap.js"),
				B = n.n(C),
				w = n("./src/lib/linkMatchers/index.ts"),
				L = n("./src/lib/linkMatchers/customLinks.ts"),
				R = n("./src/reddit/controls/OutboundLink/index.tsx");
			const j = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(j);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, a, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, a])
					}
					return n
				};
			var P = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = B()(t, T)), e.parseRegularLinks && (t = B()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = w.f.add(L.g.subreddit.prefix, L.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const a of t) n.push(e.slice(r ? r.lastIndex : 0, a.index)), r = a, n.push([a.url, a.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, a] = t;
							return o.a.createElement(R.b, {
								className: e.linkClassName,
								href: r,
								isSponsored: !1,
								key: n,
								source: null
							}, a)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				q = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var M = e => o.a.createElement(D.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				U = n("./src/reddit/models/ContentGate.ts"),
				F = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var I = n("./src/reddit/selectors/meta.ts"),
				z = n("./src/reddit/components/ContentGate/index.m.less"),
				G = n.n(z);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = c.a.wrapped(M, "PrivateKey", G.a), Z = c.a.div("ButtonsContainer", G.a), Y = c.a.div("Container", G.a), J = c.a.div("Description", G.a), Q = c.a.div("PrivateSubredditDetails", G.a), V = c.a.div("PrivateSubredditDescription", G.a), X = c.a.h3("PrivateSubredditName", G.a), $ = c.a.a("Link", G.a), ee = c.a.wrapped(q.k, "LinkRouterButton", G.a), te = c.a.wrapped(q.j, "LinkButton", G.a), ne = c.a.wrapped(q.n, "SecondaryLinkRouterButton", G.a), re = c.a.wrapped(q.m, "SecondaryLinkButton", G.a), ae = c.a.wrapped(ee, "GoHomeLinkButton", G.a), oe = c.a.wrapped(h.a, "CreateCommunityButton", G.a), se = c.a.img("Image", G.a), ie = c.a.img("ImagePlaceholder", G.a), le = c.a.wrapped(ee, "LeftLinkRouterButton", G.a), ce = c.a.wrapped(te, "LeftLinkButton", G.a), ue = c.a.wrapped(re, "SecondaryLeftLinkButton", G.a), de = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", G.a), me = c.a.h3("Title", G.a), pe = c.a.div("PageBody", G.a), he = c.a.div("QuarantineMessageWrapper", G.a), be = Object(l.c)({
				isLoggedIn: H.J,
				origin: I.j,
				user: H.j,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.K)(e)) return !1;
					const t = Object(N.d)(e);
					if (!t) return !1;
					const n = Object(H.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const a = 30 * F.z;
					return r > Date.now() - a
				})(e)
			}), _e = Object(O.t)(), ke = Object(s.b)(be, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(d.l)())
				}
			})), Ee = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: s,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: l,
					location: c,
					origin: m,
					pageLayer: h,
					quarantineRequiresEmail: b,
					quarantineMessage: _,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: E,
					setNSFWPreference: y,
					subredditDescription: v,
					subredditName: g,
					user: f
				} = e, C = async () => {
					s ? await y() : await Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case U.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(me, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", g)], {
							hk: "2lyDwB"
						})), o.a.createElement(J, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(Z, null, f ? o.a.createElement(ue, {
							href: `${r.a.redditUrl}/premium`
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ce, {
							href: Object(u.a)(c, m)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), f ? o.a.createElement(ee, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(re, {
							href: Object(u.a)(c, m)
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case U.a.Nsfw:
					case U.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(me, null, n === U.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(J, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(Z, null, o.a.createElement(le, {
							to: "/"
						}, W._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(re, {
							onClick: C
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case U.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(K, null), o.a.createElement(me, null, "r/", g, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), v && v.length && o.a.createElement(Q, null, o.a.createElement(X, null, "r/", g), o.a.createElement(V, null, o.a.createElement("div", null, v))), o.a.createElement(J, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", g, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(Z, null, f ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), o.a.createElement(ue, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${g}`
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ue, {
							href: Object(u.a)(c, m)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ee, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case U.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(me, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(J, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement($, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(he, null, E ? o.a.createElement(S.a, {
							content: E,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : k ? o.a.createElement(x.a, {
							html: k
						}) : _ || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(Z, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(Z, null, o.a.createElement(de, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(te, {
								href: `${r.a.redditUrl}/prefs/update`
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(Z, null, o.a.createElement(le, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(re, {
								onClick: t
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(f, a, b)));
					case U.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(me, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", g)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(J, null, e ? o.a.createElement(P, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(Z, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(me, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(Z, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ie, null), o.a.createElement(me, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(J, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(Z, null, f && o.a.createElement(oe, {
							eventSource: "content_gate"
						}), o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.ProfileDoesNotExist:
					case U.a.ProfileDeleted:
					case U.a.ProfileSuspended:
					case U.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(me, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case U.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case U.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case U.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement($, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case U.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(me, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(J, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(Z, null, o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(me, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(Z, null, o.a.createElement(ae, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(me, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(Z, null, o.a.createElement(ee, {
							to: "/"
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = _e(ke(Object(i.i)(e => o.a.createElement(Y, null, o.a.createElement("div", null, o.a.createElement(pe, null, Ee(e))), o.a.createElement(f, null)))))
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
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				h = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				_ = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				y = n.n(E),
				v = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				f = v.a.wrapped(c.c, "StyledTooltip", y.a),
				x = Object(i.c)({
					isInSrCreationEntrypointBehaviorExperiment: _.c,
					isInSrCreationEntrypointCopyExperiment: _.d,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(k.hb)(e),
					userIsSuspended: k.P
				});
			t.a = Object(s.b)(x, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(h.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: n,
				isInSrCreationEntrypointCopyExperiment: a,
				onShowTooltip: s,
				onHideTooltip: i,
				openCommunityCreation: l,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: u,
				userIsSuspended: h
			}) => o.a.createElement(m.q, {
				className: e,
				disabled: h || u,
				onClick: () => n === d.yd.Tabs ? window.open("/subreddits/create", "_blank") : l(c),
				onMouseEnter: s,
				onMouseLeave: i,
				priority: m.b.Secondary,
				id: g,
				isFullWidth: !0
			}, Object(p.a)(a, r.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), u ? o.a.createElement(f, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : h ? o.a.createElement(f, {
				caretOnTop: !0,
				tooltipId: g,
				text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.ad69da3df0b8b6dd6d97.js.map