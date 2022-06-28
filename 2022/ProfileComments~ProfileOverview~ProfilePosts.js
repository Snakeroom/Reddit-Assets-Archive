// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.b7e284ac3c4b859f53f1.js
// Retrieved at 6/28/2022, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePosts", "reddit-components-ContentGate"], {
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
				k = n("./src/reddit/components/RichTextJson/index.tsx"),
				w = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				g = n("./node_modules/lodash/flatMap.js"),
				v = n.n(g),
				E = n("./src/lib/linkMatchers/index.ts"),
				y = n("./src/lib/linkMatchers/customLinks.ts"),
				C = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				x = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let a = 0; a < t.length; a += 3) {
						const [e, r, o] = t.slice(a, a + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var N = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = v()(t, x)), e.parseRegularLinks && (t = v()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(y.g.subreddit.prefix, y.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let a = null;
						for (const r of t) n.push(e.slice(a ? a.lastIndex : 0, r.index)), a = r, n.push([r.url, r.text]);
						return a && n.push(e.slice(a.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [a, r] = t;
							return o.a.createElement(C.b, {
								className: e.linkClassName,
								href: a,
								key: n
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				O = n("./src/reddit/constants/parameters.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => o.a.createElement(P.a, I({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = n("./src/reddit/models/ContentGate.ts"),
				B = n("./src/lib/constants/index.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/selectors/meta.ts"),
				U = n("./src/reddit/components/ContentGate/index.m.less"),
				F = n.n(U);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = d.a.wrapped(T, "PrivateKey", F.a), H = d.a.div("ButtonsContainer", F.a), q = d.a.div("Container", F.a), G = d.a.div("ContainerExp", F.a), Y = d.a.div("Description", F.a), Z = d.a.div("PrivateSubredditDetails", F.a), K = d.a.div("PrivateSubredditDescription", F.a), V = d.a.h3("PrivateSubredditName", F.a), J = d.a.a("Link", F.a), X = d.a.wrapped(L.n, "LinkRouterButton", F.a), Q = d.a.wrapped(L.m, "LinkButton", F.a), $ = d.a.wrapped(L.q, "SecondaryLinkRouterButton", F.a), ee = d.a.wrapped(L.p, "SecondaryLinkButton", F.a), te = d.a.wrapped(X, "GoHomeLinkButton", F.a), ne = d.a.wrapped(b.a, "CreateCommunityButton", F.a), ae = d.a.img("Image", F.a), re = d.a.img("ImagePlaceholder", F.a), oe = d.a.wrapped(X, "LeftLinkRouterButton", F.a), se = d.a.wrapped(Q, "LeftLinkButton", F.a), ie = d.a.wrapped(ee, "SecondaryLeftLinkButton", F.a), le = d.a.wrapped($, "SecondaryLeftLinkRouterButton", F.a), ce = d.a.h3("Title", F.a), de = d.a.div("PageBody", F.a), ue = d.a.div("InterstitialMessageWrapper", F.a), me = Object(c.c)({
				isLoggedIn: A.P,
				origin: W.j,
				user: A.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(A.Q)(e)) return !1;
					const t = Object(R.d)(e);
					if (!t) return !1;
					const n = Object(A.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: a
					} = n;
					if (!a) return !1;
					const r = 30 * B.B;
					return a > Date.now() - r
				})(e),
				isSeo: W.g
			}), pe = Object(j.u)(), he = Object(s.b)(me, (e, t) => {
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
			}), be = e => {
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
					quarantineRequiresEmail: g,
					quarantineMessage: v,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: y,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: S,
					interstitialWarningMessageRTJson: x,
					setNSFWPreference: j,
					subredditDescription: L,
					subredditName: P,
					user: I
				} = e, T = async () => {
					if (i ? await j() : await Object(m.n)(), d) {
						const e = new URL(window.location.href);
						e.searchParams.set(O.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case D.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ce, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", P)], {
							hk: "2lyDwB"
						})), o.a.createElement(Y, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(H, null, I ? o.a.createElement(ie, {
							href: `${a.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(se, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), I ? o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ce, null, n === D.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Y, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(H, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: T,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(z, null), o.a.createElement(ce, null, "r/", P, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), L && L.length && o.a.createElement(Z, null, o.a.createElement(V, null, "r/", P), o.a.createElement(K, null, o.a.createElement("div", null, L))), o.a.createElement(Y, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(H, null, I ? o.a.createElement(o.a.Fragment, null, !l && o.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: F.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), o.a.createElement(ie, {
							href: `${a.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && o.a.createElement(w.a, {
							subredditName: P
						}));
					case D.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ce, null, M._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Y, null, M._("This community is {=quarantined}", [M._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, M._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, y ? o.a.createElement(k.b, {
							content: y,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : E ? o.a.createElement(_.a, {
							html: E
						}) : v || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), M._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(H, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(H, null, o.a.createElement(le, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Q, {
								href: `${a.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(H, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, M._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(I, r, g)));
					case D.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ce, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(Y, null, o.a.createElement(ue, null, x ? o.a.createElement(k.b, {
							content: x,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : S ? o.a.createElement(_.a, {
							html: S
						}) : C), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(H, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: s,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case D.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ce, null, M._("r/{community name} has been banned from Reddit", [M._param("community name", P)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Y, null, e ? o.a.createElement(N, {
							linkClassName: F.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(ce, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Y, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(H, null, I && o.a.createElement(ne, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Y, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(H, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(H, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ae, {
							src: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(H, null, o.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(he(Object(i.i)(e => {
				const t = Object(r.useContext)(l.a) ? G : q;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(de, null, be(e))), o.a.createElement(f.b, null))
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
				k = n("./src/lib/lessComponent.tsx");
			const w = "create-community-button",
				g = k.a.wrapped(d.c, "StyledTooltip", _.a),
				v = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.pb)(e),
					userIsSuspended: b.X
				});
			t.a = Object(s.b)(v, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(l.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
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
					id: w,
					isFullWidth: !0
				}, a.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: w,
					text: a.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: w,
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
				k = n.n(_);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = () => o.a.createElement("div", {
				className: k.a.container
			}, o.a.createElement(f.a, {
				className: k.a.hideIcon
			}), o.a.createElement("h3", {
				className: k.a.title
			}, w._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: k.a.subtitle
			}, w._("You can only look at your own saved posts and comments", null, {
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
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				E = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				y = n.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				x = "LayoutSwitch--picker",
				N = Object(l.a)(_.a),
				O = {
					[h.d.Card]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
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
					dropdownIsOpen: Object(v.b)(x),
					postLayout: b.S,
					redditStyle: b.D
				}),
				I = Object(s.b)(P, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: x
					}))
				}));
			class T extends o.a.Component {
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
							screen: Object(g.Z)(t),
							subreddit: Object(g.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: a,
							postLayout: r
						} = this.props, s = n || h.e[r], i = e === s, l = O[e], d = j[e];
						return o.a.createElement(k.b, C({}, t, {
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
						return o.a.createElement(N, C({}, e, {
							className: y.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: y.a.DropdownRow,
							rowIconClassName: y.a.DropdownRowIcon,
							rowSelectedClassName: y.a.DropdownRowSelected,
							tooltipId: x
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
						id: S
					}, o.a.createElement("div", {
						className: y.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: x,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = L(I(Object(p.c)(Object(d.a)(T))))
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
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/constants/history.ts"),
				v = n("./src/reddit/constants/listingSorts.ts"),
				E = n("./src/reddit/contexts/Tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/helpers/trackers/navigation.ts"),
				N = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(T),
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
			const A = "ListingSort--SortPicker",
				W = Object(w.a)(B.a.wrapped(y.a, "Dropdown", D.a)),
				U = B.a.wrapped(I.a, "ListingSortIcon", D.a),
				F = (B.a.wrapped(N.b, "DropdownTriangle", D.a), B.a.div("Title", D.a)),
				M = B.a.wrapped(e => r.a.createElement(C.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				z = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", R({}, n, {
						className: Object(s.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				H = B.a.div("DropdownRowDisabled", D.a),
				q = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				G = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: O.a,
					user: P.k,
					dropdownIsOpen: (e, t) => Object(L.b)(t.dropdownId || A)(e),
					isPopularPage: d.F
				}),
				Y = Object(o.b)(G, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: a
					} = t;
					return {
						onOpenDropdown: () => e(Object(_.h)({
							tooltipId: n || A
						}))
					}
				});
			var Z = B.a.wrapped(q(Y(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(F, null, k.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(z, {
					disabled: e.disabled
				}, e.children || r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(v.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(U, {
					sort: e.sort
				}))), r.a.createElement(E.a.Consumer, null, t => r.a.createElement(W, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(H, null, k.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, a, r) => {
					const o = [h.W.HOT, h.W.NEW, h.W.TOP, h.W.RISING];
					return (e && (n || a) || t && a) && o.unshift(h.W.BEST), t && r && o.splice(3, 0, h.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(S.a)(e.baseUrl, `${t}/`),
						a = n.split("?")[0],
						o = e.isProfilePage ? n.replace(a + "?", "") : void 0;
					return r.a.createElement(C.b, {
						className: Object(s.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(v.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(x.b)(t))
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
					}, r.a.createElement(U, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", D.a),
				K = n("./src/reddit/constants/parameters.ts");
			const V = e => {
					const t = J[e];
					return t && t() || ""
				},
				J = {
					[h.fc.AllStates]: () => k.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[h.fc.Alaska]: () => k.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.fc.Alabama]: () => k.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.fc.Arkansas]: () => k.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.fc.Arizona]: () => k.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.fc.California]: () => k.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.fc.Colorado]: () => k.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.fc.Connecticut]: () => k.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.fc.DistrictOfColumbia]: () => k.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.fc.Delaware]: () => k.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.fc.Florida]: () => k.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.fc.Georgia]: () => k.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.fc.Hawaii]: () => k.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.fc.Iowa]: () => k.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.fc.Idaho]: () => k.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.fc.Illinois]: () => k.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.fc.Indiana]: () => k.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.fc.Kansas]: () => k.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.fc.Kentucky]: () => k.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.fc.Louisiana]: () => k.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.fc.Massachusetts]: () => k.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.fc.Maryland]: () => k.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.fc.Maine]: () => k.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.fc.Michigan]: () => k.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.fc.Minnesota]: () => k.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.fc.Missouri]: () => k.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.fc.Mississippi]: () => k.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.fc.Montana]: () => k.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.fc.NorthCarolina]: () => k.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.fc.NorthDakota]: () => k.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.fc.Nebraska]: () => k.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.fc.NewHampshire]: () => k.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.fc.NewJersey]: () => k.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.fc.NewMexico]: () => k.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.fc.Nevada]: () => k.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.fc.NewYork]: () => k.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.fc.Ohio]: () => k.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.fc.Oklahoma]: () => k.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.fc.Oregon]: () => k.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.fc.Pennsylvania]: () => k.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.fc.RhodeIsland]: () => k.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.fc.SouthCarolina]: () => k.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.fc.SouthDakota]: () => k.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.fc.Tennessee]: () => k.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.fc.Texas]: () => k.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.fc.Utah]: () => k.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.fc.Virginia]: () => k.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.fc.Vermont]: () => k.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.fc.Washington]: () => k.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.fc.Wisconsin]: () => k.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.fc.WestVirginia]: () => k.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.fc.Wyoming]: () => k.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var X = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(X);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = B.a.wrapped(y.a, "_Dropdown", Q.a),
				te = Object(w.a)(ee),
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
				const t = `${e.baseUrl}?${K.g}=${h.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(z, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : V(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(E.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(h.fc).map(n => {
					const a = h.fc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.fc.AllStates ? t : `${t}_${e}`)(a), oe(a))
					}, r.a.createElement(C.b, {
						className: Object(s.a)(e.rowClassName, e.sort === a ? e.rowSelectedClassName : void 0),
						displayText: V(a),
						isSelected: e.sort === a
					}))
				}))))
			})), "Component", Q.a);
			const de = {
				[h.z.Everywhere]: () => k.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.z.UnitedStates]: () => k.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.z.Argentina]: () => k.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.z.Australia]: () => k.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.z.Bulgaria]: () => k.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.z.Canada]: () => k.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.z.Chile]: () => k.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.z.Colombia]: () => k.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.z.Croatia]: () => k.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.z.CzechRepublic]: () => k.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.z.Finland]: () => k.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.z.France]: () => k.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.z.Germany]: () => k.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.z.Greece]: () => k.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.z.Hungary]: () => k.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.z.Iceland]: () => k.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.z.India]: () => k.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.z.Ireland]: () => k.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.z.Italy]: () => k.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.z.Japan]: () => k.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.z.Malaysia]: () => k.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.z.Mexico]: () => k.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.z.NewZealand]: () => k.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.z.Philippines]: () => k.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.z.Poland]: () => k.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.z.Portugal]: () => k.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.z.PuertoRico]: () => k.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.z.Romania]: () => k.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.z.Serbia]: () => k.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.z.Singapore]: () => k.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.z.Spain]: () => k.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.z.Sweden]: () => k.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.z.Taiwan]: () => k.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.z.Thailand]: () => k.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.z.Turkey]: () => k.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.z.UnitedKingdom]: () => k.fbt._("United Kingdom", null, {
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
						a = `${e.baseUrl}?${K.g}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(s.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(he) : e.onOpenDropdown(he)
					}, r.a.createElement(z, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.z.Everywhere]())(),
						id: he,
						showDropdownTriangle: !0
					})), r.a.createElement(E.a.Consumer, null, n => r.a.createElement(te, pe({
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
						}, r.a.createElement(C.b, {
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
				ke = n("./node_modules/path-browserify/index.js"),
				we = n.n(ke),
				ge = n("./src/reddit/components/TimeSort/index.m.less"),
				ve = n.n(ge);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(w.a)(y.a),
				Ce = B.a.div("ListingSortContainer", ve.a),
				Se = Object(d.u)(),
				xe = Object(f.c)({
					dropdownIsOpen: Object(L.b)("TimeSort--SortPicker")
				});
			var Ne = Se(Object(o.b)(xe, e => ({
					onOpenDropdown: () => e(Object(_.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(z, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(v.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(E.a.Consumer, null, t => r.a.createElement(ye, Ee({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.ic.HOUR, h.ic.DAY, h.ic.WEEK, h.ic.MONTH, h.ic.YEAR, h.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(d.J)(e) || (n = we.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						a = Object(p.a)(n, {
							[K.A]: t
						}),
						o = a.split("?")[0],
						i = `${a.replace(o+"?","")}`;
					return r.a.createElement(C.b, {
						className: Object(s.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(v.b)(t),
						href: {
							pathname: o,
							state: {
								[g.b.FeedLoadReason]: g.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(x.d)(t))
						}
					})
				}))))))),
				Oe = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Le = n("./src/reddit/icons/fonts/index.tsx"),
				Pe = n("./src/reddit/selectors/meta.ts"),
				Ie = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Ie);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([h.W.CONTROVERSIAL, h.W.TOP]),
				Re = new Set([h.W.CONTROVERSIAL, h.W.RISING]),
				Ae = new Set([h.W.CONTROVERSIAL]),
				We = "ListingSort--Overflow",
				Ue = Object(d.u)({
					isFrontpage: d.A,
					isProfilePage: d.J,
					pageLayer: e => e
				}),
				Fe = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, O.a, P.k, d.F, j.a, Pe.i, (e, t, n, a, r, o, s) => {
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
			class Me extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(x.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: a
						} = this.props, o = a ? Object(p.a)(n, {
							sort: e
						}) : Object(S.a)(n, `${e}/`), i = o.split("?")[0], l = a ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(je.t, {
							className: Object(s.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => r.a.createElement(U, De({}, n, {
								className: Object(s.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(v.a)(e),
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
							baseUrl: Oe.c[Oe.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
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
					return Ae.has(t) && n.has(e)
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
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, De({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(s.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(s.a)(Te.a.SortButtons, e)
					}, d.map(this.renderSort)), c && this.renderSort(a), l && r.a.createElement(Ne, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: a,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || h.jc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(Z, De({}, this.props, {
						className: Object(s.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: We,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: We
					}, r.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var ze = Ue(Object(o.b)(Fe)(Object(c.c)(Me))),
				He = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				qe = n.n(He);
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
						className: Object(s.a)(qe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(ze, {
						baseUrl: e,
						disabled: a,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: l,
						timeSort: d
					}), !o && r.a.createElement(m.a, {
						className: qe.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = Ge(Ye(Object(c.c)(Ze)))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = Object(u.u)(),
				f = Object(s.c)({
					layout: u.S
				}),
				_ = Object(o.b)(f);
			class k extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * l.l + l.p + l.q,
						t = d.a - e,
						n = l.g - t,
						a = d.a + n + (this.props.bladeOpen ? l.a : 0);
					return this.props.layout !== c.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${a}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${l.g+l.p+l.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${l.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${l.g+l.p+l.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(_(h.a.wrapped(k, "Component", p.a)))
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
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./node_modules/lodash/isEqual.js"),
				s = n.n(o),
				i = n("./node_modules/lodash/throttle.js"),
				l = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/config.ts"),
				b = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/constants/index.ts"),
				k = n("./src/reddit/actions/tooltip.ts"),
				w = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/models/Profile/index.ts"),
				x = n("./src/reddit/featureFlags/index.ts"),
				N = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/selectors/userPrefs.ts"),
				L = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				P = n.n(L);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(v.u)({
					routeName: v.Z,
					privateListingType: v.j
				}),
				D = Object(p.c)({
					isDropdownMenuOpen: e => Object(N.a)(e) === R,
					isOwnProfile: (e, t) => Object(O.W)(e, t.profileName),
					isSnoovatar30Enabled: x.d.snoovatar30,
					isSubscriptionsPinned: j.b
				}),
				B = Object(b.a)(E.a),
				R = "profile-nav-menu-tooltip",
				A = g.g + g.q + g.p;
			var W;
			t.a = T(Object(u.b)(D, e => ({
					toggleTooltip: t => e(Object(k.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: n,
						privateListingType: a,
						profileName: o,
						routeName: i,
						toggleTooltip: u,
						isSnoovatar30Enabled: m,
						isSubscriptionsPinned: p,
						viewBlockedConsent: h
					} = e;
					const [b, _] = Object(c.useState)(!1), k = Object(c.useRef)(null), [v, E] = Object(c.useState)([]), [y, S] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = M({
							profileName: o,
							isOwnProfile: n,
							routeName: i,
							privateListingType: a,
							isSnoovatar30Enabled: m,
							viewBlockedConsent: h
						});
						E(e.filter(e => e.position === W.MENU));
						const t = [],
							c = l()(() => {
								const n = document.documentElement.clientWidth - 2 * g.p,
									a = n > A ? A : n;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const n = e.find(e => e.text.toString().toLowerCase() === t.text);
									n.position = r > a ? W.DROPDOWN : W.MENU
								});
								const o = e.filter(e => e.position === W.MENU);
								E(e => s()(o, e) ? e : o);
								const i = e.filter(e => e.position === W.DROPDOWN);
								S(e => s()(i, e) ? e : i), _(i.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = k.current;
							e && (e.childNodes.forEach((e, n) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), c())
						}), window.addEventListener("resize", c), () => {
							window.removeEventListener("resize", c)
						}
					}, [o, n, i, a, m, h]), d.a.createElement("div", {
						className: P.a.container
					}, d.a.createElement(w.a, {
						bladeOpen: !1,
						offsetLeft: p ? g.t : 0,
						render: () => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
							className: P.a.menuContainer,
							ref: k
						}, v.map(e => d.a.createElement(U, I({}, e, {
							key: e.key
						})))), b && d.a.createElement("button", {
							className: Object(f.a)(P.a.mainLink),
							id: R,
							onClick: () => u(R)
						}, d.a.createElement(C.a, {
							name: "overflow_horizontal"
						})), b && d.a.createElement(B, {
							className: P.a.dropdown,
							isOpen: t,
							tooltipId: R
						}, y.map(e => d.a.createElement(F, I({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(W || (W = {}));
			const U = e => {
					let {
						isActive: t,
						text: n,
						url: a,
						internal: r
					} = e;
					return r ? d.a.createElement(y.default, {
						className: Object(f.a)(P.a.mainLink, {
							[P.a.isActive]: t
						}),
						to: a
					}, n) : d.a.createElement("a", {
						className: Object(f.a)(P.a.mainLink, {
							[P.a.isActive]: t
						}),
						href: a
					}, n)
				},
				F = e => {
					let {
						isActive: t,
						internal: n,
						url: a,
						text: r
					} = e;
					return n ? d.a.createElement(m.a, {
						className: Object(f.a)(P.a.dropdownLink, {
							[P.a.isActive]: t
						}),
						to: a,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : d.a.createElement("a", {
						className: Object(f.a)(P.a.dropdownLink),
						href: a,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, r)
				},
				M = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: r,
						privateListingType: o,
						isSnoovatar30Enabled: s,
						viewBlockedConsent: i
					} = e;
					const l = n ? [{
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.Saved,
						key: "profile.mainmenu.saved",
						text: a.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: a.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: a.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: a.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: W.MENU
					}] : [];
					n ? (l.push({
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: a.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: W.MENU
					}), l.push({
						internal: !0,
						isActive: r === _.Nb.PROFILE_PRIVATE && o === S.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: a.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: W.MENU
					})) : l.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: a.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${h.a.oldRedditUrl}/user/${t}/gilded/`,
						position: W.MENU
					});
					const c = s ? [{
							internal: !0,
							isActive: r === _.Nb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: a.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: W.MENU
						}] : [],
						d = i ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === _.Nb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: a.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${d}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: r === _.Nb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: a.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${d}`,
						position: W.MENU
					}, {
						internal: !0,
						isActive: r === _.Nb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: a.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${d}`,
						position: W.MENU
					}, ...c, ...l]
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
				return O
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
				k = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				w = n("./src/reddit/selectors/telemetry.ts");
			const g = "nsfw_dialog";
			var v = e => s.a.createElement("svg", {
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
				E = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				y = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				C = n.n(y);
			const S = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				x = e => {
					const t = Object(i.d)(),
						n = Object(b.b)(),
						a = Object(i.e)(E.f),
						u = Object(o.useCallback)(() => {
							a === E.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, a]),
						h = (e => e ? s.a.createElement("div", {
							className: C.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), s.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : s.a.createElement("div", {
							className: C.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(a === E.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(k.c)(a)
					}, [a]), s.a.createElement("div", {
						className: Object(d.a)(C.a.mainCta)
					}, s.a.createElement(v, null), h, s.a.createElement("div", {
						className: C.a.contentTitle
					}, e.contentTitle), s.a.createElement("div", {
						className: C.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), s.a.createElement("div", {
						className: C.a.buttonContainer
					}, s.a.createElement(_.j, {
						className: Object(d.a)(C.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(w.n)(e),
								source: "xpromo",
								action: "click",
								noun: g
							}))()), u(), Object(k.b)(k.a.Login), t(Object(m.i)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), s.a.createElement(_.j, {
						className: C.a.cancel,
						onClick: () => {
							Object(c.b)(), n((() => e => ({
								...Object(w.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: g
							}))()), Object(k.b)(k.a.Dismiss), t(Object(l.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				N = Object(u.a)(e => {
					const t = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return s.a.createElement("div", {
						className: C.a.qrCodeOuter
					}, s.a.createElement("div", {
						className: C.a.qrCodeInner
					}, s.a.createElement("img", {
						className: C.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), s.a.createElement("div", {
						className: C.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), s.a.createElement("div", {
						className: C.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), s.a.createElement("img", {
						className: C.a.sneakySnoo,
						src: t
					})))
				}),
				O = e => {
					const t = Object(b.b)();
					s.a.useEffect(() => {
						t((() => e => ({
							...Object(w.n)(e),
							source: "xpromo",
							action: "view",
							noun: g
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, a = Object(i.e)(E.g), r = Object(i.e)(E.h), o = Object(i.e)(E.f), l = o === E.a.Blurred ? h.a.White : o === E.a.NoPreview ? h.a.Grey : void 0;
					return s.a.createElement("div", {
						className: C.a.container
					}, s.a.createElement(x, {
						contentTitle: n
					}), s.a.createElement("div", {
						className: Object(d.a)(C.a.footerWrapper, {
							[C.a.mIsModal]: o === E.a.Blurred
						})
					}, s.a.createElement(h.b, {
						textColor: l
					})), s.a.createElement(N, {
						qrCodeAsset: (() => a === f.Dc.Enabled || r === f.qb.BlurredPreview || r === f.qb.NoPreview ? S.d2x_nsfw_signup_blocking_de_v1 : S.d2x_nsfw_signup_blocking_non_us_v1)()
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts.b7e284ac3c4b859f53f1.js.map