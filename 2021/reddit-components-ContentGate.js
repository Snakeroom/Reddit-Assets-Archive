// https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.6cbaf3f87915b224e876.js
// Retrieved at 3/12/2021, 8:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
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
					style: t
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
			var a = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				d = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				_ = n("./src/reddit/components/Footer/index.m.less"),
				b = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.div("FooterContainer", b.a), v = c.a.div("UserAgreement", b.a), g = c.a.a("UserAgreementLink", b.a), y = c.a.a("PrivacyLink", b.a);
			var f = () => o.a.createElement(E, null, o.a.createElement(v, null, k._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [k._param("=User Agreement", o.a.createElement(g, {
					href: `${a.a.redditUrl}/help/useragreement`
				}, k._("User Agreement", null, {
					hk: "2srkM2"
				}))), k._param("=Privacy Policy", o.a.createElement(y, {
					href: `${a.a.redditUrl}/help/privacypolicy`
				}, k._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), k._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				L = n("./src/reddit/components/RichTextJson/index.tsx"),
				S = n("./node_modules/lodash/flatMap.js"),
				w = n.n(S),
				B = n("./src/lib/linkMatchers/index.ts"),
				C = n("./src/lib/linkMatchers/customLinks.ts"),
				R = n("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, o] = t.slice(a, a + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var j = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = w()(t, P)), e.parseRegularLinks && (t = w()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = B.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return o.a.createElement(R.b, {
								className: e.linkClassName,
								href: a,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				q = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var M = e => o.a.createElement(O.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = n("./src/reddit/models/ContentGate.ts"),
				U = n("./src/reddit/selectors/experiments/requestToJoinPrivateCommunities.ts"),
				N = n("./src/reddit/selectors/meta.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/ContentGate/index.m.less"),
				z = n.n(G);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = c.a.wrapped(M, "PrivateKey", z.a), K = c.a.div("ButtonsContainer", z.a), J = c.a.div("Container", z.a), Y = c.a.div("Description", z.a), Z = c.a.div("PrivateSubredditDetails", z.a), X = c.a.div("PrivateSubredditDescription", z.a), V = c.a.h3("PrivateSubredditName", z.a), Q = c.a.a("Link", z.a), $ = c.a.wrapped(D.k, "LinkRouterButton", z.a), ee = c.a.wrapped(D.j, "LinkButton", z.a), te = c.a.wrapped(D.n, "SecondaryLinkRouterButton", z.a), ne = c.a.wrapped(D.m, "SecondaryLinkButton", z.a), ae = c.a.wrapped($, "GoHomeLinkButton", z.a), re = c.a.img("Image", z.a), oe = c.a.img("ImagePlaceholder", z.a), se = c.a.wrapped($, "LeftLinkRouterButton", z.a), ie = c.a.wrapped(ee, "LeftLinkButton", z.a), le = c.a.wrapped(ne, "SecondaryLeftLinkButton", z.a), ce = c.a.wrapped(te, "SecondaryLeftLinkRouterButton", z.a), ue = c.a.h3("Title", z.a), de = c.a.div("PageBody", z.a), me = c.a.div("QuarantineMessageWrapper", z.a), he = Object(l.c)({
				isLoggedIn: H.I,
				isRequestToJoinPrivateCommunitiesEnabled: U.a,
				origin: N.i,
				user: H.i
			}), pe = Object(q.t)(), _e = Object(s.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(d.l)())
				}
			})), be = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: s,
					isRequestToJoinPrivateCommunitiesEnabled: i,
					isContributorRequestsDisabled: l,
					location: c,
					origin: m,
					pageLayer: _,
					quarantineRequiresEmail: b,
					quarantineMessage: k,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: v,
					setNSFWPreference: g,
					subredditDescription: y,
					subredditName: f,
					user: S
				} = e, w = async () => {
					s ? await g() : await Object(d.k)(), window.location.reload()
				};
				switch (n) {
					case F.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ue, null, I._("r/{community name} is a Reddit Premium community", [I._param("community name", f)], {
							hk: "2lyDwB"
						})), o.a.createElement(Y, null, I._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(K, null, S ? o.a.createElement(le, {
							href: `${a.a.redditUrl}/premium`
						}, I._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ie, {
							href: Object(u.a)(c, m)
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? o.a.createElement($, {
							to: "/"
						}, I._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ne, {
							href: Object(u.a)(c, m)
						}, I._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ue, null, n === F.a.Nsfw ? I._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : I._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Y, null, I._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(K, null, o.a.createElement(se, {
							to: "/"
						}, I._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ne, {
							onClick: w
						}, I._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(W, null), o.a.createElement(ue, null, "r/", f, " ", I._("is a private community", null, {
							hk: "7zZmq"
						})), y && y.length && o.a.createElement(Z, null, o.a.createElement(V, null, "r/", f), o.a.createElement(X, null, o.a.createElement("div", null, y))), o.a.createElement(Y, null, I._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", f, " ", I._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), I._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(K, null, S ? o.a.createElement(o.a.Fragment, null, !l && i && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: z.a.ContributorRequestButton
						}), o.a.createElement(le, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${f}`
						}, I._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(le, {
							href: Object(u.a)(c, m)
						}, I._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement($, {
							to: "/"
						}, I._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case F.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ue, null, I._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Y, null, I._("This community is {=quarantined}", [I._param("=quarantined", o.a.createElement(Q, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, I._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(me, null, v ? o.a.createElement(L.a, {
							content: v,
							rtJsonElementProps: {
								pageLayer: _
							}
						}) : E ? o.a.createElement(x.a, {
							html: E
						}) : k || I._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), I._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(K, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(K, null, o.a.createElement(ce, {
								to: "/"
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								href: `${a.a.redditUrl}/prefs/update`
							}, I._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(K, null, o.a.createElement(se, {
								to: "/"
							}, I._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ne, {
								onClick: t
							}, I._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, r, b)));
					case F.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ue, null, I._("r/{community name} has been banned from Reddit", [I._param("community name", f)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Y, null, e ? o.a.createElement(j, {
							linkClassName: z.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : I._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(K, null, o.a.createElement($, {
							to: "/"
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(K, null, o.a.createElement($, {
							to: "/"
						}, I._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(oe, null), o.a.createElement(ue, null, I._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Y, null, I._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(K, null, S && o.a.createElement(p.a, {
							eventSource: "content_gate"
						}), o.a.createElement(ae, {
							to: "/"
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return I._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return I._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, I._("This account has been {=suspended} .", [I._param("=suspended", o.a.createElement(Q, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, I._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ue, null, I._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Y, null, I._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(K, null, o.a.createElement(ae, {
							to: "/"
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, I._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(K, null, o.a.createElement(ae, {
							to: "/"
						}, I._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ue, null, I._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(K, null, o.a.createElement($, {
							to: "/"
						}, I._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(_e(Object(i.i)(e => o.a.createElement(J, null, o.a.createElement("div", null, o.a.createElement(de, null, be(e))), o.a.createElement(f, null)))))
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
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = n.n(_),
				k = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				v = k.a.wrapped(c.c, "StyledTooltip", b.a),
				g = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(p.fb)(e),
					userIsSuspended: p.O
				});
			t.a = Object(s.b)(g, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(h.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: E
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: s,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: c
			}) => o.a.createElement(d.l, {
				className: e,
				disabled: c || l,
				onClick: () => s(i),
				onMouseEnter: n,
				onMouseLeave: r,
				id: E,
				isFullWidth: !0
			}, a.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), l ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: E,
				text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: E,
				text: a.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ContentGate.6cbaf3f87915b224e876.js.map